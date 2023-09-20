// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@tableland/evm/contracts/utils/TablelandDeployments.sol";
import "@tableland/evm/contracts/utils/SQLHelpers.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";

contract AudioSpace {
    struct Space {
        address owner;
        string title;
        string description;
        string meetingLink;
        uint256 time;
        address[] particpant;
    }

     Space[] public spaces; // Store spaces in an array
    mapping(address => Space) public mappingToSpace;
    mapping(uint256 => Space) public mappingUintToSpace;
    uint256 public spaceCounter;


    function createSpace(
        string memory title_,
        string memory description_,
        string memory meetingLink_,
        uint256 time_
    ) external {
        require(bytes(title_).length > 0, "Title cannot be empty");
        require(bytes(meetingLink_).length > 0, "Meeting link cannot be empty");

        Space storage newSpace = mappingToSpace[msg.sender];
        newSpace.owner = msg.sender;
        newSpace.title = title_;
        newSpace.description = description_;
        newSpace.meetingLink = meetingLink_;
        newSpace.time = time_;

        spaces.push(newSpace); // Add the new space to the array
        mappingUintToSpace[spaceCounter] = newSpace;
        spaceCounter++;
    }

    function enterSpace(uint256 spaceId) external {
        require(spaceId < spaceCounter, "Invalid space ID");
        Space storage space = mappingUintToSpace[spaceId];

        // Check if the sender is not the owner of the space
        require(msg.sender != space.owner, "You are the owner of this space");

        space.participants.push(msg.sender);
    }
}
