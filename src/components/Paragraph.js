import React, { PropTypes } from 'react';


const Paragraph = ({
  text,
  color = 'rgba(20, 20, 20, 0.9)',
  backgroundColor = 'rgba(200, 200, 200, 1.0)',
  lineHeight = '170%',
  height = '',
  textAlign = 'left',
  extraStyle = {},
}) => {
  const textStyle = {
    color,
    backgroundColor,
    lineHeight,
    height,
    textAlign,
    ...extraStyle,
  };
  return (
    <div style={textStyle}>
      {text}
    </div>
  );
};

Paragraph.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  lineHeight: PropTypes.string,
  height: PropTypes.string,
  textAlign: PropTypes.string,
  extraStyle: PropTypes.object,
};

export default Paragraph;
