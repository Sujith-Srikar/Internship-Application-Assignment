import { useMemo } from "react";

const WhileLoop = ({
  onTime,
  completedIteratiions,
  totalIterations,
  iterationsDone,
  listManager,
  mapManager,
  setManager,
  propMinWidth,
  propGap,
}) => {
  const onTimeStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const assignmentOperatorStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <div className="flex-1 rounded-3xs bg-m3-sys-light-on-primary shadow-[0px_0px_4px_rgba(109,_109,_109,_0.5)] overflow-hidden flex flex-col items-start justify-start pt-[28.6px] px-[21.6px] pb-[42.4px] box-border gap-[14.1px] min-w-[217px] text-left text-base text-black font-poppins">
      <div className="w-[235.5px] h-[35.9px] relative">
        <div
          className="absolute top-[13.9px] left-[0px] leading-[22px] font-semibold inline-block min-w-[68px]"
          style={onTimeStyle}
        >
          {onTime}
        </div>
        <div className="absolute top-[0px] left-[220.4px] rounded-[50%] bg-limegreen w-[15.1px] h-[15.1px]" />
      </div>
      <div
        className="w-[235.6px] flex flex-row items-start justify-start text-base-1"
        style={assignmentOperatorStyle}
      >
        <div className="flex-1 flex flex-col items-start justify-start gap-[3.2px]">
          <div className="self-stretch relative leading-[22px] font-light">
            {completedIteratiions}
          </div>
          <div className="w-[162.1px] relative leading-[22px] font-light inline-block">
            {totalIterations}
          </div>
          <div className="w-[162.1px] relative leading-[22px] font-light inline-block">
            {iterationsDone}
          </div>
        </div>
        <div className="w-[51.9px] flex flex-col items-start justify-start gap-[3.2px] text-right">
          <div className="self-stretch relative leading-[22px] font-semibold">
            {listManager}
          </div>
          <div className="self-stretch relative leading-[22px] font-semibold">
            {mapManager}
          </div>
          <div className="self-stretch relative leading-[22px] font-semibold">
            {setManager}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhileLoop;
