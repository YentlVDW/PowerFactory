import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <form method="POST">
          <h1>Contacteer mij</h1>
          <div>
            <input type="text" id="name" name="name" placeholder="Naam" />
          </div>
          <div>
            <input type="adress" id="adres" name="adres" placeholder="Adres" />
          </div>
          <div>
            <input
              type="tel"
              id="telefoon"
              name="telefoon"
              placeholder="Telefoon"
            />
          </div>
          <div>
            <input type="email" id="email" name="email" placeholder="E-mail" />
          </div>

          <div>
            <textarea
              id="message"
              name="message"
              rows="5"
              columns="30"
              placeholder="Plaats je bericht hier..."
            ></textarea>
          </div>
          <div className="frmbutton">
            <button type="submit">Verzenden</button>
          </div>
        </form>
      </div>
    </div>
  );
}
