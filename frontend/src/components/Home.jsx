import React from "react";
import { 
  Navbar, 
  Logo, 
  NavigationLinks, 
  NavLink, 
  HomeContainer, 
  MainContent, 
  HeroImage, 
  Title, 
  Subtitle,
  ButtonContainer,
  PrimaryButton,
  SecondaryButton 
} from '../styles/styles';
import bg from "../assets/bg.png";
import bg1 from "../assets/bg1.png";
import { useNavigate } from 'react-router-dom';

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
            </Navbar>
            <HomeContainer>
                <MainContent>
                    <Title>Track your academic progress</Title>
                    <Subtitle>Stay organized and monitor your learning journey with our school diary system</Subtitle>
                    <HeroImage src={bg} alt="Creative community" />
                    <ButtonContainer>
                        <PrimaryButton onClick={handleLoginClick}>Sign In</PrimaryButton>
                        <SecondaryButton onClick={handleLoginClick}>Guest Mode</SecondaryButton>
                    </ButtonContainer>
                </MainContent>
            </HomeContainer>
        </>
    );
};

export default Home;
