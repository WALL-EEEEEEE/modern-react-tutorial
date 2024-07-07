import { useState, useEffect } from "react"

const useFetch = (url) => {
   const [data, setData ]  = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect( () => { 
        fetch(url).then((res) => {
            if (!res.ok)  {
                setIsLoading(false)
                throw Error(`failed to get resources from ${url}`)
            }
            return res.json()
        }).then((data) => {
            setData(data)
            setIsLoading(false)
        }).catch((err) => {
            console.error(err)
            setError(err)
            setIsLoading(false)
        })
    }, [url])
    return {data, isLoading, error};
}
 
export default useFetch;