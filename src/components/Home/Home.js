import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
// import useFirebase from '../../hooks/useFirebase';

const auth = getAuth(app);

const Home = () => {
    const [user] = useAuthState(auth)
    // const {user} = useFirebase();
    return (
        <div>
            <h4>This is home</h4>
            <h5>Current user is : {user? user.displayName : 'No body'}</h5>
        </div>
    );
};

export default Home;