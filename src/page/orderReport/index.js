import "./orderReport.css";
import { InfoCircleOutlined, WarningOutlined } from "@ant-design/icons";
import { Tabs, Table } from "antd";
import HeaderCom from "../../components/HeaderCom/HeaderCom";
import FooterCom from "../../components/FooterCom/FooterCom";
const { TabPane } = Tabs;
function orderReport() {
  return (
    <div className="orderReport-main">
      <HeaderCom />
      <div className="orderReport-box">
        <h2>订单报告</h2>
        <div className="orderReport-1">
          <InfoCircleOutlined
            className="tubiao1"
            style={{ fontSize: "20px", color: "#3489ac" }}
          />
          <div>
            <b>新品！你要在订单报告中看到的列。</b>
            <div className="orderReport-1-1">
              要开始，请转到<a>添加或删除订单报告列。</a>
              你所选的列将适用于未来的所有报告。<a>了解更多详情</a>
            </div>
          </div>
        </div>
        <div className="orderReport-2">
          <WarningOutlined
            className="tubiao1"
            style={{ fontSize: "20px", color: "#ffc010" }}
          />
          <div>
            <b>客户电话号码隐私性</b>
            <div className="orderReport-1-1">
              订单报告中包含的客户个人性息，包括电话号码，仅可用于制作货件标签。有关正确使用客户个人信息得详情，请参阅
              <a>亚马逊服务商业解决方案协议</a>和<a>禁止的卖家活动和操作</a>
            </div>
          </div>
        </div>
        <div className="card-container">
          <Tabs type="card">
            <TabPane tab="新订单" key="1">
              <div>
                新订单报表包含您在所选天数内收到的所有卖家自行配送的订单。这包括您已经取消的订单或确认为已经配送的订单。
                <a>了解更多信息</a>
              </div>
              <div className="request-report">
                <div className="request-report-name">请求报告</div>
                <div className="request-report-content">
                  <label>
                    <select>
                      <option>日期范围：最后一天</option>
                    </select>
                  </label>
                  <button>请求</button>
                  <div className="request-report-input">
                    <input type="checkbox" />
                    <span>包含一个指明每个订单的销售渠道的列。</span>
                    <a>了解更多信息</a>
                  </div>
                </div>
              </div>
              <div className="request-report">
                <div className="request-report-name">计划的订单报告设置</div>
                <div className="request-report-content1">
                  <label>
                    <select>
                      <option>每 15 分钟</option>
                    </select>
                  </label>
                  <button>安排</button>
                  <div className="request-report-input">
                    <input type="checkbox" />
                    <span>包含一个指明每个订单的销售渠道的列。</span>
                    <a>了解更多信息</a>
                  </div>
                  <div className="request-report-card">
                    目前，您未接收已计划订单报告。
                  </div>
                </div>
              </div>
              <div>
                <div className="request-report-list-title">
                  <span>下载报告</span>
                  <button className="request-report-list-button">刷新</button>
                </div>
                <div className="request-report-list">
                  <Table
                    columns={column}
                    dataSource={data}
                    pagination={false}
                  />
                </div>
              </div>
            </TabPane>
            <TabPane tab="未发货订单" key="2"></TabPane>
            <TabPane tab="一天结束时的表格" key="3"></TabPane>
            <TabPane tab="已存档的订单" key="4"></TabPane>
          </Tabs>
        </div>
      </div>
      <FooterCom />
    </div>
  );
}

export default orderReport;
const column = [
  {
    title: "报告类型",
    dataIndex: "ReportType",
    key: "1",
  },
  {
    title: "批编号",
    dataIndex: "BatchNumber",
    key: "2",
  },
  {
    title: "涵盖的日期范围",
    dataIndex: "Date ",
    key: "3",
  },
  {
    title: "请求的日期和时间",
    dataIndex: "requestDate",
    key: "4",
  },
  {
    title: "完成的日期和时间",
    dataIndex: "completeDate",
    key: "5",
  },
  {
    title: "报告状态",
    dataIndex: "ReportStatus",
    key: "6",
  },
  {
    title: "下载",
    key: "operation",
    render: () => <button className="request-report-list-button">下载</button>,
  },
];
const data = [
    {
        key:1,
        ReportType:"订单报告（手动）",
        BatchNumber:103737018615,
        Date:"2020/9/20 北美太平洋夏令时间 下午2:46:05-2020/12/19 北美太平洋标准时间 下午1:46:05",
        requestDate:"2020/12/19 北美太平洋标准时间 下午1:46:05",
        completeDate:"2020/12/19 北美太平洋标准时间 下午1:46:31",
        ReportStatus:"就绪",
    }
];
