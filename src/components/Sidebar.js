import FrameComponent from "./FrameComponent";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <div className="self-stretch flex-1 rounded-[35.56px] bg-brand-slate-green shadow-[8.9px_8.9px_12.62px_rgba(0,_0,_0,_0.25)] flex flex-col items-center justify-start pt-[35.6px] pb-[18.7px] pr-[24.5px] pl-6 box-border relative gap-[48px] min-w-[285.3333435058594px] min-h-[800px] text-left text-23xl-7 text-m3-sys-light-on-primary font-poppins mq450:gap-[24px_48px] mq725:pt-[23px] mq725:pb-5 mq725:box-border">
      <div className="self-stretch flex flex-row items-center justify-center py-0 px-[3px] gap-[10.7px]">
        <img
          className="h-[42.7px] w-[42.7px] relative"
          loading="lazy"
          alt=""
          src="/iconexlightbox-3.svg"
        />
        <div className="h-[47.1px] flex-1 relative font-semibold flex items-center mq450:text-7xl mq975:text-15xl">
          Catalix
        </div>
      </div>
      <nav className="m-0 self-stretch flex flex-col items-center justify-start gap-[9.8px] text-center text-mid-8 text-m3-sys-light-on-primary font-poppins">
        <NavLink to="/">
          <button
            className={`bg-brand-slate-green cursor-pointer [border:none] pt-[20.8px] pb-[20.7px] pr-[124px] pl-[22.2px]  self-stretch rounded-[17.78px] flex flex-row items-center justify-center gap-[15.1px] top-[0] z-[99] sticky hover:bg-steelblue mq450:pr-5 mq450:box-border ${
              pathname === "/" ? "bg-brand-slate-green-light" : ""
            }`}
          >
            <img
              className="h-[20.7px] w-[21.6px] relative min-h-[21px]"
              alt=""
              src="/iconexlighthome.svg"
            />
            <div className="flex-1 relative text-mid-8 leading-[18px] font-poppins text-m3-sys-light-on-primary text-center inline-block min-w-[54px]">
              Home
            </div>
          </button>
        </NavLink>
        <button className="bg-brand-slate-green cursor-pointer self-stretch rounded-[17.78px] flex flex-row items-center justify-start pt-[20.8px] pb-[20.7px] pr-[98px] pl-[22.2px] gap-[15.1px] hover:bg-steelblue mq450:pr-5 mq450:box-border">
          <img
            className="h-[20.7px] w-[21.6px] relative min-h-[21px]"
            loading="lazy"
            alt=""
            src="/iconexlighttimer1.svg"
          />
          <div className="flex-1 relative leading-[18px] inline-block min-w-[80px] text-m3-sys-light-on-primary text-mid-8 font-poppins">
            Activities
          </div>
        </button>
        <NavLink to="/analytics">
          <button
            className={`bg-brand-slate-green  cursor-pointer self-stretch rounded-[17.78px] flex flex-row items-center justify-start pt-[20.8px] pb-[20.7px] pr-[97px] pl-[22.2px] gap-[15.1px] hover:bg-steelblue mq450:pr-5 mq450:box-border ${
              pathname === "/analytics" ? "bg-brand-slate-green-light" : ""
            }`}
          >
            <img
              className="h-[20.7px] w-[21.6px] relative min-h-[21px]"
              loading="lazy"
              alt=""
              src="/iconexlightchart.svg"
            />
            <div className="flex-1 relative leading-[18px] inline-block min-w-[81px] text-m3-sys-light-on-primary text-mid-8 font-poppins">
              Analytics
            </div>
          </button>
        </NavLink>
        <button className="bg-brand-slate-green self-stretch cursor-pointer rounded-[17.78px] flex flex-row items-center justify-start pt-[20.8px] pb-[20.7px] pr-[41px] pl-[22.2px] gap-[15.1px] hover:bg-steelblue mq450:pr-5 mq450:box-border">
          <img
            className="h-[20.7px] w-[21.6px] relative min-h-[21px]"
            loading="lazy"
            alt=""
            src="/iconexlightrocket2.svg"
          />
          <div className="flex-1 relative leading-[18px] text-m3-sys-light-on-primary text-mid-8 font-poppins">
            Transformation
          </div>
        </button>
        <button className="bg-brand-slate-green self-stretch cursor-pointer rounded-[17.78px] flex flex-row items-center justify-start pt-[20.8px] pb-[20.7px] pr-[118px] pl-[22.2px] gap-[15.1px] hover:bg-steelblue mq450:pr-5 mq450:box-border">
          <img
            className="h-[20.7px] w-[21.6px] relative min-h-[21px]"
            loading="lazy"
            alt=""
            src="/iconexlightlayers2.svg"
          />
          <div className="flex-1 relative leading-[18px] inline-block min-w-[60px] text-m3-sys-light-on-primary text-mid-8 font-poppins">
            Library
          </div>
        </button>
      </nav>
      <img
        className="w-10 h-10 pl-[24.5px] absolute !m-[0] top-[35px] left-[220.4px]"
        loading="lazy"
        alt=""
        src="/sidebar-icon2.svg"
      />
      <FrameComponent
        iconexLightSettings="/iconexlightsettings2@2x.png"
        iconexLightLogout="/iconexlightlogout2.svg"
      />
    </div>
  );
};

export default Sidebar;
