import api from '../utils/axiosConfig';

const API = "/productos/";

// Clase que encapsula los servicios para la gestión de productos
export default class ProductoService  {
    // Obtiene todos los productos disponibles
    // En productoServices.js
    async getAllProductos() {
        const response = await api.get(API);
        return response;  
    }

    async getProductoById(id) {
        const response =  await api.get(`${API}${id}`);
        return response;
    }

   
    async createProducto(producto) {
        const response =  await api.post(API, producto);
        return response;
    }

    
    async updateProducto(producto) {
        const response =  await api.put(`${API}${producto.id}`, producto);
        return response;
    }

   
    async deleteProducto(id) {
        const response =  await api.delete(`${API}${id}`);
        return response;
    }
}