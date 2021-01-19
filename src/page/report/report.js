import React from "react";
import "./report.css";

function report() {
  return (
    <div className="report-body">
      {/* 标题 */}
      <div>
        <div className="report-titel">
          <div className="report-titelFont" style={{ color: "#c45500" }}>
            库存报告
          </div>
        </div>
        <div>
          请求并下载您的库存列表。您可以使用您的库存报告，来查看您当前正在出售的商品快照。
          <a>了解更多信息</a>
        </div>
      </div>
      {/* 请求库存报告 */}
      <div className="report-reportboxHead">
        <div className="report-reportboxTitel">
          <strong>请求库存报告</strong>
        </div>
        <div className="report-reportboxNav">
          <div>选择类型报告:</div>
          <div>
            <div className="redundance-searchLabel">
              <label>
                <select className="Replenish-select3">
                  <option>库存报告</option>
                </select>
              </label>
            </div>
            <div>
              下载库存报告，获得您的商品品种一览，其中包括每个SKU的价格和数量。
              <a>了解更多信息</a>
            </div>
            <a>自定义此报告的各列</a>
          </div>
        </div>
        <div className="report-reportboxBottom">
          <button>请求报告</button>
        </div>
      </div>
      {/* 检查报告状态并下载 */}
      <div className="report-reportboxdownload">
        <div className="report-downloadHead">
          <strong>检查报告并下载</strong>
        </div>
        <div className="report-downloadTitel">
          <strong>报告类型</strong>
          <strong >批量编号</strong>
          <strong>请求日期和时间</strong>
          <strong>完成日期和时间</strong>
          <strong>报告状况</strong>
          <strong>下载</strong>
        </div>
        <div className="report-downloadNav">
          <div>库存报告</div>
          <div>115175018617</div>
          <div>12/22/2020 05:09:03 GMT+0800(中国标准时间)</div>
          <div>12/22/2020 05:09:03 GMT+0800(中国标准时间)</div>
          <div>就绪</div>
          <div>下载</div>
        </div>
      </div>
    </div>
  );
}
export default report;
