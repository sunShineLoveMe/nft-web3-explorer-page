import React from 'react'
import './index.css'

export default function useMainTopComponent() {
    return (
        <div className="tablist">
            <div className="tablist-item">
                <a href='/' className='tablist-item-a'>简介</a>
            </div>
            <div className="tablist-item" >
                <a href='/mint' className='tablist-item-a'> mint</a>
            </div>
            <div className="tablist-item" >
                <a href='/list' className='tablist-item-a'>
                    NFT列表
                </a>
            </div>
        </div>
    )
}
