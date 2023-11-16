import React from 'react'
import { auth } from '../firebase'

export default function useSignOut() {
  
     let signOut = () => {
         return  auth.signOut();
     }
     return {signOut}
}
