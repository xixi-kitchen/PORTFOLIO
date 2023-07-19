import React from 'react';
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls,  } from "@react-three/drei";

import { VectorModel } from './VectorModel';


export const Vectorscopedevice = ({ ...props }) => {
  return (
    <div className="relative h-[1024px] w-[1440px] bg-[#ffffff]">
      <div className="flex flex-col gap-2.5 items-center justify-start self-stretch shrink-0 h-[970px] relative">
        <div className="relative flex shrink-0 flex-col items-center h-[970px] justify-start gap-2.5 self-stretch">
          {/* <img
            className="self-stretch shrink-0 h-[970px] relative"
            src="vectorscope-1.png"
          /> */}
          <Canvas
            shadows
            dpr={[1, 2]}
            camera={{ fov: 75 }}
            className=" relative flex-1 self-stretch  bg-[#a4a4a4]"
          >
            <ambientLight intensity={0.3} />
            <directionalLight
              color="white"
              position={[1, 3, 5]}
              intensity={1}
            />
            <Suspense fallback={null}>
              <VectorModel />
            </Suspense>
            <OrbitControls 
            enableZoom={false}
            autoRotateSpeed={0.5}
            autoRotate />
          </Canvas>
          <div className="absolute left-[calc(50%_-_248.5px)] top-[400px] flex shrink-0 flex-col items-center justify-start gap-5">
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

        <div className="relative h-[907px] shrink-0 self-stretch">
          <div className="absolute left-[calc(50%_-_433px)] top-0 flex flex-col items-center justify-start gap-0">
            <div
              className="relative text-left text-[#000000]"
              style={{
                font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)",
              }}
            >
              Vectorial suction port, adjustable as you like
            </div>

            <div
              className="relative text-left text-[#202020]"
              style={{
                font: "var(--cn, 300 40px/150% 'PingFang SC', sans-serif)",
              }}
            >
              矢量吸气口，随心调节
            </div>
          </div>

          <div className="absolute bottom-[657px] left-[209px] right-[209px] top-[186px] flex flex-col items-start justify-start gap-2.5">
            <div
              className="relative self-stretch text-left text-[#000000]"
              style={{
                font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              The air inlet of this vacuum cleaner is designed to resemble the
              nozzle of a vector engine and can be rotated horizontally and
              vertically to accommodate different cleaning angles and positions.
            </div>

            <div
              className="relative self-stretch text-left text-[#000000]"
              style={{
                font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              这种吸尘器的进气口设计成类似于矢量发动机的喷口，可以在水平和垂直方向上旋转，从而适应不同的清洁角度和位置。
            </div>
          </div>

          <div className="absolute bottom-[581.5px] left-[209px] right-[209px] top-[261.5px] flex flex-col items-start justify-start gap-2.5">
            <div
              className="relative self-stretch text-left text-[#000000]"
              style={{
                font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              This vacuum cleaner can automatically or manually adjust the size
              of the air inlet according to different cleaning needs, thus
              changing the strength and range of suction power. no need for any
              suction head accessories, eliminating the need for lost
              accessories.
            </div>

            <div
              className="relative self-stretch text-left text-[#000000]"
              style={{
                font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              这种吸尘器可以根据不同的清洁需求，自动或手动调节进气口的大小，从而改变吸力的强度和范围。无需任何吸头配件，免去配件丢失的困扰。
            </div>
          </div>

          <div className="absolute" style={{ inset: "0" }}>
            <img
              className="absolute bottom-[-0.33px] left-[209px] top-[370px] w-[697.99px]"
              src="vectorscope-cj-2.png"
            />

            <img
              className="absolute bottom-[0.21px] left-[906.99px] top-[638.395751953125px] w-[324.01px]"
              src="vectorscope-xj-4.png"
            />

            <img
              className="absolute bottom-[268.6px] left-[906.99px] top-[370px] w-[324.01px]"
              src="vectorscope-xj-3.png"
            />
          </div>
        </div>

        <div className="relative h-[1024px] shrink-0 self-stretch bg-[#d7d7d7]">
          <div className="absolute bottom-[624px] left-[209px] right-[626px] top-[282px] flex flex-col items-start justify-start gap-2.5">
            <div
              className="relative self-stretch text-left text-[#000000]"
              style={{
                font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              The structure of this vacuum cleaner also draws on the principle
              of jet vector engines, with reference to the multi-turbofan design
              of jet engines, using 3 groups of motors, each with 18 fan blades
              designed to provide jet-engine-like real power, using high-speed
              airflow to generate powerful suction while reducing noise and
              power consumption.
            </div>

            <div
              className="relative self-stretch text-left text-[#000000]"
              style={{
                font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              这种吸尘器的结构也借鉴了喷气式矢量发动机的原理，参考喷气式发动机的多涡轮风扇设计，采用3组电机，每组18片扇叶设计，提供喷气式发动机般真实的强劲动力，利用高速气流产生强大的吸力，同时降低噪音和耗电。
            </div>
          </div>

          <img
            className="absolute bottom-0 left-[834px] right-0 top-0"
            src="vectorscope-cj-6.png"
          />

          <div className="absolute left-[209px] top-[133px] flex w-[397px] flex-col items-start justify-start gap-0">
            <div
              className="relative text-left text-[#000000]"
              style={{
                font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)",
              }}
            >
              Powerful power
            </div>

            <div
              className="relative text-left text-[#202020]"
              style={{
                font: "var(--cn, 300 40px/150% 'PingFang SC', sans-serif)",
              }}
            >
              强劲动力
            </div>
          </div>

          <img
            className="absolute bottom-0 left-[209px] right-[626px] top-[457px]"
            src="vectorscope-xj-5.png"
          />
        </div>

        <div className="relative h-[1024px] shrink-0 self-stretch">
          <img
            className="absolute left-0 right-[209px] top-0 h-[698px]"
            src="vectorscope-cj-7.png"
          />

          <div className="absolute left-[209px] top-[98px] flex flex-col items-start justify-start gap-0">
            <div
              className="relative text-left text-[#000000]"
              style={{
                font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)",
              }}
            >
              Crazy Structure
            </div>

            <div
              className="relative text-left text-[#202020]"
              style={{
                font: "var(--cn, 300 40px/150% 'PingFang SC', sans-serif)",
              }}
            >
              疯狂结构
            </div>
          </div>

          <div className="absolute" style={{ inset: "0" }}>
            <img
              className="absolute left-[521.0000000000073px] right-[401.76px] top-[694.89px] h-[165.1px]"
              src="vectorscope-cj-8.png"
            />

            <div className="static h-[66.01px] w-[336.59px]">
              <div className="absolute left-[1100.16796875px] right-[103.83px] top-[748.19px] flex flex-col items-start justify-start gap-0">
                <div
                  className="relative text-left text-[#000000]"
                  style={{
                    font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  Magnetic charging cable
                </div>

                <div
                  className="relative text-left text-[#000000]"
                  style={{
                    font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  磁吸充电线
                </div>
              </div>

              <svg
                className="absolute left-[999.58203125px] right-[364.95px] top-[742.18px] overflow-visible"
                style={{}}
                width="77"
                height="31"
                viewBox="0 0 77 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M76.0514 30.2332H35.0955L0.582031 0.179199"
                  stroke="black"
                />
              </svg>
            </div>

            <div className="static h-[104.48px] w-[279.45px]">
              <div className="absolute left-[1008.21484375px] right-[301.79px] top-[813.91px] flex flex-col items-start justify-start gap-0">
                <div
                  className="relative text-left text-[#000000]"
                  style={{
                    font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  Touch Switch
                </div>

                <div
                  className="relative text-left text-[#000000]"
                  style={{
                    font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  触摸开关
                </div>
              </div>

              <svg
                className="absolute left-[858.76953125px] right-[461.58px] top-[769.43px] overflow-visible"
                style={{}}
                width="121"
                height="69"
                viewBox="0 0 121 69"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M120.416 68.9518H79.4602L0.769531 0.428711"
                  stroke="black"
                />
              </svg>
            </div>

            <div className="static h-[203.06px] w-[424.33px]">
              <div className="absolute left-[953.515625px] right-[323.48px] top-[907.68px] flex flex-col items-start justify-start gap-0">
                <div
                  className="relative text-left text-[#000000]"
                  style={{
                    font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  Three-layer filter
                </div>

                <div
                  className="relative text-left text-[#000000]"
                  style={{
                    font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  三层滤网
                </div>
              </div>

              <svg
                className="absolute left-[692.18359375px] right-[514.97px] top-[764.62px] overflow-visible"
                style={{}}
                width="234"
                height="168"
                viewBox="0 0 234 168"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M233.034 167.72H192.078L0.183594 0.619629"
                  stroke="black"
                />
              </svg>
            </div>

            <div className="static h-[116.21px] w-[439.71px]">
              <div className="absolute left-[1106.56640625px] right-[246.43px] top-[642px] flex flex-col items-start justify-start gap-0">
                <div
                  className="relative text-left text-[#000000]"
                  style={{
                    font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  Turbofan
                </div>

                <div
                  className="relative text-left text-[#000000]"
                  style={{
                    font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  涡轮风扇
                </div>
              </div>

              <svg
                className="absolute left-[753.8515625000073px] right-[365.4px] top-[666.04px] overflow-visible"
                style={{}}
                width="322"
                height="93"
                viewBox="0 0 322 93"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M321.596 0.043457H106.693L0.851562 92.2091"
                  stroke="black"
                />
              </svg>

              <svg
                className="absolute left-[947.5859375px] right-[364.48px] top-[666.04px] overflow-visible"
                style={{}}
                width="129"
                height="76"
                viewBox="0 0 129 76"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M128.516 0.043457H87.5598L0.585938 75.7795"
                  stroke="black"
                />
              </svg>

              <svg
                className="absolute left-[809.9921875px] right-[483.21px] top-[666.04px] overflow-visible"
                style={{}}
                width="148"
                height="93"
                viewBox="0 0 148 93"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M147.789 0.043457H106.833L0.992188 92.2091"
                  stroke="black"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="relative h-[1024px] shrink-0 self-stretch bg-[#f2f2f2]">
          <img
            className="absolute bottom-[683px] left-[209px] right-[834px] top-0"
            src="vectorscope-sy-9.png"
          />

          <div className="absolute bottom-[683px] left-[626px] right-[209px] top-0 flex flex-col items-start justify-center gap-2.5">
            <div
              className="relative self-stretch text-left text-[#000000]"
              style={{
                font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              The magnetic power cord provides a more convenient and quicker
              experience, and can be charged with your eyes closed.
            </div>

            <div
              className="relative self-stretch text-left text-[#000000]"
              style={{
                font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              磁吸式电源线提供更方便快捷的使用体验，闭眼也可充电。
            </div>
          </div>

          <div className="absolute bottom-[341px] left-[209px] right-[626px] top-[341px] flex flex-col items-start justify-center gap-2.5">
            <div
              className="relative self-stretch text-left text-[#000000]"
              style={{
                font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              Touch switch, touch to use, leave the automatic shutdown, while
              taking into account the state of the suction port adjustment slide
              knob, more humane and convenient to use.
            </div>

            <div
              className="relative self-stretch text-left text-[#000000]"
              style={{
                font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              触摸式开关，触碰使用，离开自动关闭，同时兼顾吸气口状态调节滑钮，更加人性化，方便使用。
            </div>
          </div>

          <img
            className="absolute bottom-[341px] left-[834px] right-[209px] top-[341px]"
            src="vectorscope-sy-10.png"
          />

          <img
            className="absolute bottom-0 left-[209px] right-[834px] top-[683px]"
            src="vectorscope-sy-11.png"
          />

          <div className="absolute bottom-0 left-[626px] right-[209px] top-[683px] flex flex-col items-start justify-center gap-2.5">
            <div
              className="relative self-stretch text-left text-[#000000]"
              style={{
                font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              Three-layer filter design, layers of filtration, wet and dry.
            </div>

            <div
              className="relative self-stretch text-left text-[#000000]"
              style={{
                font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              三层滤网设计，层层过滤，干湿并用。
            </div>
          </div>

          <div
            className="absolute bottom-[1024px] left-[209px] right-[209px] top-0 border-solid border-[#adadad]"
            style={{
              borderWidth: "1px 0 0 0",
              transformOrigin: "0 0",
              transform: "rotate(0deg) scale(1, 1)",
            }}
          ></div>

          <div
            className="absolute bottom-[683px] left-[209px] right-[209px] top-[341px] border-solid border-[#adadad]"
            style={{
              borderWidth: "1px 0 0 0",
              transformOrigin: "0 0",
              transform: "rotate(0deg) scale(1, 1)",
            }}
          ></div>

          <div
            className="absolute bottom-[341px] left-[209px] right-[209px] top-[683px] border-solid border-[#adadad]"
            style={{ borderWidth: "1px 0 0 0" }}
          ></div>

          <div
            className="absolute left-0 top-[1024px] h-0 w-[1440px] border-solid border-[#000000]"
            style={{
              borderWidth: "1px 0 0 0",
              transformOrigin: "0 0",
              transform: "rotate(0deg) scale(1, 1)",
            }}
          ></div>
        </div>

        <div className="relative h-[1024px] shrink-0 self-stretch overflow-hidden bg-[#d9d9d9] pb-[120px] pl-[183px] pr-[183px] pt-[120px]">
          <div className="absolute left-[209px] right-[834px] top-[calc(50%_-_90px)] flex flex-col items-start justify-start gap-[33px]">
            <div className="relative flex shrink-0 flex-col items-start justify-start gap-2.5 self-stretch">
              <div
                className="relative self-stretch text-left text-[#000000]"
                style={{
                  font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                These vacuum cleaners are also lightweight, easy to operate and
                durable, and can meet the cleaning needs of different users.
              </div>

              <div
                className="relative self-stretch text-left text-[#000000]"
                style={{
                  font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                这种吸尘器还具有轻便、易操作、耐用等特点，可以满足不同用户的清洁需求。
              </div>
            </div>

            <div className="relative flex shrink-0 flex-col items-start justify-start gap-2.5 self-stretch">
              <div
                className="relative self-stretch text-left text-[#000000]"
                style={{
                  font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                An innovative cleaning tool that combines many advantages to
                provide users with a better cleaning experience.
              </div>

              <div
                className="relative self-stretch text-left text-[#000000]"
                style={{
                  font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                一款集多种优势于一身的创新型清洁工具，为用户提供了更好的清洁体验。
              </div>
            </div>
          </div>

          <div className="absolute bottom-[216px] left-[626px] right-[209px] top-[216px] bg-[#545454]"></div>
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
      </div>

      <div  className="absolute left-[220px] right-[220px] top-[10px] flex flex-row items-start justify-between"
        style={{ flexWrap: "wrap" }}>
        <div
          className="relative text-left text-[#ffffff]"
          style={{ font: "600 12px/150% 'PingFang SC', sans-serif" }}
        >
          Vectorscope device
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
};
