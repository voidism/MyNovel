import React, { Component, PropTypes } from 'react';
import Waypoint from 'react-waypoint';
import ReactHowler from 'react-howler';


class MusicTrigger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
    }
  }

  onEnter = () => {
    this.setState({
      isPlaying: true,
    });
  }

  onLeave = () => {
    this.setState({
      isPlaying: false,
    });
  }

  render() {
    const { isPlaying } = this.state;
    return (
      <Waypoint onEnter={this.onEnter} onLeave={this.onLeave}>
        <div>
          <ReactHowler
            src='http://goldfirestudios.com/proj/howlerjs/sound.ogg'
            playing={isPlaying}
          />
        </div>
      </Waypoint>
    );
  }
}

MusicTrigger.propTypes = {

};

export default MusicTrigger;
