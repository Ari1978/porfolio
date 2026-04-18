export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-4 py-3 flex justify-center">
      <div className="max-w-4xl w-full space-y-5">

        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-4 items-start">
          <div>
            <h1 className="text-xl font-bold">Ariel Suarez</h1>
            <h2 className="text-gray-400 text-[11px] mt-1">
              Backend Developer | Node.js · NestJS
            </h2>

            <div className="flex gap-1.5 mt-1.5 flex-wrap">
              {["Node.js", "NestJS", "MongoDB", "Next.js"].map((t) => (
                <span key={t} className="bg-gray-800 px-1.5 py-0.5 rounded text-[9px]">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <p className="text-gray-300 text-[11px] leading-snug">
            Backend developer enfocado en APIs robustas y lógica de negocio compleja.
            Experiencia en facturación, consumos y reglas comerciales.
          </p>
        </section>

        {/* PROYECTOS */}
        <section>
          <h2 className="text-base font-semibold mb-2">Proyectos</h2>

          <div className="grid md:grid-cols-2 gap-2.5">

            {/* CARD 1 */}
            <div className="bg-gray-900 p-2.5 rounded-lg shadow hover:bg-gray-800 transition">
              <h3 className="text-sm font-semibold">Sistema de Facturación</h3>

              <p className="text-gray-400 mt-1 text-[11px] leading-snug">
                Motor de facturación con reglas complejas, consumos y bonificaciones.
              </p>

              <ul className="text-[10px] text-gray-500 mt-1.5 list-disc list-inside space-y-0.5">
                <li>IVA y lógica comercial</li>
                <li>NestJS escalable</li>
                <li>Integración Access</li>
              </ul>

              <p className="text-[9px] text-gray-500 mt-1.5">
                NestJS · MongoDB · Next.js
              </p>

              <div className="mt-1.5 flex gap-1.5">
                <a href="https://github.com/Ari1978/app_medicina_backend.git" className="bg-blue-600 px-2 py-0.5 rounded text-[9px]">
                  Backend
                </a>
                <a href="https://github.com/Ari1978/app_medicina_frontend.git" className="bg-blue-600 px-2 py-0.5 rounded text-[9px]">
                  Frontend
                </a>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="bg-gray-900 p-2.5 rounded-lg shadow hover:bg-gray-800 transition">
              <h3 className="text-sm font-semibold">Motorbike App</h3>

              <p className="text-gray-400 mt-1 text-[11px] leading-snug">
                CRUD completo con Firebase y arquitectura modular.
              </p>

              <ul className="text-[10px] text-gray-500 mt-1.5 list-disc list-inside space-y-0.5">
                <li>Firestore</li>
                <li>UI responsive</li>
                <li>Persistencia</li>
              </ul>

              <p className="text-[9px] text-gray-500 mt-1.5">
                Next.js · Firebase
              </p>

              <div className="mt-1.5">
                <a href="https://github.com/Ari1978/motorbike.git" className="bg-blue-600 px-2 py-0.5 rounded text-[9px]">
                  Ver proyecto
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* SKILLS */}
        <section>
          <h2 className="text-base font-semibold mb-1">Skills</h2>
          <div className="flex flex-wrap gap-1.5">
            {["Node.js", "NestJS", "Java", "React", "Next.js", "MongoDB", "MySQL", "Firebase"].map((s) => (
              <span key={s} className="bg-gray-800 px-1.5 py-05 rounded text-[9px]">
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* CONTACTO */}
        <section>
          <h2 className="text-base font-semibold mb-1">Contacto</h2>

          <div className="text-gray-400 text-[11px] space-y-0.5">
            <p>Email: arielsuarez538@gmail.com</p>

            <p>
              GitHub:
              <a href="https://github.com/Ari1978" className="text-blue-400 ml-1">
                Ari1978
              </a>
            </p>

            <p>
              LinkedIn:
              <a href="https://linkedin.com/in/ariel-suarez-39141111b" className="text-blue-400 ml-1">
                Perfil
              </a>
            </p>

            <p>Tel: +54 11 7654-9583</p>
          </div>
        </section>

      </div>
    </main>
  );
}