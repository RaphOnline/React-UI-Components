export function MacNavigationWindowDark() {
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

      <style>{`
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
      `}</style>
    </>
  );
}