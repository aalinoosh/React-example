
import './App.css';

import React from 'react'
import {useCallback,Button }from 'react'


function Mclick() {
  const memoizedHandleClick = useCallback(
    () => {
      console.log('Click happened');
    },
    [], // Tells React to memoize regardless of arguments.
  );




  return
   <Button onClick={memoizedHandleClick}>Click Me</Button>;
}

export default Mclick;
