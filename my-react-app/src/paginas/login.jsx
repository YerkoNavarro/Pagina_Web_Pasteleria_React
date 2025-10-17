
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
  

        <div class="container py-5">
        <h2 class="section-title text-center mb-4">Iniciar Sesión</h2>
        <form>
            <div class="mb-3">
            <label for="correo" class="form-label">Correo electrónico</label>
            <input type="email" class="form-control" id="correo" placeholder="correo" required />
            </div>
            <div class="mb-3">
            <label for="password" class="form-label">Contraseña</label>
            <input type="password" class="form-control" id="password" required />
            </div>
            <button type="submit" class="btn btn-rosa-suave w-100">Entrar</button>
        </form>
        </div>

        
        <div className="my-5" /> 
        <UnFooter/>
        </>
    );
}

export default Login;