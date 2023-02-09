import "./LeftNavbar.css";
import Navlinks from "../navlinks/Navlinks";
import Divider from "@mui/material/Divider";
import pic from "./pic.png";
const LeftNavbar = () => {
  return (
    <div className="LeftNavbar">
      <div className="imgdiv">
        <img src={pic} height={40} width={40} className="img" />
      </div>
      <Divider />
      <Navlinks />
    </div>
  );
};
export default LeftNavbar;
