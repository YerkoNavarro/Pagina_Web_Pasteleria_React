import NavBar from '../components/nav_bar'
import UnFooter from '../components/C_footer'
import PromotionBar from '../components/promotion_bar'
function Inicio() {
  return (
    <>
      <PromotionBar />
      <NavBar />

      <section className="hero-banner text-center text-white d-flex flex-column justify-content-center align-items-center" role="banner" aria-label="Banner principal">
        <div className="big-title">
          <h1 className="display-4">¡50 Años Endulzando Chile!</h1>
          <p className="lead">Participamos en el récord Guinness de la torta más grande del mundo 🎂</p>
          <a href="#" className="button-explorar-productos" role="button">Explorar Productos</a>
        </div>
      </section>
      <UnFooter />
    </>
  )
}

export default Inicio
