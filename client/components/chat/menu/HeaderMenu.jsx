import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Menu,MenuItem ,styled} from "@mui/material";
import { useState } from "react";


const MenuOption=styled(MenuItem)`
font-size:14px;
padding:15px 60px 5px 24px;
color:#4a4a4a;
`

function HeaderMenu() {

    const[open,setopen]=useState(null);


    function handleClose(){
        setopen(null);
    }

    function handleclick(e){
        setopen(e.currentTarget);
    }

  return (
    <>
      <MoreVertIcon onClick={handleclick}/>
      <Menu
        anchorEl={open}
        keepMounted
        open={open}
        getContentAnchorE1={null}
        onClose={handleClose}
        anchorOrigin={{
            vertical:'bottom',
            horizontal:'center'
        }}

        transformOrigin={{
            vertical:'top',
            horizontal:'right'
        }}
      >
        <MenuOption onClick={handleClose}>Profile</MenuOption>
        
      </Menu>
    </>
  );
}

export default HeaderMenu;
