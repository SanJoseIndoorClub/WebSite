import { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function OptimizedImage({ src, alt, className = '' }: OptimizedImageProps) {
  const [loading, setLoading] = useState(true);
  const [currentSrc, setCurrentSrc] = useState('');

  useEffect(() => {
    // Reset loading state when src changes
    setLoading(true);
    
    // Create a low quality image URL
    const lowQualityUrl = `${src}?w=50&q=10`;
    
    // Create a high quality image URL
    const highQualityUrl = `${src}?w=1920&q=75`;

    // Preload low quality image
    const lowQualityImg = new Image();
    lowQualityImg.src = lowQualityUrl;
    lowQualityImg.onload = () => {
      setCurrentSrc(lowQualityUrl);
      
      // Preload high quality image
      const highQualityImg = new Image();
      highQualityImg.src = highQualityUrl;
      highQualityImg.onload = () => {
        setCurrentSrc(highQualityUrl);
        setLoading(false);
      };
    };
  }, [src]);

  return (
    <div className={`relative ${className}`}>
      {loading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      <img
        src={currentSrc || src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          loading ? 'opacity-50 blur-sm' : 'opacity-100 blur-0'
        }`}
        loading="lazy"
      />
    </div>
  );
}