import React, {useState, useEffect} from "react";
import "../../styles/css/style.css";
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import GoogleLogin from 'react-google-login';
import Icon from "../../components/GoogleLogin/Icon";
import {Avatar, Button, Typography} from '@material-ui/core';
import useStyles from './styles';
import * as actionType from '../../constants/actionTypes';
import decode from 'jwt-decode';

const Login = () => {
    const history = useHistory();
    const classes = useStyles();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    useEffect(() => {
        const token = user?.token;

        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, []);

    const dispatch = useDispatch();

    const googleError = (error) => {
        console.log(error);
        console.log("Google Sign In was unsuccessful. Try again later");
    };

    const googleSuccess = async  (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;
        
        try {
            dispatch({ type: 'AUTH', data: { result, token } })
            history.push('/login/success');
        } catch (e) {
            console.log(e);
        }
    };

    const logout = () => {
        dispatch({ type: actionType.LOGOUT });
        history.push('/');
        setUser(null);
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-6 offset-3 mt-4">
                    {user?.result ? (
                        <div className={classes.profile}>
                            <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                            <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
                            <Button variant="contained"  color="secondary" onClick={logout}>Logout</Button>
                        </div>
                    ) : (
                        <GoogleLogin
                            clientId="899715278971-ddph0g57slft61nl7bgp7mg3n0jqsr9q.apps.googleusercontent.com"
                            render={(renderProps) => (
                                <Button className={classes.googleButton} color="primary" fullWidth
                                        onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />}
                                        variant="contained">
                                    Google Sign In
                                </Button>
                            )}
                            onSuccess={googleSuccess}
                            onFailure={googleError}
                            cookiePolicy="single_host_origin"
                        />
                    )
                    }
                </div>
            </div>
        </div>
    );
};

export default Login;
