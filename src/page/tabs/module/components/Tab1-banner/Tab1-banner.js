import React,{useState} from "react"
import "./Tab1-banner.css"
import {Input, Form, Button, Select} from 'antd';
import {QuestionCircleOutlined} from '@ant-design/icons';
import BannerHeader from "../Banner-header";
import IconFont from "../../../../../components/Icon/Icon";



function Tab1Banner() {
    const {Option} = Select;
    let [data] = useState({
        formList:[
            {id:1, rules:false,title:"单品计数",placeholder:"1,4,12,16.58",extra:""},
            {id:2, rules:false,title:"商品编码",placeholder:"5279173125000",extra:"提交后，无法更改此字段"},
            {id:3, rules:true,title:"商品名称",placeholder:"Olympus Camedia C-50 Digital Camera",extra:""},
            {id:4, rules:true,title:"品牌",placeholder:"Sonny Brook Hams",extra:"品牌注册成功后，若要发布商品，其品牌名称的拼写和大小写必须与提交申请品牌批准时完全一致。对于您在提交品牌注册申请时选择的关键属性，请指定一个唯一的值。之后，您可以通过‘管理库存’随时编辑商品详情。"},
            {id:5, rules:true,title:"制造商",placeholder:"Sony,Kitchen Aid, Microsoft",extra:""},
            {id:6, rules:true,title:"制造商零件编号",placeholder:"LE",extra:""},
            {id:7, rules:false,title:"尺寸",placeholder:"2T,6X,12,Small,X-Large,18 months,14 Tall,28Wx32L",extra:""},
            {id:8, rules:false,title:"尺寸名称",placeholder:"",extra:""},
            {id:9, rules:false,title:"颜色",placeholder:"Red,Navy Blue,Pink,Green",extra:""},
            {id:10, rules:false,title:"色表",placeholder:"Red, Blue,Yellow",extra:""},
            {id:11, rules:true,title:"批次数目",placeholder:"24.0",extra:""},
            {id:12, rules:true,title:"批次类型",placeholder:"bottle,ounce",extra:""}
        ]
    })
    return (
        <div className="tab1Banner-box">
            <BannerHeader/>
            <Form labelCol={{span: 4}} wrapperCol={{span: 14}} layout="horizontal">
                {
                    data.formList.map((item,index)=>{
                        return(
                            <Form.Item name={item.title} key={index} extra={item.extra} label={
                                <span className="tab1-form-title">{item.title}&nbsp;<QuestionCircleOutlined style={{color: "#008296"}}/></span>}
                                       rules={[{required: item.rules, message: '一段验证信息'}]}>
                                {
                                    item.id === 2 ?
                                        <div>
                                     <Input placeholder={item.placeholder} style={{width:"300px"}}/>   <Select placeholder="-选择-" style={{width: "200px"}}>
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="Yiminghe">yiminghe</Option>
                                    </Select>
                                            <IconFont type="icon-suo" style={{marginLeft:"10px",fontSize:"20px"}}/>
                                    </div>: <Input placeholder={item.placeholder}/>
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

export default Tab1Banner