import React from 'react';
import ProjectCard from './ProjectCard';

function ProjectsSection() {
  const projects = [
    {
      images: ['/placeholder.svg', '/placeholder.svg'],
      title: 'Gestión Integral de Cursos y Estudiantes',
      description: 'Este innovador sistema transforma la experiencia educativa tanto para alumnos como para administradores. Los estudiantes pueden explorar fácilmente los cursos disponibles, verificar sus horarios, y realizar preinscripciones e inscripciones con un solo clic. Por su parte, los administradores cuentan con herramientas avanzadas para gestionar todos los aspectos de los cursos: desde la creación y modificación de horarios, duración del curso, y asignación de profesores, hasta la administración de inscripciones y pagos. Además, el sistema ofrece un panel estadístico detallado que muestra la cantidad de alumnos inscritos, generando informes precisos para facilitar la toma de decisiones. Como toque final, los certificados de egreso son generados automáticamente, brindando un servicio completo y eficiente. Este proyecto no solo simplifica la gestión educativa, sino que también potencia la organización y el aprendizaje en la era digital.',
    },
    {
      images: ['/placeholder.svg', '/placeholder.svg'],
      title: 'Proyecto 2',
      description: 'Descripción del Proyecto 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    // Agrega más proyectos aquí
  ];

  return (
    <section id="projects" className="py-12 md:py-20 lg:py-28 flex justify-center">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Proyectos Recientes</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Échale un vistazo a algunos de los proyectos destacados que hemos desarrollado recientemente.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} images={project.images} title={project.title} description={project.description} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
