
import NavBar from '../components/nav_bar'
import UnFooter from '../components/C_footer'
function Login(){
    return(
        <>
        <NavBar/>
        <section className="hero-banner text-center text-white d-flex flex-column justify-content-center align-items-center" role="banner" aria-label="Banner principal">
            <div className="big-title">
            <h1 className="display-4">Iniciar sesión</h1>
            </div>
        </section>
        <div className="my-5" /> 
        <UnFooter/>
        </>
    );
}

export default Login;