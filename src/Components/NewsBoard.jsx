import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';
import axios from 'axios'

const NewsBoard = ({category}) => {

  const[articles,setArticles] = useState([])

  const fetchNews = async()=>{
    try {
      const data = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`)
      setArticles(data.data.articles)
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(()=>{
    fetchNews();
  },[category]) 

  return (
    <div className='my-4'>
      <h2 className='text-center'>Latest <span className='badge bg-danger'>News</span></h2>
      {
        articles.map((news,index) => {
            return <NewsItem key={index}
             title={news.title}
             description={news.description}
             src={news.urlToImage}
             url={news.url}
            />
        })
      }
    </div>
  )
}

export default NewsBoard
