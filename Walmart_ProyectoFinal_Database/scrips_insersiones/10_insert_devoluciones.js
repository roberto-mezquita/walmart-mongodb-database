db.createCollection("devoluciones")

db.devoluciones.insertMany([
  {
    codigo_devolucion: "DVL-0001",
    ticket_id: "TKT-0004",
    cliente_id: "emerson.padilla25@itca.edu.sv",
    sucursal_id: 9001,
    canal_compra: "online",
    canal_devolucion: "online",
    fecha_compra: new Date("2025-01-15"),
    fecha_solicitud: new Date("2025-01-20"),
    fecha_resolucion: new Date("2025-01-22"),
    productos: [
      { sku: "ELEC-002", nombre: "Laptop HP 15.6\" Intel Core i5", cantidad: 1, precio_unitario: 549.00, motivo: "Equipo no enciende", condicion_producto: "defectuoso", monto_reembolso: 549.00 }
    ],
    motivo_general: "producto_defectuoso",
    metodo_reembolso: "tarjeta_debito",
    monto_total: 549.00,
    estado: "reembolsada",
    requiere_inspeccion: true,
    empleado_autoriza: "EMP-005",
    observaciones: "Reembolso completo aprobado despues de diagnostico tecnico."
  },
  {
    codigo_devolucion: "DVL-0002",
    ticket_id: "TKT-0008",
    cliente_id: "diana.reyes@hotmail.com",
    sucursal_id: 9001,
    canal_compra: "online",
    canal_devolucion: "tienda",
    fecha_compra: new Date("2025-02-05"),
    fecha_solicitud: new Date("2025-02-10"),
    fecha_resolucion: new Date("2025-02-10"),
    productos: [
      { sku: "HOGAR-004", nombre: "Lampara de Escritorio LED Mainstays", cantidad: 1, precio_unitario: 12.97, motivo: "Color recibido no solicitado", condicion_producto: "nuevo", monto_reembolso: 12.97 }
    ],
    motivo_general: "producto_incorrecto",
    metodo_reembolso: "saldo_tienda",
    monto_total: 12.97,
    estado: "reembolsada",
    requiere_inspeccion: false,
    empleado_autoriza: "EMP-003",
    observaciones: "Cliente acepto saldo de tienda para compra posterior."
  },
  {
    codigo_devolucion: "DVL-0003",
    ticket_id: "TKT-0010",
    cliente_id: "silvia.morales@gmail.com",
    sucursal_id: 9001,
    canal_compra: "online",
    canal_devolucion: "online",
    fecha_compra: new Date("2025-02-14"),
    fecha_solicitud: new Date("2025-02-18"),
    fecha_resolucion: new Date("2025-02-19"),
    productos: [
      { sku: "FARM-003", nombre: "Protector Solar Neutrogena SPF 50", cantidad: 1, precio_unitario: 11.97, motivo: "Empaque llego derramado", condicion_producto: "danado", monto_reembolso: 11.97 }
    ],
    motivo_general: "danado_en_transporte",
    metodo_reembolso: "paypal",
    monto_total: 11.97,
    estado: "reembolsada",
    requiere_inspeccion: true,
    empleado_autoriza: "EMP-005",
    observaciones: "Se adjuntaron fotografias del producto danado."
  },
  {
    codigo_devolucion: "DVL-0004",
    ticket_id: "TKT-0015",
    cliente_id: "francisco.orellana@gmail.com",
    sucursal_id: 1003,
    canal_compra: "fisica",
    canal_devolucion: "tienda",
    fecha_compra: new Date("2025-03-10"),
    fecha_solicitud: new Date("2025-03-12"),
    fecha_resolucion: new Date("2025-03-12"),
    productos: [
      { sku: "ROPA-005", nombre: "Sudadera con Capucha Hanes Hombre", cantidad: 1, precio_unitario: 16.98, motivo: "Talla no adecuada", condicion_producto: "nuevo", monto_reembolso: 16.98 }
    ],
    motivo_general: "cambio_de_talla",
    metodo_reembolso: "efectivo",
    monto_total: 16.98,
    estado: "reembolsada",
    requiere_inspeccion: false,
    empleado_autoriza: "EMP-012",
    observaciones: "Producto con etiquetas y ticket original."
  },
  {
    codigo_devolucion: "DVL-0005",
    ticket_id: "TKT-0024",
    cliente_id: "patricia.diaz@gmail.com",
    sucursal_id: 9001,
    canal_compra: "online",
    canal_devolucion: "online",
    fecha_compra: new Date("2025-04-25"),
    fecha_solicitud: new Date("2025-04-28"),
    fecha_resolucion: new Date("2025-04-30"),
    productos: [
      { sku: "ELEC-005", nombre: "Impresora HP DeskJet 2755e", cantidad: 1, precio_unitario: 69.00, motivo: "Falta cable de energia", condicion_producto: "incompleto", monto_reembolso: 69.00 }
    ],
    motivo_general: "producto_incompleto",
    metodo_reembolso: "tarjeta_credito",
    monto_total: 69.00,
    estado: "reembolsada",
    requiere_inspeccion: true,
    empleado_autoriza: "EMP-005",
    observaciones: "Se genero guia de retorno y reembolso completo."
  },
  {
    codigo_devolucion: "DVL-0006",
    ticket_id: "TKT-0027",
    cliente_id: "mario.campos@gmail.com",
    sucursal_id: 1001,
    canal_compra: "fisica",
    canal_devolucion: "tienda",
    fecha_compra: new Date("2025-05-12"),
    fecha_solicitud: new Date("2025-05-14"),
    fecha_resolucion: null,
    productos: [
      { sku: "FARM-004", nombre: "Termometro Digital Braun ThermoScan", cantidad: 1, precio_unitario: 39.97, motivo: "Lectura inconsistente", condicion_producto: "defectuoso", monto_reembolso: 39.97 }
    ],
    motivo_general: "garantia",
    metodo_reembolso: "tarjeta_regalo",
    monto_total: 39.97,
    estado: "en_revision",
    requiere_inspeccion: true,
    empleado_autoriza: null,
    observaciones: "Pendiente de validacion con proveedor."
  },
  {
    codigo_devolucion: "DVL-0007",
    ticket_id: "TKT-0032",
    cliente_id: "jorge.melara@gmail.com",
    sucursal_id: 9001,
    canal_compra: "online",
    canal_devolucion: "online",
    fecha_compra: new Date("2026-01-22"),
    fecha_solicitud: new Date("2026-01-27"),
    fecha_resolucion: new Date("2026-01-29"),
    productos: [
      { sku: "ELEC-007", nombre: "Bocina Bluetooth JBL Charge 5", cantidad: 1, precio_unitario: 149.00, motivo: "Golpe visible en transporte", condicion_producto: "danado", monto_reembolso: 149.00 }
    ],
    motivo_general: "danado_en_transporte",
    metodo_reembolso: "paypal",
    monto_total: 149.00,
    estado: "reembolsada",
    requiere_inspeccion: true,
    empleado_autoriza: "EMP-005",
    observaciones: "Transportista acepto incidencia de entrega."
  },
  {
    codigo_devolucion: "DVL-0008",
    ticket_id: "TKT-0035",
    cliente_id: "nelson.chavez@yahoo.com",
    sucursal_id: 1002,
    canal_compra: "fisica",
    canal_devolucion: "tienda",
    fecha_compra: new Date("2026-03-03"),
    fecha_solicitud: new Date("2026-03-05"),
    fecha_resolucion: new Date("2026-03-05"),
    productos: [
      { sku: "JUG-001", nombre: "LEGO Classic Ladrillos Creativos", cantidad: 1, precio_unitario: 34.97, motivo: "Compra duplicada", condicion_producto: "nuevo", monto_reembolso: 34.97 }
    ],
    motivo_general: "cliente_cambio_opinion",
    metodo_reembolso: "tarjeta_debito",
    monto_total: 34.97,
    estado: "reembolsada",
    requiere_inspeccion: false,
    empleado_autoriza: "EMP-008",
    observaciones: "Devolucion dentro de politica de 30 dias."
  },
  {
    codigo_devolucion: "DVL-0009",
    ticket_id: "TKT-0037",
    cliente_id: "raul.villalta@gmail.com",
    sucursal_id: 1004,
    canal_compra: "fisica",
    canal_devolucion: "tienda",
    fecha_compra: new Date("2026-04-08"),
    fecha_solicitud: new Date("2026-04-09"),
    fecha_resolucion: new Date("2026-04-09"),
    productos: [
      { sku: "ALIM-004", nombre: "Leche Entera Great Value 1 Galon", cantidad: 2, precio_unitario: 3.78, motivo: "Producto derramado", condicion_producto: "danado", monto_reembolso: 7.56 }
    ],
    motivo_general: "calidad_producto",
    metodo_reembolso: "efectivo",
    monto_total: 7.56,
    estado: "reembolsada",
    requiere_inspeccion: true,
    empleado_autoriza: "EMP-014",
    observaciones: "Se retiro producto de anaquel para revision."
  },
  {
    codigo_devolucion: "DVL-0010",
    ticket_id: "TKT-0038",
    cliente_id: "stephanie.perez@yahoo.com",
    sucursal_id: 9001,
    canal_compra: "online",
    canal_devolucion: "online",
    fecha_compra: new Date("2026-04-25"),
    fecha_solicitud: new Date("2026-04-25"),
    fecha_resolucion: null,
    productos: [
      { sku: "HOGAR-003", nombre: "Aspiradora Bissell CleanView 2252", cantidad: 1, precio_unitario: 59.00, motivo: "Cancelacion antes del despacho", condicion_producto: "sin_despachar", monto_reembolso: 59.00 }
    ],
    motivo_general: "cancelacion_cliente",
    metodo_reembolso: "tarjeta_credito",
    monto_total: 59.00,
    estado: "pendiente_revision",
    requiere_inspeccion: false,
    empleado_autoriza: null,
    observaciones: "Solicitud creada antes de asignar transportista."
  },
  {
    codigo_devolucion: "DVL-0011",
    ticket_id: "TKT-0022",
    cliente_id: "lorena.sandoval@gmail.com",
    sucursal_id: 9001,
    canal_compra: "online",
    canal_devolucion: "tienda",
    fecha_compra: new Date("2025-04-15"),
    fecha_solicitud: new Date("2025-05-25"),
    fecha_resolucion: new Date("2025-05-26"),
    productos: [
      { sku: "JUG-004", nombre: "Nerf Elite 2.0 Commander RD-6", cantidad: 1, precio_unitario: 14.97, motivo: "Producto abierto y sin accesorios", condicion_producto: "incompleto_usado", monto_reembolso: 0.00 }
    ],
    motivo_general: "fuera_de_politica",
    metodo_reembolso: "no_aplica",
    monto_total: 0.00,
    estado: "rechazada",
    requiere_inspeccion: true,
    empleado_autoriza: "EMP-009",
    observaciones: "Solicitud fuera de plazo y producto incompleto."
  },
  {
    codigo_devolucion: "DVL-0012",
    ticket_id: "TKT-0040",
    cliente_id: "emerson.padilla25@itca.edu.sv",
    sucursal_id: 9001,
    canal_compra: "online",
    canal_devolucion: "online",
    fecha_compra: new Date("2026-05-28"),
    fecha_solicitud: new Date("2026-05-29"),
    fecha_resolucion: new Date("2026-05-29"),
    productos: [
      { sku: "ELEC-006", nombre: "Smart Watch Fitbit Versa 4", cantidad: 1, precio_unitario: 199.00, motivo: "Cancelacion parcial antes de despacho", condicion_producto: "sin_despachar", monto_reembolso: 199.00 }
    ],
    motivo_general: "cancelacion_cliente",
    metodo_reembolso: "paypal",
    monto_total: 199.00,
    estado: "aprobada",
    requiere_inspeccion: false,
    empleado_autoriza: "EMP-005",
    observaciones: "Pedido online aun pendiente; se cancela un articulo."
  }
])
