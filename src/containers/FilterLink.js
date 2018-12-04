import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const Link = ({ children, active, filter }) =>
    <NavLink
        to={`/${filter}`}
         style={{
             color: active ? 'orange' : ''
         }}
    >
        {children}
    </NavLink>

const mapStateToProps = (state, { filter }) => ({
    active: state.visibilityFilter === filter,
});

export default connect(mapStateToProps)(Link);
