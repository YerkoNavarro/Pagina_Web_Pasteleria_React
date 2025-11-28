import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Alert, Form, Table, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { getLogin, isLoggedIn, isAdmin, logout} from '../storage/gestionStorage';


import { agregarProducto,actualizarProducto,eliminarProducto,fetchProductos} from '../storage/apiStorage';

const Admin = () => {
    const navigate = useNavigate();
    const [login] = useState(getLogin());
    const [productos, setProductos] = useState([]); //una lista de los productos de la api
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState({ type: '', message: '' });
    const [showModal, setShowModal] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    
    const [productoForm, setProductoForm] = useState({
        nombre: '',
        descripcion: '',
        precio: '',
        imagen: ''
    });

   
    useEffect(() => {
        if (!isLoggedIn()) {
            navigate('/login');
            return;
        }
        
        if (!isAdmin()) {
            setStatus({ type: 'danger', message: 'No tienes permisos de administrador' });
            setTimeout(() => navigate('/'), 2000);
            return;
        }
        
        
    }, [navigate]);

    useEffect(() => {
        (async () => {
            const respuesta = await fetchProductos();
            if (respuesta.success) {
                setProductos(respuesta.data);
            } else {
                setStatus({ type: 'danger', message: respuesta.error || 'Error al cargar los productos' });
            }
        })()
    }, [])
        
        
   

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProductoForm({
            ...productoForm,
            [name]: value
        });
    };

    const validarProducto = () => {
        const newErrors = {};
        if (!productoForm.nombre.trim()) newErrors.nombre = 'El nombre es requerido';
        if (!productoForm.descripcion.trim()) newErrors.descripcion = 'La descripción es requerida';
        if (!productoForm.precio || isNaN(Number(productoForm.precio)) || Number(productoForm.precio) <= 0) {
            newErrors.precio = 'Precio inválido';
        }
        if (!productoForm.imagen.trim()) newErrors.imagen = 'La URL de la imagen es requerida';
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validarProducto()) return;

        const producto = {
            ...productoForm,
            precio: Number(productoForm.precio)
        };

        try {
            let resultado;
            if (editingProduct) {
                resultado = await actualizarProducto({ ...producto, id: editingProduct.id });
            } else {
                resultado = await agregarProducto(producto);
            }

            if (resultado.success) {
                setStatus({ type: 'success', message: `Producto ${editingProduct ? 'actualizado' : 'agregado'} correctamente` });
                setShowModal(false);
                setProductoForm({ nombre: '', descripcion: '', precio: '', imagen: '' });
                setEditingProduct(null);
                
                const data = await fetchProductos();
                if (data.success) {
                    setProductos(data.data || []);
                }
            } else {
                throw new Error(resultado.error || 'Error al guardar el producto');
            }
        } catch (error) {
            setStatus({ type: 'danger', message: error.message });
        }
    };

    const handleEditarProducto = (producto) => {
        setProductoForm({
            nombre: producto.nombre,
            descripcion: producto.descripcion || '',
            precio: producto.precio || '',
            imagen: producto.imagen || ''
        });
        setEditingProduct(producto);
        setShowModal(true);
    };

    const handleEliminarProducto = async (id) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este producto?')) {
            try {
                const resultado = await eliminarProducto(id);
                if (resultado.success) {
                    setStatus({ type: 'success', message: 'Producto eliminado correctamente' });
                    const data = await fetchProductos();
                    if (data.success) {
                        setProductos(data.data || []);
                    }
                } else {
                    throw new Error(resultado.error || 'Error al eliminar el producto');
                }
            } catch (error) {
                setStatus({ type: 'danger', message: error.message });
            }
        }
    };

    const handleNuevoProducto = () => {
        setProductoForm({ nombre: '', descripcion: '', precio: '', imagen: '' });
        setEditingProduct(null);
        setErrors({});
        setStatus({ type: '', message: '' });
        setShowModal(true);
    };

    const handleCerrarSesion = () => {
        logout();
        navigate('/login');
    };

    return (
        <Container className="mt-4">
            <Row className="mb-4">
                <Col>
                    <h2>Panel de Administración</h2>
                    <p>Bienvenido, {login?.email || 'Administrador'}</p>
                </Col>
                <Col className="text-end">
                    <Button variant="outline-secondary" onClick={() => navigate('/productos')} className="me-2">
                        Volver a Tienda
                    </Button>
                    <Button variant="primary" onClick={handleNuevoProducto} className="me-2">
                        Nuevo Producto
                    </Button>
                    <Button variant="outline-danger" onClick={handleCerrarSesion}>
                        Cerrar Sesión
                    </Button>
                </Col>
            </Row>

            {status.message && (
                <Alert variant={status.type} onClose={() => setStatus({ type: '', message: '' })} dismissible>
                    {status.message}
                </Alert>
            )}

            <Card>
                <Card.Header as="h5">Lista de Productos</Card.Header>
                <Card.Body>
                    {productos.length === 0 ? (
                        <p>No hay productos registrados. Haz clic en 'Nuevo Producto' para agregar uno.</p>
                    ) : (
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Imagen</th>
                                    <th>Nombre</th>
                                    <th>Descripción</th>
                                    <th>Precio</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {productos.map((producto, index) => (
                                    <tr key={index}>
                                        <td className="align-middle" style={{ width: '100px' }}>
                                            {producto.imagen && (
                                                <img 
                                                    src={producto.imagen} 
                                                    alt={producto.nombre} 
                                                    className="img-thumbnail" 
                                                    style={{ maxWidth: '80px', height: 'auto' }}
                                                />
                                            )}
                                        </td>
                                        <td className="align-middle">{producto.nombre}</td>
                                        <td className="align-middle">{producto.descripcion}</td>
                                        <td className="align-middle">${Number(producto.precio).toLocaleString()}</td>
                                        <td className="align-middle" style={{ width: '150px' }}>
                                            <Button 
                                                variant="outline-primary" 
                                                size="sm" 
                                                onClick={() => handleEditarProducto(producto)}
                                                className="me-2"
                                            >
                                                Editar
                                            </Button>
                                            <Button 
                                                variant="outline-danger" 
                                                size="sm"
                                                onClick={() => handleEliminarProducto(producto.id)}
                                            >
                                                Eliminar
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    )}
                </Card.Body>
            </Card>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{editingProduct ? 'Editar Producto' : 'Nuevo Producto'}</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <Form.Group className="mb-3">
                            <Form.Label>Nombre del Producto *</Form.Label>
                            <Form.Control
                                type="text"
                                name="nombre"
                                value={productoForm.nombre}
                                onChange={handleInputChange}
                                isInvalid={!!errors.nombre}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.nombre}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Descripción *</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="descripcion"
                                value={productoForm.descripcion}
                                onChange={handleInputChange}
                                isInvalid={!!errors.descripcion}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.descripcion}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Precio *</Form.Label>
                            <Form.Control
                                type="number"
                                min="0"
                                step="0.01"
                                name="precio"
                                value={productoForm.precio}
                                onChange={handleInputChange}
                                isInvalid={!!errors.precio}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.precio}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>URL de la Imagen *</Form.Label>
                            <Form.Control
                                type="text"
                                name="imagen"
                                value={productoForm.imagen}
                                onChange={handleInputChange}
                                isInvalid={!!errors.imagen}
                                placeholder="https://ejemplo.com/imagen.jpg"
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.imagen}
                            </Form.Control.Feedback>
                            {productoForm.imagen && (
                                <div className="mt-2">
                                    <p className="mb-1">Vista previa:</p>
                                    <img 
                                        src={productoForm.imagen} 
                                        alt="Vista previa" 
                                        className="img-thumbnail" 
                                        style={{ maxWidth: '100px', height: 'auto' }}
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18ba3d7db39%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18ba3d7db39%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2274.4296875%22%20y%3D%22104.5%22%3E200x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E';
                                        }}
                                    />
                                </div>
                            )}
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowModal(false)}>
                            Cancelar
                        </Button>
                        <Button variant="primary" type="submit">
                            {editingProduct ? 'Actualizar' : 'Guardar'}
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </Container>
    );
};

export default Admin;
