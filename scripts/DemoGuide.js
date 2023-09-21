import { Database } from "@tableland/sdk";
import { ethers } from "ethers";

const contractABI = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "chainid",
        "type": "uint256"
      }
    ],
    "name": "ChainNotSupported",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "sessionId",
        "type": "uint256"
      }
    ],
    "name": "SessionAccepted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "sessionId",
        "type": "uint256"
      }
    ],
    "name": "SessionCancelled",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "mentor",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "student",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "fee",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "meetingLink",
        "type": "string"
      }
    ],
    "name": "SessionScheduled",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "_tableId",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_sessionId",
        "type": "uint256"
      }
    ],
    "name": "acceptSession",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_sessionId",
        "type": "uint256"
      }
    ],
    "name": "cancelSession",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "createSessionTable",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_addr",
        "type": "address"
      }
    ],
    "name": "fetchMentorsPrice",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "name": "onERC721Received",
    "outputs": [
      {
        "internalType": "bytes4",
        "name": "",
        "type": "bytes4"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "registerMentorPrice",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_mentor",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_meetingLink",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "time",
        "type": "uint256"
      }
    ],
    "name": "scheduleSession",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "sessionsAttendedCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "sessionsMentoredCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "tableName",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]

const contractAddress = "0x83F1E5E39Ac8547B2BdcAD4A288434952e8C87f3";

// Connect to the database
const db = new Database();

export const schedule = async (mentor, meetingLink, time, price, signer) => {
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    // you might want to take in a date input but convert it to an int/number for the time
    try {
        const priceString = toString(price);
        const tx = await contract.scheduleSession(mentor, meetingLink, time, {value: ethers.utils.parseEther('1.10')});
        const receipt = tx.wait();
        console.log("created", receipt, priceString);
    } catch (error) {
        console.error(error);
    }
}

export const register = async () => {
  try {
    const tx = await contract.registerMentorPrice(1);
    const receipt = tx.wait();
    console.log("created", receipt);
  } catch (error) {
      console.error(error);
  }
}

export const fetch = async () => {
  try {
    const tx = await contract.fetchMentorsPrice("0x80F94B77B6C57bCA440aB7f827C78DCE949f39cf");
    console.log("created", tx);
  } catch (error) {
      console.error(error);
  }
}

export const getTableName = async () => {
    try {
        const name = await contract.tableName();
        console.log(name);
    } catch (error) {
        console.error(error);
    }
}

export const makeRead = async () => {
  const tableName = "sessionTable_80001_7235"
  const { results } = await db.prepare(`SELECT * FROM ${tableName};`).all();
  console.log(results);
}

// const tableName = getTableName();
// tableName;

// const reg = register();
// reg

// const _schedule = schedule();
// _schedule

// const _fetch = fetch();
// _fetch

// const read = makeRead();
// read;