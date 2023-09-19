import { useParams } from 'react-router-dom';
import tours from '../Data/tours';

const Tour = () => {
  const param = useParams();
  const tour = tours.find((tour) => (tour.slug = param.slug));
  return <div>{tour.title}</div>;
};

export default Tour;
