import React,{useState,useEffect,Fragment} from 'react';
import Input from '../../molecules/input';
import {emailText,numberText,pwdText} from '../../../helper/method';
import {formSubmit} from '../../../store/Action/master';
import {useSelector, useDispatch} from 'react-redux';
import ApiAll from '../../../services/loginApi';
import {withRouter,Redirect} from 'react-router-dom';
import Grid from '../../molecules/home';
let  api= new ApiAll();

const Landing=(props)=>{
    const [apiData,setApiData]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
  .then(response => response.json())
  .then(json =>
    setApiData(json)
     
  )
    },[])
   if(apiData.length===0){
       return "Please wait.."
   }
    return(
        
        <div class="container">
            {apiData.length>0?
            <div class="row justify-content-center">
                {apiData.slice(0, 20).map((curr,index)=>{
                    return(
                        <Grid name={curr.name} email={curr.email} key={index}/>
                    )
                })}
                
            </div>:null}

               
            </div>
    )
}
export default withRouter(Landing)