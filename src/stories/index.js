import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';
import Welcome from './Welcome';

import Chapter1 from '../Chapter1';

import Paragraph from '../components/Paragraph';
import MusicTrigger from '../components/MusicTrigger';

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
      <MusicTrigger />
      <Paragraph text={'你好啊，這是再一段文字'} height={'100vh'} />
      <Paragraph text={'底下沒了'} height={'100vh'} />
    </div>
  ));
