import React, {useState} from "react"
import IconFont from "../Icon/Icon";
import "./HeaderCom.css"
function HeaderCom() {
    let [data] = useState({
        navList: [
            {id: 1, title: "目录"},
            {id: 2, title: "库存"},
            {id: 3, title: "确定价格"},
            {id: 4, title: "订单"},
            {id: 5, title: "广告"},
            {id: 6, title: "品牌旗舰店"},
            {id: 7, title: "增长"},
            {id: 8, title: "数据报告"},
            {id: 9, title: "绩效"},
            {id: 10, title: "应用商店"},
            {id: 11, title: "B2B"},
            {id: 12, title: "品牌"}
        ]
    });
    return (
        <div className="home-header">
            <div className="nav-box">
                <div className="home-logo">
                </div>
                <div className="logo-char">seller central</div>
                <nav>
                    {
                        data.navList.map((item) => {
                            return(
                              <span className="nav-list" key={item.id}>
                                 <span className="nav-item">{item.title}</span>
                              </span>
                            )
                        })
                    }

                </nav>
                <div className="nav-box-right">
                    <span className="big-corn">Big Corn</span>
                    <IconFont type="icon-meiguoguoqi"/>
                    <label>
                        <select>
                            <option value="www.amazon.com">www.amazon.com</option>
                        </select>
                    </label>
                    <label>
                        <select>
                            <option value="中文">中文</option>
                        </select>
                    </label>
                    <div className="home-input-box">
                        <label>
                            <input type="text" placeholder="搜索" className="input"/>
                        </label>
                        <IconFont type="icon-sousuo"/>
                    </div>
                </div>
                <ul className="home-char">
                    <li>买家消息<span>|</span></li>
                    <li>帮助<span>|</span></li>
                    <li>设置</li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderCom