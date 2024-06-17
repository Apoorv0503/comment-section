// src/components/CommentList.js
import React from 'react';
import Comment from './Comment';

const CommentList = ({ comments, handleReply }) => {
  return (
    <div className="comment-list">
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} handleReply={handleReply} />
      ))}
    </div>
  );
};

export default CommentList;
