// ============================================================
// CONSULTAS SIMPLES
// ============================================================

// CONSULTA 1 - Buscar productos por categoria
db.productos.find({ categoria: "Electronica" })

// CONSULTA 2 - Productos con precio menor a $20
db.productos.find({ precio_venta: { $lt: 20 } })

// CONSULTA 3 - Clientes con Walmart Pass activo
db.clientes.find({ walmart_pass: true })

// CONSULTA 4 - Ventas online
db.ventas.find({ canal: "online" })

// CONSULTA 5 - Stock de un producto en todas las sucursales
db.sucursales.find({ "inventario.sku": "ELEC-001" }, { nombre_sucursal: 1, "inventario.$": 1 })

// CONSULTA 6 - Ventas pendientes de entrega
db.ventas.find({ estado_envio: "pendiente" })

// CONSULTA 7 - Historial de compras de un cliente
db.ventas.find({ cliente_id: "emerson.padilla25@itca.edu.sv" }).sort({ fecha_compra: -1 })

// CONSULTA 8 - Ventas mayores a $500
db.ventas.find({ total_pagado: { $gte: 500 } }).sort({ total_pagado: -1 })

// CONSULTA 9 - Productos de farmacia con fecha de caducidad registrada
db.productos.find({ categoria: "Farmacia", "especificaciones.fecha_caducidad": { $exists: true } })

// CONSULTA 10 - Clientes registrados en San Salvador
db.clientes.find({ "direccion_envio.departamento": "San Salvador" })

// CONSULTA 11 - Ventas que incluyen un producto especifico
db.ventas.find({ "detalles_productos.sku": "ELEC-002" })

// CONSULTA 12 - Ventas pagadas con PayPal
db.ventas.find({ metodo_pago: "paypal" }).sort({ fecha_compra: -1 })

// CONSULTA 13 - Productos de marca Walmart o marca privada
db.productos.find({ proveedor: { $in: ["Walmart Inc.", "Walmart Private Label"] } })

// CONSULTA 14 - Sucursales fisicas
db.sucursales.find({ canal: "fisica" }, { numero_tienda: 1, nombre_sucursal: 1, ubicacion: 1 })

// CONSULTA 15 - Ventas realizadas en 2026
db.ventas.find({ fecha_compra: { $gte: new Date("2026-01-01"), $lt: new Date("2027-01-01") } })

// CONSULTA 16 - Promociones activas
db.promociones.find({ activa: true }).sort({ fecha_fin: 1 })

// CONSULTA 17 - Promociones de envio gratis
db.promociones.find({ tipo: "envio_gratis", activa: true })

// CONSULTA 18 - Envios entregados
db.envios.find({ estado: "entregado" }).sort({ fecha_entrega: -1 })

// CONSULTA 19 - Envios en camino
db.envios.find({ estado: "en_camino" }).sort({ fecha_estimada: 1 })

// CONSULTA 20 - Envios pendientes de transportista
db.envios.find({ estado: "pendiente", transportista: "Pendiente asignacion" })

// CONSULTA 21 - Envios con incidentes registrados
db.envios.find({ incidente: { $ne: null } }, { codigo_envio: 1, ticket_id: 1, incidente: 1 })

// CONSULTA 22 - Devoluciones reembolsadas
db.devoluciones.find({ estado: "reembolsada" }).sort({ fecha_resolucion: -1 })

// CONSULTA 23 - Devoluciones pendientes o en revision
db.devoluciones.find({ estado: { $in: ["pendiente_revision", "en_revision"] } })

// CONSULTA 24 - Devoluciones por cancelacion de cliente
db.devoluciones.find({ motivo_general: "cancelacion_cliente" })

// CONSULTA 25 - Devoluciones relacionadas con un ticket
db.devoluciones.find({ ticket_id: "TKT-0040" })

// CONSULTA 26 - Tickets entregados con total mayor al minimo de envio gratis
db.ventas.find({ canal: "online", total_pagado: { $gte: 50 }, estado_envio: "entregado" })

// CONSULTA 27 - Productos con inventario bajo en una sucursal
db.sucursales.find({ numero_tienda: 1004, "inventario.cantidad_disponible": { $lte: 10 } }, { nombre_sucursal: 1, inventario: 1 })

// CONSULTA 28 - Clientes con mas de 3000 puntos
db.clientes.find({ puntos_acumulados: { $gte: 3000 } }).sort({ puntos_acumulados: -1 })

// CONSULTA 29 - Productos de alto valor
db.productos.find({ precio_venta: { $gte: 300 } }).sort({ precio_venta: -1 })

// CONSULTA 30 - Ventas fisicas de una sucursal especifica
db.ventas.find({ canal: "fisica", sucursal_id: 1001 }).sort({ fecha_compra: -1 })


// ============================================================
// AGGREGATION PIPELINES
// ============================================================

// PIPELINE 1 - Total de ventas por mes
db.ventas.aggregate([
  { $group: { _id: { anio: { $year: "$fecha_compra" }, mes: { $month: "$fecha_compra" } }, total_ventas: { $sum: "$total_pagado" }, cantidad_tickets: { $sum: 1 } } },
  { $sort: { "_id.anio": 1, "_id.mes": 1 } }
])

// PIPELINE 2 - Top 5 productos mas vendidos
db.ventas.aggregate([
  { $unwind: "$detalles_productos" },
  { $group: { _id: "$detalles_productos.sku", nombre: { $first: "$detalles_productos.nombre" }, total_vendido: { $sum: "$detalles_productos.cantidad" }, ingresos: { $sum: { $multiply: ["$detalles_productos.cantidad", "$detalles_productos.precio_unitario"] } } } },
  { $sort: { total_vendido: -1 } },
  { $limit: 5 }
])

// PIPELINE 3 - Ventas por canal
db.ventas.aggregate([
  { $group: { _id: "$canal", tickets: { $sum: 1 }, total_ventas: { $sum: "$total_pagado" }, ticket_promedio: { $avg: "$total_pagado" } } },
  { $sort: { total_ventas: -1 } }
])

// PIPELINE 4 - Ventas por sucursal con nombre de tienda
db.ventas.aggregate([
  { $group: { _id: "$sucursal_id", tickets: { $sum: 1 }, total_ventas: { $sum: "$total_pagado" } } },
  { $lookup: { from: "sucursales", localField: "_id", foreignField: "numero_tienda", as: "sucursal" } },
  { $unwind: "$sucursal" },
  { $project: { _id: 0, sucursal_id: "$_id", nombre_sucursal: "$sucursal.nombre_sucursal", canal: "$sucursal.canal", tickets: 1, total_ventas: 1 } },
  { $sort: { total_ventas: -1 } }
])

// PIPELINE 5 - Ticket promedio por metodo de pago
db.ventas.aggregate([
  { $group: { _id: "$metodo_pago", tickets: { $sum: 1 }, total: { $sum: "$total_pagado" }, promedio: { $avg: "$total_pagado" } } },
  { $sort: { promedio: -1 } }
])

// PIPELINE 6 - Clientes con total comprado
db.clientes.aggregate([
  { $lookup: { from: "ventas", localField: "correo", foreignField: "cliente_id", as: "compras" } },
  { $project: { _id: 0, nombre: 1, correo: 1, walmart_pass: 1, tickets: { $size: "$compras" }, total_comprado: { $sum: "$compras.total_pagado" } } },
  { $sort: { total_comprado: -1 } }
])

// PIPELINE 7 - Top 10 clientes por compras
db.ventas.aggregate([
  { $group: { _id: "$cliente_id", tickets: { $sum: 1 }, total_comprado: { $sum: "$total_pagado" } } },
  { $lookup: { from: "clientes", localField: "_id", foreignField: "correo", as: "cliente" } },
  { $unwind: "$cliente" },
  { $project: { _id: 0, correo: "$_id", nombre: "$cliente.nombre", walmart_pass: "$cliente.walmart_pass", tickets: 1, total_comprado: 1 } },
  { $sort: { total_comprado: -1 } },
  { $limit: 10 }
])

