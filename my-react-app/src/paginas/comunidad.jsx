import NavBar from '../components/nav_bar'
import UnFooter from '../components/C_footer'
import PromotionBar from '../components/promotion_bar'

function Comunidad() {
  return (
    <>
      <PromotionBar/>
      <NavBar />
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
      <p className="text-center mb-4">
        Nos encanta escuchar lo que piensas sobre nuestros pasteles, eventos y todo lo que hacemos para endulzar tu vida.
      </p>

        <div className="comentarios-container">
          <article className="comentario bg-white p-4 rounded shadow-sm">
            <p>"La torta personalizada que encargué fue perfecta y deliciosa. ¡Gracias por hacer mi cumpleaños inolvidable!"</p>
            <footer>– María G.</footer>
          </article>

          <article className="comentario bg-white p-4 rounded shadow-sm">
            <p>"Los talleres son increíbles, aprendí trucos que no sabía y conocí gente con mi misma pasión por la repostería."</p>
            <footer>– Carlos R.</footer>
          </article>

          <article className="comentario bg-white p-4 rounded shadow-sm">
            <p>"Siempre confío en Pastelería 1000 Sabores para mis eventos, la calidad y sabor son incomparables."</p>
            <footer>– Ana M.</footer>
          </article>
        </div>

        <a href="#" className="btn-link-custom" role="button" aria-label="Ver más comentarios">Ver más comentarios</a>
      </div>
    </section>
    
    <UnFooter />
    </>
  )
}

export default Comunidad
