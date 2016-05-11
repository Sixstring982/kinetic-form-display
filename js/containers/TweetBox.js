import { connect } from 'react-redux';
import TweetBox from '../components/TweetBox.jsx';

const mapStateToProps = state => ({
  username: `@${state.tweet.username}`,
  text: state.tweet.text,
});

const mapDispatchToProps = _dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TweetBox);
