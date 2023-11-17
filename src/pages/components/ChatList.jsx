import React, { useCallback, useContext, useEffect, useState } from 'react'

import onlineGif from '../../assets/gif/online.gif'
import offLinePng from '../../assets/gif/offline.png'
import { app, auth, db } from '../../firebase';
import 'firebase/auth';
import { collection, doc, getDocs,getDoc ,updateDoc,serverTimestamp ,query,orderBy,onSnapshot,setDoc} from '@firebase/firestore';
import { ChatContext } from '../../contexts/ChatContext';
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
          const combinedId =
      authUser.uid > user.uid
        ? authUser.uid + user.uid
        : user.uid + authUser.uid;
    try {
     const res = await getDoc(doc(db, "chats", combinedId));

     if (!res.exists()) {
          //create a chat in chats collection
          await setDoc(doc(db, "chats", combinedId), { messages: [] });
          //create user chats
          await updateDoc(doc(db, "userChats", authUser.uid), {
               [combinedId + ".userInfo"]: {
                    uid: user.uid,
                    displayName: user.displayName,
               },
               [combinedId + ".date"]: serverTimestamp(),
          });
          await updateDoc(doc(db, "userChats", user.uid), {
               [combinedId + ".userInfo"]: {
                    uid: authUser.uid,
                    displayName: authUser.displayName,
               },
               [combinedId + ".date"]: serverTimestamp(),
          });
          let data = {
               combinedId,
               userInfo : {
                    uid: user.uid,
                    displayName: user.displayName,
               }
          }
          ChangeUser(data)
          // dispatch({type:"CHANGE_USER",payload:combinedId})
     }
    } catch (err) {}
         
     }
  return (
    <>
              { 
               users.map(user=>
                         <div className=' flex justify-around items-center mt-5 mb-3 cursor-pointer rounded-lg shadow-md hover:shadow-lg pb-2' onClick={()=>HandleSelect(user)}>
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
