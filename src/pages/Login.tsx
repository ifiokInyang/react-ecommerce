import { useState, MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { login } from "../redux/api/api";
import { UserDetails } from "../redux/userRedux";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 30%;
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
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-left: 30%;
  margin-bottom: 10px;
  &:disabled {
    color: teal;
    background-color: black;
    cursor: not-allowed;
  }
`;
const Link = styled.a`
  margin: 5px 0px;
  text-decoration: underline;
  cursor: pointer;
`;
const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [username, setUserName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isError, setIsError] = useState(false)
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector(UserDetails);

  const handleLogin = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <Input
            placeholder="password"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleLogin} disabled={isFetching}>
            LOG IN
          </Button>
          {error && <Error>Something went wrong...</Error>}
          <LinkWrapper>
            <Link>FORGOT PASSWORD?</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
          </LinkWrapper>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
