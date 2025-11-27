// Importa Axios para realizar peticiones HTTP
import axios from "axios";

// URL base de la API obtenida de las variables de entorno, usando .env
const base_url = import.meta.env.VITE_API_BASE_URL+'/productos/';



// Clase que encapsula los servicios para la gestión de productos
export default class ProductoService  {
    // Obtiene todos los productos disponibles
    // En productoServices.js
 getAllProductos() {
    try {
        console.log('Haciendo petición a:', base_url);
        const response = axios.get(base_url);
        console.log('Respuesta de la API:', response);
        
        return response;  
    } catch (error) {
        console.error('Error en la petición:', error);
        throw error;
    }
}


    async getProductoById(id) {
        const response = await axios.get(`${base_url}/${id}`);
        return response.producto;
    }

   
    async createProducto(producto) {
        const response = await axios.post(base_url, producto);
        return response.producto;
    }

    
    async updateProducto(producto) {
        const response = await axios.put(`${base_url}/${producto.id}`, producto);
        return response.producto;
    }

   
    async deleteProducto(id) {
        const response = await axios.delete(`${base_url}/${id}`);
        return response.producto;
    }
}