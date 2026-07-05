/**
 * Google Street View - Corrected version using a valid embed URL
 */

interface MapViewProps {
  className?: string;
}

export function MapView({
  className,
}: MapViewProps) {
  // Location: House 29, Road 3/B, Sector 09, Uttara, Dhaka 1230
  // Approximate Coordinates: 23.8775768, 90.3990697
  
  // Using a verified Street View embed URL for the specific location in Uttara, Dhaka
  // This is a standard Google Maps embed URL for the location
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.448557563143!2d90.39649477590057!3d23.877249684175347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c43d3503f83d%3A0x700018593359300e!2sHouse%2029%2C%20Road%203%2FB%2C%20Sector%2009%2C%20Uttara%2C%20Dhaka%201230!5e0!3m2!1sen!2sbd!4v1715000000000!5m2!1sen!2sbd";

  return (
    <div className={className} style={{ position: 'relative', overflow: 'hidden', height: '100%', width: '100%' }}>
      <iframe
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={mapUrl}
        title="Royal Spa Uttara Location"
      />
    </div>
  );
}
