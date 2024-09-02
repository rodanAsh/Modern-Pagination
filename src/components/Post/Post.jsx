import React from 'react'
import './post.css'
import { useState } from 'react'
import { useEffect } from 'react'
import Pagination from '../Pagination/Pagination'

const Post = () => {
    const [data,setData] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    const [page,setPage] = useState(5)
    
    const fetchData = async() => {
        setIsLoading(true)
        try{
            const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=5`)
            const data = await response.json()
            console.log(data)
            setData(data)
        }catch(e){
            console.log(e)
        }finally{
            setIsLoading(false)
        }
        
    }
    useEffect(() => {
        fetchData()
    },[page])

    if(isLoading){
        return (
            <div>Posts Loading .....</div>
        )
    }
  return (
    <>
        <div className='post-container'>
            {data.map((item) => {
                return <img key={item.id} src={item.download_url} alt="" />
            })}
        </div>
        <Pagination page={page} setPage={setPage} />
    </>
    
  )
}

export default Post