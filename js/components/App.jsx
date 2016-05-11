import React from 'react';
import TitleBox from '../containers/TitleBox';
import TweetBox from '../containers/TweetBox';

const App = () => (
  <div className="container">
    <div className="row">
      <div className="col s12">
        <TitleBox />
      </div>
    </div>
    <div className="row">
      <div className="col s12">
        <TweetBox />
      </div>
    </div>
  </div>
);

App.propTypes = {

};

export default App;
