// Importa Axios para realizar peticiones HTTP
import axios from "axios";

// URL base de la API obtenida de las variables de entorno, usando .env
const API = "/api/productos/";



// Clase que encapsula los servicios para la gestión de productos
export default class ProductoService  {
    // Obtiene todos los productos disponibles
    // En productoServices.js
 getAllProductos() {
    try {
        console.log('Haciendo petición a:', API);
        const response = axios.get(API);
        console.log('Respuesta de la API:', response);
        
        return response;  
    } catch (error) {
        console.error('Error en la petición:', error);
        throw error;
    }
}


    async getProductoById(id) {
        const response =  await axios.get(`${API}${id}`);
        return response;
    }

   
    async createProducto(producto) {
        const response =  await axios.post(API, producto);
        return response;
    }

    
    async updateProducto(producto) {
        const response =  await axios.put(`${API}${producto.id}`, producto);
        return response;
    }

   
    async deleteProducto(id) {
        const response =  await axios.delete(`${API}${id}`);
        return response;
    }
}