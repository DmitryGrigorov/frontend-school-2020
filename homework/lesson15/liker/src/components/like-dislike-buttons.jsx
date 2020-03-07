import React from "react";

export const LikeDislikeButtons = props => (
  <div className="wrapper">
    <button id="like" onClick={props.onLike}>
      👍
    </button>
    <button id="dislike" onClick={props.onDislike}>
      👎
    </button>
  </div>
);
