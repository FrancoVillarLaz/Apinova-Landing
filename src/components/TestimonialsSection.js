import React from 'react';
import TestimonialCard from './TestimonialCard';

function TestimonialsSection() {
  const testimonials = [
    
    // Agrega más testimonios aquí
  ];

  return (
    <section id="testimonials" className="py-12 md:py-20 lg:py-28 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Testimonios de Clientes</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Escucha lo que nuestros clientes satisfechos tienen que decir sobre nuestro trabajo.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              initials={testimonial.initials}
              name={testimonial.name}
              title={testimonial.title}
              testimony={testimonial.testimony}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
