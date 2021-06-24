interface RepositoriesState {
  loading: boolean
  error: string | null
  data: string[]
}

const SEARCH_REPOSITORIES = "SEARCH_REPOSITORIES"
const SEARCH_REPOSITORIES_SUCCESS = "SEARCH_REPOSITORIES_SUCCESS"
const SEARCH_REPOSITORIES_ERROR = "SEARCH_REPOSITORIES_ERROR"

interface SearchRepositories {
  type: "SEARCH_REPOSITORIES"
}

interface SearchRepositoriesSuccess {
  type: "SEARCH_REPOSITORIES_SUCCESS"
  payload: string[]
}

interface SearchRepositoriesError {
  type: "SEARCH_REPOSITORIES_ERROR"
  payload: string
}

enum ActionType {
  SEARCH_REPOSITORIES = "SEARCH_REPOSITORIES",
  SEARCH_REPOSITORIES_SUCCESS = "SEARCH_REPOSITORIES_SUCCESS",
  SEARCH_REPOSITORIES_ERROR = "SEARCH_REPOSITORIES_ERROR",
}

const reducer = (
  state: RepositoriesState,
  action:
    | SearchRepositories
    | SearchRepositoriesSuccess
    | SearchRepositoriesError
): RepositoriesState => {
  switch (action.type) {
    case SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] }
    case SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, data: action.payload, error: null }
    case SEARCH_REPOSITORIES_ERROR:
      return { loading: false, data: [], error: action.payload }
    default:
      return state
  }
}

export default reducer
