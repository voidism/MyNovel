import React, { PropTypes } from 'react';

const ParallaxLayer = (props) => {
  const { speed, startTop, distanceMoved, zIndex } = props;
  const distanceToTop = (1 - speed) * distanceMoved;
  const transform = props.hidden ? '' : `translateY(${distanceToTop}px)`;
  const style = {
    position: 'absolute',
    display: props.hidden ? 'none' : '',
    top: startTop,
    transform,
    zIndex,
  };
  return (
    <div style={style}>
      {props.children}
    </div>
  );
};

ParallaxLayer.propTypes = {
  speed: PropTypes.number.isRequired,
  startTop: PropTypes.string.isRequired,
  hidden: PropTypes.bool.isRequired,
  zIndex: PropTypes.number.isRequired,
  distanceMoved: PropTypes.number.isRequired,
};

export default ParallaxLayer;
