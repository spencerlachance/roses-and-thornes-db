import userService from "./user-service";

const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;

function formatDate(date) {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + (d.getDate() + 1),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}

const UserEditor = () => {
    const {id} = useParams();
    const [user, setUser] = useState([]);
    const history = useHistory();
    let parentURL = window.location.href.split("/users.html")[0]
    useEffect(() => {
        if (id !== "new") {
            findUserById(id);
        }
    }, []);
    const findUserById = (id) =>
        userService.findUserById(id)
            .then(user => setUser(user));
    const deleteUser = (id) =>
        userService.deleteUser(id)
            .then(() => history.goBack());
    const createUser = (user) =>
        userService.createUser(user)
            .then(() => history.goBack());
    const updateUser = (id, newUser) =>
        userService.updateUser(id, newUser)
            .then(() => history.goBack());

    return (
        <div>
            <h2>User Editor</h2>

            <label>Id</label>
            <input
                className="form-control" readOnly value={user.id ? user.id : ""}
            />
            <br/>

            <label>First Name</label>
            <input
                className="form-control"
                onChange={(e) =>
                    setUser(user => ({...user, firstName: e.target.value}))
                }
                value={user.firstName ? user.firstName : ""}
            />
            <br/>

            <label>Last Name</label>
            <input
                className="form-control"
                onChange={(e) =>
                    setUser(user => ({...user, lastName: e.target.value}))
                }
                value={user.lastName ? user.lastName : ""}
            />
            <br/>

            <label>Username</label>
            <input
                className="form-control"
                onChange={(e) =>
                    setUser(user => ({...user, username: e.target.value}))
                }
                value={user.username ? user.username : ""}
            />
            <br/>

            <label>Password</label>
            <input
                className="form-control"
                onChange={(e) =>
                    setUser(user => ({...user, password: e.target.value}))
                }
                value={user.password ? user.password : ""}
            />
            <br/>

            <label>Email Address</label>
            <input
                className="form-control"
                onChange={(e) =>
                    setUser(user => ({...user, email: e.target.value}))
                }
                value={user.email ? user.email : ""}
            />
            <br/>

            <label>Date of Birth (yyyy-mm-dd)</label>
            <input
                className="form-control"
                onChange={(e) =>
                    setUser(user => ({...user, dateOfBirth: e.target.value}))
                }
                defaultValue={user.dateOfBirth ? formatDate(user.dateOfBirth) : ""}
            />
            <br/>

            {user.firstName && [
                <a href={`${parentURL}/selections.html#/user/${user.id}`}>
                    {user.firstName}'s Selections
                </a>,
                <br/>
            ]}
            <br/>

            <button
                className="btn btn-warning"
                onClick={() => history.goBack()}
            >
                Cancel
            </button>

            {user.id &&
                [
                    <button
                        className="btn btn-danger"
                        onClick={() => deleteUser(user.id)}
                    >
                        Delete
                    </button>,
                    <button
                        className="btn btn-primary"
                        onClick={() => updateUser(user.id, user)}
                    >
                        Save
                    </button>
                ]
            }

            {!user.id &&
                <button
                    className="btn btn-success"
                    onClick={() => createUser(user)}
                >
                    Create
                </button>
            }

        </div>
    )
}

export default UserEditor