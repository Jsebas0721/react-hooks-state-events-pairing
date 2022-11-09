import React,{ useState } from "react";
import video from "../data/video.js";
import Video from "./Video.js";
import Likes from "./Likes.js";
import Comments from "./Comments.js";

function App() {
  // console.log("Here's your data:", video);

  const [likeCount, setLikeCount] = useState(video.upvotes);
  const [dislikeCount, setDislikeCount] = useState(video.downvotes);
  const [isHiden, setIsHiden] = useState(false);

  function handleLikes(){  
    setLikeCount(likeCount + 1);
  }

  function handleDislikes(){
    setDislikeCount(dislikeCount + 1);
  }

  function handleComments(){
   setIsHiden(!isHiden);
  }
  


  return (
    <div className="App">
      <Video title={video.title} views={video.views} createdAt={video.createdAt}/>
      <Likes likes={likeCount} dislikes={dislikeCount} onHandleLikes={handleLikes} onHandleDislikes={handleDislikes}/>
      <Comments comments={video.comments} isHiden={isHiden} onIsHiden={handleComments}/>
    </div>
  );
}

export default App;
