import React, { PropTypes } from 'react';
import { default as cn } from 'classnames';

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
  const flexClasses = cn(
    'col-xs-12',
    'col-sm-offset-2',
    'col-sm-8',
    'col-md-offset-6',
    'col-md-6',
    'col-lg-offset-4',
    'col-lg-4',
  );
  return (
    <div className="row">
      <div className={flexClasses}>
        <div style={textStyle}>
          {text}
        </div>
      </div>
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
