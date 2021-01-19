import React from "react";
import "./redundance.css";
import IconFont from "../../../../components/Icon/Icon";

function redundance() {
  return (
    <div>
      {/* 标题 */}
      <div>
        <div className="redundance-titel">
          <div className="redundance-titelFont">管理冗余库存</div>
          <span>
            <a>了解更多信息</a>|<a>为此页评级</a>|<a>观看演示</a>
          </span>
        </div>
        <div>
          有机会提高库存绩效的商品。Help increase sales by setting up{" "}
          <a>sales-based automated pricing rules。</a>
        </div>
      </div>

      {/* 按条件推荐按钮 */}
      <div className="redundance-recommend">
        <div>按条件显示推荐：</div>
        <button>所有推荐</button>
        <button>创建促销</button>
        <button>创建移除订单</button>
        <button>退广商品</button>
        <button>改进关键词</button>
        <button>编辑商品信息</button>
        <button>自定义SKU设置</button>
        <button>创建奥特莱斯限时促销</button>
      </div>
      {/* 提示 */}
      <div>
        <div className="redundance-warn">
          <div>
            <div className="redundance-warnTitel-font">
              <IconFont type="icon-jinggao1" className="redundance-warnFont" />
              <strong>
                您的搜索未返回任何结果 <span></span>
              </strong>
            </div>
          </div>
        </div>
      </div>
      {/* 搜索 */}
      <div className="redundance-search">
        <div className="redundance-searchLabel">
          <label>
            <select className="Replenish-select3">
              <option>对0件选定的商品执行操作</option>
            </select>
          </label>
        </div>
        <div className="redundance-inp-SKU">
          <div className="Replenish-inp-SKU">
            <IconFont type="icon-sousuo" className="Replenish-inpFont" />
            <input value="搜索 SKU 、名称..." />
          </div>
          <button className="Replenish-inpBtn">搜索</button>
        </div>
        <div className="redundance-searchLabel2">
          <label>
            <select className="Replenish-select3">
              <option>筛选条件：1项已应用</option>
            </select>
          </label>
        </div>
        <div>0件商品</div>
      </div>
      {/* 列表头部 */}
      <div className="Replenish-listTitel">
        <div>
          <input type="checkbox" />
        </div>
        <div>
          <strong>状态</strong>
        </div>
        <div>
          <strong>图片</strong>
        </div>
        <div>
          <div>
            <strong>商品名称</strong>
          </div>
          <div>ASINFN</div>
          <div>SKU</div>
          <span>状况</span>
        </div>
        <div>
          <div>
            <strong>销售排行</strong>
          </div>
          <span>商品分类</span>
        </div>
        <div>
          <strong>销售额</strong>
        </div>
        <div>
          <strong>可用</strong>
        </div>
        <div  style={{color: "#0066c0"}}>
          <strong>供货天数</strong>
        </div>
        <div>
          <div className="redundance-searchLabell">
            <label>
              <select >
                <option>预计冗余数量</option>
              </select>
            </label>
          </div>
        </div>
        <div>
          <strong  style={{color: "#0066c0"}}>预计仓库费</strong>
        </div>
        <div className="redundance-searchLabell-spric">
          <strong>您的商品价格</strong>
          <div>最低价格</div>
          <span>+配送</span>
        </div>
        <div className="redundance-searchLabell-spric">
          <div><strong>购买按钮价格</strong></div>
          <span>+配送</span>
        </div>
        <div className="redundance-searchLabell-button">
          <button>全部保存</button>
        </div>
      </div>
    </div>
  );
}
export default redundance;
