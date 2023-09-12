import { Database } from "@tableland/sdk";
import { Wallet, ethers } from "ethers";

const contractAddress = "0x";
const contractABI = "ABI";
const privateKey = "";
const wallet = new Wallet(privateKey);

const provider = new ethers.JsonRpcProvider("https://polygon-mumbai.g.alchemy.com/v2/APIkey");
const signer = wallet.connect(provider);

const contract = new ethers.Contract(contractAddress, contractABI, signer)

// Connect to the database
const db = new Database();

const schedule = async () => {
    try {
        const tx = await contract.scheduleSession("0xc5509a77Dc253b2E001E006230665DeCd245b354", "meeting link", 3, {value: ethers.parseEther('0.001')});
        const receipt = tx.wait();
        console.log("created", receipt);
    } catch (error) {
        console.error(error);
    }
}

const register = async () => {
  try {
    const tx = await contract.registerMentorPrice(1);
    const receipt = tx.wait();
    console.log("created", receipt);
  } catch (error) {
      console.error(error);
  }
}

const fetch = async () => {
  try {
    const tx = await contract.fetchMentorsPrice("0x80F94B77B6C57bCA440aB7f827C78DCE949f39cf");
    console.log("created", tx);
  } catch (error) {
      console.error(error);
  }
}

const getTableName = async () => {
    try {
        const name = await contract.tableName();
        console.log(name);
    } catch (error) {
        console.error(error);
    }
}

const makeRead = async () => {
  const tableName = "sessionTable_80001_7235"
  const { results } = await db.prepare(`SELECT * FROM ${tableName};`).all();
  console.log(results);
}

// const tableName = getTableName();
// tableName;

const reg = register();
reg

// const _schedule = schedule();
// _schedule

// const _fetch = fetch();
// _fetch

// const read = makeRead();
// read;