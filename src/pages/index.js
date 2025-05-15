import Image from 'next/image';
import Blockbuster from '../components/blockbuster';
import Link from 'next/link';
import OptInForm from '../components/form/opt-in-form';
import { useEffect, useState } from 'react';
import scrollDepth from '../utils/scrollDepth';
import portrait from '../../public/survey/portrait.png';
import i00 from '../../public/landing/00.png';
import i01 from '../../public/landing/01.png';
import i02 from '../../public/landing/02.png';
import i03 from '../../public/landing/03.png';
import i04 from '../../public/landing/04.png';
import i05 from '../../public/landing/05.png';
import i06 from '../../public/landing/06.png';
import i07 from '../../public/landing/07.png';
import i08 from '../../public/landing/08.png';
import i09 from '../../public/landing/09.png';
import i10 from '../../public/landing/10.png';
import i11 from '../../public/landing/11.png';
import ico01 from '../../public/landing/icon1.png';
import ico02 from '../../public/landing/icon2.png';
import ico03 from '../../public/landing/icon3.png';
import logo01 from '../../public/landing/logo-01.png';
import logo02 from '../../public/landing/logo-02.png';
import logo03 from '../../public/landing/logo-03.png';
import logo04 from '../../public/landing/logo-04.png';
import pic01 from '../../public/profile-pics/01.jpeg';
import pic02 from '../../public/profile-pics/02.jpeg';
import pic03 from '../../public/profile-pics/03.jpeg';
import pic04 from '../../public/profile-pics/04.jpeg';
import pic05 from '../../public/profile-pics/alejandro.png';
import pic06 from '../../public/profile-pics/06.jpeg';
import pic07 from '../../public/profile-pics/07.jpeg';
import pic08 from '../../public/profile-pics/08.jpeg';
import pic09 from '../../public/profile-pics/09.jpeg';
import Faqs from '../components/faqs';

