

function ProjectModal({ isOpen, onClose, title, description, images }) {
  return (
    
      <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
        <button onClick={onClose} className="mt-4 bg-primary text-white rounded-lg px-4 py-2">
          Close
        </button>
      </div>
  );
}

export default ProjectModal;
