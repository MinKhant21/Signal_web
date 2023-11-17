import React, { useCallback, useContext, useEffect, useState } from 'react'

import onlineGif from '../../assets/gif/online.gif'
import offLinePng from '../../assets/gif/offline.png'
import { app, auth, db } from '../../firebase';
import 'firebase/auth';
import { collection, doc, getDocs ,query,orderBy,onSnapshot} from '@firebase/firestore';
export default function ChatList() {
     let [users,setUsers] = useState([{}]);
     let [authUser,setAuthUser] = useState('')

     const fetchUsers =  useCallback(async() => {
          
          const q = query(collection(db, "users"));
          const querySnapshot = await getDocs(q);
          onSnapshot(q,docs=>{
               const userDataArray =[];
               docs.forEach(doc=>{
                    if(doc.id != authUser.uid){
                         let data = {
                              ...doc.data()
                         }
                         userDataArray.push(data)
                    }
               })
               setUsers(userDataArray)
          })

        },[query,getDocs,onSnapshot]);

        
     useEffect(()=>{
          let user = auth.currentUser
          setAuthUser(user)
          fetchUsers()
     },[fetchUsers])
  return (
    <>
              { 
               users.map(user=>
                         <div className=' flex justify-around items-center mt-5 mb-3 cursor-pointer rounded-lg shadow-md hover:shadow-lg pb-2'>
                              <img className=' rounded-full w-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDrmpYNvqOST9I5HZR-ZIwLULW2v0x2g7xOw&usqp=CAU" alt="" />
                              <p className=''>{user.displayName}</p>
                              <div className=' flex  items-center '>
                                   <img className='w-6' src={onlineGif} alt="" />
                                   <span>Online</span>
                              </div>
                         </div>
                    )
               }
    </>
  )
}
