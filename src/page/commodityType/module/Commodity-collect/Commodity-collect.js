import React, {useState} from "react"
import "./Commodity-collect.css"
import {List} from 'antd';
import IconFont from "../../../../components/Icon/Icon";

function CommodityCollect() {
    let [data] = useState({
        list: [
            {id: 1, title: 'Racing car sprays burning fuel into crowd.'},
            {id: 2, title: 'Japanese princess to wed commoner.'},
            {id: 3, title: 'Australian walks 100km after outback crash.'},
            {id: 4, title: 'Man charged over missing wedding girl.'},
            {id: 5, title: 'Los Angeles battles huge wildfires.'}
        ]
    });
    return (
        <div className="commodity-container">
            <h2 className="commodity-h2">选择商品类别</h2>
            <p className="commodity-hint">选择最佳类别，这样可以确保您看到的是最合适您商品的数据输入项。直接浏览类别或使用搜索。<span>看看您的商品是否已经存在于亚马逊上。</span></p>
            <p className="commodity-collect">收藏的商品数量({data.list.length})</p>
            <div className="demo-infinite-container">
                <List size="large" dataSource={data.list}
                      renderItem={(item, index) =>
                          <List.Item key={index}>
                              <IconFont type="icon-xingzhuang60kaobei2" className="commodity-icon"/>
                              <List.Item.Meta
                                  title={item.title}
                                  description={item.title}
                              />
                              <div>
                                  <IconFont type="icon-fanhui-copy-copy" className="commodity-icon"/>
                              </div>
                          </List.Item>
                      }
                />
            </div>
        </div>
    )
}

export default CommodityCollect