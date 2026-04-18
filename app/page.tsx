export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10 flex justify-center">
      <div className="max-w-4xl w-full space-y-12">

        {/* HERO */}
        <section>
          <h1 className="text-4xl font-bold">Ariel Suarez</h1>
          <h2 className="text-gray-400 mt-2">
            Backend Developer | Node.js · NestJS
          </h2>

          <p className="mt-4 text-gray-300 max-w-2xl">
            Desarrollador Full Stack con especialización en Backend, enfocado en el diseño
            de APIs robustas y sistemas con lógica de negocio compleja. Experiencia en
            desarrollo de motores de facturación, gestión de consumos y reglas comerciales,
            incluyendo integración con sistemas externos.

            Me destaco por el pensamiento analítico, la resolución de problemas y la
            capacidad de llevar soluciones desde la idea hasta producción.
          </p>

          <div className="flex gap-3 mt-4 flex-wrap">
            <span className="bg-gray-800 px-3 py-1 rounded text-sm">Node.js</span>
            <span className="bg-gray-800 px-3 py-1 rounded text-sm">NestJS</span>
            <span className="bg-gray-800 px-3 py-1 rounded text-sm">MongoDB</span>
            <span className="bg-gray-800 px-3 py-1 rounded text-sm">Next.js</span>
          </div>
        </section>

        {/* PROYECTOS */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Proyectos</h2>

          <div className="grid md:grid-cols-2 gap-6">

            {/* CARD 1 */}
            <div className="bg-gray-900 p-5 rounded-lg shadow-md transition transform hover:scale-[1.02] hover:bg-gray-800">
              <h3 className="text-xl font-semibold">Sistema de Facturación</h3>

              <p className="text-gray-400 mt-3">
                Sistema completo de gestión y facturación empresarial desarrollado desde cero,
                con motor propio de cálculo basado en reglas de negocio.

                Permite administrar planes, consumos, bonificaciones y generación automática
                de facturas con lógica adaptable a distintos escenarios.
              </p>

              <ul className="text-sm text-gray-500 mt-3 list-disc list-inside">
                <li>Motor de facturación con cálculo de IVA, bonificaciones y consumos</li>
                <li>Arquitectura backend escalable con NestJS</li>
                <li>Integración con sistema externo (Access) mediante ODBC</li>
                <li>Frontend de gestión desarrollado con Next.js</li>
              </ul>

              <p className="text-xs text-gray-500 mt-3">
                NestJS · MongoDB · Next.js
              </p>

              <div className="mt-4 flex gap-3">
                <a
                  href="https://github.com/Ari1978/app_medicina_backend.git"
                  className="bg-blue-600 px-3 py-1 rounded text-sm hover:bg-blue-500"
                >
                  Backend
                </a>
                <a
                  href="https://github.com/Ari1978/app_medicina_frontend.git"
                  className="bg-blue-600 px-3 py-1 rounded text-sm hover:bg-blue-500"
                >
                  Frontend
                </a>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="bg-gray-900 p-5 rounded-lg shadow-md transition transform hover:scale-[1.02] hover:bg-gray-800">
              <h3 className="text-xl font-semibold">Motorbike App</h3>

              <p className="text-gray-400 mt-3">
                Aplicación web para gestión de datos con operaciones CRUD completas,
                enfocada en la organización y persistencia eficiente de información.
              </p>

              <ul className="text-sm text-gray-500 mt-3 list-disc list-inside">
                <li>CRUD completo con manejo de estados</li>
                <li>Persistencia en Firebase (Firestore)</li>
                <li>Arquitectura modular y mantenible</li>
                <li>Interfaz responsive centrada en UX</li>
              </ul>
              <p className="text-xs text-gray-500 mt-3">
                Next.js · Firebase
              </p>

              <div className="mt-4">
                <a
                  href="https://github.com/Ari1978/motorbike.git"
                  className="bg-blue-600 px-3 py-1 rounded text-sm hover:bg-blue-500"
                >
                  Ver proyecto
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* SKILLS */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Skills</h2>
          <p className="text-gray-400">
            Node.js · NestJS · Java · React · Next.js · MongoDB · MySQL · Firebase
          </p>
        </section>

        {/* CONTACTO */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Contacto</h2>

          <p className="text-gray-400">Email: arielsuarez538@gmail.com</p>

          <p className="text-gray-400">
            GitHub:
            <a href="https://github.com/Ari1978" className="text-blue-400 hover:underline ml-1">
              github.com/Ari1978
            </a>
          </p>

          <p className="text-gray-400">
            LinkedIn:
            <a href="https://linkedin.com/in/ariel-suarez-39141111b" className="text-blue-400 hover:underline ml-1">
              Ver perfil
            </a>
          </p>

          <p className="text-gray-400">
            Tel: +54 11 7654-9583
          </p>
        </section>

      </div>
    </main>
  );
}