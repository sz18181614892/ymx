import React, {useState} from "react"
import "./Tab5-banner.css"
import BannerHeader from "../Banner-header";
import IconFont from "../../../../../components/Icon/Icon";
import {Upload, message, Button, Form} from 'antd';
import {LoadingOutlined, PlusOutlined} from '@ant-design/icons';

function Tab5Banner() {
    let [data] = useState({
        loading: "",
        imageUrl: "",
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    });
    const {loading, imageUrl} = data;
    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined/> : <PlusOutlined/>}
            <div style={{marginTop: 8}}>Upload</div>
        </div>
    );
    const beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    }
    return (
        <div className="tab5-box">
            <BannerHeader/>
            <div className="tab5-suggest">
                <p className="tab5-suggest-img">您的图片建议</p>
                <p className="tab5-uploading">上传您的商品图片建议</p>
                <h5>查看图片指南 <IconFont type="icon-fanhui-copy-copy"/></h5>
            </div>
            <div className="tab5-suggest-uploading-box">
                {
                    data.list.map(item => {
                        return (
                            <Upload key={item}
                                    name="avatar"
                                    listType="picture-card"
                                    className="avatar-uploader"
                                    showUploadList={false}
                                    action=""
                                    beforeUpload={beforeUpload}
                            >
                                {imageUrl ? <img src={imageUrl} alt="avatar" style={{width: '100%'}}/> : uploadButton}
                            </Upload>
                        )
                    })
                }
            </div>
            <div className="tab1-button tab5-button">
                <Button>取消</Button>
                <Button>保存并完成</Button>
            </div>
        </div>
    )
}

export default Tab5Banner