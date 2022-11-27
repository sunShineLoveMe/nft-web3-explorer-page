import React, { useEffect, useState} from 'react'
import { getMetaDataList, ipfsToHttp } from '../../utils/contractUtils'
import './index.css'

export default function useNFTListComponent() {

    const [metadatalist, setMetadatalist] = useState([])

    useEffect(() => {
        getMetaDataList().then((arr) => {
            setMetadatalist(arr)
        }).catch((err) => {
            console.log(`err is ${err}`);
        })
    }, [])

    const items = metadatalist.map((metadata, index) => 
            <div className='nft-list-item' key={index}>
                <img className='nft-list-item-img'  src={ipfsToHttp(metadata.image)} />
                <h4 className='nft-list-item-name'> {metadata.name} </h4>
            </div>
    );

    return (
        <div className='nft-list-container'>
            {items}
        </div>
    )
}
