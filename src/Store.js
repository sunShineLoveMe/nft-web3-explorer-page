import { observable } from 'mobx'
import { getConnectAccount } from './utils/walletUtils'

const help = () => {
    // 钱包选择页面版是否展示状态
    const wallet_is_show = observable.box(false)
    // 当前链接的钱包地址，未链接则存储
    const currentAccount = observable.box("")

    // 链接钱包地址发生变化时的处理，更新存储状态
    const handleAccountChange = (accounts) => {
        if(accounts.length === 0) {
            currentAccount.set("")
        } else if(currentAccount[0] !== currentAccount) {
            currentAccount.set(accounts[0])
        }
    }

    // 注册钱包状态的监听
    const registerAccountChange = () => {
        const { ethereum } = window;
        getConnectAccount().then((accounts) => {
            handleAccountChange(accounts)
        }).catch((err) => {
            console.log(err)
        })

        ethereum.on('accountsChanged', (accounts) => {
            handleAccountChange(accounts)
        })
    }

    return { wallet_is_show, registerAccountChange, currentAccount }

}

 export const Store = help()