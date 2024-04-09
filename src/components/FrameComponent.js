const FrameComponent = ({ iconexLightSettings, iconexLightLogout }) => {
  return (
    <div className="w-[236.4px] !m-[0] absolute top-[631.1px] left-[24px] box-border flex flex-col items-center justify-end py-[12.4px] px-0 text-center text-mid-8 text-m3-sys-light-on-primary font-poppins border-t-[0.9px] border-solid border-m3-sys-light-on-primary">
      <button className="bg-brand-slate-green self-stretch cursor-pointer rounded-[17.78px] flex flex-row items-center justify-start pt-[20.8px] pb-[20.7px] pr-[106px] pl-[22.2px] gap-[15.1px]">
        <img
          className="h-[20.7px] w-[21.6px] relative object-cover min-h-[21px]"
          loading="lazy"
          alt=""
          src={iconexLightSettings}
        />
        <div className="flex-1 relative leading-[18px] inline-block min-w-[72px] text-m3-sys-light-on-primary text-mid-8 font-poppins">
          Settings
        </div>
      </button>
      <button className="bg-brand-slate-green self-stretch cursor-pointer rounded-[17.78px] flex flex-row items-center justify-start pt-[20.7px] pb-[20.8px] pr-[117px] pl-[22.2px] gap-[15.1px]">
        <img
          className="h-[20.7px] w-[21.6px] relative min-h-[21px]"
          loading="lazy"
          alt=""
          src={iconexLightLogout}
        />
        <div className="flex-1 relative leading-[18px] inline-block min-w-[61px] text-m3-sys-light-on-primary text-mid-8 font-poppins">
          Logout
        </div>
      </button>
    </div>
  );
};

export default FrameComponent;
