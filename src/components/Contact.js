import React from "react";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import telephone from "../assets/telephone.png";
import email from "../assets/email.png";
import location from "../assets/location.png";

export default function Contact() {
  return (
    <div className="contact-container" id="contact">
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2510.7963427866202!2d4.834539777582658!3d51.00143544753822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c15b54929fdb81%3A0x51f8647f8ddbee8a!2s9de%20Liniestraat%2C%203200%20Aarschot!5e0!3m2!1snl!2sbe!4v1716498220096!5m2!1snl!2sbe"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="map"
        ></iframe>
      </div>
      <div className="gym-socials">
        <div className="icons">
          <h1>Eric Verhaegen</h1>
          <div className="icon">
            <img src={location} alt="location" />
            <p>9 de, Liniestraat 19 C, 3200 Aarschot, Belgium</p>
          </div>
          <div className="icon">
            <img src={telephone} alt="telephone" />
            <p>0476 37 70 99</p>
          </div>
          <div className="icon">
            <img src={email} alt="email" />
            <p>coach@powerfactory.be</p>
          </div>
        </div>
      </div>
    </div>
  );
}
