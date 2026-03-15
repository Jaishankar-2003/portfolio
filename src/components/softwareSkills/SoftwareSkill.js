import React from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li key={i} className="software-skill-inline">
                
                {skills.icon && (
                  <img
                    src={skills.icon}
                    alt={skills.skillName}
                    width="60"
                    height="60"
                  />
                )}

                {skills.svg && skills.svg}

                <p>{skills.skillName}</p>

              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}