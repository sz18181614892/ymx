import React from 'react';
import './Video.css';

function Video(){
        return(
            <div className="video-body">
                {/* 标题 */}
                <div className="video-titel">
                    <div>上传视频</div>    
                    <div style={{color:"#008296"}}>我的视频会显示在哪里？</div>
                    <span style={{color:"#008296"}}>帮助</span>
                </div>
                <div className="video-Box">
                <div className="video-leftBox">
                    <div></div>
                    <div>选择要上传的视频<br/>（或拖放）</div>
                    <div><button>上传视频</button></div>
                    <div><strong>视频要求：</strong>.mp4或.mpv,低于5 GB（建议使用480p或更高分辨率）</div>
                    <div>请勿包含任何URL（包括社交媒体链接和用户名），或引导用户离开亚马逊网站。确保您的视频采用的是商城的主导语言，并确保其中包含标记的商品。如有任何疑问，请参阅我们的<a>社区准则</a></div>
                </div>                
                <div className="video-rightBox">
                    <div className="video-rightBox-top">
                        <div className="video-rightBox-shopName">
                            <div>商品名称*</div>
                            <div> <div className="video-rightBox-tiem"></div>0/60</div>
                        </div>
                        <div className="video-rightBox-inp"><input   value="买家应从此视频中了解哪些内容？" /></div>
                        <div>建议少于60个字符</div>
                    </div>
                    <div className="video-rightBox-middle">
                        <div>ASIN*</div>
                        <div className="video-rightBox-middle-btn">
                            <div>品牌</div>
                            <div>非品牌</div>
                        </div>
                        <div className="video-rightBox-middle-text">
                            <textarea style={{width:"100%",height:"90px",outline: "none"}} value="输入于此视频相关的商品ASIN（300最大值）" />
                        </div>
                        <div>使用空格、逗号、分号或者或者换行符分隔ASIN</div>
                    </div>
                    <div className="video-rightBox-bottom">
                        <div>缩略图*</div>
                        <div className="video-rightBox-bottom-img"></div>
                        <div className="video-rightBox-bottom-btn">
                            <button style={{background:"#e3eced"}} >取消</button>
                            <button style={{background:"#879596",color: "#ffffff"}}>提交</button>
                            <strong>*必填字段尚未填写</strong>
                            <div>向亚马逊提交此视频，并表示您确认并同意该视频符合<span>亚马逊社区准则，</span>我们的<span>受限商品政策，</span>并且您接受<span>亚马逊使用条件，</span>和<span>隐私声明。</span></div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
}
export default Video
