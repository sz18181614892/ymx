import { Row, Col, Divider, Progress } from "antd";
import React from "react";
import "./RepertoryTable1.css";
import IconFont from "../../../../components/Icon/Icon";

function RepertoryTable1() {
  return (
    <div>
      <div>
        <div className="RepertoryTable1-HeadFont">
          <div className="RepertoryTable1-head-font">库存控制面板</div>
          <span>
            <a>了解更多信息</a>|<a>为此页评级</a>|<a>观看演示</a>
          </span>
        </div>
        <div>关键库存一览以及改进库存效率和有货绩效的机会</div>
      </div>

      <Row className="RepertoryTable1-count">
        <Col span={5} className="RepertoryTable1-count-box">
          <div className="RepertoryTable1-box1-head">库存绩效指标</div>
          <div className="RepertoryTable1-box1-warn">
            <IconFont type="icon-jinggao1" className="RepertoryTable1-box1-font"/>
            没有足够的历史数据来计算您的IPI
          </div>
          <div className="RepertoryTable1-box1-nav">
            0 <div className="RepertoryTable1-box1-line"></div> 1000
          </div>
        </Col>
        <Col span={5} className="RepertoryTable1-count-box">
          <div className="RepertoryTable1-box-head">
            <div>今日要补货的 SKU</div>
            <div>0</div>
          </div>
          <div>您的有存货率为: 100.00%</div>
          <div className="RepertoryTable1-box2-bottom">
            <a><span>i</span> 查看在库库存详细</a>
          </div>
        </Col>
        <Col span={5} className="RepertoryTable1-count-box">
          <div className="RepertoryTable1-box-head">
            <div>冗余商品</div>
            <div>0</div>
          </div>
          <div>0 SKU</div>
        </Col>
        <Col span={5} className="RepertoryTable1-count-box">
          <div className="RepertoryTable1-box-head">
            <div>库存天数</div>
            <div>--</div>
          </div>
          <div>库存周转次数: {"<"}1</div>
        </Col>
      </Row>
      <div className="RepertoryTable1-Box">
        <div className="RepertoryTable1-BoxNav">
          <div className="RepertoryTable1-BoxNav-head">
            <div>
              <a>管理冗余库存</a>
            </div>
            <div>有机会提高库存绩效的商品</div>
          </div>
          <div>您目前没有任何商品存在多余的亚马逊物流库存。</div>
        </div>
        <div className="RepertoryTable1-BoxNav">
          <div className="RepertoryTable1-BoxNav-head">
            <div>通知</div>
            <div>有机会提高库存绩效的商品</div>
          </div>
          <div className="RepertoryTable1-box-head2">
            <div><IconFont type="icon-jinggao1" className="RepertoryTable1-box1-font" />您有2个 SKU 存在无在售信息的亚马逊库存。</div>
            <button>修复无在售信息的亚马逊库存</button>
          </div>
        </div>
      </div>
      <div className="RepertoryTable1-Box RepertoryTable1-BoxP">
        <div className="RepertoryTable1-BoxNav">
          <div className="RepertoryTable1-BoxNav-head">
            <div>
              <a>亚马逊物流库龄</a>
            </div>
            <div>按亚马逊物流库龄统计的库存商品</div>
          </div>
          <div className="RepertoryTable1-progress">
            <div>
              <div>（天）</div>
              <div>0-99</div>
              <div>91-180</div>
              <div>181-365</div>
              <div>365+</div>
            </div>
            <div className="RepertoryTable1-progress-per">
             <div className="RepertoryTable1-progress-per1"></div>
             <div className="RepertoryTable1-progress-per2"></div>
             <div className="RepertoryTable1-progress-per2"></div>
             <div className="RepertoryTable1-progress-per2"></div>

            </div>
            <div>
              <div>件数</div>
              <div>1</div>
              <div>0</div>
              <div>0</div>
              <div>0</div>
            </div>
            <div>
              <div>百分比</div>
              <div>100.00%</div>
              <div>0.00%</div>
              <div>0.00%</div>
              <div>0.00%</div>
            </div>
          </div>
          <div className="RepertoryTable1-BoxNav-bottom"><a>查看详情</a></div>
        </div>
        <div className="RepertoryTable1-BoxNav">
          <div className="RepertoryTable1-BoxNav-head">
            <div className="RepertoryTable1-box-head">
              <a>补充库存</a>
              <button>查看全部</button>
            </div>
            <div  className="RepertoryTable1-box-remind">对这些商品进行捕获以预防销售损失</div>
          </div>
          <div>您目前没有任何缺货风险的商品。</div>
        </div>
      </div>
    </div>
  );
}
export default RepertoryTable1;
