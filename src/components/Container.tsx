import FeatureList from "./FeatureList";
import FilterSpotLight from "./FilterSpotLight";
import Footer from "./Footer";
import Hero from "./Hero";
import Pricing from "./Pricing";
import StrategyList from "./StrategyList";
import Testimonial from "./Testimonial";

export default function Container() {
  return (
    <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-[216px] pb-8 sm:pb-12 md:pb-16 flex flex-col justify-start items-center px-2 sm:px-4 md:px-8 lg:px-0 w-full sm:pl-0 sm:pr-0 pl-0 pr-0">
      <Hero />

      <FilterSpotLight />

      <StrategyList />

      <Testimonial />

      <FeatureList />

      <Pricing />

      <Footer />
    </div>
  );
}
