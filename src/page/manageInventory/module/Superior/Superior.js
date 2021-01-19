import React from "react"
import "./Superior.css"
import IconFont from "../../../../components/Icon/Icon";

function Superior(){
    return(
        <div>
            <div className="manageInventory-header">
                <li>所有库存</li>
                <span>|</span>
                <li>不活动(7)</li>
                <span>|</span>
                <li>修复无在售信息的亚马逊库存(1)</li>
                <span>|</span>
                <li>修复价格警告(1)</li>
                <span>|</span>
                <li>品牌健康度(0)</li>
                <span>|</span>
                <li>禁止显示</li>
                <span>|</span>
                <li>管理定价</li>
                <span>|</span>
                <li>亚马逊存库</li>
                <span>|</span>
                <li>货件处理进度</li>
                <span>|</span>
                <li>库存控制面板</li>
                <span>|</span>
                <li>商品信息质量控制面板</li>
                <li>新功能</li>
            </div>
            <div className="manageInventory-Title">
                <div className="manage-Title-left">
                    <div className="manage-Tit-l">管理库存</div>
                    <div className="manage-Tit-r">
                        <span>了解更多信息</span>
                        <span>|</span>
                        <span>浏览</span>
                    </div>
                </div>
                <div className="manage-Title-right">
                    <button>添加一个商品变体</button>
                    <button>添加新商品</button>
                    <button>首选项：隐藏2列</button>
                    <span>新功能</span>
                </div>
            </div>
            <div className="manageInventory-DropdownSearch">
                <select>
                    <option value="...">应用于0件选定商品</option>
                </select>
                <div className="manageInventory-Search">
                    <IconFont type="icon-sousuo"/>
                    <input placeholder="搜索 SKU、标题、ISBN"/>
                </div>
                <button>搜索</button>
                <div className="manageInventory-Piece">126件商品</div>
            </div>
            <div className="manageInventory-radio">
                <div className="manageInventory-screen">筛选条件:</div>
                <div className="manageInventory-state">
                    商品状态:
                    <input type="radio" name="state" id="state1"/>
                    <label htmlFor="state1">所有</label>
                    <input type="radio" name="state" id="state2"/>
                    <label htmlFor="state2">在售</label>
                    <input type="radio" name="state" id="state3"/>
                    <label htmlFor="state3">不可售</label>
                    <input type="radio" name="state" id="state4"/>
                    <label htmlFor="state4">不完整</label>
                    <input type="radio" name="state" id="state5"/>
                    <label htmlFor="state5">商品信息已删除</label>
                </div>
                <span>|</span>
                <div className="manageInventory-state">
                    商品状态:
                    <input type="radio" name="type" id="type1"/>
                    <label htmlFor="type1">所有</label>
                    <input type="radio" name="type" id="type2"/>
                    <label htmlFor="type2">亚马逊</label>
                    <input type="radio" name="type" id="type3"/>
                    <label htmlFor="type3">卖家</label>
                </div>
                <span>|</span>
                <select>
                    <option value="...">筛选其他条件</option>
                </select>
            </div>
        </div>
    )
}

export default Superior