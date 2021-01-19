import React from "react";
import "./BrandPromotion1.css";
import { Input, Tabs, Switch, Checkbox, Table, Tooltip } from "antd";
import {
  QuestionCircleOutlined,
  CloseOutlined,
  InfoCircleOutlined,
  FormOutlined,
  LeftOutlined,
  RightOutlined,
  UpOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import img1 from "./tu1.png";
import img2 from "./tu2.png";
import img3 from "./tu3.png";
import img4 from "./tu4.png";
import img5 from "./tu5.png";
import img6 from "./tu6.png";
const { TabPane } = Tabs;
const { TextArea } = Input;
function BrandPromotion1() {
  return (
    <div className="BrandPromotion1">
      <div className="BrandPromotion1-head">
        <div className="BrandPromotion1-head-left">
          <span>
            <CloseOutlined />
          </span>
          <span>新建广告活动</span>
        </div>
        <div className="BrandPromotion1-head-right">
          <a>返回广告活动</a>
          <button className="BrandPromotion1-head-right-button1">
            保存为草稿
          </button>
          <button className="BrandPromotion1-head-right-button2">
            提交以供审核
          </button>
          <span>
            <QuestionCircleOutlined />
          </span>
        </div>
      </div>
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
              <input
                type="radio"
                onChange={onChange}
                checked="checked"
                name="c"
              />
              亚马逊品牌旗舰店（包括子页面）
              <div className="Landing-page-selection">
                <div className="Bold-title1">
                  <span>选择一个店铺</span>
                  <div>
                    <label>
                      <select>
                        <option>MengK</option>
                      </select>
                    </label>
                  </div>
                </div>
                <div className="Bold-title2">
                  <span>选择一个页面</span>
                  <div>
                    <label>
                      <select>
                        <option>主页</option>
                      </select>
                    </label>
                  </div>
                </div>
                <div className="Bold-title3">
                  <a>
                    查看页面
                    <FormOutlined />
                  </a>
                </div>
              </div>
              <input type="radio" name="c" />
              新着陆页
              <div></div>
            </div>
          </div>
          {/* 创意 */}
          <div className="BrandPromotion1-originality">
            <div className="BrandPromotion1-originality-head">创意</div>
            <div className="BrandPromotion1-originality-box">
              <div className="BrandPromotion1-originality-left">
                <div className="BrandPromotion1-originality-left-Name-and-badge">
                  <span>品牌名称和徽章</span>
                  <div className="BrandPromotion1-originality-left-Name-and-badge-box">
                    <div>
                      <div>
                        <img src={img4} />
                      </div>
                      <a>编辑Logo</a>
                    </div>
                    <div>
                      <input defaultValue="MengK Makes Your Lift Happy" />
                      <p>剩余字符数：3</p>
                    </div>
                  </div>
                </div>
                <div className="BrandPromotion1-originality-left-commodity">
                  <div className="BrandPromotion1-originality-left-commodity-name">
                    商品
                    <InfoCircleOutlined />
                  </div>
                  <div>更改或重新订购下面的商品</div>
                  <div className="BrandPromotion1-originality-left-commodity-name">
                    <Tabs defaultActiveKey="1" onChange={callback}>
                      <TabPane tab="1" key="a">
                        <img src={img5} />
                      </TabPane>
                      <TabPane tab="2" key="b"></TabPane>
                      <TabPane tab="3" key="c"></TabPane>
                    </Tabs>
                  </div>
                  <div>
                    <Switch size="small" />{" "}
                    <span>
                      商品优化
                      <InfoCircleOutlined />
                    </span>
                  </div>
                </div>
                <div className="BrandPromotion1-originality-left-title">
                  <div className="BrandPromotion1-originality-left-title-name">
                    标题
                    <InfoCircleOutlined />
                  </div>
                  <div className="BrandPromotion1-originality-left-title-input">
                    <input defaultValue="此处为你的标题" />
                    <p>剩余字符数：50</p>
                  </div>
                  <div className="BrandPromotion1-originality-left-title-img">
                    自定义图片<span>测试版</span>
                  </div>
                  <div>
                    <Checkbox onChange={onChange}>
                      在支持的投放位置中展示自定义图片
                    </Checkbox>
                  </div>
                </div>
              </div>
              <div className="BrandPromotion1-originality-right">
                <div className="BrandPromotion1-originality-right-head">
                  <span>广告预览</span>
                  <label>
                    <select>
                      <option>搜索结果上方：移动设备广告</option>
                    </select>
                  </label>
                  <button>
                    <LeftOutlined />
                  </button>
                  <button>
                    <RightOutlined />
                  </button>
                  <span>
                    1 of
                    <InfoCircleOutlined />
                  </span>
                </div>
                <div>
                  <img src={img6} />
                </div>
              </div>
            </div>
          </div>
          {/* 投放 */}
          <div className="BrandPromotion1-Launch">
            <div className="BrandPromotion1-Launch-head">
              投放
              <InfoCircleOutlined />
            </div>
            <div className="BrandPromotion1-Launch-mode-box">
              <div className="BrandPromotion1-Launch-mode">
                <div>
                  <input
                    type="radio"
                    onChange={onChange}
                    checked="checked"
                    name="toufang"
                  />
                  关键词定位
                  <div>
                    选择有助于你的商品针对买家搜索展示关键词。
                    <a>了解更多信息</a>
                  </div>
                </div>
                <div className="BrandPromotion1-Launch-mode-introduce">
                  如果你知道买家在搜索与你的商品类似的商品时所用的搜索词，请使用这一策略。
                </div>
              </div>
              <div className="BrandPromotion1-Launch-mode">
                <div>
                  <input type="radio" name="toufang" />
                  商品定位
                  <div>
                    选择特定商品、分类、品牌或其他商品功能来定位你的广告
                    <a>了解更多信息</a>
                  </div>
                </div>
                <div className="BrandPromotion1-Launch-mode-introduce">
                  你可以使用这一策略来吸引在各个分类或品牌下浏览或搜索商品的买家。
                </div>
              </div>
            </div>
          </div>
          {/* 关键词定位 */}
          <div className="BrandPromotion1-Keyword-positioning-box">
            <div className="BrandPromotion1-Keyword-positioning-title">
              关键词定位
            </div>
            <div className="BrandPromotion1-Automatic-bidding">
              <span>
                自动竞价
                <InfoCircleOutlined />
              </span>
              <br />
              <Switch size="small" onChange={onChange} />{" "}
              <span>允许亚马逊自动优化搜索结果首页以外的广告位竞价。</span>
            </div>
            <div className="BrandPromotion1-jingjia-list-box">
              <div className="BrandPromotion1-jingjia-list">
                <div>
                  <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="建议" key="1"></TabPane>
                    <TabPane tab="输入列表" key="2"></TabPane>
                    <TabPane tab="上传文件" key="3"></TabPane>
                  </Tabs>
                </div>
                <div className="BrandPromotion1-jingjia-list-screen">
                  <div>
                    <span className="BrandPromotion1-jingjia-list-screen-span1">
                      竞价
                      <InfoCircleOutlined />
                    </span>
                    <label>
                      <select>
                        <option>建议竞价</option>
                      </select>
                    </label>
                  </div>
                  <br />
                  <div>
                    <span className="BrandPromotion1-jingjia-list-screen-span">
                      赛选条件
                      <InfoCircleOutlined />
                    </span>
                    <Checkbox onChange={onChange}>广泛</Checkbox>
                    <Checkbox onChange={onChange}>词组</Checkbox>
                    <Checkbox onChange={onChange}>精准</Checkbox>
                  </div>
                </div>
                <div className="BrandPromotion1-key-word-list">
                  <Table
                    columns={columns}
                    dataSource={data}
                    pagination={false}
                  />
                </div>
              </div>
              <div className="BrandPromotion1-Added">
                <div className="BrandPromotion1-Added-slsc">
                  <span>已添加3个</span> <a>全部删除</a>
                </div>
                <div className="BrandPromotion1-Added-list">
                  <Table
                    columns={column}
                    dataSource={data}
                    pagination={false}
                  />
                </div>
              </div>
            </div>
            <div className="BrandPromotion1-Added-xiangqing">
              <InfoCircleOutlined />
              某些关键词不符合定向条件，也不会显示广告。<a>了解更多信息</a>
            </div>
          </div>
          <div>
            <div className="BrandPromotion1-Negative-keyword-positioning">
              <div className="BrandPromotion1-Add-promotional-products">
                <span>
                  <UpOutlined />
                  <span>否定关键词定位</span>
                  <InfoCircleOutlined />
                  可选
                </span>
              </div>
              <div>
                <div className="BrandPromotion1-Negative-keywordaddition-box">
                  <div className="BrandPromotion1-Add-promotional-products-Match-type">
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
                    <div className="guanjiancitianjia">
                      <CheckOutlined />
                      1/1已成功添加关键词
                    </div>
                    <button>添加关键词</button>
                  </div>
                  <div className="BrandPromotion1-Negative-keywordaddition">
                    <div className="BrandPromotion1-Negative-keywordaddition-add-delete">
                      <div>已添加0个</div>
                      <div>
                        <a>全部删除</a>
                      </div>
                    </div>
                    <div className="BrandPromotion1-Negative-keywordaddition-key-word">
                      <div>关键词</div>
                      <div>
                        匹配类型
                        <InfoCircleOutlined />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="BrandPromotion1-Learn-more">
                  <InfoCircleOutlined />
                  某些关键词不符合定向条件，也不会显示广告。<a>了解更多信息</a>
                </div>
              </div>

              <div className="button">
                <button className="button1">保存为草稿</button>
                <button className="button2">启动广告活动</button>
              </div>
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
export default BrandPromotion1;
function onChange() {}
function callback() {}
const columns = [
  {
    title: "关键词",
    dataIndex: "name",
    key: "1",
  },
  {
    title: (
      <div>
        匹配类型&nbsp;
        <Tooltip placement="bottom" title="我是宇宙无敌小可爱！！！">
          <InfoCircleOutlined />
        </Tooltip>
      </div>
    ),
    dataIndex: "type",
    key: "2",
  },
  {
    title: (
      <div>
        建议竞价&nbsp;
        <Tooltip placement="bottom" title="我是宇宙无敌小可爱！！！">
          <InfoCircleOutlined />
        </Tooltip>
      </div>
    ),
    dataIndex: "bidding",
    key: "3",
  },
  {
    title: <a>添加全部</a>,
    key: "operation",
    render: () => <a>添加</a>,
  },
];
const data = [];
for (let i = 0; i < 6; i++) {
  data.push({
    key: i,
    name: "螺旋切片机",
    type: "精准",
    bidding: "$0.10",
  });
}

const column = [
  {
    title: "关键词",
    dataIndex: "name",
    key: "1",
    width: 140,
  },
  {
    title: (
      <div>
        匹配类型&nbsp;
        <Tooltip placement="bottom" title="我是宇宙无敌小可爱！！！">
          <InfoCircleOutlined />
        </Tooltip>
      </div>
    ),
    dataIndex: "type",
    key: "2",
  },
  {
    title: (
      <div className="jianyijingjia">
        建议竞价&nbsp;
        <Tooltip placement="bottom" title="我是宇宙无敌小可爱！！！">
          <InfoCircleOutlined />
        </Tooltip>
        <br />
        全部应用
      </div>
    ),
    dataIndex: "bidding",
    key: "3",
  },
  {
    title: "竞价",
    key: "operation",
    render: () => (
      <span className="jingjia">
        <Input prefix="$" />x
      </span>
    ),
    width: 110,
  },
];
