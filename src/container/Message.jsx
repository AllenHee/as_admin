import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Message } from '../component';
import bindMethods from '../utils/bindFunction';


class MessageContainer extends Component {
    constructor() {
        super();
        this.state = {
            fileList: [
                {
                    uid: '-1',
                    name: 'xxx.png',
                    status: 'done',
                    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                }
            ],
            previewVisible: false,
            previewImage: '',
        }
        bindMethods([
            'handlePreview',
            'handleChange',
            'handleCancel'
        ], this);
    }

    render() {
        return (
            <Message
                {...this}
                {...this.state}
                {...this.props}
            ></Message>
        )
    }

    handlePreview(file) {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true
        })
    }

    handleChange(fileList) {
        this.setState({ fileList: fileList.fileList });
    }

    handleCancel() {
        this.setState({
            previewVisible: false
        })
    }
}

MessageContainer.propTypes = {
    previewVisible: PropTypes.any,
    previewImage: PropTypes.string,
    fileList: PropTypes.array,
    handlePreview: PropTypes.func,
    handleChange: PropTypes.func,
    handleCancel: PropTypes.func
}

export default MessageContainer;