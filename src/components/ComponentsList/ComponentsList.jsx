import s from "./ComponentsList.module.css";
import Prism from "prismjs";
import { useState, useEffect } from "react";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-jsx";

import { array_components } from "../../array_components";

// Colorisation syntaxique
export function ComponentsList() {
  const [btnCopyText, setBtnCopyText] = useState("Copy code");
  useEffect(() => {
    setTimeout(() => {
      Prism.highlightAll();
    }, 0);
  }, []);

  // Fonction copier code
  async function copyCode(code) {
    try {
      await navigator.clipboard.writeText(code);
      setBtnCopyText("Copied !");
      setInterval(() => {
        setBtnCopyText("Copy code");
      }, 2000);
      console.log("code copié");
    } catch (error) {
      console.log("Erreur lors de la copie du code");
    }
  }

  return array_components.map((component) => {
    return (
      <div key={component.id} className={s.container}>
        <div className={s.title_container}>
          <div className={s.title}>{component.title}</div>
          <div className={s.subtitle}>{component.subtitle}</div>
        </div>

        <div className={s.project_container}>
          <div className={s.project_exemple}>{component.render}</div>

          <div className={s.code_container}>
            <div className={s.code_to_copy_container}>
              <div className={s.code_title}>Code to Copy</div>
              <div className={s.code_subtitle}>
                Create the file: components/
                <strong>{component.name_file}</strong>
              </div>

              <pre className={`${s.code_block} language-jsx`}>
                <code className="language-jsx">{component.code_component}</code>
              </pre>
              <div className={s.btn_copy_container}>
                <button
                  onClick={() => copyCode(component.code_component)}
                  className={s.btn_copy}
                >
                  {btnCopyText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
}
