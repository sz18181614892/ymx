import "./newBundle.css";
import { InfoCircleOutlined } from "@ant-design/icons";
import HeaderCom from "../../components/HeaderCom/HeaderCom";
import IconFont from "../../components/Icon/Icon";
import { Layout, Row, Col, Input } from "antd";
import img from "./sponsored.png";
const { Footer } = Layout;
function newBundle() {
  return (
    <div className="newBundle-main">
      <HeaderCom />
      <div className="newBundle-head">
        <div>
          <span>新捆绑商品</span>
          <button className="newBundle-head-button">测试版</button>
          <a>了解更多信息</a>
        </div>
        <div>
          <button className="newBundle-head-button2">取消</button>
          <button className="newBundle-head-button1">保存并发布</button>
        </div>
      </div>
      <div className="newBundle-commodities-box">
        <div className="newBundle-commodities-left">
          <div className="newBundle-commodities">
            <span>捆绑商品</span>
            <InfoCircleOutlined />
          </div>
          <div className="newBundle-commodities1">
            <div className="newBundle-commodities1-border"></div>
            <div>
              <div className="newBundle-commodities1-condition">
                捆绑商品必须至少包含两件商品。
              </div>
              <button>+添加商品...</button>
            </div>
          </div>
          <div className="newBundle-commodities1">
            <div className="newBundle-commodities1-border"></div>
          </div>
          <div className="newBundle-commodities2">
            <div className="newBundle-commodities2-left">
              <div>
                <span>主捆绑商品图片</span>
                <InfoCircleOutlined />
              </div>
              <div className="newBundle-commodities2-left-img-box">
                <img src={img} />
              </div>
              <a>选择图片和布局</a>
            </div>
            <div className="newBundle-commodities2-right">
              <div>
                <span>其他捆绑商品图片</span>
                <InfoCircleOutlined />
              </div>
              <div className="newBundle-commodities2-right-div">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="newBundle-commodities-right1">
            <div>
              <span>捆绑商品名称：</span>
              <InfoCircleOutlined />
            </div>
            <input
              className="newBundle-input"
              placeholder="在此输入捆绑商品名称"
            />
            <div>
              <span>你的捆绑商品价格</span>
            </div>
            <div className="newBundle-input1-box">
              <Input
                className="newBundle-input1"
                prefix="$"
                defaultValue="0.00"
              />
              无折扣的合并价格：<a className="newBundle-input1-a">US$0.00</a>
            </div>
            <div>
              <span>捆绑商品描述</span>
            </div>
            <textarea
              className="newBundle-input3"
              placeholder="在此处输入捆绑商品描述"
            />
          </div>
          <div className="newBundle-input4">
            <span>要点</span>
            <input className="newBundle-input" placeholder="输入要点文本" />
            <input className="newBundle-input" placeholder="输入要点文本" />
            <input className="newBundle-input" placeholder="输入要点文本" />
            <input className="newBundle-input" placeholder="输入要点文本" />
            <input className="newBundle-input" placeholder="输入要点文本" />
          </div>
          <div className="newBundle-input5">
              <div><span>SKU</span><InfoCircleOutlined /></div>
              <input placeholder="在此输入一个SKU" />
          </div>
        </div>
      </div>
      <div className="newBundle-foot">
        <Footer>
          <Row>
            <Col span="20">
              <ul className="footer-ul">
                <li>
                  帮助<span>|</span>
                </li>
                <li>
                  计划政策<span>|</span>
                </li>
                <li>
                  <label>
                    <select className="footer-select">
                      <option value="中文">中文</option>
                    </select>
                  </label>
                </li>
              </ul>
            </Col>
            <Col className="copyright" span="4">
              © 1999-2020年，亚马逊公司或其附属公司
            </Col>
          </Row>
          <div className="feedback">
            <button>反馈</button>
            <IconFont type="icon-guanbi" className="iconfont-gb" />
          </div>
        </Footer>
      </div>
    </div>
  );
}

export default newBundle;
