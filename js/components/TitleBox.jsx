import React, { PropTypes } from 'react';

const TitleBox = ({
  title,
}) => (
  <h1>{title}</h1>
);

TitleBox.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TitleBox;
