import React from "react";
import { Navbar, Logo, NavigationLinks, NavLink, ButtonsContainer, LoginButton, GuestButton, HomeContainer, SchoolInfo, SchoolImage, Title, LoremTextContainer, AdminRegisterLink } 
from '../styles/styles';
import bg from "../assets/bg.png";
import bg1 from "../assets/bg1.png";
import { Link, useNavigate } from 'react-router-dom'; 

const Home = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/choose-user');
    };

    return (
        <>
            <Navbar>
                <Logo src={bg1} alt="Logo" />
                <NavigationLinks>
                    <NavLink href="#">About Us</NavLink>
                    <NavLink href="#">Products</NavLink>
                    <NavLink href="#">Contact Us</NavLink>
                </NavigationLinks>
                <ButtonsContainer>
                    <LoginButton onClick={handleLoginClick}>Sign In</LoginButton>
                    <GuestButton onClick={handleLoginClick}>Guest Mode</GuestButton>
                </ButtonsContainer>
            </Navbar>
            <HomeContainer>
                <SchoolInfo>
                    <Title>School Management System</Title>
                    <AdminRegisterLink to="/admin/register">Admin Register</AdminRegisterLink>
                </SchoolInfo>
                <SchoolImage src={bg} alt="pupils" />
            </HomeContainer>
        </>
    );
};

export default Home;