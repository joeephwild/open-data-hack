import { Database } from "@tableland/sdk";
import { Wallet, ethers } from "ethers";

const contractAddress = "0x";
const contractABI = [];

const privateKey = "Private key";
const wallet = new Wallet(privateKey);

const provider = new ethers.JsonRpcProvider("https://polygon-mumbai.g.alchemy.com/v2/dt535hWODXDRV11dXdvYgdSnRR4pbuy4");
const signer = wallet.connect(provider);

const contract = new ethers.Contract(contractAddress, contractABI, signer)

// Connect to the database
const db = new Database();

const create = async () => {
      try {
          const tx = await contract.createPodcastTable();
          const receipt = await tx.wait();
          console.log("created", receipt);
      } catch (error) {
          console.error(error);
      }
  }

const upload = async () => {
const _value = ethers.parseEther('0.001');
    try {
        const tx = await contract.uploadPodcast("Podcast Hash", 3, {value: _value,
        maxFeePerGas: 50000000000,
        maxPriorityFeePerGas: 50000000000,
        gasLimit: 42000 
        });
        const receipt = await tx.wait();
        console.log("created", receipt);
    } catch (error) {
        console.error(error);
    }
}

const makeRead = async () => {
    const tableName = "sessionTable_80001_7235"
    const { results } = await db.prepare(`SELECT * FROM ${tableName};`).all();
    console.log(results);
  }

const getTableName = async () => {
    try {
        const name = await contract.tableName();
        console.log(name);
    } catch (error) {
        console.error(error);
    }
}

const _upload = upload();
_upload

// const _name = getTableName();
// _name

// const _create = create();
// _create
