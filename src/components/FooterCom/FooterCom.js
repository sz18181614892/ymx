import React from "react"
import "./FooterCom.css"
import IconFont from "../Icon/Icon";
import {Layout, Row, Col} from 'antd';
const {Footer} = Layout;

function FooterCom() {
    return (
        <Footer>
            <Row>
                <Col span="20">
                    <ul className="footer-ul">
                        <li>帮助<span>|</span></li>
                        <li>计划政策<span>|</span></li>
                        <li>
                            <label>
                                <select className="footer-select">
                                    <option value="中文">中文</option>
                                </select>
                            </label>
                        </li>
                    </ul>
                </Col>
                <Col className="copyright" span="4">© 1999-2020年，亚马逊公司或其附属公司</Col>
            </Row>
            <div className="feedback">
                <button>反馈</button>
                <IconFont type="icon-guanbi" className="iconfont-gb"/>
            </div>
        </Footer>
    )
}
export default FooterCom