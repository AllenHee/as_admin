import React from 'react';
import PropTypes from 'prop-types';
import { Upload, Icon, Modal, Form } from 'antd';

import './style.css';

const Message = (props) => {
    const { previewVisible, previewImage, fileList, handlePreview, handleChange, handleCancel } = props;
    const uploadButton = (
        <div>
            <Icon type="plus" />
            <div className="ant-upload-text">Upload</div>
        </div>
    );
    return (
        <div>
            <h1 className="common-title">Message Page</h1>
            <Form>
                <Form.Item label="首页大图">
                    <Upload
                        action=""
                        listType="picture-card"
                        fileList={fileList}
                        onPreview={handlePreview}
                        onChange={handleChange}
                    >
                        {fileList.length >= 3 ? null : uploadButton}
                    </Upload>
                    <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
                        <img alt="example" style={{ width: '100%' }} src={previewImage} />
                    </Modal>
                </Form.Item>
            </Form>
        </div>
    )
}

Message.propTypes = {
    previewVisible: PropTypes.any,
    previewImage: PropTypes.string,
    fileList: PropTypes.array,
    handlePreview: PropTypes.func,
    handleChange: PropTypes.func,
    handleCancel: PropTypes.func
}

export default Message;