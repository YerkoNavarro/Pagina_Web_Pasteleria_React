import NavBar from '../components/nav_bar'
import UnFooter from '../components/C_footer'
import UnCarrusel from '../components/carrusel'
import PromotionBar from '../components/promotion_bar'
import imagenTortaGuiness from '../imagenes/Generated Image October 15, 2025 - 10_20PM.png'
import imagenPasteles from '../imagenes/Generated Image October 15, 2025 - 10_18PM.png'
import imagenPastel from '../imagenes/Generated Image October 15, 2025 - 10_19PM.png'
import CommentSection from '../components/CommentSection'
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
      <div className="my-5" />

      <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center section-title mb-4">Nuestra Comunidad Dulce</h2>
        <p className="text-center mb-5">
          En Pastelería 1000 Sabores, creemos que la repostería une corazones. Nuestra comunidad es el alma de nuestra pasión. 
          Aquí compartimos historias, recetas, eventos y mucho más para que cada dulce experiencia sea inolvidable.
        </p>

        <div className="row justify-content-center g-4">
          <div className="col-md-4">
            <div className="community-card p-4 bg-white rounded shadow-sm h-100">
              <h5 className="mb-3">Eventos y Talleres</h5>
              <p>Únete a nuestros eventos y talleres para aprender a crear tus propias delicias y compartir con otros amantes de la repostería.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="community-card p-4 bg-white rounded shadow-sm h-100">
              <h5 className="mb-3">Historias de Clientes</h5>
              <p>Descubre las experiencias y anécdotas de quienes han endulzado momentos especiales con nosotros.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="community-card p-4 bg-white rounded shadow-sm h-100">
              <h5 className="mb-3">Recetas Compartidas</h5>
              <p>Comparte y explora recetas originales, trucos y consejos de la comunidad para llevar tu pasión por la repostería al siguiente nivel.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

      <section className="py-5" aria-labelledby="comentarios-title">
    <div className="container" style={{maxWidth: '900px'}}>
      <h2 id="comentarios-title" className="section-title mb-3 text-center">Comentarios de Nuestra Comunidad</h2>
      <CommentSection />
      </div>
    </section>

      <div className="my-5 mb-5" /> {/* espaciado */}
      <UnFooter />
    </>
  )
}

export default Inicio
