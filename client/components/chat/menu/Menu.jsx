import { Box } from "@mui/material";

//components
import MenuHeader from "./MenuHeader";
import Search from "./Search";

function Menu(){
    return(
        <Box>
            <MenuHeader />
            <Search />
        </Box>
    )
}

export default Menu;