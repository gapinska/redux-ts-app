interface RepositoriesState {
  loading: boolean
  error: string | null
  data: string[]
}

enum ActionType {
  SEARCH_REPOSITORIES = "SEARCH_REPOSITORIES",
  SEARCH_REPOSITORIES_SUCCESS = "SEARCH_REPOSITORIES_SUCCESS",
  SEARCH_REPOSITORIES_ERROR = "SEARCH_REPOSITORIES_ERROR",
}

interface SearchRepositories {
  type: ActionType.SEARCH_REPOSITORIES
}

interface SearchRepositoriesSuccess {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS
  payload: string[]
}

interface SearchRepositoriesError {
  type: ActionType.SEARCH_REPOSITORIES_ERROR
  payload: string
}

const reducer = (
  state: RepositoriesState,
  action:
    | SearchRepositories
    | SearchRepositoriesSuccess
    | SearchRepositoriesError
): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] }
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, data: action.payload, error: null }
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, data: [], error: action.payload }
    default:
      return state
  }
}

export default reducer
