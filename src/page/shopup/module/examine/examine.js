import React from "react";
import "./examine.css";
import IconFont from "../../../../components/Icon/Icon";
function examine() {
  return (
    <div className="examine-body">
      <div className="shopupDL-lbox" style={{width:"67%"}}>
        <div className="examine-Lwarn">
          <div className="examine-icon">
            <IconFont style={{ color: " #3489ac" }} type="icon-jinggao1" />
          </div>
          <div>
            查看您最近50次的库存文件上传状态。如果处理报告出现任何错误，请修改您的库存文件，然后重新上传。
            <span>了解更多信息</span>
          </div>
        </div>

        {/* 上传日期时间 */}
        <div className="examine-list">
            {/* 头部 */}
          <div className="examine-listHed">
            <div style={{width:"36%"}}>上传日期/时间</div>
            <div style={{width:"39%"}}>批量编号</div>
            <div style={{width:"39%"}}>上传状态</div>
            <div style={{width:"20%"}}>操作</div>
          </div>

            {/* 内容 */}
          <div className="examine-listNav">
              <div style={{width:"36%"}}>December 18, 2020 12:51:29 AM PST</div>
              <div style={{width:"39%"}}>115021018614</div>
              <div style={{width:"39%"}}>
                <div>上传状态  完成</div>
                <div>已提交记录的总次数：3</div>
                <div>需要您采取进一步操作的记录已保存为草稿</div>
              </div>
              <div style={{width:"20%",color:"#0066c0"}}>完成草稿 <span style={{color:"#c45500",fontWeight:"bold"}}><IconFont style={{color:"#3489ac"}} type="icon-jinggao1" />测试版</span><br/>下载处理报告</div>
          </div>
             {/* 内容 */}
             <div className="examine-listNav">
              <div style={{width:"36%"}}>December 18, 2020 12:51:29 AM PST</div>
              <div style={{width:"39%"}}>115021018614</div>
              <div style={{width:"39%"}}>
                <div>上传状态  完成</div>
                <div>已提交记录的总次数：3</div>
                <div>需要您采取进一步操作的记录已保存为草稿</div>
              </div>
              <div style={{width:"20%",color:"#0066c0"}}>完成草稿 <span style={{color:"#c45500",fontWeight:"bold"}}><IconFont style={{color:"#3489ac"}} type="icon-jinggao1" />测试版</span><br/>下载处理报告</div>
          </div>
             {/* 内容 */}
             <div className="examine-listNav">
              <div style={{width:"36%"}}>December 18, 2020 12:51:29 AM PST</div>
              <div style={{width:"39%"}}>115021018614</div>
              <div style={{width:"39%"}}>
                <div>上传状态  完成</div>
                <div>已提交记录的总次数：3</div>
                <div>需要您采取进一步操作的记录已保存为草稿</div>
              </div>
              <div style={{width:"20%",color:"#0066c0"}}>完成草稿 <span style={{color:"#c45500",fontWeight:"bold"}}><IconFont style={{color:"#3489ac"}} type="icon-jinggao1" />测试版</span><br/>下载处理报告</div>
          </div>


        </div>
      </div>
        {/* 右边盒子 */}
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
            <div>通过增强的处理报告快速修复商品信息错误</div>
          </div>
          <div className="shopupDL-rBox-warnnav">
            <div >
                增强的处理报告皆在帮助您快速识别商品信息错误，以便进行修复。
                相比以前的处理报告，新的Excel格式报告在出现错误的单元格中对错误和警告进行了突出显示。
                通过这种格式，您能一目了然地找出提交内容中的问题，从而更加轻松地纠正商品信息错误。
            </div>
          </div>
        </div>

        {/* 常见问题 */}
        <div className="shopupDL-bor">
          <div className="shopupDL-boxHed">常见问题</div>
          <div className="shopupDL-boxPD">
            <div style={{ padding: "10px 20px" }}>
              <ul>
                <li>什么是处理报告？</li>
                <li>如何下载库存报告？</li>
                <li>处理报告中的错误的含义是什么以及如何解决这些错误？</li>
                <li>如何查看已上传的库存文件结果？</li>
                <li>如何修复亚马逊品牌注册上传错误？</li>
                <li>如何阅读处理报告？</li>
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
                <li>查看处理报告</li>
                <li>最快处理上传数据</li>
                <li>错误代码说明</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default examine;
