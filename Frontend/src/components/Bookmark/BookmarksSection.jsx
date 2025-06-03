import React from 'react';
import { Bookmark } from 'lucide-react';
import { BookmarkList } from './BookmarkList';
import './BookmarksSection.css';

export const BookmarksSection = ({ bookmarks, onDelete }) => {
  return (
    <div className="bookmarks-section">
      <div className="section-header">
        <h2 className="section-title">
          <Bookmark className="section-icon" />
          My Recipe Bookmarks
        </h2>
      </div>
      <BookmarkList bookmarks={bookmarks} onDelete={onDelete} />
    </div>
  );
};
