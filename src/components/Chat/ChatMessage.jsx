import React, { useId } from 'react'
import { useSelector } from 'react-redux'

export default function ChatMessage() {
  const messages = useSelector(state=>state.chat.messages)
  const user = useSelector(state=>state.chat.user)
  const roomId = localStorage.getItem('roomId')
  const userId = JSON.parse(localStorage.getItem('userInfo'))._id
  return (
    <>
      <div class="flex flex-row justify-between bg-white">
        <div class="w-full px-5 flex flex-col justify-between">
          <div class="flex flex-col mt-5">
            {
              messages.map(msg=>
                <div>
                  {
                  msg.room_id === roomId &&
                    <div>
                      {
                        msg.form_userId == userId && 
                          <>
                            <div class="flex justify-end mb-4">
                                <img
                                  src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                                  class="object-cover h-8 w-8 rounded-full"
                                  alt=""
                                />
                                <div
                                  class="ml-2 py-3 px-4 bg-purple-500 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white"
                                >
                                {msg.message}
                              </div>
                            </div>
                          </>
                      }
                      <>
                        <div class="flex justify-start mb-4">
                            <img
                              src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                              class="object-cover h-8 w-8 rounded-full"
                              alt=""
                            />
                            <div
                              class="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white"
                            >
                            {msg.message}
                          </div>
                        </div>
                      </>
                    </div>
                    // <div>
                    //   <h1>Noe</h1>
                    // </div>
                  }
                
                </div>
                
                

                  // <div class="flex justify-end mb-4">
                  //   <div>
                  //     <div
                  //       class="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white"
                  //     >
                  //       Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  //       Magnam, repudiandae.
                  //     </div>
      
                  //     <div
                  //       class="mt-4 mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white"
                  //     >
                  //       Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  //       Debitis, reiciendis!
                  //     </div>
                  //   </div>
                  //   <img
                  //     src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                  //     class="object-cover h-8 w-8 rounded-full"
                  //     alt=""
                  //   />
                  // </div>
             
              )
            }
           
           
          </div>
        
        </div>
      </div>
    </>
    
    
  )
}
