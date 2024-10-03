const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-8 border-t-[1px] border-gray-400">
      <div className="container mx-auto ">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 lg:w-1/3 mb-6">
            <a href="#" className="text-2xl font-bold text-red-500">
              Movie
            </a>
            <p className="mt-4">
              Website xem phim trực tuyến với kho phim đa dạng, cập nhật nhanh
              nhất.
            </p>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/3 mb-6">
            <h3 className="text-lg font-semibold text-red-500 mb-4">
              Liên kết
            </h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-red-500">
                  Trang chủ
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-red-500">
                  Phim mới
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-red-500">
                  Thể loại
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-red-500">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/3 mb-6">
            <h3 className="text-lg font-semibold text-red-500 mb-4">
              Kết nối với chúng tôi
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-500">
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500">
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-500">
          <p>&copy; 2024 MovieStream. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
