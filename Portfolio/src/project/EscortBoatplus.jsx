import React from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box } from "@react-three/drei";
import { EscortPlusModel } from "./EscortPlusModel";
import { useNavigate } from "react-router-dom";


export default function EscortBoatplus({ ...props }) {
  const goNavigate = useNavigate(); //在Home组件里初始化一个uN对
 
  const goEscort = () => {
    goNavigate("/Escort");
  };


  return (
    <div className="relative h-[1024px] w-[1440px] bg-[#ffffff]">
      <div className="absolute left-0 right-0 top-[70px] flex flex-col items-start justify-start gap-0">
        <div className="relative flex h-[900px] w-[1440px] shrink-0 flex-col items-center justify-center gap-2.5 bg-[#ffffff]">
          {/* <img className="flex-1 w-[1440px] relative" src="escortboat-zhutu.png" /> */}
          <Canvas
            shadows
            dpr={[1, 2]}
            camera={{ fov: 75 }}
            className=" relative flex-1 self-stretch bg-[#ffffff]"
          >
            <ambientLight intensity={2} />
            <directionalLight
              color="white"
              position={[2, 3, 5]}
              intensity={1} />
            <Suspense fallback={null}>
              <EscortPlusModel />
              {/* <Box /> */}
            </Suspense>
            <OrbitControls 
            enableZoom={false}
            autoRotateSpeed={0.5}
             autoRotate />
          </Canvas>

          <div className="absolute left-[calc(50%_-_400px)] top-[715px] flex w-[800px] shrink-0 flex-col items-center justify-start gap-2.5">
            <div
              className="relative self-stretch text-center text-[#000000]"
              style={{
                font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              Escort boat plus The new Lifeboat Design Voyage Edition
              (hereinafter referred to as Escort+) is specially designed for
              rescue conditions in the open sea
            </div>

            <div
              className="relative self-stretch text-center text-[#000000]"
              style={{
                font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              Escort boat plus 新型救生船设计远航版(以下简称Escort+)
              为专门针对远海救援条件所设计
            </div>
          </div>

          <div
            className="absolute left-[calc(50%_-_450px)] top-[293px] flex shrink-0 flex-col items-center justify-center gap-5"

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

        <div className="relative flex h-[2048px] w-[1440px] shrink-0 flex-row items-center justify-center gap-2.5 bg-[#d9d9d9] p-2.5">
          <div className="relative flex shrink-0 flex-col items-start justify-center gap-0">
            <div className="relative flex w-[450px] shrink-0 flex-col items-start justify-start gap-0">
              <div
                className="relative text-left text-[#000000]"
                style={{
                  font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Separation of functions
              </div>

              <div
                className="relative text-left text-[#202020]"
                style={{
                  font: "var(--cn, 300 40px/150% 'PingFang SC', sans-serif)",
                }}
              >
                功能分割
              </div>
            </div>

            <div className="relative flex shrink-0 flex-col items-start justify-start gap-[145px]">
              <div className="relative flex shrink-0 flex-row items-center justify-start gap-5">
                <img
                  className="relative h-[531px] w-[605px] shrink-0"
                  src="escortboat-gongnengfenge.png" />

                <div className="relative flex w-[397px] shrink-0 flex-col items-start justify-start gap-5">
                  <div className="relative flex shrink-0 flex-col items-start justify-start gap-0">
                    <div
                      className="relative text-left text-[#000000]"
                      style={{
                        font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
                      }}
                    >
                      Submarine-class covers
                    </div>

                    <div
                      className="relative text-left text-[#000000]"
                      style={{
                        font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
                      }}
                    >
                      潜艇级封盖
                    </div>
                  </div>

                  <div className="relative flex w-[397px] shrink-0 flex-col items-start justify-start gap-2.5">
                    <div
                      className="relative self-stretch text-left text-[#000000]"
                      style={{
                        font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                      }}
                    >
                      The submarine-level closed top cover ensures no water
                      leakage even if there is water immersion, and is equipped
                      with a ventilation valve to ensure the internal air
                      circulation of the lifeboat
                    </div>

                    <div
                      className="relative self-stretch text-left text-[#000000]"
                      style={{
                        font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                      }}
                    >
                      潜艇级别封闭顶盖，即使有水浸没也能保证不漏水，并设置有通气阀，保证救生艇内部空气循环
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative flex shrink-0 flex-col items-start justify-start gap-0">
                <div className="relative flex shrink-0 flex-col items-start justify-start gap-0">
                  <div
                    className="relative text-left text-[#000000]"
                    style={{
                      font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    Rigid skeleton + Waterproof technology cloth
                  </div>

                  <div
                    className="relative text-left text-[#000000]"
                    style={{
                      font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    刚性骨架+防水科技布
                  </div>
                </div>

                <div className="relative flex shrink-0 flex-row items-center justify-start gap-5">
                  <div className="relative flex shrink-0 flex-col items-start justify-start gap-[79px]">
                    <div className="relative flex w-[397px] shrink-0 flex-col items-start justify-start gap-2.5">
                      <div
                        className="relative self-stretch text-left text-[#000000]"
                        style={{
                          font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                        }}
                      >
                        The cylindrical sleeve forms the central structural
                        skeleton, which is contracted by a spring drive when
                        unfolded, so that the eight external expansion elastic
                        structural steel expand outward and form a cabin inside
                      </div>

                      <div
                        className="relative self-stretch text-left text-[#000000]"
                        style={{
                          font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                        }}
                      >
                        圆柱形套筒组成中心结构骨架，展开时通过弹簧驱动收缩，从而使八根外扩弹性结构钢外扩，在内部形成舱室
                      </div>
                    </div>

                    <div className="relative flex w-[397px] shrink-0 flex-col items-start justify-start gap-2.5">
                      <div
                        className="relative self-stretch text-left text-[#000000]"
                        style={{
                          font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                        }}
                      >
                        On the skeleton, a skin of the Ministry of Science and
                        Technology is attached, which is superimposed on a
                        variety of composite materials to ensure strength and
                        also play a waterproof role
                      </div>

                      <div
                        className="relative self-stretch text-left text-[#000000]"
                        style={{
                          font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                        }}
                      >
                        在骨架上附有科技部蒙皮，由多种复合材料叠加而成，保证强度的同时也起到防水的作用
                      </div>
                    </div>
                  </div>

                  <img
                    className="relative h-[409px] w-[605px] shrink-0"
                    src="escortboat-gangxingguyjia.png" />
                </div>
              </div>

              <div className="relative flex shrink-0 flex-row items-center justify-start gap-5">
                <img
                  className="relative h-[532px] w-[605px] shrink-0"
                  src="escortboat-fangshuikeji.png" />

                <div className="relative flex w-[397px] shrink-0 flex-col items-start justify-start gap-2.5">
                  <div
                    className="relative self-stretch text-left text-[#000000]"
                    style={{
                      font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    There are also rescue ropes and ladder grippers on the
                    periphery of the lifeboat
                  </div>

                  <div
                    className="relative self-stretch text-left text-[#000000]"
                    style={{
                      font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    在救生艇外围还设有救援绳以及爬梯抓手
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex h-[1024px] w-[1440px] shrink-0 flex-col items-center justify-center gap-2.5 bg-[#ffffff] p-2.5">
          <div className="relative flex shrink-0 flex-col items-start justify-start gap-[11px]">
            <div className="relative flex shrink-0 flex-col items-start justify-start gap-0">
              <div
                className="relative text-left text-[#000000]"
                style={{
                  font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Core life-saving equipment storage compartment
              </div>

              <div
                className="relative text-left text-[#000000]"
                style={{
                  font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
                }}
              >
                核心救生用具收纳仓
              </div>
            </div>

            <div className="relative flex shrink-0 flex-row items-center justify-start gap-6">
              <div className="relative flex shrink-0 flex-col items-start justify-start gap-[45px]">
                <div className="relative flex w-[393px] shrink-0 flex-col items-start justify-start gap-2.5">
                  <div
                    className="relative self-stretch text-left text-[#000000]"
                    style={{
                      font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    The bottom storage compartment has four inner compartments,
                    from the inside to the outside, and the innermost layer is
                    survival materials; The second layer is the auxiliary oxygen
                    supply equipment; The third layer is a water-absorbing
                    material used to absorb the liquid leaking into the cabin;
                    Below there is a layer of GPS and other related electronic
                    modules
                  </div>

                  <div
                    className="relative self-stretch text-left text-[#000000]"
                    style={{
                      font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    底部收纳仓有四个内舱，由内到外，最内层是生存物资；第二层是辅助供氧设备；第三层是吸水材料，用于吸收漏进舱内的液体；下面有一层是GPS等相关电子模块
                  </div>
                </div>

                <img
                  className="relative h-[158px] w-[188px] shrink-0"
                  src="escortboat-shounacangsmall.png" />
              </div>

              <img
                className="relative h-[718px] w-[605px] shrink-0"
                src="escortboat-shounacangbig.png" />
            </div>
          </div>
        </div>

        <div className="relative flex h-[1024px] w-[1440px] shrink-0 flex-col items-center justify-center gap-2.5 bg-[#d9d9d9] p-2.5">
          <div className="relative flex shrink-0 flex-col items-start justify-start gap-[89px]">
            <div className="relative flex w-[397px] shrink-0 flex-col items-start justify-start gap-0">
              <div
                className="relative text-left text-[#000000]"
                style={{
                  font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Convenient to use
              </div>

              <div
                className="relative text-left text-[#202020]"
                style={{
                  font: "var(--cn, 300 40px/150% 'PingFang SC', sans-serif)",
                }}
              >
                便捷使用
              </div>
            </div>

            <img
              className="relative h-[284px] w-[1022px] shrink-0"
              src="escortboat-shiyong.png" />
          </div>
        </div>

        <div className="relative flex h-[1024px] w-[1440px] shrink-0 flex-col items-center justify-center gap-2.5 bg-[#ededed] p-2.5">
          <div className="relative flex shrink-0 flex-col items-start justify-start gap-[33px]">
            <div className="relative flex w-[397px] shrink-0 flex-col items-start justify-start gap-0">
              <div
                className="relative text-left text-[#000000]"
                style={{
                  font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Rescue color
              </div>

              <div
                className="relative text-left text-[#202020]"
                style={{
                  font: "var(--cn, 300 40px/150% 'PingFang SC', sans-serif)",
                }}
              >
                救援配色
              </div>
            </div>

            <div className="static h-[257px] w-[1022px] shrink-0">
              <div className="static h-[257px] w-[1022px]">
                <div className="absolute left-0 top-[153px] flex flex-col items-end justify-start gap-0">
                  <div className="relative flex shrink-0 flex-row items-start justify-start">
                    <div className="relative h-[100px] w-[100px] shrink-0 rounded-[50%] bg-[#efa043]"></div>

                    <div
                      className="relative h-[100px] w-[100px] shrink-0 rounded-[50%] bg-[#ee550a]"
                      style={{ margin: "0 0 0 -20px" }}
                    ></div>
                  </div>

                  <div className="relative flex w-[1022px] shrink-0 flex-col items-start justify-start gap-[33px]">
                    <div className="relative flex shrink-0 flex-col items-start justify-start gap-0">
                      <div
                        className="relative text-left text-[#000000]"
                        style={{
                          font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
                        }}
                      >
                        Striking rescue color
                      </div>

                      <div
                        className="relative text-left text-[#000000]"
                        style={{
                          font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
                        }}
                      >
                        醒目的救援色
                      </div>
                    </div>

                    <div className="relative flex shrink-0 flex-col items-start justify-start gap-2.5 self-stretch">
                      <div
                        className="relative self-stretch text-left text-[#000000]"
                        style={{
                          font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                        }}
                      >
                        The upward color of the hull is a striking red and
                        orange combination, which makes it easier to notice the
                        lifeboat from the air and the surface during the search,
                        increasing the chance of rescue and shortening the
                        detection time
                      </div>

                      <div
                        className="relative self-stretch text-left text-[#000000]"
                        style={{
                          font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                        }}
                      >
                        船体向上颜色为醒目的红色和橙色搭配，可以在搜寻时从空中和水面更加容易注意到救生艇，增加获救机会和缩短发现时间
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="static h-[260px] w-[1022px] shrink-0">
              <div className="static h-[260px] w-[1022px]">
                <div className="absolute left-0 top-[443px] flex flex-col items-end justify-start gap-0">
                  <div className="relative flex shrink-0 flex-row items-start justify-start">
                    <div className="relative h-[100px] w-[100px] shrink-0 rounded-[50%] bg-[#ffffff]"></div>

                    <div
                      className="relative h-[100px] w-[100px] shrink-0 rounded-[50%] bg-[#d9d9d9]"
                      style={{ margin: "0 0 0 -20px" }}
                    ></div>
                  </div>

                  <div className="relative flex w-[1022px] shrink-0 flex-col items-start justify-start gap-9">
                    <div className="relative flex shrink-0 flex-col items-start justify-start gap-0">
                      <div
                        className="relative text-left text-[#000000]"
                        style={{
                          font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
                        }}
                      >
                        Bionic protective color
                      </div>

                      <div
                        className="relative text-left text-[#000000]"
                        style={{
                          font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
                        }}
                      >
                        仿生保护色
                      </div>
                    </div>

                    <div className="relative flex shrink-0 flex-col items-start justify-start gap-2.5 self-stretch">
                      <div
                        className="relative self-stretch text-left text-[#000000]"
                        style={{
                          font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                        }}
                      >
                        The color of the downward hull is gray-white, and the
                        bionic uses the color of the shark&#039;s belly, which
                        can make the lifeboat blend with the sky when the fish
                        look up from the water, reducing the probability of the
                        lifeboat being attacked by underwater fish
                      </div>

                      <div
                        className="relative self-stretch text-left text-[#000000]"
                        style={{
                          font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                        }}
                      >
                        船体向下的颜色为灰白色，仿生的使用了鲨鱼腹部的颜色，可以使鱼类从水下往上看时救生船与天空融为一体，降低了救生船被水下鱼类攻击的概率
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex h-[826px] w-[1440px] shrink-0 flex-col items-center justify-start gap-[15px] bg-[#3c3c3c] pb-[60px] pl-0 pr-0 pt-[60px]">
          <svg
            className="relative shrink-0 overflow-visible"
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

          <div className="relative flex w-[1000px] shrink-0 flex-col items-start justify-start gap-[15px]">
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

      <div className="absolute left-0 right-0 top-[0px] flex flex-col items-center justify-start gap-0 bg-[#464646] pb-1 pl-0 pr-0 pt-0"onClick={goEscort}>
        <div
          className="relative text-left text-[#ffffff]"
          style={{ font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)" }}
        >
          ← Escort boat
        </div>

        <div className="relative flex w-[1022px] shrink-0 flex-col items-center justify-start gap-0">
          <div
            className="relative self-stretch text-center text-[#ffffff]"
            style={{
              font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
            }}
          >
            The Escort boat plus version is an ocean-going closed lifeboat
            designed using the same principle, click left to view the offshore
            open lifeboat Escort boat
          </div>

          <div
            className="relative self-stretch text-center text-[#ffffff]"
            style={{
              font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
            }}
          >
            Escort boat
            plus版本是运用相同原理设计的远洋封闭式救生船，点击向左可查看近海敞开式救生船Escort
            boat
          </div>
        </div>
      </div>

      <div className="absolute left-[220px] right-[220px] top-[80px] flex flex-row items-start justify-between">
        <div
          className="relative text-left text-[#1a1a1a]"
          style={{ font: "600 12px/150% 'PingFang SC', sans-serif" }}
        >
          Escort boat 2.0
        </div>

        <div className="relative flex shrink-0 flex-row items-start justify-start gap-5">
          <div
            className="relative text-left text-[#1a1a1a]"
            style={{ font: "400 12px/150% 'PingFang SC', sans-serif" }}
          >
            Escort boat
          </div>

          <div
            className="relative text-left text-[#1a1a1a]"
            style={{ font: "400 12px/150% 'PingFang SC', sans-serif" }}
          >
            Design journal | 设计日志
          </div>
        </div>
      </div>
    </div>
  );
}
