import React, { Component } from 'react';
import Paragraph from './components/Paragraph';

import {
  ParallaxContainer,
  ParallaxLayer,
} from './components/Parallax';

import chirpy from './images/chirpy.png';
import mountain from './images/mountain.png';
import tree from './images/tree.png';
import nightSky from './images/night-sky.png';

class App extends Component {
  render() {
    const imageStyle = {
      minHeight: '800px',
      width: '100vw',
    };
    // const imageStyle = {
    //   minHeight: '100%',
    //   minWidth: '100%',
    //   height: 'auto',
    //   width: 'auto',
    // };
    return (
      <div>
        <Paragraph
          text={"第一句引言"}
          textAlign="center"
          verticalAlign="middle"
          height="100vh"
          fontSize="3em"
          color="rgba(220, 220, 220, 0.7)"
          backgroundColor="rgba(20, 20, 20, 1.0)"
        />
        <Paragraph
          text={"第二句引言"}
          textAlign="center"
          verticalAlign="middle"
          height="50vh"
          fontSize="3em"
          color="rgba(120, 220, 30, 0.3)"
          backgroundColor="rgba(100, 20, 30, 1.0)"
        />
        <ParallaxContainer containerHeight="150vh">
          <ParallaxLayer speed={0.1} startTop={'-800px'} zIndex={-10} id={'1'}>
            <img style={imageStyle} src={'https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_bg.jpg'} />
          </ParallaxLayer>
          <ParallaxLayer speed={0.2} startTop={'0px'} zIndex={10} id={'2'}>
            <img style={imageStyle} src={'https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_man.png'} />
          </ParallaxLayer>
        </ParallaxContainer>
        <Paragraph
          text={"第三句引言"}
          textAlign="center"
          verticalAlign="middle"
          height="100vh"
          fontSize="3em"
          color="rgba(220, 220, 220, 0.7)"
          backgroundColor="rgba(20, 20, 20, 1.0)"
        />
        <Paragraph
          text={"第四句引言"}
          textAlign="center"
          verticalAlign="middle"
          height="50vh"
          fontSize="3em"
          color="rgba(120, 220, 30, 0.3)"
          backgroundColor="rgba(100, 20, 30, 1.0)"
        />

      </div>
    );
  }
}

export default App;
