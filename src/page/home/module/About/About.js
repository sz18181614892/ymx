import React,{useState} from "react"
import { Layout , Row, Col } from 'antd';
import "./About.css"
function About() {
    let [data] = useState({
        list: [
            {id: 1, title: "添加产品", content: "获取向亚马逊目录中添加商品的基础知识。", more: "了解更多信息"},
            {id: 2, title: "批量发布商品", content: "了解如何使用电子表格上传您的库存等等。", more: "了解更多信息"},
            {id: 3, title: "需要获得批准的分类", content: "需要卖家获得亚马逊的批准，才能在特定商品分类中上架。", more: "管理您的销售申请"},
            {id: 4, title: "创建变体", content: "详细了解关系类型以及何时使用变体关系。", more: "使用变体向导创建变体"},
            {id: 5, title: "什么是GTIN？", content: "您可以在商品包装上找到条形码或GTIN(UPC/EAN/JAN/ISBN)。如果您没有GTIN，则可以申请豁免", more: "了解更多信息"},
            {id: 6, title: "GTIN豁免状态", content: "如果您已请求GTIN豁免，则可以在您的问题日志中查看状态。", more: "请在此查看您的状态"},
            {id: 7, title: "产品图片指导", content: "亚马逊上的每件商品都需要配有一张或多张图片。阅读有关商品信息的图片标准的信息。", more: "了解更多信息"},
            {id: 8, title: "转换为亚马逊模板", content: "如果您有自己的电子商务网站或使用其它系统，您可以将您的商品详情导出到文件中。", more: "准备您的商品信息"}
        ]
    })
    return(
        <Layout className="about-layout">
            <h3>关于添加商品</h3>
            <div className="about-box">
                <Row className="about-row">
                    {
                        data.list.map(item=>{
                            return(
                                <Col className="about-col" span="6" key={item.id}>
                                    <div className="about-title">{item.title}</div>
                                    <div className="about-content">{item.content}</div>
                                    <div className="about-more">{item.more}</div>
                                </Col>
                            )
                        })
                    }
            </Row>
        </div>
</Layout>
    )
}
export default About