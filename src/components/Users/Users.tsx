import UserItem from "./UserItem";
import {User} from "../../type";
import React from "react";

interface Props {
    usersList: User[];
}

const Users: React.FC<Props> = ({usersList}) => {

    return (
        <>
          <h4>Users list</h4>
            {usersList.map((user) => (
                <UserItem key={user.id} user={user} />
            ))}
        </>
    );
};

export default Users;