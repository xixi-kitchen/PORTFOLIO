import React from "react";
import { useNavigate } from "react-router-dom";

export default function Homepage_interactive() {
  const goNavigate = useNavigate(); //在Home组件里初始化一个uN对象

  const goAbspace = () => {
    goNavigate("/abspace");
    window.scrollTo(0, 0);
  };
  const goTour = () => {
    goNavigate("/tour");
    window.scrollTo(0, 0);
  };
  const goGeneral = () => {
    goNavigate("/general");
    window.scrollTo(0, 0);
  };
  const goPractice = () => {
    goNavigate("/practice");
    window.scrollTo(0, 0);
  };

  return (
    <div className="relative flex shrink-0 flex-col items-center justify-start gap-[57px]">
      <div className="relative flex shrink-0 flex-col items-start justify-start gap-[18px]">
        <div className="relative flex shrink-0 flex-row items-end justify-between self-stretch">
          <div className="relative flex shrink-0 flex-col items-start justify-start gap-0">
            <div
              className="relative text-left text-[#000000]"
              style={{
                font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
              }}
            >
              Interactive column
            </div>

            <div
              className="relative text-left text-[#000000]"
              style={{
                font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
              }}
            >
              交互专栏
            </div>
          </div>

          <div className="relative flex shrink-0 flex-col items-start justify-start gap-0">
            <div
              className="relative text-left text-[#650000]"
              style={{
                font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              Interactive column content can only be accessed from the home page
            </div>

            <div
              className="relative text-left text-[#650000]"
              style={{
                font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              交互专栏内容只能从主页进入
            </div>
          </div>
        </div>

        <div className="relative flex shrink-0 flex-col items-start justify-start gap-[9px]">
          <div className="relative flex w-[1022px] shrink-0 flex-col items-start justify-start gap-2.5 ">
            <div
              className="relative self-stretch text-left"
              style={{
                font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              <span>
                <span className="">A-B Space and TOUR are two </span>
                <span className="text-[#8158FC]">
                  interaction design research reports
                </span>
                <span className="">
                  , recording the whole process of the two projects from the
                  beginning of the project to the final completion of the
                  high-fidelity prototype, which also includes the research and
                  research methods used in interaction design, and finally
                  generates a complete interaction design report.
                </span>
              </span>
            </div>

            <div
              className="relative self-stretch text-left"
              style={{
                font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              <span>
                <span className="">A-B Space 和 TOUR 是两篇</span>
                <span className="text-[#8158FC]">交互设计调研报告</span>
                <span className="">
                  ，记录了两个项目从开始立项到最终完成高还原度原型的全过程，其中还包含了交互设计中所使用的调研和研究方式，最终生成一份完整的交互设计报告。
                </span>
              </span>
            </div>
          </div>

          <div className="relative flex w-[1022px] shrink-0 flex-col items-start justify-start gap-2.5">
            <div
              className="relative self-stretch text-left"
              style={{
                font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              <span>
                <span className="">
                  General UI and PRACTICE are two complete{" "}
                </span>
                <span className="text-[#8158FC]">design systems</span>
                <span className="">
                  {" "}
                  that can be directly put into use. Among them, General UI is a
                  universal system with universal components required for
                  various applications.
                </span>
              </span>
            </div>

            <div
              className="relative self-stretch text-left"
              style={{
                font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              <span>
                <span className="">GENERAL UI 和 PRACTICE 则是两套完整的</span>
                <span className="text-[#8158FC]">设计系统</span>
                <span className="">
                  ，可以直接投入使用，其中 GENERAL UI
                  是一套通用的体系，拥有各类应用所需的通用型组件。
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex shrink-0 flex-col items-center justify-start gap-4">
        <div className="relative flex shrink-0 flex-col items-start justify-center gap-1">
          <div
            className="relative self-stretch text-left text-[#8158fc]"
            style={{
              font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
            }}
          >
            Click the card below to jump to the corresponding page
          </div>

          <div
            className="relative self-stretch text-center text-[#8158fc]"
            style={{
              font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
            }}
          >
            点击下方卡片即可跳转至对应页面
          </div>
        </div>

        <div className="relative flex h-[1080px] w-[1440px] shrink-0 flex-row items-start justify-start gap-5 ">
          <div
            className="relative flex flex-1 cursor-pointer flex-row items-start justify-start gap-2.5 self-stretch hover:scale-105"
            onClick={goAbspace}
          >
            <img
              className="relative flex-1 self-stretch rounded-2xl"
              src="homepage-2.png"
            />

            <div
              className="absolute left-[calc(50%_-_151.5px)] top-[calc(50%_-_32px)] w-[305px] text-center text-[#ffffff]"
              style={{ font: "600 60px 'Archivo', sans-serif" }}
            >
              A-B Space
            </div>
          </div>

          <div
            className="relative flex flex-1 cursor-pointer flex-row items-start justify-start gap-2.5 self-stretch hover:scale-105"
            onClick={goTour}
          >
            <img
              className="relative h-[1080px] w-[345px] shrink-0 rounded-2xl"
              src="homepage-3.png"
            />

            <div
              className="absolute left-[37px] top-[468px] text-left text-[#a30000]"
              style={{ font: "600 96px/150% 'PingFang SC', sans-serif" }}
            >
              TOUR
            </div>
          </div>

          <div
            className="relative flex flex-1 cursor-pointer flex-col items-start justify-start gap-2.5 self-stretch hover:scale-105"
            onClick={goGeneral}
          >
            <img
              className="relative flex-1 self-stretch rounded-2xl"
              src="homepage-4.png"
            />

            <div
              className="absolute left-[calc(50%_-_163.5px)] top-[calc(50%_-_60px)] text-center text-[#ffffff]"
              style={{ font: "600 40px/150% 'PingFang SC', sans-serif" }}
            >
              GENERAL UI <br />
              DESIGN SCREENS
            </div>
          </div>

          <div
            className="relative flex flex-1 cursor-pointer flex-col items-start justify-start gap-2.5 self-stretch hover:scale-105"
            onClick={goPractice}
          >
            <img
              className="relative flex-1 self-stretch rounded-2xl"
              src="homepage-5.png"
            />

            <div
              className="absolute left-[calc(50%_-_159.5px)] top-[calc(50%_-_48px)] text-left text-[#ffffff]"
              style={{ font: "600 64px/150% 'PingFang SC', sans-serif" }}
            >
              PRACTICE
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
