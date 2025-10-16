import NavBar from '../components/nav_bar'
import UnFooter from '../components/C_footer'
import UnCarrusel from '../components/carrusel'
import personal from '../imagenes/Gemini_Generated_Image_bvi42dbvi42dbvi4.png'
import pasteleria from '../imagenes/Gemini_Generated_Image_lfoh7flfoh7flfoh.png'
import exterior from '../imagenes/Gemini_Generated_Image_ic921yic921yic92.png'

function sobreNosotros(){
    return(
        <>
        <NavBar/>
        <section className="hero-banner text-center text-white d-flex flex-column justify-content-center align-items-center" role="banner" aria-label="Banner principal">
            <div className="big-title">
                <h1 className="display-4">Sobre Nosotros</h1>
            </div>
        </section>
        <UnCarrusel imagen1={personal} imagen2={pasteleria} imagen3={exterior} descripcion1="Nuestro personal" descripcion2="Nuestro local" descripcion3="Nuestro local" />
        <UnFooter/>
        </>
    );
}
export default sobreNosotros;