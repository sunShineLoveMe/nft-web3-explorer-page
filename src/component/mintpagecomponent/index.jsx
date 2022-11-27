import React, { useEffect, useState } from 'react'
import { Spin } from 'antd'
import { getMintInfo, mint } from '../../utils/contractUtils';
import { Store } from '../../Store'

import './index.css'

export default function useMintPageComponent() {

  const [ totalSupply, setTotalSupply ] = useState(0);
  const [ maxSupply, setMaxTotalSupply ] = useState(0);

  useEffect(() => {
    updateMintInfo()
  }, [])

  const updateMintInfo = async() => {
    getMintInfo().then((info) => {
      // 16进制转10进制
      setTotalSupply(parseInt(info[0]))
      setMaxTotalSupply(parseInt(info[1]))
    }).catch((err) => {
      console.error(err)
    })
  }

  const mintClick = () => {
    if(Store.currentAccount.get() === "") {
      window.alert("请先连接钱包")
      return;
    }
    mint().then(() => {
      updateMintInfo();
      window.alert("mint成功！")
    }).catch();
  } 

  return (
    {totalSupply} && {maxSupply} ? 
    <div className='mintpage'>
      <div className='mint-info'>当前mint进度 {totalSupply} / {maxSupply}</div>
      <div className='mint-btn' onClick={mintClick}>一键Mint</div>
    </div>
    :
    <div className='loading'>
        <Spin size="large"/>
    </div> 
  )
}
