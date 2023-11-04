import {
    BILL_LIST_REQUEST,
    BILL_LIST_SUCCESS,
    BILL_LIST_FAIL,
    BILL_DETAILS_REQUEST,
    BILL_DETAILS_SUCCESS,
    BILL_DETAILS_FAIL,

} from '../constants/BillConstatns'


export const listBillReducer = (state = { bills: [] }, action) => {

    switch (action.type) {
        case BILL_LIST_REQUEST:
            return { bills: [], loading: true }
        case BILL_LIST_SUCCESS:
            return { bills: action.payload, loading: false }
        case BILL_LIST_FAIL:
            return { error: action.payload, loading: false }
        default:
            return state
    }
}

export const detailsBillReducer = (state = { bill: [] }, action) => {

    switch (action.type) {
        case BILL_DETAILS_REQUEST:
            return { ...state, loading: true }
        case BILL_DETAILS_SUCCESS:
            return { bill: action.payload, loading: false }
        case BILL_DETAILS_FAIL:
            return { error: action.payload, loading: false }
        default:
            return state
    }
}