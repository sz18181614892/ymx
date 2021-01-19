import React from "react";
import "./shopupDL.css";
import IconFont from "../../../../components/Icon/Icon";

function shopupDL() {
  return (
    <div className="shopupDL-body">
      <div className="shopupDL-lbox">
        <div className="shopupDL-titel">
          <div className="shopupDL-fontSize">创建库存文件模板</div>
          <div>您现在可以专门针对您销售的商品类型生成自定义库模板</div>
        </div>
        <div className="shopupDL-merit">
          <div className="shopupDL-fontSize">主要优点：</div>
          <div>-在一个模板中列出多个商品分类下不同类型商品的信息</div>
          <div>-根据具体的业务需求选择要添加到模板中的信息</div>
        </div>
        <div>
          您需要先获得亚马逊的批准，才能将商品发布<a style={{color:"#0066c0"}}>某些商品分类下</a>
          。要针对特定分类申请批准，请点击连接并按照说明提交您的申请。
        </div>
        {/* 商品类型盒子 */}
        <div className="shopupDL-bor">
          {/* 第1步：选择您要销售的商品的类型 */}
          <div className="shopupDL-boxHed">第1步：选择您要销售的商品的类型</div>

          <div className="shopupDL-boxPD">
            <div className="shopupDL-inpTitel">
              <div>搜索工具： </div>
              <div style={{ color: "#0066c0" }}>
                什么是商品类型？<span>Variation Wizard</span>
              </div>
            </div>
            <div className="shopupDL-inpB">
              <div className="shopupDL-inp">
                <IconFont type="icon-sousuo" className="Replenish-inpFont" />
                <input value="示例：mp3播放器、棒球手套、DVD、吉他等等" />
              </div>
              <button className="Replenish-inpBtn">搜索</button>
              <div style={{color:"#0066c0"}}>清除搜索记录</div>
            </div>
            <div className="shopupDL-part">
              <div className="shopupDL-line"></div>要么
              <div className="shopupDL-line"></div>
            </div>
            <div className="shopupDL-titelF">商品分类工具：</div>
            <div>
              美容和个人护理
              <strong>
                <IconFont type="icon-fanhui-copy-copy" />
              </strong>
              <span style={{ color: "#e47911" }}>彩妆</span>
            </div>
            <div className="shopupDL-slide">
              <div className="shopupDL-slideBox">
                <div style={{ height: "500px" }}>
                  <div className="shopupDL-slideNav">
                    <div style={{ fontSize: "15px" }}>汽车用品</div>
                    <div style={{ fontSize: "22px" }}>
                      <IconFont type="icon-fanhui-copy-copy" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="shopupDL-slideBox">
                <div style={{ height: "500px" }}>
                  <div className="shopupDL-slideNav">
                    <div style={{ fontSize: "15px" }}>汽车用品</div>
                    <div style={{ fontSize: "22px" }}>
                      <IconFont type="icon-fanhui-copy-copy" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="shopupDL-slideBox">
                <div style={{ height: "500px" }}>
                  <div className="shopupDL-slideNav">
                    <div style={{ fontSize: "15px" }}>汽车用品</div>
                    <div style={{ fontSize: "22px" }}>
                      <IconFont type="icon-fanhui-copy-copy" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="shopupDL-titelF">已选商品一览</div>
            <div className="shopupDL-delBox">
              <div className="shopupDL-delBox-top">
                <div style={{ paddingLeft: "20px",color:"#0066c0" }}>全部删除</div>
                <div>所选分类</div>
                <div>商品类型</div>
                <div>字段名</div>
                <div>有效值</div>
              </div>
              <div className="shopupDL-delBox-nav">
                <div style={{ paddingLeft: "40px" }}>
                  <IconFont type="icon-guanbi" />
                </div>
                <div>彩妆礼盒、套装</div>
                <div>BEAUTY</div>
                <div>item_type_keyword</div>
                <div>makeup-seta</div>
              </div>
            </div>
          </div>
        </div>
        {/* 第2步：选择模板的类型 */}
        <div className="shopupDL-bor">
          <div className="shopupDL-boxHed">第2步：选择模板的类型</div>
          <div className="shopupDL-boxPD">
            <div style={{ marginBottom: "30px" }}>
              <div className="shopupDL-box2Top">
                <div className="shopupDL-titelF">模板语言</div>
                <div style={{ paddingLeft: "10px" }}>
                  <label>
                    <select
                      className="adminV-label"
                      style={{
                        background: "#eff1f3",
                        border: "1px solid #a2a6ac",
                      }}
                    >
                      <option>中文</option>
                    </select>
                  </label>
                </div>
              </div>
              <div>
                <span>i</span>您仍需要提供英文商品信息内容
              </div>
            </div>
            <div style={{ marginBottom: "30px" }}>
              <div className="shopupDL-titelF">请选择一种模式</div>
              <div className="shopupDL-boxBtn">
                <div>高级</div>
                <div>自定义</div>
              </div>
            </div>
            <div style={{ marginBottom: "30px" }}>
              <div>
                "高级"选项包含与以上所选商品关联的{" "}
                <span style={{ fontWeight: "bold" }}>所有</span>
                属性组。该选项包含"必填"、"首选"和"可选"属性组。
              </div>
            </div>
            <div className="shopupDL-boxBtn-btm">
              <button>生成模板</button>
            </div>
          </div>
        </div>

        {/* 过去生成的模板 */}
        <div className="shopupDL-bor">
          <div className="shopupDL-boxHed-btm">
            <div>过去生成的模板</div>
            <div>
              <IconFont type="icon-fanhui-copy-copy" style={{transform: "rotate(-90deg)",fontSize:"24px"}} />
            </div>
          </div>
          <div className="shopupDL-boxBef">
            <div style={{ margin: "15px 0" }}>
              <div>要下载过去生成的模板，请点击以下任一连接</div>
              <div className="shopupDL-boxBef-nav">
                <div className="shopupDL-boxBef-navShop">
                  <div>女士围巾</div>
                  <div>Tumblers & Water Glasses</div>
                  <div>Gaming Mice</div>
                  <div>Brush Sets</div>
                  <div>Makeup Sets</div>
                  <div>防滑床垫</div>
                  <div>地毯及室内装饰品清洁替换零件；便携式烘干机</div>
                  <div>Furniture Sets</div>
                  <div>主脚桌</div>
                </div>
                <div>
                  <div>
                    <span>(高级)</span>生成日期 12/22/2020 10:46:00 GMT +0800
                    （中国标准时间）
                  </div>
                  <div>
                    <span>(高级)</span>生成日期 12/22/2020 10:46:00 GMT +0800
                    （中国标准时间）
                  </div>
                  <div>
                    <span>(高级)</span>生成日期 12/22/2020 10:46:00 GMT +0800
                    （中国标准时间）
                  </div>
                  <div>
                    <span>(高级)</span>生成日期 12/22/2020 10:46:00 GMT +0800
                    （中国标准时间）
                  </div>
                  <div>
                    <span>(高级)</span>生成日期 12/22/2020 10:46:00 GMT +0800
                    （中国标准时间）
                  </div>
                  <div>
                    <span>(高级)</span>生成日期 12/22/2020 10:46:00 GMT +0800
                    （中国标准时间）
                  </div>
                  <div>
                    <span>(高级)</span>生成日期 12/22/2020 10:46:00 GMT +0800
                    （中国标准时间）
                  </div>
                  <div>
                    <span>(高级)</span>生成日期 12/22/2020 10:46:00 GMT +0800
                    （中国标准时间）
                  </div>
                  <div>
                    <span>(高级)</span>生成日期 12/22/2020 10:46:00 GMT +0800
                    （中国标准时间）
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 库存文件 */}
        <div className="shopupDL-bor">
          <div className="shopupDL-boxHed-btm">
            <div>库存文件</div>
            <div>
              <IconFont type="icon-fanhui-copy-copy" style={{transform: "rotate(90deg)",fontSize:"24px"}} />
            </div>
          </div>
        </div>
      </div>
      <div className="shopupDL-rbox">
        {/* 通过增强的处理报告快速修复商品信息错误 */}
        <div
          className="shopupDL-warnBox"
          style={{ border: "1px solid #3479ac" }}
        >
          <div className="shopupDL-rBox-warnHed">
            <IconFont
              type="icon-jinggao1"
              className="RepertoryTable1-box1-font"
              style={{ color: "#3489ac", margin: "0 20px" }}
            />
            <div>通过增强的处理报告快速修复商品信息错误</div>
          </div>
          <div className="shopupDL-rBox-warnnav">
            <div>
              增强的处理报告皆在帮助您快速识别商品信息错误，以便进行修复。
              相比以前的处理报告，新的Excel格式报告在出现错误的单元格中对错误和警告进行了突出显示。
              通过这种格式，你能一目了然地找出提交内容的问题，从而更轻松地纠正商品信息错误。
            </div>
          </div>
        </div>

        {/* 常见问题 */}
        <div className="shopupDL-bor">
          <div className="shopupDL-boxHed">常见问题</div>
          <div className="shopupDL-boxPD">
            <div style={{padding:"10px 20px"}}>
              <ul>
               <li>如何选择商品分类并创建新的目录商品？</li>
               <li>如何使用库存模板添加匹配商品？</li>
               <li>如何申请销售亚马逊限制的商品？</li>
               <li>如何更改商品的状况？</li>
               <li>如何创建商品的变体关系？</li>
               <li>如何创建或更改包含变体的商品？</li>
               <li>如果库存文件模板没有变体字段，我可以添加变体信息吗？</li>
              </ul>
            </div>
          </div>
        </div>
        {/* 相关主题 */}
        <div className="shopupDL-bor">
          <div className="shopupDL-boxHed">常见问题</div>
          <div className="shopupDL-boxPD">
            <div style={{padding:"10px 20px"}}>
              <ul>
                  <li>构建我的库存文件</li>
                  <li>使用商品分类文具</li>
                  <li>库存文件模板</li>
                  <li>选择和下载您的库存文件模板</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default shopupDL;
