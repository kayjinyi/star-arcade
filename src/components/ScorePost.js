import React from "react";

function ScorePost({ scorePost }) {
  return (
    <div>
      <td>{scorePost.username}</td>
      <td>{scorePost.score}</td>
    </div>
  );
}

export default ScorePost;
