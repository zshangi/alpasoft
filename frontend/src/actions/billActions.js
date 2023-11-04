import {
    BILL_LIST_REQUEST,
    BILL_LIST_SUCCESS,
    BILL_LIST_FAIL,
    BILL_DETAILS_REQUEST,
    BILL_DETAILS_SUCCESS,
    BILL_DETAILS_FAIL,

} from '../constants/BillConstatns'
import axios from 'axios'


export const fetchbills = () => async (dispatch) => {
    try {
        dispatch({ type: BILL_LIST_REQUEST })
        const { data } = await axios.get('/api/v1/electbill/')
        dispatch({
            type: BILL_LIST_SUCCESS,
            payload: data
        })
        console.log(data)

    } catch (error) {
        dispatch({
            type: BILL_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })

    }
}


export const fetchbillDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: BILL_DETAILS_REQUEST })
        const { data } = await axios.get(`/api/v1/bills/${id}`)

        dispatch({
            type: BILL_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: BILL_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })

    }
}