import React from "react";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import InboxIcon from '@mui/icons-material/Inbox';
import HelpIcon from '@mui/icons-material/Help';
import MenuIcon from '@mui/icons-material/Menu';
import header from "./Header.css";

function Header1() {
  return (
    <div>  
      <span> <img src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAB5CAMAAAAqJH57AAAAb1BMVEX////0gCO8u7vr6uq3trbl5eXzeAD0fBf//vz3p3bw8PDCwcHZ2NjAvr7zdgD0fx/zcgD97eT+9vH849T72cb5waD96d75upX1jkb0gyv6xqj4sIX1kEz4to72ml77z7f1hzj1lVX3o2/2nmbPzs4vf1flAAADlUlEQVRoge2ZaXejIBSGNdO54HQKuMVdXPr/f+O4gRqTSWuBntPD+9FEn9z9YhzHysrKysrKSrN48T1cXADh3wH2S3CpezUP5hS5rotabBpcMOqOAuOhjpg7i0Sm0QmZyZQFptEtWtCpaXKA6OLvyjT6G0NdwOLvzDeNTpdQo14/y981Dl+GOtENxs3esZyYCnWNKNoxClHVVG9Vj92DQry5gksR6lYnmE9lRMm2VRsJdQgiqPXGtTLULNQFxrUgu5Bu8syTVa0t1LgX5rlom2fZ4m/odJEdpxL9cgh2Lq/64irL/3PvF8WXfWAMtiev5sIXoC3UQ5ZlSAa7lXGVoW40VrXfyjxDjcizQDZwjaF2gm7NMyryLJRVrTHUQ55JNAUBkqEmWtfgbZ6JftaJ3SjTSR66mcwzsizcmIqq9p7c/BkdN44gXfMMzR9fZVWrO/EEWXqYvthbg73MZhFqipSFmhMKKb89xSREBFvMzVqUVqmoqnFJR8PS/OZ5HG3ybPxdQTNfQJkioyNYnNoke3aI1jyb5ub8TehVNTLhxMGrUO0eGjQSPfezYWehLH7wnE9L7gOTPczbJvpmblI25llN1KWX061tYzKO1duBlMi56Y7GBp7C4zTmJUM7NpSbIuOwmZuqT/E4qg/stcg2c5NpONqFNdqxhyLjItlkP0Oplukcdgj27CZe7Mbd9AlFus51fkFu2FQU+NTP9G29g18TBttEp0CK2c6hwepc/0blGbkpsn4y9Yq0vyM6FhlpR3Zg4L3YnSJrI1Pv48IeIbrzueogX6vogRdDb1tk6l+UxIyR1MvDe3S/gvWEpzy9xoWSImAsLfLjDMIJWYoMVJscpHLhmfAVv8XPRYZUrpuT/F3PGvEAbRLt39GUjDLl231E3IMGOm36eMXjqK1Vg50KjuTR9sF4kpVdfl0SX/2I6gB2ZXuDJyxrC+7rGI1ByL0GPcNTXR07iOIOMYIe4uHrm8if11l/7+GT/hFe/HO03P1+hnyZ9HKHPON5VdMBT/d4tqT523z763ny5RF5ovu8aLMdnjhGyKNwcM29MiMw4ZGoZgPkGe+Hcd+4AEScZkyRZ/w1SuTZ2ih5J4Vk/DFpIPcMnovINVshuUOHrnGvhVmyJZ8lA/qAiAZy3HkfkVj/fkQPs2RL/mnk99+npIB8eTmliwLyl2TJlvyQfC6nb/R2guz8UqIzZCsrKysrKysrk/oH6fRHFGQzMYkAAAAASUVORK5CYII=" alt = "" className = "stackoverflowicon"/> </span> 
       <span>  stack<b>overflow</b></span> 
      <span>  about </span> 
      <span>  Products </span> 
      <span> For Teams</span> 
      <SearchRoundedIcon className="header__logoImage" fontSize="small" />
      <input placeholder="Search"/>
      <EmojiEventsIcon className="header1" fontSize="medium" />
      <InboxIcon className="header__logoImage" fontSize="medium" />
      <HelpIcon className="header__logoImage" fontSize="medium" />
      <MenuIcon className="header__logoImage" fontSize="medium" />

      </div>

  );
}
export default Header1;
