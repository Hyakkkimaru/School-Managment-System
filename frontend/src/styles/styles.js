import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 5%;
  background: linear-gradient(90deg, #1a1a2e, #16213e);
  color: white;
  font-family: 'Arial', sans-serif;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`;

export const Logo = styled.img`
  width: 50px;
  height: auto;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));

  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const NavigationLinks = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-left: auto;
  padding-right: 120px;

  @media screen and (max-width: 768px) {
    margin: 15px 0 0;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
    padding-right: 0;
    width: 100%;
  }
`;

export const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  padding: 8px 12px;
  border-radius: 4px;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    background: rgba(255,255,255,0.1);
    transform: translateY(-2px);
  }

  @media screen and (max-width: 768px) {
    font-size: 12px;
    padding: 6px 10px;
  }
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg, #0f0c29, #302b63);
  min-height: 100vh;
  width: 100vw;
  padding: 0;
  overflow: hidden;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;

  @media screen and (max-width: 768px) {
    padding-top: 80px;
  }
`;

export const MainContent = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 100px 5% 20px;
  box-sizing: border-box;
  margin-top: 60px;

  @media screen and (max-width: 768px) {
    padding-top: 80px;
    margin-top: 40px;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: white;
  margin: 0;
  line-height: 1.2;
  text-shadow: 0 2px 4px rgba(0,0,0,0.2);

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  color: rgba(255,255,255,0.9);
  max-width: 700px;
  margin: 0;
  line-height: 1.5;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const HeroImage = styled.img`
  width: 100%;
  max-width: 800px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  margin: 20px 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    width: 100%;
    max-width: 300px;
  }
`;

export const PrimaryButton = styled.button`
  background: #2a3f5f;
  color: white;
  border: none;
  padding: 12px 30px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #3a4f6f;
  }
`;

export const SecondaryButton = styled.button`
  background: #2a3f5f;
  color: white;
  border: none;
  padding: 12px 30px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #3a4f6f;
  }
`;
