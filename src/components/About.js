import React from "react";
import sectionimg1 from "../assets/section1.jpg";
import sectionimg2 from "../assets/section2.jpg";
import sectionimg3 from "../assets/section3.jpg";

export default function About() {
  return (
    <div className="about-container" id="about">
      <div className="section1">
        <h1>Waarom Power Factory ?</h1>
        <article>
          Train met de beste! <span>POWERFACTORY</span> verandert de levens van
          inwoners van Aarschot sinds de oprichting in 1989. Fitness is geen
          hobby maar een manier van leven. We hebben onze sportschool opgericht
          als een tweede thuis voor al onze klanten. <br /> <br />
          Of je nu elke dag oefent of wanneer je nog nooit in een sportschool
          bent geweest, <span>POWERFACTORY</span> kan jou helpen om de nieuwe
          jij vorm te geven. We willen jouw volgende trainingspartner zijn. Bel
          ons vandaag nog!
        </article>
      </div>
      <div className="section2">
        <div className="items">
          <div className="item">
            <h1>- High quality machines</h1>
          </div>
          <div className="item">
            <h1>- Tons of free weight</h1>
          </div>
          <div className="item">
            <h1>- High-end excercise equipment</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
