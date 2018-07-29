import React, { Component } from 'react';
import { Col } from 'antd';

import { HashLink as Link } from 'react-router-hash-link';

import './navbar.css';

class Navbar extends Component {
  state = {
    current: 'mail',
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

    render() {
        return(    
        
        <div>

          <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={0}>
          <div className="mvc">
          <Link to={'/'}>
            <img src='/MvC.png' height="75px" alt="logo" />
          </Link>
          </div>
          </Col>

          <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={0}>
          <div class="navbar">
            <h4><span><Link to={'./aboutme'}><a class="buttons">About Me</a></Link>   <Link to={'./contact'}><a class="buttons">Contact</a></Link></span></h4>
          </div>    
          </Col>

          <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={0}>
          <div className="wonderland">
          <Link to={'/'}>
            <img src='/Wonderland.png' height="75px" alt="logo" />
          </Link>
          </div>
          </Col>

           <Col xxl={0} xl={0} lg={0} md={0} sm={0} xs={6}>
          <div className="mvc1">
          <Link to={'/'}>
            <img src='/MvC.png' height="55px" alt="logo" />
          </Link>
          </div>
          </Col>

          <Col xxl={0} xl={0} lg={0} md={0} sm={0} xs={12}>
          <div class="navbar1">
            <h4><span><a class="buttons1" href="./aboutme">About Me</a>   <a class="buttons1" href="./contact">Contact</a></span></h4>
          </div>    
          </Col>

          <Col xxl={0} xl={0} lg={0} md={0} sm={0} xs={6}>
          <div className="wonderland1">
          <Link to={'/'}>
            <img src='/Wonderland.png' height="55px" alt="logo" />
          </Link>
          </div>
          </Col>

        </div>
        )
    }
}

export default Navbar;