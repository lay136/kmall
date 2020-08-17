import React, { Component } from 'react'
import "./index.css"
import CategoryAdd from './add.js'
import CategoryList from './list.js'


import { 
    Route, 
    Switch,
    Link,
} from "react-router-dom"


//容器组建
class Category extends Component {
    constructor(props) {
        super(props)
    }
    render() {
    	return (
        	<div className='Category'>
                <Switch>
                    <Route path="/category/add" component={CategoryAdd} />
                    <Route path="/category/" component={CategoryList} />
                </Switch> 
        	</div>
        )          
         
    }
}


export default Category




