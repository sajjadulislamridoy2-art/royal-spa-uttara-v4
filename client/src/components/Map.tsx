/**
 * Google Street View - Shows only the street view for the location
 */

interface MapViewProps {
  className?: string;
}

export function MapView({
  className,
}: MapViewProps) {
  // Location: House 29, Road 3/B, Sector 09, Uttara, Dhaka 1230
  // Approximate Coordinates for House 29, Road 3/B: 23.8775768, 90.3990697
  const lat = 23.8775768;
  const lng = 90.3990697;
  
  return (
    <div className={className} style={{ position: 'relative', overflow: 'hidden' }}>
      <iframe
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/streetview?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R&location=${lat},${lng}&heading=210&pitch=10&fov=90`}
        title="Royal Spa Uttara Street View"
      />
    </div>
  );
}