// PIPELINE 8 - Ingresos por categoria
db.ventas.aggregate([
  { $unwind: "$detalles_productos" },
  { $lookup: { from: "productos", localField: "detalles_productos.sku", foreignField: "sku", as: "producto" } },
  { $unwind: "$producto" },
  { $group: { _id: "$producto.categoria", unidades: { $sum: "$detalles_productos.cantidad" }, ingresos: { $sum: { $multiply: ["$detalles_productos.cantidad", "$detalles_productos.precio_unitario"] } } } },
  { $sort: { ingresos: -1 } }
])

// PIPELINE 9 - Inventario total por categoria
db.sucursales.aggregate([
  { $unwind: "$inventario" },
  { $lookup: { from: "productos", localField: "inventario.sku", foreignField: "sku", as: "producto" } },
  { $unwind: "$producto" },
  { $group: { _id: "$producto.categoria", stock_total: { $sum: "$inventario.cantidad_disponible" }, valor_inventario: { $sum: { $multiply: ["$inventario.cantidad_disponible", "$producto.precio_venta"] } } } },
  { $sort: { valor_inventario: -1 } }
])

// PIPELINE 10 - Envios por estado y transportista
db.envios.aggregate([
  { $group: { _id: { estado: "$estado", transportista: "$transportista" }, cantidad_envios: { $sum: 1 }, costo_total: { $sum: "$costo_envio" } } },
  { $sort: { "_id.estado": 1, cantidad_envios: -1 } }
])

// PIPELINE 11 - Tiempo promedio de entrega por transportista
db.envios.aggregate([
  { $match: { estado: "entregado", fecha_entrega: { $ne: null } } },
  { $project: { transportista: 1, dias_entrega: { $divide: [{ $subtract: ["$fecha_entrega", "$fecha_creacion"] }, 1000 * 60 * 60 * 24] } } },
  { $group: { _id: "$transportista", envios_entregados: { $sum: 1 }, promedio_dias: { $avg: "$dias_entrega" }, max_dias: { $max: "$dias_entrega" } } },
  { $sort: { promedio_dias: 1 } }
])

// PIPELINE 12 - Envios atrasados segun fecha estimada
db.envios.aggregate([
  { $match: { estado: "entregado", fecha_entrega: { $ne: null } } },
  { $project: { codigo_envio: 1, ticket_id: 1, transportista: 1, fecha_estimada: 1, fecha_entrega: 1, atrasado: { $gt: ["$fecha_entrega", "$fecha_estimada"] } } },
  { $match: { atrasado: true } }
])

// PIPELINE 13 - Devoluciones por motivo y estado
db.devoluciones.aggregate([
  { $group: { _id: { motivo: "$motivo_general", estado: "$estado" }, casos: { $sum: 1 }, monto_total: { $sum: "$monto_total" } } },
  { $sort: { casos: -1, monto_total: -1 } }
])

// PIPELINE 14 - Productos mas devueltos
db.devoluciones.aggregate([
  { $unwind: "$productos" },
  { $group: { _id: "$productos.sku", nombre: { $first: "$productos.nombre" }, unidades_devueltas: { $sum: "$productos.cantidad" }, monto_reembolsado: { $sum: "$productos.monto_reembolso" } } },
  { $sort: { unidades_devueltas: -1, monto_reembolsado: -1 } }
])

// PIPELINE 15 - Devoluciones por cliente con datos del cliente
db.devoluciones.aggregate([
  { $group: { _id: "$cliente_id", casos: { $sum: 1 }, monto_reembolsado: { $sum: "$monto_total" } } },
  { $lookup: { from: "clientes", localField: "_id", foreignField: "correo", as: "cliente" } },
  { $unwind: "$cliente" },
  { $project: { _id: 0, correo: "$_id", nombre: "$cliente.nombre", casos: 1, monto_reembolsado: 1 } },
  { $sort: { monto_reembolsado: -1 } }
])

