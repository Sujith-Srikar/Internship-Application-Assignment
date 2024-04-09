import { NavLink } from "react-router-dom";

const PREPARETRANSFOR = () => {
  return (
    <div className="self-stretch flex flex-col items-end justify-start gap-[27.6px] max-w-full text-left text-xs-1 text-black font-poppins">
      <div className="w-[489.4px] flex flex-row items-start justify-end py-0 pr-[40.7px] pl-[41px] box-border max-w-full text-m3-sys-light-on-surface">
        <div className="flex-1 rounded-t-[2.48px] rounded-b-none flex flex-col items-start justify-start relative max-w-full">
          <div className="self-stretch rounded-[2.48px] box-border flex flex-col items-start justify-start max-w-full border-[0.6px] border-solid border-m3-sys-light-outline">
            <div className="self-stretch rounded-t-[2.48px] rounded-b-none flex flex-row flex-wrap items-start justify-start py-[2.5px] px-0 box-border max-w-full [row-gap:20px]">
              <div className="flex flex-col items-center justify-center pt-[2.5px] pb-[2.4px] pr-[2.4px] pl-[2.5px]">
                <div className="w-[25px] h-[24.8px] rounded-42xl-9 overflow-hidden shrink-0 flex flex-row items-center justify-center">
                  <div className="flex flex-row items-center justify-center pt-[4.9px] px-[5px] pb-[5px]">
                    <img
                      className="h-[14.9px] w-[14.9px] relative"
                      loading="lazy"
                      alt=""
                      src="/icon1.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-center pt-0 pb-[8.3px] px-0 box-border relative min-w-[226px] min-h-[30px] max-w-full">
                <input
                  type="text"
                  placeholder="Search by profile, setting, artifact etc..."
                  className="w-full h-full outline-none border-none px-[2.5px] bg-transparent"
                />
                <button className="cursor-pointer py-0 px-[2.5px] bg-m3-sys-light-surface !m-[0] absolute top-[-7.4px] left-[-22.3px] flex flex-row items-center justify-start hover:bg-gainsboro-100">
                  <div className="text-4xs-7 leading-[13px] font-light font-poppins text-brand-slate-green-light text-left inline-block min-w-[31px]">
                    Search
                  </div>
                </button>
              </div>
              <div className="flex flex-col items-center justify-center pt-[2.5px] pb-[2.4px] pr-[2.4px] pl-[2.5px]">
                <div className="w-[25px] h-[24.8px] rounded-42xl-9 overflow-hidden shrink-0 flex flex-row items-center justify-center">
                  <div className="flex flex-row items-center justify-center pt-[4.9px] px-[5px] pb-[5px]">
                    <img
                      className="h-[14.9px] w-[14.9px] relative"
                      loading="lazy"
                      alt=""
                      src="/icon-12.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[12.4px] !m-[0] absolute right-[0px] bottom-[-12.7px] left-[0px] hidden flex-row items-start justify-start pt-[2.5px] pb-0 pr-2.5 pl-[9.9px] box-border max-w-full z-[1] text-4xs-7 text-brand-slate-green-light">
            <div className="h-[13px] flex-1 relative leading-[12.38px] font-light inline-block max-w-full shrink-0">
              Supporting text
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[11.5px] text-4xl-1">
        <div className="self-stretch relative leading-[34px] pr-0 mq450:text-lg mq450:leading-[27px]">
          Set-up Catalix for Success
        </div>
        <div className="self-stretch relative text-base-7 leading-[26.15px] font-light text-dark-nuetral-dark-nuetral-10 pr-0">
          Get Catalix up to date or start your transformation by following the
          guide below.
        </div>
      </div>
      <div className="self-stretch rounded-xl bg-m3-sys-light-on-primary shadow-[0px_0px_15.1px_-3px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-col items-start justify-start pt-[30px] px-10 pb-10 gap-[40px] text-center text-5xl mq725:gap-[20px_40px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[40px] mq450:gap-[20px_40px]">
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
            <button className="cursor-pointer [border:none] p-0 bg-brand-slate-green-light rounded-81xl overflow-hidden flex flex-row items-start justify-start">
              <div className="flex flex-row items-start justify-start py-2.5 px-6">
                <div className="w-8 relative text-lg leading-[20px] font-medium font-poppins text-m3-sys-light-on-primary text-center flex items-center justify-center min-w-[32px]">
                  2/6
                </div>
              </div>
            </button>
          </div>
          <div className="self-stretch relative leading-[30px] mq450:text-lgi mq450:leading-[24px]">
            Build your development value stream map
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center pt-0 px-0 pb-2.5">
          <NavLink to="/macbook-air-8">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-center">
              <div className="rounded-81xl bg-brand-slate-green overflow-hidden flex flex-col items-center justify-center">
                <div className="flex flex-row items-center justify-center py-2.5 px-6">
                  <div className="w-[122px] relative text-lg leading-[20px] font-medium font-poppins text-m3-sys-light-on-primary text-center flex items-center justify-center min-w-[122px]">
                    Start Building
                  </div>
                </div>
              </div>
            </button>
          </NavLink>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center">
          <div className="flex flex-row items-start justify-start gap-[5px]">
            <div className="h-[7px] w-[7px] relative rounded-[50%] bg-dimgray" />
            <div className="h-[7px] w-[7px] relative rounded-[50%] bg-brand-slate-green-light" />
            <div className="h-[7px] w-[7px] relative rounded-[50%] bg-dimgray" />
            <div className="h-[7px] w-[7px] relative rounded-[50%] bg-dimgray" />
            <div className="h-[7px] w-[7px] relative rounded-[50%] bg-dimgray" />
            <div className="h-[7px] w-[7px] relative rounded-[50%] bg-dimgray" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PREPARETRANSFOR;
