import React from "react";
import {
  Form,
  FormContainer,
  Input,
  SendButton,
  StyledLabel
} from "../FormularioPostagem/styled";

const FormularioLogin = (props) => {
  const login = (event) => {
    props.setPageFlow(2);

    const objetoGlobal = {
      name: props.nome,
      imagem: props.fotoPerfil
    };
    props.setObjeto(objetoGlobal);
  };
  const onChangeNome = (event) => {
    props.setNome(event.target.value);
  };
  const onChangeFotoPerfil = (event) => {
    props.setFotoPerfil(event.target.value);
  };
  return (
    <FormContainer>
      <Form>
        <StyledLabel>
          Nome:
          <Input type={"text"} onChange={onChangeNome} value={props.nome} />
        </StyledLabel>
        <StyledLabel>
          Foto de Perfil
          <Input
            type={"text"}
            onChange={onChangeFotoPerfil}
            value={props.fotoPerfil}
          />
        </StyledLabel>
        <SendButton onClick={login}>Fazer Login</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioLogin;
