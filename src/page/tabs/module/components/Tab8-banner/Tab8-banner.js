import React, {useState} from "react"
import "./Tab8-banner.css"
import BannerHeader from "../Banner-header";
import {Button, Form, Input, Select, DatePicker, Space} from "antd";
import {QuestionCircleOutlined} from "@ant-design/icons";
import moment from 'moment'
import locale from 'antd/lib/date-picker/locale/zh_CN'
import 'moment/locale/zh-cn'

moment.locale('zh-cn')

function Tab8Banner() {
    let [data] = useState({
        formList: [
            {id: 1, rules: false, title: "发货重量", placeholder: "2.0", extra: ""},
            {id: 2, rules: false, title: "包装重量", placeholder: "10", extra: ""},
            {id: 3, rules: false, title: "商品显示尺寸", placeholder: "", extra: ""},
            {id: 4, rules: false, title: "显示屏体积", placeholder: "5 gallons", extra: ""},
            {id: 5, rules: false, title: "净重", placeholder: "350 Gram,e.g.for coffee powder", extra: ""},
            {id: 6, rules: false, title: "卖家商品目录编码", placeholder: "EG-53218", extra: ""},
            {id: 7, rules: false, title: "制造商是否停产", placeholder: "-选择-", extra: ""},
            {id: 8, rules: false, title: "最大发货量", placeholder: "0,100,or 12142", extra: ""},
            {id: 9, rules: false, title: "上线日期", placeholder: "MM/DD/YYYY", extra: ""},
            {id: 10, rules: false, title: "发售日期", placeholder: "MM/DD/YYYY", extra: ""},
            {id: 11, rules: false, title: "市场价", placeholder: "例如：50.00", extra: "添加更多"},
            {id: 12, rules: false, title: "商品包装数量", placeholder: "3", extra: "提交后，无法更改此字段"},
            {id: 13, rules: false, title: "香型", placeholder: "Spice", extra: ""},
            {id: 14, rules: false, title: "味道", placeholder: "Cherry,Chocolate,Vanilla", extra: ""},
            {id: 15, rules: false, title: "适用肤质", placeholder: "combination", extra: "添加更多"},
            {id: 16, rules: false, title: "肤色1-肤色3", placeholder: "MediumDark", extra: "添加更多"},
            {id: 17, rules: false, title: "覆盖范围", placeholder: "medium", extra: ""},
            {id: 18, rules: false, title: "表面工艺类型", placeholder: '"example_text"', extra: "添加更多"},
            {id: 19, rules: false, title: "外壳材料", placeholder: "nylon,wood,steel", extra: "添加更多"},
            {id: 20, rules: false, title: "发质类型1-发质类型2", placeholder: "dry", extra: "添加更多"},
            {id: 21, rules: false, title: "适用性别", placeholder: "选择-", extra: ""},
            {id: 22, rules: false, title: "商品外形", placeholder: "cream", extra: ""},
            {id: 23, rules: false, title: "成分", placeholder: "Dark Chocolate,Sugar,Almonds", extra: ""},
            {
                id: 24,
                rules: false,
                title: "适用症状",
                placeholder: "Improves fine wrinkles,hyperpigmentation,roughness,and the general appearance of photo",
                extra: ""
            },
            {id: 25, rules: false, title: "使用说明", placeholder: "Take 1 tablet daily", extra: ""},
            {id: 26, rules: false, title: "特点1 - 特点3", placeholder: "hypoallergenic", extra: "添加更多"},
            {id: 27, rules: false, title: "成人", placeholder: "-选择-", extra: ""},
            {id: 28, rules: false, title: "娱乐类型", placeholder: "Mission;ArtDeco;Jack Purcell", extra: ""},
            {id: 29, rules: false, title: "Package Size Name", placeholder: "Economy Pack, Jumbo Pack", extra: ""},
            {id: 30, rules: false, title: "总计（按个数）", placeholder: "1，4，16", extra: ""},
            {
                id: 31,
                rules: false,
                title: "商品安全警告",
                placeholder: "Consult with a doctor before using this product",
                extra: ""
            },
            {id: 32, rules: false, title: "型号名称", placeholder: "Camedia", extra: ""},
            {id: 33, rules: false, title: "Cpsia Warning", placeholder: "-选择-", extra: "添加更多"},
            {id: 34, rules: false, title: "CPSIA 警告说明", placeholder: "no_warning_aoolicable", extra: ""},
            {id: 35, rules: false, title: "物品数量", placeholder: "6", extra: ""},
            {id: 36, rules: false, title: "设计", placeholder: "Striped", extra: ""},
            {id: 37, rules: false, title: "进口标示", placeholder: "Made in USA or Imported", extra: ""},
            {id: 38, rules: false, title: "面料类型", placeholder: "90% cotton/10%rayon", extra: "添加更多"},
            {id: 39, rules: false, title: "型号", placeholder: "Ak3-AT1-GL-M-X,MC700LL/A", extra: ""},
            {id: 40, rules: false, title: "商品尺寸", placeholder: '"example_text"', extra: ""},
            {id: 41, rules: false, title: "包裹尺寸", placeholder: '400,2,3.54', extra: ""},
        ]
    })
    return (
        <div className="tab8-box">
            <BannerHeader/>
            <Form labelCol={{span: 4}} wrapperCol={{span: 14}} layout="horizontal" style={{paddingLeft: "50px"}}>
                {
                    data.formList.map((item, index) => {
                        return (
                            <Form.Item key={index} extra={item.extra} label={
                                <span className="tab1-form-title">{item.title}&nbsp;<QuestionCircleOutlined
                                    style={{color: "#008296"}}/></span>}
                                       rules={[{required: item.rules, message: '一段验证信息'}]}>
                                {
                                    item.id === 1 || item.id === 2 || item.id === 4 || item.id === 5 ?
                                        <div className="tab8-double-deck">
                                            <Input placeholder={item.placeholder} style={{width: "275px"}}/>
                                            <Select placeholder="-选择-" style={{width: "275px"}}/>
                                        </div> : ""
                                }
                                {
                                    item.id === 6 || item.id === 8 || item.id === 12 || item.id === 13 || item.id === 14 || item.id === 15 || item.id === 16 || item.id === 17 || item.id === 18 || item.id === 19 || item.id === 20 || item.id === 22
                                    || item.id === 23 || item.id === 24 || item.id === 25 || item.id === 26 || item.id === 28 || item.id === 29 || item.id === 30 ||
                                    item.id === 31 || item.id === 32 || item.id === 34 || item.id === 35 || item.id === 36 || item.id === 37 || item.id === 38 || item.id === 39 ?
                                        <Input placeholder={item.placeholder}
                                               style={item.id === 15 || item.id === 16 || item.id === 26 ? {width: "320px"} : {}}/> : ""
                                }
                                {
                                    item.id === 7 || item.id === 21 || item.id === 27 || item.id === 33 ?
                                        <Select placeholder={item.placeholder}
                                                style={item.id === 33 ? {width: "320px"} : {}}/> : ""
                                }
                                {
                                    item.id === 9 || item.id === 10 ? <Space direction="vertical">
                                        <DatePicker locale={locale} placeholder={item.placeholder} format="MM/DD/YYYY"/>
                                    </Space> : ""
                                }
                                {
                                    item.id === 11 ? <div className="tab3-price">
                                        <span>USD$</span><Input className="tab3-price-input"
                                                                placeholder={item.placeholder}/>
                                    </div> : ""
                                }
                                {
                                    item.id === 3 ?
                                        <div className="tab8-four-bar">
                                            <div className="tab8-dispaly-depth">
                                                <p>Item Display Depth</p>
                                                <Input placeholder="0.0"/>
                                            </div>
                                            <div>
                                                <Select placeholder="-选择-" style={{width:"130px"}}/>
                                            </div>
                                            <div>
                                                <Select placeholder="-选择-" style={{width:"130px",margin:"0 20px"}}/>
                                            </div>
                                            <div className="tab8-product-height-box">
                                                <p className="tab8-product-height">商品显示长度</p>
                                                <Input placeholder="240 Centimeters,e"/>
                                            </div>
                                        </div> : ""
                                }
                                {
                                    item.id === 40?    <div className="tab8-four-bar">
                                        <div className="tab8-dispaly-depth">
                                            <p>长度</p>
                                            <Input placeholder={item.placeholder}/>
                                        </div>
                                        <div className="tab8-dispaly-depth">
                                            <p>宽度</p>
                                            <Input placeholder={item.placeholder}/>
                                        </div>
                                        <div className="tab8-dispaly-depth">
                                            <p>高度</p>
                                            <Input placeholder={item.placeholder}/>
                                        </div>
                                        <div>
                                            <Select placeholder="-选择-"/>
                                        </div>
                                    </div> : ""
                                }
                                {
                                    item.id === 41?    <div className="tab8-four-bar">
                                        <div className="tab8-dispaly-depth">
                                            <p>包裹长度</p>
                                            <Input placeholder={item.placeholder}/>
                                        </div>
                                        <div className="tab8-dispaly-depth">
                                            <p>包裹宽度</p>
                                            <Input placeholder={item.placeholder}/>
                                        </div>
                                        <div className="tab8-dispaly-depth">
                                            <p>包裹高度</p>
                                            <Input placeholder="3.45"/>
                                        </div>
                                        <div>
                                            <Select placeholder="-选择-"/>
                                        </div>
                                    </div> : ""
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

export default Tab8Banner