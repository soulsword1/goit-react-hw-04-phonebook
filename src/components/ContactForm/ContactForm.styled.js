import styled from '@emotion/styled';

export const Form = styled.form`
  padding: 20px;
  width: 200px;
  min-height: 120px;

  border: 2px solid #647c90;
  border-radius: 10px;
`;

export const FormGroup = styled.div`
  &:not(:last-child) {
    padding-bottom: 10px;
  }
`;

export const FormLabel = styled.label`
font-weight: 700;
color: #647c90;
}
`;

export const FormInput = styled.input`
  box-sizing: border-box;
  margin-top: 5px;
  padding: 5px 0 5px 10px;

  width: 100%;
  outline: none;

  &:focus {
    outline: 2px solid #647c90;
  }

  &:last-child {
    margin-bottom: 10px;
  }
`;

export const FormSubmitBtn = styled.button`
  display: block;
  margin: 0 auto;
  padding: 10px;

  cursor: pointer;
  color: #fff;
  background-color: #647c90;
  border-radius: 5px;
  border: 1px solid transparent;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover,
  &:focus {
    color: #647c90;
    background-color: #fff;
    border: 1px solid #647c90;
  }
`;
