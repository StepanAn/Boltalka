import {createMuiTheme, ThemeProvider} from "@material-ui/core";
import Head from "./Components/Head";
import React, {createContext} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "./Components/Main/Main";
import ChatRoomsList from "./Components/ChatList/ChatRoomsList";
import {checkMyAuthentication, getMyAccount} from "./Models/Accounts/AccountController";
import Typography from "@material-ui/core/Typography";

const theme = createMuiTheme({
    status:{
      mainContrast: '#3DF582',
        mainColor:{
            main: '#F5CE25',
            light: '#FFFB21',
            dark: '#FAAD1E',
        },
    },
   palette:{
       mainColor:{
           main: '#f5ce25',
           light: '#FFFB21',
           dark: '#FAAD1E',
       },
   },
});
 export const MyAccount = createContext(getMyAccount());
 function App() {
     function getUI() {
         if (checkMyAuthentication()) {
             return(
                 <BrowserRouter>
                     <MyAccount.Provider value={getMyAccount()}>
                         <Switch>
                             <Head>
                                 <Route exact path="/" component={Main}/>
                                 <Route path="/chatRoomsList" component={ChatRoomsList}/>
                                 {/*<Route component={NotFound} />*/}
                             </Head>
                         </Switch>
                     </MyAccount.Provider>
                 </BrowserRouter>
             );
         } else {
             return (
                 <Typography>Ляляля</Typography>
             );
         }
     }

     return (
         <ThemeProvider theme={theme}>
             {getUI()}
         </ThemeProvider>
     );

 }
 export default App;
