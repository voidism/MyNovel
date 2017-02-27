import React, { Component, Children, PropTypes } from 'react';

class ParallaxContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 'initial',
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
      const scrollTop = Math.max(
        document.body.scrollTop,
        document.documentElement.scrollTop
      );

      const viewportHeight = window.innerHeight;
      const widget = this.widget;
      const widgetDimensions = widget.getBoundingClientRect();
      const { top, bottom, height } = widgetDimensions;

      if (bottom < 0 || top > viewportHeight) {
        return;
      }
      // console.log({ top, bottom, height, viewportHeight, scrollTop });
      this.setState({
        position: {
          top, bottom, height, viewportHeight, scrollTop,
        },
      });
    })
  }

  render() {
    const { height, children } = this.props;
    const innerChildren = Children.map(children,
      children,
      child => React.cloneElement(child, {})
    );
    return (
      <div style={{ height }}>
        {innerChildren}
      </div>
    );
  }
}

ParallaxContainer.propTypes = {
  children: PropTypes.element,
  height: PropTypes.string.isRequired,
};

export default ParallaxContainer;
