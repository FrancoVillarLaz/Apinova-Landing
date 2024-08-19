import React from 'react';

function TestimonialCard({ initials, name, title, testimony }) {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="p-6">
        <div className="flex items-center gap-4">
          <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
            <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
              {initials}
            </span>
          </span>
          <div>
            <h4 className="font-semibold">{name}</h4>
            <p className="text-muted-foreground text-sm">{title}</p>
          </div>
        </div>
        <p className="text-muted-foreground mt-4">{testimony}</p>
      </div>
    </div>
  );
}

export default TestimonialCard;
