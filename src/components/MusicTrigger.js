import React, { Component, PropTypes } from 'react';
import Waypoint from 'react-waypoint';
import ReactHowler from 'react-howler';


class MusicTrigger extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    volume: 0.5,
    fadeInDuration: 5000,
    topOffset: '-200px',
  }

  onEnter = () => {
    console.log('enter')
    const { fadeInDuration, volume } = this.props;
    this.audio.howler.fade(0, volume, fadeInDuration)
  }

  onLeave = () => {
    console.log('leave')
    const { fadeInDuration, volume } = this.props;
    this.audio.howler.fade(volume, 0, fadeInDuration)
  }

  render() {
    const { musicSrc, soundRemainPx } = this.props
    return (
      <Waypoint
        onEnter={this.onEnter}
        onLeave={this.onLeave}
        topOffset={soundRemainPx}
      >
        <div>
          <ReactHowler
            src={musicSrc}
            playing={true}
            volume={0.0}
            ref={(ref) => {this.audio = ref}}
            loop={true}
            debug={true}
          />
        </div>
      </Waypoint>
    );
  }
}

MusicTrigger.propTypes = {
  musicSrc: PropTypes.string.isRequired,
  volume: PropTypes.number,
  fadeInDuration: PropTypes.number,
  soundRemainPx: PropTypes.string,
};

export default MusicTrigger;
