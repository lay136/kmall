import { Table, Divider, Tag, Breadcrumb } from 'antd';
import React, { Component } from 'react'
import { actionCreator } from './store'
import { connect } from 'react-redux'
import "./index.css"
import AdminLayout from 'common/layout';
import moment from 'moment'


const columns = [
		{
			title: '用户名',
	        dataIndex: 'username',
	        key: 'username',
		},
		{
			title: '是否管理员',
	        dataIndex: 'isAdmin',
	        key: 'isAdmin',
			render:(isAdmin)=>(isAdmin ? '是' : '否')

		},
		{
			title: 'email',
	        dataIndex: 'email',
	        key: 'email',
		},
		{
			title: '手机',
	        dataIndex: 'phone',
	        key: 'phone',
		},
		{
	        title: '注册时间',
	        dataIndex: 'createdAt',
	        key: 'createdAt',
	    },
	];
//容器组建
class AdminHome extends Component {
	constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.handlePage(1)
    }
    render() {
    		// const { list } = this.props;
			// console.log(list)
        	const { list,current,total,pageSize,handlePage,isFetching } = this.props
			const dataSource = list.map((user)=>{
				// console.log(user);
	            return {
	                key:user.get('_id'),
	                username:user.get('username'),
	                isAdmin:user.get('isAdmin'),
	                phone:user.get('phone'),
	                email:user.get('email'),
	                createdAt:moment(user.get('createdAt')).format('YYYY-MM-DD HH:mm:ss')  
	            }
	        }).toJS()
			/*const data = [
				{
					key: '1',
					username: 'Admin',
					isAdmin: true,
					email: '1652016835@qq.com',
					phone: 15538675951,
					createdAt:'2020-08-04 12:00:00',
				},
			];*/
        return (
        	<div className='AdminHome'>
            	<AdminLayout>
            		<Breadcrumb style={{ margin: '16px 0' }}>
	                  	<Breadcrumb.Item>首页</Breadcrumb.Item>
	                  	<Breadcrumb.Item>用户列表</Breadcrumb.Item>
	                </Breadcrumb>
	                <div className="content">
						<Table 
							columns={columns} 
							dataSource={dataSource}
							pagination={{
	                            total:total,
	                            pageSize:pageSize,
	                            current:current

	                        }}

	                        onChange={
	                            (page)=>{
	                                handlePage(page.current)
	                            }
	                        }

	                        loading={
	                            {
	                                spinning:isFetching,
	                                tip:'数据正在努力的加载中 . . .'
	                            }
	                        }

						/>
					</div>
            	</AdminLayout>
        	</div>
        )          
    }
}

//映射属性到组件
const mapStateToProps = (state)=>({
	list:state.get('user').get('list'),
    current:state.get('user').get('current'),
    total:state.get('user').get('total'),
    pageSize:state.get('user').get('pageSize'), 
    isFetching:state.get('user').get('isFetching'),
    
})
//映射方法到组件
const mapDispatchToProps = (dispatch)=>({
	handlePage:(page)=>{
        dispatch(actionCreator.getPageAction(page))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(AdminHome)




