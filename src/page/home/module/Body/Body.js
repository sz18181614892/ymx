import React, {useState} from "react"
import {Input, Row, Col} from 'antd';
import {Link} from "react-router-dom";
import "./Body.css"

function Body() {
    let [data] = useState({
        list: [
            {id: 1, title: "我要添加未在亚马逊上销售的新商品", path: "/commodity"},
            {id: 2, title: "我正在上传文件来添加多个商品", path: "/commodity"},
            {id: 3, title: "我想要了解如何发布商品", path: "/commodity"}
        ]
    });
    const {Search} = Input;
    return (
        <div className="home-body-box">
            <div className="home-body">
                <div className="home-body-title">要开始添加商品</div>
                <h1>请首先在亚马逊目录中查找您的商品</h1>
                <Search placeholder="商品名称、通用产品代码(UPC)、EAN、国际标准图书编号(ISBN)或亚马逊商品编码(ASIN)" allowClear/>
                <Row className="body-row">
                    {
                        data.list.map(item => {
                            return (
                                <Col className="body-col" span="8" key={item.id}>
                                    <Link to={item.path}>
                                        {item.title}
                                    </Link>
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>
        </div>
    )
}

export default Body