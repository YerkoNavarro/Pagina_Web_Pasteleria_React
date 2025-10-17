
import NavBar from '../components/nav_bar'
import UnFooter from '../components/C_footer'
function Carro(){
    return(
        <>
        <NavBar/>
        <section className="hero-banner text-center text-white d-flex flex-column justify-content-center align-items-center" role="banner" aria-label="Banner principal">
            <div className="big-title">
            <h1 className="display-4">Carrito De Compras</h1>
            </div>
        </section>
        <div className="my-5" /> 
        <UnFooter/>
        </>
    );
}

export default Carro;