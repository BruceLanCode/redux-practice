/**
 * Created by lantu on 2017/11/2.
 */

export default visibilityFilter = (state = 'SHOW_ALL',action) => {
    switch (action.type){
        case 'SET_VISIBILITY_FILTER':
            return action.filter
        default:
            return state
    }
}
