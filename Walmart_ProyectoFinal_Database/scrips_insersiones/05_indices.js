db.productos.createIndex({ sku: 1 }, { unique: true })
db.productos.createIndex({ categoria: 1 })
db.productos.createIndex({ precio_venta: 1 })

db.sucursales.createIndex({ numero_tienda: 1 }, { unique: true })
db.sucursales.createIndex({ "ubicacion": "2dsphere" })

db.clientes.createIndex({ correo: 1 }, { unique: true })
db.clientes.createIndex({ walmart_pass: 1 })

db.ventas.createIndex({ ticket_id: 1 }, { unique: true })
db.ventas.createIndex({ fecha_compra: 1 })
db.ventas.createIndex({ canal: 1 })
db.ventas.createIndex({ sucursal_id: 1 })

db.proveedores.createIndex({ codigo_proveedor: 1 }, { unique: true })
db.proveedores.createIndex({ tipo_producto: 1 })

db.empleados.createIndex({ codigo_empleado: 1 }, { unique: true })
db.empleados.createIndex({ sucursal_id: 1 })
db.empleados.createIndex({ puesto: 1 })

db.categorias.createIndex({ codigo_categoria: 1 }, { unique: true })
db.categorias.createIndex({ nombre: 1 })

db.devoluciones.createIndex({ codigo_devolucion: 1 }, { unique: true })
db.devoluciones.createIndex({ ticket_id: 1 })
db.devoluciones.createIndex({ estado: 1 })

db.promociones.createIndex({ codigo_promo: 1 }, { unique: true })
db.promociones.createIndex({ activa: 1 })

db.envios.createIndex({ codigo_envio: 1 }, { unique: true })
db.envios.createIndex({ ticket_id: 1 })
db.envios.createIndex({ estado: 1 })