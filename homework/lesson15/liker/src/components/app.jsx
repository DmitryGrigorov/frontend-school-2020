import React, { useState } from "react";
import { LikeDislikeButtons } from "./like-dislike-buttons";
import { Heart } from "./heart";

import "./styles.css";

const App = () => {
  const [likes, setLike] = useState(0);
  const [changed, setChanged] = useState(false);

  const handleLike = () => {
    setLike(likes + 1);
    setChanged(true);
    setTimeout(() => {
      setChanged(false);
    }, 1000);
  };

  const handleDislike = () => {
    if (likes > 0) setLike(likes - 1);
  };

  return (
    <div className="background">
      <div className="content">
        <Heart counter={likes} changed={changed} />
        <LikeDislikeButtons onLike={handleLike} onDislike={handleDislike} />
      </div>
    </div>
  );
};

export default App;
