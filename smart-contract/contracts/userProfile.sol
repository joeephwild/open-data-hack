// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@tableland/evm/contracts/utils/TablelandDeployments.sol";
import "@tableland/evm/contracts/utils/SQLHelpers.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";

contract UserProfile {
    using Counters for Counters.Counter;

    Counters.Counter private _studentID;
    Counters.Counter private _mentorID;

    mapping (address => bool) isStudent;
    mapping (address => bool) isMentor;

    uint256 public _studentTableId;
    string private constant _STUDENT_TABLE_PREFIX = "studentTable";
    uint256 public _mentorTableId;
    string private constant _MENTOR_TABLE_PREFIX = "mentorTable";
    address public owner;

    constructor() {
        owner = msg.sender;
        createMentorTable();
        createStudentTable();
    }

    // function to create student
    function createStudentTable() public {
        _studentTableId = TablelandDeployments.get().create( // creating a table ID
            address(this), // setting it's owner to the address for easy write access
            SQLHelpers.toCreateFromSchema(
                "studentId integer primary key," // the primary key of the table
                "name text,"
                "nickname text,"
                "additionalInfo text,"
                "profileImage text,"
                "coverImage text",
                _STUDENT_TABLE_PREFIX // the needed prefix for table
            )
        );
    }

    // function to create mentor function
    function createMentorTable() public {
        _mentorTableId = TablelandDeployments.get().create( // creating a table ID
            address(this), // setting it's owner to the address for easy write access
            SQLHelpers.toCreateFromSchema(
                "mentorId integer primary key," // the primary key of the table
                "name text,"
                "nickname text,"
                "experience text,"
                "languages text[],"
                "availability text[],"
                "additionalInfo text,"
                "profileImage text,"
                "coverImage text",
                _MENTOR_TABLE_PREFIX // the needed prefix for table
            )
        );
    }

    // function to add student
    function addStudent(string memory name, string memory nickname, string memory additionalInfo, string memory profileImage, string memory coverImage) public {
        require(isStudent[msg.sender] != true, "You are already a student");

        TablelandDeployments.get().mutate(
        address(this),
        _studentTableId,
        SQLHelpers.toInsert(
        _STUDENT_TABLE_PREFIX,
        _studentTableId,
        "studentId,name,nickname,additionalInfo,profileImage,coverImage",
        string.concat(
            Strings.toString(_studentID.current()),
            ",",
            SQLHelpers.quote(name),
            ",",
            SQLHelpers.quote(nickname),
            ",",              
            SQLHelpers.quote(additionalInfo),
            ",",
            SQLHelpers.quote(profileImage),
            ",",
            SQLHelpers.quote(coverImage)
        )
        )
    );

    isStudent[msg.sender] = true;
    _studentID.increment();
    }

    // function to add student
    function addMentor(string[] memory details, string[] memory languages, string[] memory availability) public {
        require(isMentor[msg.sender] != true, "You are already a Mentor");
        string memory createString = concatWriteQuery(_mentorID.current(), details, languages, availability);
        
        TablelandDeployments.get().mutate(
        address(this),
        _mentorTableId,
        SQLHelpers.toInsert(
        _MENTOR_TABLE_PREFIX,
        _mentorTableId,
        "mentorId,name,nickname,experience,languages,availability,additionalInfo,profileImage,coverImage",
        createString
        )
    );

    isMentor[msg.sender] = true;
    _mentorID.increment();
    }

    function concatArray(string[] memory items) public pure returns (string memory) {
        string memory queryString;
        for (uint i = 0; i < items.length; i++) {
            if (i == 0) {
            queryString = string.concat(
                "{", items[i], ","
            );
            } else if(i == (items.length - 1)) {
            queryString = string.concat(
                queryString,
                items[i], "}"
            );
            }
            else {
            queryString = string.concat(
                queryString,
                items[i], ","
            );
            }
        }
        return queryString;
    }

    function concatWriteQuery(uint256 id, string[] memory details, string[] memory languages, string[] memory availability) public pure returns(string memory queryString) {
        require(details.length > 5, "array too short");
        string memory languageString = concatArray(languages);
        string memory availabilityString = concatArray(availability);

        for (uint i = 0; i < details.length; i++) {
            if (i == 0) {
            queryString = string.concat(
                Strings.toString(id),
                ",",
                SQLHelpers.quote(details[0])
            );
            } else if(i == 2) {
            queryString = string.concat(
                queryString,
                SQLHelpers.quote(details[i]),
                SQLHelpers.quote(languageString),
                ",",
                SQLHelpers.quote(availabilityString),
                ","
            );
            } else if(i == (details.length - 1)) {
            queryString = string.concat(
                queryString,
                SQLHelpers.quote(details[i])
            );
            }
            else {
            queryString = string.concat(
                queryString,
                SQLHelpers.quote(details[i]), ","
            );
            }
        }
    }
}