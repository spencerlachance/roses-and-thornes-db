import SelectionList from "./selection-list";
import SelectionEditor from "./selection-editor";

const {HashRouter, Route} = window.ReactRouterDOM;
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path="/selections/:season/:episode" component={SelectionList} />
                <Route path={["/selections", "/"]} component={SelectionList} exact={true}/>
                <Route path="/selections/:id" exact={true}>
                    <SelectionEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
