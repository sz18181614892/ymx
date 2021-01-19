import React from "react"
import BannerHeader from "../Banner-header";
import {Button, Select} from "antd";
import "./Tab2-banner.css"

const {Option} = Select;

function Tab2Banner() {
    return (
        <div className="tab1Banner-box">
            <BannerHeader/>
            <div className="tab2-main">
                <p>变体主题</p>
                <Select placeholder="-选择-" style={{width: "490px"}}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                </Select>
            </div>
            <div className="tab1-button tab2-button">
                <Button>取消</Button>
                <Button>保存并完成</Button>
            </div>
        </div>
    )
}

export default Tab2Banner