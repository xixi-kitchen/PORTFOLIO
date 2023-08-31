import React from "react";
import { useNavigate } from "react-router-dom";
// import Anchor from "react-anchor-without-hash";

import { motion } from "framer-motion";

function Project() {
  const goNavigate = useNavigate(); //在Home组件里初始化一个uN对

  const goVector = () => {
    goNavigate("/vector");
  };
  const goOne = () => {
    goNavigate("/one");
  };
  const goSaint = () => {
    goNavigate("/saint");
  };
  const goMiss = () => {
    goNavigate("/miss");
  };
  const goMigiccomb = () => {
    goNavigate("/migiccomb");
  };
  const goTwoface = () => {
    goNavigate("/twoface");
  };
  const goEscort = () => {
    goNavigate("/escort");
  };
  const goEscortplus = () => {
    goNavigate("/escortplus");
  };
  const goAerobic = () => {
    goNavigate("/aerobic");
  };
  const goNotlack = () => {
    goNavigate("/notlack");
  };

  function goNavAerobic() {
    // document.getElementById('colors').scrollTop = 0;
    let getEle = document.getElementById("aerobic");
    getEle.scrollIntoView({
      behavior: "smooth", //顺滑的滚动
      block: "start",
      // inline:"nearest"
    });
  }
  function goNavMigic() {
    // document.getElementById('colors').scrollTop = 0;
    let getEle = document.getElementById("migic");
    getEle.scrollIntoView({
      behavior: "smooth", //顺滑的滚动
      block: "start",
      // inline:"nearest"
    });
  }
  function goNavTwo() {
    // document.getElementById('colors').scrollTop = 0;
    let getEle = document.getElementById("two");
    getEle.scrollIntoView({
      behavior: "smooth", //顺滑的滚动
      block: "start",
      // inline:"nearest"
    });
  }
  function goNavSaint() {
    // document.getElementById('colors').scrollTop = 0;
    let getEle = document.getElementById("saint");
    getEle.scrollIntoView({
      behavior: "smooth", //顺滑的滚动
      block: "start",
      // inline:"nearest"
    });
  }
  function goNavVector() {
    // document.getElementById('colors').scrollTop = 0;
    let getEle = document.getElementById("vector");
    getEle.scrollIntoView({
      behavior: "smooth", //顺滑的滚动
      block: "start",
      // inline:"nearest"
    });
  }
  function goNavEscortplus() {
    // document.getElementById('colors').scrollTop = 0;
    let getEle = document.getElementById("escortplus");
    getEle.scrollIntoView({
      behavior: "smooth", //顺滑的滚动
      block: "start",
      // inline:"nearest"
    });
  }
  function goNavNotlack() {
    // document.getElementById('colors').scrollTop = 0;
    let getEle = document.getElementById("notlack");
    getEle.scrollIntoView({
      behavior: "smooth", //顺滑的滚动
      block: "start",
      // inline:"nearest"
    });
  }
  function goNavEscort() {
    // document.getElementById('colors').scrollTop = 0;
    let getEle = document.getElementById("escort");
    getEle.scrollIntoView({
      behavior: "smooth", //顺滑的滚动
      block: "center",
      // inline:"nearest"
    });
  }
  function goNavOne() {
    // document.getElementById('colors').scrollTop = 0;
    let getEle = document.getElementById("one");
    getEle.scrollIntoView({
      behavior: "smooth", //顺滑的滚动
      block: "start",
      // inline:"nearest"
    });
  }
  function goNavRili() {
    // document.getElementById('colors').scrollTop = 0;
    let getEle = document.getElementById("rili");
    getEle.scrollIntoView({
      behavior: "smooth", //顺滑的滚动
      block: "start",
      // inline:"nearest"
    });
  }

  // const goaerobic = () => {
  //   var aerobic = document.getElementById("aerobic");
  //   aerobic.scrollIntoView();
  // };

  // var aerobic = document.getElementById("aerobic");
  // aerobic.scrollIntoView();

  return (
    <div className="relative flex flex-col justify-center">
      <div className="relative flex w-screen h-screen flex-1 snap-y snap-mandatory flex-col items-start justify-start gap-0 self-stretch scroll-smooth overflow-y-auto">
        <div
          id="aerobic"
          className="relative flex w-full shrink-0 snap-center flex-row items-start justify-start gap-2.5 self-stretch"
          onClick={goAerobic}
        >
          <img
            className="relative flex-1 self-stretch"
            src="projectbig-1.png"
          />

          <div className="absolute left-[calc(50%_-_143px)] top-[calc(50%_-_96px)] flex shrink-0 flex-col items-center justify-center drop-shadow-2xl cursor-pointer">
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

        <div
          id="migic"
          className="relative flex w-full shrink-0 snap-center flex-col items-start justify-start gap-2.5 self-stretch"
          onClick={goMigiccomb}
        >
          <img
            className="relative flex-1 self-stretch"
            src="projectbig-2.png"
          />

          <div className="absolute left-[calc(50%_-_207px)] top-[calc(50%_-_84.4px)] flex shrink-0 flex-col items-center justify-center gap-5 drop-shadow-2xl cursor-pointer">
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

        <div
          id="two"
          className="relative flex w-full shrink-0 snap-center flex-col items-center justify-start gap-2.5 self-stretch"
          onClick={goTwoface}
        >
          <img
            className="relative flex-1 self-stretch"
            src="projectbig-3.png"
          />

          <div className="absolute left-[calc(50%_-_358px)] top-[calc(50%_-_82px)] flex shrink-0 flex-col items-center justify-start cursor-pointer">
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

        <div
          id="saint"
          className="relative flex w-full shrink-0 snap-center flex-col items-start justify-start gap-2.5 self-stretch"
          onClick={goSaint}
        >
          <img
            className="relative flex-1 self-stretch"
            src="projectbig-4.png"
          />

          <div className="absolute left-[calc(50%_-_169px)] top-[165px] flex shrink-0 flex-col items-center justify-start gap-5 drop-shadow-xl cursor-pointer">
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

        <div
          id="vector"
          className="relative flex w-full shrink-0 snap-center flex-col items-center justify-start gap-2.5 self-stretch"
          onClick={goVector}
        >
          <img
            className="relative flex-1 self-stretch"
            src="projectbig-5.png"
          />

          <div className="absolute left-[calc(50%_-_248.5px)] top-[calc(50%_-_85px)] flex shrink-0 flex-col items-center justify-start gap-5 cursor-pointer">
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

        <div
          id="escortplus"
          className="relative flex w-full shrink-0 snap-center flex-col items-start justify-start gap-2.5 self-stretch "
          onClick={goEscortplus}
        >
          <img
            className="relative flex-1 self-stretch"
            src="projectbig-6.png"
          />

          <div className="absolute left-[209px] top-[calc(50%_-_85px)] flex shrink-0 flex-col items-start justify-start gap-5 drop-shadow-xl cursor-pointer">
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

        <div
          id="notlack"
          className="relative flex w-full shrink-0 snap-center flex-col items-start justify-start gap-2.5 self-stretch bg-[#ffffff]"
          onClick={goNotlack}
        >
          <img
            className="relative flex-1 self-stretch"
            src="projectbig-7.png"
          />

          <div className=" absolute left-[calc(50%_-_516px)] top-[245px] flex shrink-0 flex-col items-center justify-start drop-shadow-xl cursor-pointer">
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

        <div
          id="escort"
          className="relative flex w-full shrink-0 snap-center flex-col items-start justify-start gap-2.5 self-stretch bg-[#ffffff]"
          onClick={goEscort}
        >
          <img
            className="relative flex-1 self-stretch"
            src="projectbig-8.png"
          />

          <div className="absolute left-[calc(50%_-_476px)] top-[calc(50%_-_85px)] flex shrink-0 flex-col items-center justify-start gap-5 drop-shadow-xl cursor-pointer">
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

        <div
          id="one"
          className="relative flex w-full shrink-0 snap-center flex-col items-center justify-start gap-2.5 self-stretch overflow-hidden"
          onClick={goOne}
        >
          <img
            className="relative flex-1 self-stretch"
            src="projectbig-0.png"
          />

          <div className=" absolute left-[calc(50%_-_298px)] top-[calc(50%_-_-149px)] flex shrink-0 flex-col items-center justify-start gap-0 drop-shadow-xl cursor-pointer">
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

        <div
          id="rili"
          className="relative flex w-full shrink-0 snap-center flex-col items-center justify-center gap-2.5 self-stretch overflow-hidden bg-[#d7d7d7]"
          onClick={goMiss}
        >
          <div className="relative flex flex-1 flex-col items-center justify-center gap-2.5 self-stretch">
            <img
              className="relative flex-1 self-stretch"
              src="projectbig-10.png"
            />

            <div className="absolute left-[calc(50%_-_257.5px)] top-[calc(50%_-_85px)] flex shrink-0 flex-col items-center justify-center gap-5 drop-shadow-xl cursor-pointer">
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
      <div
        // className="fixed flex w-[130px] flex-col items-center justify-center gap-1 rounded-xl bg-[#ffffff] p-1.5 z-10"
        className="fixed left-5 top-[calc(50%_-_360px)] flex w-[130px] flex-col items-center justify-center gap-1 rounded-xl border border-solid border-[#f9f9f9] bg-[#ffffff] p-1.5 shadow-xl"
        style={{ backdropFilter: "blur(2px)" }}
      >
        <div
          className="relative text-left text-[#6b6b6b]"
          style={{ font: "600 20px/150% 'PingFang SC', sans-serif" }}
        >
          Navigation
        </div>
        <img
          onClick={goNavAerobic}
          className=" relative flex-1 cursor-pointer self-stretch rounded-[10px] border border-solid border-[#ebebeb] hover:scale-105 hover:border-[#6b6b6b] hover:brightness-110"
          src="projectsmall-1.png"
        />
        <img
          onClick={goNavMigic}
          className="relative flex-1 cursor-pointer self-stretch rounded-[10px] border border-solid border-[#ebebeb] hover:scale-105 hover:border-[#6b6b6b] hover:brightness-110"
          src="projectsmall-2.png"
        />
        <img
          onClick={goNavTwo}
          className="relative flex-1 cursor-pointer self-stretch rounded-[10px] border border-solid border-[#ebebeb] hover:scale-105 hover:border-[#6b6b6b] hover:brightness-110"
          src="projectsmall-3.png"
        />
        <img
          onClick={goNavSaint}
          className="relative flex-1 cursor-pointer self-stretch rounded-[10px] border border-solid border-[#ebebeb] hover:scale-105 hover:border-[#6b6b6b] hover:brightness-110"
          src="projectsmall-4.png"
        />
        <img
          onClick={goNavVector}
          className="relative flex-1 cursor-pointer self-stretch rounded-[10px] border border-solid border-[#ebebeb] hover:scale-105 hover:border-[#6b6b6b] hover:brightness-110 "
          src="projectsmall-5.png"
        />
        <img
          onClick={goNavEscortplus}
          className="relative flex-1 cursor-pointer self-stretch rounded-[10px] border border-solid border-[#ebebeb] hover:scale-105 hover:border-[#6b6b6b] hover:brightness-110"
          src="projectsmall-6.png"
        />
        <img
          onClick={goNavNotlack}
          className="relative flex-1 cursor-pointer self-stretch rounded-[10px] border border-solid border-[#ebebeb] hover:scale-105 hover:border-[#6b6b6b] hover:brightness-110"
          src="projectsmall-7.png"
        />
        <img
          onClick={goNavEscort}
          className="relative flex-1 cursor-pointer self-stretch rounded-[10px] border border-solid border-[#ebebeb] hover:scale-105 hover:border-[#6b6b6b] hover:brightness-110"
          src="projectsmall-8.png"
        />
        <img
          onClick={goNavOne}
          className="relative flex-1 cursor-pointer self-stretch rounded-[10px] border border-solid border-[#ebebeb] hover:scale-105 hover:border-[#6b6b6b] hover:brightness-110"
          src="projectsmall-9.png"
        />
        <img
          onClick={goNavRili}
          className="relative flex-1 cursor-pointer self-stretch rounded-[10px] border border-solid border-[#ebebeb] hover:scale-105 hover:border-[#6b6b6b] hover:brightness-110"
          src="projectsmall-10.png"
        />
      </div>

      <div className=" fixed left-[calc(50%_-_100px)] top-[calc(90%)] flex flex-row items-center justify-center gap-[16px]">
        <motion.svg
          animate={{ y: [-5, 5] }}
          // transition={{ ease: "easeOut", duration: 2 }}
          transition={{
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1,
            // type: 'spring'
          }}
          className="relative flex shrink-0 flex-row items-center justify-center gap-2.5 overflow-visible"
          style={{}}
          width="20"
          height="35"
          viewBox="0 0 20 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="20"
            height="35"
            rx="10"
            stroke="#9D9D9D"
            strokeWidth="4"
          />
          <path
            d="M10 12V18"
            stroke="#8158FC"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </motion.svg>

        <div
          className="relative text-left text-[#6b6b6b]"
          style={{ font: "600 16px 'PingFang SC', sans-serif" }}
        >
          滚动鼠标查看其他项目    
          <div>
            <span className="text-[#8158FC]">点击进入</span>
            对应项目</div>
          
        </div>
      </div>
    </div>
  );
}

export default Project;
