import { services } from "../data/Service";
import Strategy from "./Strategy";

export default function StrategyList() {
  return (
    <div className="self-stretch border-t border-b border-[#E0DEDB] flex justify-center items-start mt-60">
      <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
        <div className="w-[120px] sm:w-[140px] md:w-[162px] -left-10 sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
          <template id="pattern-template">
            <div className="self-stretch h-3 sm:h-4 -rotate-45 origin-top-left outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"></div>
          </template>
        </div>
      </div>

      <div className="flex-1 px-0 sm:px-2 md:px-0 flex flex-col md:flex-row justify-center items-stretch gap-0">
        {services.map((service, index) => (
          <Strategy key={index} title={service.title} desc={service.desc} image={service.image} />
        ))}
      </div>

      <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
        <div className="w-[120px] sm:w-[140px] md:w-[162px] -left-10 sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
          <template id="pattern-template-2">
            <div className="self-stretch h-3 sm:h-4 -rotate-45 origin-top-left outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"></div>
          </template>
        </div>
      </div>
    </div>
  );
}
