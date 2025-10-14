import NavBar from '../components/nav_bar'
import UnFooter from '../components/C_footer'
import promotion_bar from '../components/promotion_bar'

function Comunidad() {
  return (
    <>
      <promotion_bar/>
      <NavBar />
        <section class="py-5 bg-light">
      <div class="container">
        <h2 class="text-center section-title mb-4">Nuestra Comunidad Dulce</h2>
        <p class="text-center mb-5">
          En Pastelería 1000 Sabores, creemos que la repostería une corazones. Nuestra comunidad es el alma de nuestra pasión. 
          Aquí compartimos historias, recetas, eventos y mucho más para que cada dulce experiencia sea inolvidable.
        </p>

        <div class="row justify-content-center g-4">
          <div class="col-md-4">
            <div class="community-card p-4 bg-white rounded shadow-sm h-100">
              <h5 class="mb-3">Eventos y Talleres</h5>
              <p>Únete a nuestros eventos y talleres para aprender a crear tus propias delicias y compartir con otros amantes de la repostería.</p>
            </div>
          </div>

          <div class="col-md-4">
            <div class="community-card p-4 bg-white rounded shadow-sm h-100">
              <h5 class="mb-3">Historias de Clientes</h5>
              <p>Descubre las experiencias y anécdotas de quienes han endulzado momentos especiales con nosotros.</p>
            </div>
          </div>

          <div class="col-md-4">
            <div class="community-card p-4 bg-white rounded shadow-sm h-100">
              <h5 class="mb-3">Recetas Compartidas</h5>
              <p>Comparte y explora recetas originales, trucos y consejos de la comunidad para llevar tu pasión por la repostería al siguiente nivel.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <UnFooter />
    </>
  )
}

export default Comunidad
