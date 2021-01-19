import React,{useState} from "react"
import "./Tab3-banner.css"
import BannerHeader from "../Banner-header";
import {Button, Form, Input, Select, DatePicker, Space ,Radio } from "antd";
import {QuestionCircleOutlined} from "@ant-design/icons";
import IconFont from "../../../../../components/Icon/Icon";
import moment from 'moment'
import locale from 'antd/lib/date-picker/locale/zh_CN'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')
function Tab3Banner(){
    let [data] = useState({
        FormList:[
            {id:1, rules:false,title:"商品发布日期",placeholder:"MM/DD/YYYY",extra:""},
            {id:2, rules:false,title:"卖家SKU",placeholder:"101MyCollectible1",extra:"提交后，无法更改此字段"},
            {id:3, rules:false,title:"收况说明",placeholder:"Dust cover missing. Some scratches on the front.",extra:""},
            {id:4, rules:true,title:"您的价格",placeholder:"例如：50.00",extra:""},
            {id:5, rules:false,title:"优惠价",placeholder:"例如：50.00",extra:""},
            {id:6, rules:false,title:"优惠价开始时间",placeholder:"MM/DD/YYYY",extra:""},
            {id:7, rules:false,title:"优惠价结束时间",placeholder:"MM/DD/YYYY",extra:""},
            {id:8, rules:false,title:"订单商品最大数量",placeholder:"10",extra:""},
            {id:9, rules:false,title:"处理时间",placeholder:"5",extra:""},
            {id:10, rules:false,title:"补货日期",placeholder:"MM/DD/YYYY",extra:""},
            {id:11, rules:false,title:"商品税费代码",placeholder:"A_GEN_NOTAX",extra:""},
            {id:12, rules:false,title:"商品可以是礼品赠言",placeholder:"-选择-",extra:""},
            {id:13, rules:false,title:"可否提供礼品包装",placeholder:"-选择-",extra:""},
            {id:14, rules:true,title:"状况",placeholder:"全新",extra:"提交后，无法更改此字段"},
            {id:15, rules:false,title:"配送模板",placeholder:"标准美国模板-100美金",extra:""},
        ]
    })
    return(
        <div className="tab3-box">
            <BannerHeader flag={true}/>
            <Form labelCol={{span: 4}} wrapperCol={{span: 14}} layout="horizontal">
                {
                    data.FormList.map((item,index)=>{
                        return(
                            <Form.Item  key={index} extra={item.extra} label={
                                <span className="tab1-form-title">{item.title}&nbsp;<QuestionCircleOutlined style={{color: "#008296"}}/></span>}
                                       rules={[{required: item.rules, message: '一段验证信息'}]}>
                                {
                                    item.id === 1 || item.id === 6 || item.id === 7  || item.id === 10  ? <Space direction="vertical" >
                                        <DatePicker locale={locale} placeholder={item.placeholder} format="MM/DD/YYYY" />
                                    </Space>:""
                                }

                                {
                                    item.id === 2 || item.id === 8 || item.id === 9 || item.id === 11?
                                        <Input placeholder={item.placeholder}/>:""
                                }

                                {
                                    item.id === 12 || item.id === 13 || item.id === 14 || item.id === 15?<Select className="tab3-select" placeholder={item.placeholder}/>:""
                                }
                                {
                                    item.id === 3? <div className="tab3-text">
                                        <textarea placeholder="Dust cover missing.Some scratches on the front"/>
                                    </div>:""
                                }
                                {
                                    item.id === 4 || item.id === 5? <div className="tab3-price">
                                        <span>USD$</span><Input className="tab3-price-input" placeholder={item.placeholder}/>
                                    </div>:""
                                }
                                {item.id === 2 || item.id === 14?   <IconFont type="icon-suo" style={{marginLeft:"10px",fontSize:"20px"}}/> :""}
                            </Form.Item>
                        )
                    })
                }
                <Form.Item label={<span className="tab1-form-title">配送渠道</span>}>
                    <div className="distribution-box">
                        <div className="distribution-top">
                            <Radio.Group name="radiogroup" defaultValue={2}>
                            <Radio value={1}>我将自行配送此商品</Radio>
                            </Radio.Group>
                            <p>（卖家自行配送）</p>
                        </div>
                        <div className="distribution-bottom">
                            <Radio.Group name="radiogroup" defaultValue={2}>
                            <Radio value={2}>亚马逊将会配送并提供客户服务</Radio>
                            </Radio.Group>
                            <p>（亚马逊配送）</p>
                        </div>
                    </div>
                    <div className="distribution-char">
                        <IconFont type="icon-jinggao1" className="distribution-char-icon"/>
                        <span className="distribution-char-title">您已选择使用亚马逊配送该商品的订单。亚马逊街道您的商品后即可开始销售。使用亚马逊配送收费标准。<span className="tab1-crumbs-title">了解更多信息</span></span>
                    </div>
                </Form.Item>
                <Form.Item>
                    <div className="tab1-button">
                        <Button>取消</Button>
                        <Button>保存并完成</Button>
                    </div>
                </Form.Item>
            </Form>
        </div>
    )
}
export default Tab3Banner