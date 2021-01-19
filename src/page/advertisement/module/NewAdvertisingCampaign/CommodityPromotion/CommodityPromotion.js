import React from "react";
import "./CommodityPromotion.css";
import {
  QuestionCircleOutlined,
  CloseOutlined,
  InfoCircleOutlined,
  DownOutlined,
  SearchOutlined,
  UpOutlined,
} from "@ant-design/icons";
import { Input, Steps, Tabs } from "antd";
const { TabPane } = Tabs;
const { Step } = Steps;
const { TextArea } = Input;
function CommodityPromotion() {
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
              <a>
                <QuestionCircleOutlined fontSize="12px" />{" "}
                请参阅"广告活动设置指南"
              </a>
            </div>
            <div className="CommodityPromotion-setUp-content">
              <span>
                广告活动名称
                <InfoCircleOutlined />
              </span>
              <div>
                <input />
              </div>
              <span>
                广告组合
                <InfoCircleOutlined />
              </span>
              <div>
                <label>
                  <select className="CommodityPromotion-setUp-select">
                    <option>无广告组合</option>
                  </select>
                </label>
              </div>
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
              <div>
                <span>
                  每日预算
                  <InfoCircleOutlined />
                </span>
                <div>
                  <div className="SetUp-BudgetSelection2">
                    <Input prefix="$" />
                  </div>
                </div>
              </div>
              <div>
                <span>定位</span>
                <br />
                <input
                  type="radio"
                  onChange={onChange}
                  checked="checked"
                  name="choice"
                />
                自动投放
                <div>亚马逊将定位到关键字和你广告中的商品类似的商品</div>
                <input type="radio" name="choice" />
                手动投放
                <div>选择可以定位到买家搜索的关键字或商品并设置自定义竞价</div>
              </div>
            </div>
          </div>
          {/* 广告活动竞价策略 */}
          <div className="BiddingStrategy">
            <div className="BiddingStrategy-title">
              <div>
                <span>
                  广告活动竞价策略
                  <InfoCircleOutlined />
                </span>
              </div>
              <div>
                <a>
                  <QuestionCircleOutlined fontSize="12px" /> 选择竞价策略
                </a>
              </div>
            </div>
            <div className="BiddingStrategy-content">
              <input
                type="radio"
                onChange={onChange}
                checked="checked"
                name="choices"
                //   defaultValue="reduce"
              />
              动态竞价-只降低
              <div>
                当你的广告转化为订单的可能性较小时，我们将实时调低你的竞价
              </div>
              <input type="radio" name="choices" />
              动态竞价-提高和降低
              <InfoCircleOutlined />
              <br />
              <div>
                当你的广告可能带来销售时，我们将实时提高你的竞价（最高可达100%），并在你的广告不太可能带来销售时降低你的竞价。
              </div>
              <input type="radio" name="choices" />
              固定竞价
              <div>
                我们将使用你的确切竞价和你设置的任何手动调整，而不会根据售出可能性对你的竞价进行更改。
              </div>
              <div>
                <DownOutlined />
                <a>根据广告调整竞价</a>
                <InfoCircleOutlined />
              </div>
            </div>
          </div>
          {/* 创建广告组 */}
          <div>
            <div className="Createadgroupsettings">
              <span>创建广告组</span>
              <div>
                广告组是一组共享相同关键词和商品的广告。请考虑属于相同分类和价格范围的商品分为一组。你可以在启动后编辑你的广告活动，以在"广告活动管理"中创建额外的广告组。
              </div>
            </div>
            <div className="Createadgroupsettings-box">
              <div className="Createadgroupsettings-title">
                <span>设置</span>
                <div>
                  <a>
                    <QuestionCircleOutlined fontSize="12px" /> 创建广告分组
                  </a>
                </div>
              </div>
              <div className="Createadgroupsettings-content">
                <span>
                  广告组名称
                  <InfoCircleOutlined />
                </span>
                <div>
                  <input />
                </div>
              </div>
            </div>
            <div className="Add-promotional-products-box">
              <div className="Add-promotional-products">
                <span>
                  商品
                  <InfoCircleOutlined />
                </span>
                <div>
                  <a>
                    <QuestionCircleOutlined fontSize="12px" />
                    添加要推广的商品
                  </a>
                </div>
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
                    <span>显示：</span>
                    <label>
                      <select className="CommodityPromotion-setUp-select-sort">
                        <option>最新优先原则</option>
                      </select>
                    </label>
                    <span className="CommodityPromotion-search-sort-span">
                      新
                    </span>
                  </div>
                  <div className="CommodityPromotion-search-sort-a">
                    <a>在此页面上添加全部</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="Automatic-delivery">
              <div className="Add-promotional-products">
                <span>
                  自动投放
                  <InfoCircleOutlined />
                </span>
                <div>
                  <a>
                    <QuestionCircleOutlined fontSize="12px" />
                    选择愿意为点击支付的费用
                  </a>
                </div>
              </div>
              <div className="Auto-launch-progress">
                <Steps size="small" direction="vertical" current={0}>
                  <Step
                    title="设置默认出价"
                    description={<Input prefix="$" />}
                  />
                  <Step title="通过投放组设置出价" />
                </Steps>
              </div>
            </div>
            <div className="Negative-keyword-positioning">
              <div className="Add-promotional-products">
                <span>
                  <UpOutlined />
                  <span>否定关键词定位</span>
                  <InfoCircleOutlined />
                  可选
                </span>
              </div>
              <div className="Negative-keywordaddition-box">
                <div className="Add-promotional-products-Match-type">
                  <span>匹配类型</span>
                  <InfoCircleOutlined />
                  <input
                    type="radio"
                    name="choice"
                    onChange={onChange}
                    checked="checked"
                  />
                  <span>否定精准</span>
                  <input type="radio" name="choice" />
                  <span>否定词组</span>
                  <div>
                    <TextArea
                      type="text"
                      placeholder="输入你的列表，并用新行将每项隔开。"
                      rows={6}
                    />
                  </div>
                  <button>添加关键词</button>
                </div>
                <div className="Negative-keywordaddition">
                  <div className="Negative-keywordaddition-add-delete">
                    <div>已添加0个</div>
                    <div>
                      <a>全部删除</a>
                    </div>
                  </div>
                  <div className="Negative-keywordaddition-key-word">
                    <div>关键词</div>
                    <div>
                      匹配类型
                      <InfoCircleOutlined />
                    </div>
                  </div>
                </div>
              </div>
              <div className="Learn-more">
                <InfoCircleOutlined />
                某些关键词不符合定向条件，也不会显示广告。<a>了解更多信息</a>
              </div>
            </div>
            <div className="negative">
              <div className="Add-promotional-products">
                <span>
                  <UpOutlined />
                  <span>否定关键词定位</span>
                  <InfoCircleOutlined />
                  可选
                </span>
              </div>
              <div className="negative-exclude">
                <div className="negative-exclude-box">
                  <div className="negative-exclude-box-Navigation">
                    <Tabs defaultActiveKey="1">
                      <TabPane tab="搜索" key="1"></TabPane>
                      <TabPane tab="输入列表" key="2"></TabPane>
                      <TabPane tab="上传" key="3"></TabPane>
                    </Tabs>
                  </div>
                  <div className="negative-exclude-search">
                    <i>
                      <SearchOutlined />
                    </i>
                    <input placeholder="按商品名称、ASIN或SKU进行搜索" />
                    <button>
                      <SearchOutlined />
                    </button>
                  </div>
                  <div className="Items-to-exclude">搜索要排除的商品。</div>
                </div>
                <div className="How-many-excluded-objects-are-added">
                  <span>0添加的排除对象</span>
                </div>
                <div className="Negative-goals">
                  <span>负面目标</span>
                  <button>删除所有</button>
                </div>
                <div className="Negative-goals1"></div>
              </div>
            </div>
            <div className="button">
              <button className="button1">保存为草稿</button>
              <button className="button2">启动广告活动</button>
            </div>
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

export default CommodityPromotion;
function onChange() {}
