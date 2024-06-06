import React, {useState} from "react";
import {User, UserMute} from "../../type";

interface Props {
    onSubmit: (user: User) => void;
}

const UserForm: React.FC<Props> = ({onSubmit}) => {

    const [usersMute, setUsersMute] = useState<UserMute>({
        name: '',
        email: '',
        status: false,
        role: '',
        id: ''
    });

    const changeUser = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setUsersMute((prevState) => ({
                ...prevState,
                [event.target.name]: event.target.value
            }
        ))
    }

    const onFormSubmit = (event: React.FormEvent) => {
        event.preventDefault()

        onSubmit ({
            ...usersMute, id: Math.random().toString()
        })

        setUsersMute({
            name: '',
            email: '',
            status: false,
            role: '',
            id: ''
        })
    }

    return (
        <form>
            <h4>Register new user!</h4>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    required
                    onChange={changeUser}
                    value={usersMute.name}
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    required
                    onChange={changeUser}
                    value={usersMute.email}
                />
            </div>
            <div className="form-group my-1">
                <label htmlFor="status">Status</label>
                <input
                    type="checkbox"
                    name="status"
                    id="status"
                    className="ms-1"
                    checked={usersMute.status}
                    onChange={changeUser}
                />
            </div>
            <div className="form-group">
                <label htmlFor="role">Role</label>
                <select name="role" id="role" value={usersMute.role} onChange={changeUser} className="ms-1">
                    <option value="">Selecet</option>
                    <option value="user">User</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Admin</option>
                </select>
            </div>
            <button onClick={onFormSubmit} type="submit" className="btn btn-dark px-3 mt-2 w-100">Save</button>
        </form>
    );
};

export default UserForm;