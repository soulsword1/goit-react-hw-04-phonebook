import styled from '@emotion/styled';

export const FilterForm = styled.form`
  margin-bottom: 20px;
`;

export const FilterLabel = styled.label`
  font-weight: 700;
  color: #647c90;
`;

export const FilterInput = styled.input`
  padding: 5px 0 5px 10px;
  margin-left: 10px;

  outline: none;
  font-weight: normal;
  color: #3B3B3B;

  &:focus {
    outline: 2px solid #647c90;
  }
`;
