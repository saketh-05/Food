import React from 'react';
import { Trash2, ExternalLink } from 'lucide-react';
import './BookmarkCard.css';

export const BookmarkCard = ({ bookmark, onDelete }) => {
  return (
    <div className="bookmark-card">
      <div className="bookmark-header">
        <h3 className="bookmark-title">{bookmark.title}</h3>
        <button
          onClick={() => onDelete(bookmark.id)}
          className="delete-button"
        >
          <Trash2 size={16} />
        </button>
      </div>
      <div className="bookmark-meta">
        <span>{bookmark.category}</span>
        <span>{new Date(bookmark.createdAt).toLocaleDateString()}</span>
      </div>
      <a
        href={bookmark.url}
        target="_blank"
        rel="noopener noreferrer"
        className="visit-link"
      >
        Visit <ExternalLink className="link-icon" size={12} />
      </a>
    </div>
  );
};
