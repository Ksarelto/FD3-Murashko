import React from 'react';
import PropTypes from 'prop-types';
import DoubleButton from './DoubleButton';
import { withRainbowFrame } from './withRainbowFrame';

class MainComponent extends React.Component {

  static PropTypes = {
    colors: PropTypes.array.isRequired
  };


  render() {
    const FramedDoubleButton = withRainbowFrame(this.props.colors)(DoubleButton);
    return (
      <div className='main'>
        <DoubleButton caption1="однажды" caption2="пору" cbPressed={num => alert(num)} >в студёную зимнюю</DoubleButton>
        <FramedDoubleButton caption1="я из лесу" caption2="мороз" cbPressed={num => alert(num)} >вышел, был сильный</FramedDoubleButton>
      </div>
    )
  }

}

export default MainComponent;