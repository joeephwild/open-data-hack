// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@tableland/evm/contracts/utils/TablelandDeployments.sol";
import "@tableland/evm/contracts/utils/SQLHelpers.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";

contract Podcasts is ERC721Holder {
    using Counters for Counters.Counter;

    Counters.Counter private _podcastID;

    struct Podcast {
        address owner;
        uint256 amount;
        address[] supporters;
        uint totalSupport;
    }

    uint256 public _tableId;
    string private constant _TABLE_PREFIX = "podcastTable";
    address public owner;

    mapping(address => uint[]) userToPodcasts;
    mapping(address => uint) public supportCount;
    mapping(uint256 => Podcast) uintToPodcast;
    
    event PodcastUploaded(
        uint256 indexed id,
        address indexed owner,
        string ipfsHash
    );

    constructor() {
        owner = msg.sender;
    }

    // create podcast table
    function createPodcastTable() public {
        _tableId = TablelandDeployments.get().create( // creating a table ID
            address(this), // setting it's owner to the address for easy write access
            SQLHelpers.toCreateFromSchema(
                "podcastId integer primary key," // Notice the trailing comma // the primary key of the table
                "ipfsHash text," // Separate lines for readability—but it's a single string // value to be added
                "owner text,"
                "amount bigNumber," // research on big number
                "supporters array,"
                "totalSupport bigNumber,",
                _TABLE_PREFIX // the needed prefix for table (I guess a ttable name)
            )
        );
    }

    //IPFS HASH SHOULD ALSO CONTAIN THE iMAGE LINK AND TITLE
    function uploadPodcast(string memory _ipfsHash, uint256 _amount) external payable {
        require(bytes(_ipfsHash).length > 0, "IPFS hash cannot be empty");
        require(_amount > 0, "Amount must be greater than zero");

        TablelandDeployments.get().mutate(
        address(this),
        _tableId,
        SQLHelpers.toInsert(
        _TABLE_PREFIX,
        _tableId,
        "podcastId,ipfsHash,owner,amount,supporters,totalSupport",
        string.concat(
            Strings.toString(_podcastID.current()),
            ",",
            SQLHelpers.quote(_ipfsHash),
            ",",
            SQLHelpers.quote(Strings.toHexString(msg.sender)),
            ",",
            SQLHelpers.quote(Strings.toString(_amount)),
            ",",
            "[]",
            ",",
            SQLHelpers.quote(Strings.toString(uint256(0)))
                )
            )
        );

        userToPodcasts[msg.sender].push(id);

        _podcastID.increment();

        emit PodcastUploaded(id, msg.sender, _ipfsHash);
    }

    function supportPodcast(uint256 _id) external payable podcastExists(_id) {
        Podcast storage podcast = uintToPodcast[_id];
        require(
            podcast.owner != msg.sender,
            "You cannot support your own podcast"
        );
        require(msg.value == podcast.amount, "You must send the exact amount");

        // update all these value in tableland
        podcast.totalSupport += msg.value;
        payable(podcast.owner).transfer(msg.value);
        supportCount[msg.sender] += 1;
        // check if supporter already exists in the array
        podcast.supporters.push(msg.sender);
    }  
}