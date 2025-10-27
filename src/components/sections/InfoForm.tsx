// components/InfoForm.tsx

"use client"; // Necesario para la interactividad del formulario (useState)

import React, { useState } from 'react';

export default function InfoForm() {
    const [formData, setFormData] = useState({
        dni: '',
        nombres: '',
        telefono: '',
        carrera: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const phoneNumber = "51912503627"; // Número de WhatsApp con código de país
        const message = `¡Hola! 👋 Quisiera más información sobre la carrera de ${formData.carrera}.\n\nMis datos son:\n*Nombres:* ${formData.nombres}\n*DNI:* ${formData.dni}\n*Teléfono:* ${formData.telefono}`;
        
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md mx-auto">
            {/* --- Cabecera del Formulario --- */}
            <div className="bg-[#002a5d] p-8 rounded-t-3xl text-center">
                <p className="text-white text-lg">Déjanos tus datos y te contactaremos</p>
                <h3 className="text-white text-3xl font-bold">Solicita más información aquí</h3>
            </div>

            {/* --- Cuerpo del Formulario --- */}
            <form onSubmit={handleSubmit} className="p-8 space-y-5">
                <input
                    type="text"
                    name="dni"
                    placeholder="DNI"
                    value={formData.dni}
                    onChange={handleChange}
                    required
                    className="w-full p-4 bg-slate-100 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#002a5d]"
                />
                <input
                    type="text"
                    name="nombres"
                    placeholder="Nombres"
                    value={formData.nombres}
                    onChange={handleChange}
                    required
                    className="w-full p-4 bg-slate-100 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#002a5d]"
                />
                <input
                    type="tel"
                    name="telefono"
                    placeholder="Teléfono"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                    className="w-full p-4 bg-slate-100 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#002a5d]"
                />
                <select
                    name="carrera"
                    value={formData.carrera}
                    onChange={handleChange}
                    required
                    className="w-full p-4 bg-slate-100 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#002a5d] appearance-none"
                >
                    <option value="" disabled>Elige una carrera</option>
                    <option value="Enfermería">Enfermería</option>
                    <option value="Contabilidad">Contabilidad</option>
                    <option value="Farmacia">Farmacia</option>
                </select>

                <button
                    type="submit"
                    className="w-full bg-[#82a7e2] text-white font-bold py-4 rounded-2xl hover:bg-[#6c91ca] transition-colors duration-300"
                >
                    Enviar
                </button>
            </form>
        </div>
    );
}