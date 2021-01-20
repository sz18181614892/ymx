import "./manageReturns.css";
import { Checkbox, Tabs } from "antd";
import HeaderCom from "../../components/HeaderCom/HeaderCom";
import FooterCom from "../../components/FooterCom/FooterCom";
import { DownOutlined } from "@ant-design/icons";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.png";
import img5 from "./img5.png";
import img6 from "./img6.png";
import img7 from "./img7.png";
import img8 from "./img8.png";

const { TabPane } = Tabs;
function manageReturns() {
  return (
    <div>
      <HeaderCom />
      <div className="manageReturns-body">
        <div>
          <span className="manageReturns-name">管理退货</span>
          <a>了解更多信息</a>
          <span className="manageReturns-branch">|</span>
          <a>编辑退货设置</a>
          <span className="manageReturns-branch">|</span>
          <a>查看报告</a>
        </div>
        <div className="manageReturns-screen">
          <div>
            <input placeholder="订单ID、RMA、跟踪编号或ASIM" />
            <button>搜索</button>
          </div>
          <div>
            <label>
              <select>
                <option>排序依据：最早评论优先</option>
              </select>
            </label>
            <label>
              <select>
                <option>销售渠道：所有</option>
              </select>
            </label>
            <label>
              <select>
                <option>日期范围：过去30天</option>
              </select>
            </label>
          </div>
        </div>
        <div>
          <div className="manageReturns-chakan">
            <Tabs defaultActiveKey="1">
              <TabPane tab="广告首页" key="1">
                <div className="manageReturns-xuanzhe">
                  <div className="manageReturns-xuanzhe1">
                    <input type="Checkbox" />
                    选择此页面上的所有退货
                  </div>
                  <div>收拢所有详细信息部分</div>
                </div>
                <div className="manageReturns-list">
                  <div className="manageReturns-list-head">
                    <div>
                      <div>已关闭：26天前</div>
                      <div>已订购：39天前</div>
                    </div>
                    <div>
                      <div>订单编号：111-1791523-7023443</div>
                      <div>退货批准：</div>
                    </div>
                  </div>
                  <div className="manageReturns-list-content1">
                    <div>
                      <button className="manageReturns-list-content1-button">
                        之前退款：已应用
                      </button>
                    </div>
                    <div className="manageReturns-list-content">
                      <div className="tuihuoyuanying">
                        <div>
                          退货原因：
                          <span className="manageReturns-list-content-span">
                            商品质量问题
                          </span>
                        </div>
                        <img src={img1} />
                        <div>
                          <DownOutlined />
                          <a>查看更多详情</a>
                        </div>
                      </div>
                      <div className="shuoming">
                        <div>
                          <a>
                            Digital Body Weight Bathroom with Step-On
                            Technology,400Lb,6mm Thickness Black Weight Scale
                          </a>
                        </div>
                        <div>退货数量：1</div>
                        <div>
                          买家说明：Does not show weight.Screen is blank and it
                          does have batteries.
                        </div>
                      </div>
                      <div>
                        <button className="manageReturns-list-content1-button1">
                          进行退款
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="manageReturns-list">
                  <div className="manageReturns-list-head">
                    <div>
                      <div>已关闭：26天前</div>
                      <div>已订购：39天前</div>
                    </div>
                    <div>
                      <div>订单编号：113-7761728-9265816</div>
                      <div>退货批准：</div>
                    </div>
                  </div>
                  <div className="manageReturns-list-content1">
                    <div className="manageReturns-list-content">
                      <div className="tuihuoyuanying">
                        <div>
                          退货原因：
                          <span className="manageReturns-list-content-span">
                            配送外包装完好，配件缺失或图书内部缺损
                          </span>
                        </div>
                        <img src={img3} />
                        <div>
                          <DownOutlined />
                          <a>查看更多详情</a>
                        </div>
                      </div>
                      <div className="shuoming">
                        <div>
                          <a>
                            Dog Back Seat Cover protector Waterproof
                            Scratchproof Nonslip Ham mock for Dogs Backseat
                            Protection Against Dirt and Pet Fur Durable Pets
                            Seat Covers for SUVs
                          </a>
                        </div>
                        <div>退货数量：1</div>
                        <div>
                          买家说明：Item necer arrived.Checked all possible
                          locations
                        </div>
                      </div>
                      <div>
                        <button className="manageReturns-list-content1-button1">
                          进行退款
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="manageReturns-list">
                  <div className="manageReturns-list-head">
                    <div>
                      <div>已关闭：22天前</div>
                      <div>已订购：36天前</div>
                    </div>
                    <div>
                      <div>订单编号：112-8729968-8357808</div>
                      <div>退货批准：</div>
                    </div>
                  </div>
                  <div className="manageReturns-list-content1">
                    <div>
                      <button className="manageReturns-list-content1-button">
                        之前退款：已应用
                      </button>
                    </div>
                    <div className="manageReturns-list-content">
                      <div className="tuihuoyuanying">
                        <div>
                          退货原因：
                          <span className="manageReturns-list-content-span">
                            商品质量问题
                          </span>
                        </div>
                        <img src={img4} />
                        <div>
                          <DownOutlined />
                          <a>查看更多详情</a>
                        </div>
                      </div>
                      <div className="shuoming">
                        <div>
                          <a>
                            Papake Ottoman Set Round Velvet Footrest Modern
                            Vanity Stool Seat Bedroom Living Room(Green)
                          </a>
                        </div>
                        <div>退货数量：1</div>
                        <div>买家说明：Color doesn't work</div>
                      </div>
                      <div>
                        <button className="manageReturns-list-content1-button1">
                          进行退款
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="manageReturns-list">
                  <div className="manageReturns-list-head">
                    <div>
                      <div>已关闭：22天前</div>
                      <div>已订购：36天前</div>
                    </div>
                    <div>
                      <div>订单编号：111-1791523-7023443</div>
                      <div>退货批准：</div>
                    </div>
                  </div>
                  <div className="manageReturns-list-content1">
                    <div>
                      <button className="manageReturns-list-content1-button">
                        之前退款：已应用
                      </button>
                    </div>
                    <div className="manageReturns-list-content">
                      <div className="tuihuoyuanying">
                        <div>
                          退货原因：
                          <span className="manageReturns-list-content-span">
                            商品质量问题
                          </span>
                        </div>
                        <img src={img4} />
                        <div>
                          <DownOutlined />
                          <a>查看更多详情</a>
                        </div>
                      </div>
                      <div className="shuoming">
                        <div>
                          <a>
                            Papake Ottoman Set Round Velvet Footrest Modern
                            Vanity Stool Seat Bedroom Living Room(Green)
                          </a>
                        </div>
                        <div>退货数量：1</div>
                        <div>买家说明：Color doesn't work...</div>
                      </div>
                      <div>
                        <button className="manageReturns-list-content1-button1">
                          进行退款
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="manageReturns-list">
                  <div className="manageReturns-list-head">
                    <div>
                      <div>已关闭：19天前</div>
                      <div>已订购：39天前</div>
                    </div>
                    <div>
                      <div>订单编号：111-1791523-7023443</div>
                      <div>退货批准：</div>
                    </div>
                  </div>
                  <div className="manageReturns-list-content1">
                    <div>
                      <button className="manageReturns-list-content1-button">
                        之前退款：已应用
                      </button>
                    </div>
                    <div className="manageReturns-list-content">
                      <div className="tuihuoyuanying">
                        <div>
                          退货原因：
                          <span className="manageReturns-list-content-span">
                            超出预计送达时间
                          </span>
                        </div>
                        <img src={img5} />
                        <div>
                          <DownOutlined />
                          <a>查看更多详情</a>
                        </div>
                      </div>
                      <div className="shuoming">
                        <div>
                          <a>
                            1.8L Stainless Steel Electric Kettle with Water
                            Window, LED Light,Overheat Protection
                          </a>
                        </div>
                        <div>退货数量：1</div>
                        <div>买家说明：</div>
                      </div>
                      <div>
                        <button className="manageReturns-list-content1-button1">
                          进行退款
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="manageReturns-list">
                  <div className="manageReturns-list-head">
                    <div>
                      <div>已关闭：15天前</div>
                      <div>已订购：34天前</div>
                    </div>
                    <div>
                      <div>订单编号：111-1791523-7023443</div>
                      <div>退货批准：</div>
                    </div>
                  </div>
                  <div className="manageReturns-list-content1">
                    <div className="manageReturns-list-content">
                      <div className="tuihuoyuanying">
                        <div>
                          退货原因：
                          <span className="manageReturns-list-content-span">
                            订错货
                          </span>
                        </div>
                        <img src={img6} />
                        <div>
                          <DownOutlined />
                          <a>查看更多详情</a>
                        </div>
                      </div>
                      <div className="shuoming">
                        <div>
                          <a>
                            Fireplace Tools Indoor Outdoor Wrought Lron Firewood
                            Toolset Black Fireset Pit Stand Fire Place Log Tongs
                            Tools Kit Sets Wood Stove Accessories
                          </a>
                        </div>
                        <div>退货数量：1</div>
                        <div>买家说明：l orderd 2by mistake</div>
                      </div>
                      <div>
                        <button className="manageReturns-list-content1-button1">
                          进行退款
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="manageReturns-list">
                  <div className="manageReturns-list-head">
                    <div>
                      <div>已关闭：15天前</div>
                      <div>已订购：36天前</div>
                    </div>
                    <div>
                      <div>订单编号：111-1791523-7023443</div>
                      <div>退货批准：</div>
                    </div>
                  </div>
                  <div className="manageReturns-list-content1">
                    <div>
                      <button className="manageReturns-list-content1-button">
                        之前退款：已应用
                      </button>
                    </div>
                    <div className="manageReturns-list-content">
                      <div className="tuihuoyuanying">
                        <div>
                          退货原因：
                          <span className="manageReturns-list-content-span">
                            配送包裹外包装完好，配件缺失或图书内部缺损
                          </span>
                        </div>
                        <img src={img7} />
                        <div>
                          <DownOutlined />
                          <a>查看更多详情</a>
                        </div>
                      </div>
                      <div className="shuoming">
                        <div>
                          <a>
                            Home Use Upgraded Electronic Password Steel Plate
                            Safe Box Black
                          </a>
                        </div>
                        <div>退货数量：1</div>
                        <div>买家说明：Both have broken inner compartment.</div>
                      </div>
                      <div>
                        <button className="manageReturns-list-content1-button1">
                          进行退款
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="manageReturns-list">
                  <div className="manageReturns-list-head">
                    <div>
                      <div>已关闭：7天前</div>
                      <div>已订购：45天前</div>
                    </div>
                    <div>
                      <div>订单编号：111-1791523-7023443</div>
                      <div>退货批准：</div>
                    </div>
                  </div>
                  <div className="manageReturns-list-content1">
                    <div>
                      <button className="manageReturns-list-content1-button">
                        之前退款：已应用
                      </button>
                    </div>
                    <div className="manageReturns-list-content">
                      <div className="tuihuoyuanying">
                        <div>
                          退货原因：
                          <span className="manageReturns-list-content-span">
                            商品质量问题
                          </span>
                        </div>
                        <img src={img2} />
                        <div>
                          <DownOutlined />
                          <a>查看更多详情</a>
                        </div>
                      </div>
                      <div className="shuoming">
                        <div>
                          <a>
                            Swivel Universal TV Stand/Basse-Table TV Stand for
                            40-65 lnch LED TVs-Height Adjustable TV Mount
                            Stand,VESA Upto 600 by 400mm,Holds Up to 35kg,Black
                          </a>
                        </div>
                        <div>退货数量：1</div>
                        <div>
                          买家说明：does't fit the tv there is no holes to drill
                          in at back of the tv
                        </div>
                      </div>
                      <div>
                        <button className="manageReturns-list-content1-button1">
                          进行退款
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="manageReturns-list">
                  <div className="manageReturns-list-head">
                    <div className="manageReturns-input">
                      <input type="Checkbox" />
                      <div>
                        <div>已关闭：5天前</div>
                        <div>已订购：11天前</div>
                      </div>
                    </div>
                    <div>
                      <div>买家：Eericr</div>
                      <a>通讯历史记录</a>
                    </div>
                    <div>
                      <div>订单编号：111-1791523-7023443</div>
                      <div>退货批准：将在授权后生成RMA</div>
                    </div>
                  </div>
                  <div className="manageReturns-list-content1">
                    <div className="manageReturns-list-content">
                      <div className="tuihuoyuanying">
                        <div>
                          退货原因：
                          <span className="manageReturns-list-content-span">
                            不需要/不想要的商品
                          </span>
                        </div>
                        <img src={img8} />
                        <div>
                          <DownOutlined />
                          <a>查看更多详情</a>
                        </div>
                      </div>
                      <div className="shuoming">
                        <div>
                          <a>
                            Backrest Stool with Adjustable Foot pad Height Task
                            Chair ,Comfortable and Durable,Rotate 360 Degrees,PU
                            Leather,white
                          </a>
                        </div>
                        <div>退货数量：1</div>
                        <div>买家说明：</div>
                      </div>
                      <div>
                        <div>
                          <button className="manageReturns-list-content1-button2">
                            批准退货申请
                          </button>
                        </div>
                        <div>
                          <button className="manageReturns-list-content1-button1">
                            关闭申请
                          </button>
                        </div>
                        <div>
                          <button className="manageReturns-list-content1-button1">
                            进行退款
                          </button>
                        </div>
                        <div>
                          <button className="manageReturns-list-content1-button1">
                            联系卖家
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="manageReturns-list">
                  <div className="manageReturns-list-head">
                    <div className="manageReturns-input">
                      <input type="Checkbox" />
                      <div>
                        <div>已关闭：2天前</div>
                        <div>已订购：35天前</div>
                      </div>
                    </div>
                    <div>
                      <div>买家：Allison</div>
                      <a>通讯历史记录</a>
                    </div>
                    <div>
                      <div>订单编号：111-1791523-7023443</div>
                      <div>退货批准：将在授权后生成RMA</div>
                    </div>
                  </div>
                  <div className="manageReturns-list-content1">
                    <div className="manageReturns-list-content">
                      <div className="tuihuoyuanying">
                        <div>
                          退货原因：
                          <span className="manageReturns-list-content-span">
                            不需要/不想要的商品
                          </span>
                        </div>
                        <img src={img6} />
                        <div>
                          <DownOutlined />
                          <a>查看更多详情</a>
                        </div>
                      </div>
                      <div className="shuoming">
                        <div>
                          <a>
                            Fireplace Tools Indoor Outdoor Wrought Lron Firewood
                            Toolset Black Fireset Pit Stand Fire Place Log Tongs
                            Tools Kit Sets Wood Stove Accessories
                          </a>
                        </div>
                        <div>退货数量：1</div>
                        <div>买家说明：</div>
                      </div>
                      <div>
                        <div>
                          <button className="manageReturns-list-content1-button2">
                            批准退货申请
                          </button>
                        </div>
                        <div>
                          <button className="manageReturns-list-content1-button1">
                            关闭申请
                          </button>
                        </div>
                        <div>
                          <button className="manageReturns-list-content1-button1">
                            进行退款
                          </button>
                        </div>
                        <div>
                          <button className="manageReturns-list-content1-button1">
                            联系卖家
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="manageReturns-paging">
                  <span>第1至10个退货，共10个</span>
                  <div>← 前一页 &ensp; &emsp; 下一页 →</div>
                  <div>
                    <label>
                      <select>
                        <option>25</option>
                      </select>
                    </label>
                    <button>开始</button>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="需要授权" key="2"></TabPane>
              <TabPane tab="已批准" key="3"></TabPane>
              <TabPane tab="已完成" key="4"></TabPane>
              <TabPane tab="已关闭" key="5"></TabPane>
              <TabPane tab="通过亚马逊商城交易保障索赔" key="6"></TabPane>
            </Tabs>
            <div className="manageReturns-see-FBA">
              <a>查看FBA退货</a>
            </div>
          </div>
        </div>
      </div>
      <FooterCom />
    </div>
  );
}

export default manageReturns;
