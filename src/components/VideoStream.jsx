import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function VideoStream() {
    const baseUrl = useSelector(state=>state.auth.baseUrl)
    // useEffect(()=>{
    //     fetch(`${baseUrl}/video`)
    //     .then((res)=>{
    //         console.log(res)
    //     })
    // },[baseUrl])
  return (
    <div>
        <video  controls muted >
            <source src={`${baseUrl}/1.mp4`} />
        </video>
    </div>
  )
}
