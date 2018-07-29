import React, { Component } from 'react';
import { Row, Col, Icon } from 'antd';


import './main.css';

class AboutMe extends Component {
  render() {
      return(
       
        <div className="headline1">
        <div className="headline3">
        Mona von Contzen
        </div>
        <Row type="flex" justify="center">
        <Col xxl={6} xl={0} lg={0} md={0} sm={0} xs={0}  className="box"> 
        </Col>
        <Col xxl={4} xl={24} lg={24} md={24} sm={24} xs={24}  className="box">  
            <div>
                <div>
                People Person
                </div>
                <p>Respected leader of international teams up to 150 employees</p>
                <p>Experience in various projects focused on change management and innovation management</p>
                <p>Co-Founder and Community Manager of Fluxpower.io</p>
            </div>
        </Col>
        <Col xxl={4} xl={24} lg={24} md={24} sm={24} xs={24} className="box">  
            <div>
                <div>
                Sales Expert
                </div>
                <p>9 years experience in stationary retail and field sales</p>
                <p>Extensive market knowledge of different FMCG industries such as retail food industry, pharmaceutical industry, real estate, renewable energy, and finance</p>
                <p>Proven to adapt to other markets quickly</p>
            </div>
        </Col>
        <Col xxl={4} xl={24} lg={24} md={24} sm={24} xs={24} className="box">  
            <div>
                <div>
                Developer
                </div>
                <p>Self taught (beginner) full stack development with NodeJS, React, React Native, deployed to AWS</p>
                <p>Website self-coded &nbsp;<Icon type="heart" /></p>
            </div>
        </Col>
        <Col xxl={6} xl={0} lg={0} md={0} sm={0} xs={0}  className="box">  
        </Col>
        
        <div className="headline2">
        German & English
        </div>
        <div className="headline2">
        Playful & Serious
        </div>

        
        
        </Row>
      </div>
     
      )
  }
}

export default AboutMe;