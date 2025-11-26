// Importa Axios para realizar peticiones HTTP
import axios from "axios";

// URL base de la API obtenida de las variables de entorno
const base_url = process.env.API_BASE_URL;

// Clase que encapsula los servicios para la gestión de productos
class ProductoService {
    // Obtiene todos los productos disponibles
    getAllProductos() {
        return axios.get(base_url);
    }

    // Obtiene un producto específico por su ID
    getProductoById(id) {
        return axios.get(`${base_url}/${id}`);
    }

    // Crea un nuevo producto en el sistema
    createProducto(producto) {
        return axios.post(base_url, producto);
    }

    // Actualiza un producto existente
    updateProducto(producto) {
        return axios.put(`${base_url}/${producto.id}`, producto);
    }

    // Elimina un producto por su ID
    deleteProducto(id) {
        return axios.delete(`${base_url}/${id}`);
    }
}

export default ProductoService;