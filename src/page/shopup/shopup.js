import React from 'react';
import './shopup.css'
import { Tabs } from "antd";
import ShopupDL from './module/shopupDL/shopupDL'
import ShopupUL from './module/shopupUL/shopupUL'
import Examine from './module/examine/examine'


 function shopup(){
  const { TabPane } = Tabs;

     return(
         <div className="shopup-body">
             <div className="shopup-titel">
                 <div>批量上传商品</div>
                 <div>
                     <a>了解更多信息</a>
                     <a>卖家大学</a>
                     <a>销售申请状态</a>
                 </div>
             </div>
             <div className="shopup-tab">
            <Tabs defaultActiveKey="1">
              <TabPane tab="下载库存文件" key="1">
                  <ShopupDL/>
              </TabPane>
              <TabPane tab="上传您的库存文件" key="2">
                  <ShopupUL/>
              </TabPane>
              <TabPane tab="监控上传状态" key="3">
                  <Examine/>
              </TabPane>
            </Tabs>
        </div>
         </div>
     )
 }
 export default shopup