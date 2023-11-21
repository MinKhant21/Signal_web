import React, { useCallback, useContext, useEffect, useState } from 'react'

import onlineGif from '../../assets/gif/online.gif'
import offLinePng from '../../assets/gif/offline.png'
import { app, auth, db } from '../../firebase';
import 'firebase/auth';
import { collection, doc, getDocs,getDoc ,updateDoc,serverTimestamp ,query,orderBy,onSnapshot,setDoc, where} from '@firebase/firestore';
import { ChatContext } from '../../contexts/ChatContext';
import { uuid } from '@firebase/util';
export default function ChatList() {
     let [users,setUsers] = useState([{}]);
     let [authUser,setAuthUser] = useState('')

     let {userData,ChangeUser} = useContext(ChatContext)

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

     const HandleSelect = async(user) =>{
         let res = await getDoc(doc(db,'room',authUser.uid))
         let members = res.data().members;
         for (let index = 0; index < members.length; index++) {
               if(members[index] == user.uid){
                    ChangeUser(user)
               }else{
                   let addMember = await setDoc(doc(db,'room',authUser.uid),{
                    members : [members[index],user.uid]
                   })
                   if(addMember){
                         ChangeUser(user)
                   }
               }
          }
     }
  return (
    <>
              { 
               users.map(user=>
                         <div className=' flex justify-around items-center mt-5 mb-3 cursor-pointer rounded-lg shadow-md hover:shadow-lg pb-2' 
                              onClick={()=>HandleSelect(user)}>
                              <img className=' rounded-full w-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDrmpYNvqOST9I5HZR-ZIwLULW2v0x2g7xOw&usqp=CAU" alt="" />
                              <p className=''>{user.displayName}</p>
                              {
                              user.isOnline ?
                                   <div className=' flex  items-center '>
                                        <img className='w-6' src={onlineGif} alt="" />
                                        <span>Online</span>
                                   </div>
                                   :
                                   <div className=' flex  items-center '>
                                        <img className='w-6' src={offLinePng} alt="" />
                                        <span>OffLine</span>
                                   </div>
                              }
                         </div>
                    )
               }
    </>
  )
}
