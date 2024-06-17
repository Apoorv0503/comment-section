// src/components/CommentForm.js
import React, { useState } from 'react';

const CommentForm = ({ handleSubmit, parentId }) => {
  const [comment, setComment] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(comment, parentId);
    setComment('');
  };

  return (
    <form onSubmit={onSubmit} className="comment-form">
      <input
        type="text"
        placeholder="Add a comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button type="submit">Add Comment</button>
    </form>
  );
};

export default CommentForm;
