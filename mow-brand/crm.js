/* ===========================================================
   MoW CRM — lógica (datos en localStorage, 100% local)
   =========================================================== */

const KEY = 'mow-crm-v1';
const today = new Date().toISOString().slice(0, 10);

const DEFAULTS = {
  settings: {
    nombre: 'Diego Orellana', role: 'Product & UX/UI Designer',
    email: 'daorellanamgt@gmail.com', ciudad: 'Ciudad de Guatemala · GMT−6',
    nit: '0000000-0', banco: 'Banco — Guatemala', cuenta: 'Monetaria 000-000000-0',
    serie: 'SAT-A1B2', certificador: 'Nombre del certificador',
    tagline: 'Diseño UX/UI · Play · Craft', iva: 5, moneda: 'Q'
  },
  clients: [
    { id: 'c1', nombre: 'Cliente Demo, S.A.', nit: '1234567-8', direccion: 'Zona 10, Guatemala', contacto: 'María López', email: 'contacto@demo.com' }
  ],
  quotes: [
    { id: 'q1', num: 'COT-2026-001', clientId: 'c1', fecha: today, validez: today, proyecto: 'Rediseño app móvil', alcance: 'Research, UI alta fidelidad y design system', entrega: '6 semanas', estado: 'enviada', notas: '50% de anticipo, 50% contra entrega.\nIncluye 2 rondas de revisión por etapa.\nPrecios en quetzales (GTQ).',
      items: [
        { desc: 'Research & UX', detalle: 'Entrevistas, benchmarking, flujos y wireframes.', cant: 1, precio: 6500 },
        { desc: 'UI Design — alta fidelidad', detalle: 'Pantallas finales, estados y prototipo.', cant: 8, precio: 1200 },
        { desc: 'Design System', detalle: 'Tokens, componentes y documentación en Figma.', cant: 1, precio: 4800 }
      ] }
  ],
  invoices: []
};

let DB = load();
function load() { try { const d = JSON.parse(localStorage.getItem(KEY)); return d || structuredClone(DEFAULTS); } catch (e) { return structuredClone(DEFAULTS); } }
function save() { localStorage.setItem(KEY, JSON.stringify(DB)); }

