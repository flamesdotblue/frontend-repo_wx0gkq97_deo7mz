export default function Footer() {
  return (
    <footer id="contact" className="border-t border-black/5 bg-white/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="text-lg font-semibold">Bag o Bags</div>
          <p className="mt-2 text-sm text-gray-600 max-w-xs">Premium bags designed for life on the move. Thoughtful design, timeless style.</p>
        </div>
        <div className="grid grid-cols-2 gap-8 md:col-span-2">
          <div>
            <div className="font-medium mb-3">Shop</div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#collections" className="hover:text-gray-900">All bags</a></li>
              <li><a href="#featured" className="hover:text-gray-900">Featured</a></li>
              <li><a href="#" className="hover:text-gray-900">New arrivals</a></li>
            </ul>
          </div>
          <div>
            <div className="font-medium mb-3">Company</div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#about" className="hover:text-gray-900">About</a></li>
              <li><a href="#contact" className="hover:text-gray-900">Contact</a></li>
              <li><a href="#" className="hover:text-gray-900">Returns</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-black/5 py-6 text-center text-xs text-gray-500">© {new Date().getFullYear()} Bag o Bags. All rights reserved.</div>
    </footer>
  );
}
