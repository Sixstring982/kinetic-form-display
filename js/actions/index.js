export const FETCH_LAST_TWEET = Symbol();
export const fetchLastTweet = (tweet) => ({
  type: FETCH_LAST_TWEET,
  tweet,
});
