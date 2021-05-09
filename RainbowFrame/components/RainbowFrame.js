import React from 'react';
import PropTypes from 'prop-types';

class RainbowFrame extends React.Component {

  static propTypes = {
    colors: PropTypes.array.isRequired,
  };

  render() {
    let frame = this.props.children;
    this.props.colors.forEach((el) => {
      frame = <div style={{ border: `5px solid ${el}`, margin: '10px', textAlign: 'center' }}>{frame}</div>;
    })
    return (
      <div>
        {frame}
      </div>
    );
  }

}

export default RainbowFrame;
