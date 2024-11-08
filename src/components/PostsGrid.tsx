'use client';
import Masonry from 'react-masonry-css';

const images = [
    'https://picsum.photos/id/32/1024/768',
    'https://picsum.photos/id/33/768/1024',
    'https://picsum.photos/id/31/1024/768',
    'https://picsum.photos/id/34/768/1024',
    'https://picsum.photos/id/35/1024/768',
    'https://picsum.photos/id/36/768/1024',
    'https://picsum.photos/id/37/1024/768',
    'https://picsum.photos/id/38/768/1024',
    'https://picsum.photos/id/39/1024/768',
    'https://picsum.photos/id/40/768/1024',
    'https://picsum.photos/id/41/1024/768',
    'https://picsum.photos/id/42/768/1024',
    'https://picsum.photos/id/43/1024/768',
    'https://picsum.photos/id/44/768/1024',
    'https://picsum.photos/id/45/1024/768',
    'https://picsum.photos/id/46/768/1024',
    'https://picsum.photos/id/47/1024/768',
    'https://picsum.photos/id/48/768/1024',
    'https://picsum.photos/id/49/1024/768',
    'https://picsum.photos/id/50/768/1024',
    'https://picsum.photos/id/51/768/1024',
];
export default function PostsGrid() {
    return (
      <div className='max-w-4xl max-auto'>
        <Masonry
  breakpointCols={{
    default: 4,
    1100: 3,
    500: 2,
  }}
  className="flex -ml-4"
  columnClassName="pl-4">
  {images.map(src => (
    <div className='mb-4'>
      <img src={src} alt=""/>
    </div>             
    ))};
  </Masonry>
      </div>  
       
   );
};