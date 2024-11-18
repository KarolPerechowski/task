import { useState, useEffect } from "react";

const Image = ({ src, alt, className, width = 'auto', height = 'auto', srcSet, link, onHover, imageStyle, skeleton = false }) => {

  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleImageError = (e) => {
    e.target.alt = 'Image failed to load';
    setHasError(true);
  };

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  const checkIfInViewport = () => {
    const rect = imageRef.current?.getBoundingClientRect();
    if (rect && rect.top <= window.innerHeight) {
      setIsInViewport(true);
    }
  };

  useEffect(() => {
    if (skeleton && !isLoaded) {
      checkIfInViewport(); 
      window.addEventListener('scroll', checkIfInViewport);

      return () => window.removeEventListener('scroll', checkIfInViewport); 
    }
  }, [isLoaded, skeleton]);

  return (
  <div>
    {!isLoaded && skeleton && !hasError && (
      <div className="skeleton-loader" style={{ width, height }} />
    )}
    
    {link ? 
    <a href={link}>
      <img
        src={src}
        srcSet={srcSet}
        alt={alt || "lorem ipsum"}
        className={className} 
        width={width}
        height={height}
        loading="lazy"
        onMouseEnter={onHover}
        style={imageStyle}
        onLoad={handleImageLoad}
        onError={handleImageError} />
    </a> :
      <img
        src={src}
        srcSet={srcSet}
        alt={alt || "lorem ipsum"}
        width={width}
        height={height}
        className={className} 
        loading="lazy"
        onMouseEnter={onHover}
        style={imageStyle}
        onLoad={handleImageLoad}
        onError={handleImageError} />}
  </div>
  )
};

export default Image;
