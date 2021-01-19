import React from "react";
import "./replenish.css";
import HeaderCom from "../../../../components/HeaderCom/HeaderCom";
import IconFont from "../../../../components/Icon/Icon";

function ReplenishStock() {
  return (
    <div>
      <div className="Replenish-titel">
        <div className="Replenish-theme">补充库存</div>
        <div className="Replenish-link">
          <a>了解更多信息</a>
          <span>|</span>
          <a>为此页评级</a>
          <span>|</span>
          <a>观看演示</a>
        </div>
      </div>
      {/* 提示 */}
      <div className="Replenish-warn">
        <div>
          <div className="Replenish-warnTitel">
            <IconFont type="icon-jinggao1" className="Replenish-warnTitel-warnFont"/>
            <div className="Replenish-warnTitel-font">
              <strong>
                补货数量限制{" "}
                <span>
                  <IconFont type="icon-guanbi" />
                </span>
              </strong>
            </div>
          </div>
          <div className="Replenish-warnNav">
            我们目前临时限制您可以发送的商品数量。您可以在此页面和补货报告中查看商品的限制。点击"供货天数"列中颜色条正上方的商品数量可查看商品的最高库存水平和最大货件数量。
            <a>了解更多信息</a>
          </div>
        </div>
      </div>
      <div className="Replenish-inp">
        <label>
          <select className="Replenish-select">
            <option>对0件选中的商品执行操作</option>
          </select>
        </label>
        <div className="Replenish-inp-SKU">
          <IconFont type="icon-sousuo" className="Replenish-inpFont" />
          <input />
        </div>
        <button className="Replenish-inpBtn">搜索</button>
        <label>
          <select className="Replenish-select2">
            <option>筛选条件: 1项已应用</option>
          </select>
        </label>
        <div>37件商品</div>
      </div>
      <div className="Replenish-screen">
        <div className="Replenish-screenTop">
          <div className="Replenish-screen-condition">已筛选条件:</div>
          <div className="Replenish-screen-advise">建议发货日期: 全部</div>
          <button>清除筛选条件</button>
        </div>
        <div className="Replenish-screenBottom">
          <div className="Replenish-screenBottom-font">筛选条件:</div>
          <div className="Replenish-label">
            <label>
              <select className="Replenish-select3">
                <option>供应商</option>
              </select>
            </label>
          </div>
          <div className="Replenish-label2">
            <label>
              <select className="Replenish-select3">
                <option>建议发货日期</option>
              </select>
            </label>
          </div>
          <div className="Replenish-label3">
            <label>
              <select className="Replenish-select3">
                <option value="隐藏商品">隐藏商品</option>
              </select>
            </label>
          </div>
        </div>
      </div>
      <div className="Replenish-inventory">
        <div className="Replenish-inventory-head">
          <div className="Replenish-inventory-before">
            <input type="checkbox" />
          </div>
          <div className="Replenish-inventory-before">SKU</div>
          <div className="Replenish-inventory-before">
            <div>商品名称</div>
            <span>ASINFNSKU</span>
          </div>
          <div className="Replenish-inventory-after">
            <div>供应商</div>
            <div>销售额一览</div>
            <div>商品价格</div>
            <div>供货天数</div>
            <div>建议补货数量</div>
            <div>建议发货日期</div>
            <div>操作</div>
          </div>
        </div>

        {/* 商品列表 */}
        <div className="Replenish-commodity">
          <div className="Replenish-commodityTag">
            限量补货{" "}
            <span>
              <IconFont type="icon-jinggao1" />
            </span>
          </div>
          <div className="Replenish-commodityList">
            <div className="Replenish-commodityCheck">
              <input type="checkbox" />
            </div>
            <div className="Replenish-commodityImg">
              <image url="" />
            </div>
            <div className="Replenish-commoditySKU">zhouchunyan12.11</div>
            <div className="Replenish-shopName">
              <div>
                Manual Fruit Juicer Professional-Juicer pomegranate Juicer
                Squeezer-Premium Quality Heavy Duty Manual Pomegran...
              </div>
              <div>B08QDCV9</div>
              <div>X002QT4ZPZ</div>
            </div>
            {/* 商品信息 */}
            <div className="Replenish-commodity-after">
            <div className="Replenish-unassigned">unassigned</div>
            <div className="Replenish-situation">
              <div>$0.00</div>
              <div>0件</div>
            </div>
            <div className="Replenish-price">$49.99</div>
            <div className="Replenish-stock">
              <div>0</div>
              <div>
                <label>
                  <select className="Replenish-select3">
                    <option>0件</option>
                  </select>
                </label>  
              </div>
              <div className="Replenish-listProgress">
                <div></div>
              </div>
              <div>缺货</div>
            </div>
              <div className="Replenish-amount">---</div>
              <div className="Replenish-shipments">无</div>
              <div>
              <label>
                  <select className="Replenish-listSelect">
                    <option>创建入库计划</option>
                  </select>
                </label>  
              </div>
            </div>
              
          </div>
        </div>
      </div>
    </div>
  );
}
export default ReplenishStock;
