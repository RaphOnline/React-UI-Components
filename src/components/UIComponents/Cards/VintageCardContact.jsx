// Image
import Avatar from "../../../images/Img_VintageCardContact/avatar.png";
import Computer from "../../../images/Img_VintageCardContact/computer.png";

// Fill in this form with your information to have it appear on the card
const informations_array = {
  user_name: "Samuel",
  job: "Web Developer",
  phone_number: "+33 6 00 00 00 00",
  street: " 59th 110th St · Manhattan",
  city: "NY 10019",
};

// You can add links in this object array. In the image folder, you will find the icons corresponding to the most popular social networks. I recommend using only three social networks for this card.
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

      <style>{`
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
          color: #242423;
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

        /* Media query */
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
      `}</style>
    </>
  );
}