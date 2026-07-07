import ServiceCard from '../ServiceCard';

export default function ServiceCardExample() {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-amber-50 p-8">
      <ServiceCard
        title="Sunday Service"
        time="9:00 AM - 10:30 AM"
        address="20/14, SH 113, Sheesha Nagar, Poonamallee, Chennai, Poonamallee, Tamil Nadu 600056"
        mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.1!2d80.09!3d13.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAzJzAwLjAiTiA4MMKwMDUnMjQuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
      />
    </div>
  );
}
