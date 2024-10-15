import styled from "styled-components";

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`

export const Task = styled.span`
  font-size: 16px;
  font-weight: 600;

  color: #2a282f;
`

export const DeleteBtn = styled.button`
  padding: 8px;

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