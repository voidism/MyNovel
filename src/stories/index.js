import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import 'flexboxgrid/css/flexboxgrid.min.css';

import Button from './Button';
import Welcome from './Welcome';

import Chapter1 from '../Chapter1';

import Paragraph from '../components/Paragraph';
import MusicTrigger from '../components/MusicTrigger';

import {
  ParallaxContainer,
  ParallaxLayer,
} from '../components/Parallax';
import FixBackgroundVideoText from '../components/FixBackgroundVideoText';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')} />
  ));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));

storiesOf('Chapter1', module)
  .add('Normal', () => (
    <Chapter1 />
  ));

storiesOf('Paragraph', module)
  .add('with short text', () => (
    <Paragraph text={'你好啊，這是一段文字'} />
  ));

storiesOf('MusicTrigger', module)
  .add('with short text', () => (
    <div>
      <Paragraph text={'你好啊，這是一段文字'} height={'100vh'} />
      <Paragraph text={'你好啊，這是另一段文字'} height={'100vh'} />
      <MusicTrigger musicSrc={'http://goldfirestudios.com/proj/howlerjs/sound.ogg'} />
      <Paragraph text={'你好啊，這是再一段文字'} height={'100vh'} />
      <Paragraph text={'底下沒了'} height={'100vh'} />
    </div>
  ));

storiesOf('Parallax', module)
  .add('with short text', () => (
    <div>
      <Paragraph text={'你好啊，這是一段文字'} height={'100vh'} />
      <Paragraph text={'你好啊，這是另一段文字'} height={'100vh'} />
      <ParallaxContainer containerHeight={'200vh'}>
        <ParallaxLayer speed={0.5} startTop={'0px'} zIndex={-10}>
          <div>Hey1</div>
        </ParallaxLayer>
        <ParallaxLayer speed={0.1} startTop={'0px'} zIndex={-10}>
          <div>Hey2</div>
        </ParallaxLayer>
      </ParallaxContainer>
      <Paragraph text={'你好啊，這是再一段文字'} height={'100vh'} />
      <Paragraph text={'底下沒了'} height={'100vh'} />
    </div>
  ));

storiesOf('FixBackgroundVideoText', module)
  .add('with short text', () => (
    <div>
      <Paragraph text={'你好啊，這是一段文字'} height={'100vh'} />
      <Paragraph text={'你好啊，這是另一段文字'} height={'100vh'} />
      <FixBackgroundVideoText>
        <Paragraph
          text={'這是影片上的字'}
          height={'150vh'}
          backgroundColor={'rgba(0, 0, 200, 0.1)'}
          textAlign="center"
          color="rgba(200, 200, 200, 0.8)"
        />
      </FixBackgroundVideoText>
      <Paragraph text={'你好啊，這是再一段文字'} height={'100vh'} />
      <Paragraph text={'底下沒了'} height={'100vh'} />
    </div>
  ));
