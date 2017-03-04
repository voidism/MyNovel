import React, { PropTypes } from 'react';
import cn from 'classnames';

const Paragraph = ({
  text,
  fontSize = '1em',
  color = 'rgba(220, 220, 220, 1.0)',
  backgroundColor = 'rgba(20, 20, 20, 1.0)',
  wrapperBackgroundColor = null,
  lineHeight = '170%',
  height = '',
  textAlign = 'center',
  verticalAlign = 'top',
  extraTextStyle = {},
  extraWrapperStyle = {},
  extraTextClass = [],
  extraWrapperClass = [],
}) => {
  const wrapperStyle = {
    height,
    backgroundColor: (wrapperBackgroundColor === null) ? backgroundColor : wrapperBackgroundColor,
    ...extraWrapperStyle,
  };
  const textStyle = {
    fontSize,
    color,
    backgroundColor,
    lineHeight,
    textAlign,
    verticalAlign,
    whiteSpace: 'pre-wrap',
    writingMode: 'vertical-rl',
    ...extraTextStyle,
  };
  const wrapperFlexClass = cn(
    'row',
    'center-xs',
    'center-sm',
    'center-md',
    'center-lg',
    'middle-xs',
    'middle-sm',
    'middle-md',
    'middle-lg',
    ...extraWrapperClass,
  )
  const flexClasses = cn(
    'col-xs-11',
    'col-sm-8',
    'col-md-6',
    'col-lg-4',
    ...extraTextClass,
  );
  return (
    <div className={wrapperFlexClass} style={wrapperStyle}>
      <div className={flexClasses} style={textStyle}>
        {text}
      </div>
    </div>
  );
};

Paragraph.propTypes = {
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  lineHeight: PropTypes.string,
  height: PropTypes.string,
  textAlign: PropTypes.string,
  extraStyle: PropTypes.object,
};

export default Paragraph;
