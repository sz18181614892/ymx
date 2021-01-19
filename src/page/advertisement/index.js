import React from "react";
import "./index.css";
import { Tabs } from "antd";
import AdvertisingCampaign from './module/AdvertisingCampaign/index.js'
import BatchOperation from './module/BatchOperation/index.js'
import CommodityPromotion from './module/NewAdvertisingCampaign/CommodityPromotion/CommodityPromotion.js'
import CommodityPromotion2 from './module/NewAdvertisingCampaign/CommodityPromotion2/CommodityPromotion2.js'
import ExhibitionPromotion from './module/NewAdvertisingCampaign/ExhibitionPromotion/ExhibitionPromotion.js'
import BrandPromotion1 from './module/NewAdvertisingCampaign/BrandPromotion1/BrandPromotion1.js'
import BrandPromotion2 from './module/NewAdvertisingCampaign/BrandPromotion2/BrandPromotion2.js'
import NewAdvertisingCampaign from './module/NewAdvertisingCampaign/index.js'
import BatchOperation1 from './module/BatchOperation/BatchOperation1/index.js'

function Rdvertisement() {
    const { TabPane } = Tabs;
    return (
        <Tabs defaultActiveKey="1">
        <TabPane tab="广告首页" key="1">
          <AdvertisingCampaign/>
        </TabPane>
        <TabPane tab="批量操作" key="2"> 
          <BatchOperation/>
        </TabPane>
        <TabPane tab="商品推广-1" key="3"> 
          <CommodityPromotion />
        </TabPane>
        <TabPane tab="商品推广-2" key="4"> 
          <CommodityPromotion2 />
        </TabPane>
        <TabPane tab="展示型推广" key="5"> 
          <ExhibitionPromotion />
        </TabPane>
        <TabPane tab="品牌推广-1" key="6"> 
          <BrandPromotion1 />
        </TabPane>
        <TabPane tab="品牌推广-2" key="7"> 
          <BrandPromotion2 />
        </TabPane>
        <TabPane tab="新建广告活动" key="8"> 
          <NewAdvertisingCampaign />
        </TabPane>
        <TabPane tab="批量操作-创建垫子表格" key="9"> 
        <BatchOperation1/>
        </TabPane>
      </Tabs>
    
    )
}
export default Rdvertisement;