import React, {useState} from "react"
import BannerHeader from "../Banner-header";
import {Button, Form, Input, Select} from "antd";
import {QuestionCircleOutlined} from "@ant-design/icons";
import "./Tab4-banner.css"
function Tab4Banner() {
    let [data] = useState({
        formList:[
            {id:1, rules:false,title:"电池重量（克）",placeholder:"150",extra:""},
            {id:2, rules:false,title:"每个电池的瓦时数",placeholder:"1,2,3",extra:""},
            {id:3, rules:false,title:"锂含量（克）",placeholder:"1,2,3",extra:""},
            {id:4, rules:false,title:"商品重量",placeholder:"2.33,20.75,10000.00",extra:""},
            {id:5, rules:false,title:"容量",placeholder:"34.78",extra:""},
            {id:6, rules:false,title:"锂电池电压",placeholder:'"example_text"',extra:""},
            {id:7, rules:false,title:"此商品是否使用电池或商品本身是电池",placeholder:"-选择-",extra:""},
            {id:8, rules:false,title:"是否附带电池",placeholder:"-选择-",extra:""},
            {id:9, rules:false,title:"电池成分",placeholder:"-选择-",extra:""},
            {id:10, rules:false,title:"电池类型/尺寸",placeholder:"-选择-",extra:"添加更多"},
            {id:11, rules:false,title:"电池数量",placeholder:"3",extra:"添加更多"},
            {id:12, rules:false,title:"锂金属电池单元数量",placeholder:"1,2,3",extra:""},
            {id:13, rules:false,title:"锂离子电池单元数量",placeholder:"1,2,3",extra:""},
            {id:14, rules:false,title:"电池包装类型",placeholder:"-选择-",extra:""},
            {id:15, rules:false,title:"危险品相关法规",placeholder:"-选择-",extra:"添加更多"},
            {id:16, rules:false,title:"联合国危险货物编号",placeholder:"UN1950",extra:""},
            {id:17, rules:false,title:"安全数据表(SDS)URL",placeholder:"http://www.sigmaaldrich.com/MSDS/MSDS",extra:""},
            {id:18, rules:false,title:"闪点(℃)?",placeholder:"180",extra:""},
            {id:19, rules:false,title:"分类/GHS图形符号（选择所有使用选项）",placeholder:"-选择-",extra:"添加更多"},
            {id:20, rules:false,title:"California Proposition 65 Warning Type",placeholder:"-选择-",extra:""},
            {id:21, rules:false,title:"California Proposition 65 Chemical Names",placeholder:"",extra:""},
            {id:22, rules:false,title:"Additional Chemical Name1",placeholder:"",extra:""},
            {id:23, rules:false,title:"Additional Chemical Name2",placeholder:"",extra:""},
            {id:24, rules:false,title:"Additional Chemical Name3",placeholder:"",extra:""},
            {id:25, rules:false,title:"Additional Chemical Name4",placeholder:"",extra:""},
            {id:26, rules:false,title:"Pesticide Marking",placeholder:"-选择-",extra:"添加更多"},
            {id:27, rules:false,title:"Pesticide Registration Status",placeholder:"-选择-",extra:"添加更多"},
            {id:28, rules:false,title:"Pesticide Certification Number",placeholder:"138293",extra:"添加更多"},
        ]
    })
    return (
        <div className="tab4-box">
            <BannerHeader/>
            <Form labelCol={{span: 4}} wrapperCol={{span: 14}} layout="horizontal" style={{paddingLeft: "50px"}}>
                {
                    data.formList.map((item,index)=>{
                        return(
                            <Form.Item  key={index} extra={item.extra} label={
                                <span className="tab1-form-title">{item.title}&nbsp;<QuestionCircleOutlined style={{color: "#008296"}}/></span>}
                                        rules={[{required: item.rules, message: '一段验证信息'}]}>
                                {
                                    item.id ===1||item.id ===2||item.id ===3||item.id ===4||item.id ===5?
                                        <div className="tab4-unite">
                                            <Input placeholder={item.placeholder} style={{width:"270px"}}/>
                                            <Select placeholder="-选择-" className="tab4-select"/>
                                        </div> :""
                                }
                                {
                                    item.id ===6||item.id ===11||item.id ===12||item.id ===13||item.id ===16||item.id ===17||item.id ===18||item.id ===21||item.id ===22||item.id ===23||item.id ===24||item.id ===25||item.id ===28?
                                        <Input placeholder={item.placeholder} style={item.id ===28?{width:"270px"}:{}}/>:""
                                }
                                {
                                    item.id ===7||item.id ===8||item.id ===9||item.id ===10||item.id ===14||item.id ===15||item.id ===19||item.id ===20||item.id === 26 || item.id === 27?
                                        <Select style={item.id === 15 || item.id === 19 ||item.id === 26 || item.id === 27?{width:"320px"}:{}} placeholder={item.placeholder}/>:""
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

export default Tab4Banner