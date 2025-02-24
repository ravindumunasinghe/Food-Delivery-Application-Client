
import {Building2} from 'lucide-react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl font-bold text-orange-500">FoodieHub</span>
        </div>

        {/* Restaurant Button */}
        <button  onClick={() => navigate('/restaurant')}className="flex items-center space-x-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
          <Building2 size={20} />
          <span>Restaurants</span>
        </button>
      </div>
    </div>
  </nav>
  )
}

export default Navbar

