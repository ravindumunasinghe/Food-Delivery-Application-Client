import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-xl font-bold mb-4">About FoodieHub</h3>
              <p className="text-gray-300">
                Delivering happiness to your doorstep with the best selection of restaurants and cuisines in your area.
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Phone size={18} className="mr-2" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail size={18} className="mr-2" />
                  <span>support@foodiehub.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin size={18} className="mr-2" />
                  <span>123 Food Street, NY 10001</span>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div>
              <h3 className="text-xl font-bold mb-4">Hours</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Clock size={18} className="mr-2" />
                  <span>Mon-Fri: 9:00 AM - 10:00 PM</span>
                </div>
                <div className="flex items-center">
                  <Clock size={18} className="mr-2" />
                  <span>Sat-Sun: 10:00 AM - 11:00 PM</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-orange-500 transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  <Twitter size={24} />
                </a>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2025 FoodieHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer