import React, { PropTypes } from 'react';

const TweetBox = ({
  username,
  text,
}) => (
  <div className="card cyan lighten-3">
    <div className="card-content">
      <div className="card-title">
        <div className="row">
          <div className="col s2">
            <h5>{username}: </h5>
          </div>
          <div className="col s10">
            <div className="card cyan lighten-4">
              <div className="card-content">
                <div className="row">
                  <div className="col s10 offset-s1">
                    {text}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

TweetBox.propTypes = {
  username: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default TweetBox;
