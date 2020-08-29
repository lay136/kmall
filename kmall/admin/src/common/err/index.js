import React, { Component } from 'react'
import "./index.css"
import { Alert, Button } from 'antd';

import { 
    Link,
} from "react-router-dom"

class Err extends Component {
    render() {
        return (
            <div className="Err">
                <Alert
			      message=" Not Found "
			      description="您请求的页面走丢了，请确认地址是否正确！！！"
			      type="error"
			      showIcon
			    />
			    <Link to = '/'><Button type="link" >返回首页</Button></Link>
            </div>
        )          
    }
}
export default Err



