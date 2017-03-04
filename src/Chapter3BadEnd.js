import React from 'react';
import cn from 'classnames';

import Paragraph from './components/Paragraph';
import FixedImage from './components/FixedImage';

import part1 from './content/1-1';
import part2 from './content/2-1';

import oceanStar from './images/ocean-star.jpg';
import libai from './images/libai.jpg';


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
          text={"第三章"}
          textAlign="center"
          verticalAlign="middle"
          height="100vh"
          fontSize="3em"
        />
        <Paragraph
          text={part2}
          fontSize="1em"
        />
        <FixedImage
          imgSrc={oceanStar}
          height="100vh"
        />
        <Paragraph
          text={part2}
          fontSize="1em"
        />
        <FixedImage
          imgSrc={libai}
          height="100vh"
        />
      </div>
    </div>
  );
};

export default Chapter2;
