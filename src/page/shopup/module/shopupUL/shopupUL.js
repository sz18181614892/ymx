import React from "react";
import "./shopupUL.css";
import IconFont from "../../../../components/Icon/Icon";
import { Radio } from 'antd';
function shopupUL() {
  return (
    <div className="shopupDL-body" style={{paddingBottom:"100px"}}>
      <div className="shopupDL-lbox">
        <div className="shopupDL-bor">
          <div className="shopupDL-boxHed">上传文件</div>
          <div className="shopupUL-navBody">
            <div className="shopupDL-boxPD">
              <div className="shopupUL-type">
                <div>文件类型</div>
                <div>
                  <div className="shopupUL-label">
                    <label>
                      <select
                        style={{
                          background: "#eff1f3",
                          border: "1px solid #000",
                          width: "183px",
                        }}
                      >
                        <option>用于特定分类的库存文件</option>
                      </select>
                    </label>
                  </div>
                </div>
              </div>
              <div className="shopupUL-labelBtm">
                库存文件可用于创建新品种，并将商品添加到亚马逊目录中
                <a>了解更多信息</a>
              </div>
              <div className="shopupUL-type">
                <div>文件上传</div>
                <div className="">
                  <button>选择文件</button> 没有选择文件
                  <div>
                    <span style={{ color: "#d57a84" }}>新建</span>
                    您可以上传Excel 格式的库存文件。
                  </div>
                </div>
              </div>
              <div className="shopupUL-type">
                <div>邮件提醒</div>
                <div>
                  <div>
                    发送邮件提醒 <input value="email@example.com" />{" "}
                    (当上传完成时) 。
                  </div>
                </div>
              </div>
              <div className="shopupUL-type">
                <div>处理报告格式</div>
                <div className="shopupUL-checkbox">
                    <Radio.Group name="radiogroup" defaultValue={1}>
                      <Radio  value={1}> Excel - 推荐</Radio><br/>
                      <Radio  value={2}> 文本</Radio>
                    </Radio.Group>
                </div>
                <div>Excel 格式会在相应单元格中突出显示错误和警告，使您能够一目了然地找出提交内容中的问题。</div>
              </div>
              <div className="shopupUL-upBtn">
                  <button>上传</button>
                </div>
            </div>
          </div>
        </div>

        <div className="shopupDL-bor">
          <div className="shopupDL-boxHed-btm">
            <div style={{color:"rgb(200, 50, 0)"}}>清除/替换您的库存</div>
            <div>
              <IconFont type="icon-fanhui-copy-copy" style={{transform: "rotate(90deg)",fontSize:"24px"}} />
            </div>
          </div>
        </div>
      </div>
      <div className="shopupDL-rbox">
        <div
          className="shopupDL-warnBox"
          style={{ border: "1px solid #3479ac",padding:"10px 0" }}
        >
          <div className="shopupDL-rBox-warnHed">
            <IconFont
              type="icon-jinggao1"
              className="RepertoryTable1-box1-font"
              style={{ color: "#3489ac", margin: "0 20px" }}
            />
            <div>希望使用您的目录文件添加商品？</div>
          </div>
          <div className="shopupDL-rBox-warnnav">
            <div >
             使用<a style={{color:" #0066c0"}}>准备您的商品</a>工具，通过上传任意Excel、文本或CSV
             文件来批量添加商品。您也可以上传在自己的电子商务网站
             或其他商城中用来销售商品的文件。
            </div>
          </div>
        </div>

        {/* 常见问题 */}
        <div className="shopupDL-bor">
          <div className="shopupDL-boxHed">常见问题</div>
          <div className="shopupDL-boxPD">
            <div style={{ padding: "10px 20px" }}>
              <ul>
                <li>如何批量修复禁止显示的商品？</li>
                <li>上传库存文件？</li>
                <li>如何使用不同的库存文件模板？</li>
                <li>修改我的库存文件？</li>
              </ul>
            </div>
          </div>
        </div>
        {/* 相关主题 */}
        <div className="shopupDL-bor">
          <div className="shopupDL-boxHed">常见问题</div>
          <div className="shopupDL-boxPD">
            <div style={{ padding: "10px 20px" }}>
              <ul>
                <li>使用库存文件</li>
                <li>构建我的库存文件</li>
                <li>修改我的库存文件</li>
                <li>创建库存文件模板</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default shopupUL;
