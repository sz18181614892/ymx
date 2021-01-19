import React,{useState} from "react"
import "./OrderForm.css"

function OrderForm() {
    let [data] = useState({
        ManageInventoryList: [
            {id: 1, state: "未完成", image: ""},
            {id: 2, state: "不可售", image: ""},
            {id: 3, state: "禁止显示", image: ""},
            {id: 4, state: "禁止显示", image: ""},
            {id: 5, state: "禁止显示", image: ""},
            {id: 6, state: "禁止显示", image: ""}
        ]
    });
    return(
        <div className="manageInventory-orderForm">
            <div className="manage-orderForm-top">
                <div className="manage-orderForm-radio manage-orderForm-margin">
                    <input type="checkbox" name="item"></input>
                </div>
                <div className="manage-orderForm-color manage-orderForm-state manage-orderForm-margin">
                    状态
                </div>
                <div className="manage-orderForm-image manage-orderForm-margin">
                    图片
                </div>
                <div className="manage-orderForm-condition manage-orderForm-margin">
                    <div>SKU</div>
                    <div className="manage-orderForm-weight">状况</div>
                </div>
                <div className="manage-orderForm-serialNumber manage-orderForm-margin">
                    商品编号
                </div>
                <div className="manage-orderForm-name manage-orderForm-margin">
                    <div className="manage-orderForm-color">
                        商品名称
                    </div>
                    <div className="manage-orderForm-weight">
                        ASIN
                    </div>
                </div>
                <div className="manage-orderForm-date manage-orderForm-margin">
                    <div>创建日期</div>
                    <div className="manage-orderForm-weight">状况更新日期</div>
                </div>
                <div className="manage-orderForm-color manage-orderForm-endibility manage-orderForm-margin">
                    可售
                </div>
                <div className="manage-orderForm-color manage-orderForm-bePutInStorage manage-orderForm-margin">
                    入库数量
                </div>
                <div className="manage-orderForm-color manage-orderForm-doNotSell manage-orderForm-margin">
                    不可售数量
                </div>
                <div className="manage-orderForm-color manage-orderForm-reserved manage-orderForm-margin">
                    预留数量
                </div>
                <div className="manage-orderForm-estimatedCost manage-orderForm-margin">
                    每件售出商品的预计费用
                </div>
                <div className="manage-orderForm-price manage-orderForm-margin">
                    <div className="manage-orderForm-color">
                        价格
                    </div>
                    <div className="manage-orderForm-weight">
                        + 配送费
                    </div>
                </div>
                <div className="manage-orderForm-enterprisePrice manage-orderForm-margin">
                    <div>
                        企业商品价格
                    </div>
                    <div className="manage-orderForm-weight">
                        + 配送费
                    </div>
                </div>
                <div className="manage-orderForm-reservePrice manage-orderForm-margin">
                    <div>
                        最低价
                    </div>
                    <div className="manage-orderForm-weight">
                        + 配送费
                    </div>
                </div>
                <div className="manage-orderForm-salesRank manage-orderForm-margin">
                    销售排名
                </div>
                <div className="manage-orderForm-buttonPrice manage-orderForm-margin">
                    <div>
                        购买按钮价格
                    </div>
                    <div className="manage-orderForm-weight">
                        +配送费
                    </div>
                </div>
                <div className="manage-orderForm-buttonStatus manage-orderForm-margin">
                    获得购买按钮价格的资格
                </div>
                <div className="manage-orderForm-fnSku manage-orderForm-margin">
                    FN SKU
                </div>
                <div className="manage-orderForm-color manage-orderForm-distribution manage-orderForm-margin">
                    订单配送方
                </div>
                <div className="manage-orderForm-upcEan manage-orderForm-margin">
                    UPC/EAN
                </div>
                <div className="manage-orderForm-save manage-orderForm-margin">
                    <button>保存所有</button>
                </div>
            </div>
            <div>
                {
                    data.ManageInventoryList.map((item, index) => {
                        return (
                            <div className="manage-orderForm-data" key={item.id}>
                                <div className="manage-orderForm-radio manage-orderForm-dingDan">
                                    <input type="checkbox" name="item"></input>
                                </div>
                                <div className=" manage-orderForm-state manage-orderForm-dingDan">
                                    {item.state}
                                </div>
                                <div className="manage-orderForm-image manage-orderForm-dingDan">
                                    <img src={item.image}></img>
                                </div>
                                <div className="manage-orderForm-condition manage-orderForm-dingDan">
                                    <div>
                                        POLO11
                                    </div>
                                    <div className="manage-orderForm-weight">状况</div>
                                </div>
                                <div className="manage-orderForm-serialNumber manage-orderForm-dingDan">
                                    jdhjashjbc1235
                                </div>
                                <div className="manage-orderForm-name manage-orderForm-dingDan">
                                    <div className="">
                                        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                    </div>
                                    <div className="manage-orderForm-weight">
                                        bbbbbbbbb
                                    </div>
                                </div>
                                <div className="manage-orderForm-date manage-orderForm-dingDan">
                                    <div>12/13/2020 02:32:03</div>
                                    <div className="manage-orderForm-weight">
                                        12/13/2020 02:31:41
                                    </div>
                                </div>
                                <div className=" manage-orderForm-endibility manage-orderForm-dingDan">
                                    <input type="text" placeholder={0}/>
                                </div>
                                <div className=" manage-orderForm-bePutInStorage manage-orderForm-dingDan">
                                    {item.bePutInStorage}
                                </div>
                                <div className=" manage-orderForm-doNotSell manage-orderForm-dingDan">
                                    {item.doNotSell}-
                                </div>
                                <div className=" manage-orderForm-reserved manage-orderForm-dingDan">
                                    {item.reserved}-
                                </div>
                                <div className="manage-orderForm-estimatedCost manage-orderForm-dingDan">
                                    {item.estimatedCost}--
                                </div>
                                <div className="manage-orderForm-price manage-orderForm-dingDan">
                                    <div className="">
                                        <input type="text" placeholder={0}/>
                                    </div>
                                    + --
                                    <div className="manage-orderForm-weight">
                                        + 配送费
                                    </div>
                                </div>
                                <div className="manage-orderForm-enterprisePrice manage-orderForm-dingDan">
                                    <div>
                                        <input type="text" placeholder={0}/>
                                    </div>
                                    <div className="manage-orderForm-weight">
                                        + 配送费
                                    </div>
                                </div>
                                <div className="manage-orderForm-reservePrice manage-orderForm-dingDan">
                                    <div>
                                        -
                                    </div>
                                    <div className="manage-orderForm-weight">
                                        + --
                                    </div>
                                </div>
                                <div className="manage-orderForm-salesRank manage-orderForm-dingDan">
                                    -
                                </div>
                                <div className="manage-orderForm-buttonPrice manage-orderForm-dingDan">
                                    <div>
                                        -
                                    </div>
                                    <div className="manage-orderForm-weight">
                                        + --
                                    </div>
                                </div>
                                <div className="manage-orderForm-buttonStatus manage-orderForm-dingDan">
                                    -
                                </div>
                                <div className="manage-orderForm-fnSku manage-orderForm-dingDan">

                                </div>
                                <div className="manage-orderForm-distribution manage-orderForm-dingDan">
                                    卖家
                                </div>
                                <div className="manage-orderForm-upcEan manage-orderForm-dingDan">
                                    B08PTW9RCN
                                </div>
                                <div className="manage-orderForm-save manage-orderForm-dingDan">
                                    <select>
                                        <option value="...">编辑</option>
                                    </select>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default OrderForm