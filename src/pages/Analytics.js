import Sidebar from "../components/Sidebar";
import WhileLoop from "../components/WhileLoop";

const Analytics = () => {
  return (
    <div className="w-full relative bg-m3-sys-light-on-primary overflow-hidden flex flex-row items-start justify-start pt-0 px-0 pb-[3px] box-border leading-[normal] tracking-[normal]">
      <main className="flex-1 rounded-[17.78px] bg-whitesmoke overflow-hidden flex flex-row items-start justify-start pt-0 px-[1.8px] pb-[63.1px] box-border gap-[28px] max-w-full lg:flex-wrap mq1050:pb-[41px] mq1050:box-border mq450:pb-[27px] mq450:box-border">
        <div className="h-[825.9px] w-[308.2px] flex flex-row items-start justify-start pt-[17px] pb-[8.9px] pr-[8.9px] pl-3.5 box-border min-w-[308.2px] lg:flex-1">
          <Sidebar />
        </div>
        <section className="h-[825.9px] w-[902px] flex flex-col items-start justify-start pt-[38px] px-0 pb-0 box-border min-w-[902px] max-w-full text-left text-xs-1 text-m3-sys-light-on-surface font-poppins lg:flex-1 mq750:h-auto mq1050:min-w-full">
          <div className="self-stretch h-[854px] flex flex-col items-start justify-start pt-0 px-0 pb-[363.2px] box-border gap-[27.6px] max-w-full mq750:h-auto mq750:pb-[153px] mq750:box-border mq1050:pb-[236px] mq1050:box-border">
            <div className="self-stretch flex flex-row items-start justify-end max-w-full shrink-0">
              <div className="w-[850.4px] flex flex-row items-end justify-between py-0 pr-0 pl-5 box-border max-w-full gap-[20px] mq750:flex-wrap">
                <div className="w-[408px] rounded-t-[2.48px] rounded-b-none flex flex-col items-start justify-start relative max-w-full">
                  <div className="self-stretch rounded-[2.48px] box-border flex flex-col items-start justify-start max-w-full border-[0.6px] border-solid border-m3-sys-light-outline">
                    <div className="self-stretch rounded-t-[2.48px] rounded-b-none flex flex-row items-start justify-start py-[2.5px] px-0 box-border max-w-full [row-gap:20px] mq450:flex-wrap">
                      <div className="flex flex-col items-center justify-center pt-[2.5px] pb-[2.4px] pr-[2.4px] pl-[2.5px]">
                        <div className="w-[25px] h-[24.8px] rounded-42xl-9 overflow-hidden shrink-0 flex flex-row items-center justify-center">
                          <div className="flex flex-row items-center justify-center pt-[5px] px-[5px] pb-[4.9px]">
                            <img
                              className="h-[14.9px] w-[14.9px] relative"
                              loading="lazy"
                              alt=""
                              src="/icon.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-center pt-0 pb-[8.3px] px-0 box-border relative min-w-[226px] min-h-[30px] max-w-full">
                        <div className="flex flex-row items-center justify-start py-0 pr-5 pl-0">
                          <div className="relative leading-[13px] font-light">
                            Search by profile, setting, artifact etc...
                          </div>
                        </div>
                        <button className="cursor-pointer [border:none] py-0 px-[2.5px] bg-m3-sys-light-surface !m-[0] absolute top-[-7.4px] left-[-22.3px] flex flex-row items-center justify-start hover:bg-gainsboro-100">
                          <div className="relative text-4xs-7 leading-[13px] font-light font-poppins text-brand-slate-green-light text-left inline-block min-w-[31px]">
                            Search
                          </div>
                        </button>
                      </div>
                      <div className="flex flex-col items-center justify-center pt-[2.5px] pb-[2.4px] pr-[2.4px] pl-[2.5px]">
                        <div className="w-[25px] h-[24.8px] rounded-42xl-9 overflow-hidden shrink-0 flex flex-row items-center justify-center">
                          <div className="flex flex-row items-center justify-center pt-[5px] px-[5px] pb-[4.9px]">
                            <img
                              className="h-[14.9px] w-[14.9px] relative"
                              loading="lazy"
                              alt=""
                              src="/icon-1.svg"
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
                <div className="h-[41px] flex flex-row items-end justify-start gap-[13px]">
                  <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[4.6px]">
                    <div className="rounded-[10.38px] bg-m3-sys-light-on-primary shadow-[9.8px_18.7px_6.22px_rgba(0,_0,_0,_0),_6.2px_11.6px_5.33px_rgba(0,_0,_0,_0.01),_3.6px_6.2px_4.44px_rgba(0,_0,_0,_0.05),_1.8px_2.7px_3.56px_rgba(0,_0,_0,_0.09),_0px_0.9px_1.78px_rgba(0,_0,_0,_0.1)] flex flex-row items-start justify-start p-[5.2px] relative gap-[5.2px]">
                      <img
                        className="h-[21.3px] w-[21.3px] relative object-cover"
                        loading="lazy"
                        alt=""
                        src="/iconexlightbell@2x.png"
                      />
                      <div className="h-[3.6px] w-[3.6px] absolute !m-[0] top-[5.2px] left-[22.8px] rounded-[50%] bg-brand-slate-green-light z-[1]" />
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[4.6px]">
                    <div className="w-[31.7px] h-[31.7px] relative rounded-[10.38px] bg-m3-sys-light-on-primary shadow-[12.4px_23.1px_7.11px_rgba(0,_0,_0,_0),_8px_15.1px_7.11px_rgba(0,_0,_0,_0.01),_4.4px_8px_5.33px_rgba(0,_0,_0,_0.05),_1.8px_3.6px_4.44px_rgba(0,_0,_0,_0.09),_0.9px_0.9px_2.67px_rgba(0,_0,_0,_0.1)]">
                      <img
                        className="absolute top-[5.2px] left-[5.2px] w-[21.3px] h-[21.3px] object-cover"
                        loading="lazy"
                        alt=""
                        src="/iconexlightbell-1@2x.png"
                      />
                      <div className="absolute top-[5.2px] left-[22.8px] rounded-[50%] bg-brand-slate-green-light w-[3.6px] h-[3.6px] z-[1]" />
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[4.6px]">
                    <div className="rounded-[10.38px] bg-m3-sys-light-on-primary shadow-[9.8px_16px_5.33px_rgba(0,_0,_0,_0),_6.2px_10.7px_4.44px_rgba(0,_0,_0,_0.01),_3.6px_6.2px_4.44px_rgba(0,_0,_0,_0.05),_1.8px_2.7px_2.67px_rgba(0,_0,_0,_0.09),_0px_0.9px_1.78px_rgba(0,_0,_0,_0.1)] flex flex-row items-start justify-start p-[5.2px]">
                      <img
                        className="h-[21.3px] w-[21.3px] relative object-cover"
                        loading="lazy"
                        alt=""
                        src="/iconexlightsettings-1@2x.png"
                      />
                    </div>
                  </div>
                  <div className="h-[41px] w-[41px] relative rounded-[50%] flex items-center justify-center">
                    <img
                      className="h-full w-full object-contain absolute left-[10px] top-[16px] [transform:scale(1.868)]"
                      loading="lazy"
                      alt=""
                      src="/ellipse-49@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <nav className="m-0 self-stretch flex flex-row items-start justify-start py-0 pr-[3px] pl-0 gap-[9.8px] shrink-0 whitespace-nowrap text-center text-mid-7 text-light-tint-dark-active font-poppins mq750:flex-wrap">
              <button className="cursor-pointer [border:none] p-0 bg-brand-slate-green w-[189.9px] rounded-[98.33px] overflow-hidden shrink-0 flex flex-col items-center justify-center">
                <div className="self-stretch flex flex-row items-center justify-center pt-[9.6px] pb-[9.7px] pr-[23.6px] pl-[15.7px] gap-[7.9px]">
                  <img
                    className="h-[17.7px] w-[17.7px] relative"
                    alt=""
                    src="/icon-2.svg"
                  />
                  <div className="flex-1 relative text-mid-7 leading-[20px] font-medium font-poppins text-m3-sys-light-on-primary text-center inline-block min-w-[125px]">
                    Create Report
                  </div>
                </div>
              </button>
              <button className="cursor-pointer p-0 bg-[transparent] rounded-[98.33px] overflow-hidden flex flex-col items-center justify-center border-[1px] border-solid border-light-tint-dark-active">
                <div className="flex flex-row items-center justify-center pt-[9.6px] px-[23.6px] pb-[9.7px]">
                  <div className="w-[193px] relative text-mid-7 leading-[20px] font-medium font-poppins text-brand-slate-green text-center flex items-center justify-center">
                    Share this dashboard
                  </div>
                </div>
              </button>
              <div className="rounded-[98.33px] overflow-hidden flex flex-col items-center justify-center border-[1px] border-solid border-light-tint-dark-active">
                <div className="flex flex-row items-center justify-center pt-[9.6px] px-[23.6px] pb-[9.7px]">
                  <div className="w-[136px] relative leading-[20px] font-medium flex items-center justify-center">
                    Select Duration
                  </div>
                </div>
              </div>
              <button className="cursor-pointer p-0 bg-[transparent] flex-1 rounded-[98.33px] box-border overflow-hidden flex flex-col items-center justify-center min-w-[166px] border-[1px] border-solid border-light-tint-dark-active">
                <div className="flex flex-row items-center justify-center pt-[9.6px] px-[23.6px] pb-[9.7px]">
                  <div className="w-[209px] relative text-mid-7 leading-[20px] font-medium font-poppins text-light-tint-dark-active text-center flex items-center justify-center">
                    Compare with Duration
                  </div>
                </div>
              </button>
            </nav>
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-0.5 pl-0 gap-[22.9px] shrink-0 text-3xs-5 text-lavender mq750:flex-wrap">
              <div className="h-[134.3px] flex-1 relative rounded-5xs-9 bg-lightskyblue shadow-[0px_0px_4.13px_rgba(109,_109,_109,_0.5)] overflow-hidden min-w-[135px]">
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-5xs-9 max-w-full overflow-hidden max-h-full hidden"
                  alt=""
                  src="/background.svg"
                />
                <div className="absolute top-[19.7px] left-[-1.6px] w-full h-[116.2px]">
                  <div className="absolute top-[86.9px] left-[21.4px] leading-[11.85px] font-medium inline-block min-w-[43px] z-[3]">
                    0.00 USD
                  </div>
                  <div className="absolute top-[59.3px] left-[21.4px] text-xs-1 leading-[16px] font-medium text-gray inline-block mix-blend-normal min-w-[94px] z-[3]">
                    +0.0015 (+0.13%)
                  </div>
                  <div className="absolute top-[0px] left-[0px] w-full h-full">
                    <img
                      className="absolute top-[0px] left-[0px] w-full h-full z-[2]"
                      alt=""
                      src="/path-2.svg"
                    />
                    <img
                      className="absolute top-[41.1px] left-[90.9px] w-[7.9px] h-[7.9px] object-contain z-[3]"
                      loading="lazy"
                      alt=""
                      src="/icons10x10whitearrow-up@2x.png"
                    />
                  </div>
                  <div className="absolute top-[31.6px] left-[21.4px] text-4xl-7 leading-[28px] font-medium text-m3-sys-light-on-primary inline-block min-w-[60px] z-[3] mq450:text-lgi mq450:leading-[22px]">
                    1.1921
                  </div>
                  <div className="absolute top-[11.9px] left-[21.4px] leading-[12px] font-medium inline-block min-w-[63px] z-[3]">
                    Lorem Ipsum
                  </div>
                </div>
                <div className="absolute top-[calc(50%_-_55.35px)] left-[9.53%] text-smi-6 tracking-[0.4px] leading-[20px] uppercase font-semibold text-m3-sys-light-on-primary inline-block min-w-[75px] z-[3]">
                  Efficiency
                </div>
              </div>
              <div className="h-[134.3px] flex-1 relative rounded-5xs-9 bg-teal shadow-[0px_0px_4.13px_rgba(109,_109,_109,_0.5)] overflow-hidden min-w-[135px] text-palegoldenrod">
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-5xs-9 max-w-full overflow-hidden max-h-full hidden"
                  alt=""
                  src="/background.svg"
                />
                <div className="absolute top-[18.1px] left-[-1.5px] w-full h-[117.7px]">
                  <div className="absolute top-[33.2px] left-[21.3px] text-4xl-7 leading-[28px] font-medium text-m3-sys-light-on-primary inline-block min-w-[84px] z-[3] mq450:text-lgi mq450:leading-[22px]">
                    327,176
                  </div>
                  <div className="absolute top-[60.9px] left-[21.3px] text-xs-1 leading-[16px] font-medium text-gray inline-block mix-blend-normal min-w-[116px] z-[3]">
                    -97,914.00 (-23.03%)
                  </div>
                  <div className="absolute top-[0px] left-[0px] w-full h-full">
                    <img
                      className="absolute top-[0px] left-[0px] w-full h-full z-[2]"
                      alt=""
                      src="/path-2-1.svg"
                    />
                    <img
                      className="absolute top-[42.7px] left-[109px] w-[7.9px] h-[7.9px] object-contain z-[3]"
                      loading="lazy"
                      alt=""
                      src="/icons10x10whitearrow-up-1@2x.png"
                    />
                  </div>
                  <div className="absolute top-[88.5px] left-[21.3px] leading-[11.85px] font-medium inline-block min-w-[89px] z-[3]">
                    131,040,723,108 JPY
                  </div>
                  <div className="absolute top-[13.5px] left-[21.3px] leading-[12px] font-medium inline-block min-w-[63px] z-[3]">
                    Lorem Ipsum
                  </div>
                </div>
                <div className="absolute top-[calc(50%_-_55.35px)] left-[9.53%] text-smi-6 tracking-[0.4px] leading-[20px] uppercase font-semibold text-m3-sys-light-on-primary inline-block min-w-[109px] z-[3]">
                  time to market
                </div>
              </div>
              <div className="h-[134.3px] w-[207.8px] rounded-5xs-9 bg-m3-sys-light-on-primary shadow-[0px_0px_4.13px_rgba(109,_109,_109,_0.5)] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[11.8px] px-[19.7px] pb-[102.5px] box-border text-smi-6 text-darkslategray-200">
                <img
                  className="w-[207.8px] h-[134.3px] relative rounded-5xs-9 hidden z-[1]"
                  alt=""
                  src="/background.svg"
                />
                <div className="relative tracking-[0.4px] leading-[20px] uppercase font-semibold inline-block min-w-[71px] z-[3]">
                  Tech debt
                </div>
                <div className="ml-[-22.099999999999454px] w-[211.8px] flex flex-col items-start justify-start pt-[11.9px] px-[22.1px] pb-[17.3px] box-border relative gap-[9.7px] mt-[-12.1px] text-3xs-5 text-darkgray">
                  <div className="relative leading-[12px] font-medium inline-block min-w-[63px] z-[3]">
                    Lorem Ipsum
                  </div>
                  <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                    <img
                      className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[2]"
                      alt=""
                      src="/path.svg"
                    />
                    <img
                      className="absolute top-[41.1px] left-[94.8px] w-[7.9px] h-[7.9px] object-contain z-[3]"
                      loading="lazy"
                      alt=""
                      src="/icons10x10darkarrow-up@2x.png"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start text-4xl-7 text-darkslategray-200">
                    <div className="relative leading-[28px] font-medium inline-block min-w-[65px] z-[3] mq450:text-lgi mq450:leading-[22px]">
                      1.1763
                    </div>
                    <div className="relative text-xs-1 leading-[16px] font-medium text-darkslategray-100 inline-block min-w-[94px] z-[3] mt-[-0.3px]">
                      +0.0015 (+0.13%)
                    </div>
                  </div>
                  <div className="relative leading-[11.85px] font-medium inline-block min-w-[43px] z-[3]">
                    0.00 USD
                  </div>
                </div>
              </div>
              <div className="h-[134.3px] w-[207.8px] rounded-5xs-9 bg-tomato shadow-[0px_0px_4.13px_rgba(109,_109,_109,_0.5)] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[11.8px] px-[19.8px] pb-[102.5px] box-border text-smi-6 text-m3-sys-light-on-primary">
                <img
                  className="w-[207.8px] h-[134.3px] relative rounded-5xs-9 hidden z-[1]"
                  alt=""
                  src="/background.svg"
                />
                <div className="relative tracking-[0.4px] leading-[20px] uppercase font-semibold inline-block min-w-[103px] z-[3]">
                  Predictability
                </div>
                <div className="ml-[-21.399999999999636px] w-[211.1px] flex flex-col items-start justify-start pt-[13.5px] px-[21.4px] pb-[17.2px] box-border relative gap-[9.7px] mt-[-13.7px] text-3xs-5 text-pink">
                  <div className="relative leading-[12px] font-medium inline-block min-w-[63px] z-[3]">
                    Lorem Ipsum
                  </div>
                  <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                    <img
                      className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[2]"
                      alt=""
                      src="/path-2-2.svg"
                    />
                    <img
                      className="absolute top-[42.7px] left-[165.2px] w-[7.9px] h-[7.9px] object-contain z-[3]"
                      loading="lazy"
                      alt=""
                      src="/icons10x10whitearrow-up-2@2x.png"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start text-4xl-7 text-m3-sys-light-on-primary">
                    <div className="relative leading-[28px] font-medium inline-block min-w-[127px] z-[3] mq450:text-lgi mq450:leading-[22px]">
                      0.00313010
                    </div>
                    <div className="relative text-xs-1 leading-[15.8px] font-medium text-gray inline-block mix-blend-normal min-w-[129px] whitespace-nowrap z-[3] mt-[-0.3px]">
                      -0.00050430 (-13.88%)
                    </div>
                  </div>
                  <div className="relative leading-[12px] font-medium inline-block min-w-[45px] z-[3]">
                    1,566 BTC
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[11px] pl-0 gap-[10.8px] shrink-0 text-base text-black mq750:flex-wrap">
              <WhileLoop
                onTime="On Time"
                completedIteratiions="Completed Iteratiions"
                totalIterations="Total Iterations"
                iterationsDone="% Iterations Done"
                listManager="7"
                mapManager="9"
                setManager="77.8%"
              />
              <WhileLoop
                onTime="On Scope"
                completedIteratiions="Story Points Done"
                totalIterations="Total Story Points"
                iterationsDone="% Stories Done"
                listManager="3200"
                mapManager="4230"
                setManager="70.9%"
                propMinWidth="78px"
                propGap="0.1px"
              />
              <div className="flex-1 rounded-3xs bg-m3-sys-light-on-primary shadow-[0px_0px_4px_rgba(109,_109,_109,_0.5)] overflow-hidden flex flex-col items-start justify-start pt-[28.6px] px-[21.6px] pb-[55px] box-border gap-[12.8px] min-w-[217px]">
                <div className="self-stretch flex flex-row items-start justify-end py-0 px-[11px]">
                  <div className="h-[15.1px] w-[15.1px] relative rounded-[50%] bg-salmon" />
                </div>
                <div className="relative leading-[22px] font-semibold inline-block min-w-[93px]">
                  On Velocity
                </div>
                <div className="w-[235.6px] flex flex-row items-start justify-start text-base-1">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[3.2px]">
                    <div className="self-stretch relative leading-[22px] font-light">
                      Average Velocity
                    </div>
                    <div className="w-[162.1px] relative leading-[22px] font-light inline-block">
                      Required Velocity
                    </div>
                  </div>
                  <div className="w-[51.9px] flex flex-col items-start justify-start gap-[3.2px] text-right">
                    <div className="self-stretch relative leading-[22px] font-semibold">
                      428.6
                    </div>
                    <div className="self-stretch relative leading-[22px] font-semibold">
                      615.0
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[882px] rounded-3xs bg-m3-sys-light-on-primary overflow-hidden flex flex-col items-end justify-start pt-[11.7px] px-0 pb-[3px] box-border gap-[3.8px] max-w-full shrink-0 text-right text-2xs-8 text-darkslategray-100">
              <img
                className="self-stretch h-[363.6px] relative rounded-3xs max-w-full overflow-hidden shrink-0 hidden"
                alt=""
                src="/background.svg"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[10.8px] max-w-full text-left text-darkslategray-200">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[19px] pl-[19.3px] box-border max-w-full">
                  <div className="flex-1 flex flex-row items-end justify-between shrink-0 [debug_commit:f6aba90] max-w-full gap-[20px] mq750:flex-wrap">
                    <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[3.4px]">
                      <div className="flex flex-row items-start justify-start gap-[5.4px]">
                        <div className="relative tracking-[0.39px] leading-[16px] uppercase font-medium inline-block min-w-[65px] shrink-0 [debug_commit:f6aba90] z-[1]">
                          Pageviews
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[3.9px] px-0 pb-0">
                          <img
                            className="w-[7.7px] h-[7.7px] relative object-contain shrink-0 [debug_commit:f6aba90] z-[1]"
                            alt=""
                            src="/iconarrow@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-[454.1px] flex flex-row items-start justify-start gap-[7.7px] max-w-full text-center text-darkslategray-100 mq450:flex-wrap">
                      <div className="flex-1 rounded-[3.87px] box-border overflow-x-auto flex flex-row items-end justify-start py-0 px-[9.3px] gap-[9px] min-w-[237px] max-w-full z-[1] border-[0px] border-solid border-gainsboro-300">
                        <img
                          className="self-stretch w-[338.1px] relative rounded-[3.87px] max-h-full shrink-0 hidden min-h-[23px]"
                          alt=""
                          src="/bg.svg"
                        />
                        <div className="w-[35px] shrink-0 flex flex-col items-start justify-end pt-0 px-0 pb-[3.4px] box-border">
                          <div className="self-stretch relative leading-[16px] font-medium inline-block min-w-[35px] z-[1]">
                            Today
                          </div>
                        </div>
                        <div className="w-[64.3px] shrink-0 flex flex-row items-end justify-start gap-[8.5px]">
                          <div className="h-[23.2px] w-[0.8px] relative bg-gainsboro-300 z-[1]">
                            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gainsboro-300 hidden" />
                          </div>
                          <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[3.4px]">
                            <div className="self-stretch relative leading-[16px] font-medium inline-block min-w-[55px] z-[1]">
                              Yesterday
                            </div>
                          </div>
                        </div>
                        <div className="h-[23.2px] w-[0.8px] relative bg-gainsboro-300 shrink-0 z-[1]">
                          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gainsboro-300 hidden" />
                        </div>
                        <div className="w-[31px] shrink-0 flex flex-col items-start justify-end pt-0 px-0 pb-[3.4px] box-border">
                          <div className="self-stretch relative leading-[16px] font-medium inline-block min-w-[31px] z-[1]">
                            Week
                          </div>
                        </div>
                        <button className="cursor-pointer [border:none] py-0 px-0 bg-[transparent] w-[56.5px] shrink-0 flex flex-row items-end justify-start box-border">
                          <div className="w-[45.7px] flex flex-col items-start justify-start">
                            <div className="w-[0.8px] h-[23.2px] relative bg-gainsboro-300 z-[1]">
                              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gainsboro-300 hidden" />
                            </div>
                          </div>
                          <img
                            className="self-stretch w-[56.5px] relative max-h-full min-h-[23px] z-[2] ml-[-45.7px]"
                            alt=""
                            src="/active.svg"
                          />
                          <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[3.4px] ml-[-45.7px]">
                            <div className="w-[35px] relative text-2xs-8 leading-[16px] font-medium font-poppins text-darkslategray-100 text-center flex items-center justify-center min-w-[35px] z-[3]">
                              Month
                            </div>
                          </div>
                          <div className="h-[23.2px] w-[0.8px] relative bg-gainsboro-300 z-[1] ml-[-45.7px]">
                            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gainsboro-300 hidden" />
                          </div>
                        </button>
                        <div className="w-[42px] shrink-0 flex flex-col items-start justify-end pt-0 px-0 pb-[3.4px] box-border">
                          <div className="self-stretch relative leading-[16px] font-medium inline-block min-w-[42px] z-[1]">
                            Quarter
                          </div>
                        </div>
                        <div className="h-[23.2px] w-[0.8px] relative bg-gainsboro-300 shrink-0 z-[1]">
                          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gainsboro-300 hidden" />
                        </div>
                        <div className="w-[25px] shrink-0 flex flex-col items-start justify-end pt-0 px-0 pb-[3.4px] box-border">
                          <div className="self-stretch relative leading-[16px] font-medium inline-block min-w-[25px] z-[1]">
                            Year
                          </div>
                        </div>
                      </div>
                      <div className="rounded-[3.87px] bg-m3-sys-light-on-primary flex flex-row items-start justify-start pt-[3.8px] pb-[3.4px] pr-2.5 pl-[11.6px] gap-[5.4px] z-[1] text-left text-darkgray border-[0.8px] border-solid border-gainsboro-300">
                        <div className="h-[23.2px] w-[108.3px] relative rounded-[3.87px] bg-m3-sys-light-on-primary box-border hidden border-[0.8px] border-solid border-gainsboro-300" />
                        <div className="relative leading-[16px] font-medium inline-block min-w-[72px] z-[1]">
                          Select period
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[3.9px] px-0 pb-0">
                          <img
                            className="w-[7.7px] h-[7.7px] relative object-contain z-[1]"
                            alt=""
                            src="/iconarrow-1@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[0.8px] relative bg-gainsboro-300 shrink-0 [debug_commit:f6aba90] z-[1]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gainsboro-300 hidden" />
                </div>
              </div>
              <div className="w-[866.5px] flex flex-row items-start justify-end pt-0 pb-[5.8px] pr-[3.8px] pl-1 box-border max-w-full">
                <div className="flex-1 flex flex-row items-end justify-start gap-[11.7px] max-w-full mq750:flex-wrap">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[3.8px] shrink-0 [debug_commit:f6aba90] mq750:min-w-full">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-5 pl-0 gap-[23.2px] text-darkslategray-200 mq750:flex-wrap">
                      <div className="w-[109.9px] flex flex-col items-start justify-start pt-[19.3px] px-0 pb-0 box-border text-left">
                        <div className="self-stretch relative leading-[16px] font-medium z-[1]">
                          Page
                        </div>
                      </div>
                      <div className="w-[100.6px] flex flex-col items-start justify-start">
                        <div className="self-stretch relative leading-[16px] font-medium shrink-0 [debug_commit:f6aba90] z-[3]">
                          Pageviews
                        </div>
                        <div className="w-[55px] h-[23.5px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border text-sm-9">
                          <div className="mt-[-0.5px] flex-1 relative leading-[24px] font-medium inline-block min-w-[55px] shrink-0 [debug_commit:f6aba90] z-[2]">
                            356,928
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[29.4px]">
                          <img
                            className="h-[18.7px] w-[71.2px] relative shrink-0 [debug_commit:f6aba90] z-[1]"
                            loading="lazy"
                            alt=""
                            src="/chart.svg"
                          />
                        </div>
                      </div>
                      <div className="flex-1 flex flex-row items-start justify-start gap-[13.9px] min-w-[143px]">
                        <div className="flex-1 flex flex-col items-start justify-start">
                          <div className="self-stretch relative leading-[16px] font-medium inline-block min-w-[100.6px] shrink-0 [debug_commit:f6aba90] z-[3]">
                            Unique pageviews
                          </div>
                          <div className="w-[55px] h-[23.5px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border mt-[-0.2px] text-sm-9">
                            <div className="mt-[-0.5px] flex-1 relative leading-[24px] font-medium inline-block min-w-[55px] shrink-0 [debug_commit:f6aba90] z-[2]">
                              275,588
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[29.4px] mt-[-0.2px]">
                            <img
                              className="h-[19.1px] w-[71.2px] relative shrink-0 [debug_commit:f6aba90] z-[1]"
                              loading="lazy"
                              alt=""
                              src="/chart-1.svg"
                            />
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col items-end justify-start">
                          <div className="self-stretch relative leading-[16px] font-medium inline-block min-w-[106px] shrink-0 [debug_commit:f6aba90] z-[3]">
                            Avg. time on page
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[9px] mt-[-0.2px] text-sm-9">
                            <div className="w-14 relative leading-[24px] font-medium flex items-center shrink-0 min-w-[56px] [debug_commit:f6aba90] whitespace-nowrap z-[2]">
                              00:03:51
                            </div>
                          </div>
                          <img
                            className="w-[71.2px] h-[18.7px] relative shrink-0 [debug_commit:f6aba90] z-[1] mt-[-0.2px]"
                            loading="lazy"
                            alt=""
                            src="/chart-2.svg"
                          />
                        </div>
                      </div>
                      <div className="w-[199.6px] flex flex-row items-start justify-start gap-[23.2px]">
                        <div className="flex-1 flex flex-col items-start justify-start">
                          <div className="self-stretch relative leading-[16px] font-medium shrink-0 [debug_commit:f6aba90] z-[3]">
                            Extrances
                          </div>
                          <div className="w-[52px] h-[23.5px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border text-sm-9">
                            <div className="mt-[-0.5px] flex-1 relative leading-[24px] font-medium inline-block min-w-[52px] shrink-0 [debug_commit:f6aba90] z-[2]">
                              315,643
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[29.4px]">
                            <img
                              className="h-[18.5px] w-[71.2px] relative shrink-0 [debug_commit:f6aba90] z-[1]"
                              loading="lazy"
                              alt=""
                              src="/chart-3.svg"
                            />
                          </div>
                        </div>
                        <div className="w-[75.8px] flex flex-col items-start justify-start">
                          <div className="self-stretch relative leading-[16px] font-medium shrink-0 [debug_commit:f6aba90] z-[3]">
                            % Exit
                          </div>
                          <div className="w-[50px] h-[23.5px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border text-sm-9">
                            <div className="mt-[-0.5px] flex-1 relative leading-[24px] font-medium inline-block min-w-[50px] shrink-0 [debug_commit:f6aba90] z-[2]">
                              39,84%
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[4.6px]">
                            <img
                              className="h-[18.7px] w-[71.2px] relative shrink-0 [debug_commit:f6aba90] z-[1]"
                              loading="lazy"
                              alt=""
                              src="/chart-4.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="w-[100.6px] flex flex-col items-start justify-start">
                        <div className="self-stretch relative leading-[16px] font-medium shrink-0 [debug_commit:f6aba90] z-[3]">
                          Page value
                        </div>
                        <div className="w-[52px] h-[23.5px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border text-sm-9">
                          <div className="mt-[-0.5px] flex-1 relative leading-[24px] font-medium inline-block min-w-[52px] shrink-0 [debug_commit:f6aba90] z-[2]">
                            $19,983
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[29.4px]">
                          <img
                            className="h-[18.7px] w-[71.2px] relative shrink-0 [debug_commit:f6aba90] z-[1]"
                            loading="lazy"
                            alt=""
                            src="/chart-5.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[4.7px] box-border max-w-full">
                      <div className="h-[0.8px] flex-1 relative bg-gainsboro-300 mix-blend-normal max-w-full z-[1]">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gainsboro-300 hidden" />
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[5.7px] pr-5 pl-0 gap-[23.2px] mq750:flex-wrap">
                      <div className="flex-1 relative leading-[16px] font-medium text-left inline-block min-w-[71px] z-[1]">
                        /Defect Arrival Rate
                      </div>
                      <div className="flex-1 flex flex-row items-start justify-start gap-[7.8px] min-w-[66px]">
                        <div className="flex-1 relative leading-[16px] font-medium shrink-0 [debug_commit:f6aba90] z-[1]">
                          872,337
                        </div>
                        <div className="flex-1 relative leading-[16px] font-medium text-darkgray inline-block min-w-[46.4px] shrink-0 [debug_commit:f6aba90] z-[1]">
                          (15.82%)
                        </div>
                      </div>
                      <div className="flex-1 flex flex-row items-start justify-start gap-[7.8px] min-w-[66px]">
                        <div className="flex-1 relative leading-[16px] font-medium shrink-0 [debug_commit:f6aba90] z-[1]">
                          574,332
                        </div>
                        <div className="flex-1 relative leading-[16px] font-medium text-darkgray inline-block min-w-[46.4px] shrink-0 [debug_commit:f6aba90] z-[1]">
                          (15.33%)
                        </div>
                      </div>
                      <div className="w-[96.7px] relative leading-[16px] font-medium flex items-center shrink-0 whitespace-nowrap z-[1]">
                        00:05:43
                      </div>
                      <div className="flex-1 flex flex-row items-start justify-start gap-[7.8px] min-w-[66px]">
                        <div className="flex-1 relative leading-[16px] font-medium inline-block min-w-[46.4px] shrink-0 [debug_commit:f6aba90] z-[1]">
                          802,873
                        </div>
                        <div className="flex-1 relative leading-[16px] font-medium text-darkgray inline-block min-w-[46.4px] shrink-0 [debug_commit:f6aba90] z-[1]">
                          (16.75%)
                        </div>
                      </div>
                      <div className="w-[75.8px] relative leading-[16px] font-medium flex items-center shrink-0 z-[1]">
                        25.96%
                      </div>
                      <div className="flex-1 flex flex-row items-start justify-start gap-[7.8px] min-w-[66px]">
                        <div className="flex-1 relative leading-[16px] font-medium shrink-0 [debug_commit:f6aba90] whitespace-nowrap z-[1]">
                          $1,093
                        </div>
                        <div className="flex-1 relative leading-[16px] font-medium text-darkgray shrink-0 [debug_commit:f6aba90] z-[1]">
                          (5.11%)
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[4.7px] box-border max-w-full">
                      <div className="h-[0.8px] flex-1 relative bg-gainsboro-300 mix-blend-normal max-w-full z-[1]">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gainsboro-300 hidden" />
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[5.7px] pr-5 pl-0 gap-[23.2px] mq750:flex-wrap">
                      <div className="w-[109.9px] relative leading-[16px] font-medium text-left flex items-center shrink-0 z-[1]">
                        /Fixed Rate
                      </div>
                      <div className="w-[100.6px] flex flex-row items-start justify-start gap-[7.8px]">
                        <div className="flex-1 relative leading-[16px] font-medium inline-block min-w-[46.4px] shrink-0 [debug_commit:f6aba90] z-[1]">
                          803,792
                        </div>
                        <div className="flex-1 relative leading-[16px] font-medium text-darkgray inline-block min-w-[46.4px] shrink-0 [debug_commit:f6aba90] z-[1]">
                          (14.39%)
                        </div>
                      </div>
                      <div className="w-[100.6px] flex flex-row items-start justify-start gap-[7.8px]">
                        <div className="flex-1 relative leading-[16px] font-medium inline-block min-w-[46.4px] shrink-0 [debug_commit:f6aba90] z-[1]">
                          456,792
                        </div>
                        <div className="flex-1 relative leading-[16px] font-medium text-darkgray inline-block min-w-[46.4px] shrink-0 [debug_commit:f6aba90] z-[1]">
                          (13.93%)
                        </div>
                      </div>
                      <div className="flex-1 flex flex-row items-start justify-start gap-[1.6px] min-w-[143px]">
                        <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[22px] pl-0">
                          <div className="self-stretch relative leading-[16px] font-medium whitespace-nowrap z-[1]">
                            00:05:24
                          </div>
                        </div>
                        <div className="w-[46.4px] relative leading-[16px] font-medium flex items-center shrink-0 min-w-[46.4px] z-[1]">
                          793,982
                        </div>
                        <div className="w-[52.6px] relative leading-[16px] font-medium text-darkgray flex items-center shrink-0 z-[1]">
                          (15.64%)
                        </div>
                      </div>
                      <div className="w-[75.8px] relative leading-[16px] font-medium flex items-center shrink-0 z-[1]">
                        76.13%
                      </div>
                      <div className="w-[100.6px] flex flex-row items-start justify-start gap-[7.8px]">
                        <div className="flex-1 relative leading-[16px] font-medium shrink-0 [debug_commit:f6aba90] z-[1]">
                          $6,792
                        </div>
                        <div className="flex-1 relative leading-[16px] font-medium text-darkgray inline-block min-w-[46.4px] shrink-0 [debug_commit:f6aba90] z-[1]">
                          (36.16%)
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[4.7px] box-border max-w-full">
                      <div className="h-[0.8px] flex-1 relative bg-gainsboro-300 mix-blend-normal max-w-full z-[1]">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gainsboro-300 hidden" />
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[5.7px] pr-5 pl-0 gap-[23.2px] mq750:flex-wrap">
                      <div className="w-[109.9px] relative leading-[16px] font-medium text-left flex items-center shrink-0 z-[1]">
                        /cycle time
                      </div>
                      <div className="w-[100.6px] flex flex-row items-start justify-start gap-[7.8px]">
                        <div className="flex-1 relative leading-[16px] font-medium inline-block min-w-[46.4px] shrink-0 [debug_commit:f6aba90] z-[1]">
                          740,702
                        </div>
                        <div className="flex-1 relative leading-[16px] font-medium text-darkgray inline-block min-w-[46.4px] shrink-0 [debug_commit:f6aba90] z-[1]">
                          (13.46%)
                        </div>
                      </div>
                      <div className="w-[100.6px] flex flex-row items-start justify-start gap-[7.8px]">
                        <div className="flex-1 relative leading-[16px] font-medium inline-block min-w-[46.4px] shrink-0 [debug_commit:f6aba90] z-[1]">
                          405,860
                        </div>
                        <div className="flex-1 relative leading-[16px] font-medium text-darkgray inline-block min-w-[46.4px] shrink-0 [debug_commit:f6aba90] z-[1]">
                          (13.25%)
                        </div>
                      </div>
                      <div className="flex-1 flex flex-row items-start justify-start gap-[7.8px] min-w-[143px]">
                        <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[15px] pl-0">
                          <div className="self-stretch relative leading-[16px] font-medium whitespace-nowrap z-[1]">
                            00:04:36
                          </div>
                        </div>
                        <div className="w-[46.4px] relative leading-[16px] font-medium flex items-center shrink-0 min-w-[46.4px] z-[1]">
                          684,873
                        </div>
                        <div className="w-[46.4px] relative leading-[16px] font-medium text-darkgray flex items-center shrink-0 min-w-[46.4px] z-[1]">
                          (14.33%)
                        </div>
                      </div>
                      <div className="w-[75.8px] relative leading-[16px] font-medium flex items-center shrink-0 z-[1]">
                        41.54%
                      </div>
                      <div className="w-[100.6px] flex flex-row items-start justify-start gap-[7.8px]">
                        <div className="flex-1 relative leading-[16px] font-medium shrink-0 [debug_commit:f6aba90] z-[1]">
                          $702
                        </div>
                        <div className="flex-1 relative leading-[16px] font-medium text-darkgray shrink-0 [debug_commit:f6aba90] z-[1]">
                          (3.47%)
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[4.7px] box-border max-w-full">
                      <div className="h-[0.8px] flex-1 relative bg-gainsboro-300 mix-blend-normal max-w-full z-[1]">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gainsboro-300 hidden" />
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-5 pl-0 gap-[23.2px] mq750:flex-wrap">
                      <div className="w-[109.9px] relative leading-[16px] font-medium text-left flex items-center shrink-0 z-[1]">
                        /lead time
                      </div>
                      <div className="w-[100.6px] flex flex-row items-start justify-start gap-[7.8px]">
                        <div className="flex-1 relative leading-[16px] font-medium inline-block min-w-[46.4px] shrink-0 [debug_commit:f6aba90] z-[1]">
                          676,659
                        </div>
                        <div className="flex-1 relative leading-[16px] font-medium text-darkgray inline-block min-w-[46.4px] shrink-0 [debug_commit:f6aba90] z-[1]">
                          (10.29%)
                        </div>
                      </div>
                      <div className="w-[100.6px] flex flex-row items-start justify-start gap-[7.8px]">
                        <div className="flex-1 relative leading-[16px] font-medium inline-block min-w-[46.4px] shrink-0 [debug_commit:f6aba90] z-[1]">
                          340,765
                        </div>
                        <div className="flex-1 relative leading-[16px] font-medium text-darkgray shrink-0 [debug_commit:f6aba90] z-[1]">
                          (11.70%)
                        </div>
                      </div>
                      <div className="flex-1 flex flex-row items-start justify-start gap-[7.8px] min-w-[143px]">
                        <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[15px] pl-0">
                          <div className="self-stretch relative leading-[16px] font-medium whitespace-nowrap z-[1]">
                            00:04:12
                          </div>
                        </div>
                        <div className="w-[46.4px] relative leading-[16px] font-medium flex items-center shrink-0 min-w-[46.4px] z-[1]">
                          638,982
                        </div>
                        <div className="w-[46.4px] relative leading-[16px] font-medium text-darkgray flex items-center shrink-0 min-w-[46.4px] z-[1]">
                          (13.02%)
                        </div>
                      </div>
                      <div className="w-[199.6px] flex flex-row items-start justify-start gap-[7.8px]">
                        <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[15.4px] pl-0">
                          <div className="self-stretch relative leading-[16px] font-medium z-[1]">
                            46.42%
                          </div>
                        </div>
                        <div className="w-[46.4px] relative leading-[16px] font-medium flex items-center shrink-0 whitespace-nowrap z-[1]">
                          $2,659
                        </div>
                        <div className="w-[46.4px] relative leading-[16px] font-medium text-darkgray flex items-center shrink-0 min-w-[46.4px] z-[1]">
                          (11.64%)
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[195.5px] flex flex-col items-start justify-end pt-0 px-0 pb-[2.1px] box-border">
                    <div className="w-[3.9px] flex-1 relative rounded-[6.19px] bg-darkslategray-100 shrink-0 [debug_commit:f6aba90] z-[1]" />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-end pt-0 pb-[4.6px] pr-[19.4px] pl-[19px] box-border max-w-full">
                <div className="h-[0.8px] flex-1 relative bg-gainsboro-300 mix-blend-normal max-w-full z-[1]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gainsboro-300 hidden" />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-end pt-0 pb-[5.8px] pr-[38.6px] pl-[19px] box-border max-w-full">
                <div className="flex-1 flex flex-row items-start justify-start gap-[23.2px] max-w-full mq750:flex-wrap">
                  <div className="w-[109.9px] relative leading-[16px] font-medium text-left flex items-center shrink-0 z-[1]">
                    /new features
                  </div>
                  <div className="w-[100.6px] flex flex-row items-start justify-start gap-[7.8px]">
                    <div className="flex-1 relative leading-[16px] font-medium inline-block min-w-[46.4px] shrink-0 [debug_commit:f6aba90] z-[1]">
                      508,837
                    </div>
                    <div className="flex-1 relative leading-[16px] font-medium text-darkgray shrink-0 [debug_commit:f6aba90] z-[1]">
                      (7.74%)
                    </div>
                  </div>
                  <div className="w-[100.6px] flex flex-row items-start justify-start">
                    <div className="flex-1 relative leading-[16px] font-medium shrink-0 [debug_commit:f6aba90] z-[1]">
                      317,543
                    </div>
                    <div className="flex-1 relative leading-[16px] font-medium text-darkgray shrink-0 [debug_commit:f6aba90] z-[1]">
                      (10.66%)
                    </div>
                  </div>
                  <div className="flex-1 flex flex-row items-start justify-start min-w-[143px]">
                    <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[23px] pl-0">
                      <div className="self-stretch relative leading-[16px] font-medium whitespace-nowrap z-[1]">
                        00:04:11
                      </div>
                    </div>
                    <div className="w-[43.3px] relative leading-[16px] font-medium flex items-center shrink-0 min-w-[43.3px] z-[2]">
                      555,982
                    </div>
                    <div className="w-[57.3px] relative leading-[16px] font-medium text-darkgray flex items-center shrink-0 z-[1]">
                      (10.44%)
                    </div>
                  </div>
                  <div className="w-[75.8px] relative leading-[16px] font-medium flex items-center shrink-0 z-[1]">
                    27.40%
                  </div>
                  <div className="w-[100.7px] flex flex-row items-start justify-start gap-[0.1px]">
                    <div className="flex-1 relative leading-[16px] font-medium shrink-0 [debug_commit:f6aba90] z-[1]">
                      $4,508
                    </div>
                    <div className="flex-1 relative leading-[16px] font-medium text-darkgray shrink-0 [debug_commit:f6aba90] z-[1]">
                      (23.43%)
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-end pt-0 pb-[4.7px] pr-[19.4px] pl-[19px] box-border max-w-full">
                <div className="h-[0.8px] flex-1 relative bg-gainsboro-300 mix-blend-normal max-w-full z-[1]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gainsboro-300 hidden" />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-end pt-0 pb-[5.7px] pr-[38.7px] pl-[19px] box-border max-w-full">
                <div className="flex-1 flex flex-row items-start justify-start gap-[23.2px] max-w-full mq750:flex-wrap">
                  <div className="flex-1 relative leading-[16px] font-medium text-left inline-block min-w-[67px] z-[1]">
                    /ready features
                  </div>
                  <div className="flex-1 flex flex-row items-start justify-start gap-[7.8px] min-w-[66px]">
                    <div className="flex-1 relative leading-[16px] font-medium inline-block min-w-[46.4px] shrink-0 [debug_commit:f6aba90] z-[1]">
                      495,938
                    </div>
                    <div className="flex-1 relative leading-[16px] font-medium text-darkgray shrink-0 [debug_commit:f6aba90] z-[1]">
                      (7.38%)
                    </div>
                  </div>
                  <div className="flex-1 flex flex-row items-start justify-start min-w-[66px]">
                    <div className="flex-1 relative leading-[16px] font-medium shrink-0 [debug_commit:f6aba90] z-[1]">
                      310,554
                    </div>
                    <div className="flex-1 relative leading-[16px] font-medium text-darkgray shrink-0 [debug_commit:f6aba90] z-[1]">
                      (10.58%)
                    </div>
                  </div>
                  <div className="w-[96.7px] relative leading-[16px] font-medium flex items-center shrink-0 whitespace-nowrap z-[1]">
                    00:02:56
                  </div>
                  <div className="flex-1 flex flex-row items-start justify-start gap-[7.8px] min-w-[66px]">
                    <div className="flex-1 relative leading-[16px] font-medium shrink-0 [debug_commit:f6aba90] z-[1]">
                      297,303
                    </div>
                    <div className="flex-1 relative leading-[16px] font-medium text-darkgray shrink-0 [debug_commit:f6aba90] z-[1]">
                      (6.07%)
                    </div>
                  </div>
                  <div className="w-[75.8px] relative leading-[16px] font-medium flex items-center shrink-0 z-[1]">
                    28.89%
                  </div>
                  <div className="flex-1 flex flex-row items-start justify-start gap-[7.8px] min-w-[66px]">
                    <div className="flex-1 relative leading-[16px] font-medium shrink-0 [debug_commit:f6aba90] whitespace-nowrap z-[1]">
                      $495
                    </div>
                    <div className="flex-1 relative leading-[16px] font-medium text-darkgray shrink-0 [debug_commit:f6aba90] z-[1]">
                      (7.38%)
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-end pt-0 pb-[4.7px] pr-[19.4px] pl-[19px] box-border max-w-full">
                <div className="h-[0.8px] flex-1 relative bg-gainsboro-300 mix-blend-normal max-w-full z-[1]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gainsboro-300 hidden" />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-end pt-0 pb-[5.7px] pr-[38.7px] pl-[19px] box-border max-w-full">
                <div className="flex-1 flex flex-row items-start justify-start gap-[23.2px] max-w-full shrink-0 mq750:flex-wrap">
                  <div className="h-4 flex-1 relative leading-[15.47px] font-medium text-left flex items-center min-w-[71px] z-[1]">
                    /system testing
                  </div>
                  <div className="flex-1 flex flex-row items-start justify-start gap-[7.8px] min-w-[66px]">
                    <div className="h-4 flex-1 relative leading-[15.47px] font-medium flex items-center shrink-0 [debug_commit:f6aba90] z-[1]">
                      319,002
                    </div>
                    <div className="h-4 flex-1 relative leading-[15.47px] font-medium text-darkgray flex items-center shrink-0 [debug_commit:f6aba90]">
                      (3.95%)
                    </div>
                  </div>
                  <div className="flex-1 flex flex-row items-start justify-start gap-[7.8px] min-w-[66px]">
                    <div className="h-4 flex-1 relative leading-[15.47px] font-medium flex items-center shrink-0 [debug_commit:f6aba90]">
                      167,997
                    </div>
                    <div className="h-4 flex-1 relative leading-[15.47px] font-medium text-darkgray flex items-center shrink-0 [debug_commit:f6aba90]">
                      (5.03%)
                    </div>
                  </div>
                  <div className="h-4 w-[96.7px] relative leading-[15.47px] font-medium flex items-center shrink-0 whitespace-nowrap">
                    00:02:24
                  </div>
                  <div className="flex-1 flex flex-row items-start justify-start gap-[7.8px] min-w-[66px]">
                    <div className="h-4 flex-1 relative leading-[15.47px] font-medium flex items-center shrink-0 [debug_commit:f6aba90]">
                      201,983
                    </div>
                    <div className="h-4 flex-1 relative leading-[15.47px] font-medium text-darkgray flex items-center shrink-0 [debug_commit:f6aba90]">
                      (4.96%)
                    </div>
                  </div>
                  <div className="h-4 w-[75.8px] relative leading-[15.47px] font-medium flex items-center shrink-0">
                    32.87%
                  </div>
                  <div className="flex-1 flex flex-row items-start justify-start gap-[7.8px] min-w-[66px]">
                    <div className="h-4 flex-1 relative leading-[15.47px] font-medium flex items-center shrink-0 [debug_commit:f6aba90]">
                      $2,319
                    </div>
                    <div className="h-4 flex-1 relative leading-[15.47px] font-medium text-darkgray flex items-center shrink-0 [debug_commit:f6aba90]">
                      (3.95%)
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[19.4px] pl-[19px] box-border max-w-full">
                <div className="h-[0.8px] flex-1 relative bg-gainsboro-300 mix-blend-normal max-w-full">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gainsboro-300 hidden" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Analytics;
