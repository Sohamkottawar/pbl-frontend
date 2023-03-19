import { useState } from 'react';
import Login from '../pages/login/login';
import CompleteLogin from '../pages/login/completeLogin';

function Auth() {
  const [id, setID] = useState('2');

  return (
    <>
      {id === '' ? <Login setID={setID} /> : <CompleteLogin id={id} />}
    </>
  );
}

export default Auth;