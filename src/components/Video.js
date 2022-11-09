import React from "react";

function Video({title, views, createdAt}){

    return(
      <div>
        <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
         />
         <h1>{title}</h1>
         <p>{views} Views | Uploaded {createdAt}</p>
      </div>
    );
};

export default Video;