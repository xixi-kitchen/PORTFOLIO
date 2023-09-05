import React from "react";
import { useNavigate } from "react-router-dom";

export default function Homepage_mononer() {
  const goNavigate = useNavigate(); //在Home组件里初始化一个uN对象

  //单体内容
  const goCacup = () => {
    goNavigate("/cacup");
    window.scrollTo(0, 0);
  };

  const goEndtables = () => {
    goNavigate("/endtables");
    window.scrollTo(0, 0);
  };
  // const goBowlmats = () => {
  //   goNavigate("/Bowlmats");
  // };

  const goCabinets = () => {
    goNavigate("/cabinets");
    window.scrollTo(0, 0);
  };
  // const goCountbuckets = () => {
  //   goNavigate("/Countbuckets");
  // };

  // const goJiaolong = () => {
  //   goNavigate("/Jiaolong");
  // };
  // const goMagnetic = () => {
  //   goNavigate("/Magnetic");
  // };
  // const goPropeller = () => {
  //   goNavigate("/Propeller");
  // };
  const goReticule = () => {
    goNavigate("/reticule");
    window.scrollTo(0, 0);
  };
  // const goReversecar = () => {
  //   goNavigate("/Reversecar");
  // };
  const goRollin = () => {
    goNavigate("/rollin");
    window.scrollTo(0, 0);
  };
  // const goSunwardred = () => {
  //   goNavigate("/Sunwardred");
  // };
  const goWillinsert = () => {
    goNavigate("/willinsert");
    window.scrollTo(0, 0);
  };

  return (
    <div className="relative flex shrink-0 flex-col items-center justify-start gap-[61px]">
      <div className="relative flex shrink-0 flex-row items-start justify-center gap-5">
        <div
          className="relative text-left text-[#000000]"
          style={{
            font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)",
          }}
        >
          Monomer
        </div>

        <div
          className="relative text-left text-[#202020]"
          style={{
            font: "var(--cn, 300 40px/150% 'PingFang SC', sans-serif)",
          }}
        >
          |
        </div>

        <div
          className="relative text-left text-[#202020]"
          style={{
            font: "var(--cn, 300 40px/150% 'PingFang SC', sans-serif)",
          }}
        >
          单体
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
              Individual works are usually products derived from the{" "}
            </span>
            <span className="text-[#8158FC]">determined needs</span>
            <span className=""> of others and the </span>
            <span className="text-[#8158FC]">temporary creativity</span>
            <span className="">
              {" "}
              of individuals, and there is no complete design log or detailed
              production record, so they are displayed in a single form. Most
              creative categories.
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
            <span className="">单体类作品通常是由于别人的</span>
            <span className="text-[#8158FC]">确定需求</span>
            <span className="">和个人的</span>
            <span className="text-[#8158FC]">临时创意</span>
            <span className="">
              所衍生出来的产品，并没有较为完善的设计日志，也没有详实的制作记录，所以都是以单个的形式进行展现。创意类居多。
            </span>
          </span>
        </div>
      </div>

      <div className="relative flex shrink-0 flex-col items-start justify-start gap-3.5">
        <div className="relative flex shrink-0 flex-col items-start justify-center gap-0">
          <div
            className="relative self-stretch text-left text-[#8158fc]"
            style={{
              font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
            }}
          >
            Click the card below to jump to the corresponding page
          </div>

          <div
            className="relative self-stretch text-left text-[#8158fc]"
            style={{
              font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
            }}
          >
            点击下方卡片即可跳转至对应页面
          </div>
        </div>

        <div className="relative flex shrink-0 flex-col items-start justify-start gap-[72px]">
          <div className="relative flex h-[360px] w-[1022px] shrink-0 flex-row items-start justify-start gap-5">
            <div
              className="relative flex flex-1 cursor-pointer flex-col items-center justify-start self-stretch overflow-hidden rounded-xl"
              style={{ boxShadow: "4px 4px 10px 0px rgba(0, 0, 0, 0.25)" }}
              onClick={goCacup}
            >
              <div
                className="relative z-10 self-stretch text-left text-[#202020]"
                style={{
                  font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)",
                }}
              >
                茶色杯 | CAcup
              </div>

              <div
                className="relative flex flex-1 flex-col items-center justify-start self-stretch"
                style={{ margin: "-79px 0 0 0" }}
              >
                <img
                  className="relative flex-1 self-stretch"
                  src="homepage-11.png"
                />

                <div
                  className="relative flex h-9 shrink-0 flex-row flex-wrap items-start justify-between self-stretch"
                  style={{ margin: "-68px 0 0 0" }}
                >
                  <div className="relative flex shrink-0 flex-col items-start justify-start pb-0.5 pl-2 pr-2 pt-0.5">
                    <div
                      className="relative text-left text-[#202020]"
                      style={{
                        font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                      }}
                    >
                      Production time: 2022.03.22
                    </div>

                    <div
                      className="relative text-left text-[#202020]"
                      style={{
                        margin: "-4px 0 0 0",
                        font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                      }}
                    >
                      制作时间：2022.03.22
                    </div>
                  </div>

                  <div className="relative flex shrink-0 flex-col items-start justify-start pb-0.5 pl-2 pr-2 pt-0.5">
                    <div
                      className="relative text-left text-[#202020]"
                      style={{
                        font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                      }}
                    >
                      Degree of completion: 100%
                    </div>

                    <div
                      className="relative text-left text-[#202020]"
                      style={{
                        margin: "-4px 0 0 0",
                        font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                      }}
                    >
                      完成度：100%
                    </div>
                  </div>

                  <div className="relative flex shrink-0 flex-col items-start justify-start pb-0.5 pl-2 pr-2 pt-0.5">
                    <div
                      className="relative text-left text-[#202020]"
                      style={{
                        font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                      }}
                    >
                      Type: Requirement
                    </div>

                    <div
                      className="relative text-left text-[#202020]"
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
            </div>

            <div
              className="relative flex flex-1 cursor-pointer flex-col items-center justify-start self-stretch overflow-hidden rounded-xl"
              style={{ boxShadow: "4px 4px 10px 0px rgba(0, 0, 0, 0.25)" }}
              onClick={goEndtables}
            >
              <div
                className="relative z-10 self-stretch text-left text-[#202020]"
                style={{
                  font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)",
                }}
              >
                End tables
              </div>

              <div
                className="relative flex flex-1 flex-col items-center justify-start self-stretch"
                style={{ margin: "-79px 0 0 0" }}
              >
                <img
                  className="relative flex-1 self-stretch"
                  src="homepage-12.png"
                />

                <div
                  className="relative flex h-8 shrink-0 flex-row flex-wrap items-start justify-between self-stretch"
                  style={{ margin: "-68px 0 0 0" }}
                >
                  <div className="relative flex shrink-0 flex-col items-start justify-start pb-0.5 pl-2 pr-2 pt-0.5">
                    <div
                      className="relative text-left text-[#202020]"
                      style={{
                        font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                      }}
                    >
                      Production time: 2020.03
                    </div>

                    <div
                      className="relative text-left text-[#202020]"
                      style={{
                        margin: "-4px 0 0 0",
                        font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                      }}
                    >
                      制作时间：2020.03
                    </div>
                  </div>

                  <div className="relative flex shrink-0 flex-col items-start justify-start pb-0.5 pl-2 pr-2 pt-0.5">
                    <div
                      className="relative text-left text-[#202020]"
                      style={{
                        font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                      }}
                    >
                      Degree of completion: 100%
                    </div>

                    <div
                      className="relative text-left text-[#202020]"
                      style={{
                        margin: "-4px 0 0 0",
                        font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                      }}
                    >
                      完成度：100%
                    </div>
                  </div>

                  <div className="relative flex shrink-0 flex-col items-start justify-start pb-0.5 pl-2 pr-2 pt-0.5">
                    <div
                      className="relative text-left text-[#202020]"
                      style={{
                        font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                      }}
                    >
                      Type: Requirement
                    </div>

                    <div
                      className="relative text-left text-[#202020]"
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
            </div>
          </div>

          <div className="relative flex h-[360px] w-[1022px] shrink-0 flex-row items-start justify-start gap-5">
            <div
              className="relative flex flex-1 cursor-pointer flex-col items-center justify-start self-stretch overflow-hidden rounded-xl"
              style={{ boxShadow: "4px 4px 10px 0px rgba(0, 0, 0, 0.25)" }}
              onClick={goCabinets}
            >
              <div
                className="relative z-10 self-stretch text-left text-[#202020]"
                style={{
                  font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Cabinets
              </div>

              <div
                className="relative flex flex-1 flex-col items-center justify-start self-stretch"
                style={{ margin: "-79px 0 0 0" }}
              >
                <img
                  className="relative flex-1 self-stretch"
                  src="homepage-13.png"
                />

                <div
                  className="relative flex shrink-0 flex-row flex-wrap items-start justify-between self-stretch pb-0.5 pl-2 pr-2 pt-0.5"
                  style={{ margin: "-68px 0 0 0" }}
                >
                  <div className="relative flex shrink-0 flex-col items-start justify-start">
                    <div
                      className="relative text-left text-[#202020]"
                      style={{
                        font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                      }}
                    >
                      Production time: 2020.03
                    </div>

                    <div
                      className="relative text-left text-[#202020]"
                      style={{
                        margin: "-4px 0 0 0",
                        font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                      }}
                    >
                      制作时间：2020.03
                    </div>
                  </div>

                  <div className="relative flex shrink-0 flex-col items-start justify-start">
                    <div
                      className="relative text-left text-[#202020]"
                      style={{
                        font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                      }}
                    >
                      Degree of completion: 100%
                    </div>

                    <div
                      className="relative text-left text-[#202020]"
                      style={{
                        margin: "-4px 0 0 0",
                        font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                      }}
                    >
                      完成度：100%
                    </div>
                  </div>

                  <div className="relative flex shrink-0 flex-col items-start justify-start">
                    <div
                      className="relative text-left text-[#202020]"
                      style={{
                        font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                      }}
                    >
                      Type: Requirement
                    </div>

                    <div
                      className="relative text-left text-[#202020]"
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
            </div>

            <div
              className="relative flex flex-1 cursor-pointer flex-col items-center justify-start self-stretch overflow-hidden rounded-xl"
              style={{ boxShadow: "4px 4px 10px 0px rgba(0, 0, 0, 0.25)" }}
              onClick={goWillinsert}
            >
              <div
                className="relative z-10 self-stretch text-left text-[#202020]"
                style={{
                  font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Will insert a pen holder
              </div>

              <div
                className="relative flex flex-1 flex-col items-center justify-start self-stretch"
                style={{ margin: "-79px 0 0 0" }}
              >
                <img
                  className="relative flex-1 self-stretch"
                  src="homepage-14.png"
                />

                <div
                  className="relative flex h-8 shrink-0 flex-row flex-wrap items-start justify-between self-stretch pb-0.5 pl-2 pr-2 pt-0.5"
                  style={{ margin: "-68px 0 0 0" }}
                >
                  <div className="relative flex shrink-0 flex-col items-start justify-start">
                    <div
                      className="relative text-left text-[#202020]"
                      style={{
                        font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                      }}
                    >
                      Production time: 2019.09
                    </div>

                    <div
                      className="relative text-left text-[#202020]"
                      style={{
                        margin: "-4px 0 0 0",
                        font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                      }}
                    >
                      制作时间：2019.09
                    </div>
                  </div>

                  <div className="relative flex shrink-0 flex-col items-start justify-start">
                    <div
                      className="relative text-left text-[#202020]"
                      style={{
                        font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                      }}
                    >
                      Degree of completion: 100%
                    </div>

                    <div
                      className="relative text-left text-[#202020]"
                      style={{
                        margin: "-4px 0 0 0",
                        font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                      }}
                    >
                      完成度：100%
                    </div>
                  </div>

                  <div className="relative flex shrink-0 flex-col items-start justify-start">
                    <div
                      className="relative text-left text-[#202020]"
                      style={{
                        font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                      }}
                    >
                      Type: originality
                    </div>

                    <div
                      className="relative text-left text-[#202020]"
                      style={{
                        margin: "-4px 0 0 0",
                        font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                      }}
                    >
                      类型：创意
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex h-[360px] w-[1022px] shrink-0 flex-row items-end justify-start gap-5">
            <div
              className="relative flex flex-1 cursor-pointer flex-col items-center justify-start self-stretch overflow-hidden rounded-xl"
              style={{ boxShadow: "4px 4px 10px 0px rgba(0, 0, 0, 0.25)" }}
              onClick={goRollin}
            >
              <div
                className="relative z-10 self-stretch text-left text-[#202020]"
                style={{
                  font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Roll in the pen holder
              </div>

              <div
                className="relative flex flex-1 flex-col items-center justify-start self-stretch"
                style={{ margin: "-79px 0 0 0" }}
              >
                <img
                  className="relative flex-1 self-stretch"
                  src="homepage-15.png"
                />

                <div
                  className="relative flex shrink-0 flex-row flex-wrap items-start justify-between self-stretch pb-0.5 pl-2 pr-2 pt-0.5"
                  style={{ margin: "-68px 0 0 0" }}
                >
                  <div className="relative flex shrink-0 flex-col items-start justify-start">
                    <div
                      className="relative text-left text-[#202020]"
                      style={{
                        font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                      }}
                    >
                      Production time: 2019.09
                    </div>

                    <div
                      className="relative text-left text-[#202020]"
                      style={{
                        margin: "-4px 0 0 0",
                        font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                      }}
                    >
                      制作时间：2019.09
                    </div>
                  </div>

                  <div className="relative flex shrink-0 flex-col items-start justify-start">
                    <div
                      className="relative text-left text-[#202020]"
                      style={{
                        font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                      }}
                    >
                      Degree of completion: 100%
                    </div>

                    <div
                      className="relative text-left text-[#202020]"
                      style={{
                        margin: "-4px 0 0 0",
                        font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                      }}
                    >
                      完成度：100%
                    </div>
                  </div>

                  <div className="relative flex shrink-0 flex-col items-start justify-start">
                    <div
                      className="relative text-left text-[#202020]"
                      style={{
                        font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                      }}
                    >
                      Type: originality
                    </div>

                    <div
                      className="relative text-left text-[#202020]"
                      style={{
                        margin: "-4px 0 0 0",
                        font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                      }}
                    >
                      类型：创意
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="relative flex flex-1 cursor-pointer flex-col items-center justify-start self-stretch overflow-hidden rounded-xl"
              style={{ boxShadow: "4px 4px 10px 0px rgba(0, 0, 0, 0.25)" }}
              onClick={goReticule}
            >
              <div
                className="relative z-10 self-stretch text-left text-[#202020]"
                style={{
                  font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Reticule
              </div>

              <div
                className="relative flex flex-1 flex-col items-center justify-start self-stretch"
                style={{ margin: "-79px 0 0 0" }}
              >
                <img
                  className="relative flex-1 self-stretch"
                  src="homepage-16.png"
                />

                <div
                  className="relative flex shrink-0 flex-row flex-wrap items-start justify-between self-stretch pb-0.5 pl-2 pr-2 pt-0.5"
                  style={{ margin: "-68px 0 0 0" }}
                >
                  <div className="relative flex shrink-0 flex-col items-start justify-start">
                    <div
                      className="relative text-left text-[#202020]"
                      style={{
                        font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                      }}
                    >
                      Production time: 2019.09
                    </div>

                    <div
                      className="relative text-left text-[#202020]"
                      style={{
                        margin: "-4px 0 0 0",
                        font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                      }}
                    >
                      制作时间：2019.09
                    </div>
                  </div>

                  <div className="relative flex shrink-0 flex-col items-start justify-start">
                    <div
                      className="relative text-left text-[#202020]"
                      style={{
                        font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                      }}
                    >
                      Degree of completion: 100%
                    </div>

                    <div
                      className="relative text-left text-[#202020]"
                      style={{
                        margin: "-4px 0 0 0",
                        font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                      }}
                    >
                      完成度：100%
                    </div>
                  </div>

                  <div className="relative flex shrink-0 flex-col items-start justify-start">
                    <div
                      className="relative text-left text-[#202020]"
                      style={{
                        font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                      }}
                    >
                      Type: originality
                    </div>

                    <div
                      className="relative text-left text-[#202020]"
                      style={{
                        margin: "-4px 0 0 0",
                        font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                      }}
                    >
                      类型：创意
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
