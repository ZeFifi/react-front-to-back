import React from 'react';
import PropTypes from "prop-types";

// Destructuring props on the line after, instead of doing const { login, avatar_url, html_url } = this.props.user;
const UserItem = ({ user: { login, avatar_url, html_url } }) => {
        return (
            <div className="card text-center">
                <img src={avatar_url}
                     alt={login}
                     className="round-img"
                     style={{ width: "60px" }} />
                <h3>{login}</h3>
                <div><a href={html_url} className="btn btn-dark btn-sm my-1">More</a></div>
            </div>
        );
};

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
};

export default UserItem;
