
import { Drawer, Typography,Box, typographyClasses } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import styled from "@emotion/styled";

//components
import Profile from "./Profile";

const drawerstyle={
    left:16,
    top:17,
    height:'94%',
    width:'31%',
    boxShadow:'none'
}

const Header=styled(Box)`
background:#008069;
height:107px;
color:#FFFFFF;
display:flex;

&>svg,&>p{
    margin-top:auto;
    padding:15px;
    font-weight:600;
};
`
const Component=styled(Box)`
background:#ededed;
height:85%;
`
const Text=styled(Typography)`
font-size:18px;
`

function InfoDrawer({open,setOpen}){

    function handleClose(){
        setOpen(false);
    }

    function handleArrowClick(){
        setOpen(false);
    }
    return (

        <Drawer
        open={open}
        onClose={handleClose}
        style={{zIndex:1500}}
        PaperProps={{sx:drawerstyle}}
        >
            <Header>
              <ArrowBack onClick={handleArrowClick}/>
              <Text>Profile</Text>
            </Header>
            <Component>
              <Profile />
            </Component>
        </Drawer>
    )
}


export default InfoDrawer;