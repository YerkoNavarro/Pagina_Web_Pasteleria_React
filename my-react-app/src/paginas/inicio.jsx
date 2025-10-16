import NavBar from '../components/nav_bar'
import UnFooter from '../components/C_footer'
import UnCarrusel from '../components/carrusel'
import PromotionBar from '../components/promotion_bar'
import imagenTortaGuiness from '../imagenes/Generated Image October 15, 2025 - 10_20PM.png'
import imagenPasteles from '../imagenes/Generated Image October 15, 2025 - 10_18PM.png'
import imagenPastel from '../imagenes/Generated Image October 15, 2025 - 10_19PM.png'
function Inicio() {
  return (
    <>
      <PromotionBar />
      <NavBar />

      <section className="hero-banner text-center text-white d-flex flex-column justify-content-center align-items-center" role="banner" aria-label="Banner principal">
        <div className="big-title">
          <h1 className="display-4">¡50 Años Endulzando Chile!</h1>
          <p className="lead">Participamos en el récord Guinness de la torta más grande del mundo 🎂</p>
          <a className="button-explorar-productos" href="/productos" role="button">Explorar Productos</a> {/* enlace a la página de productos */}
        </div>
      </section>
      <div className="my-5" /> 
      <UnCarrusel imagen1={imagenTortaGuiness} imagen2={imagenPasteles} imagen3={imagenPastel} />
      <UnFooter />
    </>
  )
}

export default Inicio
