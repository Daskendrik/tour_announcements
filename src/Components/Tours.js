import { Link } from 'react-router-dom';
import tours from '../Data/tours';

const Tours = () => {
  return (
    <>
      {tours.map((tour) => (
        <div key={tour.id}>
          <Link to={tour.slug}>{tour.title}</Link>
        </div>
      ))}
    </>
  );
};
export default Tours;
