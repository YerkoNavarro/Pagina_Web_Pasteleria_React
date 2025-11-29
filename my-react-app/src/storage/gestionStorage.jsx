function isProductoValido(producto){
    if(!producto || typeof producto !== 'object') return false;
    // Soporta tanto claves en mayúsculas (local) como minúsculas (API)
    const nombre = producto.nombre || producto.Nombre;
    const precio = Number(producto.precio || producto.Precio);
    return (nombre ? typeof nombre === 'string' && nombre.trim().length > 0 : true) && Number.isFinite(precio) && precio >= 0;
}

function isLoginValido(login){
    if(!login || typeof login !== 'object') return false;
    if('token' in login) return typeof login.token === 'string' && login.token.trim().length > 0;
    if('id' in login) return String(login.id).length > 0;
    if('email' in login) return typeof login.email === 'string' && login.email.trim().length > 0;
    return false;
}

export function añadirAlCarro(producto){
    try {
        const carritoActual = JSON.parse(localStorage.getItem('carrito')) || [];
        if(!Array.isArray(carritoActual)) return false;
        if(!isProductoValido(producto)) return false;
        
        carritoActual.push(producto);
        localStorage.setItem('carrito', JSON.stringify(carritoActual));
        console.log("Producto agregado al carrito");
        return true;
    } catch (error) {
        console.error("Error al agregar al carrito:", error);
        return false;
    }
}

export function obtenerCarrito(){
    try {
        const carritoActual = JSON.parse(localStorage.getItem('carrito')) || [];
        return Array.isArray(carritoActual) ? carritoActual : [];
    } catch (error) {
        console.log(error);
    }
}

export function calcularTotal(){
    try {
        const carritoActual = JSON.parse(localStorage.getItem('carrito')) || [];
        const items = Array.isArray(carritoActual) ? carritoActual : [];
        return items.reduce((total, producto) => {
            const precio = Number(producto && producto.precio);
            return total + (Number.isFinite(precio) ? precio : 0);
        },0);
    } catch (error) {
        console.error('Error al calcular total:', error.message);
        return 0;
    }
}

export function vaciarCarrito(){
    try {
        localStorage.removeItem('carrito');
        console.log("Carrito vaciado");
    } catch (error) {
        console.log(error);
    }
}

const ADMIN_EMAILS = ['admin@pasteleria.com'];


export function setLogin(data){
    try {
        if(!isLoginValido(data)) return;
        const userData = {
            ...data,
            isAdmin: ADMIN_EMAILS.includes(data.email.toLowerCase())
        };
        localStorage.setItem('login', JSON.stringify(userData));
    } catch (error) {
        console.error('Error en setLogin:', error);
    }
}

export function getLogin(){
    try {
        const data = JSON.parse(localStorage.getItem('login'));
        return data && typeof data === 'object' ? data : null;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export function isLoggedIn(){
    try {
        const data = JSON.parse(localStorage.getItem('login'));
        return isLoginValido(data);
    } catch (error) {
        console.error('Error en isLoggedIn:', error);
        return false;
    }
}

export function isAdmin() {
    try {
        const data = JSON.parse(localStorage.getItem('login'));
        return isLoginValido(data) && data.isAdmin === true;
    } catch (error) {
        console.error('Error en isAdmin:', error);
        return false;
    }
}

export function logout(){
    try {
        localStorage.removeItem('login');
    } catch (error) {
        console.log(error);
    }
}

export function validateEmail(email){
    const v = typeof email === 'string' ? email.trim() : '';
    if(!v) return { valid: false, error: 'Ingresa tu correo' };
    const at = v.indexOf('@');
    if(at <= 0) return { valid: false, error: "El correo debe incluir '@'" };
    const dot = v.lastIndexOf('.');
    if(dot <= at + 1) return { valid: false, error: "El correo debe incluir un dominio, por ejemplo '.com'" };
    return { valid: true, error: null };
}

export function validatePassword(password){
    const v = typeof password === 'string' ? password : '';
    if(!v) return { valid: false, error: 'Ingresa tu contraseña' };
    if(v.length < 8) return { valid: false, error: 'Mínimo 8 caracteres' };
    return { valid: true, error: null };
}

export function validateNombre(nombre){
    const v = typeof nombre === 'string' ? nombre.trim() : '';
    if(!v) return { valid: false, error: 'Ingresa tu nombre' };
    if(v.length < 2) return { valid: false, error: 'Muy corto' };
    return { valid: true, error: null };
}

export function validateTelefono(telefono){
    const v = typeof telefono === 'string' ? telefono.replace(/\s+/g,'') : '';
    if(!v) return { valid: true, error: null };
    if(!/^\+?[0-9-]{7,15}$/.test(v)) return { valid: false, error: 'Teléfono inválido' };
    return { valid: true, error: null };
}

export function validateRegistroInput(input){
    const errors = {};

    const nombreRes = validateNombre(input && input.nombre);
    if(!nombreRes.valid) errors.nombre = nombreRes.error;


    const emailRes = validateEmail(input && input.email);
    if(!emailRes.valid) errors.email = emailRes.error;


    const telefonoRes = validateTelefono(input && input.telefono);
    if(!telefonoRes.valid) errors.telefono = telefonoRes.error;

    const passwordRes = validatePassword(input && input.password);
    if(!passwordRes.valid) errors.password = passwordRes.error;


    const confirmarPassword = input && input.confirmarPassword;
    if(!confirmarPassword) {
        errors.confirmarPassword = 'Confirma tu contraseña';
    } else if(input.password !== confirmarPassword) {
        errors.confirmarPassword = 'Las contraseñas no coinciden';
    }

    const valid = Object.keys(errors).length === 0;
    return { valid, errors };
}

