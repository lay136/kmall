import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import React, { Component } from 'react'
import "./index.css"
import AdminSider from 'common/sider'
import AdminHeader from 'common/header'

//容器组建
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class AdminLayout extends Component {
    render() {
        return (
        	<div className='AdminLayout'>
            	<Layout>
				    <AdminHeader>
				    </AdminHeader>
				    <Layout>
						<AdminSider>
						</AdminSider>
							<Layout style={{ padding: '0 24px 24px' }}>
								<Content
								   style={{
								      	background: '#fff',
								     	padding: 24,
								    	margin: 0,
								    	minHeight: 280,
								  		}}
								>
								  	{ this.props.children }
								</Content>
							</Layout>
				    </Layout>
				 </Layout>
        	</div>
        )          
    }
}



export default AdminLayout




