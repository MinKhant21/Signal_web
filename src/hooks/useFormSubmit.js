import React, { useState } from "react";
import { auth, db } from '../firebase';
import { signInWithEmailAndPassword ,createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import { doc, setDoc } from "@firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default function  useFormSubmit () {
     let [error,setError] = useState('')
     let [loading,setLoading] = useState(false)

     let signUpAndsignIn= async (displayName,email,password,type) => {
          try {
               setLoading(true)

               if(type === "Register")
               {
                    let res = await createUserWithEmailAndPassword(auth,email,password)
                    await updateProfile(res.user, {
                         displayName,
                    });
                    await setDoc(doc(db, "users", res.user.uid), {
                         uid: res.user.uid,
                         displayName,
                         email,
                    });
                    // await setDoc(doc(db, "userChats", res.user.uid), {});
                    setLoading(false)
                    setError('')
                    return res.user
               }
               if(type === "Login")
               {
                    console.log('login')
                    let res = await signInWithEmailAndPassword(auth,email,password)
                    console.log(res)
                    alert('hit')
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