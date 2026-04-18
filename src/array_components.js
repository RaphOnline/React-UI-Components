import { MacNavigationWindow } from "./components/UIComponents/Windows/MacNavigationWindow";
import { MacNavigationWindowDark } from "./components/UIComponents/Windows/MacNavigationWindowDark";
import { IphoneCardContact } from "./components/UIComponents/Cards/IphoneCardContact";
import { VintageCardContact } from "./components/UIComponents/Cards/VintageCardContact";

export const array_components = [
  {
    id: 1,
    category: "Windows",
    title: "MacOs Style Window",
    subtitle: "A MacOs style window component for your React app.",
    render: <MacNavigationWindow />,
    name_file: "MacNavigationWindow.jsx",
    images: false,
    images_folder: "",
    code_component: `export function MacNavigationWindow() {
  return (
    <>
      <div className="macNavigationWindow_container">
        <div className="macNavigationWindow_header_container">
          <div className="macNavigationWindow_header_btn_container">
            <div className="macNavigationWindow_header_btn macNavigationWindow_red"></div>
            <div className="macNavigationWindow_header_btn macNavigationWindow_yellow"></div>
            <div className="macNavigationWindow_header_btn macNavigationWindow_green"></div>
          </div>
        </div>

        <div className="macNavigationWindow_body_container">
          <div className="macNavigationWindow_body_content">
            <span style={{ fontWeight: "bold", fontSize: 30, fontFamily: "sans-serif" }}>
              Hello World !
            </span>
            <p style={{ fontFamily: "sans-serif" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
              error, atque aut tempora illo, ducimus veniam nisi illum qui
              maiores ad exercitationem asperiores, sit quae quia in sed magni?
              Est.
            </p>
          </div>
        </div>
      </div>

      <style>{\`
        .macNavigationWindow_container {
          width: 80%;
          min-height: 400px;
          background-color: #FFFFFF;
          border-radius: 10px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 10px #c4c4c4;
        }

        .macNavigationWindow_header_container {
          background-color: #F6F6F6;
          width: 100%;
          padding-top: 10px;
          padding-bottom: 10px;
        }

        .macNavigationWindow_header_btn_container {
          width: 100%;
          padding-left: 10px;
          display: flex;
          gap: 8px;
        }

        .macNavigationWindow_header_btn {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .macNavigationWindow_red {
          background-color: #ff5f57;
        }

        .macNavigationWindow_yellow {
          background-color: #ffbd2e;
        }

        .macNavigationWindow_green {
          background-color: #28c840;
        }

        .macNavigationWindow_body_container {
          width: 100%;
          flex: 1;
          display: flex;
          color: #1D1D1F;
        }

        .macNavigationWindow_body_content {
          padding: 15px;
          text-align: justify;
        }
      \`}</style>
    </>
  );
}`,
  },
  {
    id: 2,
    category: "Windows",
    title: "MacOs Style Window Dark",
    subtitle: "A MacOs style window dark component for your React app.",
    render: <MacNavigationWindowDark/>,
    name_file: "MacNavigationWindowDark.jsx",
    images: false,
    images_folder: "",
    code_component: `export function MacNavigationWindowDark() {
  return (
    <>
      <div className="macNavigationWindowDark_container">
        <div className="macNavigationWindowDark_header_container">
          <div className="macNavigationWindowDark_header_btn_container">
            <div className="macNavigationWindowDark_header_btn macNavigationWindowDark_red"></div>
            <div className="macNavigationWindowDark_header_btn macNavigationWindowDark_yellow"></div>
            <div className="macNavigationWindowDark_header_btn macNavigationWindowDark_green"></div>
          </div>
        </div>

        <div className="macNavigationWindowDark_body_container">
          <div className="macNavigationWindowDark_body_content">
            <span style={{ fontWeight: "bold", fontSize: 30, fontFamily: "sans-serif" }}>
              Hello World !
            </span>
            <p style={{ fontFamily: "sans-serif" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
              error, atque aut tempora illo, ducimus veniam nisi illum qui
              maiores ad exercitationem asperiores, sit quae quia in sed magni?
              Est.
            </p>
          </div>
        </div>
      </div>

      <style>{\`
        .macNavigationWindowDark_container {
          width: 80%;
          min-height: 400px;
          background-color: #1C1C1E;
          border-radius: 10px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 10px #c4c4c4;
        }

        .macNavigationWindowDark_header_container {
          background-color: #2C2C2E;
          width: 100%;
          padding-top: 10px;
          padding-bottom: 10px;
        }

        .macNavigationWindowDark_header_btn_container {
          width: 100%;
          padding-left: 10px;
          display: flex;
          gap: 8px;
        }

        .macNavigationWindowDark_header_btn {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .macNavigationWindowDark_red {
          background-color: #ff5f57;
        }

        .macNavigationWindowDark_yellow {
          background-color: #ffbd2e;
        }

        .macNavigationWindowDark_green {
          background-color: #28c840;
        }

        .macNavigationWindowDark_body_container {
          width: 100%;
          flex: 1;
          display: flex;
          color: #F5F5F7;
        }

        .macNavigationWindowDark_body_content {
          padding: 15px;
          text-align: justify;
        }
      \`}</style>
    </>
  );
}`
  },
  {
    id: 3,
    category: "Cards",
    title: "iPhone contact card",
    subtitle: "An iPhone contact card for your React application.",
    render: <IphoneCardContact />,
    name_file: "IphoneCardContact.jsx",
    images: true,
    images_folder: "Img_IphoneCardContact",
    code_component: `import { useEffect, useState } from "react";

// Images
import iNetwork from "../components/images/Img_IphoneCardContact/icon_network.png";
import iWifi from "../components/images/Img_IphoneCardContact/icon_wifi.png";
import iBattery from "../components/images/Img_IphoneCardContact/icon_battery.png";
import iArrowBack from "../components/images/Img_IphoneCardContact/icon_arrow_back.png";
import iSpeechBuble from "../components/images/Img_IphoneCardContact/icon_speech_bubble.png";
import iPhone from "../components/images/Img_IphoneCardContact/icon_phone.png";
import iFacetime from "../components/images/Img_IphoneCardContact/icon_facetime.png";
import iMail from "../components/images/Img_IphoneCardContact/icon_mail.png";

// You can replace the default avatar with your own avatar, 
// which you can create from your photo as a Memoji on the website https://www.beautyplus.com/ai-filters/memoji-creator
// Once created, rename your image avatar.png and place it in the Img_IphoneCardContact folder
import Avatar from "../components/images/Img_IphoneCardContact/avatar.png";

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
    setHour(\`\${hours}:\${minutes}\`);
  }

  useEffect(() => {
    updateHour();
  }, []);

  return (
    <>
      <div className="icc_container">
        <img src={Avatar} alt="Avatar" className="icc_avatar" />

        {/* Top menu */}
        <div className="icc_header">
          <div className="icc_phone_informations_container">
            <div className="icc_phone_informations_part_one">{hour}</div>
            <div className="icc_phone_informations_part_two">
              <img src={iNetwork} alt="Icon Network" className="icc_icon_header" />
              <img src={iWifi} alt="Icon Wifi" className="icc_icon_header" />
              <img src={iBattery} alt="Icon Battery" className="icc_icon_header" />
            </div>
          </div>

          <div className="icc_contact_informations_container">
            <div className="icc_icon_circle">
              <img src={iArrowBack} className="icc_icon_body" alt="Icon Arrow back" />
            </div>
            <div className="icc_contact_informations_update">Update</div>
          </div>
        </div>

        <div className="icc_body">
          <div className="icc_name">{informations_array.user_name}</div>

          <div className="icc_icons_body_container">
            <div className="icc_icon_circle">
              <img src={iSpeechBuble} alt="Icon Speech Buble" className="icc_icon_body" />
            </div>
            <div className="icc_icon_circle">
              <img src={iPhone} alt="Icon Phone" className="icc_icon_body" />
            </div>
            <div className="icc_icon_circle">
              <img src={iFacetime} alt="Icon Facetime" className="icc_icon_body" />
            </div>
            <div className="icc_icon_circle">
              <img src={iMail} alt="Icon Mail" className="icc_icon_body" />
            </div>
          </div>

          <div className="icc_coordinates_container">
            <div className="icc_phone_number_container">
              <div className="icc_phone_number">Phone Number</div>
              <div className="icc_number">{informations_array.phone_number}</div>
            </div>

            <div>
              <div className="icc_address">Address</div>
              <div className="icc_street">{informations_array.street}</div>
              <div className="icc_city">{informations_array.city}</div>
            </div>
          </div>
        </div>
      </div>

      <style>{\`
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
      \`}</style>
    </>
  );
}`
  },
  {
    id: 4,
    category: "Cards",
    title: "Vintage Contact Card",
    subtitle: "A vintage 1950s contact card for your Real applications",
    render: <VintageCardContact />,
    name_file: "VintageCardContact.jsx",
    images: true,
    images_folder: "Img_VintageCardContact",
    code_component: `// Image
import Avatar from "../components/images/Img_VintageCardContact/avatar.png";
import Computer from "../components/images/Img_VintageCardContact/computer.png";

// Fill in this form with your information to have it appear on the card
const informations_array = {
  user_name: "Samuel",
  job: "Web Developer",
  phone_number: "+33 6 00 00 00 00",
  street: " 59th 110th St · Manhattan",
  city: "NY 10019",
};

const social_links_array = [
  {
    social_name: "MyWebSite",
    link: "https://www.google.com",
    social_img: require("../../../images/Img_VintageCardContact/website.png"),
  },
  {
    social_name: "LinkedIn",
    link: "https://www.linkedin.com",
    social_img: require("../../../images/Img_VintageCardContact/linkedIn.png"),
  },
  {
    social_name: "GitHub",
    link: "https://www.github.com",
    social_img: require("../../../images/Img_VintageCardContact/github.png"),
  },
];

export function VintageCardContact() {
  return (
    <>
      <div className="vcc_container">
        <div className="vcc_header_container">
          <div className="vcc_img_container">
            <img className="vcc_avatar" src={Avatar} alt="" />
          </div>
          <div className="vcc_name">{informations_array.user_name}</div>
        </div>

        <div className="vcc_body_container">
          <div className="vcc_job_container">
            <p className="vcc_job_title">{informations_array.job}</p>
            <p className="vcc_job_subtitle">
              {informations_array.phone_number}
            </p>
            <p className="vcc_job_subtitle">
              {informations_array.street} {informations_array.city}
            </p>
          </div>

          <div className="vcc_btn_container">
            {social_links_array.map((socialNetwork, index) => {
              return (
                <a
                  key={index}
                  href={socialNetwork.link}
                  alt={socialNetwork.social_name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vcc_btn"
                >
                  <img
                    className="vcc_btn_icon"
                    src={socialNetwork.social_img}
                    alt={socialNetwork.social_name}
                  />
                </a>
              );
            })}
          </div>

          <div className="vcc_img_computer_container">
            <img className="vcc_img_computer" src={Computer} alt="" />
          </div>
        </div>
      </div>

      <style>{\`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        p {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .vcc_container {
          position: relative;
          width: 40%;
          max-width: 360px;
          min-width: 260px;
          aspect-ratio: 9/16;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: #f4ede4;
          border: 5px solid #d6c3a3;
          border-radius: 12px 18px 14px 20px;
          margin: 0 auto;
        }

        .vcc_header_container {
          width: 100%;
          height: 50%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .vcc_img_container {
          width: 75%;
          aspect-ratio: 1/1;
          border-radius: 50%;
          overflow: hidden;
          background-color: #d6c3a3;
          border: 1px dashed black;
          display: flex;
          justify-content: center;
          align-items: flex-end;
        }

        .vcc_avatar {
          width: 90%;
          height: auto;
          display: block;
        }

        .vcc_name {
          position: absolute;
          bottom: 10px;
          text-align: center;
          font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
          color: #d6c3a3;
          text-shadow: 2px 7px 0px #000;
          font-size: clamp(32px, 8vw, 70px);
          transform: rotate(-5deg);
          -webkit-text-stroke: 0.4px black;
        }

        .vcc_body_container {
          width: 100%;
          height: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          font-family: "Times New Roman", Times, serif;
        }

        .vcc_job_container {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-bottom: 15px;
        }

        .vcc_job_title {
          font-size: clamp(14px, 2vw, 18px);
          font-weight: bold;
        }

        .vcc_job_subtitle {
          font-size: clamp(12px, 1.6vw, 15px);
          font-weight: 100;
          text-align: center;
        }

        .vcc_btn_container {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          row-gap: 4px;
          column-gap: 8px;
          z-index: 1;
        }

        .vcc_btn {
          width: clamp(42px, 6vw, 60px);
          height: clamp(42px, 6vw, 60px);
          display: flex;
          justify-content: center;
          align-items: center;
          flex-shrink: 0;
          cursor: pointer;
          border: none;
          border-radius: 5px;
          padding: 0;
          opacity: 0.8;
          filter: saturate(0.9) contrast(0.95);
          transition: all 0.3s ease-in-out;
        }

        .vcc_btn:hover {
          scale: calc(1.2);
          filter: saturate(1) contrast(1);
        }

        .vcc_btn_icon {
          object-fit: contain;
          width: 100%;
          height: 100%;
        }

        .vcc_img_computer_container {
          width: 100%;
          position: absolute;
          bottom: 0;
          right: 0;
        }

        .vcc_img_computer {
          width: 100%;
          object-fit: contain;
          opacity: 0.8;
          filter: saturate(0.9) contrast(0.95);
        }

        @media (max-width: 768px) {
          .vcc_container {
            max-width: 320px;
          }
        }

        @media (max-width: 480px) {
          .vcc_container {
            max-width: 280px;
          }
        }
      \`}</style>
    </>
  );
}`
  },
];
