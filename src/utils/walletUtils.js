// 判断钱包是否安装
export const isMetaMaskInstalled = () => {
    const { ethereum } = window;
    return Boolean(ethereum && ethereum.isMetaMask)
}

// 请求链接钱包
export const metaMaskConnect = async() => {
    try {
        const { ethereum } = window;
        return await ethereum.request({method: 'eth_requestAccounts'})
    } catch (error) {
        console.log(error)
    }
}

// 获取当前已经链接的钱包地址
export const getConnectAccount = async() => {
    const { ethereum } = window;
    const account = await ethereum.request({method: 'eth_accounts'})
    return account;
}

