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
      <div className="my-5" />

      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="p-4 bg-white rounded shadow-sm h-100">
                <h3 className="h5 mb-3">Nuestra Historia</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae augue sit amet risus
                  bibendum porttitor. Vivamus vitae erat at mi cursus posuere. Quisque rutrum massa a lacus vehicula,
                  at vulputate urna congue.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 bg-white rounded shadow-sm h-100">
                <h3 className="h5 mb-3">Ingredientes</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod, tortor id posuere fringilla,
                  sapien tortor efficitur odio, vitae pulvinar velit neque non orci. Praesent sed pretium urna.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 bg-white rounded shadow-sm h-100">
                <h3 className="h5 mb-3">Compromiso</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper, libero ac finibus sollicitudin,
                  mauris nibh eleifend tellus, in aliquam nisi ligula in sem. Suspendisse potenti.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-md-6">
              <h3 className="h4 mb-3">Sabores que enamoran</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consequat, lorem non placerat
                faucibus, odio lorem cursus dui, quis iaculis magna tortor ac arcu. Nullam ultricies tortor a nisl
                accumsan, vitae fermentum risus condimentum.
              </p>
            </div>
            <div className="col-md-6">
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales mi non lectus iaculis, non
                consequat risus accumsan. Duis nec nunc sed neque dignissim bibendum non sit amet lorem. Cras nec
                blandit erat.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="my-5 mb-5" /> {/* espaciado */}
      <UnFooter />
    </>
  )
}

export default Inicio
