import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Header from '../component/Header'
import ProfileForm from '../component/ProfileForm'
import { getLoggedInUserAsync, selectCustomer } from '../features/userSlice';

const Profile = () => {
    const user = useSelector(selectCustomer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLoggedInUserAsync());
        return () => {}
    }, [dispatch])

    return (
        <div className="profile"> 
            <Header linkTo="/order" label="Buy fruits" />
            <div className="profile__form form__wrapper">
                { user && <ProfileForm currentUser={user} /> } 
            </div>
        </div>
    )
}

export default Profile
