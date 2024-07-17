import React from "react";
import { Col, Row, Divider } from "antd";
function Footer() {
  return (
    <>
      <div className="footer">
      <Divider />
        <Row > 
          <Col span={8}>
            <div className="footer-1">
              <Row>
                <Col className='spanFurn' span={24} >
                  <span style={{ fontSize: "1.5rem", fontWeight: "700" }}>
                    Furniro.
                  </span>
                </Col>
                <Col style={{color:"#9F9F9F" , fontSize:"1rem"}}>
                  <p>400 University Drive Suite 200 Coral </p>
                  <p>Gables,</p>
                  <p>FL 33134 USA</p>
                </Col>
              </Row>
            </div>
          </Col>
          <Col span={16}>
            <div className="footer-2">
              <div className="f2-a">
                <ul  style={{listStyle:"none"}}>
                  <li>Links</li>
                <li>Home</li>
                  <li>Shop</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </div>
              
              <div className="f2-b">
                <ul style={{listStyle:"none"}}>
                  <li>Help</li>
                  <li>Payment Options</li>
                  <li>Returns</li>
                  <li>Privacy Policies</li>
                </ul>
              </div>

              <div className="f2-c">
                <ul style={{listStyle:"none"}}>
                  <li>Newsletter</li>
                  <li><input type="email" placeholder="Enter Your Email Address"></input>
                <button type="button">SUBSCRIBE</button>
                </li>
                </ul>
                
                
              </div>
            </div>
          </Col>
        </Row>
<Divider/>
<footer>2023 furino. All rights reserved</footer>
      </div>
    
    </>
  );
}

export default Footer;
