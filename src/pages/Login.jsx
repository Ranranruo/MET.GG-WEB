import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
  width: 100%;
  height: 100vh;
`;
const Form = styled.form`
    width: 600px;
    height: 400px;
    border: 1px solid blue;
`;
export default function Login() {
  return (
    <Wrapper>
      <Form></Form>
    </Wrapper>
  );
}
