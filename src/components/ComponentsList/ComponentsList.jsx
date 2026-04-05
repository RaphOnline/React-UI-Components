import s from "./ComponentsList.module.css";
import Prism from "prismjs";
import { useState, useEffect } from "react";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-jsx";

import { array_components } from "../../array_components";

export function ComponentsList() {
  const [copiedId, setCopiedId] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      Prism.highlightAll();
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  async function copyCode(id, code) {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedId(id);

      setTimeout(() => {
        setCopiedId(null);
      }, 2000);

      console.log("code copié");
    } catch (error) {
      console.log("Erreur lors de la copie du code", error);
    }
  }

  return (
    <>
      {array_components.map((component) => (
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
                  <code className="language-jsx">
                    {component.code_component}
                  </code>
                </pre>

                <div className={s.btn_copy_container}>
                  <button
                    onClick={() =>
                      copyCode(component.id, component.code_component)
                    }
                    className={s.btn_copy}
                  >
                    {copiedId === component.id ? "Copied !" : "Copy code"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
