import { useEffect, useState } from "react";

// Images
import iNetwork from "../../../images/Img_IphoneCardContact/icon_network.png";
import iWifi from "../../../images/Img_IphoneCardContact/icon_wifi.png";
import iBattery from "../../../images/Img_IphoneCardContact/icon_battery.png";
import iArrowBack from "../../../images/Img_IphoneCardContact/icon_arrow_back.png";
import iSpeechBuble from "../../../images/Img_IphoneCardContact/icon_speech_bubble.png";
import iPhone from "../../../images/Img_IphoneCardContact/icon_phone.png";
import iFacetime from "../../../images/Img_IphoneCardContact/icon_facetime.png";
import iMail from "../../../images/Img_IphoneCardContact/icon_mail.png";

// You can replace the default avatar with your own avatar, 
// which you can create from your photo as a Memoji on the website https://www.beautyplus.com/ai-filters/memoji-creator
// Once created, rename your image avatar.png and place it in the Img_IphoneCardContact folder
import Avatar from "../../../images/Img_IphoneCardContact/avatar.png";

export function IphoneCardContact() {
  const [hour, setHour] = useState("");

  // Fill in this form with your information to have it appear on the card
  const informations_array = {
    user_name: "Maxime Dupont",
    phone_number: "06 00 00 00 00",
    street: " 59th 110th St · Manhattan",
    city: "NY 10019",
  };

  function updateHour() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    setHour(`${hours}:${minutes}`);
  }

  useEffect(() => {
    updateHour();
  }, []);

  return (
    <>
      <div className="icc_container">
        <img src={Avatar} alt="Avatar" className="icc_avatar" />
        <div className="icc_header">
          <div className="icc_phone_informations_container">
            <div className="icc_phone_informations_part_one">{hour}</div>
            <div className="icc_phone_informations_part_two">
              <img
                src={iNetwork}
                alt="Icon Network"
                className="icc_icon_header"
              />
              <img src={iWifi} alt="Icon Wifi" className="icc_icon_header" />
              <img
                src={iBattery}
                alt="Icon Battery"
                className="icc_icon_header"
              />
            </div>
          </div>
          <div className="icc_contact_informations_container">
            <div className="icc_icon_circle">
              <img
                src={iArrowBack}
                className="icc_icon_body"
                alt="Icon Arrow back"
              />
            </div>
            <div className="icc_contact_informations_update">Update</div>
          </div>
        </div>

        <div className="icc_body">
          <div className="icc_name">{informations_array.user_name}</div>
          <div className="icc_icons_body_container">
            <div className="icc_icon_circle">
              <img
                src={iSpeechBuble}
                alt="Icon Speech Buble"
                className="icc_icon_body"
              />
            </div>
            <div className="icc_icon_circle">
              <img src={iPhone} alt="Icon Phone" className="icc_icon_body" />
            </div>
            <div className="icc_icon_circle">
              <img
                src={iFacetime}
                alt="Icon Facetime"
                className="icc_icon_body"
              />
            </div>
            <div className="icc_icon_circle">
              <img src={iMail} alt="Icon Mail" className="icc_icon_body" />
            </div>
          </div>
          <div className="icc_coordinates_container">
            <div className="icc_phone_number_container">
              <div className="icc_phone_number">Phone Number</div>
              <div className="icc_number">
                {informations_array.phone_number}
              </div>
            </div>
            <div>
              <div className="icc_address">Address</div>
              <div className="icc_street">{informations_array.street}</div>
              <div className="icc_city">{informations_array.city}</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .icc_container {
          position: relative;
          background: linear-gradient(
            180deg,
            #8fae4a 0%,
            #556b2f 40%,
            #2f3e1f 100%
          ); /* Editable: You can change the background color here  */
          color: white;
          width: 40%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          aspect-ratio: 9/16;
          border-radius: 20px;
          overflow: hidden;
        }

        .icc_header {
          display: flex;
          flex-direction: column;
          padding: 5px 10px 5px 10px;
          gap: 15px;
        }

        .icc_avatar {
          position: absolute;
          top: 40px;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          pointer-events: none;
        }

        .icc_phone_informations_container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 5px;
          padding-left: 10px;
          padding-right: 10px;
        }

        .icc_phone_informations_part_one {
          color: black;
          font-size: 15px;
          font-weight: 600;
        }

        .icc_phone_informations_part_two {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .icc_icon_header {
          width: 15px;
          height: 15px;
        }

        .icc_contact_informations_container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .icc_contact_informations_back {
          background: rgba(255, 255, 255, 0.3);
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .icc_contact_informations_update {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 5px 10px 5px 10px;
        }

        .icc_body {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          padding-top: 20px;
          padding-bottom: 20px;

          backdrop-filter: blur(12px);
          background: rgba(255, 255, 255, 0.08);
          border-top-left-radius: 40px;
          border-top-right-radius: 40px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .icc_name {
          font-size: 30px;
          font-family: sans-serif;
          font-weight: bold;
        }

        .icc_icons_body_container {
          display: flex;
          gap: 15px;
        }

        .icc_icon_circle {
          background: rgba(255, 255, 255, 0.08);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .icc_icon_body {
          width: 25px;
          height: 25px;
          object-fit: contain;
          display: block;
        }

        .icc_coordinates_container {
          width: 90%;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 15px;
          padding: 10px;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .icc_phone_number_container {
          border-bottom: 1px solid white;
          padding-bottom: 5px;
        }

        .icc_phone_number,
        .icc_address {
          color: white;
          font-size: 14px;
          font-weight: bold;
        }

        .icc_number,
        .icc_street,
        .icc_city {
          color: white;
          font-weight: 100;
          font-size: 15px;
        }

        /* Media query */
        @media (max-width: 768px) {
          .icc_container {
            width: 60%;
          }
        }

        @media (max-width: 480px) {
          .icc_container {
            width: 80%;
          }
        }
      `}</style>
    </>
  );
}