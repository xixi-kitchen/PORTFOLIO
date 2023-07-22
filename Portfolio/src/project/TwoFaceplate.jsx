import React from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, Box } from "@react-three/drei";
import { Model_faceplate } from "./TwoFaceModel";

export default function TwoFaceplate({ ...props }) {
  return (
    <div className="relative h-[1024px] w-[1440px] bg-[#ffffff]">
      <div className="absolute left-[calc(50%_-_720px)] top-[0px] flex h-[6227px] w-[1440px] flex-col items-center justify-start gap-10">
        <div className="relative flex h-[970px] shrink-0 flex-col items-center justify-start gap-2.5 self-stretch">
          {/* <img className="relative flex-1 self-stretch" src="faceplate-1.png" /> */}
          <Canvas
            shadows
            dpr={[1, 2]}
            camera={{ fov: 75 }}
            className=" relative flex-1 self-stretch bg-[#3f3f3f]"
          >
            <ambientLight intensity={0.3} />
            <directionalLight
              color="white"
              position={[1, 3, 5]}
              intensity={1} />
            <Suspense fallback={null}>
              <Model_faceplate />
            </Suspense>
            <OrbitControls
              enableZoom={false}
              autoRotateSpeed={0.5}
              autoRotate />
          </Canvas>

          <div className="absolute left-[calc(50%_-_358px)] top-[403px] flex shrink-0 flex-col items-center justify-start drop-shadow-lg">
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

        <div className="relative h-[280px] shrink-0 self-stretch">
          <div className="absolute left-[437.5px] right-[437.5px] top-0 flex flex-col items-center justify-start gap-0">
            <div
              className="relative text-left text-[#000000]"
              style={{
                font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)",
              }}
            >
              A new generation of scooters
            </div>

            <div
              className="relative text-left text-[#202020]"
              style={{
                font: "var(--cn, 300 40px/150% 'PingFang SC', sans-serif)",
              }}
            >
              新一代的滑板车
            </div>
          </div>

          <div className="absolute left-[243px] right-[243px] top-[180px] flex flex-col items-start justify-start gap-2.5">
            <div
              className="relative self-stretch text-left text-[#000000]"
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
              className="relative self-stretch text-left text-[#000000]"
              style={{
                font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              本款为电动滑板，采用了双板悬挂和双杠轴的设计,双板悬挂可以使其道路通过能力极大的增强，无所不至，轮胎先于车身的设计也使得车身在撞上物体前，轮胎先触及物体，先由轮胎的悬挂缓解大部分冲击力，以保证车身安全。
            </div>
          </div>
        </div>

        <div className="relative h-[747px] shrink-0 self-stretch">
          <img
            className="absolute left-0 right-0 top-0 h-[621px]"
            src="faceplate-2.png" />

          <div className="absolute left-[calc(50%_-_428px)] top-[113px] flex w-[856px] flex-col items-center justify-center gap-2.5">
            <div
              className="relative self-stretch text-left text-[#000000]"
              style={{
                font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              The streamlined model, coupled with the upper and lower plates
              bent between the battery and the control system, is more beautiful
              and thinner.
            </div>

            <div
              className="relative self-stretch text-left text-[#000000]"
              style={{
                font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              流线型车型，加上由上下两块板折弯夹着中间的电池以及控制系统而组成的纤薄板体更加美观，也更显轻薄。
            </div>
          </div>

          <div className="absolute left-[calc(50%_-_136px)] top-[514px] flex w-[272px] flex-row items-start justify-center gap-2.5">
            <div
              className="relative text-left text-[#000000]"
              style={{
                font: "var(--cn, 300 40px/150% 'PingFang SC', sans-serif)",
              }}
            >
              Slim
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
              纤薄
            </div>
          </div>
        </div>

        <div className="relative h-[878px] shrink-0 self-stretch">
          <div className="absolute left-[251px] right-[965px] top-0 flex flex-col items-start justify-start gap-0">
            <div
              className="relative text-left text-[#000000]"
              style={{
                font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)",
              }}
            >
              Detachable
            </div>

            <div
              className="relative text-left text-[#202020]"
              style={{
                font: "var(--cn, 300 40px/150% 'PingFang SC', sans-serif)",
              }}
            >
              可脱离
            </div>
          </div>

          <div className="absolute left-[490px] right-[243px] top-0 flex flex-col items-start justify-start gap-2.5">
            <div
              className="relative self-stretch text-left text-[#000000]"
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
              className="relative self-stretch text-left text-[#000000]"
              style={{
                font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              控制把的可脱离设计，让使用者可以将遥控器取下，直接变成遥控电动滑板，拥有更强的操作性和可玩性；同时控制把也可以通过牵引绳挂在滑板车体上，让用户在使用时可以有抓握的物体，让用户的心理压力和实际使用感受得到大大提升。
            </div>
          </div>

          <div className="absolute left-0 right-0 top-[257px] flex flex-row items-start justify-start gap-0">
            <img className="relative h-[621px] flex-1" src="faceplate-3.png" />

            <img className="relative h-[621px] flex-1" src="faceplate-4.png" />
          </div>
        </div>

        <div
          className="relative flex shrink-0 flex-row items-end justify-center self-stretch pb-[100px] pl-0 pr-0 pt-[100px]"
          style={{ flexWrap: "wrap" }}
        >
          <div className="relative flex flex-1 flex-col items-center justify-start gap-0">
            <img
              className="relative h-[509.07px] shrink-0 self-stretch"
              src="faceplate-5.png" />

            <div className="relative flex shrink-0 flex-col items-center justify-start gap-0">
              <div
                className="relative text-left text-[#000000]"
                style={{
                  font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Reclamation status
              </div>

              <div
                className="relative text-left text-[#000000]"
                style={{
                  font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
                }}
              >
                回收状态
              </div>
            </div>
          </div>

          <div
            className="relative flex flex-1 flex-col items-center justify-start gap-0"
            style={{ margin: "0 0 0 -253px" }}
          >
            <img
              className="relative h-[695px] shrink-0 self-stretch mix-blend-multiply"
              src="faceplate-6.png" />

            <div className="relative flex shrink-0 flex-col items-center justify-start gap-0">
              <div
                className="relative text-left text-[#000000]"
                style={{
                  font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Traction status
              </div>

              <div
                className="relative text-left text-[#000000]"
                style={{
                  font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
                }}
              >
                牵引状态
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-[547px] shrink-0 self-stretch">
          <div className="absolute left-[162px] right-[811px] top-[206px] flex flex-col items-start justify-start gap-2.5">
            <div
              className="relative self-stretch text-left text-[#000000]"
              style={{
                font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              The headlight design on the front and rear of the skateboard
              provides users with better lighting conditions at night, larger,
              brighter, clearer and safer.
            </div>

            <div
              className="relative self-stretch text-left text-[#000000]"
              style={{
                font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              滑板前后都有的大灯设计在夜晚提供了用户更好的照明条件，更大、更亮、更清晰、更安全。
            </div>
          </div>

          <img
            className="absolute left-[649px] right-0 top-0 h-[547px]"
            src="faceplate-7.png" />
        </div>

        <div className="relative h-[546px] shrink-0 self-stretch">
          <img
            className="absolute left-0 right-[649px] top-0 h-[546px]"
            src="faceplate-8.png" />

          <div className="absolute left-[811px] right-[162px] top-[197px] flex flex-col items-start justify-start gap-2.5">
            <div
              className="relative self-stretch text-left text-[#000000]"
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
              className="relative self-stretch text-left text-[#000000]"
              style={{
                font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              双杠车轴设计使得车身在转弯时轮胎不只左右转向，还会在上下方向上向内倾斜，极大的缓解了转向时的向心力，可以做到完全不减速的转向。
            </div>
          </div>
        </div>

        <div className="relative h-[1024px] shrink-0 self-stretch overflow-hidden bg-[#5c5c5c] pb-[307px] pl-[270px] pr-[270px] pt-[307px]">
          <div className="absolute left-[182px] right-[183px] top-[132px] flex flex-col items-start justify-start gap-[15px]">
            <svg
              className="relative shrink-0 self-stretch overflow-visible"
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
                strokeLinecap="round" />
            </svg>

            <div className="relative flex w-[900px] shrink-0 flex-col items-start justify-start gap-[15px]">
              <div className="relative flex shrink-0 flex-col items-start justify-start gap-0">
                <div
                  className="relative text-left text-[#ffffff]"
                  style={{
                    font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  1.Some of the design appendices explain the content
                </div>

                <div
                  className="relative text-left text-[#ffffff]"
                  style={{
                    font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  一些设计附录说明的内容
                </div>
              </div>

              <div className="relative flex shrink-0 flex-col items-start justify-start gap-0">
                <div
                  className="relative text-left text-[#ffffff]"
                  style={{
                    font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  1.Some of the design appendices explain the content
                </div>

                <div
                  className="relative text-left text-[#ffffff]"
                  style={{
                    font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  一些设计附录说明的内容
                </div>
              </div>

              <div className="relative flex shrink-0 flex-col items-start justify-start gap-0">
                <div
                  className="relative text-left text-[#ffffff]"
                  style={{
                    font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  1.Some of the design appendices explain the content
                </div>

                <div
                  className="relative text-left text-[#ffffff]"
                  style={{
                    font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  一些设计附录说明的内容
                </div>
              </div>

              <div className="relative flex shrink-0 flex-col items-start justify-start gap-0">
                <div
                  className="relative text-left text-[#ffffff]"
                  style={{
                    font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  1.Some of the design appendices explain the content
                </div>

                <div
                  className="relative text-left text-[#ffffff]"
                  style={{
                    font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  一些设计附录说明的内容
                </div>
              </div>

              <div className="relative flex shrink-0 flex-col items-start justify-start gap-0">
                <div
                  className="relative text-left text-[#ffffff]"
                  style={{
                    font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  1.Some of the design appendices explain the content
                </div>

                <div
                  className="relative text-left text-[#ffffff]"
                  style={{
                    font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  一些设计附录说明的内容
                </div>
              </div>

              <div className="relative flex shrink-0 flex-col items-start justify-start gap-0">
                <div
                  className="relative text-left text-[#ffffff]"
                  style={{
                    font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  1.Some of the design appendices explain the content
                </div>

                <div
                  className="relative text-left text-[#ffffff]"
                  style={{
                    font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  一些设计附录说明的内容
                </div>
              </div>

              <div className="relative flex shrink-0 flex-col items-start justify-start gap-0">
                <div
                  className="relative text-left text-[#ffffff]"
                  style={{
                    font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  1.Some of the design appendices explain the content
                </div>

                <div
                  className="relative text-left text-[#ffffff]"
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
        className="absolute left-[220px] right-[220px] top-[10px] flex flex-row items-start justify-between"
        style={{ flexWrap: "wrap" }}
      >
        <div
          className="relative text-left text-[#ffffff]"
          style={{ font: "400 12px/150% 'PingFang SC', sans-serif" }}
        >
          Option two：Faceplate
        </div>

        <div
          className="relative text-left text-[#ffffff]"
          style={{ font: "400 12px/150% 'PingFang SC', sans-serif" }}
        >
          Design journal | 设计日志
        </div>
      </div>
    </div>
  );
}
