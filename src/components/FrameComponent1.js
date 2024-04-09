import { useMemo } from "react";

const FrameComponent1 = ({
  arrow2,
  iconexLightTimeCircle,
  polygon4,
  createContent,
  arrow3,
  propPadding,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className="flex-1 flex flex-row items-end justify-start gap-[4.3px] min-w-[163px] text-left text-smi text-m3-sys-light-on-primary font-poppins">
      <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[14.4px]">
        <div className="flex flex-col items-start justify-start">
          <div className="h-[7.6px] flex flex-row items-start justify-start py-0 pr-0 pl-[19.9px] box-border relative">
            <img className="h-6 w-[43.1px] relative" alt="" src={arrow2} />
            <img
              className="h-[50.7px] w-[50.7px] absolute !m-[0] top-[-25.4px] left-[-33px]"
              loading="lazy"
              alt=""
              src={iconexLightTimeCircle}
            />
          </div>
          <div className="shadow-[1.4px_1.4px_1.45px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start py-0 pr-7 pl-0 z-[1]">
            <div className="h-[20.3px] w-[20.3px] relative rounded-[50%] bg-red" />
            <div className="flex flex-col items-start justify-start pt-[5.5px] px-0 pb-0 ml-[-12.3px]">
              <div className="relative leading-[8px] font-medium inline-block min-w-[5px] z-[1]">
                !
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[84px] flex-1 relative text-base-7">
        <img
          className="absolute h-full top-[0px] bottom-[0px] left-[75.2px] max-h-full w-[61px] object-contain"
          loading="lazy"
          alt=""
          src={polygon4}
        />
        <div
          className="absolute top-[5.6px] left-[0px] bg-brand-slate-green-light w-[90.5px] flex flex-row items-start justify-start py-[16.4px] pr-[3.2px] pl-[19px] box-border z-[1]"
          style={frameDivStyle}
        >
          <div className="h-[72.8px] w-[90.5px] relative bg-brand-slate-green-light hidden" />
          <div className="flex-1 relative leading-[19.63px] font-medium pr-0 z-[2]">
            {createContent}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[18.3px]">
        <img className="w-[43.1px] h-6 relative" alt="" src={arrow3} />
      </div>
    </div>
  );
};

export default FrameComponent1;
