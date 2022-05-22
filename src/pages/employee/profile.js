import React, {useContext, useEffect, useState} from "react";
import Layout from '../../components/layout'
import {UserContext} from '../../contexts/userContext';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

const Profile = (props) => {
    const userContext = useContext(UserContext);
    const {user} = userContext.state;
    const [userInfo, setUserInfo] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        if(user.type === "employee") {
            setUserInfo(user);
        } else { 
            fetchUserInfo();
        }
    }, [user]);

    function fetchUserInfo() {
        //make api to fetch user data based on user id -> props.id
        let info = {"id":2,"name":"Dimple Balchandani","email": "user@intuit.com", "skills":"Aenean fermentum.Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.","url":"www.github.com","experience":"6 years","location":"Bangalore"};
        setUserInfo(info);
    }

    function editProfile() {
        navigate("/edit-profile", { replace: true });
    }

    return (
        <Layout title="Profile">
            <Container className="p-5 mb-4 bg-light rounded-3">
                <div>
                    <div><b>Name : </b>{userInfo.name}</div>
                    <div><b>Email : </b>{userInfo.email}</div>
                    <div><b>Github Url : </b>{userInfo.url}</div>
                    <div><b>Skills : </b>{userInfo.skills}</div>
                    <div><b>Location : </b>{userInfo.location}</div>
                    <div><b>Experience : </b>{userInfo.experience}</div>
                </div>
                {user.type === "employee" && <Button onClick={editProfile}>Edit Profile</Button>}
            </Container>
        </Layout>
    );
}

export default Profile;