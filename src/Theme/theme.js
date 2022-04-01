import { createTheme } from "@mui/material/styles";
import Nunito_sans from "@fontsource/nunito-sans"


export const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
          main: '#5553FF',
        },
        secondary: {
          main: '#F7F8FD',
        },
      },
    typography:{
      fontFamily:[Nunito_sans, "sans-sarif"].join(",")
    },
    Button:{
      position:"static"
    }
})