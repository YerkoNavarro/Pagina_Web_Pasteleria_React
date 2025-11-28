
import ProductoService from "../services/productoServices";

const productoService = new ProductoService();

//trae la lista de productos desde el backend
export async function fetchProductos() {
    try {
        const response = await productoService.getAllProductos();
        return { success: true, data: response.data };
    } catch (error) {
        console.error('Error al obtener productos:', error);
        return { success: false, error: error.message };
    }
};

export async function agregarProducto(producto) {
    try{
        const response = await productoService.createProducto(producto);
        return { success: true, data: response.data };
    }catch(error){
        console.error("error al crear producto:", error);
        return { success: false, error: error.message };
    }
}

export async function eliminarProducto(id){
    try{
        const response = await productoService.deleteProducto(id);
        return { success: true, data: response.data };
    }catch(error){
        console.error("error al eliminar producto:", error);
        return { success: false, error: error.message };
    }
}

export async function actualizarProducto(producto) {
    try{
        const response = await productoService.updateProducto(producto);
        return { success: true, data: response.data };
    }catch(error){
        console.error("error al actualizar producto:", error);
        return { success: false, error: error.message };
    }
}