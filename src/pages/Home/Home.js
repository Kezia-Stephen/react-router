import React, {Component, useState, useContext, useEffect } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { stateContext } from '../../Context/StateContext';
import axios from "axios";
// import this way or
// import Button from '@mui/material/Button';
// this way
import {Button, Checkbox, FormControlLabel} from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
//react-redux
import { useSelector, useDispatch } from 'react-redux';
import { incrementAge, addTask } from '../../Context/slice';


const Home = () => {
    const [username, setUserName] = useState("Tachi");
    const [userpwd, setUserPwd] = useState("12234");
    const [error, setError] = useState();
    // Array push
    const [tasks,setTasks] = useState([]);
    const [todos, setTodos] = useState([]);
    // State Context
    // const state = useContext(stateContext);
    // reducer context
    // const {state, dispatch} = useContext(stateContext);
    // const state = useSelector((data)=> data).sample;
    const state = useSelector((data)=> data);
    const dispatch = useDispatch();
    console.log("StateContext", state);
    const navigate = useNavigate();

    // fetchApi
    useEffect(() => {
        fetchTodos();
    }, []);

    //promise written
    // const fetchApi = () => {
    //     fetch('https://jsonplaceholder.typicode.com/todos/1')
    //     .then(response => response.json())
    //     .then(json => console.log("JSON ", json))
    // }
    //fetchApi ends

    // const fetchTodos = () => {
    //     fetch('https://jsonplaceholder.typicode.com/todos')
    //     .then(response => response.json())
    //     .then(json => setTodos(json));
    // };

    //asyn/await for the same api
    const fetchTodos = async() => {
    const res= await fetch('https://jsonplaceholder.typicode.com/todos');
    const json = await res.json()
    console.log("res", json);
    setTodos(json);
    };

    useEffect(() => {
        fetchTodosAxios();
    }, []);

    //axios
    const fetchTodosAxios = async() => {

        const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
        console.log("axios",res);
        console.log("axios", res?.data);
        setTodos(res?.data);
    }

    const gotoAbout = () => {
        navigate("about");
    }
    const gotoProfile = () =>{
        navigate("profile/56");
    }
    // Queryparams
    const gotoSettings = () =>{
        navigate({
            pathname: 'settings',
            search: "?id=26"
            // To pass multiple queryparams, search: "?id=26&name-uissi&service=000"
        });
    };

    // Form functions
    const handleUserName = (event) => {
        console.log("event", event);
        setUserName(event.target.value);
    };

    const handleUserPwd = (pwd) => {
        setUserPwd(pwd.target.value);
    }

    const handleUserInput = (event) => {
        console.log("event", event);
        if(event.target.value === ""){
            setError("Oops! Data not enough");
        }else{
            setError("");
        }
        if(event.target.name === 'username') {
            setUserName(event.target.value);
        }
        else{
            setUserPwd(event.target.value);
        }
    }

    const handleSubmit = (event) => {
        
        event.preventDefault();
        if (username === "" || userpwd === ""){
            setError("Oops! Data not enough");
            return;
        }
        setError("");
        // event.stopPropagation();
        //object console
        const temp = {
            username, userpwd
        };
        // Push without overriding

        // setTasks([...tasks, temp]);
        // console.log("state", username, userpwd);
        // reducer context
        // dispatch({type: "add_task", payload: [...state.tasks, temp]});
        // console.log("state", temp);

        // react-redux dispatch
        dispatch(addTask([...state.tasks, temp]));
        console.log("react-redux state", temp);
    }

    // reducer context
    const updateAge = () => {
        // dispatch({type: "increment_age"})
        //react-redux dispatch
        dispatch(incrementAge());
    }
  return (
    // Instead of div, use React.Fragment to wrap, but styles cannot be applied to React.Fragment
    // Or use empty tag <> </>
    <React.Fragment>
        Home Component
        <Button>Login</Button>
        <NotificationsIcon style={{color: "#F2D7D9"}}/>
        <AirplanemodeActiveIcon color = "secondary"/>
        <Button color="success" variant="contained">Login</Button>
        <Button style={{background : "#00ABB3", color:"#562B08"}} variant="contained">Login</Button>
        <Checkbox>check</Checkbox>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
        {/* reducer context */}
        <h2>{state?.age}</h2>
        {/* Param */}
        {/* <Link to="profile">Go to Profile</Link> */}
        {/*Params */}
        <Link to="profile?id=1">Go to Profile</Link>
        <Link to="settings?id=26">Go to Settings</Link>
        {/* {
            username: 'kez',
            userpwd: 'euge'
        } */}
        <button onClick={() => gotoAbout()}>About</button>
        <button onClick={() => gotoProfile()}>Profile</button>
        <button onClick={() => gotoSettings()}>Settings</button>
        {/* reducer context */}
        <button onClick={() => updateAge()}>Increment Age</button>
        {/* fetchTodos */}
        {/* {todos?.map((item, index) => (
         <p key={index}>{item?.title}</p>
        ))} */}
        {/* Form Inputs */}
        <form onSubmit={handleSubmit}>
            {/* <input value={"test"}/> */}
            {/* <input value = {username} onChange={handleUserName}/>
            <input value = {userpwd} onChange={handleUserPwd}/> */}

            {/* Use The same function to set user name and pwd */}
            <input value = {username} name="username" onChange={handleUserInput}/>
            <input value = {userpwd} name="userpwd" type="password" onChange={handleUserInput}/>
            {/* <button onClick={(event)=> handleSubmit(event)}>Submit</button> */}

            {/* or you can use submit this way */}
            <input type="submit"/>
            {/* You have change the form with onSubmit */}
        </form>
        {/* push task/loop through tasks */}
        {state.tasks?.map((item, index)=> 
        <p key={index}>
            {item.username}
        </p>)}
        <h3>{error}</h3>
    </React.Fragment>
  )
}

export default Home
