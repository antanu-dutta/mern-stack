import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Container from "../Container";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-50 to-yellow-50 text-gray-700">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand / About */}
          <div>
            <h2 className="text-2xl font-bold text-orange-500">RecipeFinder</h2>
            <p className="mt-3 text-sm text-gray-600">
              Discover recipes from around the world. Find meals by ingredients,
              mood, or cuisine and cook something amazing today!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-orange-500 mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-orange-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Popular Recipes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Categories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-orange-500 mb-3">
              Follow Us
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Stay connected with our latest recipes and cooking tips.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 rounded-full bg-green-100 hover:bg-green-200"
              >
                <Facebook size={18} className="text-orange-500" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-green-100 hover:bg-green-200"
              >
                <Instagram size={18} className="text-orange-500" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-green-100 hover:bg-green-200"
              >
                <Twitter size={18} className="text-orange-500" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-green-100 hover:bg-green-200"
              >
                <Youtube size={18} className="text-orange-500" />
              </a>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom copyright */}
      <div className="border-t border-gray-200 text-center py-4 text-sm text-gray-600">
        © {new Date().getFullYear()} RecipeFinder. All rights reserved.
      </div>
    </footer>
  );
}
