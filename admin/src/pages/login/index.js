import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { connect } from 'react-redux'
import axios from 'axios'

import "./index.css"
import { actionCreator } from './store/index.js'


class NormalLoginForm extends React.Component {
    //绑定提交按钮事件
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e){
    e.preventDefault();
        this.props.form.validateFields((err, values) => {
        if (!err) {
             this.props.handleLogin(values)
            // console.log('Received values of form: ', values);

        }
    });
};

render() {
    const { getFieldDecorator } = this.props.form;
    const { isFetching } = this.props;
    return (
        <div className="Login">
            <Form className="login-form">
                    <Form.Item>
                        <h2>用户名密码登录</h2>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: '请您输入手机/邮箱/用户名' },{pattern:/^[a-z][a-z0-9_]{2,5}$/,message:'密码以字母开头的3到6位字符'}],
                        })(
                        <Input
                            // prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="手机/邮箱/用户名"
                        />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请您输入密码' },{pattern:/^\w{3,6}$/,message:'密码为3-6位任意字符'}],
                        })(
                        <Input
                            // prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="密码"
                        />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button 
                            type="primary"  
                            className="login-form-button"
                            onClick={this.handleSubmit}
                            // loading={isFetching}
                            loading={this.props.isFetching}
                        >
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}




const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);


//映射属性到组件
const mapStateToProps = (state) => ({
        isFetching: state.get('login').get('isFetching')
})
//映射方法到组件
const mapDispatchToProps = (dispatch) => ({
        handleLogin: (values) => {
            dispatch(actionCreator.getLoginAction(values))
        }
})


export default connect(mapStateToProps,mapDispatchToProps)(WrappedNormalLoginForm)



