import React, { PureComponent, PropTypes } from 'react';
import cn from 'classnames';

import Paragraph from './Paragraph';
import VerticalParagraph from './VerticalParagraph';

class ImageText extends PureComponent {
  renderText = () => {
    const { vertical, text, textHeight } = this.props;
    if (vertical) {
      return (
        <VerticalParagraph
          text={text}
          height={textHeight}
          textAlign="center"
          vertical="middle"
        />
      );
    }
    return (
      <Paragraph
        text={text}
        height={textHeight}
        textAlign="center"
        vertical="middle"
      />
    )
  }
  render() {
    const { text, imgSrc, reverse, textHeight } = this.props;
    const wrapperStyle = {
      backgroundColor: 'rgba(20, 20, 20, 1.0)',
    };
    const wrapperClass = cn(
      'row',
      'center-xs',
      'center-sm',
      'center-md',
      'center-lg',
    );
    const imageTextSetClass = cn(
      'col-xs-11',
      'col-sm-10',
      'col-md-8',
      'col-lg-6',
    );
    const imageTextSetClassOfImage = cn(
      'col-xs-12',
      'col-sm-6',
      'col-md-6',
      'col-lg-6',
    );
    const imageTextSetClassOfText = cn(
      'col-xs-12',
      'col-sm-6',
      'col-md-6',
      'col-lg-6',
    );
    const innerContainerClass = cn(
      'row',
      'middle-xs',
      'middle-sm',
      'middle-md',
      'middle-lg',
      { reverse },
    );
    const imageStyle = {
      maxHeight: '100%',
      maxWidth: '100%',
    };
    return (
      <div className={wrapperClass} style={wrapperStyle}>
        <div className={imageTextSetClass}>
          <div className={innerContainerClass}>
            <div className={imageTextSetClassOfImage}>
              <img src={imgSrc} style={imageStyle} />
            </div>
            <div className={imageTextSetClassOfText}>
              {this.renderText()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ImageText.defaultProps = {
  reverse: false,
  vertical: false,
  textHeight: ''
}

ImageText.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  height: PropTypes.string,
  textHeight: PropTypes.string,
  reverse: PropTypes.bool,
  vertical: PropTypes.bool,
};

export default ImageText;
