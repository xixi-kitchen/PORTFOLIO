import React from "react";
import { useNavigate } from "react-router-dom";

export default function Homepage_classic() {
  const goNavigate = useNavigate(); //在Home组件里初始化一个uN对象

  const goSaint = () => {
    goNavigate("/saint");
    window.scrollTo(0, 0);
  };
  // const goMiss = () => {
  //   goNavigate("/Miss");
  // };
  const goMigiccomb = () => {
    goNavigate("/migiccomb");
    window.scrollTo(0, 0);
  };
  const goTwoface = () => {
    goNavigate("/twoface");
    window.scrollTo(0, 0);
  };
  // const goEscort = () => {
  //   goNavigate("/Escort");
  // };
  // const goEscortplus = () => {
  //   goNavigate("/Escortplus");
  // };
  const goAerobic = () => {
    goNavigate("/aerobic");
    window.scrollTo(0, 0);
  };
  const goNotlack = () => {
    goNavigate("/notlack");
    window.scrollTo(0, 0);
  };

  return (
    <div className="relative flex shrink-0 flex-col items-center justify-start gap-10">
      <div className="relative flex w-[1022px] shrink-0 flex-col items-start justify-start gap-0">
        <div
          className="relative text-left text-[#000000]"
          style={{
            font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
          }}
        >
          CLASSIC
        </div>

        <div
          className="relative text-left text-[#000000]"
          style={{
            font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
          }}
        >
          经典项目
        </div>
      </div>

      <div className="relative flex shrink-0 flex-col items-center justify-start gap-3">
        <div className="relative flex w-[1022px] shrink-0 flex-col items-start justify-center gap-0">
          <div
            className="relative self-stretch text-left text-[#8158fc]"
            style={{
              font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
            }}
          >
            Click the picture below to jump to the corresponding page
          </div>

          <div
            className="relative self-stretch text-left text-[#8158fc]"
            style={{
              font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
            }}
          >
            点击下方图片即可跳转至对应页面
          </div>
        </div>

        <div className="relative flex h-[1672px] w-[1440px] shrink-0 flex-col items-center justify-start gap-10 ">
          <div
            className="relative flex flex-1 cursor-pointer flex-row items-start justify-start gap-2.5 self-stretch hover:scale-105"
            onClick={goAerobic}
          >
            <img
              className="relative flex-1 self-stretch rounded-2xl rounded-2xl"
              src="homepage-6.png"
            />

            <div className="absolute left-[calc(50%_-_143px)] top-[calc(50%_-_96.2px)] flex shrink-0 flex-col items-center justify-center drop-shadow-xl">
              <div
                className="relative text-left text-[#ffffff]"
                style={{
                  font: "600 80px/150% 'PingFang SC', sans-serif",
                }}
              >
                aerobic
              </div>

              <div
                className="relative text-left text-[#ffffff]"
                style={{
                  margin: "-20px 0 0 0",
                  font: "100 60px/150% 'PingFang SC', sans-serif",
                }}
              >
                “有氧”
              </div>
            </div>
          </div>

          <div
            className="relative flex flex-1 cursor-pointer flex-col items-start justify-start gap-2.5 self-stretch hover:scale-105"
            onClick={goMigiccomb}
          >
            <img
              className="relative flex-1 self-stretch rounded-2xl rounded-2xl"
              src="homepage-7.png"
            />

            <div className="absolute left-[calc(50%_-_207px)] top-[calc(50%_-_84.6px)] flex shrink-0 flex-col items-center justify-center gap-5 drop-shadow-xl">
              <div
                className="relative text-left text-[#ffffff]"
                style={{
                  font: "600 60px/150% 'PingFang SC', sans-serif",
                }}
              >
                Monster comb
              </div>

              <div
                className="relative text-left text-[#ffffff]"
                style={{
                  font: "300 40px/150% 'PingFang SC', sans-serif",
                }}
              >
                怪物梳
              </div>
            </div>
          </div>

          <div
            className="relative flex flex-1 cursor-pointer flex-col items-start justify-start gap-2.5 self-stretch bg-[#f3f3f3] hover:scale-105"
            onClick={goSaint}
          >
            <div className="relative flex flex-1 flex-col items-center justify-start gap-2.5 self-stretch">
              <img
                className="relative flex-1 self-stretch rounded-2xl"
                src="homepage-8.png"
              />
            </div>

            <div
              className="absolute left-[calc(50%_-_170px)] top-[calc(50%_-_72.2px)] flex shrink-0 flex-col items-center justify-start gap-5"
              style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
            >
              <div
                className="relative text-left text-[#ececec]"
                style={{
                  font: "600 60px/150% 'PingFang SC', sans-serif",
                }}
              >
                Saint Lance
              </div>

              <div
                className="relative text-left text-[#ececec]"
                style={{
                  font: "300 40px/150% 'PingFang SC', sans-serif",
                }}
              >
                圣·兰斯号
              </div>
            </div>
          </div>

          <div
            className="relative flex flex-1 cursor-pointer flex-col items-center justify-start gap-2.5 self-stretch hover:scale-105"
            onClick={goTwoface}
          >
            <img
              className="relative flex-1 self-stretch rounded-2xl"
              src="homepage-9.png"
            />

            <div className="absolute left-[calc(50%_-_358px)] top-[calc(50%_-_82.2px)] flex shrink-0 flex-col items-center justify-start">
              <div
                className="relative text-left text-[#ffffff]"
                style={{
                  font: "600 80px/150% 'PingFang SC', sans-serif",
                }}
              >
                Thinner and cooler
              </div>

              <div
                className="relative text-left text-[#ffffff]"
                style={{
                  margin: "-16px 0 0 0",
                  font: "300 40px/150% 'PingFang SC', sans-serif",
                }}
              >
                更薄、更酷炫
              </div>
            </div>
          </div>

          <div
            className="relative flex flex-1 cursor-pointer flex-col items-start justify-start gap-2.5 self-stretch hover:scale-105"
            onClick={goNotlack}
          >
            <img
              className="relative flex-1 self-stretch rounded-2xl"
              src="homepage-10.png"
            />

            <div className="absolute left-[calc(50%_-_516px)] top-[calc(50%_-_67.2px)] flex shrink-0 flex-col items-center justify-start drop-shadow-xl">
              <div
                className="relative text-left text-[#202020]"
                style={{
                  font: "600 60px/150% 'PingFang SC', sans-serif",
                }}
              >
                &quot;Heart&quot; will not lack companionship
              </div>

              <div
                className="relative text-left text-[#202020]"
                style={{
                  margin: "-16px 0 0 0",
                  font: "300 40px/150% 'PingFang SC', sans-serif",
                }}
              >
                “心”不会缺少陪伴
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
