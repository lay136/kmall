import { Table, Breadcrumb, Button, Input, InputNumber, Switch } from 'antd';
import React, { Component } from 'react'
import { actionCreator } from './store'
import { connect } from 'react-redux'
import "./index.css"
import AdminLayout from 'common/layout';
import moment from 'moment'

import { 
    Link,
} from "react-router-dom"


//容器组建
class CategoryList extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.handlePage(1)
    }
    render() {
            // const { list } = this.props;
            // console.log(list)
            const { 
                list,
                current,
                total,
                pageSize,
                handlePage,
                isFetching,
                handleUpdateName,
                handleUpdateMobileName,
                handleUpdateOrder,
                handleUpdateIsShow,
            } = this.props;
            const columns = [{
                title: '分类名称',
                dataIndex: 'name',
                width:'35%',
                key: 'name',
                    render:(name,record)=><Input 
                        style={{width:'55%'}}
                        defaultValue={name}
                        onBlur={
                            (ev)=>{//判断值是否更新，没有更新，则不用向后台发送提交数据
                                if(ev.target.value != name){
                                    handleUpdateName(record._id,ev.target.value)    
                                }
                            }
                        }
                    />
                },
                {
                    title: '手机分类名称',
                    dataIndex: 'mobileName',
                    width:'35%',
                    key: 'mobileName',
                    render:(mobileName,record)=><Input 
                        style={{width:'50%'}}
                        defaultValue={mobileName}
                        onBlur={
                            (ev)=>{//判断值是否更新，没有更新，则不用向后台发送提交数据
                                if(ev.target.value != mobileName){
                                    handleUpdateMobileName(record._id,ev.target.value)    
                                }
                            }
                        }
                    />                
                },
                {
                    title: '是否显示',
                    dataIndex: 'isShow',
                    key: 'isShow',
                    width:'15%',
                    render:(isShow,record)=><Switch 
                        checkedChildren="显示" 
                        unCheckedChildren="隐藏" 
                        checked={isShow == '0' ? false : true}
                        onChange={
                            (checked)=>{
                                handleUpdateIsShow(record._id,checked ? '1' : '0')
                            }
                        } 
                    />
                },
                {
                    title: '排序',
                    dataIndex: 'order',
                    key: 'order',
                    width:'15%',
                    render:(order,record)=>
                        <InputNumber 
                            defaultValue={order}
                            onBlur={
                                (ev)=>{//判断值是否更新，没有更新，则不用向后台发送提交数据
                                    if(ev.target.value != order){
                                        handleUpdateOrder(record._id,ev.target.value)    
                                    }
                                }
                            }
                        />                 
                },
            ]        
            const dataSource = list.toJS() 
            /* const columns = [
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
            */
        return (
            <div className='CategoryList'>
                <AdminLayout>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>首页</Breadcrumb.Item>
                        <Breadcrumb.Item>分类管理</Breadcrumb.Item>
                        <Breadcrumb.Item>分类列表</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{marginBottom:16,height:40}} className='claerfix'>
                        <Link to="/category/add" style={{float:'right'}}>
                            <Button type="primary btn-add">
                                添加分类
                            </Button>
                        </Link>
                    </div>
                    <div className="content">
                        <Table 
                            dataSource={dataSource} 
                            columns={columns}
                            // loading:{isFetching},
                            pagination={{
                                current:current,
                                total:total,
                                pageSize:pageSize
                            }}
                            onChange={
                                (page)=>{
                                    handlePage(page.current)
                                }
                            }
                            loading={
                                {
                                    spinning:isFetching,
                                    tip:'数据正在努力的加载中 . . . '
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
const mapStateToProps = (state) => ({
    list:state.get('category').get('list'),
    current:state.get('category').get('current'),
    total:state.get('category').get('total'),
    pageSize:state.get('category').get('pageSize'), 
    isFetching:state.get('category').get('isFetching'),  
})
//映射方法到组件
const mapDispatchToProps = (dispatch)=>({
    handlePage:(page)=>{
        dispatch(actionCreator.getPageAction(page))
    },
    handleUpdateName:(id,newName)=>{
        dispatch(actionCreator.getUpdateNameAction(id,newName))
    },
    handleUpdateMobileName:(id,newMobileName)=>{
        dispatch(actionCreator.getUpdateMobileNameAction(id,newMobileName))
    },
    handleUpdateOrder:(id,newOrder)=>{
        dispatch(actionCreator.getUpdateOrderAction(id,newOrder))
    },
    handleUpdateIsShow:(id,newIsShow)=>{
        dispatch(actionCreator.getUpdateUpdateIsShowAction(id,newIsShow))
    },  
})

export default connect(mapStateToProps,mapDispatchToProps)(CategoryList)




