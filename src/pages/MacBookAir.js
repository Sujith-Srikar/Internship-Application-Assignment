import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";
import Sidebar from "../components/Sidebar";

const MacBookAir = () => {
  return (
    <div className="w-full relative bg-whitesmoke flex flex-row items-start justify-start leading-[normal] tracking-[normal]">
      <div className="w-full ">
        <div className="h-screen flex flex-col items-center justify-center">
          <section className="rounded-[17.78px]  flex flex-row items-start justify-start pt-[3.1px] px-[1.8px] pb-[3px] box-border gap-[72px] max-w-full text-left text-23xl-7 text-m3-sys-light-on-primary font-poppins mq450:gap-[18px] mq750:gap-[36px]">
            <div className="w-308.2px flex flex-row items-start justify-start pt-17px pb-8.9px pr-8.9px pl-3.5 box-border">
              {/* Sidebar component */}
              <Sidebar />
            </div>
            {/* Main content */}
            <div className="self-stretch flex flex-col items-end justify-center gap-[33.9px] max-w-full text-base-7 text-m3-sys-light-on-primary mq750:gap-[17px_33.9px]">
              <div className="self-stretch flex flex-col items-end justify-start gap-[16.8px] max-w-full">
                <div className="w-[1412.3px] flex flex-col items-start justify-start py-0 pr-0 pl-5 box-border gap-[31.1px] max-w-full mq750:gap-[16px_31.1px]">
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[24.4px] box-border max-w-full">
                    <div className="flex-1 flex flex-row items-start justify-start gap-[35.2px] max-w-full lg:flex-wrap mq750:gap-[35.2px_18px]">
                      <div className="w-[183.2px] flex flex-row items-end justify-start gap-[4.3px]">
                        <div className="h-[84px] flex-1 relative">
                          <img
                            className="absolute h-full top-[0px] bottom-[0px] left-[74.9px] max-h-full w-[60.9px] object-contain"
                            loading="lazy"
                            alt=""
                            src="/polygon-4.svg"
                          />
                          <div className="absolute top-[5.6px] left-[0px] bg-brand-slate-green-light w-[90.3px] flex flex-row items-start justify-start py-[16.4px] pr-[3.2px] pl-[18.8px] box-border z-[1]">
                            <div className="h-[72.8px] w-[90.3px] relative bg-brand-slate-green-light hidden" />
                            <div className="flex-1 relative leading-[19.63px] font-medium pr-0 z-[2]">
                              Approve Content
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[18.3px]">
                          <img
                            className="w-[43.1px] h-6 relative"
                            alt=""
                            src="/arrow-1.svg"
                          />
                        </div>
                      </div>
                      <FrameComponent1
                        arrow2="/arrow-2.svg"
                        iconexLightTimeCircle="/iconexlighttime-circle.svg"
                        polygon4="/polygon-4-1.svg"
                        createContent="Create Content"
                        arrow3="/arrow-3.svg"
                      />
                      <FrameComponent1
                        arrow2="/arrow-4.svg"
                        iconexLightTimeCircle="/iconexlighttime-circle-1.svg"
                        polygon4="/polygon-4-2.svg"
                        createContent="Approve Content"
                        arrow3="/arrow-5.svg"
                        propPadding="16.4px 3.5px 16.4px 18.7px"
                      />
                      <FrameComponent1
                        arrow2="/arrow-6.svg"
                        iconexLightTimeCircle="/iconexlighttime-circle-2.svg"
                        polygon4="/polygon-4-3.svg"
                        createContent="Run Sample Test"
                        arrow3="/arrow-7.svg"
                        propPadding="7px 3.6px 6.8px 18.6px"
                      />
                      <div className="w-[215.5px] flex flex-row items-end justify-start py-0 pr-3 pl-0 box-border gap-[4.3px] text-smi">
                        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[14.4px]">
                          <div className="flex flex-col items-start justify-start shrink-0 [debug_commit:f6aba90]">
                            <div className="h-[7.6px] flex flex-row items-start justify-start py-0 pr-0 pl-[19.9px] box-border relative">
                              <img
                                className="h-6 w-[43.1px] relative"
                                alt=""
                                src="/arrow-8.svg"
                              />
                              <img
                                className="h-[50.7px] w-[50.7px] absolute !m-[0] top-[-25.4px] left-[-33px]"
                                loading="lazy"
                                alt=""
                                src="/iconexlighttime-circle-3.svg"
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
                        <div className="h-[84px] flex-1 relative shrink-0 [debug_commit:f6aba90] text-base-7">
                          <div className="absolute top-[0px] left-[0px] w-full h-full">
                            <img
                              className="absolute h-full top-[0px] bottom-[0px] left-[75.1px] max-h-full w-[61px] object-contain"
                              loading="lazy"
                              alt=""
                              src="/polygon-4-4.svg"
                            />
                            <div className="absolute h-[calc(100%_-_11.2px)] top-[5.6px] bottom-[5.6px] left-[0px] bg-brand-slate-green-light w-[90.5px] z-[1]" />
                          </div>
                          <div className="absolute top-[22px] left-[13.8px] leading-[19.63px] font-medium flex items-center w-[98.2px] z-[2]">
                            Launch Full Campaign
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[19.6px] px-0 pb-0">
                        <img
                          className="w-[44.8px] h-[44.8px] relative"
                          loading="lazy"
                          alt=""
                          src="/iconexlightplus.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-[1301.2px] h-[0.8px] relative box-border max-w-full border-t-[0.8px] border-solid border-silver" />
                </div>
                <div className="self-stretch flex flex-row items-start justify-start max-w-full text-dark-nuetral-dark-nuetral-10">
                  <div className="w-[1451.5px] flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[7px] max-w-full lg:flex-wrap">
                    <div className="w-[124.1px] flex flex-col items-start justify-start gap-[55.8px]">
                      <div className="self-stretch h-[24.3px] relative leading-[7.24px] font-medium flex items-center shrink-0 [debug_commit:f6aba90]">
                        Active Time
                      </div>
                      <div className="self-stretch h-[24.3px] relative leading-[7.24px] font-medium flex items-center shrink-0 [debug_commit:f6aba90]">
                        Wait Time
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-[17.3px] min-w-[845px] max-w-full text-center mq1050:min-w-full">
                      <div className="w-[1277.7px] flex flex-row items-start justify-start py-0 pr-[7px] pl-[7.1px] box-border max-w-full">
                        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq750:flex-wrap">
                          <div className="h-[24.3px] w-[124.1px] relative leading-[7.24px] font-medium flex items-center justify-center shrink-0">
                            1 Day
                          </div>
                          <div className="h-[24.3px] w-[124.1px] relative leading-[7.24px] font-medium flex items-center justify-center shrink-0">
                            2 Days
                          </div>
                          <div className="h-[24.3px] w-[124.1px] relative leading-[7.24px] font-medium flex items-center justify-center shrink-0">
                            4 Hours
                          </div>
                          <div className="h-[24.3px] w-[124.1px] relative leading-[7.24px] font-medium flex items-center justify-center shrink-0">
                            4 Hours
                          </div>
                          <div className="h-[24.3px] w-[124.1px] relative leading-[7.24px] font-medium flex items-center justify-center shrink-0">
                            1 Day
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch h-[131.8px] flex flex-col items-start justify-start gap-[2.4px] max-w-full text-left text-smi-6 text-light-gray-dark-active mq750:h-auto">
                        <div className="self-stretch h-[100.5px] relative max-w-full mq750:h-auto mq750:min-h-[100.5]">
                          <div className="absolute top-[0px] left-[0px] box-border w-[1301.2px] h-[0.8px] border-t-[0.8px] border-solid border-silver" />
                          <div className="absolute top-[0px] left-[164.2px] w-[991.8px] flex flex-row items-start justify-between py-0 pr-px pl-0 box-border gap-[20px] max-w-full mq750:flex-wrap mq750:justify-center">
                            <div className="w-[140.5px] flex flex-col items-start justify-start py-0 pr-[6.2px] pl-0 box-border">
                              <button className="cursor-pointer [border:none] pt-[36.2px] pb-[24.3px] pr-[18px] pl-[18.8px] bg-brand-light-tint self-stretch flex flex-row items-start justify-start z-[1] hover:bg-gainsboro-200">
                                <div className="h-[100.5px] w-[134.3px] relative bg-brand-light-tint hidden" />
                                <div className="flex-1 relative text-smi-6 leading-[19.63px] font-medium font-poppins text-light-gray-dark-active text-left z-[2]">
                                  2 Weeks (wait for availability)
                                </div>
                              </button>
                            </div>
                            <button className="cursor-pointer [border:none] pt-[26.7px] pb-[14.8px] pr-[18px] pl-[18.9px] bg-brand-light-tint w-[134.3px] flex flex-row items-start justify-start box-border z-[1] hover:bg-gainsboro-200">
                              <div className="h-[100.5px] w-[134.3px] relative bg-brand-light-tint hidden" />
                              <div className="flex-1 relative text-smi-6 leading-[19.63px] font-medium font-poppins text-light-gray-dark-active text-left z-[2]">
                                1 Week (wait for approval authority)
                              </div>
                            </button>
                            <div className="w-[134.3px] bg-brand-light-tint flex flex-row items-start justify-start pt-[36.2px] pb-[24.3px] pr-[13.4px] pl-[23.5px] box-border z-[1]">
                              <div className="h-[100.5px] w-[134.3px] relative bg-brand-light-tint hidden" />
                              <div className="flex-1 flex flex-col items-start justify-start">
                                <div className="self-stretch relative leading-[19.63px] font-medium z-[2]">
                                  2 Weeks (wait for IT support)
                                </div>
                                <div className="self-stretch relative leading-[19.63px] font-medium z-[3] mt-[-40px]">
                                  2 Weeks (wait for IT support)
                                </div>
                              </div>
                            </div>
                            <button className="cursor-pointer [border:none] pt-[26.7px] pb-[14.8px] pr-[18px] pl-[18.8px] bg-brand-light-tint w-[134.3px] flex flex-row items-start justify-start box-border z-[1] hover:bg-gainsboro-200">
                              <div className="h-[100.5px] w-[134.3px] relative bg-brand-light-tint hidden" />
                              <div className="flex-1 relative text-smi-6 leading-[19.63px] font-medium font-poppins text-light-gray-dark-active text-left z-[2]">
                                1 Week (wait for test response)
                              </div>
                            </button>
                          </div>
                        </div>
                        <div className="self-stretch h-[28.9px] relative shrink-0 flex items-center justify-center">
                          <img
                            className="self-stretch h-full max-w-full overflow-hidden shrink-0 object-contain absolute left-[0px] top-[0px] w-full [transform:scale(1.003)]"
                            loading="lazy"
                            alt=""
                            src="/line-5.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[1501.4px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-lg-8 text-light-gray-darker">
                <div className="w-[950.2px] flex flex-col items-start justify-start gap-[55.5px] max-w-full mq750:gap-[28px_55.5px]">
                  <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq750:flex-wrap">
                    <div className="w-[205px] relative leading-[20px] font-semibold flex items-center shrink-0">
                      Flow time = 47 Days
                    </div>
                    <div className="w-[277.2px] relative leading-[20px] font-semibold flex items-center shrink-0">
                      Total Active time = 5 Days
                    </div>
                    <div className="relative leading-[20px] font-semibold">
                      Flow Efficiency = 11%
                    </div>
                  </div>
                  <div className="w-full flex flex-row items-start justify-center py-0 px-5 box-border">
                    <button className="cursor-pointer [border:none] p-0 bg-brand-slate-green rounded-81xl overflow-hidden flex flex-row items-start justify-start">
                      <div className="flex flex-row items-start justify-start py-2.5 px-6">
                        <div className="w-[45px] relative text-lg leading-[20px] font-medium font-poppins text-m3-sys-light-on-primary text-center flex items-center justify-center min-w-[45px]">
                          Save
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MacBookAir;
