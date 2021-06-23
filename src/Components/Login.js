import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <ContentBox>
        <LogoOne src="/images/cta-logo-one.svg" />

        <SignUp>GET ALL HERE</SignUp>
        <Description>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
          dolorem expedita consequatur cupiditate, nobis commodi excepturi odit
          quaerat quibusdam? Commodi sequi sapiente expedita laborum quam
        </Description>
        <LogoTwo src="/images/cta-logo-two.png" />
      </ContentBox>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: top;

  &:before {
    background-image: url("/images/login-background.jpg");
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    opacity: 0.7;
  }
`;

const ContentBox = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 81%;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  align-items: center;
`;

const LogoOne = styled.img``;

const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  padding: 14px 0px;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  margin-top: 7px;
  margin-bottom: 12px;
  transition: all 250ms;
  letter-spacing: 3.4px;

  &:hover {
    background: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 11px;
  line-height: 1.5;
  letter-spacing: 1.5px;
  text-align: center;
  margin-bottom: 12px;
`;

const LogoTwo = styled.img`
  width: 90%;
`;
