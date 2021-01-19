import React from "react";
import "./Administration.css";
import { Switch } from "antd";
import { Table } from "antd";
import {
  InfoOutlined,
  CloseOutlined,
  SearchOutlined,
} from "@ant-design/icons";

function Administration() {
  return (
    <div>
      {/* 导航内容页 */}
      <div className="AdvertisingCampaign-subject">
        {/* 指标 */}
        <div className="index-subject">
          <div className="index-subject1">
            <div>
              <div className="index-name">
                <span>点击次数</span>
                <span className="index-subject1-lcon">
                  <InfoOutlined />
                </span>
              </div>
              <div className="index-subject1-lcon-1">
                <CloseOutlined />
              </div>
            </div>
            <div className="index-count-box">
              <span className="index-count">67277</span>
              <span>总计</span>
            </div>
          </div>
          <div className="index-subject1">
            <div>
              <div className="index-name">
                <span>点击率(CTR)</span>
                <span className="index-subject1-lcon">
                  <InfoOutlined />
                </span>
              </div>
              <div className="index-subject1-lcon-1">
                <CloseOutlined />
              </div>
            </div>
            <div className="index-count-box">
              <span className="index-count">0.22%</span>
              <span>平均</span>
            </div>
          </div>
          <div className="index-subject1">
            <div>
              <div className="index-name">
                <span>销售额</span>
                <span className="index-subject1-lcon">
                  <InfoOutlined />
                </span>
              </div>
              <div className="index-subject1-lcon-1">
                <CloseOutlined />
              </div>
            </div>
            <div className="index-count-box">
              <span className="index-count">$184325.84</span>
              <span>总计</span>
            </div>
          </div>
          <div className="index-subject1">
            <div>
              <div className="index-name">
                <span>ACOS</span>
                <span className="index-subject1-lcon">
                  <InfoOutlined />
                </span>
              </div>
              <div className="index-subject1-lcon-1">
                <CloseOutlined />
              </div>
            </div>
            <div className="index-count-box">
              <span className="index-count">28.99%</span>
              <span>平均</span>
            </div>
          </div>
          <div className="index-subject2">+添加指标</div>
        </div>

        <div className="index-box"></div>
        {/* 列表头部 */}
        <div className="AdvertisingCampaign-list-head">
          <div className="AdvertisingCampaign-list-head-left">
            <button className="AdvertisingCampaign-list-head-left-button">
              创建广告活动
            </button>
            <div className="AdvertisingCampaign-search">
              <i>
                <SearchOutlined />
              </i>
              <input placeholder="查找广告活动" />
            </div>
            <label>
              <select>
                <option>筛选条件</option>
              </select>
            </label>
          </div>

          <div className="AdvertisingCampaign-list-head-right">
            <a>隐藏图表</a>
            <label>
              <select>
                <option>列</option>
              </select>
            </label>
            <button className="AdvertisingCampaign-list-head-right-button1">
              日期范围-全部
            </button>
            <button className="AdvertisingCampaign-list-head-right-button2">
              导出
            </button>
          </div>
        </div>
        <div className="AdvertisingCampaign-list">
          <Table
            className="AdvertisingCampaign-list-tab"
            columns={columns}
            dataSource={data}
            pagination={{ pageSize: 10 }}
            bordered
            rowSelection
          />
          <div className="AdvertisingCampaign-list-Advertising-status">
            广告活动状态是最新的，但广告效果数据最多可延迟12小时。某写产品和关键字不符合定位条件，因此不会展示广告。
            <a>进一步了解</a>
          </div>
        </div>
        <div className="AdvertisingCampaign-foot">
          © 2020
          Amazon.com,lnc.或其他附属公司。使用条款&nbsp;&nbsp;&nbsp;&nbsp;隐私条款&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Amazon广告协议
        </div>
      </div>
    </div>
  );
}
export default Administration;
const columns = [
    {
      title: "有效",
      key: "operation",
      fixed: "left",
      render: () => <Switch defaultChecked onChange={onChange} />,
    },
    {
      title: "广告活动",
      dataIndex: "name",
      key: "1",
    },
    {
      title: "状态",
      dataIndex: "state",
      key: "2",
    },
    {
      title: "类型",
      dataIndex: "type",
      key: "3",
    },
    {
      title: "开始日期",
      dataIndex: "StartDate",
      key: "4",
    },
    {
      title: "结束日期",
      dataIndex: "EndDate",
      key: "5",
    },
    {
      title: "预算",
      dataIndex: "budget",
      key: "6",
    },
    {
      title: "点击次数",
      dataIndex: "NumberOfHits",
      key: "7",
    },
    {
      title: "点击率(CTR)",
      dataIndex: "ClickThroughRate",
      key: "8",
    },
    {
      title: "花费",
      dataIndex: "spend",
      key: "9",
    },
    {
      title: "每次点击费用(CPC)",
      dataIndex: "CostPerClick",
      key: "10",
    },
    {
      title: "订单",
      dataIndex: "order",
      key: "11",
    },
    {
      title: "销售额",
      dataIndex: "salesVolume",
      key: "12",
    },
    {
      title: "ROAS",
      dataIndex: "ROAS",
      key: "13",
    },
    {
      title: "复制",
      key: "operation",
      render: () => <a>复制</a>,
    },
  ];
  
  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: "Bike Mount B0",
      state: "已存档",
      type: "商品推广手动投放",
      StartDate: "2016年9月5日",
      EndDate: "无结束日期",
      budget: 15,
      NumberOfHits: 18,
      ClickThroughRate: "0.11%",
      spend: "$9.34",
      CostPerClick: "$0.79",
      order: 5,
      salesVolume: "$50.35",
      ROAS: 5.39,
    });
  }
  function onChange(checked) {}
