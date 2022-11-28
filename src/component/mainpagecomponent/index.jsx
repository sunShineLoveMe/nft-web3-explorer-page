import React, { useEffect } from 'react'
import { getListData } from '../../utils/graphqlUtils'
import './index.css'

export default function useMainPageComponent() {

    useEffect(() => {
        getListData().then(res => {
            console.log(res)
        })
    }, [])

    // const 

    return (
        <div className='main-page'>
            <h1 className='overview-title'>
                项目介绍
            </h1>
            <p className='overview-text'>
                白皮书内容
            </p>
        </div>
    )
}
