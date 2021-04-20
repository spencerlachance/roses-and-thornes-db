import userService from "./user-service"

const {useState, useEffect} = React;
const {Link, useHistory} = window.ReactRouterDOM;

const UserList = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        userService.findAllUsers()
            .then(users => setUsers(users))
    }, []);
    const history = useHistory();

    return (
        <div>
            <h2>User List</h2>
            <button className="btn btn-primary" onClick={() => history.push("/users/new")}>
                Add User
            </button>
            <ul className="list-group">
                {
                    users.map(user =>
                        <li key={user.id}>
                            <Link to={`/users/${user.id}`}>
                                {user.firstName} {user.lastName}
                            </Link>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default UserList;