import styled from 'styled-components';

export const BtnSubmit = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 150px;
  height: 50px;
  padding: 0;
  font-size: 16px;
  background-color: rgb(9, 107, 255);
  border: 0;
  border-radius: 30px;
  color: white;
  cursor: pointer;
  transition: hover 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: rgb(255, 163, 0);
  }
`;

export const DeleteBtn = styled.button`
  cursor: pointer;
  height: 50px;
  width: 50px;
  border-radius: 30px;
  border: 0;
  background-color: rgb(9, 107, 255);
  &:hover {
    background-color: rgb(255, 163, 0);
  }
`;