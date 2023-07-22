import React from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls,  } from "@react-three/drei";
import { SaintLancnceModel } from "./SaintLancnceModel";

export default function Saintlancnce({ ...props }) {
  return (
    <div
      className="bg-[#ffffff] w-[1440px] h-[1024px] relative"
    >
      <div className="flex flex-col gap-0 items-start justify-start absolute left-[calc(50%_-_720px)] top-[0px] overflow-hidden">
        <div className="bg-[#f3f3f3] flex flex-col gap-2.5 items-start justify-start shrink-0 w-[1440px] h-[970px] relative">
          <div className="flex flex-col gap-2.5 items-center justify-start self-stretch flex-1 relative">
            {/* <img
              className="self-stretch flex-1 relative"
              src="saint-zhutu.png" /> */}
              <Canvas
              shadows
              dpr={[1, 2]}
              camera={{ fov: 75 }}
              className=" relative flex-1 self-stretch bg-[#cfcfcf]"
            >
              <ambientLight intensity={0.3} />
              <directionalLight
                color="white"
                position={[2, 3, 5]}
                intensity={1}
              />
              <Suspense fallback={null}>
                <SaintLancnceModel />
              </Suspense>
              <OrbitControls 
            enableZoom={false}
            autoRotateSpeed={0.5}
              autoRotate />
            </Canvas>
          </div>

          <div
            className="flex flex-col gap-5 items-center justify-start shrink-0 absolute left-[calc(50%_-_169px)] top-[165px] drop-shadow-lg"
          >
            <div
              className="text-[#ffffff] text-left relative"
              style={{ font: "600 60px/150% 'PingFang SC', sans-serif" }}
            >
              Saint Lance
            </div>

            <div
              className="text-[#ffffff] text-left relative"
              style={{ font: "300 40px/150% 'PingFang SC', sans-serif" }}
            >
              圣·兰斯号
            </div>
          </div>
        </div>

        <div className="bg-[#ffffff] flex flex-col gap-[88px] items-center justify-center shrink-0 w-[1440px] h-[1078px] relative">
          <div className="flex flex-row gap-5 items-center justify-start shrink-0 relative">
            <img
              className="shrink-0 w-[605px] h-[457px] relative"
              src="saint-shejiyuyan-1.png" />

            <div className="flex flex-col gap-5 items-start justify-start shrink-0 w-[417px] relative">
              <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
                <div
                  className="text-[#000000] text-left relative"
                  style={{
                    font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  Design language
                </div>

                <div
                  className="text-[#202020] text-left relative"
                  style={{
                    font: "var(--cn, 300 40px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  设计语言
                </div>
              </div>

              <div className="flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative">
                <div
                  className="text-[#000000] text-left relative self-stretch"
                  style={{
                    font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  The overall design idea is to streamline to meet the main
                  functions, that is, the trimaran shape and diving function on
                  the basis of a smooth overall design, the entire hull is
                  composed of G2 and G3 continuous curved surfaces, except for
                  the necessary propeller around the drainage and diversion
                  design, almost does not contain any small range of concave and
                  convex
                </div>

                <div
                  className="text-[#000000] text-left relative self-stretch"
                  style={{
                    font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  整体设计思路以流线型满足主要功能，即三体船造型和下潜功能的基础上采用平滑的整体设计，整个船体采用G2和G3连续曲面为主构成，除必要的螺旋桨所在部位周围做了引流、导流设计以外，几乎不含任何小范围的凹凸
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-5 items-center justify-start shrink-0 relative">
            <div className="flex flex-col gap-2.5 items-start justify-start shrink-0 w-[397px] relative">
              <div
                className="text-[#000000] text-left relative self-stretch"
                style={{
                  font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Analyze the user characteristics and development prospects from
                a new perspective, and then improve and optimize the design of
                the yacht from the appearance, combining the speed of the
                trimaran with the design of the diving to avoid the wind and
                waves, and pursue a more extreme experience
              </div>

              <div
                className="text-[#000000] text-left relative self-stretch"
                style={{
                  font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                从全新的角度分析用户特点及发展前景，进而从外观上对游艇进行改进优化设计，将三体船的快速与下潜的可避风浪设计相结合，追求更加极致的体验
              </div>
            </div>

            <img
              className="shrink-0 w-[605px] h-[340px] relative"
              src="saint-shejiyuyan-2.png" />
          </div>
        </div>

        <div className="bg-[#ffffff] flex flex-col gap-2.5 items-center justify-start shrink-0 w-[1440px] h-[1024px] relative">
          <img
            className="shrink-0 w-[1440px] h-[1180px] relative"
            src="saint-shiyongchangjing.png" />

          <div
            className="flex flex-col gap-0 items-start justify-start shrink-0 absolute left-[901px] top-[597px]"
            style={{ boxShadow: "4px 4px 8px 0px rgba(0, 0, 0, 0.25)" }}
          >
            <div
              className="text-[#ffffff] text-left relative"
              style={{
                font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)",
              }}
            >
              A whole new experience
            </div>

            <div
              className="text-[#ffffff] text-left relative"
              style={{
                font: "var(--cn, 300 40px/150% 'PingFang SC', sans-serif)",
              }}
            >
              全新体验
            </div>
          </div>
        </div>

        <div className="bg-[#ffffff] flex flex-col gap-[47px] items-center justify-center shrink-0 w-[1440px] h-[1026px] relative">
          <div className="flex flex-row gap-5 items-center justify-start shrink-0 relative">
            <img
              className="shrink-0 w-[528px] h-[409px] relative"
              src="saint-changguibig.png" />

            <div className="flex flex-col gap-[11px] items-start justify-start shrink-0 relative">
              <div className="flex flex-col gap-5 items-start justify-start shrink-0 w-[527px] relative">
                <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
                  <div
                    className="text-[#000000] text-left relative"
                    style={{
                      font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    General status
                  </div>

                  <div
                    className="text-[#000000] text-left relative"
                    style={{
                      font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    常规状态
                  </div>
                </div>

                <div className="flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative">
                  <div
                    className="text-[#000000] text-left relative self-stretch"
                    style={{
                      font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    Floating state: It is the general state of the St. Reims,
                    which can carry out normal surface navigation and ordinary
                    leisure and entertainment activities for passengers
                  </div>

                  <div
                    className="text-[#000000] text-left relative self-stretch"
                    style={{
                      font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    上浮状态：是圣·兰斯号的一般状态，可以进行正常的水面航行以及供乘客进行普通的休闲娱乐活动
                  </div>
                </div>
              </div>

              <img
                className="shrink-0 w-[162px] h-[117px] relative"
                src="saint-changguismall.png" />
            </div>
          </div>

          <div className="flex flex-row gap-[21px] items-center justify-start shrink-0 relative">
            <img
              className="shrink-0 w-[527px] h-[409px] relative"
              src="saint-superbig.png" />

            <div className="flex flex-col gap-[11px] items-start justify-start shrink-0 relative">
              <div className="flex flex-col gap-5 items-start justify-start shrink-0 w-[527px] relative">
                <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
                  <div
                    className="text-[#000000] text-left relative"
                    style={{
                      font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    Super status
                  </div>

                  <div
                    className="text-[#000000] text-left relative"
                    style={{
                      font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    超级状态
                  </div>
                </div>

                <div className="flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative">
                  <div
                    className="text-[#000000] text-left relative self-stretch"
                    style={{
                      font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    Diving state: When the hatch of the whole ship is closed,
                    the sealing device is opened and enters the diving state, at
                    this time the St. Lance is a submarine, which can dive
                    underwater to avoid the wind and waves, and also can visit
                    the underwater scenery
                  </div>

                  <div
                    className="text-[#000000] text-left relative self-stretch"
                    style={{
                      font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    下潜状态：当整船的舱门关闭，密封装置打开之后进入下潜状态，此时圣·兰斯号就是一艘潜艇，可潜入水下躲避风浪，同时也可游览海底风光
                  </div>
                </div>
              </div>

              <img
                className="shrink-0 w-[162px] h-[93px] relative"
                src="saint-supersmall.png" />
            </div>
          </div>
        </div>

        <div className="bg-[#cccccc] flex flex-col gap-0 items-start justify-start shrink-0 w-[1440px] relative">
          <img
            className="shrink-0 w-[1440px] h-[1019px] relative"
            src="saint-shinei.png" />
        </div>

        <div className="bg-[#ffffff] flex flex-col gap-2.5 items-start justify-start shrink-0 w-[1440px] relative">
          <div className="flex flex-col gap-[17px] items-center justify-center shrink-0 w-[1440px] h-[1024px] relative">
            <div className="flex flex-row gap-[229px] items-start justify-start shrink-0 relative">
              <div className="flex flex-col gap-0 items-start justify-start shrink-0 w-[397px] relative">
                <div
                  className="text-[#000000] text-left relative"
                  style={{
                    font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  Fully expanded
                </div>

                <div
                  className="text-[#202020] text-left relative"
                  style={{
                    font: "var(--cn, 300 40px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  完全展开
                </div>
              </div>

              <div className="flex flex-col gap-5 items-start justify-start shrink-0 w-[606px] relative">
                <div className="flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative">
                  <div
                    className="text-[#000000] text-left relative self-stretch"
                    style={{
                      font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    The main hatch is opened and closed by two giant robotic
                    arms with full degrees of freedom
                  </div>

                  <div
                    className="text-[#000000] text-left relative self-stretch"
                    style={{
                      font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    主舱门由两个巨型全自由度机械臂实现开启和封闭
                  </div>
                </div>

                <div className="flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative">
                  <div
                    className="text-[#000000] text-left relative self-stretch"
                    style={{
                      font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    It can be used as a boarding lane when opened
                  </div>

                  <div
                    className="text-[#000000] text-left relative self-stretch"
                    style={{
                      font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    开启时作为登船通道使用
                  </div>
                </div>

                <div className="flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative">
                  <div
                    className="text-[#000000] text-left relative self-stretch"
                    style={{
                      font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    It can also be used as a small side deck when sailing
                    smoothly or moored on the sea
                  </div>

                  <div
                    className="text-[#000000] text-left relative self-stretch"
                    style={{
                      font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    在海面平稳航行或停泊时也可作为一块侧面小甲板使用
                  </div>
                </div>
              </div>
            </div>

            <img
              className="shrink-0 w-[1232px] h-[627px] relative"
              src="saint-wanquanzhankai.png" />
          </div>

          <div className="flex flex-col gap-0 items-start justify-start shrink-0 absolute left-[786px] top-[797px]">
            <div
              className="text-[#000000] text-left relative"
              style={{
                font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
              }}
            >
              Hatch robotic arm
            </div>

            <div
              className="text-[#000000] text-left relative"
              style={{
                font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
              }}
            >
              舱门机械臂
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2.5 items-start justify-start shrink-0 w-[1440px] h-[1024px] relative">
          <img
            className="self-stretch flex-1 relative"
            src="saint-xuanran.png" />
        </div>

        <div className="bg-[#3c3c3c] pt-[60px] pr-0 pb-[60px] pl-0 flex flex-col gap-[15px] items-center justify-start shrink-0 w-[1440px] h-[826px] relative">
          <svg
            className="shrink-0 relative overflow-visible"
            style={{}}
            width="1000"
            height="3"
            viewBox="0 0 1000 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0L999.998 2.23713"
              stroke="#DCDCDC"
              strokeWidth="2"
              strokeLinecap="round" />
          </svg>

          <div className="flex flex-col gap-[15px] items-start justify-start shrink-0 w-[1000px] relative">
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

      <div className="flex flex-row items-start justify-between absolute right-[220px] left-[220px] top-[10px]">
        <div
          className="text-[#ffffff] text-left relative"
          style={{ font: "600 12px/150% 'PingFang SC', sans-serif" }}
        >
          Saint Lancnce
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
}
