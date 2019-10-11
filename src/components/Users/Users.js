import React, {Component} from 'react';
import UserItem from "./UserItem";

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
            {
                id: "1",
                login: "mojombo",
                avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
                html_url: "https://github.com/mojombo",
            },
            {
                id: "5550850",
                login: "bradtraversy",
                avatar_url: "https://avatars2.githubusercontent.com/u/5550850?v=4",
                html_url: "https://github.com/bradtraversy",
            },
            {
                id: "8557435",
                login: "ZeFifi",
                avatar_url: "https://avatars1.githubusercontent.com/u/8557435?v=4",
                html_url: "https://github.com/ZeFifi",
            },

        ]}
    }

    render() {
        const userStyle = {
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridGap: "1rem",
        };

        return (
            <div style={userStyle}>
                {this.state.users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        );
    }
}

export default Users;
