import React, { useEffect, useState } from 'react'
import { Store } from '../../Store'
import './index.css'

export default function useMetaTopComponent() {

    const [ text, setText ] = 
            useState(Store.currentAccount.get() === '' ? '连接钱包': Store.currentAccount.get())

    useEffect(() => {
        Store.currentAccount.observe_((newAccount) => {
            if(newAccount.newValue === '') {
                setText("连接钱包")
            } else {
                setText(newAccount.newValue)
            }
        })
    }, [])

    const onclick_wallet = () => {
        if(Store.currentAccount.get() === '') {
            Store.wallet_is_show.set(true)
        }
    }

    return (
        <div className='useMetaBg'>
            <div className='metabtn'>
                <span onClick={() => { onclick_wallet() }}>{text}</span>
            </div>
        </div>
    )
}
