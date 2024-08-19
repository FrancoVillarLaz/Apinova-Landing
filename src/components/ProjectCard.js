import React, { useState } from 'react';
import ProjectModal from './ProjectModal';

function ProjectCard({ images = [], title, description }) {
  const [isModalOpen, setModalOpen] = useState(false);

  // Funciones para abrir y cerrar el modal
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <div
        className="rounded-lg border bg-card text-card-foreground shadow-sm cursor-pointer"
        onClick={openModal} // Usar la función openModal aquí
      >
        {images.length > 0 && (
          <img
            src={images[0]}
            alt={title}
            className="rounded-t-xl object-cover"
            style={{ aspectRatio: '550/310', objectFit: 'cover' }}
          />
        )}
        <div className="p-6">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-muted-foreground mt-2">
            {description.length > 100 ? `${description.substring(0, 100)}...` : description}
          </p>
        </div>
      </div>

      {isModalOpen && (
        <ProjectModal
          isOpen={isModalOpen} // Usar isModalOpen aquí
          onClose={closeModal}
          images={images}
          title={title}
          description={description}
        />
      )}
    </>
  );
}

export default ProjectCard;
