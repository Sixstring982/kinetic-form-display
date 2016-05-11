import * as Action from '../actions';

const INITIAL_STATE = {
  username: 'Username',
  text: 'Tweet',
};

const parseTweet = tweet => {
  const regex = /.*:.*:.*@(.*):\s(.*)"/g;
  const matches = regex.exec(tweet);
  return {
    username: matches[1],
    text: matches[2],
  };
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Action.FETCH_LAST_TWEET:
      return parseTweet(action.tweet);
    default:
      return state;
  }
};
