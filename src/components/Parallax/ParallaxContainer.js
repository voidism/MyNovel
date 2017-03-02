import React, { Component, Children, PropTypes } from 'react';

class ParallaxContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 'initial',
      childrenHidden: true,
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
    requestAnimationFrame(() => {
      const viewportHeight = window.innerHeight;
      const container = this.container;
      const containerDimensions = container.getBoundingClientRect();
      const { top, bottom, height } = containerDimensions;
      // console.log({ top, bottom, height, viewportHeight });
      if (bottom < 0 || top > viewportHeight) {
        this.setState({
          childrenHidden: true,
        });
        return;
      }
      this.setState({
        position: {
          top,
          viewportHeight,
        },
        childrenHidden: false,
      });
    });
  }

  render() {
    const { top, viewportHeight } = this.state.position;
    const { childrenHidden } = this.state;
    const { containerHeight, children } = this.props;
    const innerChildren = Children.map(
      children,
      child => React.cloneElement(child, {
        distanceMoved: viewportHeight - top,
        hidden: childrenHidden,
      }),
    );
    const containerStyle = {
      height: containerHeight,
      position: 'relative',
      overflow: 'hidden',
    };
    return (
      <div style={containerStyle} ref={(c) => { this.container = c; }}>
        {innerChildren}
      </div>
    );
  }
}

ParallaxContainer.propTypes = {
  children: PropTypes.element.isRequired,
  containerHeight: PropTypes.string.isRequired,
};

export default ParallaxContainer;
