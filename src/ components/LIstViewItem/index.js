import React from 'react';
import './style.css';

const ListViewItem = props => {
const {picture} = props;
  return (
    <div className="listview-item">
    <div className="listview-picture">
      <a className="image-wrapper-link" href={picture.link}>
        <img src={picture.media.m} className="image" alt={picture.title} />
      </a>
    </div>
    <div className="listview-details">
      <div className="detail-main">
        <div className="detail-box">
          <label className="detail-label">Title:</label>
          <label className="detail-content">
            {picture.title}
          </label>
        </div>
        <div className="detail-box">
          <label className="detail-label">Author:</label>
          <label className="detail-content">
            <button onClick={() => {props.onAuthorSelected(picture.author_id)}} className="link">{picture.author}</button>
          </label>
        </div>
        <div className="detail-box">
          <label className="detail-label">Taken At:</label>
          <label className="detail-content">
            {picture.date_taken ? new Date(picture.date_taken).toString():'-'}
          </label>
        </div>
        <div className="detail-box">
          <label className="detail-label">Published At:</label>
          <label className="detail-content">
            {picture.published ? new Date(picture.published).toString(): '-'}
          </label>
        </div>
        <div className="detail-box">
          <label className="detail-label">Tags:</label>
          <label className="detail-content">
            {picture.tags}
          </label>
        </div>
      </div>
      <div className="detail-description">
        <label className="detail-label">Description:</label>
      {picture.description}
      </div>
    </div>
  </div>
  )
}

export default ListViewItem;