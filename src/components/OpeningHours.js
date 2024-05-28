import React from "react";
import barbell from "../assets/barbell.png";

export default function Openingstijden() {
  return (
    <div className="openinghours-container" id="openinghours">
      <div className="openinghours">
        <h1>Openingstijden</h1>
        <p>Maandag - Zondag: 6:00u - 23:00u</p>
        <img src={barbell} alt="barbell" />
      </div>

      <div className="subscriptions-container" id="subscriptions">
        <h1>Abonnementen</h1>

        <div className="subscriptions">
          <div className="sub1">
            <h2>€ 200 / 6 maanden</h2>
          </div>
          <div className="sub2">
            <h2>€ 350 / 12 maanden</h2>
          </div>
        </div>
        <p>Inclusief voeding-en trainingsschema's op maat</p>
        <p>
          <b>Geen domicilie mogelijk</b>
        </p>
      </div>
    </div>
  );
}
