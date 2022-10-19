import { TitleHeader, Image, Info } from "./styled";

export const Header = (props) => {
  return (
    <TitleHeader>
      <Info>
        <Image src={props.objeto.imagem} alt="N" />
        <h5>{props.objeto.name}</h5>
      </Info>
      Insta4
    </TitleHeader>
  );
};

// https://lh3.googleusercontent.com/a/ALm5wu0gm-wEyV4lo9sgpZujZ26PbBSvrAwDVPWYHnDDsg=s288-p-rw-no