// PIPELINE 16 - Detalle de envios con datos de venta y cliente
db.envios.aggregate([
  { $lookup: { from: "ventas", localField: "ticket_id", foreignField: "ticket_id", as: "venta" } },
  { $unwind: "$venta" },
  { $lookup: { from: "clientes", localField: "cliente_id", foreignField: "correo", as: "cliente" } },
  { $unwind: "$cliente" },
  { $project: { _id: 0, codigo_envio: 1, ticket_id: 1, estado_envio: "$estado", estado_venta: "$venta.estado_envio", total_pagado: "$venta.total_pagado", cliente: "$cliente.nombre", ciudad: "$direccion_destino.ciudad", departamento: "$direccion_destino.departamento" } },
  { $sort: { ticket_id: 1 } }
])

// PIPELINE 17 - Promociones activas con productos afectados
db.promociones.aggregate([
  { $match: { activa: true, productos_aplicados: { $ne: [] } } },
  { $unwind: "$productos_aplicados" },
  { $lookup: { from: "productos", localField: "productos_aplicados", foreignField: "sku", as: "producto" } },
  { $unwind: "$producto" },
  { $project: { _id: 0, codigo_promo: 1, nombre_promocion: "$nombre", descuento_pct: 1, sku: "$producto.sku", producto: "$producto.nombre", categoria: "$producto.categoria", precio_venta: "$producto.precio_venta" } },
  { $sort: { codigo_promo: 1, categoria: 1 } }
])

// PIPELINE 18 - Comparacion mensual 2025 vs 2026
db.ventas.aggregate([
  { $group: { _id: { anio: { $year: "$fecha_compra" }, mes: { $month: "$fecha_compra" } }, total: { $sum: "$total_pagado" }, tickets: { $sum: 1 } } },
  { $project: { _id: 0, anio: "$_id.anio", mes: "$_id.mes", total: 1, tickets: 1 } },
  { $sort: { mes: 1, anio: 1 } }
])

// PIPELINE 19 - Envios de alto valor con peso total
db.envios.aggregate([
  { $lookup: { from: "ventas", localField: "ticket_id", foreignField: "ticket_id", as: "venta" } },
  { $unwind: "$venta" },
  { $match: { "venta.total_pagado": { $gte: 300 } } },
  { $project: { _id: 0, codigo_envio: 1, ticket_id: 1, estado: 1, total_pagado: "$venta.total_pagado", peso_total_kg: { $sum: "$paquetes.peso_kg" }, paquetes: { $size: "$paquetes" } } },
  { $sort: { total_pagado: -1 } }
])

// PIPELINE 20 - Cantidad de productos y unidades por ticket
db.ventas.aggregate([
  { $project: { _id: 0, ticket_id: 1, cliente_id: 1, total_pagado: 1, productos_diferentes: { $size: "$detalles_productos" }, unidades_totales: { $sum: "$detalles_productos.cantidad" } } },
  { $sort: { unidades_totales: -1, total_pagado: -1 } }
])

// PIPELINE 21 - Clientes por departamento y membresia Walmart Pass
db.clientes.aggregate([
  { $group: { _id: { departamento: "$direccion_envio.departamento", walmart_pass: "$walmart_pass" }, clientes: { $sum: 1 }, puntos_promedio: { $avg: "$puntos_acumulados" } } },
  { $sort: { "_id.departamento": 1, "_id.walmart_pass": -1 } }
])

// PIPELINE 22 - Valor de inventario por sucursal
db.sucursales.aggregate([
  { $unwind: "$inventario" },
  { $lookup: { from: "productos", localField: "inventario.sku", foreignField: "sku", as: "producto" } },
  { $unwind: "$producto" },
  { $group: { _id: "$numero_tienda", nombre_sucursal: { $first: "$nombre_sucursal" }, skus: { $sum: 1 }, unidades: { $sum: "$inventario.cantidad_disponible" }, valor_inventario: { $sum: { $multiply: ["$inventario.cantidad_disponible", "$producto.precio_venta"] } } } },
  { $sort: { valor_inventario: -1 } }
])

// PIPELINE 23 - Venta neta por mes descontando devoluciones
db.ventas.aggregate([
  { $project: { anio: { $year: "$fecha_compra" }, mes: { $month: "$fecha_compra" }, ventas: "$total_pagado", reembolsos: { $literal: 0 } } },
  { $unionWith: { coll: "devoluciones", pipeline: [
    { $project: { anio: { $year: "$fecha_solicitud" }, mes: { $month: "$fecha_solicitud" }, ventas: { $literal: 0 }, reembolsos: "$monto_total" } }
  ] } },
  { $group: { _id: { anio: "$anio", mes: "$mes" }, ventas_brutas: { $sum: "$ventas" }, reembolsos: { $sum: "$reembolsos" } } },
  { $project: { _id: 0, anio: "$_id.anio", mes: "$_id.mes", ventas_brutas: 1, reembolsos: 1, ventas_netas: { $subtract: ["$ventas_brutas", "$reembolsos"] } } },
  { $sort: { anio: 1, mes: 1 } }
])

// PIPELINE 24 - Relacion entre ventas, envios y devoluciones por ticket
db.ventas.aggregate([
  { $lookup: { from: "envios", localField: "ticket_id", foreignField: "ticket_id", as: "envios" } },
  { $lookup: { from: "devoluciones", localField: "ticket_id", foreignField: "ticket_id", as: "devoluciones" } },
  { $project: { _id: 0, ticket_id: 1, cliente_id: 1, canal: 1, total_pagado: 1, estado_envio: 1, cantidad_envios: { $size: "$envios" }, cantidad_devoluciones: { $size: "$devoluciones" }, monto_devuelto: { $sum: "$devoluciones.monto_total" } } },
  { $match: { $or: [{ cantidad_envios: { $gt: 0 } }, { cantidad_devoluciones: { $gt: 0 } }] } },
  { $sort: { ticket_id: 1 } }
])

// PIPELINE 25 - Resumen general del proyecto en un solo resultado
db.ventas.aggregate([
  { $facet: {
    resumen_ventas: [
      { $group: { _id: null, tickets: { $sum: 1 }, ventas_totales: { $sum: "$total_pagado" }, ticket_promedio: { $avg: "$total_pagado" } } }
    ],
    top_productos: [
      { $unwind: "$detalles_productos" },
      { $group: { _id: "$detalles_productos.sku", nombre: { $first: "$detalles_productos.nombre" }, unidades: { $sum: "$detalles_productos.cantidad" } } },
      { $sort: { unidades: -1 } },
      { $limit: 5 }
    ],
    ventas_por_canal: [
      { $group: { _id: "$canal", tickets: { $sum: 1 }, total: { $sum: "$total_pagado" } } }
    ]
  } }
])

// PIPELINE 26 - Dashboard de logistica desde envios
db.envios.aggregate([
  { $facet: {
    por_estado: [
      { $group: { _id: "$estado", cantidad: { $sum: 1 } } },
      { $sort: { cantidad: -1 } }
    ],
    por_departamento: [
      { $group: { _id: "$direccion_destino.departamento", envios: { $sum: 1 } } },
      { $sort: { envios: -1 } }
    ],
    con_incidente: [
      { $match: { incidente: { $ne: null } } },
      { $project: { _id: 0, codigo_envio: 1, ticket_id: 1, estado: 1, incidente: 1 } }
    ]
  } }
])

// PIPELINE 27 - Dashboard de devoluciones
db.devoluciones.aggregate([
  { $facet: {
    por_estado: [
      { $group: { _id: "$estado", casos: { $sum: 1 }, monto: { $sum: "$monto_total" } } },
      { $sort: { casos: -1 } }
    ],
    por_canal: [
      { $group: { _id: "$canal_compra", casos: { $sum: 1 }, monto: { $sum: "$monto_total" } } }
    ],
    inspeccion: [
      { $group: { _id: "$requiere_inspeccion", casos: { $sum: 1 } } }
    ]
  } }
])

// PIPELINE 28 - Ventas de productos con promocion activa
db.promociones.aggregate([
  { $match: { activa: true, productos_aplicados: { $ne: [] } } },
  { $unwind: "$productos_aplicados" },
  { $lookup: { from: "ventas", let: { sku_promo: "$productos_aplicados" }, pipeline: [
    { $unwind: "$detalles_productos" },
    { $match: { $expr: { $eq: ["$detalles_productos.sku", "$$sku_promo"] } } },
    { $group: { _id: "$detalles_productos.sku", unidades: { $sum: "$detalles_productos.cantidad" }, ingresos: { $sum: { $multiply: ["$detalles_productos.cantidad", "$detalles_productos.precio_unitario"] } } } }
  ], as: "ventas_producto" } },
  { $unwind: { path: "$ventas_producto", preserveNullAndEmptyArrays: true } },
  { $project: { _id: 0, codigo_promo: 1, nombre: 1, sku: "$productos_aplicados", unidades_vendidas: { $ifNull: ["$ventas_producto.unidades", 0] }, ingresos: { $ifNull: ["$ventas_producto.ingresos", 0] } } },
  { $sort: { codigo_promo: 1, unidades_vendidas: -1 } }
])

// PIPELINE 29 - Productos sin inventario registrado en sucursales
db.productos.aggregate([
  { $lookup: { from: "sucursales", localField: "sku", foreignField: "inventario.sku", as: "sucursales_con_stock" } },
  { $match: { sucursales_con_stock: { $size: 0 } } },
  { $project: { _id: 0, sku: 1, nombre: 1, categoria: 1, precio_venta: 1 } },
  { $sort: { categoria: 1, sku: 1 } }
])

// PIPELINE 30 - Ranking de marcas por ingresos
db.ventas.aggregate([
  { $unwind: "$detalles_productos" },
  { $lookup: { from: "productos", localField: "detalles_productos.sku", foreignField: "sku", as: "producto" } },
  { $unwind: "$producto" },
  { $group: { _id: "$producto.marca", productos_distintos: { $addToSet: "$producto.sku" }, unidades: { $sum: "$detalles_productos.cantidad" }, ingresos: { $sum: { $multiply: ["$detalles_productos.cantidad", "$detalles_productos.precio_unitario"] } } } },
  { $project: { marca: "$_id", _id: 0, productos_distintos: { $size: "$productos_distintos" }, unidades: 1, ingresos: 1 } },
  { $sort: { ingresos: -1 } }
])


// ============================================================
// MAP REDUCE
// Nota: mapReduce se conserva aqui porque el proyecto lo solicita.
// En versiones modernas de MongoDB, aggregation suele ser la opcion recomendada.
// ============================================================

// MAP REDUCE 1 - Total vendido por cliente
db.ventas.mapReduce(
  function () {
    emit(this.cliente_id, { tickets: 1, total: this.total_pagado })
  },
  function (key, values) {
    var resultado = { tickets: 0, total: 0 }
    values.forEach(function (value) {
      resultado.tickets += value.tickets
      resultado.total += value.total
    })
    return resultado
  },
  { out: "mr_total_ventas_por_cliente" }
)

