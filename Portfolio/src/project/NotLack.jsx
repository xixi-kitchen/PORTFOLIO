import React from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { NotlackModel } from "./NotlackModel";

export const NotLack = ({ ...props }) => {
  return (
    <div className="relative h-[1024px] w-[1440px] bg-[#ffffff]">
      <div className="relative flex flex-col items-center justify-start gap-0">
        <div className="relative flex h-[970px] shrink-0 flex-col items-start justify-start gap-2.5 self-stretch">
          {/* <img
            className="relative flex-1 self-stretch"
            src="notlack-zhutu.png"
          /> */}
          <Canvas
            shadows
            dpr={[1, 2]}
            camera={{ fov: 75 }}
            className=" relative flex-1 self-stretch bg-[#ffffff]"
          >
            <ambientLight intensity={0.5} />
            <directionalLight
              color="white"
              position={[-2, 3, 5]}
              intensity={2}
            />
            <Suspense fallback={null}>
              <NotlackModel />
            </Suspense>
            <OrbitControls autoRotate />
          </Canvas>

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

        <div className="relative flex shrink-0 flex-col items-start justify-start gap-2.5">
          <div className="absolute left-[calc(50%_-_720px)] top-0 h-[1019px] w-[1440px] shrink-0 bg-[#f9f9f9]"></div>

          <div className="relative flex h-[1024px] shrink-0 flex-col items-start justify-start gap-2.5">
            <img
              className="relative h-[1024px] w-[1440px] shrink-0"
              src="miss-xinyuxin.png"
            />

            <div className="absolute left-[305px] top-[115px] flex shrink-0 flex-col items-center justify-start gap-[390px]">
              <div className="relative flex shrink-0 flex-col items-center justify-start gap-3">
                <div
                  className="relative text-left text-[#000000]"
                  style={{ font: "600 40px/150% 'PingFang SC', sans-serif" }}
                >
                  Bringing hearts and minds closer together
                </div>

                <div
                  className="relative text-left text-[#202020]"
                  style={{ font: "300 40px/150% 'PingFang SC', sans-serif" }}
                >
                  让心与心靠的更近
                </div>
              </div>

              <div className="relative flex shrink-0 flex-col items-center justify-start gap-5">
                <div className="relative flex shrink-0 flex-col items-start justify-start gap-2.5 p-2.5">
                  <div className="relative flex shrink-0 flex-col items-start justify-start gap-[22px]">
                    <div
                      className="relative w-[809px] text-left text-[#000000]"
                      style={{
                        font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                      }}
                    >
                      The small gap at the top of the pencil holder also
                      reflects the small absence in everyone&#039;s heart, and
                      this small absence needs to be filled by someone else! The
                      heart-shaped gap in the color scheme of the couple is the
                      source of the &quot;heart missing&quot; pencil holder,
                      which means that two people must be together for the heart
                      and the missing heart to be filled and combined into a
                      complete heart.
                    </div>

                    <div
                      className="relative w-[797px] text-left text-[#000000]"
                      style={{
                        font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                      }}
                    >
                      笔筒顶部的小小缺口也反映了每个人心中的那份小小缺失，而这个小小缺失就需要别人来帮你填补啦!其中情侣配色搭配心形缺口则是“心缺”笔筒的来源，一定要两个人在一起，心与心的缺失才可以补全，组合成一颗完整的心。
                    </div>
                  </div>
                </div>

                <div className="relative flex shrink-0 flex-col items-start justify-start gap-2.5 p-2.5">
                  <div className="relative flex shrink-0 flex-row items-start justify-start gap-[327px]">
                    <div className="relative flex shrink-0 flex-col items-center justify-start gap-0">
                      <div
                        className="relative text-center text-[#000000]"
                        style={{
                          font: "600 12px/150% 'PingFang SC', sans-serif",
                        }}
                      >
                        Heart shape - couple
                      </div>

                      <div
                        className="relative text-center text-[#000000]"
                        style={{
                          font: "300 12px/150% 'PingFang SC', sans-serif",
                        }}
                      >
                        心形——情侣
                      </div>
                    </div>

                    <div className="relative flex shrink-0 flex-col items-center justify-start gap-0">
                      <div
                        className="relative text-left text-[#000000]"
                        style={{
                          font: "600 12px/150% 'PingFang SC', sans-serif",
                        }}
                      >
                        Triangles - Friends
                      </div>

                      <div
                        className="relative text-left text-[#000000]"
                        style={{
                          font: "300 12px/150% 'PingFang SC', sans-serif",
                        }}
                      >
                        三角形——朋友
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex h-[2048px] shrink-0 flex-row items-start justify-start gap-2.5 overflow-hidden bg-[#171717] pb-[66px] pl-[220px] pr-[220px] pt-[66px]">
          <div className="relative flex shrink-0 flex-col items-start justify-start gap-[100px]">
            <div className="relative flex shrink-0 flex-col items-center justify-start gap-[34px]">
              <div className="relative flex shrink-0 flex-col items-center justify-start gap-0">
                <div
                  className="relative text-left text-[#d3d3d3]"
                  style={{
                    font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  Two forms of opening
                </div>

                <div
                  className="relative text-left text-[#d3d3d3]"
                  style={{
                    font: "var(--cn, 300 40px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  两种打开形式
                </div>
              </div>

              <div className="relative flex shrink-0 flex-col items-start justify-start gap-[15px]">
                <div className="relative flex w-[1000px] shrink-0 flex-col items-start justify-start gap-[18px]">
                  <div
                    className="relative w-[998px] text-left text-[#d3d3d3]"
                    style={{
                      font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    Traditional pen pouches are lying flat, pens are bashed
                    together one by one, when you are looking for a pen, if he
                    happens to be at the bottom, then you will undoubtedly have
                    to search for a long time before you can find it, and
                    sometimes you will not even find it.
                    <br />
                    If it is a pen holder, it is naturally convenient to find
                    the pen you need, but with it you cannot easily get to short
                    items such as erasers, lead cartridges, etc.
                  </div>

                  <div
                    className="relative w-[998px] text-left text-[#d3d3d3]"
                    style={{
                      font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    传统的笔袋都是平躺式，笔是一个一个垒在一起，当你要寻找一支笔的时候，如果他碰巧在最下面，那么你无疑要寻找很久才可以找到它，有时甚至会找不到。
                    <br />
                    如果是笔筒，寻找自己需要的笔自然是方便，但随之而来的你无法轻松拿到短小的物品，例如橡皮、铅芯等。
                  </div>
                </div>

                <div className="relative flex w-[1000px] shrink-0 flex-row items-start justify-between">
                  <div className="relative flex shrink-0 flex-col items-start justify-start gap-[7px]">
                    <div
                      className="relative w-[484px] text-left text-[#d3d3d3]"
                      style={{
                        font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)",
                      }}
                    >
                      Combination of pen holder and pen pouch for more
                      convenient access
                    </div>

                    <div
                      className="relative w-[383px] text-left text-[#d3d3d3]"
                      style={{
                        font: "var(--cn, 300 40px/150% 'PingFang SC', sans-serif)",
                      }}
                    >
                      笔筒和笔袋的结合，更加方便的拿取
                    </div>
                  </div>

                  <img
                    className="relative h-[664px] w-[801px] shrink-0"
                    src="miss-lianghzongdakai.png"
                  />
                </div>
              </div>
            </div>

            <div className="relative flex w-[1000px] shrink-0 flex-row items-end justify-between">
              <div className="relative flex shrink-0 flex-col items-start justify-start gap-[55px]">
                <div className="relative flex shrink-0 flex-col items-start justify-start gap-0">
                  <div
                    className="relative text-left text-[#d49d9d]"
                    style={{
                      font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    Open from the side for easy access to small items
                  </div>

                  <div
                    className="relative text-left text-[#d49d9d]"
                    style={{
                      font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    从侧边打开，轻松拿取细小物品
                  </div>
                </div>

                <img
                  className="relative h-[311px] w-[407px] shrink-0"
                  src="miss-pingfang.png"
                />
              </div>

              <div className="relative flex shrink-0 flex-col items-end justify-start gap-[67px]">
                <div className="relative flex shrink-0 flex-col items-end justify-start gap-[15px]">
                  <div
                    className="relative text-left text-[#d49d9d]"
                    style={{
                      font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    Pull it from the top and easily choose the pen you want
                  </div>

                  <div
                    className="relative text-left text-[#d49d9d]"
                    style={{
                      font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    从顶部抽开，轻松选择自己想要的笔
                  </div>
                </div>

                <img
                  className="relative h-[523px] w-[493.03px] shrink-0"
                  src="miss-lifang.png"
                />
              </div>
            </div>

            <div className="relative flex shrink-0 flex-col items-start justify-start gap-[19px]">
              <div
                className="relative w-[1000px] text-left text-[#d3d3d3]"
                style={{
                  font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                The magnetic closure design also allows you to easily open and
                close the pouch without unnecessary operations. The entire pen
                bag has been a priority for efficiency, so you have a different
                experience.
              </div>

              <div
                className="relative w-[1000px] text-left text-[#d3d3d3]"
                style={{
                  font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                同时磁吸封口的设计也可以让你在不用多余操作的前提下轻松开合笔袋。整个笔袋都已效率优先，让你拥有不一样的体验。
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex h-[1024px] shrink-0 flex-col items-start justify-start gap-2.5 overflow-hidden bg-[#dbdbdb] pb-[93px] pl-[220px] pr-[220px] pt-[93px]">
          <div className="relative flex shrink-0 flex-col items-center justify-start gap-[65px]">
            <div className="relative flex shrink-0 flex-col items-center justify-start gap-[43px]">
              <div className="relative flex shrink-0 flex-col items-center justify-start gap-0">
                <div
                  className="relative text-left text-[#000000]"
                  style={{
                    font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  A variety of series colors
                </div>

                <div
                  className="relative text-left text-[#000000]"
                  style={{
                    font: "var(--cn, 300 40px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  多种系列色彩
                </div>
              </div>

              <div className="relative flex shrink-0 flex-col items-center justify-start gap-0">
                <div
                  className="relative text-left text-[#000000]"
                  style={{
                    font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  A variety of series of rich color scheme to meet the love of
                  different people
                </div>

                <div
                  className="relative text-left text-[#000000]"
                  style={{
                    font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  多种系列丰富的配色满足了不同人的喜爱
                </div>
              </div>
            </div>

            <div className="relative flex w-[1000px] shrink-0 flex-row items-center justify-between">
              <div className="relative flex shrink-0 flex-col items-start justify-start gap-[19px]">
                <div className="relative flex shrink-0 flex-col items-start justify-start gap-[9px]">
                  <div className="relative flex shrink-0 flex-col items-start justify-start gap-0">
                    <div
                      className="relative text-left text-[#000000]"
                      style={{
                        font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
                      }}
                    >
                      Couple color matching
                    </div>

                    <div
                      className="relative text-left text-[#000000]"
                      style={{
                        font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
                      }}
                    >
                      情侣配色
                    </div>
                  </div>

                  <div className="relative flex shrink-0 flex-col items-start justify-start gap-0">
                    <div
                      className="relative text-left text-[#000000]"
                      style={{
                        font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                      }}
                    >
                      When two people are together, there will be a complete
                      heart
                    </div>

                    <div
                      className="relative text-left text-[#000000]"
                      style={{
                        font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                      }}
                    >
                      当两个人在一起才会有一颗完整的心
                    </div>
                  </div>
                </div>

                <div className="relative flex shrink-0 flex-row items-start justify-start gap-5">
                  <div className="relative h-10 w-10 shrink-0 rounded-[50%] bg-[#ffc6bf]"></div>

                  <div className="relative h-10 w-10 shrink-0 rounded-[50%] bg-[#adc3ff]"></div>
                </div>
              </div>

              <div className="relative flex shrink-0 flex-col items-start justify-start gap-[69px]">
                <div className="relative flex shrink-0 flex-col items-start justify-start gap-2.5">
                  <img
                    className="relative h-60 w-[520px] shrink-0"
                    src="miss-lanse.png"
                  />

                  <div className="absolute left-[114px] top-[130px] h-[60px] w-[60px] shrink-0 rounded-[50%] bg-[#adc3ff]"></div>
                </div>

                <div className="relative flex shrink-0 flex-col items-start justify-start gap-2.5">
                  <img
                    className="relative h-60 w-[520px] shrink-0"
                    src="miss-hongse.png"
                  />

                  <div className="absolute left-[114px] top-[147px] h-[60px] w-[60px] shrink-0 rounded-[50%] bg-[#ffc6bf]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex h-[1024px] shrink-0 flex-col items-center justify-center gap-2.5 overflow-hidden bg-[#f8f8f8] pb-[33px] pl-[220px] pr-[220px] pt-[33px]">
          <div className="relative flex shrink-0 flex-col items-start justify-start gap-[30px]">
            <div className="relative flex shrink-0 flex-col items-start justify-start gap-0">
              <div
                className="relative text-left text-[#000000]"
                style={{
                  font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Series color scheme
              </div>

              <div
                className="relative text-left text-[#000000]"
                style={{
                  font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
                }}
              >
                系列配色
              </div>
            </div>

            <div className="relative flex shrink-0 flex-col items-start justify-start gap-[22px]">
              <div className="relative flex shrink-0 flex-col items-start justify-start gap-0">
                <div
                  className="relative text-left text-[#000000]"
                  style={{
                    font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  Sunset
                </div>

                <div className="relative flex shrink-0 flex-row items-start justify-start gap-0">
                  <img
                    className="relative h-[166.98px] w-[166.98px] shrink-0"
                    src="miss-sunset.png"
                  />

                  <img
                    className="relative h-[166.98px] w-[208.26px] shrink-0"
                    src="miss-sunset-1.png"
                  />

                  <img
                    className="relative h-[166.98px] w-[208.26px] shrink-0"
                    src="miss-sunset-2.png"
                  />

                  <img
                    className="relative h-[166.98px] w-[208.26px] shrink-0"
                    src="vmiss-sunset-3.png"
                  />

                  <img
                    className="relative h-[166.98px] w-[208.26px] shrink-0"
                    src="miss-sunset-4.png"
                  />
                </div>
              </div>

              <div className="relative flex shrink-0 flex-col items-start justify-start gap-0">
                <div
                  className="relative text-left text-[#000000]"
                  style={{
                    font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  Moss
                </div>

                <div className="relative flex shrink-0 flex-row items-start justify-start gap-0">
                  <img
                    className="relative h-[166.98px] w-[166.98px] shrink-0"
                    src="miss-moss.png"
                  />

                  <img
                    className="relative h-[166.98px] w-[208.26px] shrink-0"
                    src="miss-moss-1.png"
                  />

                  <img
                    className="relative h-[166.98px] w-[208.26px] shrink-0"
                    src="miss-moss-2.png"
                  />

                  <img
                    className="relative h-[166.98px] w-[208.26px] shrink-0"
                    src="miss-moss-3.png"
                  />
                </div>
              </div>

              <div className="relative flex shrink-0 flex-col items-start justify-start gap-0">
                <div
                  className="relative text-left text-[#000000]"
                  style={{
                    font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  Fairy
                </div>

                <div className="relative flex shrink-0 flex-row items-start justify-start gap-0">
                  <img
                    className="relative h-[166.98px] w-[166.98px] shrink-0"
                    src="miss-fairy.png"
                  />

                  <img
                    className="relative h-[166.98px] w-[208.26px] shrink-0"
                    src="miss-fairy-1.png"
                  />

                  <img
                    className="relative h-[166.98px] w-[208.26px] shrink-0"
                    src="miss-fairy-2.png"
                  />

                  <img
                    className="relative h-[166.98px] w-[208.26px] shrink-0"
                    src="miss-fairy-3.png"
                  />
                </div>
              </div>

              <div className="relative flex shrink-0 flex-col items-start justify-start gap-0">
                <div
                  className="relative text-left text-[#000000]"
                  style={{
                    font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  Docks
                </div>

                <div className="relative flex shrink-0 flex-row items-start justify-start gap-0">
                  <img
                    className="relative h-[166.98px] w-[166.98px] shrink-0"
                    src="miss-docks.png"
                  />

                  <img
                    className="relative h-[166.98px] w-[208.26px] shrink-0"
                    src="miss-docks-1.png"
                  />

                  <img
                    className="relative h-[166.98px] w-[208.26px] shrink-0"
                    src="miss-docks-2.png"
                  />

                  <img
                    className="relative h-[166.98px] w-[208.26px] shrink-0"
                    src="miss-docks-3.png"
                  />

                  <img
                    className="relative h-[166.98px] w-[208.26px] shrink-0"
                    src="miss-docks-4.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex h-[1024px] shrink-0 flex-col items-center justify-center gap-2.5 overflow-hidden bg-[#3f3f3f] pb-[114px] pl-[220px] pr-[220px] pt-[114px]">
          <div className="relative flex w-[1000px] shrink-0 flex-col items-center justify-start gap-10">
            <div className="relative flex shrink-0 flex-col items-center justify-start gap-0">
              <div
                className="relative text-left text-[#ffffff]"
                style={{
                  font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Material
              </div>

              <div
                className="relative text-left text-[#ffffff]"
                style={{
                  font: "var(--cn, 300 40px/150% 'PingFang SC', sans-serif)",
                }}
              >
                材料
              </div>
            </div>

            <div className="relative flex shrink-0 flex-col items-start justify-start gap-0 self-stretch">
              <div
                className="relative self-stretch text-left text-[#ffffff]"
                style={{
                  font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                The inner and outer parts of the pen case are made of ABS
                plastic as the skeleton, and the outer part is wrapped with
                edible grade silicone, which increases the strength and enhances
                the feel. The joints are made of magnetic material
              </div>

              <div
                className="relative self-stretch text-left text-[#ffffff]"
                style={{
                  font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                笔盒内外两部分均由ABS塑料为骨架，外部包裹食用级别硅胶所制造，增大强度同时增强手感。连接处均采用磁性材料
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex h-[1024px] w-[1440px] shrink-0 flex-col items-center justify-center gap-2.5 overflow-hidden bg-[#ffffff] pb-[103px] pl-[219px] pr-[219px] pt-[103px]">
          <div className="relative flex shrink-0 flex-col items-center justify-start gap-[54px]">
            <div className="relative flex shrink-0 flex-col items-center justify-start gap-0">
              <div
                className="relative text-left text-[#000000]"
                style={{
                  font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Structure &amp; process
              </div>

              <div
                className="relative text-left text-[#000000]"
                style={{
                  font: "var(--cn, 300 40px/150% 'PingFang SC', sans-serif)",
                }}
              >
                结构&amp;工艺
              </div>
            </div>

            <div className="relative flex shrink-0 flex-col items-start justify-start gap-1.5">
              <div className="relative flex shrink-0 flex-col items-start justify-start gap-5">
                <div className="relative flex shrink-0 flex-col items-start justify-start gap-1">
                  <div
                    className="relative text-left text-[#000000]"
                    style={{
                      font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    The overall structure consists of four parts, which are
                    connected by snaps (with magnets)
                  </div>

                  <div
                    className="relative text-left text-[#000000]"
                    style={{
                      font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    整体结构由四个部分组成，通过卡扣连接（搭配磁吸）
                  </div>
                </div>

                <div className="relative flex shrink-0 flex-col items-start justify-start gap-1">
                  <div
                    className="relative text-left text-[#000000]"
                    style={{
                      font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    The shape is simple and can be processed using ordinary
                    injection molding technology
                  </div>

                  <div
                    className="relative text-left text-[#000000]"
                    style={{
                      font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    造型简单，使用普通注塑成型技术即可加工完成
                  </div>
                </div>
              </div>

              <div className="relative flex w-[1000px] shrink-0 flex-row items-center justify-between">
                <img
                  className="relative h-[505px] w-[715px] shrink-0"
                  src="miss-structure.png"
                />

                <div className="relative flex shrink-0 flex-col items-start justify-start gap-[200px]">
                  <div className="relative flex shrink-0 flex-col items-start justify-start gap-1">
                    <div
                      className="relative text-left text-[#000000]"
                      style={{
                        font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
                      }}
                    >
                      Simple production
                    </div>

                    <div
                      className="relative text-left text-[#000000]"
                      style={{
                        font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
                      }}
                    >
                      生产简单
                    </div>
                  </div>

                  <div className="relative flex shrink-0 flex-col items-start justify-start gap-0">
                    <div
                      className="relative text-left text-[#000000]"
                      style={{
                        font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
                      }}
                    >
                      Low cost
                    </div>

                    <div
                      className="relative text-left text-[#000000]"
                      style={{
                        font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
                      }}
                    >
                      成本低
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex h-[1024px] shrink-0 flex-col items-center justify-center gap-2.5 overflow-hidden bg-[#ffffff] pb-[47px] pl-[220px] pr-[220px] pt-[47px]">
          <div className="relative flex shrink-0 flex-col items-center justify-start gap-[91px]">
            <div className="relative flex shrink-0 flex-col items-center justify-start gap-0">
              <div
                className="relative text-left text-[#000000]"
                style={{
                  font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Packaging
              </div>

              <div
                className="relative text-left text-[#000000]"
                style={{
                  font: "var(--cn, 300 40px/150% 'PingFang SC', sans-serif)",
                }}
              >
                包装
              </div>
            </div>

            <div className="relative flex w-[1000px] shrink-0 flex-row items-center justify-between">
              <img
                className="relative h-[514px] w-[602px] shrink-0"
                src="miss-packing-1.png"
              />

              <img
                className="relative h-[406px] w-[521px] shrink-0"
                src="miss-packing-2.png"
              />
            </div>

            <div className="relative flex shrink-0 flex-row items-start justify-start gap-[198px]">
              <div className="relative flex shrink-0 flex-col items-center justify-start gap-0">
                <div
                  className="relative text-left text-[#000000]"
                  style={{
                    font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  Eco-friendly
                </div>

                <div
                  className="relative text-left text-[#000000]"
                  style={{
                    font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  环保
                </div>
              </div>

              <div className="relative flex shrink-0 flex-col items-center justify-start gap-0">
                <div
                  className="relative text-left text-[#000000]"
                  style={{
                    font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  Simple packaging style
                </div>

                <div
                  className="relative text-left text-[#000000]"
                  style={{
                    font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  简约包装风格
                </div>
              </div>

              <div className="relative flex shrink-0 flex-col items-center justify-start gap-0">
                <div
                  className="relative text-left text-[#000000]"
                  style={{
                    font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  Reusable
                </div>

                <div
                  className="relative text-left text-[#000000]"
                  style={{
                    font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  可重复利用
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex h-[1024px] w-[1440px] shrink-0 flex-col items-center justify-start gap-2.5 overflow-hidden bg-[#5c5c5c] pb-20 pt-20">
          <div className="relative flex w-[1000px] shrink-0 flex-col items-start justify-start gap-[15px]">
            <svg
              className="relative shrink-0 self-stretch overflow-visible"
              style={{ transform: "translate(-1px, -1px)" }}
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

      <div className="absolute left-[220px] top-[10px] flex flex-row items-start justify-start gap-[747px]">
        <div
          className="relative text-left text-[#202020]"
          style={{ font: "600 12px/150% 'PingFang SC', sans-serif" }}
        >
          Not Lack“心缺”笔筒
        </div>

        <div
          className="relative text-left text-[#000000]"
          style={{ font: "400 12px/150% 'PingFang SC', sans-serif" }}
        >
          Design journal | 设计日志
        </div>
      </div>
    </div>
  );
};
