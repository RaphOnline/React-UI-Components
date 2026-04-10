export function MacNavigationWindow() {
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

      <style>{`
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
      `}</style>
    </>
  );
}