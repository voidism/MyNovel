import React, { Component } from 'react';

import Paragraph from './components/Paragraph';
import MusicTrigger from './components/MusicTrigger';
import ImageText from './components/ImageText';
import FixedImage from './components/FixedImage';
import FixBackgroundVideoText from './components/FixBackgroundVideoText';
import {
  ParallaxContainer,
  ParallaxLayer,
} from './components/Parallax';


import part1 from './content/1-1';
import part2 from './content/2-1';

import libai from './images/libai.jpg';
import libaiReverse from './images/libai_reverse.jpg';
import oceanStar from './images/ocean-star.jpg';
import aurora from './images/aurora.png';


class App extends Component {
  render() {
    const imageStyle = {
      minHeight: '800px',
      width: '100vw',
    };
    return (
      <div>
        <Paragraph
          key="App-first-paragraph"
          text={"小說標題"}
          textAlign="center"
          verticalAlign="middle"
          height="100vh"
          fontSize="3em"
          color="rgba(220, 220, 220, 0.7)"
          backgroundColor="rgba(20, 20, 20, 1.0)"
        />
        <Paragraph
          text={"來個引言之類的\n順便改個顏色"}
          textAlign="center"
          verticalAlign="middle"
          height="50vh"
          fontSize="3em"
          color="rgba(120, 220, 30, 0.3)"
          backgroundColor="rgba(100, 20, 30, 1.0)"
        />
        <ParallaxContainer containerHeight="150vh">
          <ParallaxLayer speed={0.1} startTop={'-600px'} zIndex={-10} id={'1'}>
            <img style={imageStyle} src={'https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_bg.jpg'} />
          </ParallaxLayer>
          <ParallaxLayer speed={0.2} startTop={'0px'} zIndex={10} id={'2'}>
            <img style={imageStyle} src={'https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_01.png'} />
          </ParallaxLayer>
          <ParallaxLayer speed={0.3} startTop={'0px'} zIndex={10} id={'2'}>
            <img style={imageStyle} src={'https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_02.png'} />
          </ParallaxLayer>
          <ParallaxLayer speed={0.4} startTop={'0px'} zIndex={10} id={'2'}>
            <img style={imageStyle} src={'https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_03.png'} />
          </ParallaxLayer>
          <ParallaxLayer speed={0.5} startTop={'0px'} zIndex={10} id={'2'}>
            <img style={imageStyle} src={'https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_man.png'} />
          </ParallaxLayer>
        </ParallaxContainer>
        <Paragraph
          text={"上面那個是Parallax"}
          textAlign="center"
          verticalAlign="middle"
          height="100vh"
          fontSize="3em"
          color="rgba(220, 220, 220, 0.7)"
          backgroundColor="rgba(20, 20, 20, 1.0)"
        />
        <Paragraph
          text={"（滾到這裡開始有音效）"}
          textAlign="center"
          fontSize="1em"
        />
        <MusicTrigger
          musicSrc="https://s3-ap-southeast-1.amazonaws.com/novel-videos/wave.mp3"
          volume={0.2}
          playing={true}
          fadeInDUration={5000}
          soundRemainPx="-2000px"
        />
        <Paragraph
          text={part2}
          fontSize="1em"
        />
        <Paragraph
          text={"（以上大約一千字）"}
          textAlign="center"
          fontSize="1em"
        />
        <ImageText
          imgSrc={libaiReverse}
          text={'床前日月光\n疑似地上霜\n\n圖片在左邊'}
        />
        <ImageText
          imgSrc={libai}
          text={'舉頭望明月\n低頭思故鄉\n\n圖片在右邊'}
          reverse
        />
        <ImageText
          imgSrc={libaiReverse}
          text={'床前日月光\n疑似地上霜\n\n直行也可以'}
          vertical
        />
        <ImageText
          imgSrc={libai}
          text={'舉頭望明月\n低頭思故鄉'}
          reverse
          vertical
        />
        <Paragraph
          text={part2}
          fontSize="1em"
        />
        <FixBackgroundVideoText srcUrl={'https://s3-ap-southeast-1.amazonaws.com/novel-videos/aurora.mp4'}>
          <Paragraph
            text={'這是影片上的字'}
            height={'150vh'}
            backgroundColor={'rgba(0, 0, 200, 0.1)'}
            fontSize="4em"
            textAlign="center"
            color="rgba(200, 200, 200, 0.8)"
          />
        </FixBackgroundVideoText>
        <Paragraph
          text={part2}
          fontSize="1em"
        />
        <FixedImage
          imgSrc={oceanStar}
          height="200vh"
        />
        <Paragraph
          text={part2}
          fontSize="1em"
        />
        <FixedImage
          imgSrc={aurora}
          height="30vh"
        />
        <Paragraph
          text={part2}
          fontSize="1em"
        />
        <Paragraph
          text={"結束"}
          textAlign="center"
          fontSize="1em"
        />
      </div>
    );
  }
}

export default App;
