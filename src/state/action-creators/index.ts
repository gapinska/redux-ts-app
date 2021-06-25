import axios from 'axios'
import { ActionType } from '../action-types'
import { Action } from '../actions'

const searchRpositories = (term: string) => {
    return async (dispatch: any) => {
        dispatch({
            type: ActionType.SEARCH_REPOSITORIES
        })

        try {
            const { data } = await axios.get('https://registry.npmjs.org')

        } catch (err) {
            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_ERROR,
                payload: err.message
            })
        }
    }
}