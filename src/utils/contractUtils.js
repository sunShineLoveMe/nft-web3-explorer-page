import { ethers } from 'ethers';
import axios from 'axios'
import IPFSGatewayTools from '@pinata/ipfs-gateway-tools/dist/browser';

const gatewayTools = new IPFSGatewayTools();

//获取tokenID对应的URI
export const getTokenURI = async (tokenID) => {
    const contract = getContract();
    return await contract.tokenURI(tokenID);
}

//获取已经mint的token总数
export const totalSupplyToken = async () => {
    const contract = getContract();
    return await contract.totalSupply();
}

//通过tokenURI获取metadata
// ipfs://QmVvXhWA1GnZeRkspJSG1TT5voqzzC1h349rRnLuP7YSzR/0.json
// https://gateway.pinata.cloud/ipfs/QmVvXhWA1GnZeRkspJSG1TT5voqzzC1h349rRnLuP7YSzR/1.json
export const parseMetaData = async (TokenURI) => {
    let json = {}
    await axios.get(ipfsToHttp(TokenURI)).then(res => {
        let tempJson = {}
        tempJson.name = res.data.name
        tempJson.image = res.data.image
        json = tempJson
    })
    return json
}
// export const parseMetaData = async (TokenURI) => {
//     const res = await fetch(TokenURI);
//     const json = await res.json();
//     return json;
// }

//获取已mint tokenURI对应的metadata
export const getMetaDataList = async () => {
    const totalSupply = await totalSupplyToken();
    const list = []
    for (let tokenID = 1; tokenID < totalSupply; tokenID++) {
        const tokenURI = await getTokenURI(tokenID);
        const res = await parseMetaData(tokenURI);
        list.push(res);
    }
    return list;
}

// 获取最大可mint的数量
export const maxSupplyToken = async() => {
    const contract = getContract()
    return await contract.MAX_SUPPLY()
}

// 同时返回当前mint总数和最大mint总数
export const getMintInfo = async() => {
    // console.log(`进入getMintInfo方法`)
    const totalSupply = await totalSupplyToken();
    const maxSupply = await maxSupplyToken();
    return [totalSupply, maxSupply];
}

// mint功能，这里同样是使用metamask进行签名，调用该方法MetaMask会弹出交易确认按钮
export const mint = async () => {
    const contract = getContract();
    const provider = new ethers.providers.Web3Provider(window.web3.currentProvider);
    const signer = provider.getSigner();
    const contractWithSigner = contract.connect(signer);
    const price = await contract.mintPrice();
    console.log("price is" + price);
    const tx = await contractWithSigner.mintNftMeta(1, { value: price });
    console.log(tx.hash);
    await tx.wait();
}

// 获取合约
const getContract = () => {
    const provider = new ethers.providers.Web3Provider(window.web3.currentProvider);
    const address = "0x405a13cB7f7b939B998dcBceDF61a15568Da4744";
    const abi = require("../abi/NftMeta.json");
    return new ethers.Contract(address, abi, provider);
}

//将ipfs地址转为http地址
export const ipfsToHttp = (ipfsURL) => {
    return gatewayTools.convertToDesiredGateway(ipfsURL, "https://gateway.pinata.cloud");
}
