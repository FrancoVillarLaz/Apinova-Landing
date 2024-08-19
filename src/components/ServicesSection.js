import React from 'react';
import ServiceCard from './ServiceCard';

function ServicesSection() {
  const services = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8 text-primary"
        >
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      title: 'Desarrollo Web',
      description: 'Creamos sitios web y aplicaciones web a medida que se adaptan a tus necesidades.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8 text-primary"
        >
          <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
          <rect x="9" y="9" width="6" height="6"></rect>
          <line x1="9" y1="1" x2="9" y2="4"></line>
          <line x1="15" y1="1" x2="15" y2="4"></line>
          <line x1="9" y1="20" x2="9" y2="23"></line>
          <line x1="15" y1="20" x2="15" y2="23"></line>
          <line x1="20" y1="9" x2="23" y2="9"></line>
          <line x1="20" y1="14" x2="23" y2="14"></line>
          <line x1="1" y1="9" x2="4" y2="9"></line>
          <line x1="1" y1="14" x2="4" y2="14"></line>
        </svg>


      ),
      title: 'Sistemas',
      description: 'Desarrollamos sistemas especificos para agilizar cada tarea de tu empresa.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8 text-primary"
        >
          <path d="M7 9H17M7 13H12"></path>
          <path d="M21 20L17.676 18.338C17.424 18.212 17.298 18.149 17.166 18.104C17.048 18.065 16.928 18.037 16.805 18.019C16.667 18 16.526 18 16.245 18H6.2C5.08 18 4.52 18 4.092 17.782C3.716 17.59 3.41 17.284 3.218 16.908C3 16.48 3 15.92 3 14.8V7.2C3 6.08 3 5.52 3.218 5.092C3.41 4.716 3.716 4.41 4.092 4.218C4.52 4 5.08 4 6.2 4H17.8C18.92 4 19.48 4 19.908 4.218C20.284 4.41 20.59 4.716 20.782 5.092C21 5.52 21 6.08 21 7.2V20Z"></path>
        </svg>
      ),
      title: 'Mensajeria',
      description: 'Contamos con servicios para la atencion al cliente personalizada con mensajeria automatica, envio de correos, etc.',
    },
  ];

  return (
    <section id="services" className="py-12 md:py-20 lg:py-28 bg-muted flex justify-center">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Nuestros Servicios</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Ofrecemos una amplia gama de servicios de desarrollo de software para ayudar a tu negocio a crecer y prosperar.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {services.map((service, index) => (
            <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
