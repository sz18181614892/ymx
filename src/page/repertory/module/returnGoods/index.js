import { Tag } from "antd";
import React from "react";
import "./index.css";

function ReturnGoods() {
  return (
    <div className="ReturnGoods">
      <div className="ReturnGoods-head-font">
        <div className="ReturnGoods-head-font-title">
          <div>管理亚马逊物流退货</div>
          <a className="ReturnGoods-head-font-a">退货政策</a>
        </div>
        <div className="ReturnGoods-head-font-button">
          <button>管理卖家自行配送退货</button>
          <button className="ReturnGoods-head-font-button2">退货报告</button>
          <button>亚马逊物流设置</button>
        </div>
      </div>
      <div className="ReturnGoods-search">
        <input placeholder="搜索订单编号、SKU、ASIN、LPN" />
        <button>搜索</button>
        <label>
          <select>
            <option>筛选条件：已应用2项</option>
          </select>
        </label>
        <span>0商品</span>
      </div>
      {/* 列表头部 */}
      <div className="ReturnGoods-listTitel">
        <div>
          <strong className="ReturnGoods-listTitel-color">订单编号</strong>
        </div>
        <div>
          <strong>图片</strong>
        </div>
        <div>
          <div>
            <strong>商品名称</strong>
          </div>
          <div>ASINFN</div>
          <div>SKU</div>
        </div>
        <div>
          <strong className="ReturnGoods-listTitel-color">买家退货原因</strong>
        </div>
        <div>
          <strong className="ReturnGoods-listTitel-color">批准退货时间</strong>
        </div>
        <div>
          <div className="ReturnGoods-searchLabell">
            <label>
              <select>
                <option>卖家退款日期</option>
              </select>
            </label>
          </div>
        </div>
        <div>
          <strong className="ReturnGoods-listTitel-color">商品接收日期</strong>
        </div>
        <div>
          <strong className="ReturnGoods-listTitel-color">库存属性</strong>
        </div>
        <div>
          <strong>退货状态</strong>
        </div>
        <div>
          <strong>操作</strong>
        </div>
      </div>
      <div className="ReturnGoods-details">
        你没有符合这一条件的退货商品。请调整日期范围以查看更多商品。
      </div>
      <div className="ReturnGoods-ResultsPerPage">
        <label>
          <select>
            <option>每页25个结果</option>
          </select>
        </label>
      </div>
      <div className="ReturnGoods-box">
        <div className="ReturnGoods-foot">
          <div>
            <a>帮助</a>
            <span>|</span>
            <a>计划政策</a>
            <span>|</span>
            <label>
              <select>
                <option>中文</option>
              </select>
            </label>
          </div>
          <div className="ReturnGoods-foot1">
            © 1999-2020年，亚马逊公司和其附属公司
          </div>
        </div>
      </div>
      <div className="Tag">
        <span>
          <Tag closable onClose={preventDefault}>
            反馈
          </Tag>
        </span>
      </div>
    </div>
  );
}
export default ReturnGoods;
function preventDefault(e) {
  e.preventDefault();
}
