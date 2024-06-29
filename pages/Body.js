import Carousel from './Carousel';

const images = [
  { src: '/img32.svg', alt: 'Image 1' },
  { src: '/jntu-Kittl.svg', alt: 'Image 2' },
  // { src: '/image3.jpg', alt: 'Image 3' },
];

export default function Body() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Carousel images={images} />
    </div>
  );
}
