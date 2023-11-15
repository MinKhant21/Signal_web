import React, { useState } from "react";
import { auth } from '../firebase';
import { signInWithEmailAndPassword ,createUserWithEmailAndPassword} from "firebase/auth";

export default function  useFormSubmit () {
     let [error,setError] = useState('')
     let [loading,setLoading] = useState(false)

     let signUpAndsignIn= async (email,password,type) => {
          try {
               setLoading(true)

               if(type === "Register")
               {
                    let res = await createUserWithEmailAndPassword(auth,email,password)
                    setLoading(false)
                    setError('')
                    return res.user
               }
               if(type === "Login")
               {
                    let res = await signInWithEmailAndPassword(auth,email,password)
                    console.log(res)
                    console.log('hit')
                    if(res.user){
                         setLoading(false)
                         setError('')
                         return res.user
                    }
                    // setError(res.error.errors[0].message)
                    setLoading(false)
                    
               }
          } catch (e) {
               setError(e.message)
               setLoading(true)
          }
     }

     return {error,loading,signUpAndsignIn}
}