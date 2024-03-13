import { Dialog, Typography,List,ListItem,Box ,styled} from "@mui/material";
import { qrCodeImage } from "../../constants/data";
import {GoogleLogin} from "@react-oauth/google";
import { jwtDecode } from "jwt-decode"
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";


const dialogStyle={
    height:'96%',
    marginTop:'12%',
    width:'60%',
    maxWidth:'100%',
    maxHeight:'100%',
    boxShadow:'none',
    overflow:'hidden'
}

const Component=styled(Box)`
display:flex;
`
const Container=styled(Box)`
padding:55px 0px 45px 45px;

`
const Title=styled(Typography)`
font-size:25px;
color:#525252;
font-weight:300;
font-family:inherit;
margin-bottom:25px; 
`
const StyledList=styled(List)`
&>li{
    padding:0;
    margin-top:15px;
    font-size:18px;
    line-height:28px;
    color:#4a4a4a;
}
`

const Qrcode=styled('img')({
    height:250,
    width:250,
    margin:'50px 33px 0px 45px'
})
function LoginDialog(){


    const {setAccount}=useContext(AccountContext);

    function onLoginSuccess(res){
       
        const decoded=jwtDecode(res.credential);
        console.log(decoded);
        setAccount(decoded);
    }

    function onLoginError(res){
        console.log("login Failed ",res);
    }
    return (
       
        <Dialog 
         open={true}
         PaperProps={{sx:dialogStyle}}
         hideBackdrop={true}
         >
         <Component>
            <Container>
              <Title>To use Whatsapp on your computer:</Title>
              <StyledList>
                  <ListItem>1. Open Whatsapp on your phone</ListItem>
                  <ListItem>2. Tap Menu setting and select Whatsapp web</ListItem>
                  <ListItem>3. Point your phone at this screen to capture the QR code</ListItem>
              </StyledList>
            </Container>
            <Box style={{position:'relative'}}>
              <Qrcode src={qrCodeImage} alt="qr code" />
              <Box style={{position:'absolute',top:'45%',left:'18%'}}>
                <GoogleLogin 
                    onSuccess={onLoginSuccess}
                    onError={onLoginError}
                />
              </Box>
            </Box>
         </Component>

        </Dialog>
       
        
    )
}

export default LoginDialog;