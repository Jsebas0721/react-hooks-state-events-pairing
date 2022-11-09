import React from "react";


function Comments({comments, isHiden, onIsHiden}){

  console.log(onIsHiden);
  console.log(comments);

  const showComments= (
        <div>
          <h2>{comments.length} Comments</h2>
          {comments.map(userComment => (
          <div key={userComment.user}>
            <h3>{userComment.user}</h3>
            <p>{userComment.comment}</p>
        </div>
        ))}
        </div>
    )
  
  console.log(comments);
  
  
    return(
      <div>
        <br/>
        <button onClick={onIsHiden}>{isHiden ? "Show Comments" : "Hide Comments"}</button><hr/>
        {isHiden ? null : showComments}
      </div>

    );
}


export default Comments;