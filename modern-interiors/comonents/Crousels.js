import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import ImageOne from '../Image/alberto-castillo-q-mx4mSkK9zeo-unsplash.jpg'
import ImageThree from '../Image/connor-wang-MNz7IGrcEl0-unsplash.jpg'
import ImageFour from '../Image/kam-idris-hYb7kbu4x7E-unsplash.jpg'
import ImageFive from '../Image/minh-pham-OtXADkUh3-I-unsplash.jpg'
import ImageSix from '../Image/r-architecture-TRCJ-87Yoh0-unsplash.jpg'
import ImageSeven from '../Image/spacejoy-h2_3dL9yLpU-unsplash.jpg'
import ImageEight from '../Image/spacejoy-RUvW1KGD9a4-unsplash.jpg'
import Image from 'next/image';
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
export const Banner=()=>{
    
    return(
        
        <Carousel responsive={responsive}
          dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        swipeable={false}
        draggable={false}
        transitionDuration={500}
        autoPlay={true}
        autoPlaySpeed={1000}
        infinite={true}
        showDots={false}>
             <div style={{ width: '800px', height: '600px' }} ><Image src={ImageOne} alt="Loading..." srcSet=""    style={{ width: '100%', height: '100%', objectFit: 'cover' }}/></div>
             <div style={{ width: '800px', height: '600px' }} ><Image src={ImageThree} alt="Loading..." srcSet=""  style={{ width: '100%', height: '100%', objectFit: 'cover' }}/></div>
             <div style={{ width: '800px', height: '600px' }} ><Image src={ImageFour} alt="Loading..." srcSet=""  style={{ width: '100%', height: '100%', objectFit: 'cover' }}/></div>
             <div style={{ width: '800px', height: '600px' }} ><Image src={ImageFive} alt="Loading..." srcSet=""  style={{ width: '100%', height: '100%', objectFit: 'cover' }}/></div>
             <div style={{ width: '800px', height: '600px' }} ><Image src={ImageSix} alt="Loading..." srcSet=""  style={{ width: '100%', height: '100%', objectFit: 'cover' }}/></div>
             <div style={{ width: '800px', height: '600px' }} ><Image src={ImageSeven} alt="Loading..." srcSet=""  style={{ width: '100%', height: '100%', objectFit: 'cover' }}/></div>
             <div style={{ width: '800px', height: '600px' }} ><Image src={ImageEight} alt="Loading..." srcSet=""  style={{ width: '100%', height: '100%', objectFit: 'cover' }}/></div>

        {/* 
        <img src="./constants/avery-klein-JaXs8Tk5Iww-unsplash.jpg" alt="Loading..." srcSet=""  style={{ width: '100%', height: '100%', objectFit: 'cover' }}/> */}
        </Carousel>
        
  )
}