import React, {useState} from "react"
import "./Tab-header.css"
import {Tabs} from 'antd';
import Tab1Banner from "../components/Tab1-banner/Tab1-banner";
import Tab2Banner from "../components/Tab2-banner/Tab2-banner";
import Tab3Banner from "../components/Tab3-banner/Tab3-banner";
import Tab4Banner from "../components/Tab4-banner/Tab4-banner";
import Tab5Banner from "../components/Tab5-banner/Tab5-banner";
import Tab6Banner from "../components/Tab6-banner/Tab6-banner";
import Tab7Banner from "../components/Tab7-banner/Tab7-banner";
import Tab8Banner from "../components/Tab8-banner/Tab8-banner";
import IconFont from "../../../../components/Icon/Icon";

function TabHeader() {
    const {TabPane} = Tabs;
    let [data,setData] = useState({
        tabList: [
            {id: 1, title: "重要信息", iconfont: ""},
            {id: 2, title: "变体", iconfont: ""},
            {id: 3, title: "报价", iconfont: ""},
            {id: 4, title: "图片", iconfont: ""}
        ],
        tabList2: [
            {id: 1, title: "重要信息", iconfont: ""},
            {id: 2, title: "变体", iconfont: ""},
            {id: 3, title: "报价", iconfont: ""},
            {id: 4, title: "合规信息", iconfont: ""},
            {id: 5, title: "图片", iconfont: ""},
            {id: 6, title: "描述", iconfont: ""},
            {id: 7, title: "关键字", iconfont: ""},
            {id: 8, title: "更多详情", iconfont: ""}
        ]
    });
    let [count,setCount] = useState({
        tabCount:"1"
    })
    let TabClick = (e)=>{
        setCount({
            tabCount:e
        })
    };
    return (
        <div className="tabs-box">
            {
                count.tabCount==='8'||count.tabCount==="6"?  <div className="tabs-waring">
                    <div className="tabs-waring-icon-box">
                        <IconFont type="icon-jinggao" className="tabs-waring-icon"/>
                    </div>
                    <div className="tabs-waring-error">
                        <p>先修复1错误，然后在提交您的商品信息</p>
                        <p>Go to the steps highlighted in red to view and fix the errors</p>
                    </div>
                </div>:""
            }

            <div className="nav-box tab-logo-box">
                <div className="home-logo">
                </div>
                <div className="logo-char">seller central</div>
            </div>
            <div className="tabs-box-change">
                <Tabs defaultActiveKey='1' centered tabBarGutter={10}  tabBarStyle={{color:"#002F36"}} onTabClick={TabClick}>
                    {
                        data.tabList2.map((item, index) => {
                            return (
                                <TabPane tab={
                                    <span style={{display:"flex",alignItems:"center"}}>
                                        {(index === 0 || index === 2) ? <IconFont type="icon-jinggao" className="tab-icon"/> : ""}
                                        {item.title}
                                    </span>} key={item.id}>
                                    {index === 0 ? <Tab1Banner/> : ''}
                                    {index === 1 ? <Tab2Banner/> : ''}
                                    {index === 2 ? <Tab3Banner/> : ''}
                                    {index === 3 ? <Tab4Banner/> : ''}
                                    {index === 4 ? <Tab5Banner/> : ''}
                                    {index === 5 ? <Tab6Banner/> : ''}
                                    {index === 6 ? <Tab7Banner/> : ''}
                                    {index === 7 ? <Tab8Banner/> : ''}
                                </TabPane>
                            )
                        })
                    }
                </Tabs>
            </div>
        </div>

    )
}

export default TabHeader