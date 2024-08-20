import React from 'react';

function ContactSection() {
  return (
    <section id="contacto" className="py-12 md:py-20 lg:py-28 flex justify-center">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Contacta con Nosotros</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            ¿Listo para comenzar tu próximo proyecto? Pónte en contacto con nosotros hoy mismo.
          </p>
        </div>
        <div className="mt-8">
          <form className="max-w-md mx-auto space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Mensaje
              </label>
              <textarea
                id="message"
                rows="4"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-primary py-2 text-white font-semibold hover:bg-primary-dark"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
