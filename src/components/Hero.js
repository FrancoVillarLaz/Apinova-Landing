import React from 'react';

const Hero = () => {
    return (
      <section id="about" className="py-12 md:py-20 lg:py-28 flex justify-center">
        <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Desarrollamos soluciones digitales innovadoras
            </h1>
            <p className="text-muted-foreground mt-4 max-w-md">
              En Apinova, nos apasiona crear aplicaciones web, servicios y sistemas que impulsen el éxito de nuestros
              clientes. Nuestro equipo de expertos se dedica a brindar soluciones a medida que se adaptan a las
              necesidades de cada negocio.
            </p>
            <div className="mt-6 flex gap-4">
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                Conócenos Más
              </button>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2">
                Nuestros Servicios
              </button>
            </div>
          </div>
          <img
            src="/img/logo.jpeg"
            width="550"
            height="400"
            alt="About"
            className="mx-auto rounded-xl object-cover"
            style={{ aspectRatio: "550/400", objectFit: "cover" }}
          />
        </div>
      </section>
    );
  };
  

export default Hero;
