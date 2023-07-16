import React from "react";


export const TwoFaceplate = ({ ...props }) => {
  return (
    <div
      className="bg-[#ffffff] w-[1440px] h-[1024px] relative"
    >
      <div className="flex flex-col gap-10 items-center justify-start w-[1440px] h-[6227px] absolute left-[calc(50%_-_720px)] top-[0px]">
        <div className="flex flex-col gap-2.5 items-center justify-start self-stretch shrink-0 h-[970px] relative">
          <img className="self-stretch flex-1 relative" src="faceplate-1.png" />

          <div className="flex flex-col items-center justify-start shrink-0 absolute left-[calc(50%_-_358px)] top-[403px]">
            <div
              className="text-[#ffffff] text-left relative"
              style={{ font: "600 80px/150% 'PingFang SC', sans-serif" }}
            >
              Thinner and cooler
            </div>

            <div
              className="text-[#ffffff] text-left relative"
              style={{
                margin: "-16px 0 0 0",
                font: "300 40px/150% 'PingFang SC', sans-serif",
              }}
            >
              更薄、更酷炫
            </div>
          </div>
        </div>

        <div className="self-stretch shrink-0 h-[280px] relative">
          <div className="flex flex-col gap-0 items-center justify-start absolute right-[437.5px] left-[437.5px] top-0">
            <div
              className="text-[#000000] text-left relative"
              style={{
                font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)",
              }}
            >
              A new generation of scooters
            </div>

            <div
              className="text-[#202020] text-left relative"
              style={{
                font: "var(--cn, 300 40px/150% 'PingFang SC', sans-serif)",
              }}
            >
              新一代的滑板车
            </div>
          </div>

          <div className="flex flex-col gap-2.5 items-start justify-start absolute right-[243px] left-[243px] top-[180px]">
            <div
              className="text-[#000000] text-left relative self-stretch"
              style={{
                font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              This is an electric skateboard, using a double plate suspension
              and double bar shaft design, double plate suspension can make its
              road passing ability greatly enhanced, all-encompassing, the
              design of the tire before the body also makes the body before
              hitting the object, the tire first touches the object, first by
              the tire suspension to alleviate most of the impact force, to
              ensure the safety of the body.
            </div>

            <div
              className="text-[#000000] text-left relative self-stretch"
              style={{
                font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              本款为电动滑板，采用了双板悬挂和双杠轴的设计,双板悬挂可以使其道路通过能力极大的增强，无所不至，轮胎先于车身的设计也使得车身在撞上物体前，轮胎先触及物体，先由轮胎的悬挂缓解大部分冲击力，以保证车身安全。
            </div>
          </div>
        </div>

        <div className="self-stretch shrink-0 h-[747px] relative">
          <img
            className="h-[621px] absolute right-0 left-0 top-0"
            src="faceplate-2.png"
          />

          <div className="flex flex-col gap-2.5 items-center justify-center w-[856px] absolute left-[calc(50%_-_428px)] top-[113px]">
            <div
              className="text-[#000000] text-left relative self-stretch"
              style={{
                font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              The streamlined model, coupled with the upper and lower plates
              bent between the battery and the control system, is more beautiful
              and thinner.
            </div>

            <div
              className="text-[#000000] text-left relative self-stretch"
              style={{
                font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              流线型车型，加上由上下两块板折弯夹着中间的电池以及控制系统而组成的纤薄板体更加美观，也更显轻薄。
            </div>
          </div>

          <div className="flex flex-row gap-2.5 items-start justify-center w-[272px] absolute left-[calc(50%_-_136px)] top-[514px]">
            <div
              className="text-[#000000] text-left relative"
              style={{
                font: "var(--cn, 300 40px/150% 'PingFang SC', sans-serif)",
              }}
            >
              Slim
            </div>

            <div
              className="text-[#202020] text-left relative"
              style={{
                font: "var(--cn, 300 40px/150% 'PingFang SC', sans-serif)",
              }}
            >
              |
            </div>

            <div
              className="text-[#202020] text-left relative"
              style={{
                font: "var(--cn, 300 40px/150% 'PingFang SC', sans-serif)",
              }}
            >
              纤薄
            </div>
          </div>
        </div>

        <div className="self-stretch shrink-0 h-[878px] relative">
          <div className="flex flex-col gap-0 items-start justify-start absolute right-[965px] left-[251px] top-0">
            <div
              className="text-[#000000] text-left relative"
              style={{
                font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)",
              }}
            >
              Detachable
            </div>

            <div
              className="text-[#202020] text-left relative"
              style={{
                font: "var(--cn, 300 40px/150% 'PingFang SC', sans-serif)",
              }}
            >
              可脱离
            </div>
          </div>

          <div className="flex flex-col gap-2.5 items-start justify-start absolute right-[243px] left-[490px] top-0">
            <div
              className="text-[#000000] text-left relative self-stretch"
              style={{
                font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              The detachable design of the control handle allows the user to
              take off the remote control and directly turn it into a remote
              control electric skateboard, which has stronger operability and
              playability; At the same time, the control handle can also be hung
              on the scooter body through the tow rope, so that users can have
              gripping objects when using, so that the user&#039;s psychological
              pressure and actual use experience are greatly improved.
            </div>

            <div
              className="text-[#000000] text-left relative self-stretch"
              style={{
                font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              控制把的可脱离设计，让使用者可以将遥控器取下，直接变成遥控电动滑板，拥有更强的操作性和可玩性；同时控制把也可以通过牵引绳挂在滑板车体上，让用户在使用时可以有抓握的物体，让用户的心理压力和实际使用感受得到大大提升。
            </div>
          </div>

          <div className="flex flex-row gap-0 items-start justify-start absolute right-0 left-0 top-[257px]">
            <img className="flex-1 h-[621px] relative" src="faceplate-3.png" />

            <img className="flex-1 h-[621px] relative" src="faceplate-4.png" />
          </div>
        </div>

        <div
          className="pt-[100px] pr-0 pb-[100px] pl-0 flex flex-row items-end justify-center self-stretch shrink-0 relative"
          style={{ flexWrap: "wrap" }}
        >
          <div className="flex flex-col gap-0 items-center justify-start flex-1 relative">
            <img
              className="self-stretch shrink-0 h-[509.07px] relative"
              src="faceplate-5.png"
            />

            <div className="flex flex-col gap-0 items-center justify-start shrink-0 relative">
              <div
                className="text-[#000000] text-left relative"
                style={{
                  font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Reclamation status
              </div>

              <div
                className="text-[#000000] text-left relative"
                style={{
                  font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
                }}
              >
                回收状态
              </div>
            </div>
          </div>

          <div
            className="flex flex-col gap-0 items-center justify-start flex-1 relative"
            style={{ margin: "0 0 0 -253px" }}
          >
            <img
              className="self-stretch shrink-0 h-[695px] relative"
              src="faceplate-6.png"
            />

            <div className="flex flex-col gap-0 items-center justify-start shrink-0 relative">
              <div
                className="text-[#000000] text-left relative"
                style={{
                  font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Traction status
              </div>

              <div
                className="text-[#000000] text-left relative"
                style={{
                  font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
                }}
              >
                牵引状态
              </div>
            </div>
          </div>
        </div>

        <div className="self-stretch shrink-0 h-[547px] relative">
          <div className="flex flex-col gap-2.5 items-start justify-start absolute right-[811px] left-[162px] top-[206px]">
            <div
              className="text-[#000000] text-left relative self-stretch"
              style={{
                font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              The headlight design on the front and rear of the skateboard
              provides users with better lighting conditions at night, larger,
              brighter, clearer and safer.
            </div>

            <div
              className="text-[#000000] text-left relative self-stretch"
              style={{
                font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              滑板前后都有的大灯设计在夜晚提供了用户更好的照明条件，更大、更亮、更清晰、更安全。
            </div>
          </div>

          <img
            className="h-[547px] absolute right-0 left-[649px] top-0"
            src="faceplate-7.png"
          />
        </div>

        <div className="self-stretch shrink-0 h-[546px] relative">
          <img
            className="h-[546px] absolute right-[649px] left-0 top-0"
            src="faceplate-8.png"
          />

          <div className="flex flex-col gap-2.5 items-start justify-start absolute right-[162px] left-[811px] top-[197px]">
            <div
              className="text-[#000000] text-left relative self-stretch"
              style={{
                font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              The design of the two-bar axle makes the body not only turn left
              and right when turning, but also tilt up and down upward and
              inward, which greatly relieves the centripetal force when
              steering, and can achieve steering without slowing down at all.
            </div>

            <div
              className="text-[#000000] text-left relative self-stretch"
              style={{
                font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              双杠车轴设计使得车身在转弯时轮胎不只左右转向，还会在上下方向上向内倾斜，极大的缓解了转向时的向心力，可以做到完全不减速的转向。
            </div>
          </div>
        </div>

        <div className="bg-[#5c5c5c] pt-[307px] pr-[270px] pb-[307px] pl-[270px] self-stretch shrink-0 h-[1024px] relative overflow-hidden">
          <div className="flex flex-col gap-[15px] items-start justify-start absolute right-[183px] left-[182px] top-[132px]">
            <svg
              className="self-stretch shrink-0 relative overflow-visible"
              style={{}}
              width="1075"
              height="3"
              viewBox="0 0 1075 3"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0L1075 2.40492"
                stroke="#DCDCDC"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>

            <div className="flex flex-col gap-[15px] items-start justify-start shrink-0 w-[900px] relative">
              <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
                <div
                  className="text-[#ffffff] text-left relative"
                  style={{
                    font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  1.Some of the design appendices explain the content
                </div>

                <div
                  className="text-[#ffffff] text-left relative"
                  style={{
                    font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  一些设计附录说明的内容
                </div>
              </div>

              <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
                <div
                  className="text-[#ffffff] text-left relative"
                  style={{
                    font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  1.Some of the design appendices explain the content
                </div>

                <div
                  className="text-[#ffffff] text-left relative"
                  style={{
                    font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  一些设计附录说明的内容
                </div>
              </div>

              <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
                <div
                  className="text-[#ffffff] text-left relative"
                  style={{
                    font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  1.Some of the design appendices explain the content
                </div>

                <div
                  className="text-[#ffffff] text-left relative"
                  style={{
                    font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  一些设计附录说明的内容
                </div>
              </div>

              <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
                <div
                  className="text-[#ffffff] text-left relative"
                  style={{
                    font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  1.Some of the design appendices explain the content
                </div>

                <div
                  className="text-[#ffffff] text-left relative"
                  style={{
                    font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  一些设计附录说明的内容
                </div>
              </div>

              <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
                <div
                  className="text-[#ffffff] text-left relative"
                  style={{
                    font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  1.Some of the design appendices explain the content
                </div>

                <div
                  className="text-[#ffffff] text-left relative"
                  style={{
                    font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  一些设计附录说明的内容
                </div>
              </div>

              <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
                <div
                  className="text-[#ffffff] text-left relative"
                  style={{
                    font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  1.Some of the design appendices explain the content
                </div>

                <div
                  className="text-[#ffffff] text-left relative"
                  style={{
                    font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  一些设计附录说明的内容
                </div>
              </div>

              <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
                <div
                  className="text-[#ffffff] text-left relative"
                  style={{
                    font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  1.Some of the design appendices explain the content
                </div>

                <div
                  className="text-[#ffffff] text-left relative"
                  style={{
                    font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  一些设计附录说明的内容
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex flex-row items-start justify-between absolute right-[220px] left-[220px] top-[10px]"
        style={{ flexWrap: "wrap" }}
      >
        <div
          className="text-[#ffffff] text-left relative"
          style={{ font: "400 12px/150% 'PingFang SC', sans-serif" }}
        >
          Option two：Faceplate
        </div>

        <div
          className="text-[#ffffff] text-left relative"
          style={{ font: "400 12px/150% 'PingFang SC', sans-serif" }}
        >
          Design journal | 设计日志
        </div>
      </div>


    </div>
  );
};
