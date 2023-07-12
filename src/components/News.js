import React, { useEffect,useState } from 'react'
import Items from './Items'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  const capitalise=(string)=> {
    return string.charAt(0).toUpperCase()+string.slice(1);
  }
    const updateNews=async()=>{
    props.setProgress(10);
    const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data=await fetch(url);
    props.setProgress(30);
    let parsedData=await data.json()
    props.setProgress(70);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }
  useEffect(() => {
    document.title=`${capitalise(props.category)} - ParsoTak`;
    updateNews();
    // eslint-disable-next-line
  },[])
  
  // const handlePrevClick=async ()=>{
  //   setPage(page-1);
  //   updateNews();
  // }
  // const handleNextClick=async ()=>{
  //   setPage(page+1);
  //   updateNews();
  // }
  const fetchMoreData = async () => {
    const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1);
    let data=await fetch(url);
    let parsedData=await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults)
  };
    return (
      <>
        <h1 className='text-center' style={{marginTop:'70px'}}>India's - Top {capitalise(props.category)} Headlines</h1>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
          <div className='row'>
                {articles.map((element,index)=>{
                    return <div className="col-md-4" key={index}>
          <Items title={element.title} description={element.description?element.description.slice(0,88):""} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
        </div>
        })}
        </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
        <button type="button" disabled={page<=1} className="btn btn-primary" onClick={handlePrevClick} >&larr; Previous</button>
        <button type="button" className="btn btn-primary" disabled={state.page+1 > Math.ceil(state.totalResults/15)} onClick={handleNextClick}>Next &rarr;</button>
        </div> */}
      </>   
    )
}

News.defaultProps={
  country:"in",
  pageSize: 6,
  category: 'general'
}

News.propTypes={
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}

export default News