"use client";

import React, { useState, useRef } from 'react';
import { 
  BookOpen, 
  Upload, 
  CheckCircle2, 
  AlertCircle, 
  User, 
  ShoppingBag, 
  MessageSquare,
  FileCheck
} from 'lucide-react';

// --- Configuración de Colores Institucionales ---
const COLORS = {
  primary: "#1B355C", // Azul Profundo
  gold: "#D8A24C",    // Dorado
  accent: "#C8663E",  // Terracota
  bgLight: "#F8FAFC"
};

export default function ComplaintsBookSection() {
  const [formData, setFormData] = useState({
    nombres: '', apellidoPaterno: '', apellidoMaterno: '', telefono: '', email: '',
    esMayorEdad: true, apoderado: '', departamento: '', provincia: '', distrito: '', direccion: '',
    tipoBien: 'Servicio', montoReclamado: '', productoServicio: '',
    tipoReclamo: 'Reclamo', area: '', detalle: '', pedido: '', archivoNombre: '', observaciones: ''
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileError('');
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
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
    // Simulación de envío (Reemplazar con tu API real)
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section className="w-full py-24 lg:py-32 relative overflow-hidden" style={{ backgroundColor: COLORS.bgLight }}>
      {/* Decoración de fondo */}
      <div className="absolute top-0 left-0 w-full h-64 opacity-10" style={{ background: `linear-gradient(180deg, ${COLORS.primary} 0%, transparent 100%)` }} />
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* Cabecera Editorial */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6 transition-transform hover:scale-105">
            <BookOpen size={18} style={{ color: COLORS.gold }} />
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-500">Plataforma de Atención</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black tracking-tighter leading-tight uppercase" style={{ color: COLORS.primary }}>
            Libro de <br />
            <span className="text-slate-300 italic">Reclamaciones</span>
          </h2>
          <p className="mt-6 text-slate-500 max-w-xl mx-auto font-medium leading-relaxed">
            Conforme a lo establecido en el Código de Protección y Defensa del Consumidor, ponemos a su disposición nuestro libro virtual.
          </p>
        </div>

        <div className="bg-white rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
          
          {status === 'success' ? (
            <div className="py-24 px-10 text-center animate-in fade-in zoom-in duration-500">
              <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 size={48} className="text-green-500" />
              </div>
              <h3 className="text-3xl font-black mb-4 uppercase tracking-tight" style={{ color: COLORS.primary }}>¡Registro Exitoso!</h3>
              <p className="text-slate-500 max-w-md mx-auto mb-10 leading-relaxed font-medium">
                Su hoja de reclamación ha sido generada correctamente. Un asesor se pondrá en contacto con usted en un plazo máximo de 15 días hábiles.
              </p>
              <button 
                onClick={() => setStatus('idle')} 
                className="px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest text-white transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-900/20"
                style={{ backgroundColor: COLORS.primary }}
              >
                Volver al inicio
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="divide-y divide-slate-50">
              
              {/* SECCIÓN 1: IDENTIFICACIÓN */}
              <div className="p-10 lg:p-14">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-900/10" style={{ backgroundColor: `${COLORS.primary}08`, color: COLORS.primary }}>
                    <User size={24} />
                  </div>
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Paso 01</h3>
                    <h4 className="text-xl font-black uppercase tracking-tight" style={{ color: COLORS.primary }}>Identificación del Consumidor</h4>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Nombres</label>
                    <input type="text" name="nombres" required value={formData.nombres} onChange={handleChange} className="w-full p-4 rounded-2xl border border-slate-100 bg-slate-50/50 focus:bg-white focus:border-[#D8A24C] outline-none transition-all font-medium text-slate-700" placeholder="Ej. Juan Pedro" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Ap. Paterno</label>
                    <input type="text" name="apellidoPaterno" required value={formData.apellidoPaterno} onChange={handleChange} className="w-full p-4 rounded-2xl border border-slate-100 bg-slate-50/50 focus:bg-white focus:border-[#D8A24C] outline-none transition-all font-medium text-slate-700" placeholder="Ej. García" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Ap. Materno</label>
                    <input type="text" name="apellidoMaterno" required value={formData.apellidoMaterno} onChange={handleChange} className="w-full p-4 rounded-2xl border border-slate-100 bg-slate-50/50 focus:bg-white focus:border-[#D8A24C] outline-none transition-all font-medium text-slate-700" placeholder="Ej. Mendoza" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <input type="tel" name="telefono" placeholder="Teléfono / Celular" required value={formData.telefono} onChange={handleChange} className="w-full p-4 rounded-2xl border border-slate-100 bg-slate-50/50 focus:bg-white focus:border-[#D8A24C] outline-none font-medium" />
                  <input type="email" name="email" placeholder="Correo Electrónico" required value={formData.email} onChange={handleChange} className="w-full p-4 rounded-2xl border border-slate-100 bg-slate-50/50 focus:bg-white focus:border-[#D8A24C] outline-none font-medium" />
                </div>

                <div className="mt-8 flex flex-col md:flex-row gap-6">
                  <div className="flex items-center gap-3 bg-slate-50 px-6 py-4 rounded-2xl border border-slate-100 transition-colors hover:border-blue-100">
                    <input type="checkbox" id="mayorEdad" name="esMayorEdad" checked={formData.esMayorEdad} onChange={(e) => setFormData({...formData, esMayorEdad: e.target.checked})} className="w-5 h-5 accent-[#1B355C]" />
                    <label htmlFor="mayorEdad" className="text-sm font-bold text-slate-600 cursor-pointer">Soy mayor de edad</label>
                  </div>
                  {!formData.esMayorEdad && (
                    <input type="text" name="apoderado" placeholder="Nombre completo del Padre o Tutor" required={!formData.esMayorEdad} value={formData.apoderado} onChange={handleChange} className="flex-grow p-4 rounded-2xl border-2 border-dashed border-slate-200 focus:border-[#D8A24C] outline-none animate-in slide-in-from-left duration-300 font-medium" />
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
                  <input type="text" name="departamento" placeholder="Dpto." required value={formData.departamento} onChange={handleChange} className="p-4 rounded-2xl border border-slate-100 bg-slate-50/50 focus:bg-white outline-none font-medium" />
                  <input type="text" name="provincia" placeholder="Provincia" required value={formData.provincia} onChange={handleChange} className="p-4 rounded-2xl border border-slate-100 bg-slate-50/50 focus:bg-white outline-none font-medium" />
                  <input type="text" name="distrito" placeholder="Distrito" required value={formData.distrito} onChange={handleChange} className="p-4 rounded-2xl border border-slate-100 bg-slate-50/50 focus:bg-white outline-none font-medium" />
                  <input type="text" name="direccion" placeholder="Dirección Exacta" required value={formData.direccion} onChange={handleChange} className="p-4 rounded-2xl border border-slate-100 bg-slate-50/50 focus:bg-white outline-none font-medium" />
                </div>
              </div>

              {/* SECCIÓN 2: EL BIEN Y EL RECLAMO */}
              <div className="p-10 lg:p-14 bg-slate-50/30">
                <div className="flex flex-col md:flex-row gap-12">
                  {/* Tipo de Bien */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-6">
                      <ShoppingBag size={20} style={{ color: COLORS.accent }} />
                      <h4 className="text-lg font-black uppercase tracking-tight" style={{ color: COLORS.primary }}>Bien Contratado</h4>
                    </div>
                    <div className="space-y-4">
                      <div className="flex p-1 bg-slate-100 rounded-2xl">
                        {['Servicio', 'Producto'].map((tipo) => (
                          <button
                            key={tipo}
                            type="button"
                            onClick={() => setFormData({...formData, tipoBien: tipo})}
                            className={`flex-1 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${formData.tipoBien === tipo ? 'bg-white text-[#1B355C] shadow-md' : 'text-slate-400'}`}
                          >
                            {tipo}
                          </button>
                        ))}
                      </div>
                      <input type="text" name="productoServicio" placeholder="Ej. Matrícula Ciclo 2024-II" value={formData.productoServicio} onChange={handleChange} className="w-full p-4 rounded-2xl border border-slate-100 bg-white focus:border-[#D8A24C] outline-none font-medium shadow-sm" />
                      <input type="text" name="montoReclamado" placeholder="Monto Reclamado S/. (Opcional)" value={formData.montoReclamado} onChange={handleChange} className="w-full p-4 rounded-2xl border border-slate-100 bg-white focus:border-[#D8A24C] outline-none font-medium shadow-sm" />
                    </div>
                  </div>

                  {/* Tipo de Reclamación */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-6">
                      <MessageSquare size={20} style={{ color: COLORS.accent }} />
                      <h4 className="text-lg font-black uppercase tracking-tight" style={{ color: COLORS.primary }}>Tipo de Disconformidad</h4>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                      {['Reclamo', 'Queja'].map((item) => (
                        <label key={item} className={`group cursor-pointer p-4 rounded-2xl border-2 transition-all flex items-start gap-4 ${formData.tipoReclamo === item ? 'border-[#1B355C] bg-white shadow-lg shadow-blue-900/5' : 'border-slate-100 bg-white opacity-60 hover:opacity-100'}`}>
                          <input type="radio" name="tipoReclamo" value={item} checked={formData.tipoReclamo === item} onChange={handleChange} className="mt-1 accent-[#1B355C]" />
                          <div>
                            <span className="block font-black uppercase text-xs tracking-widest mb-1" style={{ color: COLORS.primary }}>{item}</span>
                            <p className="text-[10px] text-slate-400 font-medium leading-tight">
                              {item === 'Reclamo' ? 'Disconformidad relacionada directamente a los bienes o servicios.' : 'Malestar respecto a la atención o trato recibido.'}
                            </p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* SECCIÓN 3: DETALLE FINAL */}
              <div className="p-10 lg:p-14">
                <div className="space-y-8">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Área o Programa de Estudios</label>
                    <select name="area" value={formData.area} onChange={handleChange} className="w-full p-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:border-[#D8A24C] outline-none font-bold text-slate-600 appearance-none shadow-sm">
                      <option value="">Seleccionar Unidad Institucional</option>
                      <option value="Académica">Dirección Académica</option>
                      <option value="Administración">Caja / Administración</option>
                      <option value="Bienestar">Bienestar Estudiantil</option>
                      <option value="Otros">Otros Servicios</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Detalle de los hechos</h4>
                      <textarea name="detalle" rows={6} required value={formData.detalle} onChange={handleChange} className="w-full p-6 rounded-[2rem] border border-slate-100 bg-slate-50 focus:bg-white focus:border-[#D8A24C] outline-none resize-none font-medium shadow-inner" placeholder="Escriba aquí su reclamo..."></textarea>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Su pedido concreto</h4>
                      <textarea name="pedido" rows={6} required value={formData.pedido} onChange={handleChange} className="w-full p-6 rounded-[2rem] border border-slate-100 bg-slate-50 focus:bg-white focus:border-[#D8A24C] outline-none resize-none font-medium shadow-inner" placeholder="¿Qué solución espera obtener?"></textarea>
                    </div>
                  </div>

                  {/* Upload con Estilo Premium */}
                  <div className="relative group">
                    <input type="file" ref={fileInputRef} accept="image/*,application/pdf" onChange={handleFileChange} className="hidden" id="file-upload" />
                    <label htmlFor="file-upload" className="flex flex-col items-center justify-center p-12 border-2 border-dashed border-slate-200 rounded-[2.5rem] cursor-pointer transition-all hover:bg-slate-50 hover:border-[#D8A24C] group">
                      <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4 transition-colors group-hover:bg-white">
                        <Upload size={24} className="text-slate-400 group-hover:text-[#D8A24C]" />
                      </div>
                      <span className="text-sm font-black text-[#1B355C] uppercase tracking-widest">Adjuntar sustento</span>
                      <span className="text-[10px] text-slate-400 mt-2 font-bold uppercase tracking-tighter">PDF o Imagen (Máx 10MB)</span>
                      
                      {formData.archivoNombre && (
                        <div className="mt-6 flex items-center gap-3 bg-white px-5 py-2 rounded-full border border-green-100 shadow-sm animate-bounce">
                          <FileCheck size={14} className="text-green-500" />
                          <span className="text-xs font-bold text-green-700">{formData.archivoNombre}</span>
                        </div>
                      )}
                    </label>
                  </div>
                </div>

                {/* Footer Legal y Acción */}
                <div className="mt-16 pt-10 border-t border-slate-100">
                  <div className="flex flex-col md:flex-row items-center gap-10">
                    <div className="flex-1">
                      <div className="flex items-start gap-3 opacity-60">
                        <AlertCircle size={16} className="mt-1 shrink-0" />
                        <p className="text-[10px] font-bold text-slate-400 text-justify uppercase tracking-tighter leading-relaxed">
                          La respuesta a su reclamación será enviada a su correo en un plazo máximo de quince (15) días hábiles. Al enviar, usted declara bajo juramento la veracidad de los hechos expuestos.
                        </p>
                      </div>
                    </div>
                    <button 
                      type="submit" 
                      disabled={status === 'loading'}
                      className={`min-w-[280px] p-6 rounded-2xl font-black text-xs uppercase tracking-[0.2em] text-white shadow-2xl transition-all
                        ${status === 'loading' ? 'opacity-50 cursor-wait' : 'hover:scale-105 active:scale-95 hover:shadow-blue-900/30'}
                      `}
                      style={{ backgroundColor: COLORS.primary }}
                    >
                      {status === 'loading' ? 'Procesando Envío...' : 'Firmar y Enviar Hoja'}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}