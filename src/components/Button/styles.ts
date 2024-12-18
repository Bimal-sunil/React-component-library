import { SxProps, Theme } from "@mui/material";

export const styles: Record<string, SxProps<Theme>> = {
  buttonDefaults: {
    borderRadius: "25px",
    "&.buttonPrimary": {
      background: "#f5b342",
      color: "#515151",
      border: "1px solid transparent",
    },
    "&.buttonSecondary": {
      background: "transparent",
      color: "#f5b342",
      border: "1px solid #f5b342",
    },
  },
};
