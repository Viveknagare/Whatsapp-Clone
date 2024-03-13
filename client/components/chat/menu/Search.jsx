import {Search as SearchIcon} from '@mui/icons-material';
import { InputBase,Box ,styled} from '@mui/material';

const Component=styled(Box)`
background-color:#fff;
height:45px;
border-bottom:1px solid #F2F2F2;
display:flex;
align-items:center;
`

const Icon=styled(Box)`
position:absolute;
height:100%;
padding:6px 10px;
color:#919191;
`
const Inputfield =styled(InputBase)`
width:100%;
padding:16px;
height:15px;
padding-left:65px;
font-size:14px;
`

const Wrapper=styled(Box)`
background-color:#f0f2f5;
position:relative;
margin:0px 13px;
width:100%;
border-radius:10px;
`

function Search(){
    return(
        <Component>
            <Wrapper>
                <Icon>
                   <SearchIcon fontSize='small' />
                </Icon>
                <Inputfield placeholder='Search or start new chat' />
            </Wrapper>
        </Component>
    )
}

export default Search;