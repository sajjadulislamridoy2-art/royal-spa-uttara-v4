/**
 * Google Street View - Functional version without API key issues
 */

interface MapViewProps {
  className?: string;
}

export function MapView({
  className,
}: MapViewProps) {
  // Location: House 29, Road 3/B, Sector 09, Uttara, Dhaka 1230
  // Approximate Coordinates: 23.8775768, 90.3990697
  const lat = 23.8775768;
  const lng = 90.3990697;
  
  // Using a direct Google Maps Street View embed URL that doesn't require an API key
  const streetViewUrl = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d100!2d${lng}!3d${lat}!2m3!1f210!2f10!3f0!3m2!1i1024!2i768!4f75!4m2!3e2!7e2`;

  return (
    <div className={className} style={{ position: 'relative', overflow: 'hidden', height: '100%', width: '100%' }}>
      <iframe
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={streetViewUrl}
        title="Royal Spa Uttara Street View"
      />
    </div>
  );
}
