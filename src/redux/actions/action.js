import axios from 'axios'
import { API } from '../../api'

export const getAllCars=()=>async dispatch=>{

    dispatch({type: 'LOADING' , payload:true})

    try {
        const response = await axios.get(`${API}/api/cars/getall`)
        dispatch({type: 'GET_ALL_CARS', payload:response.data})
        dispatch({type: 'LOADING' , payload:false})
    } catch (error) {
        console.log(error)
        dispatch({type: 'LOADING' , payload:false})
    }

}