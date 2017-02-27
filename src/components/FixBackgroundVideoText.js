import React, { Component, PropTypes } from 'react';


class FixBackgroundVideoText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInViewport: false,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.position);
    document.addEventListener('scroll', this.position);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.position);
    document.removeEventListener('scroll', this.position);
  }

  position = () => {
    const { isInViewport } = this.state;
    const viewportHeight = window.innerHeight;
    const self = this.self;
    const selfDimensions = self.getBoundingClientRect();
    const { top, bottom } = selfDimensions;
    const nextIsInViewport = (bottom > 0 && top < viewportHeight);
    if (isInViewport === nextIsInViewport) {
      return;
    }
    this.setState({
      isInViewport: nextIsInViewport,
    });
  }

  render() {
    const { isInViewport } = this.state;
    const containerStyle = {
      overflow: 'hidden',
    };
    const backgroundVideoStyle = {
      top: '50%',
      left: '50%',
      position: 'fixed',
      minWidth: '100%',
      minHeight: '100%',
      width: 'auto',
      height: 'auto',
      transform: 'translateX(-50%) translateY(-50%)',
      zIndex: '-10000',
      backgroundSize: 'cover',
      display: isInViewport ? '' : 'none',
    };
    return (
      <div ref={(c) => { this.self = c; }} style={containerStyle}>
        <video
          style={backgroundVideoStyle}
          autoPlay
          muted
          loop
        >
          <source src="https://s3-ap-southeast-1.amazonaws.com/novel-videos/aurora.mp4" type="video/mp4" />
        </video>
        {this.props.children}
      </div>
    );
  }
}

FixBackgroundVideoText.propTypes = {

};

export default FixBackgroundVideoText;
