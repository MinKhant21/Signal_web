import React from 'react'
import { auth } from '../firebase'

export default  function useGetUsers() {
 
     const getUsers = async () => {
          // const userRecords = await auth().listUsers();
          // const users = userRecords.map((userRecord) => userRecord.toJSON());
          // console.log(users);
         
     }
     let getCurrentUser = () => {
          const user = auth.currentUser;
          if(user){
               return user;
          }
     }
     return {getUsers,getCurrentUser}
}
