import React from "react";


export function Hours({ ...props }) {
  return (
    <div className="flex flex-col gap-[200px] items-start justify-start w-[1000px] relative">
      <div className="flex flex-row items-center justify-between shrink-0 w-[1000px] relative">
        <div
          className="text-[#202020] text-left relative"
          style={{ font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)" }}
        >
          10Hours
        </div>

        <div className="flex flex-row gap-[69px] items-start justify-start shrink-0 relative">
          <div className="flex flex-col items-start justify-start shrink-0 relative">
            <div
              className="text-[#202020] text-left relative"
              style={{
                font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              Production time: 2018.05.27
            </div>

            <div
              className="text-[#202020] text-left relative"
              style={{
                margin: "-4px 0 0 0",
                font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              制作时间：2018.05.27
            </div>
          </div>

          <div className="flex flex-col items-start justify-start shrink-0 relative">
            <div
              className="text-[#202020] text-left relative"
              style={{
                font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              Type: Requirement
            </div>

            <div
              className="text-[#202020] text-left relative"
              style={{
                margin: "-4px 0 0 0",
                font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              类型：需求
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-start justify-between self-stretch shrink-0 relative">
        <div className="flex flex-col gap-[57px] items-start justify-start shrink-0 relative">
          <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
            <div
              className="text-[#000000] text-left relative"
              style={{
                font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
              }}
            >
              Design instructions
            </div>

            <div
              className="text-[#000000] text-left relative"
              style={{
                font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              Design instructions
            </div>
          </div>

          <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
            <div
              className="text-[#000000] text-left relative"
              style={{
                font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
              }}
            >
              设计说明
            </div>

            <div
              className="text-[#000000] text-left relative"
              style={{
                font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              设计说明
            </div>
          </div>
        </div>

        <img
          className="shrink-0 w-[400px] h-[406.7px] relative"
          src="hours.png" />
      </div>
    </div>
  );
}