/* ---------- helpers ---------- */
const $ = (id) => document.getElementById(id);
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
const esc = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const money = (n) => (DB.settings.moneda || 'Q') + ' ' + new Intl.NumberFormat('es-GT', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(+n || 0);
const fmtDate = (s) => { if (!s) return '—'; const p = s.split('-'); return p.length === 3 ? `${p[2]} / ${p[1]} / ${p[0]}` : s; };
const clientById = (id) => DB.clients.find(c => c.id === id) || {};
const qTotals = (q) => { const sub = (q.items || []).reduce((a, it) => a + (+it.cant || 0) * (+it.precio || 0), 0); const iva = sub * DB.settings.iva / 100; return { sub, iva, total: sub + iva }; };
const val = (id) => { const e = $(id); return e ? e.value.trim() : ''; };
function toast(msg) { const t = $('toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(t._t); t._t = setTimeout(() => t.classList.remove('show'), 2200); }

/* compact action icons */
const ICN = {
  eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',
  edit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>',
  copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>',
  doc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h4"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5L20 7"/></svg>',
  trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2M6 6l1 14a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-14"/></svg>'
};
const act = (onclick, title, icon, mod) => `<button class="iconbtn ${mod || ''}" title="${title}" aria-label="${title}" onclick="${onclick}">${icon}</button>`;

/* ---------- router ---------- */
const routes = ['dashboard', 'cotizaciones', 'facturas', 'clientes', 'ajustes'];
function currentRoute() { const r = (location.hash || '').replace('#/', ''); return routes.includes(r) ? r : 'dashboard'; }
function render() {
  const r = currentRoute();
  document.querySelectorAll('.nav a').forEach(a => a.classList.toggle('active', a.dataset.route === r));
  ({ dashboard: viewDashboard, cotizaciones: viewQuotes, facturas: viewInvoices, clientes: viewClients, ajustes: viewSettings }[r])();
}
window.addEventListener('hashchange', render);

/* ---------- views ---------- */
function viewDashboard() {
  const allQ = DB.quotes.map(q => ({ q, t: qTotals(q) }));
  const cotizado = allQ.reduce((a, x) => a + x.t.total, 0);
  const aprobado = allQ.filter(x => x.q.estado === 'aprobada').reduce((a, x) => a + x.t.total, 0);
  const facturado = DB.invoices.filter(i => i.estado === 'pagada').reduce((a, i) => a + qTotals(i).total, 0);
  const porCobrar = DB.invoices.filter(i => i.estado === 'pendiente').reduce((a, i) => a + qTotals(i).total, 0);
  const recent = DB.quotes.slice(0, 5);
  $('view').innerHTML = `
    <div class="top"><div><h1>Hola, ${esc(DB.settings.nombre.split(' ')[0])} 👋</h1><p>Control de tu marca MoW — ${DB.clients.length} clientes · ${DB.quotes.length} cotizaciones · ${DB.invoices.length} facturas</p></div>
      <a class="btn btn--primary" href="#/cotizaciones">+ Nueva cotización</a></div>
    <div class="metrics">
      <div class="metric"><span class="lbl">Total cotizado</span><span class="val">${money(cotizado)}</span><span class="sub">${DB.quotes.length} cotizaciones</span></div>
      <div class="metric"><span class="lbl">Aprobado</span><span class="val">${money(aprobado)}</span><span class="sub">listo para facturar</span></div>
      <div class="metric metric--accent"><span class="lbl">Por cobrar</span><span class="val">${money(porCobrar)}</span><span class="sub">facturas pendientes</span></div>
      <div class="metric"><span class="lbl">Facturado (pagado)</span><span class="val">${money(facturado)}</span><span class="sub">ingresos confirmados</span></div>
    </div>
    <div class="card"><div class="card__head"><h2>Cotizaciones recientes</h2><a class="btn btn--sm" href="#/cotizaciones">Ver todas</a></div>
      ${recent.length ? tableQuotes(recent) : emptyBlock('Sin cotizaciones aún', 'Crea tu primera cotización para empezar.', 'cotizaciones')}</div>`;
}

function tableQuotes(list) {
  return `<div class="tbl-wrap"><table class="tbl"><thead><tr><th>No.</th><th>Cliente</th><th>Proyecto</th><th class="num">Total</th><th>Estado</th><th></th></tr></thead><tbody>
    ${list.map(q => { const t = qTotals(q); return `<tr>
      <td class="mono">${esc(q.num)}</td>
      <td class="strong">${esc(clientById(q.clientId).nombre || '—')}</td>
      <td class="muted">${esc(q.proyecto || '—')}</td>
      <td class="num strong">${money(t.total)}</td>
      <td><span class="badge badge--${q.estado}">${q.estado}</span></td>
      <td><div class="row-actions">
        ${act(`previewQuote('${q.id}')`, 'Ver / PDF', ICN.eye)}
        ${act(`quoteForm('${q.id}')`, 'Editar', ICN.edit)}
        ${act(`quoteToInvoice('${q.id}')`, 'Generar factura', ICN.doc, 'iconbtn--key')}
      </div></td></tr>`; }).join('')}
  </tbody></table></div>`;
}

function viewQuotes() {
  $('view').innerHTML = `
    <div class="top"><div><h1>Cotizaciones</h1><p>Crea, edita y exporta a PDF tus cotizaciones.</p></div>
      <button class="btn btn--primary" onclick="quoteForm()">+ Nueva cotización</button></div>
    <div class="card">${DB.quotes.length ? tableQuotesFull(DB.quotes) : emptyBlock('Sin cotizaciones', 'Crea la primera con el botón de arriba.', null, 'quoteForm()')}</div>`;
}
function tableQuotesFull(list) {
  return `<div class="tbl-wrap"><table class="tbl"><thead><tr><th>No.</th><th>Cliente</th><th>Fecha</th><th class="num">Total</th><th>Estado</th><th></th></tr></thead><tbody>
    ${list.map(q => { const t = qTotals(q); return `<tr>
      <td class="mono">${esc(q.num)}</td>
      <td class="strong">${esc(clientById(q.clientId).nombre || '—')}</td>
      <td class="muted">${fmtDate(q.fecha)}</td>
      <td class="num strong">${money(t.total)}</td>
      <td>${statusSelect(q)}</td>
      <td><div class="row-actions">
        ${act(`previewQuote('${q.id}')`, 'Ver / PDF', ICN.eye)}
        ${act(`quoteForm('${q.id}')`, 'Editar', ICN.edit)}
        ${act(`dupQuote('${q.id}')`, 'Duplicar', ICN.copy)}
        ${act(`quoteToInvoice('${q.id}')`, 'Generar factura', ICN.doc, 'iconbtn--key')}
        ${act(`delQuote('${q.id}')`, 'Eliminar', ICN.trash, 'iconbtn--danger')}
      </div></td></tr>`; }).join('')}
  </tbody></table></div>`;
}
function statusSelect(q) {
  const opts = ['borrador', 'enviada', 'aprobada', 'rechazada'];
  return `<select class="mini-sel" onchange="setQuoteStatus('${q.id}',this.value)">
    ${opts.map(o => `<option ${o === q.estado ? 'selected' : ''}>${o}</option>`).join('')}</select>`;
}

function viewInvoices() {
  $('view').innerHTML = `
    <div class="top"><div><h1>Facturas</h1><p>Facturas electrónicas (SAT) y control de cobro.</p></div>
      <button class="btn btn--primary" onclick="invoiceForm()">+ Nueva factura</button></div>
    <div class="card">${DB.invoices.length ? tableInvoices(DB.invoices) : emptyBlock('Sin facturas', 'Genera una factura desde una cotización aprobada o créala directo.', null, 'invoiceForm()')}</div>`;
}
function tableInvoices(list) {
  return `<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Serie / DTE</th><th>Cliente</th><th>Fecha</th><th class="num">Total</th><th>Estado</th><th></th></tr></thead><tbody>
    ${list.map(i => { const t = qTotals(i); return `<tr>
      <td class="mono">${esc(i.serie || '')} · ${esc(i.dte || '—')}</td>
      <td class="strong">${esc(clientById(i.clientId).nombre || '—')}</td>
      <td class="muted">${fmtDate(i.fecha)}</td>
      <td class="num strong">${money(t.total)}</td>
      <td><span class="badge badge--${i.estado}">${i.estado}</span></td>
      <td><div class="row-actions">
        ${act(`previewInvoice('${i.id}')`, 'Ver / PDF', ICN.eye)}
        ${act(`invoiceForm('${i.id}')`, 'Editar', ICN.edit)}
        ${act(`toggleInvoicePaid('${i.id}')`, i.estado === 'pagada' ? 'Marcar pendiente' : 'Marcar pagada', ICN.check, i.estado === 'pagada' ? '' : 'iconbtn--key')}
        ${act(`delInvoice('${i.id}')`, 'Eliminar', ICN.trash, 'iconbtn--danger')}
      </div></td></tr>`; }).join('')}
  </tbody></table></div>`;
}

function viewClients() {
  $('view').innerHTML = `
    <div class="top"><div><h1>Clientes</h1><p>Tu cartera de clientes para cotizar y facturar.</p></div>
      <button class="btn btn--primary" onclick="clientForm()">+ Nuevo cliente</button></div>
    <div class="card">${DB.clients.length ? `<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Cliente</th><th>NIT</th><th>Contacto</th><th></th></tr></thead><tbody>
      ${DB.clients.map(c => `<tr>
        <td class="strong">${esc(c.nombre)}<div class="muted">${esc(c.direccion || '')}</div></td>
        <td class="mono">${esc(c.nit || '—')}</td>
        <td class="muted">${esc(c.contacto || '')}${c.email ? '<br>' + esc(c.email) : ''}</td>
        <td><div class="row-actions">${act(`clientForm('${c.id}')`, 'Editar', ICN.edit)}${act(`delClient('${c.id}')`, 'Eliminar', ICN.trash, 'iconbtn--danger')}</div></td>
      </tr>`).join('')}</tbody></table></div>` : emptyBlock('Sin clientes', 'Agrega tu primer cliente.', null, 'clientForm()')}</div>`;
}

function viewSettings() {
  const s = DB.settings;
  $('view').innerHTML = `
    <div class="top"><div><h1>Ajustes de marca</h1><p>Tus datos de emisor — alimentan todas las cotizaciones y facturas.</p></div></div>
    <div class="brandbar"><span class="logo">M<span class="o">o</span>W</span><div class="info"><b>${esc(s.nombre)}</b><span>${esc(s.role)} · ${esc(s.tagline)}</span></div></div>
    <div class="card"><div class="card__head"><h2>Datos del emisor</h2></div><div style="padding:24px">
      <div class="grid2">
        ${fieldHTML('s-nombre', 'Nombre / Marca', s.nombre)}
        ${fieldHTML('s-role', 'Rol', s.role)}
        ${fieldHTML('s-email', 'Email', s.email)}
        ${fieldHTML('s-ciudad', 'Ciudad / Zona horaria', s.ciudad)}
        ${fieldHTML('s-nit', 'NIT emisor', s.nit)}
        ${fieldHTML('s-tagline', 'Tagline', s.tagline)}
        ${fieldHTML('s-banco', 'Banco', s.banco)}
        ${fieldHTML('s-cuenta', 'Cuenta', s.cuenta)}
        ${fieldHTML('s-serie', 'Serie SAT', s.serie)}
        ${fieldHTML('s-certificador', 'Certificador SAT', s.certificador)}
        ${fieldHTML('s-iva', 'IVA (%)', s.iva, 'number')}
        ${fieldHTML('s-moneda', 'Símbolo moneda', s.moneda)}
      </div>
      <button class="btn btn--primary" onclick="saveSettings()">Guardar cambios</button>
    </div></div>`;
}
function fieldHTML(id, label, value, type) {
  return `<div class="field"><label>${label}</label><input id="${id}" type="${type || 'text'}" value="${esc(value)}"></div>`;
}
function saveSettings() {
  const s = DB.settings;
  s.nombre = val('s-nombre'); s.role = val('s-role'); s.email = val('s-email'); s.ciudad = val('s-ciudad');
  s.nit = val('s-nit'); s.tagline = val('s-tagline'); s.banco = val('s-banco'); s.cuenta = val('s-cuenta');
  s.serie = val('s-serie'); s.certificador = val('s-certificador'); s.iva = +val('s-iva') || 0; s.moneda = val('s-moneda') || 'Q';
  save(); render(); toast('Ajustes guardados');
}

function emptyBlock(title, sub, route, action) {
  const btn = action ? `<button class="btn btn--primary" onclick="${action}">Crear</button>` : route ? `<a class="btn btn--primary" href="#/${route}">Ir</a>` : '';
  return `<div class="empty"><h3>${title}</h3><p>${sub}</p>${btn}</div>`;
}

/* ---------- modal ---------- */
function openModal(title, body, foot) {
  $('modal-root').innerHTML = `<div class="modal-bg" onclick="if(event.target===this)closeModal()"><div class="modal">
    <div class="modal__head"><h2>${title}</h2><button class="x" onclick="closeModal()">×</button></div>
    <div class="modal__body">${body}</div>
    <div class="modal__foot">${foot}</div></div></div>`;
}
function closeModal() { $('modal-root').innerHTML = ''; }

/* ---------- client form ---------- */
function clientForm(id) {
  const c = id ? clientById(id) : {};
  openModal(id ? 'Editar cliente' : 'Nuevo cliente', `
    ${fieldHTML('cl-nombre', 'Nombre / Empresa', c.nombre || '')}
    <div class="grid2">${fieldHTML('cl-nit', 'NIT / CF', c.nit || '')}${fieldHTML('cl-contacto', 'Persona de contacto', c.contacto || '')}</div>
    <div class="grid2">${fieldHTML('cl-email', 'Email', c.email || '')}${fieldHTML('cl-direccion', 'Dirección', c.direccion || '')}</div>`,
    `<span></span><button class="btn btn--primary" onclick="saveClient('${id || ''}')">Guardar</button>`);
}
function saveClient(id) {
  const c = { id: id || uid(), nombre: val('cl-nombre'), nit: val('cl-nit'), contacto: val('cl-contacto'), email: val('cl-email'), direccion: val('cl-direccion') };
  if (!c.nombre) { toast('Pon un nombre'); return; }
  if (id) DB.clients[DB.clients.findIndex(x => x.id === id)] = c; else DB.clients.push(c);
  save(); closeModal(); render(); toast('Cliente guardado');
}
function delClient(id) { if (!confirm('¿Eliminar cliente?')) return; DB.clients = DB.clients.filter(c => c.id !== id); save(); render(); }

/* ---------- quote form ---------- */
function clientOptions(sel) { return DB.clients.map(c => `<option value="${c.id}" ${c.id === sel ? 'selected' : ''}>${esc(c.nombre)}</option>`).join(''); }
function itemRow(it = {}) {
  return `<div class="items-ed__row">
    <div class="items-ed__desc-wrap">
      <input class="it-desc" placeholder="Concepto" value="${esc(it.desc || '')}">
      <input class="it-detalle" placeholder="Detalle (opcional)" value="${esc(it.detalle || '')}">
    </div>
    <div class="num"><input class="it-cant" type="number" min="0" step="1" value="${it.cant ?? 1}" oninput="recalcItems()"></div>
    <div class="num"><input class="it-precio" type="number" min="0" step="0.01" value="${it.precio ?? 0}" oninput="recalcItems()"></div>
    <div class="num it-total">Q 0.00</div>
    <button class="items-ed__del" onclick="this.closest('.items-ed__row').remove();recalcItems()">×</button>
  </div>`;
}
function addItemRow() { $('items-ed-body').insertAdjacentHTML('beforeend', itemRow()); recalcItems(); }
function recalcItems() {
  let sub = 0;
  document.querySelectorAll('#items-ed-body .items-ed__row').forEach(r => {
    const c = +r.querySelector('.it-cant').value || 0, p = +r.querySelector('.it-precio').value || 0;
    r.querySelector('.it-total').textContent = money(c * p); sub += c * p;
  });
  const iva = sub * DB.settings.iva / 100;
  if ($('ed-sub')) { $('ed-sub').textContent = money(sub); $('ed-iva').textContent = money(iva); $('ed-total').textContent = money(sub + iva); }
}
function itemsEditor(items) {
  return `<div class="lbl" style="margin-bottom:8px">Conceptos</div>
    <div class="items-ed"><div class="items-ed__row items-ed__head"><div>Concepto / detalle</div><div class="num">Cant.</div><div class="num">Precio</div><div class="num">Total</div><div></div></div>
      <div id="items-ed-body">${(items && items.length ? items : [{}]).map(itemRow).join('')}</div></div>
    <button class="btn btn--sm" onclick="addItemRow()">+ Agregar línea</button>
    <div class="totbar"><span>Subtotal <b id="ed-sub">Q 0.00</b></span><span>IVA ${DB.settings.iva}% <b id="ed-iva">Q 0.00</b></span><span class="grand">Total <b id="ed-total">Q 0.00</b></span></div>`;
}
function quoteForm(id) {
  const q = id ? DB.quotes.find(x => x.id === id) : { num: 'COT-2026-' + String(DB.quotes.length + 1).padStart(3, '0'), fecha: today, validez: today, estado: 'borrador', items: [] };
  openModal(id ? 'Editar cotización' : 'Nueva cotización', `
    <div class="grid3">
      ${fieldHTML('q-num', 'No.', q.num)}
      <div class="field"><label>Fecha</label><input id="q-fecha" type="date" value="${q.fecha || today}"></div>
      <div class="field"><label>Válida hasta</label><input id="q-validez" type="date" value="${q.validez || today}"></div>
    </div>
    <div class="grid2">
      <div class="field"><label>Cliente</label><select id="q-cliente">${clientOptions(q.clientId)}</select></div>
      <div class="field"><label>Estado</label><select id="q-estado">${['borrador', 'enviada', 'aprobada', 'rechazada'].map(o => `<option ${o === q.estado ? 'selected' : ''}>${o}</option>`).join('')}</select></div>
    </div>
    <div class="grid2">${fieldHTML('q-proyecto', 'Proyecto', q.proyecto || '')}${fieldHTML('q-entrega', 'Entrega estimada', q.entrega || '')}</div>
    ${fieldHTML('q-alcance', 'Alcance', q.alcance || '')}
    ${itemsEditor(q.items)}
    <div class="field"><label>Condiciones / notas</label><textarea id="q-notas">${esc(q.notas || '50% de anticipo, 50% contra entrega.\nIncluye 2 rondas de revisión por etapa.\nPrecios en quetzales (GTQ).')}</textarea></div>`,
    `<span></span><button class="btn btn--primary" onclick="saveQuote('${id || ''}')">Guardar cotización</button>`);
  recalcItems();
}
function readItems() {
  return [...document.querySelectorAll('#items-ed-body .items-ed__row')].map(r => ({
    desc: r.querySelector('.it-desc').value.trim(), detalle: r.querySelector('.it-detalle').value.trim(),
    cant: +r.querySelector('.it-cant').value || 0, precio: +r.querySelector('.it-precio').value || 0
  })).filter(i => i.desc || i.precio);
}
function saveQuote(id) {
  const q = { id: id || uid(), num: val('q-num'), clientId: val('q-cliente'), fecha: val('q-fecha'), validez: val('q-validez'), proyecto: val('q-proyecto'), entrega: val('q-entrega'), alcance: val('q-alcance'), estado: val('q-estado'), notas: $('q-notas').value, items: readItems() };
  if (id) DB.quotes[DB.quotes.findIndex(x => x.id === id)] = q; else DB.quotes.unshift(q);
  save(); closeModal(); render(); toast('Cotización guardada');
}
function dupQuote(id) { const o = DB.quotes.find(x => x.id === id); const c = structuredClone(o); c.id = uid(); c.num = 'COT-2026-' + String(DB.quotes.length + 1).padStart(3, '0'); c.estado = 'borrador'; DB.quotes.unshift(c); save(); render(); toast('Cotización duplicada'); }
function delQuote(id) { if (!confirm('¿Eliminar cotización?')) return; DB.quotes = DB.quotes.filter(q => q.id !== id); save(); render(); }
function setQuoteStatus(id, s) { DB.quotes.find(q => q.id === id).estado = s; save(); toast('Estado: ' + s); }

/* ---------- invoice form ---------- */
function invoiceForm(id, fromQuote) {
  const src = fromQuote ? DB.quotes.find(q => q.id === fromQuote) : null;
  const i = id ? DB.invoices.find(x => x.id === id) : {
    serie: DB.settings.serie, dte: String(100000 + DB.invoices.length + 1), autorizacion: '', certificador: DB.settings.certificador,
    fecha: today, estado: 'pendiente', clientId: src ? src.clientId : (DB.clients[0] || {}).id, proyecto: src ? src.proyecto : '',
    refCot: src ? src.num : '', regimen: 'Sujeto a pagos trimestrales ISR', items: src ? structuredClone(src.items) : []
  };
  openModal(id ? 'Editar factura' : 'Nueva factura', `
    <div class="grid3">
      ${fieldHTML('i-serie', 'Serie', i.serie || '')}
      ${fieldHTML('i-dte', 'No. DTE', i.dte || '')}
      <div class="field"><label>Fecha</label><input id="i-fecha" type="date" value="${i.fecha || today}"></div>
    </div>
    <div class="grid2">
      <div class="field"><label>Cliente</label><select id="i-cliente">${clientOptions(i.clientId)}</select></div>
      <div class="field"><label>Estado</label><select id="i-estado">${['pendiente', 'pagada'].map(o => `<option ${o === i.estado ? 'selected' : ''}>${o}</option>`).join('')}</select></div>
    </div>
    <div class="grid2">${fieldHTML('i-proyecto', 'Proyecto', i.proyecto || '')}${fieldHTML('i-refcot', 'Ref. cotización', i.refCot || '')}</div>
    <div class="grid2">${fieldHTML('i-autorizacion', 'No. autorización (UUID)', i.autorizacion || '')}${fieldHTML('i-certificador', 'Certificador', i.certificador || '')}</div>
    ${itemsEditor(i.items)}
    <div class="field"><label>Frase de régimen</label><input id="i-regimen" value="${esc(i.regimen || '')}"></div>`,
    `<span></span><button class="btn btn--primary" onclick="saveInvoice('${id || ''}')">Guardar factura</button>`);
  recalcItems();
}
function saveInvoice(id) {
  const i = { id: id || uid(), serie: val('i-serie'), dte: val('i-dte'), fecha: val('i-fecha'), clientId: val('i-cliente'), estado: val('i-estado'), proyecto: val('i-proyecto'), refCot: val('i-refcot'), autorizacion: val('i-autorizacion'), certificador: val('i-certificador'), regimen: val('i-regimen'), items: readItems() };
  if (id) DB.invoices[DB.invoices.findIndex(x => x.id === id)] = i; else DB.invoices.unshift(i);
  save(); closeModal(); render(); toast('Factura guardada');
}
function quoteToInvoice(qid) { closeModal(); invoiceForm(null, qid); }
function toggleInvoicePaid(id) { const i = DB.invoices.find(x => x.id === id); i.estado = i.estado === 'pagada' ? 'pendiente' : 'pagada'; save(); render(); toast('Estado: ' + i.estado); }
function delInvoice(id) { if (!confirm('¿Eliminar factura?')) return; DB.invoices = DB.invoices.filter(i => i.id !== id); save(); render(); }

/* ---------- document generators (printable, doc.css) ---------- */
function markHTML() { return `<span class="mark"><span class="mark__logo">M<span class="mark__o">o</span>W</span></span>`; }
function senderHTML(s, nitLabel) { return `<div class="doc-head__sender">${markHTML()}<span class="doc-head__name">${esc(s.nombre)}</span><span class="doc-head__role">${esc(s.role)}</span><span class="doc-head__contact">${esc(s.email)}<br>${esc(s.ciudad)}<br>${nitLabel} ${esc(s.nit)}</span></div>`; }
function itemsTableHTML(items) {
  return `<table class="items"><thead><tr><th>Concepto</th><th class="num">Cant.</th><th class="num">Precio unit.</th><th class="num">Total</th></tr></thead><tbody>
    ${items.map(it => `<tr><td class="desc"><strong>${esc(it.desc)}</strong>${it.detalle ? `<span>${esc(it.detalle)}</span>` : ''}</td><td class="num">${it.cant}</td><td class="num">${money(it.precio)}</td><td class="num">${money(it.cant * it.precio)}</td></tr>`).join('')}
  </tbody></table>`;
}
function quoteDocHTML(q) {
  const s = DB.settings, c = clientById(q.clientId), t = qTotals(q);
  return `<section class="sheet"><div class="sheet__pad">
    <header class="doc-head">${senderHTML(s, 'NIT')}
      <div class="doc-head__type"><div class="doc-head__title">COTIZACIÓN</div>
        <dl class="doc-head__meta"><dt>No.</dt><dd>${esc(q.num)}</dd><dt>Fecha</dt><dd>${fmtDate(q.fecha)}</dd><dt>Válida hasta</dt><dd>${fmtDate(q.validez)}</dd></dl></div>
    </header><hr class="rule"/>
    <div class="parties">
      <div class="party"><div class="lbl party__label">Cliente</div><div class="party__name">${esc(c.nombre || '—')}</div><div class="party__lines">${esc(c.nit || '')}<br>${esc(c.direccion || '')}<br>${esc(c.contacto || c.email || '')}</div></div>
      <div class="party"><div class="lbl party__label">Proyecto</div><div class="party__name">${esc(q.proyecto || '—')}</div><div class="party__lines">${esc(q.alcance || '')}${q.entrega ? '<br>Entrega: ' + esc(q.entrega) : ''}</div></div>
    </div><hr class="rule"/>
    ${itemsTableHTML(q.items)}
    <div class="totals"><dl class="totals__box">
      <div class="totals__row"><dt>Subtotal</dt><dd>${money(t.sub)}</dd></div>
      <div class="totals__row"><dt>IVA ${s.iva}%</dt><dd>${money(t.iva)}</dd></div>
      <div class="totals__grand"><dt>Total estimado</dt><dd>${money(t.total)}</dd></div></dl></div>
    <div class="terms">
      <div class="terms__block"><div class="lbl">Condiciones</div><ul>${(q.notas || '').split('\n').filter(Boolean).map(l => `<li>${esc(l)}</li>`).join('')}</ul></div>
      <div class="terms__block"><div class="lbl">Datos de pago</div><div class="bank"><b>Banco</b> ${esc(s.banco)}<br><b>Cuenta</b> ${esc(s.cuenta)}<br><b>A nombre de</b> ${esc(s.nombre)}</div></div>
    </div>
    <div class="sign"><div class="sign__line"><div class="sign__rule"></div><div class="sign__caption">${esc(s.nombre)} · MoW</div></div><span class="stamp">▲ Gracias por confiar en MoW</span></div>
    </div><footer class="doc-foot"><span>MoW · ${esc(s.nombre)}</span><span>${esc(q.num)}</span><span>${esc(s.email)}</span></footer></section>`;
}
function invoiceDocHTML(i) {
  const s = DB.settings, c = clientById(i.clientId), t = qTotals(i);
  const fel = [['Documento', 'Factura electrónica (SAT)'], ['No. de autorización', i.autorizacion || '—'], ['Fecha certificación', fmtDate(i.fecha)], ['Certificador', i.certificador || '—'], ['Moneda', (s.moneda || 'Q') + ' — Quetzales'], ['Serie / DTE', (i.serie || '') + ' · ' + (i.dte || '')]];
  return `<section class="sheet"><div class="sheet__pad">
    <header class="doc-head">${senderHTML(s, 'NIT emisor')}
      <div class="doc-head__type"><div class="doc-head__title">FACTURA</div>
        <dl class="doc-head__meta"><dt>Serie</dt><dd>${esc(i.serie || '')}</dd><dt>No. DTE</dt><dd>${esc(i.dte || '')}</dd><dt>Fecha</dt><dd>${fmtDate(i.fecha)}</dd></dl></div>
    </header>
    <div style="margin-top:18px;padding:12px 16px;border-radius:10px;background:var(--paper-2);border:1px solid var(--line);display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:10px 22px">
      ${fel.map(([k, v]) => `<div style="display:flex;flex-direction:column;gap:2px"><span style="font-family:var(--mono);font-size:9.5px;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-faint)">${k}</span><span style="font-family:var(--mono);font-size:11.5px;word-break:break-all">${esc(v)}</span></div>`).join('')}
    </div><hr class="rule"/>
    <div class="parties">
      <div class="party"><div class="lbl party__label">Receptor</div><div class="party__name">${esc(c.nombre || '—')}</div><div class="party__lines">NIT ${esc(c.nit || 'CF')}<br>${esc(c.direccion || '')}<br>${esc(c.email || '')}</div></div>
      <div class="party"><div class="lbl party__label">Referencia</div><div class="party__name">${esc(i.proyecto || '—')}</div><div class="party__lines">${i.refCot ? 'Según cotización ' + esc(i.refCot) : ''}</div></div>
    </div><hr class="rule"/>
    ${itemsTableHTML(i.items)}
    <div class="totals"><dl class="totals__box">
      <div class="totals__row"><dt>Subtotal</dt><dd>${money(t.sub)}</dd></div>
      <div class="totals__row"><dt>IVA ${s.iva}%</dt><dd>${money(t.iva)}</dd></div>
      <div class="totals__grand"><dt>Total a pagar</dt><dd>${money(t.total)}</dd></div></dl></div>
    <p style="font-size:11px;color:var(--ink-soft);margin-top:14px;font-style:italic">Frase de régimen: «${esc(i.regimen || '')}».</p>
    <div class="terms">
      <div class="terms__block"><div class="lbl">Notas</div><ul><li>Documento válido como factura electrónica una vez certificado.</li><li>Conserve el número de autorización para cualquier aclaración.</li></ul></div>
      <div class="terms__block"><div class="lbl">Datos de pago</div><div class="bank"><b>Banco</b> ${esc(s.banco)}<br><b>Cuenta</b> ${esc(s.cuenta)}<br><b>A nombre de</b> ${esc(s.nombre)}</div></div>
    </div>
    <div class="sign"><div class="sign__line"><div class="sign__rule"></div><div class="sign__caption">${esc(s.nombre)} · MoW</div></div><span class="stamp">● ${i.estado === 'pagada' ? 'Pagada' : 'Pendiente'}</span></div>
    </div><footer class="doc-foot"><span>MoW · ${esc(s.nombre)}</span><span>Factura electrónica · SAT</span><span>${esc(s.email)}</span></footer></section>`;
}

/* ---------- preview + print ---------- */
function previewDoc(html) {
  openModal('Vista previa', `<div style="background:var(--paper-2);padding:16px;border-radius:12px">${html}</div>`,
    `<button class="btn" onclick="closeModal()">Cerrar</button><button class="btn btn--primary" onclick="doPrint()">⤓ Imprimir / PDF</button>`);
  window._printHTML = html;
}
function doPrint() {
  closeModal();
  $('printhost').innerHTML = window._printHTML || '';
  setTimeout(() => window.print(), 80);
}
function previewQuote(id) { previewDoc(quoteDocHTML(DB.quotes.find(q => q.id === id))); }
function previewInvoice(id) { previewDoc(invoiceDocHTML(DB.invoices.find(i => i.id === id))); }

/* ---------- backup ---------- */
$('export').onclick = () => {
  const blob = new Blob([JSON.stringify(DB, null, 2)], { type: 'application/json' });
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'mow-crm-backup.json'; a.click();
  toast('Backup exportado');
};
$('import').onclick = () => $('importfile').click();
$('importfile').onchange = (e) => {
  const f = e.target.files[0]; if (!f) return;
  const rd = new FileReader(); rd.onload = () => { try { DB = JSON.parse(rd.result); save(); render(); toast('Backup importado'); } catch (x) { toast('Archivo inválido'); } }; rd.readAsText(f);
};

/* expose for inline handlers */
Object.assign(window, { quoteForm, saveQuote, dupQuote, delQuote, setQuoteStatus, previewQuote, quoteToInvoice, invoiceForm, saveInvoice, toggleInvoicePaid, delInvoice, previewInvoice, clientForm, saveClient, delClient, saveSettings, addItemRow, recalcItems, closeModal, doPrint });

if (!location.hash) location.hash = '#/dashboard';
render();
