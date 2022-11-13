import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import InboxIcon from '@mui/icons-material/Inbox';
import HelpIcon from '@mui/icons-material/Help';
import MenuIcon from '@mui/icons-material/Menu';
//import header from "./Header.css";
import { Link } from 'react-router-dom'
import avatar from '../../Avatar';
import Button from  '../../Avatar';
var User = null; 
function Header1() {
 
  return (
   
    <div> 
      <Navbar> 
      <Link to = '/' className = "logoimage" ><span> <img src = "https://raw.githubusercontent.com/Manoj-Athi/Stack-overflow/main/client/src/assets/logo.png" alt = "" className = "stackoverflowicon"/> </span> </Link>
      <Link to = '/' className = "about" ><span>  about </span></Link> 
      <Link to = '/' className = "Products" ><span>  Products </span></Link>
      <Link to = '/' className = "forteams" ><span>  For Teams </span></Link>
      
      <span>
       <form>
         <span>   
      <SearchRoundedIcon className="header__logoImage" fontSize="small" />
      <input placeholder="Search"/>
      </span>
      </form>
      { User === null ?
      <Link to = '/Auth' className = "loginauthen" >log in</Link> :
      <>
       <Link to = '/Avatar' className = "loginavatar" > <Avatar>M<Avatar/>  </Link> 
     
      <button> </button>
            </>

      }
    
    
      <button className = "b1" >
      <EmojiEventsIcon className="header1" fontSize="medium" />
      </button>
      <button className = "b2" >
      <InboxIcon className="header__logoImage" fontSize="medium" />
      </button>
      <button className = "b3">
      <HelpIcon className="header__logoImage" fontSize="medium" />
      </button>
      <button className = "b4">
      <MenuIcon className="header__logoImage" fontSize="medium" />
      </button>
      <button type="submit">Login</button>
      </span>
           </Navbar>
        
            </div>

  );
}
export default Header1;