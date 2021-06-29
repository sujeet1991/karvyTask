import { GET_PENDING,} from './type';

export function formSubmit(data) {
    
    return {
        type: GET_PENDING,
        payload:data
    }
}
