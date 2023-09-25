import LearnPodcastAbi from "./LearningPodcast.json";
import LearningSessionAbi from "./LearningSession.json";
import AudioSpacesAbi from "./AudioSpace.json";
import UserProfileAbi from "./userProfile.json";
import { ethers } from "ethers";

const AudioSpaceAddress = "0x2586a891a1ECa2cFEab9C7D09E19A0d19c43EfbF";
const LearningPodcastAddress = "0x4E8E32739f286cA21FFFAAaCCe074E33C5E5efC9";
const LearningSessionAddress = "0x4c2A6385d4B9Ef1DFa2a8ebe21aca770b8106672";
const userProfileAddress = "0x9b5ADa1E46C1A285FCD5F56745f8287d4DE0873f";

const UserProfile_Abi = UserProfileAbi.abi;
const LearningPodcast_Abi = LearnPodcastAbi.abi;
const LearningSession_Abi = LearningSessionAbi.abi;
const AudioSpace_Abi = AudioSpacesAbi.abi;

const connectWithContract = async (contractAddress: any, contractAbi: any) => {
  const provider = new ethers.providers.JsonRpcProvider();
  const signer = provider.getSigner();

  // Create an ethers contract instance
  const Contract = new ethers.Contract(contractAddress, contractAbi, signer);

  return Contract;
};

export {
  AudioSpaceAddress,
  LearningPodcastAddress,
  userProfileAddress,
  LearningSessionAddress,
  LearningPodcast_Abi,
  LearningSession_Abi,
  UserProfile_Abi,
  AudioSpace_Abi,
  connectWithContract
};
