import React from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box } from "@react-three/drei";
import { OnesurfaceModel } from "./OnesurfaceModel";

export function Onesurfboard({ ...props }) {
  return (
    <div
      className="relative h-[1024px] w-[1440px] bg-[#ffffff]"
    >
      <div className="absolute left-0 right-0 top-[0px] flex h-[6142px] flex-col items-center justify-start gap-0">
        <div className="relative flex h-[970px] shrink-0 flex-col items-center justify-start gap-2.5 self-stretch overflow-hidden">
        <Canvas
            shadows
            dpr={[1, 2]}
            camera={{ fov: 75 }}
            className=" relative flex-1 self-stretch bg-[#b4b4b4]"
          >
            <ambientLight intensity={2} />
            <directionalLight
              color="white"
              position={[2, 3, 5]}
              intensity={1} />
            <Suspense fallback={null}>
              <OnesurfaceModel/>
            </Suspense>
            <OrbitControls autoRotate />
          </Canvas>

          <div className="absolute left-[422px] top-[725px] flex w-[596px] shrink-0 flex-col items-center justify-start gap-0">
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

        <div className="relative flex h-[1024px] shrink-0 flex-col items-center justify-between self-stretch overflow-hidden bg-[#9d9d9d]">
          <div className="relative flex flex-1 flex-col items-center justify-start gap-0 self-stretch">
            <div className="relative flex shrink-0 flex-col items-center justify-center gap-0 self-stretch pb-11 pl-0 pr-0 pt-11">
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

            <div
              className="relative flex flex-1 flex-row items-center justify-between self-stretch"
              style={{ flexWrap: "wrap" }}
            >
              <div className="relative flex h-[672px] flex-1 flex-col items-end justify-center gap-5 pb-0 pl-[220px] pr-10 pt-0">
                <div className="relative flex shrink-0 flex-col items-start justify-start gap-0 self-stretch">
                  <div
                    className="relative text-left text-[#000000]"
                    style={{
                      font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    flow
                  </div>

                  <div
                    className="relative text-left text-[#202020]"
                    style={{
                      font: "var(--cn, 300 40px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    流动
                  </div>
                </div>

                <div className="relative flex shrink-0 flex-col items-start justify-start gap-2.5 self-stretch">
                  <div
                    className="relative self-stretch text-left text-[#000000]"
                    style={{
                      font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    The overall shape of the board comes from the curved design
                    of the combination of ocean waves and streamlined design in
                    nature, which gives it a more beautiful shape while having a
                    flexible melody.
                  </div>

                  <div
                    className="relative self-stretch text-left text-[#000000]"
                    style={{
                      font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    板面整体造型来源于大自然中海洋波浪与的流线型设计相结合的曲线设计，在具有灵动旋律的同时也赋予其更加悠美的造型。
                  </div>
                </div>
              </div>

              <img
                className="relative h-[816px] flex-1"
                src="surfaceboard-2.png"
              />
            </div>
          </div>
        </div>

        <div className="relative flex h-[1024px] shrink-0 flex-col items-center justify-end gap-2.5 self-stretch">
          <div className="relative flex shrink-0 flex-col items-end justify-start gap-[69px] self-stretch">
            <div className="relative flex w-[1000px] shrink-0 flex-col items-start justify-start gap-2.5">
              <div
                className="relative self-stretch text-left text-[#000000]"
                style={{
                  font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                After finite element analysis, it is verified that the air
                resistance can be reduced by 20% compared with the traditional
                plate surface, and the air can be increased after the air enters
                from the front air intake, and the air flow rate can be
                increased after two enlargements of the inner cavity, so as to
                obtain a greater speed increase
              </div>

              <div
                className="relative self-stretch text-left text-[#000000]"
                style={{
                  font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                经过有限元分析验证其空气阻力相比于传统板面可降低20%，空气由前方进气口进入后，经由两次内腔扩大后可以提升空气流速，从而得到更大的速度提升
              </div>
            </div>

            <div
              className="relative flex shrink-0 flex-row items-start justify-start gap-5 self-stretch"
              style={{ flexWrap: "wrap" }}
            >
              <img
                className="relative h-[690.64px] w-[800px] shrink-0"
                src="surfaceboard-3.png"
              />

              <div className="relative flex shrink-0 flex-col items-start justify-start gap-0">
                <div
                  className="relative text-left text-[#000000]"
                  style={{
                    font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  &quot;Turbo&quot;
                </div>

                <div
                  className="relative text-left text-[#202020]"
                  style={{
                    font: "var(--cn, 300 40px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  “涡轮”增压
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex shrink-0 flex-col items-center justify-start gap-2.5 self-stretch">
          <img
            className="relative h-[1023.71px] w-[1440px] shrink-0"
            src="surfaceboard-4.png"
          />

          <div className="absolute left-[calc(50%_-_400px)] top-[66px] flex shrink-0 flex-col items-center justify-start gap-[646px]">
            <div className="relative flex shrink-0 flex-col items-center justify-start gap-0">
              <div
                className="relative text-left text-[#000000]"
                style={{
                  font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Stabilize
              </div>

              <div
                className="relative text-left text-[#202020]"
                style={{
                  font: "var(--cn, 300 40px/150% 'PingFang SC', sans-serif)",
                }}
              >
                稳定
              </div>
            </div>

            <div className="relative flex shrink-0 flex-col items-start justify-start gap-2.5">
              <div
                className="relative w-[800px] text-left text-[#000000]"
                style={{
                  font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                The suspension system of the entire scooter adopts a multi-link
                independent suspension design similar to that of a car, which
                can provide more stable suspension and support, consisting of
                eight swing arms left and right, four lateral stabilizer bars
                and four steering knuckles.
              </div>

              <div
                className="relative w-[800px] text-left text-[#000000]"
                style={{
                  font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                整个滑板车的悬挂系统采用类似汽车的多连杆式独立悬挂设计，能提供更加稳定的避震以及支撑作用，由两根柱体固定的底盘和前后左右八条摆臂，四条横向稳定杆以及四个转向节组成。
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex h-[1022px] shrink-0 flex-col items-center justify-start gap-0 self-stretch">
          <div className="relative flex shrink-0 flex-row items-center justify-start gap-0">
            <img
              className="relative h-[511px] w-[592px] shrink-0"
              src="surfaceboard-5.png"
            />

            <div className="relative flex w-[849px] shrink-0 flex-col items-start justify-start gap-2.5 pb-0 pl-[60px] pr-[220px] pt-0">
              <div
                className="relative self-stretch text-left text-[#000000]"
                style={{
                  font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                the connecting rod connecting the wheel to the frame, which
                controls how and at what angle the wheel moves; A spring located
                between the connecting rod and the frame supports the mass of
                the body and also cushions the wheels as they pass through
                uneven obstacles.
              </div>

              <div
                className="relative self-stretch text-left text-[#000000]"
                style={{
                  font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                连接车轮和车架的连杆,它控制了车轮运动的方式和角度；位于连杆与车架之间的弹簧,用来支持车身的质量,也可在车轮通过凸凹不平的障碍时发挥缓冲作用。
              </div>
            </div>
          </div>

          <div className="relative flex shrink-0 flex-row items-center justify-start gap-0">
            <img
              className="relative h-[511px] w-[592px] shrink-0"
              src="surfaceboard-6.png"
            />

            <div className="relative flex w-[849px] shrink-0 flex-col items-start justify-start gap-2.5 pb-0 pl-[60px] pr-[220px] pt-0">
              <div
                className="relative self-stretch text-left text-[#000000]"
                style={{
                  font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Multi-link independent suspension refers to a suspension in
                which multiple connecting rods (usually four to five) are
                combined to control the change of wheel position. Since the
                suspension has multiple connecting rods, and the connecting rods
                can be controlled in multiple ways with multiple wheels, the
                wheels can be individually adjusted when aligning.
              </div>

              <div
                className="relative self-stretch text-left text-[#000000]"
                style={{
                  font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                多连杆式独立悬架是指由多根连杆（一般四到五根）组合在一起来控制车轮位置变化的悬架。由于悬架具备多根连杆，并且连杆可多车轮进行多方面的控制，所以在做车轮定位时可对车轮进行单独调整。
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex h-[1024px] shrink-0 flex-col items-center justify-center gap-2.5 self-stretch overflow-hidden bg-[#5c5c5c] pb-[307px] pl-[270px] pr-[270px] pt-[307px]">
          <div className="relative flex shrink-0 flex-col items-start justify-start gap-[15px]">
            <svg
              className="relative shrink-0 overflow-visible"
              style={{}}
              width="900"
              height="3"
              viewBox="0 0 900 3"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0.204102L899.998 2.21752"
                stroke="#DCDCDC"
                strokeWidth="2"
                strokeLinecap="round"
              />
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

        <div className="absolute left-[calc(50%_-_501.5px)] top-0 flex shrink-0 flex-row items-start justify-center gap-[634px] pb-1.5 pl-0 pr-0 pt-1.5">
          <div
            className="relative text-left text-[#ffffff]"
            style={{ font: "600 12px/150% 'PingFang SC', sans-serif" }}
          >
            Surfboard
          </div>

          <div
            className="relative flex h-[18px] w-[310px] shrink-0 flex-row items-start justify-center gap-10"
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
      </div>

    </div>
  );
}
