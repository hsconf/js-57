import './App.css'
import UserForm from "./components/UserFom/UserForm";
import Users from "./components/Users/Users";
import {useState} from "react";
import {User} from "./type";

const App = () => {
    const [usersList, setUsersList] = useState<User[]>([
        {name: 'Nick', email: '@mail', status: true, role: 'admin', id: '1'},
    ]);

    const addUser = (user: User) => {
        setUsersList((prevState) => (
            [...prevState, user]
        ))
    }
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <UserForm onSubmit={addUser} />
                    </div>
                    <div className="col-3">
                        <Users usersList={usersList} />
                    </div>
                </div>

            </div>
        </>
    );
};

export default App
