import { getMoviesFailure, getMoviesStart, getMoviesSuccess } from "./MovieActions";
import axios from "axios";


export const getMovies= async (dispatch)=>{
   dispatch (getMoviesStart());
try {
    const res= await axios.get("/movie",{headers:{token:"Bearer"+JSON.parse(localStorage.getItem("user")).token}})
    dispatch(getMoviesSuccess(res.data));
} catch (err) {
    dispatch(getMoviesFailure());
    
}
};