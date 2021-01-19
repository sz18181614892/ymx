import React, {useState} from "react"
import BannerHeader from "../Banner-header";
import {Button, Form, Input} from "antd";
import {QuestionCircleOutlined} from "@ant-design/icons";
import "./Tab6-banner.css"

function Tab6Banner() {

    let [data] = useState({
        formList:[
            {id:1, rules:false,title:"商品特性",placeholder:"Delicious honey-apricot glaze",extra:"添加更多"},
            {id:2, rules:false,title:"关于此艺术品",placeholder:"This ham has been smoked for 12 hours...",extra:""},
            {id:3, rules:false,title:"法律免责声明",placeholder:"For residents of NJ,VT,MA,and Mi,must be at least 18 & over to purchase",extra:""},

        ]
    })
    return (
        <div className="tab6-box">
            <BannerHeader/>
            <Form labelCol={{span: 4}} wrapperCol={{span: 14}} layout="horizontal">
                {
                    data.formList.map((item,index)=>{
                        return(
                            <Form.Item name={item.title} key={index} extra={item.extra} label={
                                <span className="tab1-form-title">{item.title}&nbsp;<QuestionCircleOutlined style={{color: "#008296"}}/></span>}
                                       rules={[{required: item.rules, message: '一段验证信息'}]}>
                                {
                                    item.id === 1?<Input placeholder={item.placeholder}/>:""
                                }
                                {
                                    item.id === 2||item.id===3?<textarea className="tab6-textarea" placeholder={item.placeholder}/> :""
                                }
                            </Form.Item>
                        )
                    })
                }
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

export default Tab6Banner