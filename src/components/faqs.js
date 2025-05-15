import { useState } from 'react';

export default function Faqs() {
  const [faqOpen, setFaqOpen] = useState(0);

  const questions = [
    {
      q: "¿Puedo rentar solo por 1 día?",
      a: "¡Claro! Renta desde un solo día hasta meses completos, sin compromiso de contrato largo."
    },
    {
      q: "¿Tienen disponibilidad inmediata?",
      a: "Sí. Trabajamos con logística ágil para entregar en menos de 48 horas en la mayoría de los casos."
    },
    {
      q: "¿Dónde operan?",
      a: "Cubrimos principalmente Guadalajara, Ciudad Guzmán, Colima, Tecomán y Manzanillo."
    },
    {
      q: "¿Qué tipos de equipos rentan?",
      a: "Renta de montacargas confiables de marcas líderes como Caterpillar, Komatsu y Clark."
    },
    {
      q: "¿Qué pasa si un equipo falla durante la renta?",
      a: "Nuestro equipo técnico responde de inmediato. Reparamos en sitio o reemplazamos sin burocracias."
    }
  ];

  return (
    <section className='py-12'>
      <div className='container'>
        {questions.map((q, i) =>
          <div key={`faq-${i}`} className="w-full shadow-sm mb-2">
            <p
              id={i}
              className="w-full p-4 font-bold bg-white mb-0 cursor-pointer rounded-lg border border-gray-200"
              onClick={(e) => setFaqOpen(e.target.id)}
            >
              <span className="font-bold mr-4 text-brand-1">›</span>{q.q}
            </p>
            <p className={`${faqOpen == i ? 'flex' : 'hidden'} bg-gray-50 p-12`}>
              {q.a}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}