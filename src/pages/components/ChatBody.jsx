import { doc, getDoc } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { db } from '../../firebase'
import { ChatContext } from '../../contexts/ChatContext'

export default function ChatBody() {
  let {userInfo} = useContext(ChatContext)
  let [messages,setMessages] = useState('')

  const HandleMessages =async() => {
    let res = await getDoc(doc(db, "room", 'jNwgv40KuaYGagwDJnlGo5rdzrG3'))
    let data = res.data().messages
      for (let i = 0; i < data.length; i++) {
        for (const key in data[i]) {
          if (Object.hasOwnProperty.call(data[i], key)) {
            if(data[i][key].senderID === userInfo.uid){
              setMessages(data[i][key].message)
            }
        }     
      }
    }
  }

  useEffect(()=>{
    HandleMessages()
    console.log(messages)
  },[HandleMessages])

  return (
    <>
     <div className=' w-full h-[560px]'>
              <div class="relative w-full p-6 overflow-y-auto h-[40rem]">
              <ul class="space-y-2">
                {/* <li class="flex justify-start">
                  <div class="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                    <span class="block">Hi</span>
                  </div>
                </li> */}
                <li class="flex justify-end">
                  <div class="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                    <span class="block">{messages}</span>
                  </div>
                </li>
                {/* <li class="flex justify-end">
                  <div class="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                    <span class="block">how are you?</span>
                  </div>
                </li>
                <li class="flex justify-start">
                  <div class="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                    <span class="block">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </span>
                  </div>
                </li> */}
              </ul>
            </div>
              </div>
    </>
  )
}
