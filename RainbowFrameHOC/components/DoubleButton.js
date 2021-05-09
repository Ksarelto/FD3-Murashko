import React from 'react';
import PropTypes from 'prop-types';

class DoubleButton extends React.Component {

  static propTypes = {
    caption1: PropTypes.string.isRequired,
    caption2: PropTypes.string.isRequired,
    cbPressed: PropTypes.func.isRequired,
  };

  callAlert = (e) => {
    const val = e.target.value;
    this.props.cbPressed(val);
  }

  render() {
    return (
      <div>
        <input type='button' value={this.props.caption1} onClick={this.callAlert}></input>
        {this.props.children}
        <input type='button' value={this.props.caption2} onClick={this.callAlert}></input>
      </div>
    );
  }

}

export default DoubleButton;
