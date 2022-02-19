import { ButtonComponent } from ".";

const Button = (props) => {
  return (
    <ButtonComponent
      classComponent={props.classComponent}
      style={props.style}
      onClick={props.onClick}
    >
      {props.children}
    </ButtonComponent>
  );
};

export default Button;
