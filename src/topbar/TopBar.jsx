import "./topbar.css";

export default function TopBar() {
  return (
    <div className="top">
      <div className="topleft">
        <i className="topicon fa-brands fa-facebook"></i>
        <i className="topicon fa-brands fa-instagram"></i>
        <i className="topicon fa-brands fa-twitter"></i>
        <i className="topicon fa-brands fa-pinterest"></i>
      </div>
      <div className="topcenter">
        <ul className="toplist">
          <li className="toplistitem">HOME</li>
          <li className="toplistitem">ABOUT</li>
          <li className="toplistitem">CONTACT</li>
          <li className="toplistitem">WRITE</li>
          <li className="toplistitem">LOGOUT</li>
        </ul>
      </div>
      <div className="topright">
        <img
          className="topimage"
          src="https://marketplace.canva.com/EAFEits4-uw/1/0/1600w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s.jpg"
          alt="profilepic"
        />
        <i className=" topsearchicon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