export default function Home() {
  const [lastClick, setLastClick] = useState('');

  useEffect(() => {
    scrollDepth({
      values: [25, 50, 75, 100],
      callback: (value) => fbq('trackCustom', `Scroll Depth: ${value}`),
    });
  });

  const cta = {
    main: 'Cotiza tu montacargas',
    description: 'Renta y venta de montacargas',
  };

  return (
    <>
      {/*------------------------------------------------------------------ */}
      <section className="relative min-h-[72rem] w-full flex flex-col md:justify-end items-center bg-brand-1">

        <div className="relative min-h-[32rem] flex-grow w-full md:absolute top-0 inset-x-0 bottom-1/2 md:bottom-0">
          <div
            className="w-full h-[16rem] md:h-[32rem] bottom-0 absolute bg-gradient-to-t from-brand-1 md:from-black md:via-black to-transparent md:opacity-60 z-10"/>
          <Image src={i00} layout="fill" className="object-cover object-right"/>
        </div>

        <div className="container min-h-[36rem] w-full text-left text-white z-10 p-8">
          <h1
            className="md:w-2/3 relative font-bold ft-10 mb-8 text-white [text-shadow:_2px_2px_0_rgb(0_0_0_/_20%)]">
            ¿Te urge un montacargas para no detener tu operación?
          </h1>
          <p className="ft-3">Montacargas listos para trabajar hoy</p>
          <p className="ft-3">Desde $2,500 MXN por día</p>
          <div className="flex flex-col justify-start items-start mt-12">
            <Link href="#contact">
              <a onClick={() => setLastClick('benefits')} className="button mb-4">{cta.main}</a>
            </Link>
          </div>
          <p className="material-icons animate-bounce"><span className="ft-9">expand_more</span></p>
        </div>
        {/*<div className="w-full py-6 bg-red-500 z-50">*/}
        {/*  <p className="ft-0 text-center text-white font-bold mx-auto">{cta.description}</p>*/}
        {/*</div>*/}
      </section>
      {/*------------------------------------------------------------------ */}
      <section className="reading-container my-16">
          <p className="ft-2">
            Deja de perder tiempo y dinero esperando proveedores que no sabes cuándo te van a resolver.
            <br/><br/>
            En Morepa, rentas montacargas industriales en <b>un día o menos</b>, sin contratos complicados.
          </p>
        <div className="flex flex-col justify-center items-center">
          <Link href="#contact">
            <a
              onClick={() => setLastClick('story')}
              className="button mb-4 mx-auto"
            >{cta.main}</a>
          </Link>
          <p className="-ft-2 !mt-2 text-center">{cta.description}</p>
        </div>
      </section>

      <Blockbuster
        overhead="Beneficios"
        title="3 razones por las que tu negocio necesita un aliado como Morepa"
        background={i02}
      />

      <section className="my-16">
        <p className="reading-container">
          Sabes que un equipo de carga que falla puede parar toda tu operación y costarte mucho más que una renta bien hecha. Aquí te van 3 razones para confiar en Morepa:
        </p>

        <div className="container grid grid-cols-1 md:grid-cols-3 gap-16 my-16">
          <div className="flex flex-col">
            <h3>Renta solo lo que necesitas</h3>
            <p className="ft-2 mb-8">Solo paga por lo que realmente necesitas: día, semana o mes. Nada de contratos atadores.</p>
            <div className="relative h-[20rem] rounded-2xl overflow-hidden flex items-center mt-auto mb-8">
              <Image src={i04} layout="fill" objectFit="cover"/>
            </div>
          </div>
          <div className="flex flex-col">
            <h3>Opera sin fallas</h3>
            <p className="ft-2 mb-8">Nuestros equipo están en las mejores condiciones, en constante mantenimiento y listos para trabajar en tu proyecto.</p>
            <div className="relative h-[20rem] rounded-2xl overflow-hidden flex items-center mb-8">
              <Image src={i05} layout="fill" objectFit="cover"/>
            </div>
          </div>
          <div className="flex flex-col">
            <h3>Te entregamos en 24 hrs</h3>
            <p className="ft-2 mb-8 flex-grow">Entregamos en tiempo récord para que no detengas tu operación.</p>
            <div className="relative h-[20rem] rounded-2xl overflow-hidden flex items-center mb-8">
              <Image src={i06} layout="fill" objectFit="cover"/>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-16 justify-center items-center">
          <Link href="#contact">
            <a
              onClick={() => setLastClick('story')}
              className="button mb-4 mx-auto"
            >{cta.main}</a>
          </Link>
          <p className="-ft-2 !mt-2 text-center">{cta.description}</p>
        </div>
      </section>

      <Blockbuster
        overhead="Especificaciones"
        title="Listos para mover lo que necesites, cuando lo necesites"
        background={i07}
        imgPos="object-left"
      />

      <section className="my-16">
        <p className="reading-container">
          Equipos afinados y listos para cargar lo que le pongas enfrente.
        </p>

        <div className="container grid grid-cols-1 md:grid-cols-3 gap-16 my-16">
          <div className="relative flex flex-col">
            <div
              className="relative flex mx-auto mb-8 w-[20rem] h-[20rem] items-center bg-yellow-400 rounded-2xl overflow-hidden">
              <div className="relative m-auto p-[7rem]">
                <Image src={ico01} layout="fill" objectFit="contain"/>
              </div>
            </div>
            <h3 className="ft-6 text-center">Capacidad de 1 a 5 toneladas de carga</h3>
          </div>
          <div className="relative flex flex-col">
            <div
              className="relative flex mx-auto mb-8 w-[20rem] h-[20rem] items-center bg-yellow-400 rounded-2xl overflow-hidden">
              <div className="relative m-auto p-[7rem]">
                <Image src={ico02} layout="fill" objectFit="contain"/>
              </div>
            </div>
            <h3 className="ft-6 text-center">De todos los tipos combustión, eléctricos y duales</h3>
          </div>
          <div className="relative flex flex-col">
            <div
              className="relative flex mx-auto mb-8 w-[20rem] h-[20rem] items-center bg-yellow-400 rounded-2xl overflow-hidden">
              <div className="relative m-auto p-[7rem]">
                <Image src={ico03} layout="fill" objectFit="contain"/>
              </div>
            </div>
            <h3 className="ft-6 text-center">Hombre sentado u hombre parado</h3>
          </div>
        </div>

        <div className="container grid grid-cols-2 md:grid-cols-4 gap-16">
          <div className="relative w-full pt-[100%]">
            <Image src={logo01} layout="fill" objectFit="cover"/>
          </div>
          <div className="relative w-full pt-[100%]">
            <Image src={logo02} layout="fill" objectFit="contain"/>
          </div>
          <div className="relative w-full pt-[100%]">
            <Image src={logo04} layout="fill" objectFit="contain"/>
          </div>
          <div className="relative w-full pt-[100%]">
            <Image src={logo03} layout="fill" objectFit="contain"/>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <Link href="#contact">
            <a
              onClick={() => setLastClick('story')}
              className="button mb-4 mx-auto"
            >{cta.main}</a>
          </Link>
          <p className="-ft-2 !mt-2 text-center">{cta.description}</p>
        </div>
      </section>

      <Blockbuster
        overhead="Tarifas"
        title="Tenemos la solución exacta para tu necesidad de carga"
        background={i08}
        imgPos="object-left"
      />

      <section className="my-16">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-16 my-16">
          <div className="w-full flex flex-col border rounded-2xl bg-yellow-400/20 p-8">
            <h3>Renta diaria</h3>
            <p className="flex-grow">¿Carga urgente? Aquí lo tienes</p>
            <p className="ft-4 text-brand-2 font-bold">Desde $2,500 MXN </p>
          </div>
          <div className="w-full flex flex-col border rounded-2xl bg-yellow-400/20 p-8">
            <h3>Renta semanal</h3>
            <p className="flex-grow">Ideal para proyectos cortos o imprevistos.</p>
            <p className="ft-4 text-brand-2 font-bold">Desde $7,000 MXN </p>
          </div>
          <div className="w-full flex flex-col border rounded-2xl bg-yellow-400/20 p-8">
            <h3>Renta mensual</h3>
            <p className="flex-grow">Para operaciones intensivas que no pueden parar.</p>
            <p className="ft-4 text-brand-2 font-bold">Desde $18,000 MXN </p>
          </div>
        </div>

        <div className="reading-container text-center">
        <h3>¿Necesitas un equipo por más de 6 meses?</h3>
          <p>Ofrecemos planes especiales de renta a largo plazo con condiciones preferenciales en precio y servicio.</p>
        </div>


        <div className="flex flex-col justify-center items-center">
          <Link href="#contact">
            <a
              onClick={() => setLastClick('story')}
              className="button mb-4 mx-auto"
            >{cta.main}</a>
          </Link>
          <p className="-ft-2 !mt-2 text-center">{cta.description}</p>
        </div>
      </section>

      {/*------------------------------------------------------------------ */}
      <Blockbuster
        overhead="Testimonios"
        title="Más de 25 años respaldando a las industrias más exigentes"
        background={i10}
      />
      <section className="container my-20">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          <div className="flex gap-8 p-8 border rounded-xl">
            <div className="flex flex-col justify-center items-center w-1/4">
              <div className="relative w-full pt-[100%] rounded-full overflow-hidden mb-4">
                <Image src={pic01} layout="fill" objectFit="cover"/>
              </div>
              <p className="-ft-2">Luis G.</p>
            </div>
            <div className="-ft-1 w-3/4">
              <p className="flex gap-4"><span className="material-icons text-yellow-300">star star star star star</span>5/5
              </p>
              <p>Con Morepa, dejamos de preocuparnos por las fallas en equipos de carga. Nos dan la respuesta inmediata que necesitábamos</p>
            </div>
          </div>
          <div className="flex gap-8 p-8 border rounded-xl">
            <div className="flex flex-col justify-center items-center w-1/4">
              <div className="relative w-full pt-[100%] rounded-full overflow-hidden mb-4">
                <Image src={pic06} layout="fill" objectFit="cover" objectPosition="top"/>
              </div>
              <p className="-ft-2">Andrea M.</p>
            </div>
            <div className="-ft-1 w-3/4">
              <p className="flex gap-4"><span className="material-icons text-yellow-300">star star star star star</span>4.5/5
              </p>
              <p>Rentamos un montacargas para un proyecto de exportación urgente. Nos lo entregaron el mismo día. Así deberían ser todos los proveedores</p>
            </div>
          </div>
          <div className="flex gap-8 p-8 border rounded-xl">
            <div className="flex flex-col justify-center items-center w-1/4">
              <div className="relative w-full pt-[100%] rounded-full overflow-hidden mb-4">
                <Image src={pic02} layout="fill" objectFit="cover"/>
              </div>
              <p className="-ft-2">Alejandro T.</p>
            </div>
            <div className="-ft-1 w-3/4">
              <p className="flex gap-4"><span className="material-icons text-yellow-300">star star star star star</span>5/5
              </p>
              <p>Probamos una renta semanal, y ahora somos clientes fijos. Equipos que de verdad funcionan</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16 grayscale">
          <div className="relative w-full pt-[100%]">
            <Image src="/landing/alianzas/animalnutri.jpg" layout="fill" objectFit="contain"/>
          </div>
          <div className="relative w-full pt-[100%]">
            <Image src="/landing/alianzas/biotecap.jpg" layout="fill" objectFit="contain"/>
          </div>
          <div className="relative w-full pt-[100%]">
            <Image src="/landing/alianzas/dubacano.jpg" layout="fill" objectFit="contain"/>
          </div>
          <div className="relative w-full pt-[100%]">
            <Image src="/landing/alianzas/fabpsa.jpg" layout="fill" objectFit="contain"/>
          </div>
          <div className="relative w-full pt-[100%]">
            <Image src="/landing/alianzas/ferromex.jpg" layout="fill" objectFit="contain"/>
          </div>
          <div className="relative w-full pt-[100%]">
            <Image src="/landing/alianzas/gapelli.jpg" layout="fill" objectFit="contain"/>
          </div>
          <div className="relative w-full pt-[100%]">
            <Image src="/landing/alianzas/glm.jpg" layout="fill" objectFit="contain"/>
          </div>
          <div className="relative w-full pt-[100%]">
            <Image src="/landing/alianzas/hilasal.jpg" layout="fill" objectFit="contain"/>
          </div>
          <div className="relative w-full pt-[100%]">
            <Image src="/landing/alianzas/japa.jpg" layout="fill" objectFit="contain"/>
          </div>
          <div className="relative w-full pt-[100%]">
            <Image src="/landing/alianzas/la-huerta.jpg" layout="fill" objectFit="contain"/>
          </div>
          <div className="relative w-full pt-[100%]">
            <Image src="/landing/alianzas/nature-sweet.jpg" layout="fill" objectFit="contain"/>
          </div>
          <div className="relative w-full pt-[100%]">
            <Image src="/landing/alianzas/palme.jpg" layout="fill" objectFit="contain"/>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Link href="#contact">
            <a
              onClick={() => setLastClick('testimonials')}
              className="button mb-4 mx-auto"
            >{cta.main}</a>
          </Link>
          <p className="-ft-2 !mt-2 text-center">{cta.description}</p>
        </div>
      </section>

      <Blockbuster
        overhead="FAQs"
        title="Si tienes dudas, probablemente estén aquí"
        background={i11}
      />

      <section className="container my-20">
        <Faqs/>
      </section>

      {/* Contacto  */}
      <section id="contact" className="border-t border-brand-2 py-20">
        <div className="container">
          <div className="w-full md:w-1/2 mx-auto">
            <h2 className="text-brand-1">
              Renta tu montacargas hoy mismo, contáctanos
            </h2>
            <p className="ft-2 mt-8 sm:text-left">
              Sin compromisos, solicita una cotización.
            </p>

            <OptInForm
              lastClick={lastClick}
            />
          </div>
        </div>
      </section>
    </>
  );
}
