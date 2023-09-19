import { useParams } from 'react-router-dom';
import tours from '../Data/tours';
import InfoCompany from './InfoCompany';
import Header from './Header';

const Tour = () => {
  const param = useParams();
  const tour = tours.find((tour) => (tour.slug = param.slug));
  return (
    <>
      <InfoCompany />
      <Header
        text={tour.title}
        headImg={tour.headImg}
        borderColor={tour.borderColor}
        textColor={tour.textColor}
      />
    </>
  );
};

export default Tour;
