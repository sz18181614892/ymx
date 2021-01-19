import React, { Component } from "react";
import "./index.css";
import { Tabs } from "antd";
import SetUp from "./component/SetUp/SetUp.js";
import Administration from "./component/Administration/Administration.js";
import History from "./component/history/index.js";
import {
  BellOutlined,
  QuestionOutlined,
  FrownOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { changeConfirmLocale } from "antd/lib/modal/locale";
const { TabPane } = Tabs;
class AdvertisingCampaign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goods: [
        { id: 1, text: "1" },
        { id: 2, text: "11" },
        { id: 3, text: "123" },
        { id: 4, text: "2222" },
        { id: 5, text: "34" },
        { id: 6, text: "8/15广告组合大卖" },
        { id: 7, text: "Adcertising for book ..." },
        { id: 8, text: "ALL-0.1" },
        { id: 9, text: "book" },
        { id: 10, text: "hu" },
        { id: 11, text: "Pool Foat0728" },
        { id: 12, text: "yuec222" },
        { id: 13, text: "上下床" },
        { id: 14, text: "书架广告" },
        { id: 15, text: "书架广告活动" },
        { id: 16, text: "体重秤0728" },
        { id: 17, text: "佳佳儿童活动" },
        { id: 18, text: "便携小冰箱" },
        { id: 19, text: "储物架专属广告位" },
        { id: 20, text: "儿童椅0720" },
        { id: 21, text: "充电器" },
        { id: 22, text: "充电器活动" },
        { id: 23, text: "充电器自动" },
        { id: 24, text: "刨丝器" },
        { id: 25, text: "吹风机" },
        { id: 26, text: "夏日畅游" },
        { id: 27, text: "大理石折叠桌" },
        { id: 28, text: "榨汁机粉色" },
        { id: 29, text: "女鬼" },
        { id: 30, text: "妈妈咪呀" },
        { id: 31, text: "家具0815" },
        { id: 32, text: "小朋友" },
        { id: 33, text: "小朋友哈哈哈" },
        { id: 34, text: "山地自行车" },
        { id: 35, text: "山地自行车广告" },
        { id: 36, text: "山地车商品推广" },
        { id: 37, text: "广告1" },
        { id: 38, text: "广告投放" },
        { id: 39, text: "广告活动-8/15/20220" },
        { id: 40, text: "广告活动投放" },
        { id: 41, text: "床" },
        { id: 42, text: "床广告" },
        { id: 43, text: "床架0815" },
        { id: 44, text: "床的广告" },
        { id: 45, text: "手机" },
        { id: 46, text: "手机壳" },
        { id: 47, text: "抽屉广告" },
        { id: 48, text: "抽屉柜" },
        { id: 49, text: "抽屉柜子11" },
        { id: 50, text: "无脸男0718" },
        { id: 51, text: "智能手机" },
        { id: 52, text: "暖脚宝" },
        { id: 53, text: "暖脚宝手动广告815" },
        { id: 54, text: "木桌" },
        { id: 55, text: "木桌011" },
        { id: 56, text: "木桌广告鬼" },
        { id: 57, text: "桌椅" },
        { id: 58, text: "椅子" },
        { id: 59, text: "椅子11111" },
        { id: 60, text: "椅子五把" },
        { id: 61, text: "椅子促销" },
        { id: 62, text: "椅子促销2" },
        { id: 63, text: "椅子子子" },
        { id: 64, text: "榨汁机粉色" },
        { id: 65, text: "偶是衣柜" },
        { id: 66, text: "母子床" },
        { id: 67, text: "沙发七件套" },
        { id: 68, text: "浴室三件套" },
        { id: 69, text: "火坑碗广泛匹配广告2..." },
        { id: 70, text: "烧烤架" },
        { id: 71, text: "烧烤架广告" },
        { id: 72, text: "玩具秋千广告" },
        { id: 73, text: "珠宝镜柜" },
        { id: 74, text: "电唱机广告投放" },
        { id: 75, text: "电子" },
        { id: 76, text: "电子产品广告" },
        { id: 77, text: "登山车0728" },
        { id: 78, text: "白色" },
        { id: 79, text: "破壁机" },
        { id: 80, text: "置物架" },
        { id: 81, text: "置物架广告" },
        { id: 82, text: "置物架广告活动" },
        { id: 83, text: "自行车车车" },
        { id: 84, text: "节日灯" },
        { id: 85, text: "草原牦牛真皮沙发厂..." },
        { id: 86, text: "莫莫的车车" },
        { id: 87, text: "莫莫的车车2" },
        { id: 88, text: "蓝牙耳机" },
        { id: 89, text: "蓝牙键盘1702" },
        { id: 90, text: "蓝蓝秋千" },
        { id: 91, text: "衣服" },
        { id: 92, text: "衣柜" },
        { id: 93, text: "西红柿的广告" },
        { id: 94, text: "跑步机" },
        { id: 95, text: "跑步机0001" },
        { id: 96, text: "车" },
        { id: 97, text: "鞋柜" },
        { id: 98, text: "鞋柜123" },
        { id: 99, text: "餐桌及座椅" },
      ],
      isToggleOn: true,
      dispaly: "block",
    };

    // 这个绑定是必要的，使`this`在回调中起作用
    this.Change = this.Change.bind(this);
  }
  Change() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
      display: prevState.isToggleOn ? "none" : "block",
    }));
  }

  render() {
    return (
      <div className="AdvertisingCampaign-box">
        <div className="AdvertisingCampaign-box-left">三</div>
        <div className="AdvertisingCampaign-box-right">
          <div className="box-right-head">
            {/* 头部 */}
            <div className="box-right-head-left">广告活动</div>
            <div className="box-right-head-right">
              <div>
                <select>
                  <option>Big Corn美国</option>
                </select>
              </div>
              <div className="icons-list">
                <BellOutlined />
              </div>
              <div className="icons-list">
                <QuestionOutlined />
              </div>
              <div className="icons-list">
                <FrownOutlined />
              </div>
            </div>
          </div>
          {/* 导航 */}
          <div className="main-box">
            <div className="sidebar" style={{ display: this.state.display }}>
              <div className="sidebar-head">
                <div>
                  <span>所有广告活动</span>
                </div>
                <div>广告组合</div>
                <a>+创建广告组合</a>
              </div>
              <div className="sidebar-list">
                <ul>
                  {this.state.goods.map((good) => (
                    <li key={good.id}>{good.text}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="AdvertisingCampaign-Navigation-box">
              <MenuFoldOutlined
                className="AdvertisingCampaign-button"
                onClick={this.Change}
              />
              <Tabs className="AdvertisingCampaign-Navigation">
                <TabPane tab="管理" key="1">
                  <Administration />
                </TabPane>
                <TabPane tab="草稿" key="2"></TabPane>
                <TabPane tab="设置" key="3">
                  <SetUp />
                </TabPane>
                <TabPane tab="历史" key="4">
                  <History />
                </TabPane>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AdvertisingCampaign;
