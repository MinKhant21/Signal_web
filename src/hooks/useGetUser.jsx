import { useCallback, useEffect, useState } from "react";

function useGetUser (apiUrl)  {
    let [users,setUsers] = useState([])
    let [error , setError] = useState("")
    let [loading,setLoading] = useState(false)
    let token = localStorage.getItem('token')
    const getUser =  useCallback(async()=>{
        setLoading(true)
        await fetch(`${apiUrl}/getUser`,{
            method:'GET',
            headers:{
                'Content-Type' : 'application/json',
                'x-auth-token' : token
            }
        })
        .then(res=>{
           return res.json()
        })
        .then(data=>{
            if(data.status == "200"){
                setLoading(false)
                setUsers(data.data)
            }
        })
        .catch(e=>{
            setError(e)
        })
    },[token])
    useEffect(()=>{
        getUser();
    },[getUser])

    return {
        users,
        error,
        loading
    }
}

export default useGetUser