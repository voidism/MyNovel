import React, { PropTypes } from 'react';
import cn from 'classnames';

const Paragraph = ({
  text,
  fontSize = '1em',
  color = 'rgba(20, 20, 20, 0.9)',
  backgroundColor = 'rgba(200, 200, 200, 1.0)',
  wrapperBackgroundColor = null,
  lineHeight = '170%',
  height = '',
  textAlign = 'left',
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
    ...extraTextStyle,
  };
  const wrapperFlexClass = cn(
    'row',
    'middle-xs',
    'middle-sm',
    'middle-md',
    'middle-lg',
    ...extraWrapperClass,
  )
  const flexClasses = cn(
    'col-xs-12',
    'col-sm-offset-2',
    'col-sm-8',
    'col-md-offset-3',
    'col-md-6',
    'col-lg-offset-4',
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
