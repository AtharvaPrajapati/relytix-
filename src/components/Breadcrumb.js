import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbNameMap = {
    '/': 'Home',
    '/services': 'Services',
    '/specialization': 'Specialization',
    '/about': 'About Us',
    '/contact': 'Contact',
  };

  return (
    <nav className="bg-gray-100 py-3">
      <div className="container-max">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link to="/" className="text-primary-600 hover:text-primary-700 transition-colors">
              Home
            </Link>
          </li>
          {pathnames.map((pathname, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            
            return (
              <li key={pathname} className="flex items-center">
                <svg className="w-4 h-4 text-gray-400 mx-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                {isLast ? (
                  <span className="text-gray-700 font-medium">
                    {breadcrumbNameMap[routeTo] || pathname}
                  </span>
                ) : (
                  <Link
                    to={routeTo}
                    className="text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    {breadcrumbNameMap[routeTo] || pathname}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
