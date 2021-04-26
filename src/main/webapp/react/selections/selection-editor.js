import selectionService from "../selections/selection-service"

const {useState, useEffect} = React
const {useParams, useHistory} = window.ReactRouterDOM

const SelectionEditor = () => {
    const {id} = useParams()
    const [selection, setSelection] = useState({})
    const [classifications, setClassifications] = useState([])
    const history = useHistory()
    let parentURL = window.location.href.split("/selections.html")[0]
    let isNew = false
    if (id === "new") {
        isNew = true
    }
    useEffect(() => {
        if (id !== "new") {
            findSelectionById(id)
        }
        selectionService.findAllClassifications()
            .then(classifications => {
                classifications.unshift("")
                setClassifications(classifications)
            })
    }, [])
    const findSelectionById = (id) =>
        selectionService.findSelectionById(id)
            .then(selection => setSelection(selection))
    const deleteSelection = (id) =>
        selectionService.deleteSelection(id)
            .then(() => history.goBack())
    const createSelection = (selection) =>
        selectionService.createSelection(selection)
            .then(() => history.goBack())
    const updateSelection = (id, newSelection) =>
        selectionService.updateSelection(id, newSelection)
            .then(() => history.goBack())

    return (
        <div>
            <h2>Selection Editor</h2>

            <label>Id</label>
            <input
                className="form-control"
                readOnly
                value={selection.id ? selection.id : ""}
            />
            <br/>

            <label>Season</label>
            <input
                className="form-control"
                onChange={(e) =>
                    setSelection(selection => ({...selection, season: e.target.value}))
                }
                value={selection.season ? selection.season : ""}
            />
            <br/>

            <label>Episode</label>
            {selection.episode && (
                <a
                    className="cross-editor-link"
                    href={`${parentURL}/episodes.html#/episodes/${selection.season}/${selection.episode}`}
                >
                    Edit
                </a>
            )}
            <input
                className="form-control"
                onChange={(e) =>
                    setSelection(selection => ({...selection, episode: e.target.value}))
                }
                value={selection.episode ? selection.episode : ""}
            />
            <br/>

            <label>Song ID</label>
            <input
                className="form-control"
                onChange={(e) =>
                    setSelection(selection => ({...selection, songId: e.target.value}))
                }
                value={selection.songId ? selection.songId : ""}
            />
            <br/>

            <label>User ID</label>
            {selection.userId && (
                <a
                    className="cross-editor-link"
                    href={`${parentURL}/users.html#/users/${selection.userId}`}
                >
                    Edit
                </a>
            )}
            <input
                className="form-control"
                onChange={(e) =>
                    setSelection(selection => ({...selection, userId: e.target.value}))
                }
                value={selection.userId ? selection.userId : ""}
            />
            <br/>

            <label>Classification</label>
                <select
                    className="form-select"
                    value={selection.classification ? selection.classification : ""}
                    onChange={(e) =>
                        setSelection(selection => ({...selection, classification: e.target.value}))
                    }
                >
                    {
                        classifications.map(classification =>
                            <option value={classification.classification}>
                                {classification.classification}
                            </option>
                        )
                    }
                </select>
            <br/>

            <button
                className="btn btn-warning"
                onClick={() => history.goBack()}
            >
                Cancel
            </button>

            {!isNew &&
                [
                    <button
                        className="btn btn-danger"
                        onClick={() => deleteSelection(selection.id)}
                    >
                        Delete
                    </button>,
                    <button
                        className="btn btn-primary"
                        onClick={() => updateSelection(selection.id, selection)}
                    >
                        Save
                    </button>
                ]
            }

            {isNew &&
                <button
                    className="btn btn-success"
                    onClick={() => createSelection(selection)}
                >
                    Create
                </button>
            }
        </div>
    )
}

export default SelectionEditor