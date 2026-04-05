export function MacNavigationWindow() {
  return (
    <>
      <div className="container">
        <div className="header_container">
          <div className="header_btn_container">
            <div className="header_btn red"></div>
            <div className="header_btn yellow"></div>
            <div className="header_btn green"></div>
          </div>
        </div>

        <div className="body_container">
          <div className="body_content">
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
        .container {
          width: 80%;
          min-height: 400px;
          background-color: #ffffff;
          border-radius: 10px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 10px #c4c4c4;
        }

        .header_container {
          background-color: #f6f6f6;
          width: 100%;
          padding-top: 10px;
          padding-bottom: 10px;
        }

        .header_btn_container {
          width: 100%;
          padding-left: 10px;
          display: flex;
          gap: 8px;
        }

        .header_btn {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .red {
          background-color: #ff5f57;
        }

        .yellow {
          background-color: #ffbd2e;
        }

        .green {
          background-color: #28c840;
        }

        .body_container {
          width: 100%;
          flex: 1;
          display: flex;
          color: #4d4d4d;
        }

        .body_content {
          padding: 15px;
          text-align: justify;
        }
      `}</style>
    </>
  );
}