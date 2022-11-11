import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Settings = () => {
const [qparams] = useSearchParams();
console.log("qparams", qparams.get("id"),qparams.keys());

  return (
    <div>
      Settings
      
    </div>
  )
}

export default Settings