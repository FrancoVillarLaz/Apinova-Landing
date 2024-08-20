import React from 'react';

const Header = () => {
  return (
    <header className="bg-background px-4 lg:px-6 py-4 flex items-center justify-between">
      <a className="flex items-center gap-2" href="#">
        <span className="text-lg font-semibold">Apinova</span>
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
          className="h-6 w-6 text-primary"
        >
          <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
        </svg>
      </a>
      <nav className="hidden lg:flex gap-6 ">
        {[
          { label: "Sobre Nosotros", link: "#sobre-nosotros" },
          { label: "Servicios", link: "#servicios" },
          { label: "Proyectos", link: "#proyectos" },
          { label: "Contacto", link: "#contacto" }
        ].map((item) => (
          <a
            key={item.label}
            className="text-sm font-medium hover:text-primary transition-colors"
            href={item.link}
          >
            {item.label}
          </a>
        ))}
      </nav>
      <button className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 hidden lg:inline-flex">
        Solicitar Cotización
      </button>
    </header>
  );
};


export default Header;
