
import { Send } from '@material-ui/icons'
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    height: 60vh;
    background-color: #fcf5f5;
    align-items: center;
    justify-content: center;

`;
const Title = styled.h1`
    

`;
const Description = styled.div`


`;
const InputContainer = styled.div`
   

`;
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`;
const Input = styled.input`
`;
const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get timely updates from your favourite products.</Description>
        <InputContainer>
            <Input placeholder='Your email'/>
            <Button>
                <Send />
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter
