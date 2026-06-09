db.createCollection("envios")

db.envios.insertMany([
  {
    codigo_envio: "ENV-0001", ticket_id: "TKT-0002", cliente_id: "carlos.ramos@hotmail.com", sucursal_origen_id: 9001,
    direccion_destino: { calle: "Barrio El Centro, Av. Independencia #12", ciudad: "Santa Ana", codigo_postal: "02001", departamento: "Santa Ana", pais: "El Salvador" },
    transportista: "Walmart Logistics", servicio: "estandar", fecha_creacion: new Date("2025-01-08"), fecha_estimada: new Date("2025-01-12"), fecha_entrega: new Date("2025-01-11"),
    estado: "entregado", costo_envio: 0.00, promocion_envio_aplicada: true, numero_guia: "WM-SV-2025-0002",
    paquetes: [
      { sku: "ROPA-001", nombre: "Camiseta Hombre Fruit of the Loom Pack 5", cantidad: 2, peso_kg: 0.8 },
      { sku: "ROPA-002", nombre: "Jeans Slim Fit Wrangler Hombre", cantidad: 1, peso_kg: 0.7 }
    ],
    historial: [
      { estado: "preparando", fecha: new Date("2025-01-08T10:00:00Z"), ubicacion: "Centro online 9001", detalle: "Pedido recibido y asignado a bodega." },
      { estado: "entregado", fecha: new Date("2025-01-11T12:10:00Z"), ubicacion: "Santa Ana", detalle: "Entrega confirmada por cliente." }
    ],
    incidente: null
  },
  {
    codigo_envio: "ENV-0002", ticket_id: "TKT-0004", cliente_id: "emerson.padilla25@itca.edu.sv", sucursal_origen_id: 9001,
    direccion_destino: { calle: "Col. Santa Lucia, Pasaje #3", ciudad: "Santa Ana", codigo_postal: "02001", departamento: "Santa Ana", pais: "El Salvador" },
    transportista: "Walmart Logistics", servicio: "express", fecha_creacion: new Date("2025-01-15"), fecha_estimada: new Date("2025-01-17"), fecha_entrega: new Date("2025-01-17"),
    estado: "entregado", costo_envio: 0.00, promocion_envio_aplicada: true, numero_guia: "WM-SV-2025-0004",
    paquetes: [
      { sku: "ELEC-002", nombre: "Laptop HP 15.6\" Intel Core i5", cantidad: 1, peso_kg: 2.2 }
    ],
    historial: [
      { estado: "preparando", fecha: new Date("2025-01-15T09:15:00Z"), ubicacion: "Centro online 9001", detalle: "Producto reservado en bodega." },
      { estado: "entregado", fecha: new Date("2025-01-17T16:45:00Z"), ubicacion: "Santa Ana", detalle: "Entrega realizada en domicilio." }
    ],
    incidente: null
  },
  {
    codigo_envio: "ENV-0003", ticket_id: "TKT-0006", cliente_id: "karla.flores@gmail.com", sucursal_origen_id: 9001,
    direccion_destino: { calle: "Bo. San Antonio, Calle Morazan #8", ciudad: "San Miguel", codigo_postal: "05001", departamento: "San Miguel", pais: "El Salvador" },
    transportista: "Cargo Expreso", servicio: "estandar", fecha_creacion: new Date("2025-01-25"), fecha_estimada: new Date("2025-01-30"), fecha_entrega: new Date("2025-01-30"),
    estado: "entregado", costo_envio: 4.99, promocion_envio_aplicada: false, numero_guia: "WM-SV-2025-0006",
    paquetes: [
      { sku: "ROPA-003", nombre: "Vestido Floral Mujer Terra & Sky", cantidad: 1, peso_kg: 0.4 },
      { sku: "ROPA-004", nombre: "Tenis Deportivos Athletic Works Mujer", cantidad: 1, peso_kg: 0.9 }
    ],
    historial: [
      { estado: "preparando", fecha: new Date("2025-01-25T11:20:00Z"), ubicacion: "Centro online 9001", detalle: "Pedido preparado para envio estandar." },
      { estado: "entregado", fecha: new Date("2025-01-30T14:05:00Z"), ubicacion: "San Miguel", detalle: "Entrega completada sin novedad." }
    ],
    incidente: null
  },
  {
    codigo_envio: "ENV-0004", ticket_id: "TKT-0008", cliente_id: "diana.reyes@hotmail.com", sucursal_origen_id: 9001,
    direccion_destino: { calle: "Res. Altavista, Calle 3 #14", ciudad: "Sonsonate", codigo_postal: "03001", departamento: "Sonsonate", pais: "El Salvador" },
    transportista: "Walmart Logistics", servicio: "estandar", fecha_creacion: new Date("2025-02-05"), fecha_estimada: new Date("2025-02-09"), fecha_entrega: new Date("2025-02-08"),
    estado: "entregado", costo_envio: 0.00, promocion_envio_aplicada: true, numero_guia: "WM-SV-2025-0008",
    paquetes: [
      { sku: "HOGAR-002", nombre: "Juego de Sabanas Queen Mainstays", cantidad: 2, peso_kg: 1.6 },
      { sku: "HOGAR-004", nombre: "Lampara de Escritorio LED Mainstays", cantidad: 1, peso_kg: 0.8 }
    ],
    historial: [
      { estado: "preparando", fecha: new Date("2025-02-05T13:00:00Z"), ubicacion: "Centro online 9001", detalle: "Pedido empacado." },
      { estado: "entregado", fecha: new Date("2025-02-08T10:40:00Z"), ubicacion: "Sonsonate", detalle: "Recibido por familiar autorizado." }
    ],
    incidente: null
  },
  {
    codigo_envio: "ENV-0005", ticket_id: "TKT-0010", cliente_id: "silvia.morales@gmail.com", sucursal_origen_id: 9001,
    direccion_destino: { calle: "Col. Jardines de Guadalupe #67", ciudad: "San Salvador", codigo_postal: "01101", departamento: "San Salvador", pais: "El Salvador" },
    transportista: "Walmart Logistics", servicio: "express", fecha_creacion: new Date("2025-02-14"), fecha_estimada: new Date("2025-02-16"), fecha_entrega: new Date("2025-02-16"),
    estado: "entregado", costo_envio: 0.00, promocion_envio_aplicada: true, numero_guia: "WM-SV-2025-0010",
    paquetes: [
      { sku: "ELEC-004", nombre: "iPad Apple 10.9\" Wi-Fi 64GB", cantidad: 1, peso_kg: 0.7 },
      { sku: "FARM-003", nombre: "Protector Solar Neutrogena SPF 50", cantidad: 2, peso_kg: 0.3 }
    ],
    historial: [
      { estado: "preparando", fecha: new Date("2025-02-14T09:45:00Z"), ubicacion: "Centro online 9001", detalle: "Pedido validado para entrega express." },
      { estado: "entregado", fecha: new Date("2025-02-16T11:15:00Z"), ubicacion: "San Salvador", detalle: "Entrega finalizada." }
    ],
    incidente: { tipo: "producto_derramado", detalle: "Un protector solar fue reportado con empaque derramado.", relacion_devolucion: "DVL-0003" }
  },
  {
    codigo_envio: "ENV-0006", ticket_id: "TKT-0012", cliente_id: "veronica.castro@gmail.com", sucursal_origen_id: 9001,
    direccion_destino: { calle: "Col. San Benito, Paseo General Escalon #200", ciudad: "San Salvador", codigo_postal: "01101", departamento: "San Salvador", pais: "El Salvador" },
    transportista: "Walmart Logistics", servicio: "estandar", fecha_creacion: new Date("2025-02-22"), fecha_estimada: new Date("2025-02-25"), fecha_entrega: new Date("2025-02-24"),
    estado: "entregado", costo_envio: 0.00, promocion_envio_aplicada: true, numero_guia: "WM-SV-2025-0012",
    paquetes: [
      { sku: "ELEC-006", nombre: "Smart Watch Fitbit Versa 4", cantidad: 1, peso_kg: 0.3 },
      { sku: "ELEC-007", nombre: "Bocina Bluetooth JBL Charge 5", cantidad: 1, peso_kg: 1.2 }
    ],
    historial: [
      { estado: "preparando", fecha: new Date("2025-02-22T12:30:00Z"), ubicacion: "Centro online 9001", detalle: "Paquete consolidado." },
      { estado: "entregado", fecha: new Date("2025-02-24T17:20:00Z"), ubicacion: "San Salvador", detalle: "Entrega con firma digital." }
    ],
    incidente: null
  },
  {
    codigo_envio: "ENV-0007", ticket_id: "TKT-0014", cliente_id: "rosa.mendez@gmail.com", sucursal_origen_id: 9001,
    direccion_destino: { calle: "Col. Utila, Av. El Carmen #88", ciudad: "Santa Ana", codigo_postal: "02001", departamento: "Santa Ana", pais: "El Salvador" },
    transportista: "Cargo Expreso", servicio: "estandar", fecha_creacion: new Date("2025-03-05"), fecha_estimada: new Date("2025-03-09"), fecha_entrega: new Date("2025-03-08"),
    estado: "entregado", costo_envio: 0.00, promocion_envio_aplicada: true, numero_guia: "WM-SV-2025-0014",
    paquetes: [
      { sku: "HOGAR-003", nombre: "Aspiradora Bissell CleanView 2252", cantidad: 1, peso_kg: 5.4 },
      { sku: "HOGAR-001", nombre: "Sarten Antiadherente Cuisinart 12\"", cantidad: 1, peso_kg: 1.1 }
    ],
    historial: [
      { estado: "preparando", fecha: new Date("2025-03-05T10:05:00Z"), ubicacion: "Centro online 9001", detalle: "Articulo voluminoso embalado." },
      { estado: "entregado", fecha: new Date("2025-03-08T13:50:00Z"), ubicacion: "Santa Ana", detalle: "Entrega completada." }
    ],
    incidente: null
  },
  {
    codigo_envio: "ENV-0008", ticket_id: "TKT-0016", cliente_id: "claudia.aguilar@yahoo.com", sucursal_origen_id: 9001,
    direccion_destino: { calle: "Col. Escalon, Calle Poniente #17", ciudad: "San Salvador", codigo_postal: "01101", departamento: "San Salvador", pais: "El Salvador" },
    transportista: "Walmart Logistics", servicio: "asegurado", fecha_creacion: new Date("2025-03-15"), fecha_estimada: new Date("2025-03-18"), fecha_entrega: new Date("2025-03-17"),
    estado: "entregado", costo_envio: 0.00, promocion_envio_aplicada: true, numero_guia: "WM-SV-2025-0016",
    paquetes: [
      { sku: "ELEC-008", nombre: "Camara Canon EOS Rebel SL3", cantidad: 1, peso_kg: 1.6 }
    ],
    historial: [
      { estado: "preparando", fecha: new Date("2025-03-15T08:40:00Z"), ubicacion: "Centro online 9001", detalle: "Pedido asegurado por alto valor." },
      { estado: "entregado", fecha: new Date("2025-03-17T15:25:00Z"), ubicacion: "San Salvador", detalle: "Entrega verificada con documento." }
    ],
    incidente: null
  },
  {
    codigo_envio: "ENV-0009", ticket_id: "TKT-0018", cliente_id: "gabriela.zuniga@hotmail.com", sucursal_origen_id: 9001,
    direccion_destino: { calle: "Bo. San Miguelito, Av. Sur #19", ciudad: "San Miguel", codigo_postal: "05001", departamento: "San Miguel", pais: "El Salvador" },
    transportista: "Cargo Expreso", servicio: "estandar", fecha_creacion: new Date("2025-03-25"), fecha_estimada: new Date("2025-03-31"), fecha_entrega: null,
    estado: "en_camino", costo_envio: 0.00, promocion_envio_aplicada: true, numero_guia: "WM-SV-2025-0018",
    paquetes: [
      { sku: "ROPA-006", nombre: "Pijama Nina Wonder Nation 2 piezas", cantidad: 2, peso_kg: 0.6 },
      { sku: "JUG-002", nombre: "Barbie Dreamhouse 2023", cantidad: 1, peso_kg: 8.5 }
    ],
    historial: [
      { estado: "preparando", fecha: new Date("2025-03-25T09:00:00Z"), ubicacion: "Centro online 9001", detalle: "Producto voluminoso asignado a ruta especial." },
      { estado: "en_camino", fecha: new Date("2025-03-27T07:30:00Z"), ubicacion: "Ruta San Miguel", detalle: "Paquete en traslado." }
    ],
    incidente: null
  },
  {
    codigo_envio: "ENV-0010", ticket_id: "TKT-0020", cliente_id: "ingrid.rivas@gmail.com", sucursal_origen_id: 9001,
    direccion_destino: { calle: "Res. Los Pinos, Pasaje 2 #7", ciudad: "Sonsonate", codigo_postal: "03001", departamento: "Sonsonate", pais: "El Salvador" },
    transportista: "Walmart Logistics", servicio: "estandar", fecha_creacion: new Date("2025-04-05"), fecha_estimada: new Date("2025-04-09"), fecha_entrega: new Date("2025-04-08"),
    estado: "entregado", costo_envio: 0.00, promocion_envio_aplicada: true, numero_guia: "WM-SV-2025-0020",
    paquetes: [
      { sku: "HOGAR-006", nombre: "Organizador de Closet Rubbermaid", cantidad: 1, peso_kg: 4.1 },
      { sku: "HOGAR-002", nombre: "Juego de Sabanas Queen Mainstays", cantidad: 1, peso_kg: 0.8 }
    ],
    historial: [
      { estado: "preparando", fecha: new Date("2025-04-05T11:45:00Z"), ubicacion: "Centro online 9001", detalle: "Pedido preparado." },
      { estado: "entregado", fecha: new Date("2025-04-08T10:10:00Z"), ubicacion: "Sonsonate", detalle: "Entrega completada." }
    ],
    incidente: null
  },
  {
    codigo_envio: "ENV-0011", ticket_id: "TKT-0022", cliente_id: "lorena.sandoval@gmail.com", sucursal_origen_id: 9001,
    direccion_destino: { calle: "Urb. Santa Monica, Calle 1 #38", ciudad: "San Salvador", codigo_postal: "01101", departamento: "San Salvador", pais: "El Salvador" },
    transportista: "Walmart Logistics", servicio: "estandar", fecha_creacion: new Date("2025-04-15"), fecha_estimada: new Date("2025-04-18"), fecha_entrega: new Date("2025-04-18"),
    estado: "entregado", costo_envio: 0.00, promocion_envio_aplicada: true, numero_guia: "WM-SV-2025-0022",
    paquetes: [
      { sku: "JUG-004", nombre: "Nerf Elite 2.0 Commander RD-6", cantidad: 2, peso_kg: 1.4 },
      { sku: "JUG-001", nombre: "LEGO Classic Ladrillos Creativos", cantidad: 1, peso_kg: 1.1 }
    ],
    historial: [
      { estado: "preparando", fecha: new Date("2025-04-15T14:25:00Z"), ubicacion: "Centro online 9001", detalle: "Pedido de juguetes preparado." },
      { estado: "entregado", fecha: new Date("2025-04-18T12:35:00Z"), ubicacion: "San Salvador", detalle: "Entrega en domicilio." }
    ],
    incidente: null
  },
  {
    codigo_envio: "ENV-0012", ticket_id: "TKT-0024", cliente_id: "patricia.diaz@gmail.com", sucursal_origen_id: 9001,
    direccion_destino: { calle: "Col. San Francisco, Calle Poniente #93", ciudad: "San Salvador", codigo_postal: "01101", departamento: "San Salvador", pais: "El Salvador" },
    transportista: "Walmart Logistics", servicio: "asegurado", fecha_creacion: new Date("2025-04-25"), fecha_estimada: new Date("2025-04-28"), fecha_entrega: new Date("2025-04-27"),
    estado: "entregado", costo_envio: 0.00, promocion_envio_aplicada: true, numero_guia: "WM-SV-2025-0024",
    paquetes: [
      { sku: "ELEC-002", nombre: "Laptop HP 15.6\" Intel Core i5", cantidad: 1, peso_kg: 2.2 },
      { sku: "ELEC-005", nombre: "Impresora HP DeskJet 2755e", cantidad: 1, peso_kg: 3.0 }
    ],
    historial: [
      { estado: "preparando", fecha: new Date("2025-04-25T10:35:00Z"), ubicacion: "Centro online 9001", detalle: "Pedido de electronica empacado." },
      { estado: "entregado", fecha: new Date("2025-04-27T09:55:00Z"), ubicacion: "San Salvador", detalle: "Entrega finalizada." }
    ],
    incidente: { tipo: "producto_incompleto", detalle: "Cliente reporto impresora sin cable de energia.", relacion_devolucion: "DVL-0005" }
  },
  {
    codigo_envio: "ENV-0013", ticket_id: "TKT-0026", cliente_id: "stephanie.perez@yahoo.com", sucursal_origen_id: 9001,
    direccion_destino: { calle: "Col. Escalon, Calle Norte #55", ciudad: "San Salvador", codigo_postal: "01101", departamento: "San Salvador", pais: "El Salvador" },
    transportista: "Walmart Logistics", servicio: "asegurado", fecha_creacion: new Date("2025-05-08"), fecha_estimada: new Date("2025-05-11"), fecha_entrega: null,
    estado: "en_camino", costo_envio: 0.00, promocion_envio_aplicada: true, numero_guia: "WM-SV-2025-0026",
    paquetes: [
      { sku: "ELEC-004", nombre: "iPad Apple 10.9\" Wi-Fi 64GB", cantidad: 1, peso_kg: 0.7 },
      { sku: "ELEC-003", nombre: "Audifonos Sony WH-1000XM5", cantidad: 1, peso_kg: 0.5 }
    ],
    historial: [
      { estado: "preparando", fecha: new Date("2025-05-08T12:00:00Z"), ubicacion: "Centro online 9001", detalle: "Pedido asegurado preparado." },
      { estado: "en_camino", fecha: new Date("2025-05-09T08:20:00Z"), ubicacion: "Ruta San Salvador", detalle: "En ruta de entrega." }
    ],
    incidente: null
  },
  {
    codigo_envio: "ENV-0014", ticket_id: "TKT-0028", cliente_id: "wendy.bonilla@hotmail.com", sucursal_origen_id: 9001,
    direccion_destino: { calle: "Bo. Las Delicias, Av. Principal #42", ciudad: "San Miguel", codigo_postal: "05001", departamento: "San Miguel", pais: "El Salvador" },
    transportista: "Pendiente asignacion", servicio: "estandar", fecha_creacion: new Date("2025-05-18"), fecha_estimada: new Date("2025-05-24"), fecha_entrega: null,
    estado: "pendiente", costo_envio: 0.00, promocion_envio_aplicada: true, numero_guia: "WM-SV-2025-0028",
    paquetes: [
      { sku: "JUG-002", nombre: "Barbie Dreamhouse 2023", cantidad: 1, peso_kg: 8.5 },
      { sku: "JUG-003", nombre: "Hot Wheels Pack 20 Carros", cantidad: 2, peso_kg: 1.0 }
    ],
    historial: [
      { estado: "pendiente", fecha: new Date("2025-05-18T16:30:00Z"), ubicacion: "Centro online 9001", detalle: "Pedido pendiente de asignacion a transportista." }
    ],
    incidente: null
  },
  {
    codigo_envio: "ENV-0015", ticket_id: "TKT-0030", cliente_id: "alicia.escobar25@itca.edu.sv", sucursal_origen_id: 9001,
    direccion_destino: { calle: "Urb. California, Calle 5 #22", ciudad: "Santa Ana", codigo_postal: "02001", departamento: "Santa Ana", pais: "El Salvador" },
    transportista: "Pendiente asignacion", servicio: "estandar", fecha_creacion: new Date("2025-05-28"), fecha_estimada: new Date("2025-06-02"), fecha_entrega: null,
    estado: "pendiente", costo_envio: 0.00, promocion_envio_aplicada: true, numero_guia: "WM-SV-2025-0030",
    paquetes: [
      { sku: "ROPA-003", nombre: "Vestido Floral Mujer Terra & Sky", cantidad: 2, peso_kg: 0.8 },
      { sku: "ROPA-004", nombre: "Tenis Deportivos Athletic Works Mujer", cantidad: 1, peso_kg: 0.9 },
      { sku: "FARM-003", nombre: "Protector Solar Neutrogena SPF 50", cantidad: 1, peso_kg: 0.15 }
    ],
    historial: [
      { estado: "pendiente", fecha: new Date("2025-05-28T18:05:00Z"), ubicacion: "Centro online 9001", detalle: "Pedido recibido, pendiente de preparacion." }
    ],
    incidente: null
  },
  {
    codigo_envio: "ENV-0016", ticket_id: "TKT-0032", cliente_id: "jorge.melara@gmail.com", sucursal_origen_id: 9001,
    direccion_destino: { calle: "Col. Lomas de San Francisco #101", ciudad: "San Salvador", codigo_postal: "01101", departamento: "San Salvador", pais: "El Salvador" },
    transportista: "Walmart Logistics", servicio: "asegurado", fecha_creacion: new Date("2026-01-22"), fecha_estimada: new Date("2026-01-25"), fecha_entrega: new Date("2026-01-24"),
    estado: "entregado", costo_envio: 0.00, promocion_envio_aplicada: true, numero_guia: "WM-SV-2026-0032",
    paquetes: [
      { sku: "ELEC-004", nombre: "iPad Apple 10.9\" Wi-Fi 64GB", cantidad: 1, peso_kg: 0.7 },
      { sku: "ELEC-007", nombre: "Bocina Bluetooth JBL Charge 5", cantidad: 1, peso_kg: 1.2 }
    ],
    historial: [
      { estado: "preparando", fecha: new Date("2026-01-22T10:10:00Z"), ubicacion: "Centro online 9001", detalle: "Pedido de electronica preparado." },
      { estado: "entregado", fecha: new Date("2026-01-24T15:05:00Z"), ubicacion: "San Salvador", detalle: "Entrega completada con observacion de empaque." }
    ],
    incidente: { tipo: "golpe_en_empaque", detalle: "Bocina reportada con golpe visible al recibir.", relacion_devolucion: "DVL-0007" }
  },
  {
    codigo_envio: "ENV-0017", ticket_id: "TKT-0034", cliente_id: "patricia.diaz@gmail.com", sucursal_origen_id: 9001,
    direccion_destino: { calle: "Col. San Francisco, Calle Poniente #93", ciudad: "San Salvador", codigo_postal: "01101", departamento: "San Salvador", pais: "El Salvador" },
    transportista: "Walmart Logistics", servicio: "asegurado", fecha_creacion: new Date("2026-02-18"), fecha_estimada: new Date("2026-02-21"), fecha_entrega: new Date("2026-02-20"),
    estado: "entregado", costo_envio: 0.00, promocion_envio_aplicada: true, numero_guia: "WM-SV-2026-0034",
    paquetes: [
      { sku: "ELEC-008", nombre: "Camara Canon EOS Rebel SL3", cantidad: 1, peso_kg: 1.6 }
    ],
    historial: [
      { estado: "preparando", fecha: new Date("2026-02-18T11:15:00Z"), ubicacion: "Centro online 9001", detalle: "Paquete asegurado y sellado." },
      { estado: "entregado", fecha: new Date("2026-02-20T10:30:00Z"), ubicacion: "San Salvador", detalle: "Entrega al cliente titular." }
    ],
    incidente: null
  },
  {
    codigo_envio: "ENV-0018", ticket_id: "TKT-0036", cliente_id: "ana.lopez@gmail.com", sucursal_origen_id: 9001,
    direccion_destino: { calle: "Res. Los Heroes, Calle Principal #78", ciudad: "San Salvador", codigo_postal: "01101", departamento: "San Salvador", pais: "El Salvador" },
    transportista: "Walmart Logistics", servicio: "estandar", fecha_creacion: new Date("2026-03-20"), fecha_estimada: new Date("2026-03-24"), fecha_entrega: null,
    estado: "en_camino", costo_envio: 0.00, promocion_envio_aplicada: true, numero_guia: "WM-SV-2026-0036",
    paquetes: [
      { sku: "ROPA-002", nombre: "Jeans Slim Fit Wrangler Hombre", cantidad: 2, peso_kg: 1.4 },
      { sku: "ROPA-005", nombre: "Sudadera con Capucha Hanes Hombre", cantidad: 2, peso_kg: 1.2 }
    ],
    historial: [
      { estado: "preparando", fecha: new Date("2026-03-20T13:10:00Z"), ubicacion: "Centro online 9001", detalle: "Pedido empacado." },
      { estado: "en_camino", fecha: new Date("2026-03-21T08:00:00Z"), ubicacion: "Ruta San Salvador", detalle: "Paquete en ruta." }
    ],
    incidente: null
  },
  {
    codigo_envio: "ENV-0019", ticket_id: "TKT-0038", cliente_id: "stephanie.perez@yahoo.com", sucursal_origen_id: 9001,
    direccion_destino: { calle: "Col. Escalon, Calle Norte #55", ciudad: "San Salvador", codigo_postal: "01101", departamento: "San Salvador", pais: "El Salvador" },
    transportista: "Pendiente asignacion", servicio: "estandar", fecha_creacion: new Date("2026-04-25"), fecha_estimada: new Date("2026-04-29"), fecha_entrega: null,
    estado: "pendiente", costo_envio: 0.00, promocion_envio_aplicada: true, numero_guia: "WM-SV-2026-0038",
    paquetes: [
      { sku: "ELEC-001", nombre: "Televisor Samsung 55\"", cantidad: 1, peso_kg: 14.5 },
      { sku: "HOGAR-003", nombre: "Aspiradora Bissell CleanView 2252", cantidad: 1, peso_kg: 5.4 }
    ],
    historial: [
      { estado: "pendiente", fecha: new Date("2026-04-25T16:45:00Z"), ubicacion: "Centro online 9001", detalle: "Pendiente de despacho por articulo voluminoso." }
    ],
    incidente: { tipo: "cancelacion_parcial", detalle: "Cliente solicito cancelar aspiradora antes de despacho.", relacion_devolucion: "DVL-0010" }
  },
  {
    codigo_envio: "ENV-0020", ticket_id: "TKT-0040", cliente_id: "emerson.padilla25@itca.edu.sv", sucursal_origen_id: 9001,
    direccion_destino: { calle: "Col. Santa Lucia, Pasaje #3", ciudad: "Santa Ana", codigo_postal: "02001", departamento: "Santa Ana", pais: "El Salvador" },
    transportista: "Pendiente asignacion", servicio: "estandar", fecha_creacion: new Date("2026-05-28"), fecha_estimada: new Date("2026-06-02"), fecha_entrega: null,
    estado: "pendiente", costo_envio: 0.00, promocion_envio_aplicada: true, numero_guia: "WM-SV-2026-0040",
    paquetes: [
      { sku: "ELEC-003", nombre: "Audifonos Sony WH-1000XM5", cantidad: 1, peso_kg: 0.5 },
      { sku: "ELEC-006", nombre: "Smart Watch Fitbit Versa 4", cantidad: 1, peso_kg: 0.3 }
    ],
    historial: [
      { estado: "pendiente", fecha: new Date("2026-05-28T18:20:00Z"), ubicacion: "Centro online 9001", detalle: "Pedido recibido; pendiente por cancelacion parcial." }
    ],
    incidente: { tipo: "cancelacion_parcial", detalle: "Smart Watch cancelado antes del despacho.", relacion_devolucion: "DVL-0012" }
  }
])
