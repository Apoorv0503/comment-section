// src/App.js
import React, { useState } from 'react';
import CommentForm from './components/CommentForm';
import CommentList from './components/CommentList';
import './App.css';

const App = () => {
  const [comments, setComments] = useState([]);

  const handleAddComment = (text, parentId = null) => {
    const newComment = {
      id: Date.now(),
      userName: 'User',
      text,
      parentId,
      replies: [],
    };
    if (parentId === null) {
      setComments([...comments, newComment]);
    } else {
      setComments(addReply(comments, newComment, parentId));
    }
  };

  const addReply = (comments, newComment, parentId) => {
    return comments.map((comment) => {
      if (comment.id === parentId) {
        return {
          ...comment,
          replies: [...comment.replies, newComment],
        };
      }
      if (comment.replies.length > 0) {
        return {
          ...comment,
          replies: addReply(comment.replies, newComment, parentId),
        };
      }
      return comment;
    });
  };

  return (
    <div className="App">
      <h1>Comments</h1>
      <CommentForm handleSubmit={handleAddComment} />
      <CommentList comments={comments} handleReply={handleAddComment} />
    </div>
  );
};

export default App;
