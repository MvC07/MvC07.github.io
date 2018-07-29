import React, { Component } from 'react';
import { Icon, Row, Col} from 'antd';
import './bottombar.css';

class Bottombar extends Component {
  render() {
    return (
      <footer className="footer">
        <Row>
          <Col className="copyright" lg={24} sm={96}>
          <div>
          <a className="iconpadding" href="https://twitter.com/mona_mvc07" target="_blank" rel="noopener noreferrer">      
          <Icon type="twitter" />
          </a>
          <a className="iconpadding"href="https://www.linkedin.com/in/mvc07/" target="_blank" rel="noopener noreferrer">      
          <Icon type="linkedin" />
          </a>
          </div>
          <h4><font color="white">© Copyright 2018 by Mona von Contzen</font></h4>
          </Col>
        </Row>
      </footer>
    );
  }
}

export default Bottombar;