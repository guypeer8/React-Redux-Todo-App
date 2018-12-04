import React from "react";
import Footer from "./Footer";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AddTodo from "../containers/AddTodo";
import { setVisibilityFilter } from "../actions";
import VisibleTodoList from "../containers/VisibleTodoList";

class App extends React.Component {
    hasFilterChanged(prevProps) {
        return this.props.match.params.filter !== prevProps.match.params.filter;
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

App.propTypes = {
    filter: PropTypes.oneOf([
        'all',
        'active',
        'completed',
    ]).isRequired,
    setVisibilityFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state, { match }) => ({
    filter: match.params.filter || 'all',
});

export default connect(
    mapStateToProps,
    { setVisibilityFilter }
)(App);
