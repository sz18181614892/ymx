import React from "react";
import "./BrandPromotion2.css";
import { Input, Tabs, Switch, Checkbox, Table, Tooltip } from "antd";
import {
  QuestionCircleOutlined,
  CloseOutlined,
  InfoCircleOutlined,
  SearchOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import img1 from "./tu1.png";
import img2 from "./tu2.png";
import img3 from "./tu3.png";
import img4 from "./tu4.png";
import img5 from "./tu5.png";
import img6 from "./tu6.png";
const { TabPane } = Tabs;
function BrandPromotion2() {
  return (
    <div>
      <div className="BrandPromotion2-head">
        <div className="BrandPromotion2-head-left">
          <span>
            <CloseOutlined />
          </span>
          <span>新建广告活动</span>
        </div>
        <div className="BrandPromotion2-head-right">
          <a>返回广告活动</a>
          <button className="BrandPromotion2-head-right-button1">
            保存为草稿
          </button>
          <button className="BrandPromotion2-head-right-button2">
            提交以供审核
          </button>
          <span>
            <QuestionCircleOutlined />
          </span>
        </div>
      </div>
      {/* 内容 */}
      <div className="BrandPromotion1-body">
        <div className="BrandPromotion1-body-head">
          <h2>创建广告活动</h2>
          {/* 设置 */}
          <div className="BrandPromotion1-setUp-box">
            <div className="BrandPromotion1-setUp">
              <span>设置</span>
            </div>
            <div className="BrandPromotion1-setUp-content">
              <span>
                广告活动名称
                <InfoCircleOutlined />
              </span>
              <div className="Name-of-advertising-campaign">
                <input defaultValue="广告活动-12/30/2020 10：08：32" />
              </div>
              <div className="Advertising-mix">
                <div>
                  <span>
                    广告组合
                    <InfoCircleOutlined />
                  </span>
                  <div>
                    <label>
                      <select className="BrandPromotion1-setUp-select">
                        <option>无广告组合</option>
                      </select>
                    </label>
                  </div>
                </div>
                <div className="BrandPromotion1-setUp-select-data">
                  创建广告组合来整理广告活动、设置预算上限并跟踪表现。
                </div>
              </div>
              <div className="BrandPromotion1-setUp-time-box">
                <div className="BrandPromotion1-setUp-time">
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
                  选择无结束日期意味着你的广告活动将运行更长时间，更长的时间范围可以让你更好地了解搜索词和关键词效果，从而进一步优化你的广告活动。
                </div>
              </div>
              <div className="Daily-budget">
                <div>
                  <span>
                    预算
                    <InfoCircleOutlined />
                  </span>
                  <div className="SetUp-BudgetSelection2">
                    <Input prefix="$" />
                    <label>
                      <select className="BrandPromotion1-setUp-select">
                        <option>每天</option>
                      </select>
                    </label>
                  </div>
                </div>
                <div className="Set-date1">
                  预算超过$30.00的大多数广告活动将全天开展。
                </div>
              </div>
              <div>
                <span>
                  品牌
                  <InfoCircleOutlined />
                </span>
                <div>MengK</div>
              </div>
            </div>
          </div>
          {/* 广告格式 */}
          <div className="Advertising-format">
            <div className="box-head-box">
              <div className="box-head">广告格式</div>
              <InfoCircleOutlined />
            </div>
            <div>
              <div className="Advertising-format-Commodity-collection-box">
                <div className="Advertising-format-Commodity-collection">
                  <div>商品集</div>
                  <div>
                    <img src={img1} />
                  </div>
                  <div>使用图片将流量引导至详情页面，以推广多件商品。</div>
                </div>
                <div className="Advertising-format-Commodity-collection">
                  <div>
                    品牌旗舰店焦点<span>新</span>
                  </div>

                  <div>
                    <img src={img2} />
                  </div>
                  <div>将流量引导到品牌旗舰店，包括子页面。</div>
                </div>
                <div className="Advertising-format-Commodity-collection">
                  <div>视频</div>
                  <div>
                    <img src={img3} />
                  </div>
                  <div>使用自动播放的视屏展示单件商品</div>
                </div>
              </div>
            </div>
            <div className="Bold-title">
              <span>着陆页</span>
              <InfoCircleOutlined />
            </div>
            <div className="Landing-page">
              <input type="radio" name="c" />
              亚马逊品牌旗舰店（包括子页面）
              <br />
              <input
                type="radio"
                name="c"
                onChange={onChange}
                checked="checked"
              />
              新着陆页
              <div></div>
            </div>
          </div>
          <div className="Add-promotional-products-box">
            <div className="Add-promotional-products">
              <span>商品</span>
              <div>
                <a>
                  <QuestionCircleOutlined fontSize="12px" />
                  添加要推广的商品
                </a>
              </div>
            </div>
            <div className="Add-box">
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
                  <input placeholder="按商品名称或ASIN进行搜索" />
                  <button>
                    <SearchOutlined />
                  </button>
                  <label>
                    <select className="CommodityPromotion-setUp-select-sort">
                      <option>MengK</option>
                    </select>
                  </label>
                </div>
              </div>
              <div className="CommodityPromotion-search-sort">
                <div className="CommodityPromotion-search-sort-a">
                  <a>在此页面上添加全部</a>
                </div>
              </div>
              <div className="BudgetSelection2-tianjia"><img src={img4} /><img src={img5} /></div>
              <div className="BudgetSelection2-tianjia-fenye">1-2,共2个结果<button><LeftOutlined /></button><button><RightOutlined /></button></div>
            </div>
            <div>
              <div className="BudgetSelection2-yitianjiashangpin-shuliang">1商品</div>
              <div className="BudgetSelection2-yitianjiashangpin"><img src={img6} /><span><CloseOutlined /></span></div>
              <div className="BudgetSelection2-proposal">添加最少3件商品。<div>我们建议添加至少5件商品，以降低在商品缺货时出现广告活动暂停的可能性。</div></div>
            </div>
            </div>
          </div>
          <div className="button">
            <button className="button1">保存为草稿</button>
            <button className="button2">提交以供审核</button>
          </div>
        </div>
      </div>
      <div className="CommodityPromotion-foot">
        © 2020
        Amazon.com,lnc.或其他附属公司。使用条款&nbsp;&nbsp;&nbsp;&nbsp;隐私条款&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Amazon广告协议
      </div>
    </div>
  );
}
export default BrandPromotion2;
function onChange() {}
