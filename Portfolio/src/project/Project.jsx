import React from "react";
import { useNavigate } from "react-router-dom";

function Project() {

  const goNavigate = useNavigate(); //在Home组件里初始化一个uN对

  const goVector = () => {
    goNavigate("/Vector");
  };
  const goOne = () => {
    goNavigate("/One");
  };
  const goSaint = () => {
    goNavigate("/Saint");
  };
  const goMiss = () => {
    goNavigate("/Miss");
  };
  const goMigiccomb = () => {
    goNavigate("/Migiccomb");
  };
  const goTwoface = () => {
    goNavigate("/Twoface");
  };
  const goEscort = () => {
    goNavigate("/Escort");
  };
  const goEscortplus = () => {
    goNavigate("/Escortplus");
  };
  const goAerobic = () => {
    goNavigate("/Aerobic");
  };
  const goNotlack = () => {
    goNavigate("/Notlack");
  };

  return (
    <div className="relative w-[1440px] flex flex-col justify-center">

      
      <div
        className="relative flex flex-1 snap-x snap-mandatory flex-row items-start justify-start gap-0 self-stretch overflow-x-scroll scrollbar overflow-y-hidden"
 
      >
        <div id="aerobic" className="relative flex w-[1440px] shrink-0 snap-center flex-row items-start justify-start gap-2.5 self-stretch" onClick={goAerobic}>
          <img
            className="relative flex-1 self-stretch"
            src="projectbig-1.png"
          />

          <div
            className="absolute left-[calc(50%_-_143px)] top-[calc(50%_-_96px)] flex shrink-0 flex-col items-center justify-center drop-shadow-2xl"
            
          >
            <div
              className="relative text-left text-[#ffffff]"
              style={{ font: "600 80px/150% 'PingFang SC', sans-serif" }}
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

        <div id="migic" className="relative flex w-[1440px] shrink-0 snap-center flex-col items-start justify-start gap-2.5 self-stretch" onClick={goMigiccomb}>
          <img
            className="relative flex-1 self-stretch"
            src="projectbig-2.png"
          />

          <div
            className="absolute left-[calc(50%_-_207px)] top-[calc(50%_-_84.4px)] flex shrink-0 flex-col items-center justify-center gap-5 drop-shadow-2xl"
           
          >
            <div
              className="relative text-left text-[#ffffff] drop-shadow-xl"
              style={{ font: "600 60px/150% 'PingFang SC', sans-serif" }}
            >
              Monster comb
            </div>

            <div
              className="relative text-left text-[#ffffff] drop-shadow-xl"
              style={{ font: "300 40px/150% 'PingFang SC', sans-serif" }}
            >
              怪物梳
            </div>
          </div>
        </div>

        <div id="two" className="relative flex w-[1440px] shrink-0 snap-center flex-col items-center justify-start gap-2.5 self-stretch" onClick={goTwoface}>
          <img
            className="relative flex-1 self-stretch"
            src="projectbig-3.png"
          />

          <div className="absolute left-[calc(50%_-_358px)] top-[calc(50%_-_82px)] flex shrink-0 flex-col items-center justify-start">
            <div
              className="relative text-left text-[#ffffff]"
              style={{ font: "600 80px/150% 'PingFang SC', sans-serif" }}
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

        <div id="saint" className="relative flex w-[1440px] shrink-0 snap-center flex-col items-start justify-start gap-2.5 self-stretch" onClick={goSaint}>
          <img
            className="relative flex-1 self-stretch"
            src="projectbig-4.png"
          />

          <div
            className="absolute left-[calc(50%_-_169px)] top-[165px] flex shrink-0 flex-col items-center justify-start gap-5 drop-shadow-xl "
            
          >
            <div
              className="relative text-left text-[#ececec] "
              style={{ font: "600 60px/150% 'PingFang SC', sans-serif" }}
            >
              Saint Lance
            </div>

            <div
              className="relative text-left text-[#ececec]"
              style={{ font: "300 40px/150% 'PingFang SC', sans-serif" }}
            >
              圣·兰斯号
            </div>
          </div>
        </div>

        <div id="vector" className="relative flex w-[1440px] shrink-0 snap-center flex-col items-center justify-start gap-2.5 self-stretch" onClick={goVector}>
          <img
            className="relative flex-1 self-stretch"
            src="projectbig-5.png"
          />

          <div className="absolute left-[calc(50%_-_248.5px)] top-[calc(50%_-_85px)] flex shrink-0 flex-col items-center justify-start gap-5">
            <div
              className="relative text-left text-[#f9f9f9]"
              style={{ font: "600 60px/150% 'PingFang SC', sans-serif" }}
            >
              Follow your heart
            </div>

            <div
              className="relative text-left text-[#f9f9f9]"
              style={{ font: "300 40px/150% 'PingFang SC', sans-serif" }}
            >
              随心所欲、不逾矩
            </div>
          </div>
        </div>

        <div id="escortplus" className="relative flex w-[1440px] shrink-0 snap-center flex-col items-start justify-start gap-2.5 self-stretch bg-[#ffffff]" onClick={goEscortplus}>
          <img
            className="absolute left-[698px] right-0 top-0 h-[810px] shrink-0"
            src="projectbig-6.png"
          />

          <div
            className="absolute left-[209px] top-[calc(50%_-_85px)] flex shrink-0 flex-col items-start justify-start gap-5 drop-shadow-xl"
            
          >
            <div
              className="relative text-left text-[#595959]"
              style={{ font: "600 60px/150% 'PingFang SC', sans-serif" }}
            >
              Sail long distances and be safe
            </div>

            <div
              className="relative text-left text-[#595959]"
              style={{ font: "300 40px/150% 'PingFang SC', sans-serif" }}
            >
              远航、安全无忧
            </div>
          </div>
        </div>

        <div id="notlack" className="relative flex w-[1440px] shrink-0 snap-center flex-col items-start justify-start gap-2.5 self-stretch bg-[#ffffff]" onClick={goNotlack}>
          <img
            className="relative flex-1 self-stretch"
            src="projectbig-7.png"
          />

          <div className=" drop-shadow-xl absolute left-[calc(50%_-_516px)] top-[245px] flex shrink-0 flex-col items-center justify-start">
            <div
              className="relative text-left text-[#202020]"
              style={{ font: "600 60px/150% 'PingFang SC', sans-serif" }}
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

        <div id="escort" className="relative flex w-[1440px] shrink-0 snap-center flex-col items-start justify-start gap-2.5 self-stretch bg-[#ffffff]" onClick={goEscort}>
          <img
            className="relative flex-1 self-stretch"
            src="projectbig-8.png"
          />

          <div
            className="absolute left-[calc(50%_-_476px)] top-[calc(50%_-_85px)] flex shrink-0 flex-col items-center justify-start gap-5 drop-shadow-xl"
            
          >
            <div
              className="relative text-left text-[#3d3d3d]"
              style={{ font: "600 60px/150% 'PingFang SC', sans-serif" }}
            >
              Safe, convenient and economical
            </div>

            <div
              className="relative text-left text-[#3d3d3d]"
              style={{ font: "300 40px/150% 'PingFang SC', sans-serif" }}
            >
              安全、便捷、经济
            </div>
          </div>
        </div>

        <div id="one" className="relative flex w-[1440px] shrink-0 snap-center flex-col items-center justify-start gap-2.5 self-stretch overflow-hidden" onClick={goOne}>
          <img
            className="relative flex-1 self-stretch"
            src="projectbig-0.png"
          />

          <div className=" drop-shadow-xl absolute left-[calc(50%_-_298px)] top-[calc(50%_-_-149px)] flex shrink-0 flex-col items-center justify-start gap-0">
            <div
              className="relative text-left text-[#202020]"
              style={{ font: "600 80px/150% 'PingFang SC', sans-serif" }}
            >
              Stable and cool
            </div>

            <div
              className="relative text-left text-[#202020]"
              style={{ font: "300 40px/150% 'PingFang SC', sans-serif" }}
            >
              稳定、酷炫
            </div>
          </div>
        </div>

        <div id="rili" className="relative flex w-[1440px] shrink-0 snap-center flex-col items-center justify-center gap-2.5 self-stretch overflow-hidden bg-[#d7d7d7]" onClick={goMiss}>
          <div className="relative flex flex-1 flex-col items-center justify-center gap-2.5 self-stretch">
            <img
              className="relative flex-1 self-stretch"
              src="projectbig-10.png"
            />

            <div
              className="absolute left-[calc(50%_-_257.5px)] top-[calc(50%_-_85px)] flex shrink-0 flex-col items-center justify-center gap-5 drop-shadow-xl"
            >
              <div
                className="relative text-left text-[#5b5b5b]"
                style={{ font: "600 60px/150% 'PingFang SC', sans-serif" }}
              >
                Let thoughts sync
              </div>

              <div
                className="relative text-left text-[#5b5b5b]"
                style={{ font: "300 40px/150% 'PingFang SC', sans-serif" }}
              >
                让思念可以同步
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className=" flex shrink-0 flex-row items-center justify-between gap-0 self-stretch w-[1440px]">
      <a href="#aerobic"><img className="relative  h-20 flex-1 hover:scale-105 z-10" src="projectsmall-1.png"/></a>

        <a href="#migic"><img className="relative h-20 flex-1 hover:scale-105 z-10" src="projectsmall-2.png" /></a>

        <a href="#two"><img className="relative h-20 flex-1 hover:scale-105 z-10" src="projectsmall-3.png" /></a>

        <a href="#saint"><img className="relative h-20 flex-1 hover:scale-105 z-10" src="projectsmall-4.png" /></a>

        <a href="#vector"><img className="relative h-20 flex-1 hover:scale-105 z-10" src="projectsmall-5.png" /></a>

        <a href="#escortplus"><img className="relative h-20 flex-1 hover:scale-105 z-10" src="projectsmall-6.png" /></a>

        <a href="#notlack"><img className="relative h-20 flex-1 hover:scale-105 z-10" src="projectsmall-7.png" /></a>

        <a href="#escort"><img className="relative h-20 flex-1 hover:scale-105 z-10" src="projectsmall-8.png" /></a>

        <a href="#one"><img className="relative h-20 flex-1 hover:scale-105 z-10" src="projectsmall-9.png" /></a>

        <a href="#rili"><img className="relative h-20 flex-1 hover:scale-105 z-10" src="projectsmall-10.png" /></a> 
      </div>
      {/* <svg
        className="absolute left-[99px] top-[500px] shrink-0 overflow-visible"
        style={{ transform: "translate(-44px, -115.41px)" }}
        width="44"
        height="112"
        viewBox="0 0 44 112"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M29.3359 112L8.58988 72.6025C3.21486 62.3951 3.21487 50.1947 8.58988 39.9873L29.3359 0.58975"
          stroke="black"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M44 112L23.2539 72.6025C17.8789 62.3951 17.8789 50.1947 23.2539 39.9873L44 0.58975"
          stroke="black"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <svg
        className="absolute left-[1342px] top-[389px] shrink-0 overflow-visible"
        style={{}}
        width="44"
        height="112"
        viewBox="0 0 44 112"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.6641 0L35.4101 39.3975C40.7851 49.6049 40.7851 61.8053 35.4101 72.0127L14.6641 111.41"
          stroke="black"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M0 0L20.7461 39.3975C26.1211 49.6049 26.1211 61.8053 20.746 72.0127L0 111.41"
          stroke="black"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg> */}
    </div>
  );
}

export default Project;
