import React from "react";
import "./repertory.css";
import HeaderCom from "../../components/HeaderCom/HeaderCom";
import FooterCom from '../../components/FooterCom/FooterCom'
import { Tabs } from "antd";
import RepertoryTable1 from './module/RepertoryTable1/RepertoryTable1'
import ReplenishStock from './module/replenishStock/index'
import Redundance from './module/redundance/redundance'
import RepertoryAge from './module/repertoryAge/repertoryAge'
import ReturnGoods from './module/returnGoods/index'




function Repertory() {
  const { TabPane } = Tabs;
  return (
    <div>
      {/* <HeaderCom /> */}
        <div className="repertoryTable">
            <Tabs defaultActiveKey="1">
              <TabPane tab="控制面板" key="1">
                <RepertoryTable1/>
              </TabPane>
              <TabPane tab="绩效" key="2"> 
                Content of Tab Pane 2
              </TabPane>
              <TabPane tab="补充库存" key="3">
                <ReplenishStock/>
              </TabPane>
              <TabPane tab="管理冗余库存" key="4">
               <Redundance/>
              </TabPane>
              <TabPane tab="库龄" key="5">
                <RepertoryAge />
              </TabPane>
              <TabPane tab="修复无在售信息的亚马逊库存" key="6">
                Content of Tab Pane 3
              </TabPane>
              <TabPane tab="管理亚马逊物流退货" key="7">
                <ReturnGoods/>
              </TabPane>
            </Tabs>
        </div>
        {/* <FooterCom/> */}
    </div>
  );
}
export default Repertory;
