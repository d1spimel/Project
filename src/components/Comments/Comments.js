import React, { useState } from "react";
import styles from "./comments.css";

const Comments = () => {
  const [commentText, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setComment("");
  };

  const addComment = (text) => {
    const comment = { content: text };
    if (comment.content) {
      setComments((prevState) => {
        return [...prevState, comment];
      });
      alert("Comment: " + comment.content + " was added!");
    } else {
      alert("Text is empty.");
    }
  };

  return (
    <form className={"comment__form"} onSubmit={handleSubmit}>
      <h3>Comments:</h3>
      <div className={"comment__container"}>
        {comments.map((comment, key) => {
          return (
            <div key={key} className={"comment"}>
              <span>Anonim</span>
              <hr />
              <span>{comment.content}</span>
            </div>
          );
        })}
      </div>
      <h3>Add Comment:</h3>
      <textarea
        className={"comment__textarea"}
        value={commentText}
        onChange={handleChange}
        placeholder="Write your comment..."
      />
      <button
        onClick={() => addComment(commentText)}
        className={"submit__button"}
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default Comments;
