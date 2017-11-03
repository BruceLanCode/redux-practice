/**
 * Created by lantu on 2017/11/2.
 */

import React,{ Component } from 'react'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

export default class extends Component {
    render(){
        return (
            <div>
                <AddTodo />
                <VisibleTodoList />
            </div>
        )
    }
}
