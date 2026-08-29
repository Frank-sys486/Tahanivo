import logoMark from "../brand/tahanivo-mark-ink.svg";

function IconPage() {
  return (
    <main className="icon-page">
      <div className="icon-page-image" aria-hidden="true">
        <img src="/images/hero-chair.jpg" alt="" />
      </div>
      <div className="icon-page-identity">
        <img className="icon-page-mark" src={logoMark} alt="TAHANIVO abstract mark" />
        <h1>TAHANIVO</h1>
        <p>Objects with presence.</p>
      </div>
    </main>
  );
}

export default IconPage;
