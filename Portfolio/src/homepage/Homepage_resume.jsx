import React from "react";
import { useNavigate } from "react-router-dom";

function Homepage_resume() {
  const goNavigate = useNavigate(); //在Home组件里初始化一个uN对象

  const goaboutus = () => {
    goNavigate("/aboutus");
    window.scrollTo(0, 0);
  };

  return (
    <div className="relative flex w-[1022px] shrink-0  flex-row items-center justify-between gap-10">
      <div className="relative flex shrink-0 flex-col items-start justify-start gap-8">
        <div className="relative flex shrink-0 flex-row items-center justify-start gap-5">
          <div
            className="relative text-left text-[#000000]"
            style={{
              font: "var(--en, 600 64px/150% 'PingFang SC', sans-serif)",
            }}
          >
            Hugh Aix
          </div>

          <div
            className="relative text-left text-[#000000]"
            style={{
              font: "var(--en, 600 64px/150% 'PingFang SC', sans-serif)",
            }}
          >
            |
          </div>

          <div
            className="relative text-left text-[#000000]"
            style={{
              font: "var(--en, 600 64px/150% 'PingFang SC', sans-serif)",
            }}
          >
            徐禧
          </div>
        </div>

        <div className="relative flex shrink-0 flex-col items-start justify-start gap-[7px]">
          <div className="relative flex shrink-0 flex-col items-start justify-start gap-0">
            <div
              className="relative text-left text-[#000000]"
              style={{
                font: "var(--en, 100 20px/150% 'PingFang SC', sans-serif)",
              }}
            >
              Designer
            </div>

            <div
              className="relative text-left text-[#000000]"
              style={{
                font: "var(--en, 100 20px/150% 'PingFang SC', sans-serif)",
              }}
            >
              设计师
            </div>
          </div>

          <div className="relative flex w-[336px] shrink-0 flex-col items-start justify-start gap-2.5">
            <div
              className="relative self-stretch text-left"
              style={{
                font: "var(--en, 600 16px/150% 'PingFang SC', sans-serif)",
              }}
            >
              <span>
                <span className="">
                  Although I came from an industrial background, I don&#039;t
                  want to be defined by industrial design alone, I prefer to
                  call myself a{" "}
                </span>
                <span className=" text-[#8158FC]">[designer]</span>
              </span>
            </div>

            <div
              className="relative self-stretch text-left"
              style={{
                font: "var(--cn, 300 16px/150% 'PingFang SC', sans-serif)",
              }}
            >
              <span>
                <span className="">
                  虽然出身是工业设计师，但我并不想仅仅被工业设计所定义，我更愿意称自己为一名
                </span>
                <span className="text-[#8158FC]">[设计师]</span>
              </span>
            </div>
          </div>
        </div>

        <div className="relative flex shrink-0 flex-col items-start justify-start gap-3">
          <div className="relative flex shrink-0 flex-col items-start justify-start gap-0">
            <div
              className="relative text-left text-[#000000]"
              style={{
                font: "var(--en, 100 20px/150% 'PingFang SC', sans-serif)",
              }}
            >
              Knowledge background
            </div>

            <div
              className="relative text-left text-[#000000]"
              style={{
                font: "var(--en, 100 20px/150% 'PingFang SC', sans-serif)",
              }}
            >
              知识背景
            </div>
          </div>

          <div className="relative flex shrink-0 flex-col items-start justify-start gap-1.5">
            <div className="relative flex shrink-0 flex-row items-start justify-start gap-1">
              <div className="relative flex h-16 w-[120px] shrink-0 flex-col items-center justify-center gap-1.5 rounded-md bg-[#ffd765]">
                <div
                  className="relative text-center text-[#686868]"
                  style={{
                    font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  design
                </div>

                <div
                  className="relative text-left text-[#686868]"
                  style={{
                    font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  设计学
                </div>
              </div>

              <div className="relative flex shrink-0 flex-col items-start justify-start gap-1">
                <div className="relative flex h-[30px] w-[179px] shrink-0 flex-row items-center justify-center gap-0 rounded-md bg-[#ffe69e]">
                  <div
                    className="relative text-center text-[#686868]"
                    style={{
                      font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    UX design
                  </div>

                  <div
                    className="relative text-left text-[#686868]"
                    style={{
                      font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    交互设计
                  </div>
                </div>

                <div className="relative flex h-[30px] shrink-0 flex-row items-center justify-center gap-0 self-stretch rounded-md bg-[#ffe69e]">
                  <div
                    className="relative text-center text-[#686868]"
                    style={{
                      font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    industrial design
                  </div>

                  <div
                    className="relative text-left text-[#686868]"
                    style={{
                      font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    工业设计
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex shrink-0 flex-row items-start justify-start gap-1">
              <div className="relative flex h-16 w-[120px] shrink-0 flex-col items-center justify-center gap-1.5 rounded-md bg-[#8197ff]">
                <div
                  className="relative text-center text-[#ffffff]"
                  style={{
                    font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  computer science
                </div>

                <div
                  className="relative text-left text-[#ffffff]"
                  style={{
                    font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  计算机科学
                </div>
              </div>

              <div className="relative flex w-[179px] shrink-0 flex-col items-start justify-start gap-1">
                <div className="relative flex h-[30px] shrink-0 flex-row items-center justify-center gap-1.5 self-stretch rounded-md bg-[#abbaff]">
                  <div
                    className="relative text-center text-[#686868]"
                    style={{
                      font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    programming
                  </div>

                  <div
                    className="relative text-left text-[#686868]"
                    style={{
                      font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    编程
                  </div>
                </div>

                <div className="relative flex h-[30px] shrink-0 flex-row items-center justify-center gap-1.5 self-stretch rounded-md bg-[#abbaff]">
                  <div
                    className="relative text-center text-[#686868]"
                    style={{
                      font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    data
                  </div>

                  <div
                    className="relative text-left text-[#686868]"
                    style={{
                      font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    数据
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex shrink-0 flex-row items-start justify-start gap-1">
              <div className="relative flex h-10 w-[120px] shrink-0 flex-row items-center justify-center gap-1.5 rounded-md bg-[#ff8989]">
                <div
                  className="relative text-center text-[#ffffff]"
                  style={{
                    font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  psychology
                </div>

                <div
                  className="relative text-left text-[#ffffff]"
                  style={{
                    font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  心理学
                </div>
              </div>

              <div className="relative flex h-10 w-[120px] shrink-0 flex-row items-center justify-center gap-1.5 rounded-md bg-[#cb77ff]">
                <div
                  className="relative text-center text-[#ffffff]"
                  style={{
                    font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  philosophy
                </div>

                <div
                  className="relative text-left text-[#ffffff]"
                  style={{
                    font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  哲学
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className=" relative flex w-[152px] shrink-0 cursor-pointer flex-row items-center justify-center gap-2.5 rounded-[5px] bg-[#424242] pb-0.5 pl-2.5 pr-2.5 pt-0.5 hover:scale-105"
          onClick={goaboutus}
        >
          <div
            className="relative text-left text-[#ffffff]"
            style={{
              font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
            }}
          >
            MORE
          </div>

          <div
            className="relative text-left text-[#ffffff]"
            style={{
              font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
            }}
          >
            👉
          </div>
        </div>
      </div>

      <img className="relative h-[551px] w-[553px]" src="homepage-1.png" />
    </div>
  );
}

export default Homepage_resume;
