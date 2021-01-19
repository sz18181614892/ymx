import React from "react";
import tu1 from './tu1.png';
import "./ExhibitionPromotion.css";
import {
  QuestionCircleOutlined,
  CloseOutlined,
  InfoCircleOutlined,
  SearchOutlined,
  CaretLeftOutlined,
  CaretRightOutlined,
} from "@ant-design/icons";
import { Checkbox } from "antd";
import { Input, Tabs } from "antd";
const { TabPane } = Tabs;
function ExhibitionPromotion() {
  return (
    <div className="box">
      {/* 头部 */}
      <div className="CommodityPromotion-head">
        <div className="CommodityPromotion-head-left">
          <span>
            <CloseOutlined />
          </span>
          <span>新建广告活动</span>
        </div>
        <div className="CommodityPromotion-head-right">
          <a>返回广告活动</a>
          <button className="CommodityPromotion-head-right-button1">
            保存为草稿
          </button>
          <button className="CommodityPromotion-head-right-button2">
            启动广告活动
          </button>
          <span>
            <QuestionCircleOutlined />
          </span>
        </div>
      </div>
      {/* 主体 */}
      <div className="CommodityPromotion-body">
        <div className="CommodityPromotion-body1">
          <h2>创建广告活动</h2>
          <div className="CommodityPromotion-setUp-box">
            <div className="CommodityPromotion-setUp">
              <span>设置</span>
            </div>
            <div className="CommodityPromotion-setUp-content">
              <span>
                广告活动名称
                <InfoCircleOutlined />
              </span>
              <div className="Name-of-advertising-campaign">
                <input defaultValue="广告活动-12/30/2020 10：08：32" />
              </div>
              <div className="CommodityPromotion-setUp-time-box">
                <div className="CommodityPromotion-setUp-time">
                  <div>
                    <span>
                      开始
                      <InfoCircleOutlined />
                    </span>
                    <div>
                      <input defaultValue="2020年12月29日" />
                    </div>
                  </div>
                  <div>
                    <span>
                      结束
                      <InfoCircleOutlined />
                    </span>
                    <div>
                      <input defaultValue="无结束日期" />
                    </div>
                  </div>
                </div>
                <div className="Set-date">
                  如果选择不设置结束日期，可确保广告始终处于活动状态，让你不会错过曝光或点击机会。
                </div>
              </div>
              <div className="Daily-budget">
                <div>
                  <span>
                    每日预算
                    <InfoCircleOutlined />
                  </span>
                  <div className="SetUp-BudgetSelection2">
                    <Input prefix="$" />
                  </div>
                </div>
                <div className="Set-date1">
                  预算超过$100.00的大多数广告活动将全天开展。
                </div>
              </div>
            </div>
          </div>
          {/* 创建广告组 */}
          <div>
            <div className="Createadgroupsettings">
              <span>创建广告组</span>
              <div>
                广告组是一组分享同一组产品的广告。现在，你将创建第一个广告组。你可以在启动后编辑活动，以在活动管理器中创建其他广告组。
                <a>了解更多信息</a>
              </div>
            </div>
            <div className="Createadgroupsettings-box">
              <div className="Createadgroupsettings-title">
                <span>设置</span>
              </div>
              <div className="Createadgroupsettings-content">
                <span>
                  广告组名称
                  <InfoCircleOutlined />
                </span>
                <div>
                  <input placeholder="Example:Seasonal Products" />
                </div>
              </div>
            </div>
            <div className="Createadgroupsettings-box">
              <div className="Createadgroupsettings-title">
                <span>
                  投放
                  <InfoCircleOutlined />
                </span>
              </div>
              <div className="Launch">
                <div>
                  <input
                    type="radio"
                    onChange={onChange}
                    checked="checked"
                    name="c"
                  />
                  在营销浏览定向<span>新</span>
                  <div>
                    触达查看了与你选定标准匹配的商品详情页面的自定义受众。
                  </div>
                  <input type="radio" name="c" />
                  商品投放
                  <div>选择在亚马逊上投放的目标商品</div>
                </div>
                <div className="Launch-details">
                  <span>详情</span>
                  <ul>
                    <li>广告位：亚马逊站内或站外</li>
                    <li>竞价：每次点击费用（CPC）</li>
                    <li>广告创意定制：是</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="Add-promotional-products-box">
              <div className="Add-promotional-products">
                <span>
                  要推广商品
                  <InfoCircleOutlined />
                </span>
              </div>
              <div className="Add-page">
                <div className="Add-pager">
                  <Tabs defaultActiveKey="1">
                    <TabPane tab="搜索" key="1"></TabPane>
                    <TabPane tab="输入列表" key="2"></TabPane>
                    <TabPane tab="上传" key="3"></TabPane>
                  </Tabs>
                </div>
                <div>
                  <div className="CommodityPromotion-search">
                    <i>
                      <SearchOutlined />
                    </i>
                    <input placeholder="按商品名称、ASIN或SKU进行搜索" />
                    <button>
                      <SearchOutlined />
                    </button>
                  </div>
                </div>
                <div className="CommodityPromotion-search-sort">
                  <div>
                    <span>按添加日期排序</span>
                    <label>
                      <select className="CommodityPromotion-setUp-select-sort">
                        <option>降序</option>
                      </select>
                    </label>
                  </div>
                  <div className="CommodityPromotion-search-sort-a">
                    <a>在此页面上添加全部</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="Createadgroupsettings-box">
              <div className="Createadgroupsettings-title">
                <span>竞价</span>
              </div>
              <div className="Bidding">
                <span>动态竞价-提高和降低</span>
                <div className="Bidding-1">
                  我们会针对转化几率高的点击提高你的竞价，并针对转化几率低的点击降低竞价。在此过程不会超出你的每日预算。
                  <a>了解更多信息</a>
                </div>
                <span className="jingjia">
                  竞价
                  <InfoCircleOutlined />
                </span>
                <div className="SetUp-BudgetSelection2">
                  <Input prefix="$" defaultValue="0.75" />
                </div>
              </div>
            </div>
            <div className="Negative-keyword-positioning">
              <div className="Add-promotional-product">
                <span>
                  自定义受众
                  <InfoCircleOutlined />
                </span>
                <span className="CommodityPromotion-search-sort-span">新</span>
              </div>
              <div className="zidingyishouzhong">
                吸引浏览过你推广的商品的详情页面、品类、品牌和其他特征的顾客。
              </div>
              <div className="Custom-audience-tab-box">
                <div className="Custom-audience-tab">
                  <Tabs type="card" size="large">
                    <TabPane tab="类别" key="1">
                      <Tabs size="large">
                        <TabPane tab="建议" key="1"></TabPane>
                        <TabPane tab="搜索" key="2"></TabPane>
                      </Tabs>
                    </TabPane>
                    <TabPane tab="商品" key="2"></TabPane>
                  </Tabs>
                  <div className="Custom-audience-tab1">
                    <span>1类别</span>
                    <a>全部添加</a>
                  </div>
                </div>
                <div className="Custom-audience-tab-right">
                  <div className="Custom-audience-tab-right-list">
                    <span>2名受众</span>
                    <a>删除所有</a>
                  </div>
                  <div className="Custom-audience-tab-right-list">
                    <div>受众</div>
                    <div>
                      潜在消费者数量
                      <InfoCircleOutlined />
                    </div>
                    <div>
                      竞价
                      <InfoCircleOutlined />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="originality">
              <div className="Add-promotional-product">
                <span>创意</span>
              </div>
              <div className="originality-list">
                <div className="originality-list-left">
                  <Checkbox onChange={onChange}>尽情发挥你的创意</Checkbox>{" "}
                  <InfoCircleOutlined />
                  <div className="originality-list-left-content">
                    <span>品牌标识</span>
                    <div className="Brand-identity-box"></div>
                    <div className="Edit-logo">编辑标识</div>
                    <div>标题</div>
                    <input />
                    <br />
                    剩余50个字符
                  </div>
                </div>
                <div className="Right-side-of-Amazon-Product-Page-box">
                  <div className="Right-head-of-Amazon-Product-Page">
                    <span>广告预览</span>
                    <label>
                      <select>
                        <option>亚马逊商品页面右侧</option>
                      </select>
                    </label>
                    <button><CaretLeftOutlined /></button>
                    <button><CaretRightOutlined /></button>
                    <div className="pages">第一页，共10页<InfoCircleOutlined /></div>
                  </div>
                  <div>
                    <img src={tu1}></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="button">
              <button className="button2">启动广告活动</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ExhibitionPromotion;
function onChange() {}
