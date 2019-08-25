import React from 'react';

const Posts = ({ posts, viewPort, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className={`card-group d-flex ${viewPort!=='desktop'?'flex-column':'flex-row justify-content-center'}`}>
      {posts.map(post => (
          <div className={`card ${viewPort!=='desktop'?'my-3':'mx-3'}`} key={post.id}>
            <a href={post.html_url} className="cardData" target="_blank">
            <div className="d-flex flex-column align-items-center p-3">
             <div className="d-flex flex-column align-items-center my-3">
                <img className="border border-secondary rounded-circle" src={post.owner.avatar_url} alt="Card image"/>
            </div>
            <div className="font-weight-bold" style={{fontSize:'24px'}}>{post.name}</div>
                <div className={`d-flex my-4 ${viewPort==='desktop' || viewPort==='ipad'?'flex-row justify-content-center':'flex-column align-items-center'}`} style={{fontSize:'12px'}}>
                <div className="border border-secondary d-flex align-items-center justify-content-center px-2 mr-2 mb-2" style={{borderRadius:'50px'}}>
                    <i className="fa fa-star mr-1"></i>
                    <span>{post.stargazers_count}</span>
                </div>
                <div className="border border-secondary d-flex align-items-center justify-content-center  px-2 mr-2 mb-2" style={{borderRadius:'50px'}}>
                    <i className="fa fa-code-branch"></i>
                    <span className="mr-1">Fork</span>
                    <span>{post.forks}</span>
                </div>
                <div className="border border-secondary  d-flex align-items-center justify-content-center mb-2 px-2" style={{borderRadius:'50px'}}>
                    <i className="fa fa-info-circle mr-1"></i>
                    <span className="mr-1">Open Issues</span>
                    <span>{post.open_issues}</span>
                </div>
                </div>
                <div className="clipData mb-3">
                    {post.description}
                </div>
                <div className="border m-4" style={{width:'40%', color:'F4F4F4'}}></div>
            <div className="text-center font-weight-bold footer" style={{fontSize:'14px'}}>VIEW PROFILE</div>
            </div>
        </a>
        </div>
      ))}
    </div>

  );
};

export default Posts;
