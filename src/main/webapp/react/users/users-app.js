import UserList from "./user-list";
import UserEditor from "./user-editor";

const {HashRouter, Route} = window.ReactRouterDOM; 
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/users", "/"]} exact={true}>
                    <UserList/>
                </Route>
                <Route path="/users/:id" exact={true}>
                    <UserEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
