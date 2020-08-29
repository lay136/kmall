import { Layout, Menu, Breadcrumb, Icon, Dropdown, message } from 'antd';
import React, { Component } from 'react'
import "./index.css"
import api from 'api'
import axios from 'axios'
import { getUsername, removeUsername } from 'util'


//容器组建
const { SubMenu } = Menu;
const { Header} = Layout;

class AdminHeader extends Component {
	constructor(props){
		super(props)
		this.headleLogout = this.headleLogout.bind(this);
	}
	headleLogout(){
		api.logout()
        .then(result=>{
            // console.log(result);
            if(result.code == 0){
                removeUsername()
                window.location.href = '/login'
            }            
        })
		/*
		// console.log('headleLogout');
		axios({
            method: 'delete',
            url:'http://127.0.0.1:3000/sessions/users',
        })
        .then(result=>{
            // console.log(result);
            const data  = result.data;
            if(data.code == 0){//登录成功
                //1.清除前台用户登录状态数据
                removeUsername()
                /*
                2.跳转到后台首页
                登录成功,跳转到后台管理员首页
                */
                /*
                window.location.href = '/login'
            }else{//登录失败
                message.error(data.message)
            }
        })
        .catch(err=>{
            // console.log(err);
            message.error('请求失败,请稍后再试！')
        })
        */
	}
    render() {
	    	const menu = (
				<Menu>
					<Menu.Item key="0" onClick = {this.headleLogout}>
					  	<Icon type="logout" /> 退出
					</Menu.Item>
					<Menu.Item key="1">
					  <a href="#"><Icon type="home" /> 返回首页</a>
					</Menu.Item>
				</Menu>
			)
        	return (
	        	<div className='AdminHeader'>
				    <Header className="header">
				    	<div className='logo'>
				    		<Icon type="taobao" /> KMALL 后台管理系统
				    	</div>
				    	<div className='dropdown'>
					    	<Dropdown overlay={menu} trigger={['click']}>
							    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
							      	{ getUsername() } <Icon type="down" />
							    </a>
							 </Dropdown>
						 </div>
				    </Header>
	        	</div>
        	)          
    	}
	}



export default AdminHeader




