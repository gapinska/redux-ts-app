import { ActionType } from './../action-types/index';
import { Action } from "../actions"

interface RepositoriesState {
    loading: boolean
    error: string | null
    data: string[]
  }

const reducer = (
  state: RepositoriesState,
  action: Action
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