// MAP REDUCE 2 - Unidades e ingresos por SKU vendido
db.ventas.mapReduce(
  function () {
    this.detalles_productos.forEach(function (producto) {
      emit(producto.sku, { nombre: producto.nombre, unidades: producto.cantidad, ingresos: producto.cantidad * producto.precio_unitario })
    })
  },
  function (key, values) {
    var resultado = { nombre: "", unidades: 0, ingresos: 0 }
    values.forEach(function (value) {
      resultado.nombre = resultado.nombre || value.nombre
      resultado.unidades += value.unidades
      resultado.ingresos += value.ingresos
    })
    return resultado
  },
  { out: "mr_ventas_por_sku" }
)

// MAP REDUCE 3 - Total de ventas por canal
db.ventas.mapReduce(
  function () {
    emit(this.canal, { tickets: 1, total: this.total_pagado })
  },
  function (key, values) {
    var resultado = { tickets: 0, total: 0 }
    values.forEach(function (value) {
      resultado.tickets += value.tickets
      resultado.total += value.total
    })
    return resultado
  },
  { out: "mr_ventas_por_canal" }
)

// MAP REDUCE 4 - Total de ventas por mes
db.ventas.mapReduce(
  function () {
    var anio = this.fecha_compra.getFullYear()
    var mes = this.fecha_compra.getMonth() + 1
    emit(anio + "-" + (mes < 10 ? "0" + mes : mes), { tickets: 1, total: this.total_pagado })
  },
  function (key, values) {
    var resultado = { tickets: 0, total: 0 }
    values.forEach(function (value) {
      resultado.tickets += value.tickets
      resultado.total += value.total
    })
    return resultado
  },
  { out: "mr_ventas_por_mes" }
)

// MAP REDUCE 5 - Total de ventas por metodo de pago
db.ventas.mapReduce(
  function () {
    emit(this.metodo_pago, { tickets: 1, total: this.total_pagado })
  },
  function (key, values) {
    var resultado = { tickets: 0, total: 0 }
    values.forEach(function (value) {
      resultado.tickets += value.tickets
      resultado.total += value.total
    })
    return resultado
  },
  { out: "mr_ventas_por_metodo_pago" }
)

// MAP REDUCE 6 - Stock total por SKU en sucursales
db.sucursales.mapReduce(
  function () {
    this.inventario.forEach(function (item) {
      emit(item.sku, { sucursales: 1, stock_total: item.cantidad_disponible })
    })
  },
  function (key, values) {
    var resultado = { sucursales: 0, stock_total: 0 }
    values.forEach(function (value) {
      resultado.sucursales += value.sucursales
      resultado.stock_total += value.stock_total
    })
    return resultado
  },
  { out: "mr_stock_por_sku" }
)

// MAP REDUCE 7 - Valor de productos por proveedor
db.productos.mapReduce(
  function () {
    emit(this.proveedor, { productos: 1, valor_catalogo: this.precio_venta })
  },
  function (key, values) {
    var resultado = { productos: 0, valor_catalogo: 0 }
    values.forEach(function (value) {
      resultado.productos += value.productos
      resultado.valor_catalogo += value.valor_catalogo
    })
    return resultado
  },
  { out: "mr_productos_por_proveedor" }
)

// MAP REDUCE 8 - Devoluciones por motivo general
db.devoluciones.mapReduce(
  function () {
    emit(this.motivo_general, { casos: 1, monto: this.monto_total })
  },
  function (key, values) {
    var resultado = { casos: 0, monto: 0 }
    values.forEach(function (value) {
      resultado.casos += value.casos
      resultado.monto += value.monto
    })
    return resultado
  },
  { out: "mr_devoluciones_por_motivo" }
)

// MAP REDUCE 9 - Monto devuelto por cliente
db.devoluciones.mapReduce(
  function () {
    emit(this.cliente_id, { casos: 1, monto: this.monto_total })
  },
  function (key, values) {
    var resultado = { casos: 0, monto: 0 }
    values.forEach(function (value) {
      resultado.casos += value.casos
      resultado.monto += value.monto
    })
    return resultado
  },
  { out: "mr_devoluciones_por_cliente" }
)

