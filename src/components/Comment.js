// src/components/Comment.js
import React, { useState } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

const Comment = ({ comment, handleReply }) => {
  const [showReplyForm, setShowReplyForm] = useState(false);

  return (
    <div className="comment">
      <div className="comment-content">
        <img src="https://via.placeholder.com/40" alt="user-icon" />
        <div>
          <strong>{comment.userName}</strong>
          <p>{comment.text}</p>
        </div>
      </div>
      <button onClick={() => setShowReplyForm(!showReplyForm)}>
        {showReplyForm ? 'Cancel' : 'Reply'}
      </button>
      {showReplyForm && (
        <CommentForm handleSubmit={handleReply} parentId={comment.id} />
      )}
      {comment.replies && comment.replies.length > 0 && (
        <CommentList comments={comment.replies} handleReply={handleReply} />
      )}
    </div>
  );
};

export default Comment;
