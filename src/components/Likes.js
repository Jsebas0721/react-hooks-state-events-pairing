import React from "react";


function Likes({likes, dislikes, onHandleLikes, onHandleDislikes}){

  return (
    <div>
        <button onClick={onHandleLikes}>{likes} 👍</button>
        <button onClick={onHandleDislikes}>{dislikes} 👎</button><br/>
    </div>
  )  
}

export default Likes;