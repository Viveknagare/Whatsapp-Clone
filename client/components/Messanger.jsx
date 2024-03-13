import {AppBar ,Toolbar ,styled,Box} from "@mui/material";
import { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";

//components
import LoginDialog from "./accounts/LoginDialog";
import ChatDialog from "./chat/ChatDialog";


const LoginHeader=styled(AppBar)`
height:200px;
background:#00bfa5;
box-shadow:none;
`

const ChatHeader=styled(AppBar)`
height:125px;
background:#00A884;
box-shadow:none;
`

const Container=styled(Box)`
height:100vh;
background:#DCDCDC;
`

function Messanger(){

    const{account}=useContext(AccountContext);
    return(
        <Container>
           {account?
           <>
               <ChatHeader>
                   <Toolbar>

                   </Toolbar>
               </ChatHeader>
           
             <ChatDialog />
           </>
           :
           <>
             <LoginHeader>
                 <Toolbar></Toolbar>
             </LoginHeader>
             <LoginDialog />
             </>
           }
        </Container>
        
    )
}

export default Messanger;