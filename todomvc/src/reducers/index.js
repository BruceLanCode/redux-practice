import { combineRedecers } from 'redux'
import todos from './todos'

const rootReducer = combineRedecers({
    todos
})

export default rootReducer