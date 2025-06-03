import React from 'react';
import { BookmarkCard } from './BookmarkCard';
import './BookmarkList.css';

export const BookmarkList = ({ bookmarks, onDelete }) => {
  return (
    <div className="bookmark-list">
      {bookmarks.map((bookmark) => (
        <BookmarkCard
          key={bookmark.id}
          bookmark={bookmark}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};
