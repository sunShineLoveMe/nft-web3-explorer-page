import React, { useEffect, useState } from 'react'
import { Store } from '../../Store'
import { isMetaMaskInstalled, metaMaskConnect } from '../../utils/walletUtils'
import './index.css'

export default function useWalletComponent() {

    const text = isMetaMaskInstalled() ? 'MetaMask': '请先安装MetaMask';
    const [wallet_is_show, setWalletShow] = useState(false)

    useEffect(() => {
        Store.wallet_is_show.observe_((change) => {
            setWalletShow(change.newValue)
        })

        Store.currentAccount.observe_((change) => {
            Store.wallet_is_show.set(false)
        })
    }, [])

    const cancel_click = () => {
        Store.wallet_is_show.set(false)
    }

    const metaMask_click = async(e) => {
        e.stopPropagation()
        if(isMetaMaskInstalled) {
            metaMaskConnect()
        }
    }

    if(!wallet_is_show) {
        return <div className='display-none'></div>
    }

    return (
        <div className='wallet-page-bg' onClick={cancel_click}>
            <div className='wallet-page-panel' onClick={(e) => {metaMask_click(e)}}>{text}</div>
        </div>
    )
}
