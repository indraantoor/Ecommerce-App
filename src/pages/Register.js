import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?cs=srgb&dl=pexels-fauxels-3184454.jpg&fm=jpg")
      center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const endpoint = "http://localhost:5000/api/users";
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    axios
      .post(endpoint, {
        username,
        email,
        password,
      })
      .then(navigate("/"))
      .catch((error) => {
        navigate("/register");
        window.alert("Something went wrong. Try again.");
      });
  };

  console.log(username, password, email);

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" required />
          <Input placeholder="last name" required />
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <Input
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Input placeholder="confirm password" required />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={(e) => handleClick(e)}>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
