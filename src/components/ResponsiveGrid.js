import React from 'react';

const ResponsiveGrid = ({ 
  children, 
  className = '', 
  cols = { base: 1, md: 2, lg: 3 },
  gap = 'gap-6'
}) => {
  const getGridClasses = () => {
    const baseClass = `grid-cols-${cols.base}`;
    const mdClass = cols.md ? `md:grid-cols-${cols.md}` : '';
    const lgClass = cols.lg ? `lg:grid-cols-${cols.lg}` : '';
    const xlClass = cols.xl ? `xl:grid-cols-${cols.xl}` : '';
    
    return `grid ${baseClass} ${mdClass} ${lgClass} ${xlClass} ${gap}`.trim();
  };

  return (
    <div className={`${getGridClasses()} ${className}`}>
      {children}
    </div>
  );
};

export default ResponsiveGrid;
