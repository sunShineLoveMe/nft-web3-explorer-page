import React from 'react'
import './bottombar.css'
import RedditUrl from '../images/reddit.png'
import TwitterUrl from '../images/twitter.png'

export default function useBottomBarComponent() {
  return (
    <div className='bottomBg'>
        <div className='bottomIcon'>
            <a href="https://twitter.com/twitter链接" target="_blank" className="join_item">
                <img src={RedditUrl} loading="lazy" alt="Reddit"/>
            </a>
            <a href="https://twitter.com/twitter链接" target="_blank" className="join_item">
                <img src={TwitterUrl} loading="lazy" alt="Twitter"/>
            </a>
        </div>
    </div>
  )
}
