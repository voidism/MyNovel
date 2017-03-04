import React, { Component, PropTypes } from 'react';

class FixedImage extends Component {
  render() {
    const { imgSrc, height } = this.props;
    const imageStyle = {
      height,
      backgroundImage: `url(${imgSrc})`,
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
    };
    return (
      <div className="row" style={imageStyle} />
    );
  }
}

FixedImage.propTypes = {
  height: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};

export default FixedImage;
