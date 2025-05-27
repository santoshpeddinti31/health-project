import "../../styles/AnatomySection.css";
import anatomy from "../../assets/img2.png";
import heart from "../../assets/heart.png";
import leg from "../../assets/legs.png";
import { ZoomIn } from "lucide-react";

import lungs from "../../assets/lungs.png";

import teeth from "../../assets/teeth.png";

import bone from "../../assets/bone.png";

import { MoveRight } from "lucide-react";

function AnatomySection() {
  return (
    <div className="anat-cont">
      <div className="anatomy">
        <ZoomIn id="zoom" />
        <img src={anatomy} alt="anatomy_image" />
        <div className="heart">
          <img src={heart} alt="heart" />
          <span> Healthy Heart</span>
        </div>
        <div className="leg">
          <img src={leg} alt="heart" />
          <span> Healthy Heart</span>
        </div>
      </div>
      <div className="card">
        <div className="card1">
          <span>
            <img src={lungs} alt="img1" />
            Lungs
          </span>
          <p>Date: 26 Oct 2025</p>
          <input id="slider" min="0" value="60" max="100" type="range" />
        </div>
        <div id="teeth" className="card1">
          <span>
            <img src={teeth} alt="img3" />
            Teeth
          </span>
          <p>Date: 26 Oct 2025</p>
          <input id="slider" min="0" value="60" max="100" type="range" />
        </div>
        <div id="bone" className="card1">
          <span>
            <img src={bone} alt="img3" />
            Bone
          </span>
          <p>Date: 26 Oct 2025</p>
          <input id="slider" min="0" value="60" max="100" type="range" />
        </div>
        <span id="details">
          Details &nbsp;
          <MoveRight size={14} />
        </span>
      </div>
    </div>
  );
}

export default AnatomySection;
