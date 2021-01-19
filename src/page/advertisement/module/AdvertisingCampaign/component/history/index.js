import React, { Component } from "react";
import * as echarts from "echarts";
import "./index.css";
import { InfoOutlined, CloseOutlined,LeftOutlined,RightOutlined } from "@ant-design/icons";
import { Table } from "antd";
class index extends Component {
  componentDidMount() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("main"));
    // 绘制图表
    myChart.setOption({
      xAxis: {
        type: "category",
        data: (function () {
          var list = [];
          for (var i = 1; i <= 37; i++) {
            list.push("2017/" + i + "/1");
          }
          return list;
        })(),
      },
      yAxis: {
        type: "category",
        data: ["0", "2M", "4M", "6M", "8M"],
      },
      series: [
        {
          data: [
            4,
            1,
            1.1,
            1.2,
            1.2,
            1.2,
            0.5,
            1.1,
            1.2,
            0.8,
            1.2,
            1.1,
            1.2,
            4,
            1,
            1.1,
            1.2,
            1.2,
            1.2,
            0.5,
            1.1,
            1.2,
            0.8,
            1.2,
            1.1,
            1.2,
            4,
            1,
            1.1,
            1.2,
            1.2,
            1.2,
            0.5,
            1.1,
            1.2,
            0.8,
            1.2,
            1.1,
            1.2,
          ],
          type: "bar",
        },
      ],
      grid: {
        top: "1%",
        left: "1%",
        right: "1%",
        bottom: "1%",
        containLabel: true,
      },
    });
  }
  render() {
    return (
      <div className="history-box">
        <div className="history-index-subject">
          <div className="history-index-subject1">
            <div>
              <div className="history-index-name">
                <span>花费</span>
                <span className="history-index-subject1-lcon">
                  <InfoOutlined />
                </span>
              </div>
              <div className="history-index-subject1-lcon-1">
                <CloseOutlined />
              </div>
            </div>
            <div className="history-index-count-box">
              <span className="history-index-count">$53,437.82</span>
              <span>总计</span>
            </div>
          </div>
          <div className="history-index-subject1">
            <div>
              <div className="history-index-name">
                <span>销售额</span>
                <span className="history-index-subject1-lcon">
                  <InfoOutlined />
                </span>
              </div>
              <div className="history-index-subject1-lcon-1">
                <CloseOutlined />
              </div>
            </div>
            <div className="history-index-count-box">
              <span className="history-index-count">$184,325.84</span>
              <span>总计</span>
            </div>
          </div>
          <div className="history-index-subject3">
            <div>
              <div className="history-index-name">
                <span>ROAS</span>
                <span className="history-index-subject1-lcon">
                  <InfoOutlined />
                </span>
              </div>
              <div className="history-index-subject1-lcon-1">
                <CloseOutlined />
              </div>
            </div>
            <div className="history-index-count-box">
              <span className="history-index-count">3.45</span>
              <span>平均</span>
            </div>
          </div>
          <div className="history-index-subject4">
            <div>
              <div className="history-index-name">
                <span>曝光量</span>
                <span className="history-index-subject1-lcon">
                  <InfoOutlined />
                </span>
              </div>
              <div className="history-index-subject1-lcon-1">
                <CloseOutlined />
              </div>
            </div>
            <div className="history-index-count-box">
              <span className="history-index-count">30,358,321</span>
              <span>总计</span>
            </div>
          </div>
          <div className="history-index-subject2">+添加指标</div>
        </div>
        <div
          className="main"
          id="main"
          style={{ width: 1480, height: 300 }}
        ></div>
        <div className="history-list-box">
          <div className="history-list-head">
              <div>
                  <label><select><option>筛选条件</option></select></label>
              </div>
              <div>
                  <a>隐藏图表</a>
                  <button>日期范围-全部</button>
              </div>
          </div>
          <Table className='logListTable'
            columns={columns}
            dataSource={data}
            bordered
            pagination={ false }
            size='middle'
          />
        </div>
        <div className="history-fenye">
            <div className="history-fenye-left">广告活动历史记录包括过去90天对品牌推广和商品推广活动更改。</div>
            <div>
                转到页面<input defaultValue="1" /><button><LeftOutlined /></button><button><RightOutlined /></button><span className="history-fenye-span">1-50/3549结果</span>
                <label><select><option>每页显示的结果数：50</option></select></label>
            </div>
        </div>
        <div className="AdvertisingCampaign-foot">
          © 2020
          Amazon.com,lnc.或其他附属公司。使用条款&nbsp;&nbsp;&nbsp;&nbsp;隐私条款&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Amazon广告协议
        </div>
      </div>
    );
  }
}

export default index;
const columns = [
  {
    title: "更改级别",
    dataIndex: "name",
    key: "1",
  },
  {
    title: "更改内容",
    dataIndex: "status",
    key: "2",
  },
  {
    title: "发件人",
    dataIndex: "From",
    key: "3",
  },
  {
    title: "收件人",
    dataIndex: "add",
    key: "4",
  },
  {
    title: "日期和时间",
    dataIndex: "itme",
    key: "5",
  },
];
const data = [
    {
        key: 0,
        name: <div>广告活动：<a>zhouchunyanpinpai</a></div>,
        status:"广告活动状态",
        From:"超出预算",
        add:<div>在预算内<br /><a>编辑广告活动设置</a></div>,
        itme:"Dec 29,2020 5:06 PM"  
    },
    {
        key: 1,
        name: <div>广告活动：<a>zhouchunyanpinpai</a></div>,
        status:"广告活动状态",
        From:"在预算内",
        add:<div>超出预算<br /><a>编辑广告活动设置</a></div>,
        itme:"Dec 29,2020 5:06 PM"  
    },
    {
        key: 2,
        name: <div>广告活动：<a>zhouchunyanpinpai</a></div>,
        status:"广告活动状态",
        From:"正在投放",
        add:<div>已暂停<br /><a>编辑广告活动设置</a></div>,
        itme:"Dec 29,2020 5:06 PM"  
    },
];
for (let i = 3; i < 10; i++) {
    data.push({
      key: i,
      name: <div>广告活动：<a>这款榨汁机猪都想买</a></div>,
      status:"已添加 否定关键词(短语匹配)-dining",
      From:"-",
      add:<div>已添加<br /><a>编辑定位</a></div>,
      itme:"Dec 29,2020 5:06 PM"
    });
  }
