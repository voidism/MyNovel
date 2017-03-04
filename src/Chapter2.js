import React from 'react';
import cn from 'classnames';

import Paragraph from './components/Paragraph';
import ImageText from './components/ImageText';

import part1 from './content/1-1';
import part2 from './content/2-1';

import libai from './images/libai.jpg';
import libaiReverse from './images/libai_reverse.jpg';


const Chapter2 = () => {
  const insideClass = cn(
    'col-xs',
    'col-sm',
    'col-md',
    'col-lg',
  );

  return (
    <div className="row">
      <div className={insideClass}>
        <Paragraph
          text={"第二章"}
          textAlign="center"
          verticalAlign="middle"
          height="100vh"
          fontSize="3em"
        />
        <Paragraph
          text={part2}
          fontSize="1em"
        />
        <ImageText
          imgSrc={libaiReverse}
          text={'床前日月光\n廢水流光光'}
        />
        <ImageText
          imgSrc={libai}
          text={'你在工三小？'}
          reverse
        />
        <ImageText
          imgSrc={libaiReverse}
          text={'床前日月光\n廢水流光光'}
          vertical
        />
        <ImageText
          imgSrc={libai}
          text={'你在工三小？'}
          reverse
          vertical
        />
        <Paragraph
          text={part2}
          fontSize="1em"
        />
      </div>
    </div>
  );
};

export default Chapter2;
