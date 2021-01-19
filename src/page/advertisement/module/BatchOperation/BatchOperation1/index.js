import React, { Component } from "react";
import "./index.css";

import { Checkbox, Table } from "antd";

import {
  BellOutlined,
  QuestionOutlined,
  FrownOutlined,
} from "@ant-design/icons";
class BatchOperation extends Component {
  render(){
    return (
      <div className="AdvertisingCampaign-box">
        <div className="AdvertisingCampaign-box-left">三</div>
        <div className="AdvertisingCampaign-box-right">
          <div className="box-right-head">
            {/* 头部 */}
            <div className="box-right-head-left">广告活动</div>
            <div className="box-right-head-right">
              <div>
                <select>
                  <option>Big Corn美国</option>
                </select>
              </div>
              <div className="icons-list">
                <BellOutlined />
              </div>
              <div className="icons-list">
                <QuestionOutlined />
              </div>
              <div className="icons-list">
                <FrownOutlined />
              </div>
            </div>
          </div>
          <div className="BatchOperation">
            <div>
              <span className="BatchOperation-span">批量操作</span>
              <div className="BatchOperation-div">
                使用电子表格大规模更新你的商品推广和品牌推广活动。
              </div>
            </div>
            <div className="BatchOperation-box">
              <div className="BatchOperation-1">
                <span>1.创建和下载自定义电子表格</span>
                <div>日期范围</div>
                <label>
                  <select className="BatchOperation-select">
                    <option>昨天</option>
                  </select>
                </label>
                <div>排除</div>
                <Checkbox onChange={onChange}>已终止的广告活动</Checkbox>
                <br />
                <Checkbox onChange={onChange}>曝光量为零的广告活动</Checkbox>
                <br />
                <Checkbox onChange={onChange}>
                  适用于广告活动的广告位数据
                </Checkbox>
                <br />
                <Checkbox onChange={onChange}>品牌资产数据</Checkbox>
                {/* dadasda */}
                <div>
                  <button className="BatchOperation-button" >创建电子表格</button>
                </div>
                <div>
                  <a>访问批量表门户网站，</a>
                  <span>查看有关如何使用批量电子表格的示例和说明</span>
                </div>
                <div>
                  <a>下载批量操作模板</a>
                  <span>开始创建新的批量电子表格</span>
                </div>
              </div>
              <div className="BatchOperation-2">
                <span>2.编辑你的文件</span>
                <div>批量操作电子表格编辑规则：</div>
                <ul>
                  <li className="BatchOperation-li">
                    你可以为广告添加多达1000个关键字竞价。
                  </li>
                  <li className="BatchOperation-li">
                    确保为关键字应用正确的匹配类型。推广商品使用广泛、词组、精确、否定词组和否定精确等匹配类型。
                  </li>
                </ul>
                <a>了解更多信息</a>
              </div>
              <div className="BatchOperation-3">
                <span>3.上传你的文件以更新广告活动</span>
                <br />
                <button>选择文件</button>
                <br />
                <span>支持的文件类型：XLSX和XLS</span>
              </div>
            </div>
          </div>
          <div className="BatchOperationHistory">
            <div>
              <div className="BatchOperationHistory1">批量操作历史记录</div>
              <div>以下是最近请求的批量操作电子表格文件，最多储存20个条目。</div>
            </div>
            <div className="BatchOperationHistory-list">
              <div className="BatchOperationHistory-download">
                <span>下载</span>
                <Table
                  columns={columns}
                  dataSource={data}
                  bordered
                  pagination={false}
                />
              </div>
              <div className="BatchOperationHistory-download">
                <span>上传</span>
                <Table
                  columns={col}
                  dataSource={datas}
                  bordered
                  pagination={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  }
}
export default BatchOperation;
function onChange(e) {}
const columns = [
  {
    title: "文件",
    key: "1",
    render: () => (
      <div>
        <div>商品推广电子表格 Dec 30 2020 00：20：38</div>
        <br />
        <div>状态：进行中</div>
        <br />
        <div>批编号：441784563</div>
      </div>
    ),
  },
  {
    title: "报告",
    key: "2",
    dataIndex: "report",
    width: 150,
  },
];
const data = [
  {
    key: "1",
    report: "创建你的电子表格...最多可能需要15分钟已创建你的文件。",
  },
  {
    key: "2",
    report: <a>下载</a>,
  },
];
const col = [
  {
    key: "1",
    title: "文件",
    dataIndex: "report",
  },
  {
    key: "2",
    title: "状态",
    dataIndex: "report",
  },
  {
    key: "3",
    title: "报告",
    dataIndex: "report",
  },
];
const datas = [];



