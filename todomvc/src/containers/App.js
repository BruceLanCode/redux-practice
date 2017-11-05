import React,{ Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as TodoActions from '../actions'
import Header from '../components/Header'
import MainSection from '../components/MainSection'

class App extends Component {
    render(){
        return (
            <div>
                <Header addTodo={this.props.actions.addTodo} />
                <MainSection todos={this.props.todos} actions={this.props.actions} />
            </div>
        )
    }
}

App.propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions,dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);