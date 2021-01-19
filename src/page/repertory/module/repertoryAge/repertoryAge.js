import React from 'react';
import './repertoryAge.css';
import IconFont from "../../../../components/Icon/Icon";
import { Divider } from 'antd';

function repertoryAge(){
    return(
        <div>
            <div className="repertoryAge-titel">
                <div className="repertoryAge-theme">亚马逊物流库龄</div>
                <div className="repertoryAge-link">
                <a>了解更多信息</a>
                <span>|</span>
                <a>为此页评级</a>
            </div>
      </div>
     <div className="repertoryAge-mix"> 
     <div>按亚马逊物流库龄及预计长期仓储费（LTSF）统计地库存商品数量。通过设置以下内容避免LTSF金额 <a>长期储存自动移除。</a></div>
     </div>

      <div className="Replenish-inp">
        <label>
          <select className="Replenish-select">
            <option>对0件选中的商品执行操作</option>
          </select>
        </label>
            <div className="Replenish-inp-SKU">
                <IconFont type="icon-sousuo" className="Replenish-inpFont" />
                <input placeholder="搜索SKU、名称..." />
            </div>
            <button className="Replenish-inpBtn">搜索</button>
            <label>
                <select className="Replenish-select2">
                     <option>筛选条件: 1项已应用</option>
                </select>
            </label>
             <div>1件商品</div>
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
                    <option>按提醒筛选</option>
                    </select>
                </label>
            </div>
            <div className="Replenish-label2">
                <label>
                    <select className="Replenish-select3">
                    <option>商品尺寸分段</option>
                    </select>
                </label>
            </div>
            <div className="Replenish-label">
                <label>
                    <select className="Replenish-select3">
                    <option>最近90售出商品数量</option>
                    </select>
                </label>
            </div>
            <div className="Replenish-label2">
                <label>
                    <select className="Replenish-select3">
                    <option>佣金折扣</option>
                    </select>
                </label>
            </div>
            <div className="Replenish-label3">
                <label>
                    <select className="Replenish-select3">
                    <option >库龄</option>  
                    </select>
                </label>
            </div>
        </div>
    </div>



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
             <strong>销售排名</strong>
             </div>
             <span>商品分类</span>
        </div>
        <div>
            <strong>销售额</strong>
        </div>
        <div>
            <div><strong>亚马逊流售出率</strong></div>
            <span>（预计90天）</span>
        </div>
        <div>
          <strong>可用</strong>
          <div>仓储类型</div>
          <div>立方英尺</div>
        </div>
        <div>
        <strong> 库龄</strong>
        </div>
        <div>
          <div className="redundance-searchLabell">
            <label>
              <select >
                <option>预计LTSF</option>
              </select>
            </label>
          </div>
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
      
      
      <div className="Replenish-ResultsPerPage">
        <div className="fgx">
    <Divider />
    </div>
    <div className="footer-font"></div>
        <div>
        <small className="footer-font-small">帮助</small>
            <span>|</span>
            <small className="footer-font-small">计划政策</small>
            <span>|</span>
            <label>
                    <select>
                    <option>中文</option>
                    </select>
            </label>
            <span className="footer-font-right">1999-2020年，亚马逊公司及其附属公司</span>
        </div>
      </div>

    </div>
    

    
  
    )
}
export default repertoryAge;

