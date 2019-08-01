import TodoList from "../component/TodoList";
import {toggleTodo} from '../action';
import {connect} from 'react-redux';

const getVisibleTodd = (state, filter) => {
    switch (filter) {
        case "SHOW_ALL":
            return state
        case "SHOW_ACTIVE":
            return state.filter(e => !e.completed)
        case "SHOW_COMPLIED":
            return state.filter(e => e.completed)
        default:
            return state
    }
}


const mapStateToProps = state => {
    return {
        todos: getVisibleTodd(state.todos, state.visibilityFilter)
    }
}

const mapDipatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            dispatch(toggleTodo(id))
        }
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDipatchToProps
)(TodoList)

export default VisibleTodoList;