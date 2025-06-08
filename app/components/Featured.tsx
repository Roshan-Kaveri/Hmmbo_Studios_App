import { plugins } from "@/app/constants/plugins";

import DisplayCard from "./DisplayCard";
import FeaturedCard from "./FeaturedCard";

const Featured = () => {
  return (
    <div>
      <p className="text-5xl mb-10 font-semibold text-center text-secondary-gradient">
      Our Best Picks
      </p>

      <div className="w-full flex items-center gap-x-10 max-w-7xl">
        {plugins.map((plugin, index) => (
          <FeaturedCard key={index} {...plugin} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
