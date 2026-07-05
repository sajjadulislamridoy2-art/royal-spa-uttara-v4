/**
 * Google Maps Embed - works on Vercel without any proxy
 */

interface MapViewProps {
  className?: string;
  initialCenter?: { lat: number; lng: number };
  initialZoom?: number;
  onMapReady?: (map: any) => void;
}

export function MapView({
  className,
  initialCenter,
}: MapViewProps) {
  const lat = initialCenter?.lat || 23.8775768;
  const lng = initialCenter?.lng || 90.3990697;
  const encodedLocation = encodeURIComponent(`House 29, Road 3/B, Sector 09, Uttara, Dhaka 1230`);

  return (
    <iframe
      className={className}
      width="100%"
      height="100%"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R&q=${encodedLocation}&center=${lat},${lng}&zoom=16&maptype=roadmap`}
      title="Royal Spa Uttara Location"
    />
  );
}
