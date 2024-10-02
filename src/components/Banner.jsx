import IconRating from "../assets/rating.png";
import IconRatingHalf from "../assets/rating-half.png";
import ImgTemp from "../assets/temp-1.jpeg";
import PlayBtn from "../assets/play-button.png";

const Banner = () => {
  return (
    <div className="w-full h-[600px] bg-banner bg-center bg-cover bg-no-repeat relative">
      <div className="absolute w-full h-full top-0 left-0 bg-black opacity-40"></div>
      <div className="w-full h-full flex flex-col items-center justify-center space-x-[30px] p-4 relative z-20 md:flex-row">
        <div className="flex flex-col space-x-5 items-baseline w-[100%] md:w-[50%]">
          <p className="text-white bg-gradient-to-r from-red-600 to-red-400 py-1 px-3 text-md">
            TV Show
          </p>
          <div className="flex flex-col space-y-1">
            <h2 className="text-white text-[40px] font-bold mt-4">
              Nghe nói em thích tôi
            </h2>
            <div className="flex items-center space-x-3">
              <img src={IconRating} alt="iconRating" className="w-8 h-8" />
              <img src={IconRating} alt="iconRating" className="w-8 h-8" />
              <img src={IconRating} alt="iconRating" className="w-8 h-8" />
              <img src={IconRating} alt="iconRating" className="w-8 h-8" />
              <img
                src={IconRatingHalf}
                alt="iconRatingHalf"
                className="w-8 h-8"
              />
            </div>
            <p className="text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting,
            </p>
            <div className="flex items-center space-x-4 ">
              <button className="p-2 text-white bg-black font-bold">
                Chi tiết
              </button>
              <button className="p-2 text-white bg-red-600 font-bold">
                Xem phim
              </button>
            </div>
          </div>
        </div>
        <div className="w-[50%]  items-center justify-center opacity-0 hidden md:flex md:opacity-100">
          <div className="w-[300px] h-[400px] relative group cursor-pointer">
            <img
              src={ImgTemp}
              alt="temp"
              className="w-full h-full object-cover"
            />
            <div
              className="w-full h-full absolute top-0 left-0 flex items-center
            justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100
            transition-opacity duration-500 ease-in-out"
            >
              <img src={PlayBtn} alt="PlayBtn" className="w-16 h-16 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
