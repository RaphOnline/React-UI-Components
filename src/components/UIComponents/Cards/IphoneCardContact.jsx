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
          max-width: 360px;
          min-width: 260px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          aspect-ratio: 9/16;
          border-radius: clamp(16px, 2vw, 20px);
          overflow: hidden;
          margin: 0 auto;
        }

        .icc_header {
          display: flex;
          flex-direction: column;
          padding: clamp(5px, 1.8vw, 10px);
          gap: clamp(10px, 2.5vw, 15px);
        }

        .icc_avatar {
          position: absolute;
          top: clamp(24px, 5vw, 40px);
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          pointer-events: none;
        }

        .icc_phone_informations_container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: clamp(4px, 1vw, 5px);
          padding-left: clamp(6px, 2vw, 10px);
          padding-right: clamp(6px, 2vw, 10px);
        }

        .icc_phone_informations_part_one {
          color: black;
          font-size: clamp(12px, 2.5vw, 15px);
          font-weight: 600;
        }

        .icc_phone_informations_part_two {
          display: flex;
          align-items: center;
          gap: clamp(3px, 1vw, 5px);
        }

        .icc_icon_header {
          width: clamp(12px, 2.5vw, 15px);
          height: clamp(12px, 2.5vw, 15px);
        }

        .icc_contact_informations_container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .icc_contact_informations_back {
          background: rgba(255, 255, 255, 0.3);
          width: clamp(24px, 6vw, 30px);
          height: clamp(24px, 6vw, 30px);
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .icc_contact_informations_update {
          background: rgba(255, 255, 255, 0.2);
          border-radius: clamp(14px, 3vw, 20px);
          display: flex;
          justify-content: center;
          align-items: center;
          padding: clamp(4px, 1.2vw, 5px) clamp(8px, 2.5vw, 10px);
          font-size: clamp(12px, 2.5vw, 14px);
        }

        .icc_body {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: clamp(8px, 2vw, 10px);
          padding-top: clamp(16px, 4vw, 20px);
          padding-bottom: clamp(16px, 4vw, 20px);

          backdrop-filter: blur(12px);
          background: rgba(255, 255, 255, 0.08);
          border-top-left-radius: clamp(28px, 6vw, 40px);
          border-top-right-radius: clamp(28px, 6vw, 40px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .icc_name {
          font-size: clamp(20px, 5vw, 30px);
          font-family: sans-serif;
          font-weight: bold;
          text-align: center;
        }

        .icc_icons_body_container {
          display: flex;
          gap: clamp(8px, 3vw, 15px);
          flex-wrap: wrap;
          justify-content: center;
        }

        .icc_icon_circle {
          background: rgba(255, 255, 255, 0.08);
          width: clamp(40px, 10vw, 50px);
          height: clamp(40px, 10vw, 50px);
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .icc_icon_body {
          width: clamp(18px, 5vw, 25px);
          height: clamp(18px, 5vw, 25px);
          object-fit: contain;
          display: block;
        }

        .icc_coordinates_container {
          width: 90%;
          background: rgba(255, 255, 255, 0.08);
          border-radius: clamp(12px, 3vw, 15px);
          padding: clamp(8px, 2.5vw, 10px);
          display: flex;
          flex-direction: column;
          gap: clamp(4px, 1.5vw, 5px);
        }

        .icc_phone_number_container {
          border-bottom: 1px solid white;
          padding-bottom: clamp(4px, 1.5vw, 5px);
        }

        .icc_phone_number,
        .icc_address {
          color: white;
          font-size: clamp(12px, 2.5vw, 14px);
          font-weight: bold;
        }

        .icc_number,
        .icc_street,
        .icc_city {
          color: white;
          font-weight: 100;
          font-size: clamp(13px, 2.8vw, 15px);
          line-height: 1.3;
        }

        /* Media query */
        @media (max-width: 768px) {
          .icc_container {
            max-width: 320px;
          }
        }

        @media (max-width: 480px) {
          .icc_container {
            max-width: 280px;
          }
        }
      `}</style>
    </>
  );
}