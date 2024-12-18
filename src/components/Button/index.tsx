import classNames from "classnames";
import { Button as MuiButton } from "@mui/material";
import React from "react";
import { styles } from "./styles";

type Props = {
  /**Different variations of button component */
  variant: "primary" | "secondary";

  /**Sizes of component */
  size: "small" | "medium" | "large";

  /**Button Label */
  label: string | React.ReactNode;

  /**On Click handle for button */
  onClick: (event: React.SyntheticEvent) => void;
};

function Button(props: Props) {
  const { label, onClick, variant = "primary", size = "medium" } = props;
  const buttonClasses = classNames({
    buttonPrimary: variant === "primary",
    buttonSecondary: variant === "secondary",
  });
  return (
    <MuiButton
      onClick={onClick}
      className={buttonClasses}
      sx={styles.buttonDefaults}
      size={size}
    >
      {label}
    </MuiButton>
  );
}

export default Button;
