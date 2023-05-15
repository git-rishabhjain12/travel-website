import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import CallIcon from "@mui/icons-material/Call";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  return (
    <>
      <header>
        <div className="top">
          <div className="left">
            <img src="./images/logo.png" alt="Logo" />
          </div>
          <form action="" className="middle form">
            <div className="formSections">
              <div className="form-group">
                <span>
                  <LocationOnIcon />
                </span>
                <input
                  className="locationInput"
                  type="text"
                  placeholder="Where do you want to travel?"
                />
              </div>
              <div className="form-group">
                <span>
                  <CalendarTodayIcon />
                </span>
                <input type="text" placeholder="Month" />
              </div>
              <div className="form-group">
                <span>
                  <CurrencyRupeeIcon />
                </span>
                <input type="text" placeholder="Budget" />
              </div>
            </div>
            <div className="searchBtn">
              <button className="searchIcon">
                <span>
                  <SearchIcon />
                </span>
              </button>
            </div>
          </form>
          <div className="right">
            <Link>
              <CallIcon />
            </Link>
            <Link>
              <PersonIcon />
            </Link>
            <Link>
              <MenuIcon />
            </Link>
          </div>
        </div>
        <div className="bottom">
          <nav>
            <ul>
              <li>
                <Link>Destination</Link>
              </li>
              <li>
                <Link>Speciality Tours</Link>
              </li>
              <li>
                <Link>Customized Holidays</Link>
              </li>
              <li>
                <Link>Corporate Travel</Link>
              </li>
              <li>
                <Link>Forex</Link>
              </li>
              <li>
                <Link>Inbound</Link>
              </li>
              <li>
                <Link>Contact Us</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
