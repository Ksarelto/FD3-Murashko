import React from 'react';
import PropTypes from 'prop-types';
import './MultilineText.css'

class MultilineText extends React.Component {

  static propTypes = {
    multilineText: PropTypes.string.isRequired,
  };


  render() {
    let res = this.props.multilineText.split(/(?:<br[\s/]*>)/g);
    let arr = []
    res.forEach((el, ind, array) => {
      if (ind === array.length - 1) {
        arr.push(el);
      } else {
        arr.push(el);
        arr.push(<br key={ind}></br>);
      }
    })
    return (
      <div className='multiline'>
        {arr}
      </div>
    );
  }

}

export default MultilineText;
