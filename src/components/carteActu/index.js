import React from 'react'
import { JssProvider } from 'react-jss';
import { createGenerateClassName } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CartComponent from './CartComponent';
import { ActuData } from '../../data/ActuData';
const muiBaseTheme = createMuiTheme();

const generateClassName = createGenerateClassName({
  dangerouslyUseGlobalCSS: true
});
  
const CartActu  = (props) =>  {
     
    const {data} =  props
    return (
        <JssProvider generateClassName={generateClassName}>
        <MuiThemeProvider
          theme={createMuiTheme({
            typography: {
              useNextVariants: true
            },
            overrides: CartComponent.getTheme(muiBaseTheme)
          })}
        >
            <CartComponent  data={data} />
            </MuiThemeProvider>
    </JssProvider>
    )
}

export default CartActu
