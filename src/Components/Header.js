import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "../App.css";
import {
  selectUserName,
  selectUserPhoto,
  setUserLogin,
  setSignOut,
} from "../features/user/userSlice";
import { useSelector } from "react-redux";
import { auth, provider } from "../firebase";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

// import Fade from "react-reveal/Fade";

const Header = () => {
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const dispatch = useDispatch();
  const history = useHistory();
  const [burgerStatus, setBurgerStatus] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        history.push("/");
      }
    });
  }, []);

  const SignIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      let user = result.user;
      dispatch(
        setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      );
      history.push("/");
    });
  };

  const SignOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOut());
      history.push("/login");
    });
  };

  return (
    <Nav>
      <CustomMenu onClick={() => setBurgerStatus(true)}>
        <MenuIcon />
      </CustomMenu>
      <Link to="/">
        {" "}
        <Logo src="/images/logo.svg" />{" "}
      </Link>

      {!userName ? (
        <LoginContainer>
          <Login onClick={SignIn}>LOGIN</Login>
        </LoginContainer>
      ) : (
        <>
          <NavMenu className="classNav">
            <a href="">
              <img src="/images/home-icon.svg" alt="home" />
              <span>HOME</span>
            </a>
            <a href="">
              <img src="/images/search-icon.svg" alt="home" />
              <span>SEARCH</span>
            </a>
            <a href="">
              <img src="/images/watchlist-icon.svg" alt="home" />
              <span>WATCHLIST</span>
            </a>
            <a href="">
              <img src="/images/original-icon.svg" alt="home" />
              <span>ORIGINAL</span>
            </a>
            <a href="">
              <img src="/images/movie-icon.svg" alt="home" />
              <span>MOVIES</span>
            </a>
            <a href="">
              <img src="/images/series-icon.svg" alt="home" />
              <span>SERIES</span>
            </a>
          </NavMenu>

          <BurgerNav show={burgerStatus}>
            <CustomClose onClick={() => setBurgerStatus(false)}>
              <CloseIcon />
            </CustomClose>

            <a href="">
              <img src="/images/home-icon.svg" alt="home" />
              <span>HOME</span>
            </a>
            <a href="">
              <img src="/images/search-icon.svg" alt="home" />
              <span>SEARCH</span>
            </a>
            <a href="">
              <img src="/images/watchlist-icon.svg" alt="home" />
              <span>WATCHLIST</span>
            </a>
            <a href="">
              <img src="/images/original-icon.svg" alt="home" />
              <span>ORIGINAL</span>
            </a>
            <a href="">
              <img src="/images/movie-icon.svg" alt="home" />
              <span>MOVIES</span>
            </a>
            <a href="">
              <img src="/images/series-icon.svg" alt="home" />
              <span>SERIES</span>
            </a>
          </BurgerNav>

          <UserImg onClick={SignOut} src={userPhoto} />
        </>
      )}
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  background: black;
  color: white;
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 35px;
  overflow-x: hidden;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 80px;
  @media (max-width: 832px) {
    margin-left: -80px;
  }
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 26px;
  margin-top: 12px;
  align-items: center;
  @media (max-width: 832px) {
    // display: flex;
    // flex-direction: column;
    display: none;
  }
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    color: white;
    cursor: pointer;
    text-decoration: none;

    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      position: relative;
      letter-spacing: 1.42px;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transition: all 250ms cubic-beizer(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }

    &:hover {
      span::after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  margin-top: 8px;
`;

const Login = styled.div`
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  transition: 0.2s;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.5);

  &:hover {
    background-color: #f9f9f9;
    color: black;
    border-color: transparent;
  }
`;

const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const CustomMenu = styled.div`
  display: flex;
  float: left;
  margin-top: 6px;
  cursor: pointer;

  @media (min-width: 832px) {
    display: none;
  }
`;

const BurgerNav = styled.div`
  position: fixed;
  top: -0rem;
  left: 0rem;
  z-index: 1000;
  width: 190px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: black;
  transition: 0.3s ease-in all;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};

  a {
    display: flex;
    margin-top: 20px;
    margin-left: 23px;
    margin-bottom: 30px;
    align-items: center;
    padding: 0 12px;
    color: white;
    cursor: pointer;
    text-decoration: none;

    img {
      height: 20px;
      margin-right: 5px;
    }
    span {
      font-size: 13px;
      position: relative;
      letter-spacing: 1.42px;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transition: all 250ms cubic-beizer(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }

    &:hover {
      span::after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const CustomClose = styled.div`
  margin-left: 130px;
  cursor: pointer;
  margin-top: 10px;
`;
