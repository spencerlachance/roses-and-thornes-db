import EpisodeList from "./episodes/episode-list";
import EpisodeEditor from "./episodes/episode-editor";

const {HashRouter, Route} = window.ReactRouterDOM; 
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
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
