import PropTypes from 'prop-types';

export default function Card({ title, children, className = '' }) {
  return (
    <div className={`bg-white dark:bg-gray-800 p-6 rounded shadow ${className}`}>
      {title && (
        <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
          {title}
        </h3>
      )}
      {children}
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
