



function ProjectModal({ isOpen, onClose, title, description, images }) {
  return (
    
      <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
        <div className="rounded-md flex flex-col w-96 h-96 ">
          <div className="mt-4">
            {/* Carrusel de imágenes */}

            
            <div className="flex overflow-x-scroll">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${title} image ${index + 1}`}
                  className="h-64 w-full object-cover rounded-lg mr-2"
                  style={{ flexShrink: 0 }}
                />
              ))}
            </div>
          </div>
          <button onClick={onClose} className="mt-4 bg-primary text-white rounded-lg px-4 py-2">
            Close
          </button>
        </div>
      </div>
  );
}

export default ProjectModal;
