import React from 'react';

const Posts = ({ posts, viewPort, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className={`card-group d-flex ${viewPort!=='desktop'?'flex-column':'flex-row justify-content-center'}`}>
      {posts.map(post => (
          <div className={`card ${viewPort!=='desktop'?'my-3':'mx-3'}`} key={post.id}>
            <div className="d-flex flex-column align-items-center p-4">
             <div className="d-flex flex-column align-items-center my-3">
                <img className="border border-secondary rounded-circle" src={post.owner.avatar_url} alt="Card image"/>
            </div>
            <div className="font-weight-bold" style={{fontSize:'24px'}}>{post.name}</div>
                <div className="d-flex flex-row my-4 justify-content-center">
                <div className="border border-secondary px-2 mr-2" style={{borderRadius:'50px'}}>
                    <span className="mr-2">Fork</span>
                    <span>{post.forks}</span>
                </div>
                <div className="border border-secondary  px-2" style={{borderRadius:'50px'}}>
                    <span className="mr-2">Open Issues</span>
                    <span>{post.open_issues}</span>
                </div>
                </div>
                <div className="clipData mb-3">
                    {post.description}
                </div>
                <div className="border m-4" style={{width:'40%', color:'F4F4F4'}}></div>
            <div className="text-center font-weight-bold" style={{fontSize:'14px'}}>VIEW PROFILE</div>
            </div>
        </div>
      ))}
    </div>

  );
};

export default Posts;
