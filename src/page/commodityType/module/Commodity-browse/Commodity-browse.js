import React, {useState} from "react"
import "./Commodity-browse.css"
import {List} from 'antd';
import IconFont from "../../../../components/Icon/Icon";

function CommodityBrowse() {
    let [data] = useState({
        list: [
            {id: 1, title: 'Racing car sprays burning fuel into crowd.'},
            {id: 2, title: 'Japanese princess to wed commoner.'},
            {id: 3, title: 'Australian walks 100km after outback crash.'},
            {id: 4, title: 'Man charged over missing wedding girl.'},
            {id: 5, title: 'Los Angeles battles huge wildfires.'},
            {id: 6, title: 'Los Angeles battles huge wildfires.'},
            {id: 7, title: 'Los Angeles battles huge wildfires.'},
            {id: 8, title: 'Los Angeles battles huge wildfires.'},
        ]
    });
    return (
        <div className="commodity-container">
            <div className="commodity-collect-box">
            <p className="commodity-collect">浏览</p>
            <span>什么是商品类型？</span>
            </div>
            <div className="demo-infinite-container" style={{height:"500px"}}>
                <List size="large" dataSource={data.list} bordered
                      header={
                          <div className="commodity-header">
                              <div className="commodity-header-left">
                                  <span className="commodity-crumbs">电子产品</span>
                                  <IconFont type="icon-fanhui-copy-copy" className="commodity-crumbs-icon"/>
                                  <span className="commodity-crumbs">配件和耗材</span>
                              </div>
                              <div className="commodity-header-right">
                                  <IconFont type="icon-guanbi"/>
                              </div>
                          </div>
                      }
                      renderItem={(item, index) =>
                          <List.Item key={index}>
                              <IconFont type="icon-wujiaoxingxingxing" className="commodity-icon"/>
                              <List.Item.Meta
                                  title={item.title}
                                  description={item.title}
                              />
                              {
                                  index !== 3 ?
                                      <div><IconFont type="icon-fanhui-copy-copy" className="commodity-icon"/></div>
                                      : <div className="commodity-type-box">
                                          <div className="commodity-type">
                                              <div className="commodity-type-top">商品类型：</div>
                                              <div className="commodity-type-bottom">OFFICE ELECTRONICS</div>
                                          </div>
                                          <div className="commodity-select">
                                              <button>选择类别</button>
                                          </div>
                                      </div>
                              }

                          </List.Item>
                      }
                />
            </div>
        </div>
    )
}

export default CommodityBrowse