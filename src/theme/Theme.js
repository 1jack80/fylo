import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./Global.styled";

const theme = {
  colors: {
    darkBlue1:
      /* (intro and email sign up background):  */ "hsl(217, 28%, 15%)",
    darkBlue2: /* (main background):  */ "hsl(218, 28%, 13%)",
    darkBlue3: /* (footer background):  */ "hsl(216, 53%, 9%)",
    darkBlue4: /* (testimonials background):  */ "hsl(219, 30%, 18%)",

    cyan: /* (inside call-to-action gradient): */ "hsl(176, 68%, 64%)",
    blue: /* (inside call-to-action gradient): */ "hsl(198, 60%, 50%)",
    lightRed: /* (error): */ "hsl(0, 100%, 63%)",

    white: "hsl(0, 0%, 100%)",
    gray: "hsl(0, 0%,  75%)",
  },

  font: {
    size: {
      xSmall: "10px",
      small: "12px",
      medium: "14px",
      large: "18px",
      xLarge: "22px",
      xxLarge: "24px",
    },
    family: {
      primary: `"Open Sans", sans-serif`,
      secondary: `"Raleway Regular", sans-serif`,
    },
    weight: {
      bold: "700",
      normal: "400",
    },
  },
  breakpoint: {
    mobile: "375px",
    tablet: "600px",
    laptop: "1200px",
    desktop: "1600px",
  },
  layout: {
    containerPadding: "5%",
  },
};

function Theme({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}

export default Theme;
