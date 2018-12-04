import React from "react";
import Footer from "./Footer";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AddTodo from "../containers/AddTodo";
import { setVisibilityFilter } from "../actions";
import VisibleTodoList from "../containers/VisibleTodoList";

class App extends React.Component {
    hasFilterChanged(prevProps) {
        const currFilter = this.props.match.params.filter;
        const prevFilter = prevProps.match.params.filter;
        return currFilter !== prevFilter;
    }

    onRouteChanged() {
        this.props.setVisibilityFilter(this.props.filter);
    }

    componentWillMount() {
        this.onRouteChanged();
    }

    componentDidUpdate(prevProps) {
        if (this.hasFilterChanged(prevProps))
            this.onRouteChanged();
    }

    shouldComponentUpdate(prevProps) {
        return this.hasFilterChanged(prevProps);
    }

    render() {
        return (
            <div>
                <AddTodo />
                <VisibleTodoList
                    filter={this.props.filter}
                />
                <Footer />
            </div>
        );
    }
}

App.defaultProps = {
    filter: 'all',
};

App.propTypes = {
    filter: PropTypes.oneOf([
        'all',
        'active',
        'completed',
    ]).isRequired,
    setVisibilityFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state, { match }) => ({
    filter: match.params.filter,
});

export default connect(
    mapStateToProps,
    { setVisibilityFilter }
)(App);
