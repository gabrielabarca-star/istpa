"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';

// --- Iconos SVG ---
const BookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 19.5C4 18.1193 5.11929 17 6.5 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M6.5 2H20V22H6.5C5.11929 22 4 20.8807 4 19.5V4.5C4 3.11929 5.11929 2 6.5 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 6V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
const UploadIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M17 8L12 3L7 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 3V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

export default function ComplaintsBookSection() {
  const colors = {
    primaryText: '#002A5D',
    accent: '#08D3C4',
    bgSection: '#F0F7FF',
  };

  const [formData, setFormData] = useState({
    nombres: '', apellidoPaterno: '', apellidoMaterno: '', telefono: '', email: '',
    esMayorEdad: true, apoderado: '', departamento: '', provincia: '', distrito: '', direccion: '',
    tipoBien: 'Servicio', montoReclamado: '', productoServicio: '',
    tipoReclamo: 'Reclamo',
    area: '',
    detalle: '',
    pedido: '',
    archivoNombre: '',
    observaciones: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [fileError, setFileError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
        const checked = (e.target as HTMLInputElement).checked;
        setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
        setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  // Validación de archivo (PDF o Imagen, máx 10MB)
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileError('');
    
    if (file) {
      if (file.size > 10 * 1024 * 1024) { // 10 MB
        setFileError('El archivo excede los 10 MB permitidos.');
        e.target.value = ''; 
        setFormData(prev => ({ ...prev, archivoNombre: '' }));
      } else {
        setFormData(prev => ({ ...prev, archivoNombre: file.name }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const response = await fetch('/api/complaints', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section className="w-full py-16 sm:py-24" style={{ backgroundColor: colors.bgSection }}>
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-2">
            <BookIcon className="w-8 h-8 text-[#002A5D]" />
            <h2 className="text-4xl sm:text-5xl font-extrabold" style={{ color: colors.primaryText }}>
              Libro de Reclamaciones
            </h2>
          </div>
          <div className="w-16 h-1 mt-4 mx-auto" style={{ backgroundColor: colors.accent }}></div>
        </div>

        <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-slate-100">
          {status === 'success' ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckIcon className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-[#002A5D] mb-2">¡Reclamo Registrado!</h3>
              <p className="text-slate-600">Se ha generado su hoja de reclamación. Se enviará una copia a su correo.</p>
              <button onClick={() => window.location.reload()} className="mt-8 bg-[#002A5D] text-white px-6 py-2 rounded-full font-bold hover:bg-[#001F44]">Nuevo Reclamo</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* BLOQUE 1 */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <h3 className="text-lg font-bold text-[#002A5D] mb-4 border-b border-slate-200 pb-2">1. Identificación del consumidor reclamante</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input type="text" name="nombres" placeholder="Nombres Completos" required value={formData.nombres} onChange={handleChange} className="w-full p-3 rounded-lg border border-slate-300 focus:border-[#08D3C4] outline-none" />
                  <input type="text" name="apellidoPaterno" placeholder="Apellido Paterno" required value={formData.apellidoPaterno} onChange={handleChange} className="w-full p-3 rounded-lg border border-slate-300 focus:border-[#08D3C4] outline-none" />
                  <input type="text" name="apellidoMaterno" placeholder="Apellido Materno" required value={formData.apellidoMaterno} onChange={handleChange} className="w-full p-3 rounded-lg border border-slate-300 focus:border-[#08D3C4] outline-none" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <input type="tel" name="telefono" placeholder="Teléfono o Celular" required value={formData.telefono} onChange={handleChange} className="w-full p-3 rounded-lg border border-slate-300 focus:border-[#08D3C4] outline-none" />
                  <input type="email" name="email" placeholder="E-mail" required value={formData.email} onChange={handleChange} className="w-full p-3 rounded-lg border border-slate-300 focus:border-[#08D3C4] outline-none" />
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <input type="checkbox" id="mayorEdad" name="esMayorEdad" checked={formData.esMayorEdad} onChange={(e) => setFormData({...formData, esMayorEdad: e.target.checked})} className="w-4 h-4 text-[#002A5D]" />
                  <label htmlFor="mayorEdad" className="text-slate-700 text-sm cursor-pointer">Soy mayor de edad</label>
                </div>
                {!formData.esMayorEdad && (
                  <div className="mt-4">
                      <label className="block text-xs font-bold text-slate-500 mb-1">Apoderado (Padre/Madre)</label>
                      <input type="text" name="apoderado" placeholder="Nombre completo del apoderado" required={!formData.esMayorEdad} value={formData.apoderado} onChange={handleChange} className="w-full p-3 rounded-lg border border-slate-300 focus:border-[#08D3C4] outline-none bg-white" />
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <input type="text" name="departamento" placeholder="Departamento" required value={formData.departamento} onChange={handleChange} className="w-full p-3 rounded-lg border border-slate-300 focus:border-[#08D3C4] outline-none" />
                  <input type="text" name="provincia" placeholder="Provincia" required value={formData.provincia} onChange={handleChange} className="w-full p-3 rounded-lg border border-slate-300 focus:border-[#08D3C4] outline-none" />
                  <input type="text" name="distrito" placeholder="Distrito" required value={formData.distrito} onChange={handleChange} className="w-full p-3 rounded-lg border border-slate-300 focus:border-[#08D3C4] outline-none" />
                </div>
                <div className="mt-4">
                  <input type="text" name="direccion" placeholder="Dirección (Av, Jr, Calle, Nro)" required value={formData.direccion} onChange={handleChange} className="w-full p-3 rounded-lg border border-slate-300 focus:border-[#08D3C4] outline-none" />
                </div>
              </div>

              {/* BLOQUE 2 */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <h3 className="text-lg font-bold text-[#002A5D] mb-4 border-b border-slate-200 pb-2">2. Identificación del bien contratado</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                      <label className="block text-sm font-bold text-slate-600 mb-2">Tipo de Bien</label>
                      <div className="flex gap-4">
                          <label className="flex items-center gap-2 cursor-pointer bg-white px-4 py-2 rounded-lg border border-slate-300 hover:border-[#08D3C4]">
                              <input type="radio" name="tipoBien" value="Servicio" checked={formData.tipoBien === 'Servicio'} onChange={handleChange} />
                              <span className="text-slate-700 text-sm">Servicio</span>
                          </label>
                          <label className="flex items-center gap-2 cursor-pointer bg-white px-4 py-2 rounded-lg border border-slate-300 hover:border-[#08D3C4]">
                              <input type="radio" name="tipoBien" value="Producto" checked={formData.tipoBien === 'Producto'} onChange={handleChange} />
                              <span className="text-slate-700 text-sm">Producto</span>
                          </label>
                      </div>
                  </div>
                  <div>
                      <label className="block text-sm font-bold text-slate-600 mb-2">Monto Reclamado (Opcional)</label>
                      <input type="text" name="montoReclamado" placeholder="S/." value={formData.montoReclamado} onChange={handleChange} className="w-full p-3 rounded-lg border border-slate-300 focus:border-[#08D3C4] outline-none" />
                  </div>
                </div>
                <div className="mt-4">
                    <label className="block text-sm font-bold text-slate-600 mb-2">Descripción del Producto o Servicio</label>
                    <input type="text" name="productoServicio" placeholder="Ej: Matrícula, Certificado, etc." value={formData.productoServicio} onChange={handleChange} className="w-full p-3 rounded-lg border border-slate-300 focus:border-[#08D3C4] outline-none" />
                </div>
              </div>

              {/* BLOQUE 3 */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <h3 className="text-lg font-bold text-[#002A5D] mb-4 border-b border-slate-200 pb-2">3. Tipo de Reclamación</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <label className={`cursor-pointer p-4 rounded-xl border-2 transition-all ${formData.tipoReclamo === 'Reclamo' ? 'border-[#002A5D] bg-white shadow-sm' : 'border-slate-200 bg-white hover:border-sky-200'}`}>
                      <div className="flex items-center gap-2 mb-2">
                          <input type="radio" name="tipoReclamo" value="Reclamo" checked={formData.tipoReclamo === 'Reclamo'} onChange={handleChange} className="w-4 h-4 text-[#002A5D]" />
                          <span className="font-bold text-[#002A5D]">Reclamo</span>
                      </div>
                      <p className="text-xs text-slate-500">Disconformidad relacionada a los productos o servicios.</p>
                  </label>
                  <label className={`cursor-pointer p-4 rounded-xl border-2 transition-all ${formData.tipoReclamo === 'Queja' ? 'border-[#002A5D] bg-white shadow-sm' : 'border-slate-200 bg-white hover:border-sky-200'}`}>
                      <div className="flex items-center gap-2 mb-2">
                          <input type="radio" name="tipoReclamo" value="Queja" checked={formData.tipoReclamo === 'Queja'} onChange={handleChange} className="w-4 h-4 text-[#002A5D]" />
                          <span className="font-bold text-[#002A5D]">Queja</span>
                      </div>
                      <p className="text-xs text-slate-500">Disconformidad no relacionada a los productos o servicios; o malestar respecto a la atención.</p>
                  </label>
                </div>
              </div>

              {/* BLOQUE 4 */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <h3 className="text-lg font-bold text-[#002A5D] mb-4 border-b border-slate-200 pb-2">4. Programa de Estudios / Área</h3>
                <select name="area" value={formData.area} onChange={handleChange} className="w-full p-3 rounded-lg border border-slate-300 focus:border-[#08D3C4] outline-none bg-white">
                  <option value="">Seleccione una opción</option>
                  <option value="Carrera Técnica">Carrera Técnica</option>
                  <option value="Programa de Titulación">Programa de Titulación</option>
                  <option value="Centro de Idiomas o Cómputo">Centro de Idiomas o Cómputo</option>
                  <option value="Otros">Otros</option>
                </select>
              </div>

              {/* BLOQUE 5 */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <h3 className="text-lg font-bold text-[#002A5D] mb-4 border-b border-slate-200 pb-2">5. Detalle de la reclamación</h3>
                <textarea name="detalle" rows={5} required value={formData.detalle} onChange={handleChange} className="w-full p-3 rounded-lg border border-slate-300 focus:border-[#08D3C4] outline-none resize-none" placeholder="Describa detalladamente los hechos..."></textarea>
              </div>

              {/* BLOQUE 6 */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <h3 className="text-lg font-bold text-[#002A5D] mb-4 border-b border-slate-200 pb-2">6. Pedido del consumidor</h3>
                <textarea name="pedido" rows={3} required value={formData.pedido} onChange={handleChange} className="w-full p-3 rounded-lg border border-slate-300 focus:border-[#08D3C4] outline-none resize-none" placeholder="¿Qué solución solicita?"></textarea>
              </div>

              {/* BLOQUE 7 */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <h3 className="text-lg font-bold text-[#002A5D] mb-4 border-b border-slate-200 pb-2">7. Adjunto a la reclamación</h3>
                <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:bg-white transition-colors bg-white/50">
                  <input 
                      type="file" 
                      ref={fileInputRef}
                      accept="image/*,application/pdf" // Acepta imágenes y PDF
                      onChange={handleFileChange} 
                      className="hidden" 
                      id="file-upload"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center">
                      <UploadIcon className="w-10 h-10 text-slate-400 mb-3" />
                      <span className="text-sm font-bold text-[#002A5D]">Clic para subir imagen o PDF</span>
                      <span className="text-xs text-slate-500 mt-1">Máximo 10 MB</span>
                  </label>
                  {formData.archivoNombre && (
                      <div className="mt-4 inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full border border-green-200">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          <p className="text-sm text-green-700 font-medium truncate max-w-[200px]">{formData.archivoNombre}</p>
                      </div>
                  )}
                  {fileError && <p className="text-sm text-red-500 mt-2 font-semibold">{fileError}</p>}
                </div>
              </div>

              {/* BLOQUE 8 */}
              <div className="bg-slate-100 p-6 rounded-2xl border border-slate-200 opacity-70">
                <h3 className="text-lg font-bold text-slate-500 mb-2">8. Observaciones y acciones adoptadas por el proveedor</h3>
                <p className="text-xs text-slate-400 mb-3">(Espacio reservado para la institución)</p>
                <textarea name="observaciones" rows={2} disabled className="w-full p-3 rounded-lg border border-slate-300 bg-slate-200 resize-none text-slate-500 cursor-not-allowed" placeholder="A ser llenado por la institución..."></textarea>
              </div>

              {/* Footer Legal y Botón */}
              <div className="pt-6 border-t border-slate-200">
                  <p className="text-xs text-slate-500 mb-6 text-justify leading-relaxed">
                    La formulación del reclamo no impide acudir a otras vías de solución de controversias ni es requisito previo para interponer una denuncia ante INDECOPÍ. Tu reclamo o queja será asignado a un asesor y le brindaremos una respuesta en un plazo no mayor a quince (15) días hábiles, el cual es improrrogable. Te pedimos estar atento a tu correo.
                  </p>
                  <button 
                      type="submit" 
                      disabled={status === 'loading'}
                      className={`w-full bg-[#002A5D] text-white font-bold py-4 rounded-xl shadow-lg transition-all duration-300 text-lg
                          ${status === 'loading' ? 'opacity-70 cursor-wait' : 'hover:bg-[#001F44] hover:shadow-xl hover:-translate-y-1'}
                      `}
                  >
                      {status === 'loading' ? 'Enviando Reclamo...' : 'Enviar Hoja de Reclamación'}
                  </button>
                  {status === 'error' && <p className="text-red-500 text-center mt-4 font-bold">Hubo un error al enviar. Por favor intente nuevamente.</p>}
              </div>

            </form>
          )}
        </div>
      </div>
    </section>
  );
}