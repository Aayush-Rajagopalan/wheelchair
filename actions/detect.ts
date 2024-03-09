'use server'

export default async function Detect({ip}: {ip: string}){
    const res = await fetch("http://"+ip+"/", {method: "HEAD"})
    if (res.status === 200){
        return true
    }
    return false
    
}