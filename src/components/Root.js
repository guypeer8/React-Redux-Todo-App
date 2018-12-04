import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import App from "./App";
import {BrowserRouter as Router, Route} from "react-router-dom";

const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <Route path="/:filter?" component={App} />
        </Router>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.shape({
        getState: PropTypes.func.isRequired,
        dispatch: PropTypes.func.isRequired,
        subscribe: PropTypes.func.isRequired,
    }),
};

export default Root;
