import Github from "./svg/Github";
import Linkedin from "./svg/Linkedin";
import XLogo from "./svg/XLogo";

export default function Footer() {
  return (
    <div className="w-full pt-10 flex flex-col justify-start items-start border-t border-[rgba(55,50,47,0.12)]">
      <div className="self-stretch h-auto flex flex-col md:flex-row justify-between items-stretch pr-0 pb-8 pt-0">
        <div className="h-auto p-4 md:p-8 flex flex-col justify-start items-start gap-8">
          <div className="self-stretch flex justify-start items-center gap-3">
            <div className="text-center text-[#49423D] text-xl font-semibold leading-4">Brillance</div>
          </div>
          <div className="text-[rgba(73,66,61,0.90)] text-sm font-medium leading-[18px]">Coding made effortless</div>

          <div className="flex justify-start items-start gap-4">
            <div className="w-6 h-6 relative overflow-hidden">
              <XLogo />
            </div>

            <div className="w-6 h-6 relative overflow-hidden">
              <Linkedin />
            </div>

            <div className="w-6 h-6 relative overflow-hidden">
              <Github />
            </div>
          </div>
        </div>

        <div className="self-stretch p-4 md:p-8 flex flex-col sm:flex-row flex-wrap justify-start sm:justify-between items-start gap-6 md:gap-8">
          <div className="flex flex-col justify-start items-start gap-3 flex-1 min-w-[120px]">
            <div className="self-stretch text-[rgba(73,66,61,0.50)] text-sm font-medium leading-5">Product</div>
            <div className="flex flex-col justify-end items-start gap-2">
              <div className="text-[#49423D] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] transition-colors">
                Features
              </div>
              <div className="text-[#49423D] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] transition-colors">
                Pricing
              </div>
              <div className="text-[#49423D] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] transition-colors">
                Integrations
              </div>
              <div className="text-[#49423D] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] transition-colors">
                Real-time Previews
              </div>
              <div className="text-[#49423D] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] transition-colors">
                Multi-Agent Coding
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-start items-start gap-3 flex-1 min-w-[120px]">
            <div className="text-[rgba(73,66,61,0.50)] text-sm font-medium leading-5">Company</div>
            <div className="flex flex-col justify-center items-start gap-2">
              <div className="text-[#49423D] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] transition-colors">
                About us
              </div>
              <div className="text-[#49423D] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] transition-colors">
                Our team
              </div>
              <div className="text-[#49423D] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] transition-colors">
                Careers
              </div>
              <div className="text-[#49423D] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] transition-colors">
                Brand
              </div>
              <div className="text-[#49423D] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] transition-colors">
                Contact
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-start items-start gap-3 flex-1 min-w-[120px]">
            <div className="text-[rgba(73,66,61,0.50)] text-sm font-medium leading-5">Resources</div>
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="self-stretch text-[#49423D] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] transition-colors">
                Terms of use
              </div>
              <div className="self-stretch text-[#49423D] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] transition-colors">
                API Reference
              </div>
              <div className="self-stretch text-[#49423D] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] transition-colors">
                Documentation
              </div>
              <div className="self-stretch text-[#49423D] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] transition-colors">
                Community
              </div>
              <div className="self-stretch text-[#49423D] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] transition-colors">
                Support
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="self-stretch h-12 relative overflow-hidden border-t border-b border-[rgba(55,50,47,0.12)]">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="w-full h-full relative"></div>
        </div>
      </div>
    </div>
  );
}
