import React ,{ Component } from 'react';
import PropTypes from 'prop-types';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilter'
import TodoItem from './TodoItem'

const TODO_FILTERS = {
    [SHOW_ALL]: () => true,
    [SHOW_ACTIVE]: todo => !todo.completed,
    [SHOW_COMPLETED]: todo => todo.completed
}

export default class MainSection extends Component {
    static propTypes = {
        todos: PropTypes.array.isRequired,
        actions: PropTypes.object.isRequired
    }

    state = { filter: SHOW_ALL }

    renderToggleAll(completedCount){
        const { todos,actions } = this.props;
        console.log(todos);
        if(todos.length > 0){
            return (
                <span>
                    <input type="checkbox"
                    className="toggle-all"
                    checked={completedCount === todos.length}/>
                    <label onClick={actions.completeAll}></label>
                </span>
            )
        }
    }

    render(){
        const { todos,actions } = this.props;
        const { filter } = this.state

        const filteredTodos = todos.filter(TODO_FILTERS[filter])
        const completedCount = todos.reduce((count,todo) =>
            todo.completed ? count + 1 : count, 0
        )
        console.log(completedCount)

        return (
            <section className="main">
                { this.renderToggleAll(completedCount) }
                <ul className="todo-list">
                    { filteredTodos.map(todo =>
                        <TodoItem key={todo.id} todo={todo} {...actions} />
                    )}
                </ul>
            </section>
        )
    }
}