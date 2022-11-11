import React, {useContext} from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { stateContext } from '../../Context/StateContext';

const Profile = () => {
const params = useParams();
// State Context
const {state, dispatch} = useContext(stateContext);
console.log("StateContext in Profile", state);
console.log("params",params);
const [qparams] = useSearchParams();
var idname = qparams.get("id");
console.log("qparams", qparams.get("id"),qparams.keys());
  return (
    <div>
        Profile Component in file order
        <Link to="/about">Go to About</Link>
        {state.name} {idname}
        <button onClick={() =>dispatch({type: 'update_name', payload: 'React squared'}) }>Update Name</button>
    </div>
  )
}

export default Profile