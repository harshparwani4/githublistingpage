import React, { useState, useEffect, useRef } from 'react';
import Pagination from './components/Pagination';
import Cards from './components/Cards';
import axios from 'axios';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('TEST')
  const [postsPerPage] = useState(3);
  const [viewPort, setViewPort] = useState('desktop');
  const inputEl = useRef();

  useEffect(() => {

    const width = window.innerWidth;
    if(width<1200 && width>500 ){
      setViewPort('ipad');
    }
    else if(width<500){
      setViewPort('mobile');
    }
    else{
      setViewPort('desktop');
    }
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}`);
      setPosts(res.data.items);
      setLoading(false);
    };

    fetchPosts();
  },[viewPort]);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  const searchData = async () =>{
    setLoading(true);
    setCurrentPage(1);
    const res = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}`);
    setPosts(res.data.items);
      setLoading(false);
  }

  return (
    <div className="container" >
      <div className='border border-primary container-fluid rounded  mt-5'>
        <div className=' bg-primary mb-3 h-100 px-3 py-2'>
          <div className="text-light">Git Repo Search Filter</div>
        </div>
        <div className={`container-fluid d-flex my-3 px-3 ${viewPort==='mobile'?'flex-column':'flex-row'}`}>
          <input ref={inputEl} className={`form-control ${viewPort==='mobile'?'mb-3':'mr-3'}`} onChange={(e)=>{setSearchQuery(e.target.value)}} type="text" value={searchQuery} placeholder="Search" aria-label="Search"/>
          <button className="btn btn-primary" onClick={searchData}>Search</button>
        </div>
      </div>
      <div className='border border-primary container-fluid rounded  mt-5'>
        <div className=' bg-primary mb-3 h-100 px-3 py-2'>
          <div className="text-light">Repo Search Result</div>
        </div>
        <div className="container my-3 px-3">
          <Cards posts={currentPosts} viewPort={viewPort} loading={loading}/>
        </div>
      </div>
      <div className='container justify-content-center d-flex mt-5'>
      {!loading && posts.length?<Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />:null}
      </div>
    </div>
  );
};

export default App;
