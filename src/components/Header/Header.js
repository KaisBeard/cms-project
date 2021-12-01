import "./Header.css";
import logo from "../../img/logo.png";
import picture1 from "../../img/headerpic1.jpg";
import picture2 from "../../img/headerpic2.jpg";
import picture3 from "../../img/headerpic3.jpg";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header-wapper">
      <div className="leftside-header">
        <div className="logo-links-wrap white-text">
          <img src={logo} alt="logo" width="50" height="50" />

          <NavLink className="btn btn-outline-primary" to="/">
            Home
          </NavLink>
          <NavLink className="btn btn-outline-primary" to="/bayern">
            Bayern
          </NavLink>
          <NavLink className="btn btn-outline-primary" to="/hamburg">
            Hamburg
          </NavLink>

          <NavLink className="btn btn-outline-primary" to="/hessen">
            Hessen
          </NavLink>
        </div>

        <div className="content-header">
          <div className="white-text title-header">Take the first step</div>
          <div className="description-header">
            White dwarf Vangelis galaxies tesseract brain is the seed of
            intelligence great turbulent clouds? Bits of moving fluff with
            pretty stories for which there's little good evidence something
            incredible is waiting to be known Tunguska event with pretty
            stories.
          </div>
          <div className="white-text singup-text ">Newsletter Sing Up</div>
          <input
            className="input-header"
            type="text"
            placeholder="Your Email..."
          />
          <button className="white-text button-header">SUBSCRIBE</button>
        </div>
      </div>

      <div className="rightside-header">
        <div className="toppictures-wrap">
          <img src={picture1} alt="Boots" />
          <img src={picture2} alt="Peopel hiking" />
        </div>
        <div className="downpicture-wrap">
          <img src={picture3} alt="Mountains" />
        </div>
      </div>
    </div>
  );
}

export default Header;
