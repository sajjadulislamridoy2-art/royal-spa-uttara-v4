/**
 * Google Maps Embed - Functional version without API key issues
 */

interface MapViewProps {
  className?: string;
  initialCenter?: { lat: number; lng: number };
  initialZoom?: number;
  onMapReady?: (map: any) => void;
}

export function MapView({
  className,
}: MapViewProps) {
  // Exact location: House 29, Road 3B, Sector 09, Uttara, Dhaka 1230
  const locationQuery = encodeURIComponent("House 29, Road 3/B, Sector 09, Uttara, Dhaka 1230");
  
  return (
    <div className={className} style={{ position: 'relative', overflow: 'hidden' }}>
      <iframe
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps?q=${locationQuery}&output=embed`}
        title="Royal Spa Uttara Location"
      />
    </div>
  );
}
