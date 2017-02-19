import React, { PropTypes } from 'react';

const textStyle = {
  color: '#222222',
  backgroundColor: '#22FFFF',
  lineHeight: '170%',
};

const TextArea = ({ text }) => {
  return (
    <div style={textStyle}>
      {text}
    </div>
  );
};

TextArea.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TextArea;
