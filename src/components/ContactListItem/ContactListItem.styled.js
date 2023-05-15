import styled from '@emotion/styled';

export const ListItem = styled.li`
  font-weight: 500;

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const ListItemButton = styled.button`
  margin-left: 20px;
  padding: 5px;

  cursor: pointer;
  color: #fff;
  background-color: #970c10;
  border-radius: 10px;
  border: 1px solid transparent;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover {
    color: #970c10;
    background-color: #fff;
    border: 1px solid #970c10;
  }
`;
