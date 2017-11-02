/**
 * Created by lantu on 2017/11/2.
 */

import todos from './todos'
import visibilityFilter from './visibilityFilter'

import { combineReducers } from 'redux'

const todoApp = combineReducers({
    todos,
    visibilityFilter
})
