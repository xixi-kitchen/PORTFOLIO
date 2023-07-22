import React from "react";

export default function Typography({ ...props }) {
  return (
    <div className="flex flex-col gap-[104px] items-center justify-start w-[1000px]  h-[5100px] relative">
      <div className="flex flex-row items-center justify-between shrink-0 w-[1000px] relative">
        <div
          className="text-[#202020] text-left relative"
          style={{ font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)" }}
        >
          Typography
        </div>

        <div className="flex flex-row gap-[69px] items-start justify-start shrink-0 relative">
          <div className="flex flex-col items-start justify-start shrink-0 relative">
            <div
              className="text-[#202020] text-left relative"
              style={{
                font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              Production time: 2019.04.17
            </div>

            <div
              className="text-[#202020] text-left relative"
              style={{
                margin: "-4px 0 0 0",
                font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              制作时间：2019.04.17
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

      <div className="flex flex-col gap-[153px] items-start justify-start shrink-0 relative">
        <div className="flex flex-col gap-4 items-start justify-start shrink-0 relative">
          <div className="flex flex-col gap-5 items-start justify-start shrink-0 relative">
            <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
              <div
                className="text-[#000000] text-left relative"
                style={{
                  font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
                }}
              >
                School anniversary poster
              </div>

              <div
                className="text-[#000000] text-left relative w-[1000px]"
                style={{
                  font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                As of September 2019, Shanghai Maritime University has
                celebrated its 110th anniversary, and on the occasion of the
                anniversary celebration, three commemorative posters were made
                to commemorate and use by the university.
              </div>
            </div>

            <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
              <div
                className="text-[#000000] text-left relative"
                style={{
                  font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
                }}
              >
                学校周年庆纪念海报
              </div>

              <div
                className="text-[#000000] text-left relative"
                style={{
                  font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                至2019年9月，上海海事大学已成立一百一十周年，值此周年庆典之时，作三款纪念海报以作纪念并供学校使用。
              </div>
            </div>
          </div>

          <div className="flex flex-row items-start justify-between shrink-0 w-[1000px] relative">
            <img
              className="shrink-0 w-80 h-[479.94px] relative"
              src="typography-110-haibao-1.png" />

            <img
              className="shrink-0 w-80 h-[479.94px] relative"
              src="typography-110-haibao-2.png" />

            <img
              className="shrink-0 w-80 h-[479.94px] relative"
              src="typography-110-haibao-3.png" />
          </div>
        </div>

        <div className="flex flex-col gap-[55px] items-start justify-start shrink-0 relative">
          <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
            <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
              <div
                className="text-[#000000] text-left relative"
                style={{
                  font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Template of the 5th China Advertising Talent Training Seminar
              </div>
            </div>

            <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
              <div
                className="text-[#000000] text-left relative"
                style={{
                  font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
                }}
              >
                第五届中国广告人才培养研讨会手册模板
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
            <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
              <div
                className="text-[#000000] text-left relative"
                style={{
                  font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Cover and back cover
              </div>

              <div
                className="text-[#000000] text-left relative"
                style={{
                  font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                封面和封底
              </div>
            </div>

            <img
              className="border-solid border-[#cccccc] border shrink-0 w-[1000px] h-[707.28px] relative"
              src="typographyshouce-1.png" />
          </div>

          <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
            <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
              <div
                className="text-[#000000] text-left relative"
                style={{
                  font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Agenda &amp; Map
              </div>

              <div
                className="text-[#000000] text-left relative"
                style={{
                  font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                日程&amp;地图
              </div>
            </div>

            <img
              className="border-solid border-[#cccccc] border shrink-0 w-[1000px] h-[707.28px] relative"
              src="typographyshouce-2.png" />
          </div>

          <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
            <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
              <div
                className="text-[#000000] text-left relative"
                style={{
                  font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Introduction by the instructor 1
              </div>

              <div
                className="text-[#000000] text-left relative"
                style={{
                  font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                讲师介绍 1
              </div>
            </div>

            <img
              className="border-solid border-[#cccccc] border shrink-0 w-[1000px] h-[707.28px] relative"
              src="typographyshouce-3.png" />
          </div>

          <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
            <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
              <div
                className="text-[#000000] text-left relative"
                style={{
                  font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Introduction by the instructor 2
              </div>

              <div
                className="text-[#000000] text-left relative"
                style={{
                  font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                讲师介绍 2
              </div>
            </div>

            <img
              className="border-solid border-[#cccccc] border shrink-0 w-[1000px] h-[707.28px] relative"
              src="typographyshouce-4.png" />
          </div>
        </div>

        <div className="flex flex-col gap-[62px] items-start justify-start shrink-0 relative">
          <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
            <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
              <div
                className="text-[#000000] text-left relative"
                style={{
                  font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
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
                巴黎贝甜蛋糕不同风格海报对比
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-[103px] items-start justify-start shrink-0 relative">
            <div className="flex flex-col gap-[22px] items-center justify-start shrink-0 relative">
              <img
                className="border-solid border-[#e5e5e5] border shrink-0 w-[598px] h-[423px] relative"
                src="typographyba-1.png" />

              <div className="flex flex-col gap-0 items-center justify-start shrink-0 relative">
                <div
                  className="text-[#000000] text-left relative"
                  style={{
                    font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  High luxury style
                </div>

                <div
                  className="text-[#000000] text-left relative"
                  style={{
                    font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  高奢风格
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[22px] items-center justify-start shrink-0 relative">
              <img
                className="border-solid border-[#e5e5e5] border shrink-0 w-[299px] h-[423px] relative"
                src="typographyba-2.png" />

              <div className="flex flex-col gap-0 items-center justify-start shrink-0 relative">
                <div
                  className="text-[#000000] text-left relative"
                  style={{
                    font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  Promotional style
                </div>

                <div
                  className="text-[#000000] text-left relative"
                  style={{
                    font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  实惠风格
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
