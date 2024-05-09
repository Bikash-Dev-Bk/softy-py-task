import { MdOutlineRemoveRedEye } from "react-icons/md";
import pic from "../assets/images/news1.png";
import { LuHeart } from "react-icons/lu";

const News = () => {
  const news = [
    {
      id: 1,
      headline: "Breakthrough in Cancer Treatment Found",
      author: "Dr. Sarah Johnson",
      date: "Monday 10, May 2024",
      views: 1500,
      react: 120,
      image: pic,
    },
    {
      id: 2,
      headline: "New Study Shows Benefits of Meditation for Mental Health",
      author: "Dr. Christopher Lee",
      date: "Sunday 09, May 2024",
      views: 2000,
      react: 150,
      image: pic,
    },
    {
      id: 3,
      headline: "Advancements in Alzheimer's Research",
      author: "Dr. Emily White",
      date: "Saturday 08, May 2024",
      views: 1800,
      react: 130,
      image: pic,
    },
    {
      id: 4,
      headline: "New Drug Shows Promise in Treating Diabetes",
      author: "Dr. John Davis",
      date: "Friday 07, May 2024",
      views: 2200,
      react: 180,
      image: pic,
    },
  ];
  return (
    <div className="bg-[#FAFDFE] py-20">
      <div className="text-center">
        <p className="text-base lg:text-xl uppercase text-[#159EEC] font-bold tracking-[.12em]">
          Better information, Better health
        </p>
        <h2 className="text-[#1F2B6C] text-2xl md:text-3xl lg:text-4xl font-bold mb-3 mt-1">
          News
        </h2>
      </div>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 mt-24">
        {news.map((n) => (
          <div
            key={n.id}
            className="flex gap-5 flex-col md:flex-row items-center bg-white rounded-r-lg"
          >
            <img src={n.image} alt="" className="w-full md:w-[200px]" />
            <div>
              <div>
                <p className="text-[#159EEC]">
                  <span>{n.date}</span> | <span>{n.author}</span>
                </p>
              </div>
              <h3 className="text-xl font-semibold">{n.headline}</h3>
              <div className="flex gap-5 items-center mt-5">
                <p className="flex gap-1 items-center">
                  <span>
                    <MdOutlineRemoveRedEye className="text-blue-400" />
                  </span>
                  <span>{n.views}</span>
                </p>
                <p className="flex gap-1 items-center">
                  <span>
                    <LuHeart className="text-red-500" />
                  </span>
                  <span>{n.react}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
