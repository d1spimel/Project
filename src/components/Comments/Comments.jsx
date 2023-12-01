import React, {useState} from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./comments.module.css";

const Comments = () => {
  const [comments, setComments] = useState([]); // Add this line

  const formik = useFormik({
    initialValues: {
      commentText: "",
    },
    validationSchema: Yup.object({
      commentText: Yup.string().required("Comment is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      addComment(values.commentText);
      resetForm();
    },
  });

  const addComment = (text) => {
    const comment = { content: text };
    if (comment.content) {
      setComments((prevState) => [...prevState, comment]);
      alert("Comment: " + comment.content + " was added!");
    } else {
      alert("Text is empty.");
    }
  };

  const { values, handleChange, handleSubmit } = formik;
  const { commentText } = values;

  return (
    <form className={styles.comment__form} onSubmit={handleSubmit}>
      <h3>Comments:</h3>
      <div className={styles.comment__container}>
        {comments.map((comment, key) => (
          <div key={key} className={styles.comment}>
            <span>Anonim</span>
            <hr />
            <span>{comment.content}</span>
          </div>
        ))}
      </div>
      <h3>Add Comment:</h3>
      <textarea
        className={styles.comment__textarea}
        name="commentText"
        value={commentText}
        onChange={handleChange}
        placeholder="Write your comment..."
      />
      {formik.touched.commentText && formik.errors.commentText && (
        <div className={styles.error}>{formik.errors.commentText}</div>
      )}
      <button
        className={styles.submit__button}
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default Comments;
