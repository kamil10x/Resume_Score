import React, { useContext } from 'react'
import styles from './Login.module.css';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import GoogleIcon from '@mui/icons-material/Google';

import { auth, provider } from '../../utils/firebase';
import { signInWithPopup } from 'firebase/auth';
import { AuthContext } from '../../utils/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from '../../utils/axios';

const Login = () => {
    
    const {isLogin, setLogin, userInfo,setUserInfo} = useContext(AuthContext);
    const navigate = useNavigate();
    const  handleLogin = async()=>{
        try{
            const result = await signInWithPopup(auth, provider);
            console.log(result.user.photoURL);

            const user = result.user;

            const userData = {
                name:user.displayName,
                email:user.email,
                photoUrl:user.photoURL
            }

            await axios.post('/api/user', userData).then((response) =>{
                setUserInfo(response.data.user);
                localStorage.setItem("userInfo", JSON.stringify(response.data.user))

            }).catch(err =>{
                console.log(err)
            }) 

            setLogin(true);
            //setUserInfo(userData);
            localStorage.setItem("isLogin", true);
            //localStorage.setItem("userInfo", JSON.stringify(response.data.user))
            navigate('/dashboard');
        }catch(err){
            alert("Error occured");
            console.log(err);
        }
    }
    return (
    <div className={styles.Login}>
        <div className={styles.LoginCard}> 
            <div className={styles.LoginCardTitle}>
                
                <h1>Login</h1>
                <VpnKeyIcon />

            </div>
            <div className={styles.googleBtn} onClick={handleLogin}>
                <GoogleIcon sx={{ color: "#4285F4", fontSize: 30 }} /> Sign in with Google
            </div>

        </div>
    
    </div>
    )
}



export default Login