// MAP REDUCE 10 - Productos devueltos por SKU
db.devoluciones.mapReduce(
  function () {
    this.productos.forEach(function (producto) {
      emit(producto.sku, { nombre: producto.nombre, unidades: producto.cantidad, monto: producto.monto_reembolso })
    })
  },
  function (key, values) {
    var resultado = { nombre: "", unidades: 0, monto: 0 }
    values.forEach(function (value) {
      resultado.nombre = resultado.nombre || value.nombre
      resultado.unidades += value.unidades
      resultado.monto += value.monto
    })
    return resultado
  },
  { out: "mr_devoluciones_por_sku" }
)

// MAP REDUCE 11 - Envios por departamento destino
db.envios.mapReduce(
  function () {
    emit(this.direccion_destino.departamento, { envios: 1, costo: this.costo_envio })
  },
  function (key, values) {
    var resultado = { envios: 0, costo: 0 }
    values.forEach(function (value) {
      resultado.envios += value.envios
      resultado.costo += value.costo
    })
    return resultado
  },
  { out: "mr_envios_por_departamento" }
)

// MAP REDUCE 12 - Envios por estado y transportista
db.envios.mapReduce(
  function () {
    emit(this.estado + "|" + this.transportista, { envios: 1, costo: this.costo_envio })
  },
  function (key, values) {
    var resultado = { envios: 0, costo: 0 }
    values.forEach(function (value) {
      resultado.envios += value.envios
      resultado.costo += value.costo
    })
    return resultado
  },
  { out: "mr_envios_por_estado_transportista" }
)

// MAP REDUCE 13 - Peso total enviado por estado
db.envios.mapReduce(
  function () {
    var peso = 0
    this.paquetes.forEach(function (paquete) {
      peso += paquete.peso_kg
    })
    emit(this.estado, { envios: 1, peso_total_kg: peso })
  },
  function (key, values) {
    var resultado = { envios: 0, peso_total_kg: 0 }
    values.forEach(function (value) {
      resultado.envios += value.envios
      resultado.peso_total_kg += value.peso_total_kg
    })
    return resultado
  },
  { out: "mr_peso_envios_por_estado" }
)

// MAP REDUCE 14 - Tiempo de entrega promedio por transportista
db.envios.mapReduce(
  function () {
    if (this.estado === "entregado" && this.fecha_entrega && this.fecha_creacion) {
      var dias = (this.fecha_entrega - this.fecha_creacion) / (1000 * 60 * 60 * 24)
      emit(this.transportista, { entregados: 1, dias_total: dias })
    }
  },
  function (key, values) {
    var resultado = { entregados: 0, dias_total: 0 }
    values.forEach(function (value) {
      resultado.entregados += value.entregados
      resultado.dias_total += value.dias_total
    })
    return resultado
  },
  { out: "mr_tiempo_entrega_transportista" }
)

// MAP REDUCE 15 - Clientes por departamento
db.clientes.mapReduce(
  function () {
    emit(this.direccion_envio.departamento, { clientes: 1, puntos: this.puntos_acumulados })
  },
  function (key, values) {
    var resultado = { clientes: 0, puntos: 0 }
    values.forEach(function (value) {
      resultado.clientes += value.clientes
      resultado.puntos += value.puntos
    })
    return resultado
  },
  { out: "mr_clientes_por_departamento" }
)

// MAP REDUCE 16 - Promociones activas por tipo
db.promociones.mapReduce(
  function () {
    emit(this.tipo, { promociones: 1, activas: this.activa ? 1 : 0, descuento_total: this.descuento_pct || 0 })
  },
  function (key, values) {
    var resultado = { promociones: 0, activas: 0, descuento_total: 0 }
    values.forEach(function (value) {
      resultado.promociones += value.promociones
      resultado.activas += value.activas
      resultado.descuento_total += value.descuento_total
    })
    return resultado
  },
  { out: "mr_promociones_por_tipo" }
)
