import React from "react";
import {Switch , Checkbox } from "antd";
import IconFont from "../../../../../components/Icon/Icon";
import "./Banner-header.css"
function BannerHeader(props) {
    return (
        <div>
            <div className="tab1-header">
                <span>高级视图</span>
                <Switch size="small" defaultChecked/>
            </div>
            <div className="tab1-crumbs">
                <span className="tab1-crumbs-title">美容和个人护理</span>
                <IconFont type="icon-fanhui-copy-copy" className="tab1-icon"/>
                <span className="tab1-crumbs-title">化妆品</span>
                <IconFont type="icon-fanhui-copy-copy" className="tab1-icon"/>
                <span>化妆套餐</span>
            </div>
            <div className="tab1-hint">
                <IconFont type="icon-jinggao1" className="tab1-hint-icon"/>

                {
                    props.flag?<span className="tab1-hint-title">你可以选择暂时将商品保存为"不可售",稍后在添加商品报价。</span>:<span className="tab1-hint-title">当多个卖家通过单一详情页面销售相同的商品时，我们会整合最佳商品数据进行展示，以确保买家获得最佳体验。</span>
                }
                {
                    props.flag?<div className="banner-checkbox-title">
                        <Checkbox>让我先跳过报价数据，我稍后在提供。</Checkbox>
                    </div>:""
                }
            </div>
        </div>
    )
}

export default BannerHeader