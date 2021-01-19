import React from "react";
import "./SetUp.css";
import { Input } from "antd";
import { InfoOutlined } from "@ant-design/icons";
function SetUp() {
  return (
    <div className="SetUp-box">
      <div className="SetUp-BudgetCap">
        <span>商品推广预算上线 </span>
        <span className="index-subject1-lcon">
          <InfoOutlined />
        </span>
      </div>
      <div className="SetUp-BudgetSelection">
        <input
          type="radio"
          onChange={onChange}
          checked="checked"
          name="choice"
        />
        &nbsp;&nbsp;
        使用广告系列顶级预算
        <br />
        <div className="SetUp-BudgetSelection1">
          <input type="radio" name="choice" />
          &nbsp;&nbsp;
          使用每日预算上限
          &nbsp;&nbsp;
          <div className="SetUp-BudgetSelection2">
          <Input prefix="$" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default SetUp;
function onChange() {}
