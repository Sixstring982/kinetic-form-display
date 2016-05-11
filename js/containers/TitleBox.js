import { connect } from 'react-redux';
import TitleBox from '../components/TitleBox.jsx';

const mapStateToProps = _state => ({
  title: 'Kinetic Form',
});

const mapDispatchToProps = _dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TitleBox);
