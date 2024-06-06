import React from "react";
import {User} from "../../type";

interface Props {
    user: User;
}

const UserItem: React.FC<Props> = ({user}) => {
    return (
        <div className="card p-1 mb-1">
            <p className="card-title">Name: {user.name}</p>
            <p className="card-text">Email: {user.email}</p>
            {user.status ? (
                <p className="card-text">Status: Online</p>
            ) : <p className="card-text">Status: Offline</p>}
            <p className="card-text">Role: {user.role}</p>
        </div>
    );
};

export default UserItem;