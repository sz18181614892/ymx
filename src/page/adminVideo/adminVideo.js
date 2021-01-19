import React from "react";
import "./adminVideo.css";
import IconFont from "../../components/Icon/Icon";

function adminVideo() {
  return (
    <div className="adminV-body">
      {/* 标题 */}
      <div>
        <div className="adminV-titel">
          <div style={{ fontSize: "24px" }}>管理视频</div>
          <div className="adminV-title-help">
            <div style={{ color: "#008296" }}>需要创建视频方面的帮助？</div>
            <span>
              <button style={{ background: "#008296", color: "#ffffff" }}>
                上传视频
              </button>
            </span>
          </div>
        </div>
      </div>
      {/* 主要内容 */}
      <div>
          {/* 头部搜索框 */}
        <div className="adminV-nav-top">
          <div className="adminV-top-inp">
            <div>
              <label>
                <select className="adminV-label">
                  <option>ASIN</option>
                </select>
              </label>
            </div>
            <div><input value="搜索ASIN" style={{padding:"0 10px"}} /></div>
            <button ><IconFont type="icon-sousuo" /></button>
          </div>
          <div className="adminV-top-page">
              <div>{"<"}</div>
              <div>1</div>
              <div>{">"}</div>
          </div>
        </div>
        {/* 视频列表 */}
        <div>
            <div className="adminV-navList-box">
            <div className="adminV-navList">
                <div>视频</div>
                <div >商品名称</div>
                <div>上传日期</div>
                <div>状态</div>
                <div>浏览量</div>
                <div>平均浏览完成度</div>
                <div>ASIN</div>
            </div>
            </div>
            {/* 列表内容 */}
            <div className="adminV-navShop">
                <div className="adminV-navShop-befor">
                    <div>视频图片</div>
                    <div>Meng Pro Blender 1400W</div>
                    <div>2019-02-18</div>
                    <div>已发布</div>
                    <div>2</div>
                    <div>39%</div>
                    <div>BONANV312</div>
                </div>
                <div className="adminV-navShop-after">
                    <div>删除</div>
                    <div><button>管理</button></div>
                </div>
            </div>
            <div className="adminV-bottom">
                <div>更新日期：2020年12月20日 GMT+8，这些更改需要48小时才会显示在此页面上，请耐心等待。显示的指标代表过去30天的数据，每一天计算和更新一次。</div>
                <button>上传视频</button>
            </div>
        </div>
      </div>
    </div>
  );
}
export default adminVideo;
