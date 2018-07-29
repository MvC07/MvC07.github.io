import React, { Component } from 'react';
import { Icon } from 'antd';

import './main.css';

class Contact extends Component {
  render() {
      return(
          
            <div className="headline5">
                <div>
                Follow me!
                </div>
                <div>
                mona.voncontzen@gmail.com
                </div>
            
                <div>
                <a className="contacticon" href="https://twitter.com/mona_mvc07" target="_blank" rel="noopener noreferrer">      
                <Icon type="twitter" />
                </a>
                <a className="contacticon"href="https://www.linkedin.com/in/mvc07/" target="_blank" rel="noopener noreferrer">      
                <Icon type="linkedin" />
                </a>
                <a className="contacticon"href="https://github.com/MvC07" target="_blank" rel="noopener noreferrer">      
                <Icon type="github" />
                </a>
                </div>
            </div>
      )
  }
}

export default Contact;