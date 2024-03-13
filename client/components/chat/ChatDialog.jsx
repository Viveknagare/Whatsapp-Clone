import { Dialog,Box ,styled} from "@mui/material";

//components
import Menu from "./menu/Menu";
import EmptyChat from "./emptychat/EmptyChat";



const dialogStyle={
    height:'94%',
    margin:'15px',
    width:'100%',
    borderRadius:'0px',
    maxWidth:'100%',
    maxHeight:'100%',
    boxShadow:'none',
    overflow:'hidden'
}

const Component=styled(Box)`
display:flex;
`
const Leftcomponent=styled(Box)`
min-width:400px;
`

const Rightcomponent=styled(Box)`
width:70%;
min-width:300px;
height:100%;
border-left:1px solid rgba(0,0,0,0.14);
`

function ChatDialog(){
    return(
        <Dialog
        open={true}
         PaperProps={{sx:dialogStyle}}
         hideBackdrop={true}
         maxWidth={'md'}
        >
        <Component>
            <Leftcomponent>
                <Menu />
            </Leftcomponent>

            <Rightcomponent>
                <EmptyChat />
            </Rightcomponent>
        </Component>
        </Dialog>
    )
}

export default ChatDialog;