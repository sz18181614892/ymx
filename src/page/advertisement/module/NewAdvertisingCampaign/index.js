import React from "react";
import "./index.css";
import * as echarts from 'echarts';
import {
  BellOutlined,
  QuestionOutlined,
  FrownOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import img1 from "./tu1.png";
function NewAdvertisingCampaign() {
  return (
    <div className="AdvertisingCampaign-box">
      <div className="AdvertisingCampaign-box-left">三</div>
      <div className="AdvertisingCampaign-box-right">
        <div className="box-right-head">
          {/* 头部 */}
          <div className="box-right-head-left">新建广告活动</div>
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
        <div className="Choose-your-campaign-type-body">
            <div className="Choose-your-campaign-type-box">
                <div className="Choose-your-campaign-type-title">选择你的广告活动类型</div>
                <div className="promotion-box">
                    <div className="promotion">
                        <div className="promotion-title">商品推广</div>
                        <div className="promotion-img"><img src={img1} /></div>
                        <div className="promotion-introduce">向在亚马逊上积极使用相关关键词进行搜索或查看类似商品的卖家推广商品。</div>
                        <button>继续</button>
                        <br />
                        <a><InfoCircleOutlined />了解商品推广</a>
                    </div>
                    <div className="promotion">
                        <div className="promotion-title">品牌推广</div>
                        <div className="promotion-img"><img src={img1} /></div>
                        <div className="promotion-introduce">通过丰富而富有吸引力的素材帮助买家在亚马逊上发现你的品牌和商品。</div>
                        <button>继续</button>
                        <br />
                        <a><InfoCircleOutlined />了解商品推广</a>
                    </div>
                    <div className="promotion">
                        <div className="promotion-title">商品推广</div>
                        <div className="promotion-img"></div>
                        <div className="promotion-introduce">通过吸引在亚马逊网站内外的相关受众拓展你的业务。</div>
                        <button>继续</button>
                        <br />
                        <a><InfoCircleOutlined />了解商品推广</a>
                    </div>
                </div>
                <div className="bangzhu">想要获取Amazon Advertising专家的帮助，已创建你的第一个广告活动？<a>请求致电</a></div>
                <div className="CommodityPromotion-foot">
                    © 2020
                    Amazon.com,lnc.或其他附属公司。使用条款&nbsp;&nbsp;&nbsp;&nbsp;隐私条款&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Amazon广告协议
                </div>
            </div>
        </div>
      </div>
    </div>
  );
  
}
export default NewAdvertisingCampaign;
