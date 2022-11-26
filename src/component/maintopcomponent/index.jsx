import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './index.css'

export default function useMainTopComponent() {
    return (
        <div className="tablist">
            <div className="tablist-item">
                {/* <a href='/' className='tablist-item-a'>简介</a> */}
                <Link className='tablist-item-a' to="/profile">简介</Link>
            </div>
            <div className="tablist-item" >
                {/* <a href='/mint' className='tablist-item-a'> mint</a> */}
                <Link className='tablist-item-a' to="/mint">mint</Link>
            </div>
            <div className="tablist-item" >
                {/* <a href='/list' className='tablist-item-a'>
                    NFT列表
                </a> */}
                <Link className='tablist-item-a' to="/list">NFT列表</Link>
            </div>
        </div>
    )
}
