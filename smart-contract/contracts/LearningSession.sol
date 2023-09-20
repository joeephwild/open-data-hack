// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@tableland/evm/contracts/utils/TablelandDeployments.sol";
import "@tableland/evm/contracts/utils/SQLHelpers.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";

contract Sessions is ERC721Holder {
    using Counters for Counters.Counter;

    Counters.Counter private _sessionID;

    event SessionCancelled(uint256 indexed sessionId);
    event SessionAccepted(uint256 indexed sessionId);

    event SessionScheduled(
        address indexed mentor,
        address indexed student,
        uint256 fee,
        uint256 indexed id,
        string meetingLink
    );

    uint256 public _tableId;
    string internal _TABLE_PREFIX = "sessionTable";
    string public tableName;
    address public owner;

    struct session {
        address student;
        address mentor;
        uint256 time;
        bool isActive;
    }

    mapping(address => uint) public sessionsAttendedCount;
    mapping(address => uint) public sessionsMentoredCount;

    mapping (uint256 => session) sessions;
    mapping(address => uint) mentorsPrice;

    constructor() {
        owner = msg.sender;
        createSessionTable();
    }

    function createSessionTable() public {
        _tableId = TablelandDeployments.get().create( // creating a table ID
            address(this), // setting it's owner to the address for easy write access
            SQLHelpers.toCreateFromSchema(
                "sessionId integer primary key," // Notice the trailing comma // the primary key of the table
                "mentor text," // Separate lines for readability—but it's a single string // value to be added
                "student text,"
                "isAccepted NUMBER(1),"
                "time text,"
                "meetingLink text,"
                "paymentFee text",
                _TABLE_PREFIX // the needed prefix for table (I guess a ttable name)
            )
        );

        tableName = string(
                abi.encodePacked(
                    _TABLE_PREFIX,
                    "_",
                    Strings.toString(block.chainid),
                    "_",
                    Strings.toString(_tableId)
                )
            );
    }

    function scheduleSession(
        address _mentor,
        string memory _meetingLink,
        uint256 time) external payable {
        require(fetchMentorsPrice(_mentor) != 0, "Invalid Mentor");
        require(msg.value >= fetchMentorsPrice(_mentor), "Cant pay mentor");

        sessions[_sessionID.current()].time = time;
        sessions[_sessionID.current()].isActive = true;

        TablelandDeployments.get().mutate(
        address(this),
        _tableId,
        SQLHelpers.toInsert(
        _TABLE_PREFIX,
        _tableId,
        "sessionId,mentor,student,isAccepted,time,meetingLink,paymentFee",
        string.concat(
            Strings.toString(_sessionID.current()),
            ",",
            SQLHelpers.quote(Strings.toHexString(_mentor)),
            ",",
            SQLHelpers.quote(Strings.toHexString(msg.sender)),
            ",",
            Strings.toString(uint256(0)),
            ",",
            SQLHelpers.quote(Strings.toString(time)),
            ",",
            SQLHelpers.quote(_meetingLink),
            ",",
            SQLHelpers.quote(Strings.toString(msg.value)) // should payment fee == msg.value?
        )
        )
    );

    emit SessionScheduled(
        _mentor,
        msg.sender,
        msg.value,
        _sessionID.current(),
        _meetingLink
    );
    _sessionID.increment();
    }

    function fetchMentorsPrice(address _addr) public view returns (uint) {
        return mentorsPrice[_addr];
    }

    function registerMentorPrice(uint _amount) external {
        require(_amount != 0, "CAnt set zero amount");
        mentorsPrice[msg.sender] = _amount;
    }

    function cancelSession(uint256 _sessionId) external {
        session storage _session = sessions[_sessionId];
        require(
            _session.student == msg.sender || _session.mentor == msg.sender,
            "You are not authorized to make changes to this session"
        );
            // refund the student
            payable(_session.student).transfer(
                fetchMentorsPrice(_session.mentor)
            );

            // make it inactive
            _session.isActive = false;

        emit SessionCancelled(_sessionId);
    }

    function acceptSession(uint256 _sessionId) external {
        session storage _session = sessions[_sessionId];
        require(
            _session.mentor == msg.sender,
            "You are not the mentor of this session"
        );
        require(_session.isActive == false, "Already accepted");
        _session.isActive = true;
        payable(_session.mentor).transfer(fetchMentorsPrice(_session.mentor));
        sessionsMentoredCount[_session.mentor] += 1;
        sessionsAttendedCount[_session.student] += 1;

        // update isAccepted variable in tableland
        string memory setters = string.concat("isAccepted=", "true");
        string memory filters = string.concat("sessionId", SQLHelpers.quote(Strings.toString(_sessionId)));

        TablelandDeployments.get().mutate(
            address(this),
            _tableId,
            SQLHelpers.toUpdate(
                _TABLE_PREFIX,
                _tableId,
                setters,
                filters
            )
        );

        emit SessionAccepted(_sessionId);
    }  

}