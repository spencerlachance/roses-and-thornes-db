import EpisodeList from "./episode-list";
import EpisodeEditor from "./episode-editor";
import SelectionList from "./../selections/selection-list"

const {HashRouter, Route} = window.ReactRouterDOM; 
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path="/selections/:season/:episode" component={SelectionList} />
                <Route path={["/episodes", "/"]} exact={true}>
                    <EpisodeList/>
                </Route>
                <Route path="/episodes/:season/:episodeNum" exact={true}>
                    <EpisodeEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
