import React from 'react';

function ServiceCard({ icon, title, description }) {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="p-6">
        {icon}
        <h3 className="text-lg font-semibold mt-4">{title}</h3>
        <p className="text-muted-foreground mt-2">{description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
