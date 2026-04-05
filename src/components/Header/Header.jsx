import s from  "./Header.module.css"

export function Header() {
  return (
    <div className={s.header_container}>
      <h1 className={s.title}>React UI Components</h1>
      <p className={s.subtitle}>Easily copy and use UI compnents for your projects</p>
    </div>
  );
}
