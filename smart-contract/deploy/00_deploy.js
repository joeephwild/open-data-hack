require("hardhat-deploy")
require("hardhat-deploy-ethers")

const { networkConfig } = require("../helper-hardhat-config")

const private_key = network.config.accounts[0]
const wallet = new ethers.Wallet(private_key, ethers.provider)

module.exports = async ({ deployments }) => {
    const { deploy } = deployments
    console.log("Wallet Ethereum Address:", wallet.address)
    const chainId = network.config.chainId
    const tokensToBeMinted = networkConfig[chainId]["tokensToBeMinted"]

    //deploy Simplecoin
    const audioSpace = await deploy("AudioSpace", {
        from: wallet.address,
        args: [],
        log: true,
    })

    //deploy FilecoinMarketConsumer
    const podcast = await deploy("LearningPodcast", {
        from: wallet.address,
        args: [],
        log: true,
    })

    //deploy DealRewarder
    const session = await deploy("LearningSession", {
        from: wallet.address,
        args: [],
        log: true,
    })

    //deploy DealClient
    const profile = await deploy("userProfile", {
        from: wallet.address,
        args: [],
        log: true,
    })

    console.log(`Audio Space deployed to ${audioSpace.address}`)
    console.log(`Podcast deployed to ${podcast.address}`)
    console.log(`session deployed to ${session.address}`)
    console.log(`profile deployed to ${profile.address}`)
}
