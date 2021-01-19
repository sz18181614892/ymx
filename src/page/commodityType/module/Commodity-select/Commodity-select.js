import React from "react"
import { Input } from 'antd';
import "./Commodity-select.css"
import IconFont from "../../../../components/Icon/Icon";
function CommoditySelect(){
    const { Search } = Input;
    return(
        <div className="commodity-container">
            <div className="commodity-collect-box">
                <p className="commodity-collect">搜索</p>
                <span>什么是商品类型？</span>
            </div>
            <Search placeholder="搜索类别" />
            <div className="commodity-container commodity-select-box">
                <div className="commodity-select-icon">
                <IconFont  type="icon-zhinanzhen" />
                <p>搜索类别</p>
                </div>
            </div>
        </div>
    )
}
export default CommoditySelect