const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Conexión a la base de datos oficial unificada
mongoose.connect('mongodb://localhost:27017/WalmartDB')
  .then(() => console.log('🟢 Servidor sincronizado con éxito a la Base de Datos: WalmartDB'))
  .catch(err => console.error('🔴 Error al conectar MongoDB:', err));

// --- MODELOS DE DATOS BASADOS EN TUS SCRIPTS ---
const Producto = mongoose.model('Producto', new mongoose.Schema({ sku: String, nombre: String, categoria: String, marca: String, precio_venta: Number, proveedor: String }, { collection: 'productos' }));
const Sucursal = mongoose.model('Sucursal', new mongoose.Schema({ numero_tienda: Number, nombre_sucursal: String, canal: String, ubicacion: { ciudad: String }, contacto: { telefono: String, gerente: String } }, { collection: 'sucursales' }));
const Cliente = mongoose.model('Cliente', new mongoose.Schema({ nombre: String, correo: String, telefono: String, walmart_pass: Boolean, puntos_acumulados: Number }, { collection: 'clientes' }));
const Venta = mongoose.model('Venta', new mongoose.Schema({ ticket_id: String, canal: String, sucursal_id: Number, cliente_id: String, metodo_pago: String, estado_envio: String, total_pagado: Number }, { collection: 'ventas' }));
const Proveedor = mongoose.model('Proveedor', new mongoose.Schema({ codigo_proveedor: String, nombre: String, pais_origen: String, tipo_producto: String, condiciones_pago: String, calificacion: Number }, { collection: 'proveedores' }));
const Empleado = mongoose.model('Empleado', new mongoose.Schema({ codigo_empleado: String, nombre: String, puesto: String, sucursal_id: Number, turno: String, salario: Number }, { collection: 'empleados' }));
const Categoria = mongoose.model('Categoria', new mongoose.Schema({ codigo_categoria: String, nombre: String, descripcion: String, icono: String, subcategorias: [String] }, { collection: 'categorias' }));
const Promocion = mongoose.model('Promocion', new mongoose.Schema({ codigo_promo: String, nombre: String, descripcion: String, descuento_pct: Number, creado_por: String }, { collection: 'promociones' }));

// Modelos de contingencia (Por si se crean las colecciones después)
const Devolucion = mongoose.model('Devolucion', new mongoose.Schema({}, { strict: false, collection: 'devoluciones' }));
const Envio = mongoose.model('Envio', new mongoose.Schema({}, { strict: false, collection: 'envios' }));

// --- ENDPOINTS API REST ---
app.get('/api/productos', async (req, res) => { res.json(await Producto.find({})); });
app.get('/api/sucursales', async (req, res) => { res.json(await Sucursal.find({})); });
app.get('/api/clientes', async (req, res) => { res.json(await Cliente.find({})); });
app.get('/api/ventas', async (req, res) => { res.json(await Venta.find({})); });
app.get('/api/proveedores', async (req, res) => { res.json(await Proveedor.find({})); });
app.get('/api/empleados', async (req, res) => { res.json(await Empleado.find({})); });
app.get('/api/categorias', async (req, res) => { res.json(await Categoria.find({})); });
app.get('/api/promociones', async (req, res) => { res.json(await Promocion.find({})); });
app.get('/api/devoluciones', async (req, res) => { res.json(await Devolucion.find({})); });
app.get('/api/envios', async (req, res) => { res.json(await Envio.find({})); });

// Inicializar Servidor
app.listen(3000, () => {
    console.log('🚀 Servidor Backend corriendo en http://localhost:3000');
});