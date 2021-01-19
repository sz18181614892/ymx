import React from 'react';
import './imgup.css'

function imgup(){
    return(
        <div className="imgup-body">
            {/* 批量上传 */}
            <div className="imgup-box">
                <div className="imgup-titel">
                    <div style={{fontSize:"24px"}}>批量图片上传</div>
                    <div><a style={{color:"#008296"}}>状态报告</a></div>
                </div>
                <div className="img-hint">
                    亚马逊上的每一个详情页面都至少一张商品图片，我们建议您提供六张图片和一个视频。高品质的图片可以让买家轻松评估商品。图片应清晰、信息丰富且具有吸引力。商品详情页上第一张是"主"图片，在搜索结果中向买家显示。主图片必须仅显示待售商品且背景为白色，而且商品应填满图框。其他图片因显示商品在使用中的状态或在具体环境中的情况，或者展示商品的不同角度和不同功能。请注意，视频上传是一个单独的工作流程。请搜索帮助页面以确定是否在您的所在地启用了该功能。
                </div>
                <div className="img-require ">图片必须满足以下要求:</div>
                <div className="img-num">
                <div>1.另请参阅<a style={{color:"#008296"}}>图片要求帮助页面。</a></div>
                <div>2.商品必须占据图片85%的面积。</div>
                <div>3.图片只能展示待售商品，包含少量或不包含辅助物，不包含徽标、水印或插图。图片只能包含原本就属于商品的文字</div>
                <div>4.著图片必须使用纯白色背景，必须为照片（而非绘画），不得显示不包含的配件。</div>
                <div>5.图片的最长边必须至少为1000像素才能在网上进行缩放（最好是1500像素或更大像素）。</div>
                <div>6.单个文件的大小可达500MB，最长边不得超过10.000像素。</div>
                <div>7.接受文件格式包括JPG（首选）、PNG、TIF、和GIF。文件必须使用ASIN+变体代码+文件扩展名进行命名（例如，B000123456.MAIN.JPG）。<a style={{color:"#008296"}}>请参阅"命名图片文件"帮助页面</a></div>
                </div>
            </div>
            {/* 拖动点击上传 */}
            <div className="img-bottom">
            <div className="img-btmBox">
                <div>拖动或点击上传图片或zip文件</div>
                <div style={{color:"#bfbfbf"}}>zip 文件不能大于 5GB （最好小于 1GB）.您可以一次上传一张图片或zip文件。</div>
            </div>
            <div className="img-btn">
                <button className="img-btn1">取消</button>
                <button className="img-btn2">提取图片</button>
            </div>
            </div>
        </div>
    )
}
export default imgup