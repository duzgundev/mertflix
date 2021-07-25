import Flickity from 'react-flickity-component';

import './Flickity.css';

export default function Carousel({ className, children, options }) {
  const flickityOptions = {
    groupCells: true,
    contain: true,
    pageDots: false,
  };

  return (
    <Flickity className={className} options={options || flickityOptions}>
      {children}
    </Flickity>
  );
}
