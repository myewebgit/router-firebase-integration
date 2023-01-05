import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
// import useFirebase from '../../hooks/useFirebase';

const auth = getAuth(app);

const Products = () => {
    const [user] = useAuthState(auth)
    // const {user} = useFirebase();
    return (
        <div>
            <h4>This is product page!!!!!!!</h4>
     <h5>Current user is : {user? user.displayName : 'Nooooooooooooooooooooooo body'}</h5>
        </div>
    );
};

export default Products;