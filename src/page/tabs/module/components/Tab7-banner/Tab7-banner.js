import React, {useState} from "react"
import BannerHeader from "../Banner-header";
import {Button, Form, Input} from "antd";
import {QuestionCircleOutlined} from "@ant-design/icons";
import "./Tab7-banner.css"
function Tab7Banner(){
    let [data] = useState({
        formList:[
            {id:1, rules:false,title:"用途",placeholder:"baseball,Halloween,kitchen",extra:"添加更多"},
            {id:2, rules:false,title:"其它属性",placeholder:"antique,cordless,waterproof",extra:"添加更多"},
            {id:3, rules:false,title:"Subject Matter",placeholder:"Invierno",extra:"添加更多"},
            {id:4, rules:false,title:"目标消费群体",placeholder:"teens,toddlers,cats",extra:"添加更多"},
            {id:5, rules:false,title:"搜索关键字",placeholder:"Electric",extra:""},
            {id:6, rules:false,title:"白金关键字",placeholder:'"example_text"',extra:"添加更多"},

        ]
    })
    return(
        <div className="tab7-box">
            <BannerHeader/>
            <Form labelCol={{span: 4}} wrapperCol={{span: 14}} layout="horizontal">
                {
                    data.formList.map((item,index)=>{
                        return(
                            <Form.Item name={item.title} key={index} extra={item.extra} label={
                                <span className="tab1-form-title">{item.title}&nbsp;<QuestionCircleOutlined style={{color: "#008296"}}/></span>}
                                       rules={[{required: item.rules, message: '一段验证信息'}]}>
                                    <Input placeholder={item.placeholder} style={ item.id === 5?{}:{width:"320px"}}/>
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
export default Tab7Banner