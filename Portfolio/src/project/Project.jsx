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
    <div className="relative w-[1440px] bg-[#ffffff]">
      <div className="absolute left-0 right-0 top-0 flex h-[1024px] flex-col items-start justify-start">
       

        <div
          className="relative flex w-[1440px] shrink-0 flex-row items-center justify-start gap-0"
          style={{ overflowX: "auto" }}
        >
          <img
            className="relative h-40 w-[285.36px] shrink-0"
            src="projectsmall-1.png"
          />

          <img
            className="relative h-40 w-[285.36px] shrink-0"
            src="projectsmall-2.png"
          />

          <img
            className="relative h-40 w-[285.36px] shrink-0"
            src="projectsmall-3.png"
          />

          <img
            className="relative h-40 w-[284.9px] shrink-0"
            src="projectsmall-4.png"
          />

          <img
            className="relative h-40 w-[285.36px] shrink-0"
            src="projectsmall-5.png"
          />

          <img
            className="relative h-40 w-[285px] shrink-0"
            src="projectsmall-6.png"
          />

          <img
            className="relative h-40 w-[284.9px] shrink-0"
            src="projectsmall-7.png"
          />

          <img
            className="relative h-40 w-[285.36px] shrink-0"
            src="projectsmall-8.png"
          />

          <img
            className="relative h-40 w-[285.36px] shrink-0"
            src="projectsmall-9.png"
          />

          <img
            className="relative h-40 w-[284.5px] shrink-0"
            src="projectsmall-10.png"
          />
        </div>

        <div
          className="relative flex h-[800px] w-[1440px] shrink-0 flex-row items-start justify-start gap-0"
          style={{ overflowX: "auto" }}
        >
          <div
            className="relative flex w-[1440px] shrink-0 flex-row items-start justify-start gap-2.5 self-stretch"
            onClick={goAerobic}
          >
            <img
              className="relative flex-1 self-stretch"
              src="projectbig-1.png"
            />

            <div
              className="absolute left-[calc(50%_-_143px)] top-[calc(50%_-_96px)] flex shrink-0 flex-col items-center justify-center"
              style={{ boxShadow: "4px 4px 20px 0px rgba(0, 0, 0, 0.25)" }}
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

          <div
            className="relative flex w-[1440px] shrink-0 flex-col items-start justify-start gap-2.5 self-stretch"
            onClick={goMigiccomb}
          >
            <img
              className="relative flex-1 self-stretch"
              src="projectbig-2.png"
            />

            <div
              className="absolute left-[calc(50%_-_207px)] top-[calc(50%_-_84.4px)] flex shrink-0 flex-col items-center justify-center gap-5"
              style={{ boxShadow: "6px 8px 8px 0px rgba(0, 0, 0, 0.50)" }}
            >
              <div
                className="relative text-left text-[#ffffff]"
                style={{ font: "600 60px/150% 'PingFang SC', sans-serif" }}
              >
                Monster comb
              </div>

              <div
                className="relative text-left text-[#ffffff]"
                style={{ font: "300 40px/150% 'PingFang SC', sans-serif" }}
              >
                怪物梳
              </div>
            </div>
          </div>

          <div
            className="relative flex w-[1440px] shrink-0 flex-col items-center justify-start gap-2.5 self-stretch"
            onClick={goTwoface}
          >
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

          <div
            className="relative flex w-[1440px] shrink-0 flex-col items-start justify-start gap-2.5 self-stretch bg-[#f3f3f3]"
            onClick={goSaint}
          >
            <img
              className="relative flex-1 self-stretch"
              src="projectbig-4.png"
            />

            <div
              className="absolute left-[calc(50%_-_169px)] top-[165px] flex shrink-0 flex-col items-center justify-start gap-5"
              style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
            >
              <div
                className="relative text-left text-[#ececec]"
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
            className="relative flex w-[1440px] shrink-0 flex-col items-center justify-start gap-2.5 self-stretch"
            onClick={goVector}
          >
            <img
              className="relative flex-1 self-stretch"
              src="projectbig-5.png"
            />

            <div className="absolute left-[calc(50%_-_248.5px)] top-[calc(50%_-_85px)] flex shrink-0 flex-col items-center justify-start gap-5">
              <div
                className="relative text-left text-[#d7d7d7]"
                style={{ font: "600 60px/150% 'PingFang SC', sans-serif" }}
              >
                Follow your heart
              </div>

              <div
                className="relative text-left text-[#d7d7d7]"
                style={{ font: "300 40px/150% 'PingFang SC', sans-serif" }}
              >
                随心所欲、不逾矩
              </div>
            </div>
          </div>

          <div
            className="relative flex w-[1440px] shrink-0 flex-col items-start justify-start gap-2.5 self-stretch bg-[#ffffff]"
            onClick={goEscortplus}
          >
            <img
              className="absolute left-[698px] right-0 top-0 h-[810px] shrink-0"
              src="projectbig-6.png"
            />

            <div
              className="absolute left-[209px] top-[calc(50%_-_85px)] flex shrink-0 flex-col items-start justify-start gap-5"
              style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
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

          <div
            className="relative flex w-[1440px] shrink-0 flex-col items-start justify-start gap-2.5 self-stretch bg-[#ffffff]"
            onClick={goNotlack}
          >
            <img
              className="relative flex-1 self-stretch"
              src="projectbig-7.png"
            />

            <div className="absolute left-[calc(50%_-_516px)] top-[245px] flex shrink-0 flex-col items-center justify-start">
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
            className="relative flex w-[1440px] shrink-0 flex-col items-start justify-start gap-2.5 self-stretch bg-[#ffffff]"
            onClick={goEscort}
          >
            <img
              className="relative flex-1 self-stretch"
              src="projectbig-8.png"
            />

            <div
              className="absolute left-[calc(50%_-_476px)] top-[calc(50%_-_85px)] flex shrink-0 flex-col items-center justify-start gap-5"
              style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
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

          <div
            className="relative flex w-[1440px] shrink-0 flex-col items-center justify-start gap-2.5 self-stretch overflow-hidden"
            onClick={goOne}
          >
            <img
              className="relative flex-1 self-stretch"
              src="projectbig-0.png"
            />

            <div className="absolute left-[calc(50%_-_298px)] top-[calc(50%_-_-149px)] flex shrink-0 flex-col items-center justify-start gap-0">
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
            className="relative flex w-[1440px] shrink-0 flex-col items-center justify-center gap-2.5 self-stretch overflow-hidden bg-[#d7d7d7]"
            onClick={goMiss}
          >
            <div className="relative flex flex-1 flex-col items-center justify-center gap-2.5 self-stretch">
              <img
                className="relative flex-1 self-stretch"
                src="projectbig-10.png"
              />

              <div
                className="absolute left-[calc(50%_-_257.5px)] top-[calc(50%_-_85px)] flex shrink-0 flex-col items-center justify-center gap-5"
                style={{ boxShadow: "4px 4px 20px 0px rgba(0, 0, 0, 0.25)" }}
              >
                <div
                  className="relative text-left text-[#a0a0a0]"
                  style={{ font: "600 60px/150% 'PingFang SC', sans-serif" }}
                >
                  Let thoughts sync
                </div>

                <div
                  className="relative text-left text-[#a0a0a0]"
                  style={{ font: "300 40px/150% 'PingFang SC', sans-serif" }}
                >
                  让思念可以同步
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
