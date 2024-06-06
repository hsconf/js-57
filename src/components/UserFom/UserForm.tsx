
const UserForm = () => {
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
                />
            </div>
            <div className="form-group my-1">
                <label htmlFor="status">Status</label>
                <input
                    type="checkbox"
                    name="status"
                    id="status"
                    className="ms-1"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="role">Role</label>
                <select name="role" id="role" className="ms-1">
                    <option value="user">User</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Admin</option>
                </select>
            </div>
            <button type="submit" className="btn btn-dark px-3 mt-2 w-100">Save</button>
        </form>
    );
};

export default UserForm;