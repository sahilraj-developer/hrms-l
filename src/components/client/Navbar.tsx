import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, User, ShoppingCart } from "lucide-react"; // ChevronDown for dropdown indicator

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false); // state for toggling profile menu

  return (
    <nav className="bg-black text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">MyApp</h1>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 text-lg">
          <Link to="/client" className="p-2 hover:text-gray-200 transition">Home</Link>
          <Link to="/client/products" className="p-2 hover:text-gray-200 transition">Products</Link>
          <Link to="/client/cart" className="p-2 hover:text-gray-200 transition"><ShoppingCart /></Link>
          
          {/* Profile Dropdown */}
          <div className="relative">
            <button
              className="flex items-center space-x-2 p-2 hover:text-gray-200 transition"
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)} // Toggle profile menu visibility
            >
              {/* <img
                src="https://via.placeholder.com/40" // Placeholder profile image
                alt="Profile"
                className="rounded-full w-10 h-10 object-cover"
              /> */}
               <User />
              <ChevronDown size={16} />
            </button>

            {/* Profile Dropdown Menu */}
            {isProfileMenuOpen && (
              <div className="absolute right-0 mt-2 bg-black text-white rounded-lg shadow-md w-64 py-2">
                {/* Profile Display */}
                <div className="px-4 py-2 border-b border-gray-700">
                  <div className="flex items-center space-x-2">
                    {/* <img
                      src="https://via.placeholder.com/40" // Placeholder profile image
                      alt="Profile"
                      className="rounded-full w-12 h-12 object-cover"
                    /> */}
                     <User />
                    <div>
                      <p className="font-semibold">John Doe</p> {/* Replace with dynamic name */}
                      <p className="text-sm text-gray-400">john.doe@example.com</p> {/* Replace with dynamic email */}
                    </div>
                  </div>
                </div>

                {/* Dropdown Menu */}
                <Link to="/client/profile" className="block px-4 py-2 hover:bg-gray-700">Profile Settings</Link>
                <Link to="/logout" className="block px-4 py-2 hover:bg-gray-700">Logout</Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-2 mt-2 bg-gray-400 p-4 rounded-lg shadow-md">
          <Link to="/client" className="p-2 hover:text-gray-200 transition" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/client/products" className="p-2 hover:text-gray-200 transition" onClick={() => setIsOpen(false)}>Products</Link>
          <Link to="/client/cart" className="p-2 hover:text-gray-200 transition"><ShoppingCart /></Link>

          {/* Profile Dropdown for Mobile */}
          <div className="relative">
            <button
              className="flex items-center space-x-2 p-2 hover:text-gray-200 transition"
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)} // Toggle profile menu visibility
            >
              {/* <img
                src="https://via.placeholder.com/40" // Placeholder profile image
                alt="Profile"
                className="rounded-full w-10 h-10 object-cover"
              /> */}
              <User />
              <ChevronDown size={16} />
            </button>

            {/* Mobile Profile Dropdown Menu */}
            {isProfileMenuOpen && (
              <div className="absolute right-0 mt-2 bg-black text-white rounded-lg shadow-md w-64 py-2">
                {/* Profile Display */}
                <div className="px-4 py-2 border-b border-gray-700">
                  <div className="flex items-center space-x-2">
                    <img
                      src="https://via.placeholder.com/40" // Placeholder profile image
                      alt="Profile"
                      className="rounded-full w-12 h-12 object-cover"
                    />
                    <div>
                      <p className="font-semibold">John Doe</p> {/* Replace with dynamic name */}
                      <p className="text-sm text-gray-400">john.doe@example.com</p> {/* Replace with dynamic email */}
                    </div>
                  </div>
                </div>

                {/* Dropdown Menu */}
                <Link to="/client/profile" className="block px-4 py-2 hover:bg-gray-700" onClick={() => setIsOpen(false)}>Profile Settings</Link>
                <Link to="/logout" className="block px-4 py-2 hover:bg-gray-700" onClick={() => setIsOpen(false)}>Logout</Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
