import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding-bottom: 20px;
  padding-top: 15px;
`

export const Label = styled.label`
  color: #625f68;
`

export const Input = styled.input`
  width: 150px;
  padding: 5px;
  border: none;
  border-radius: 3px;
  background-color: #e0e0e0;
`

export const AddTask = styled.button`
  padding: 10px;

  font-size: 14px;
  font-weight: 600;
  line-height: 1.2;

  color: rgb(255, 255, 255);
  background: rgb(121, 73, 255);
  border-radius: 8px;
  border: none;

  cursor: pointer;

  &:hover {
    background: rgb(105, 52, 249);
    box-shadow: 0px 2px 3px rgba(105, 52, 249, 0.4);
    
    transform: translateY(-2px);
  }
`