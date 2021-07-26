import React from 'react';
import PropTypes from 'prop-types';
import "./FeedItem.css"

FeedItem.propTypes = {
    feed: PropTypes.object
};

function FeedItem({feed}) {
    return (
        <div className="feed-item">
            <div className="header">
                <div className="left">
                    <div className="image">
                        <img src={feed.author.image} alt="" />
                    </div>
                    <div className="info">
                        <div className="username">{feed.author.username}</div>
                        <div className="date">{feed.updatedAt}</div>
                    </div>
                </div>
            </div>
            <div className="body">
                <div className="title">
                {feed.title}
                </div>
                <div className="description">
                {feed.description}
                </div>
            </div>
            <div className="footer">
                <div className="left">
                    <span>Read more...</span>
                </div>
                <div className="right">
                    <ul>
                        {
                            feed.tagList.map((tag, idx) => (
                                <li className="tag" key={idx}>{tag}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default FeedItem;