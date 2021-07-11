import React from 'react';
import PropTypes from 'prop-types';

export class LinksList extends React.PureComponent{
    static propTypes = {
        addedClass: PropTypes.string,
        href: PropTypes.string,
        title: PropTypes.string
      }


      render(){
          return (
                <div className={this.props.addedClass}><a href={this.props.href} title={this.props.title}></a></div>
          )
      }
}
