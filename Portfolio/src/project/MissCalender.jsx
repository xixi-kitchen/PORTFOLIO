import React from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box } from "@react-three/drei";
import { MissCalenderModel } from "./MissCalenderModel";

export function MissCalender({ ...props }) {
  return (
    <div className="relative h-[1024px] w-[1440px] bg-[#ffffff]">
      <div className="absolute left-0 right-0 top-[0px] flex flex-col items-center justify-start gap-0">
        <div className="relative flex h-[970px] shrink-0 flex-col items-center justify-center gap-2.5 self-stretch bg-[#000000]">
          {/* <img className="relative flex-1 self-stretch" src="miss-zhutu.png" /> */}
          <Canvas
            shadows
            dpr={[1, 2]}
            camera={{ fov: 75 }}
            className=" relative flex-1 self-stretch bg-[#777777]"
          >
            <ambientLight intensity={1} />
            <directionalLight
              color="white"
              position={[2, 3, 5]}
              intensity={1} />
            <Suspense fallback={null}>
              <MissCalenderModel/>
            </Suspense>
            <OrbitControls autoRotate />
          </Canvas>
          <div
            className="absolute left-[calc(50%_-_257.5px)] top-[394px] flex shrink-0 flex-col items-center justify-center gap-5"
            style={{ boxShadow: "4px 4px 20px 0px rgba(0, 0, 0, 0.25)" }}
          >
            <div
              className="relative text-left text-[#ffffff]"
              style={{ font: "600 60px/150% 'PingFang SC', sans-serif" }}
            >
              Let thoughts sync
            </div>

            <div
              className="relative text-left text-[#ffffff]"
              style={{ font: "300 40px/150% 'PingFang SC', sans-serif" }}
            >
              让思念可以同步
            </div>
          </div>
        </div>

        <div className="relative flex h-[1024px] shrink-0 flex-col items-center justify-center gap-1 self-stretch bg-[#ffffff] pb-[77px] pl-[140px] pr-[140px] pt-[77px]">
          <div className="relative flex shrink-0 flex-col items-center justify-start gap-0">
            <div
              className="relative text-left text-[#000000]"
              style={{
                font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)",
              }}
            >
              Mother and child design, touching every heart
            </div>

            <div
              className="relative text-left text-[#202020]"
              style={{
                font: "var(--cn, 300 40px/150% 'PingFang SC', sans-serif)",
              }}
            >
              子母设计，牵动每一颗心
            </div>
          </div>

          <img
            className="relative h-[618px] w-[1159px] shrink-0"
            src="miss-zimu.png"
          />

          <div className="relative flex w-[1022px] shrink-0 flex-col items-start justify-start gap-5">
            <div className="relative flex shrink-0 flex-col items-start justify-start gap-2.5 self-stretch">
              <div
                className="relative self-stretch text-left text-[#000000]"
                style={{
                  font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                The continuous development of science and technology has brought
                people closer to each other, but the heart is farther away,
                children are outside, parents do not know the recent situation
                abound, this product is to make the connection between the heart
                and the heart closer.
              </div>

              <div
                className="relative self-stretch text-left text-[#000000]"
                style={{
                  font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                科技的不断发展，让人与人之间距离更近了，心却更远了，儿女在外，父母不知近况的比比皆是，本款产品就是为了心与心的联系更加紧密。
              </div>
            </div>

            <div className="relative flex shrink-0 flex-col items-start justify-start gap-2.5 self-stretch">
              <div
                className="relative self-stretch text-left text-[#000000]"
                style={{
                  font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Make the simplest calendar, one &quot;stroke&quot; to plan your
                schedule, one device, two displays: from portable to convenient.
              </div>

              <div
                className="relative self-stretch text-left text-[#000000]"
                style={{
                  font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                做最简单的日历，一“划”即可规划你的日程，一台设备，两种显示：从便携到便捷。
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex h-[1024px] shrink-0 flex-col items-start justify-center gap-[35px] self-stretch bg-[#cbcbcb] pb-[19px] pl-[209px] pr-[209px] pt-[19px]">
          <div className="relative flex shrink-0 flex-col items-start justify-start gap-0">
            <div
              className="relative text-left text-[#000000]"
              style={{
                font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)",
              }}
            >
              Detachable design
            </div>

            <div
              className="relative text-left text-[#202020]"
              style={{
                font: "var(--cn, 300 40px/150% 'PingFang SC', sans-serif)",
              }}
            >
              拆卸式设计
            </div>
          </div>

          <div className="relative flex h-[82px] w-[1022px] shrink-0 flex-col items-start justify-start gap-2.5">
            <div
              className="relative self-stretch text-left text-[#000000]"
              style={{
                font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              The design of the detachable small core + large screen is also
              considered from portable to simpler operation experience. The two
              adopt a contact connection method, only need to insert the host
              into the secondary screen part to complete the connection,
              wireless charging design is also a step closer to simplicity.
              Everything is designed for - &quot;Jane&quot;
            </div>

            <div
              className="relative self-stretch text-left text-[#000000]"
              style={{
                font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              可拆卸式的小核心＋大屏幕的设计方式也从便携到更简单的操作体验都一一考虑到。二者采用触点式连接方式，只需将主机插入副屏部分即可完成连接，无线充电设计也为简单更近一步。一切的设计都为了——“简”
            </div>
          </div>

          <div
            className="relative flex w-[1022px] shrink-0 flex-row items-start justify-start gap-[25px]"
            style={{ flexWrap: "wrap" }}
          >
            <div className="relative flex shrink-0 flex-row items-center justify-start gap-[54px]">
              <div
                className="relative text-left text-[#000000]"
                style={{ font: "400 40px/150% 'STHupo', sans-serif" }}
              >
                1
              </div>

              <img
                className="relative h-[313.54px] w-[400px] shrink-0"
                src="mc-dd-4.png"
              />
            </div>

            <div className="relative flex shrink-0 flex-row items-center justify-start gap-[43px]">
              <div
                className="relative text-left text-[#000000]"
                style={{ font: "400 40px/150% 'STHupo', sans-serif" }}
              >
                2
              </div>

              <img
                className="relative h-[313.54px] w-[400px] shrink-0"
                src="mc-dd-5.png"
              />
            </div>

            <div className="relative flex shrink-0 flex-row items-center justify-start gap-[57px]">
              <div
                className="relative text-left text-[#000000]"
                style={{ font: "400 40px/150% 'STHupo', sans-serif" }}
              >
                3
              </div>

              <img
                className="relative h-[313.54px] w-[400px] shrink-0"
                src="mc-dd-6.png"
              />
            </div>

            <div className="relative flex shrink-0 flex-row items-center justify-start gap-[43px]">
              <div
                className="relative text-left text-[#000000]"
                style={{ font: "400 40px/150% 'STHupo', sans-serif" }}
              >
                4
              </div>

              <img
                className="relative h-[313.54px] w-[400px] shrink-0"
                src="mc-dd-7.png"
              />
            </div>
          </div>
        </div>

        <div className="relative flex h-[1024px] shrink-0 flex-col items-center justify-center gap-2.5 self-stretch bg-[#ffffff] pb-[42px] pl-[209px] pr-[209px] pt-[42px]">
          <div className="relative flex shrink-0 flex-col items-start justify-start gap-0">
            <div className="relative flex shrink-0 flex-row items-center justify-start gap-5">
              <div className="relative flex w-[397px] shrink-0 flex-col items-start justify-start gap-2.5">
                <div
                  className="relative self-stretch text-left text-[#000000]"
                  style={{
                    font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  A-core: Equipped with a small display, small size, can be
                  carried when going out.
                </div>

                <div
                  className="relative self-stretch text-left text-[#000000]"
                  style={{
                    font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  A核心：配备一块小显示屏，体积小巧，可作为外出原行时携带。
                </div>
              </div>

              <img
                className="relative h-[470px] w-[605px] shrink-0"
                src="mc-a-8.png"
              />
            </div>

            <div className="relative flex shrink-0 flex-row items-center justify-start gap-5">
              <img
                className="relative h-[470px] w-[605px] shrink-0"
                src="mc-b-9.png"
              />

              <div className="relative flex w-[397px] shrink-0 flex-col items-start justify-start gap-2.5">
                <div
                  className="relative self-stretch text-left text-[#000000]"
                  style={{
                    font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  B-screen: The other part is a large display, placed at home,
                  when you go home, insert the host into it to connect the
                  screen with the host through the connection contact, providing
                  a more convenient experience.
                </div>

                <div
                  className="relative self-stretch text-left text-[#000000]"
                  style={{
                    font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  B屏幕：另一部分为一块大型的显示屏，放置于家里，当回家之后将主机插入其中即可通过连接触点将屏幕与主机连接，提供更加便捷借的使用体验。
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex h-[1024px] shrink-0 flex-col items-center justify-center gap-0 self-stretch bg-[#d9d9d9]">
          <div className="relative flex w-[1022px] shrink-0 flex-row items-start justify-start gap-0">
            <div className="relative flex flex-1 flex-col items-start justify-start gap-10 pb-0 pl-5 pr-5 pt-0">
              <div className="relative flex shrink-0 flex-col items-start justify-start gap-0">
                <div
                  className="relative text-left text-[#000000]"
                  style={{
                    font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  Power supply
                </div>

                <div
                  className="relative text-left text-[#202020]"
                  style={{
                    font: "var(--cn, 300 40px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  电源供给
                </div>
              </div>

              <div className="relative flex shrink-0 flex-col items-start justify-start gap-2.5 self-stretch">
                <div
                  className="relative self-stretch text-left text-[#000000]"
                  style={{
                    font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  Mainly using wireless power supply, wireless charging coils
                  are installed at the bottom of the A-core and the B-screen to
                  ensure the normal power supply of the equipment.
                </div>

                <div
                  className="relative self-stretch text-left text-[#000000]"
                  style={{
                    font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  主要采用无线供电的方式，在A核心和B屏幕的底部均安装有无线充电线圈，保证设备的正常供电。
                </div>

                <div
                  className="relative self-stretch text-left text-[#000000]"
                  style={{
                    font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  （Power：5W；Battery：A-core——10±2day，B-screen——15±1day）
                </div>
              </div>
            </div>

            <svg
              className="relative shrink-0 overflow-visible"
              style={{}}
              height="334"
              viewBox="0 0 0 334"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0L-1.45996e-05 334" stroke="#A2A2A2" />
            </svg>

            <div className="relative flex flex-1 flex-col items-start justify-start gap-10 pb-0 pl-5 pr-5 pt-0">
              <div className="relative flex shrink-0 flex-col items-start justify-start gap-0">
                <div
                  className="relative text-left text-[#000000]"
                  style={{
                    font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  Signal transmission
                </div>

                <div
                  className="relative text-left text-[#202020]"
                  style={{
                    font: "var(--cn, 300 40px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  信号传输
                </div>
              </div>

              <div className="relative flex shrink-0 flex-col items-start justify-start gap-2.5 self-stretch">
                <div
                  className="relative self-stretch text-left text-[#000000]"
                  style={{
                    font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  Signal transmission is carried out through four contacts
                  between the A-core and the B-screen, two of which are current
                  transmission and two are signal transmission.
                </div>

                <div
                  className="relative self-stretch text-left text-[#000000]"
                  style={{
                    font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  A核心与B屏幕之间通过四个触点进行信号传输，其中两个为电流传输，两个为信号传输。
                </div>

                <div className="relative flex shrink-0 flex-col items-start justify-start gap-0 self-stretch">
                  <div
                    className="relative self-stretch text-left text-[#000000]"
                    style={{
                      font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    Red: Power supply; Blue: grounded; Yellow: Signal
                  </div>

                  <div
                    className="relative self-stretch text-left text-[#000000]"
                    style={{
                      font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    红色：电源；蓝色：接地；黄色：信号
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex shrink-0 flex-col items-center justify-start">
            <div className="relative flex shrink-0 flex-row items-center justify-start gap-5">
              <img
                className="relative h-[314px] w-[397px] shrink-0"
                src="mc-ps-10.png"
              />

              <div className="static h-[470.31px] w-[605px] shrink-0">
                <img
                  className="absolute left-[calc(50%_-_94px)] top-0 h-[470.31px] w-[605px]"
                  src="mc-ps-12.png"
                />

                <div className="static h-[80.5px] w-[181.2px]">
                  <div className="absolute left-[calc(50%_-_-375.18px)] top-[332.5px] flex flex-col items-start justify-start gap-0">
                    <div
                      className="relative text-left text-[#000000]"
                      style={{
                        font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
                      }}
                    >
                      contact
                    </div>

                    <div
                      className="relative text-left text-[#000000]"
                      style={{
                        font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
                      }}
                    >
                      触点
                    </div>
                  </div>

                  <svg
                    className="absolute left-[calc(50%_-_-265.98px)] top-[312px] overflow-visible"
                    style={{}}
                    width="97"
                    height="52"
                    viewBox="0 0 97 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M96.7682 51.3438H51.8974L0.976562 0.84375"
                      stroke="black"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div
              className="static h-[274px] w-[396.8px] shrink-0"
              style={{ margin: "-180px 0 0 0" }}
            >
              <img
                className="absolute left-[calc(50%_-_198.4px)] top-[290.31px] h-[274px] w-[376.07px]"
                src="mc-ps-11.png"
              />

              <div className="static h-[78.18px] w-[173.45px]">
                <div className="absolute left-[calc(50%_-_-126.4px)] top-[459.24px] flex flex-col items-start justify-start gap-0">
                  <div
                    className="relative text-left text-[#000000]"
                    style={{
                      font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    contact
                  </div>

                  <div
                    className="relative text-left text-[#000000]"
                    style={{
                      font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    触点
                  </div>
                </div>

                <svg
                  className="absolute left-[calc(50%_-_-24.95px)] top-[441.06px] overflow-visible"
                  style={{}}
                  width="92"
                  height="46"
                  viewBox="0 0 92 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M91.6305 45.6803H49.1553L0.953125 0.900391"
                    stroke="black"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex h-[1024px] w-[1440px] shrink-0 flex-col items-center justify-center gap-[53px] bg-[#ffffff]">
          <div className="relative flex w-[1022px] shrink-0 flex-col items-start justify-start gap-2.5">
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
              与手机不同，本产品放置于桌上，更加直观，且操作只有简单的三种，一点/一滑即可添加日程，即使是老人也可轻松使用。设备间拥有家庭组功能多个设备可通过网络互通，添加的日程可在家庭组内共享让心的距离更近，让父母能轻松了解子女的日程，同时编辑日程时简单的标签又可以减少父母多余的担忧。
            </div>
          </div>

          <div className="relative flex shrink-0 flex-row items-end justify-start gap-5">
            <div className="relative flex shrink-0 flex-col items-start justify-start gap-1.5">
              <div className="relative flex shrink-0 flex-col items-start justify-start gap-0">
                <div
                  className="relative text-left text-[#000000]"
                  style={{
                    font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  Interactive methods
                </div>

                <div
                  className="relative text-left text-[#202020]"
                  style={{
                    font: "var(--cn, 300 40px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  交互方式
                </div>
              </div>

              <div className="relative flex h-[295.86px] w-[501px] shrink-0 flex-col items-start justify-start gap-2.5">
                <img
                  className="relative h-[239.86px] shrink-0 self-stretch"
                  src="mc-im-12.png"
                />

                <div className="relative flex shrink-0 flex-col items-start justify-start gap-2.5 self-stretch">
                  <div
                    className="relative self-stretch text-left text-[#000000]"
                    style={{
                      font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    A-core: Click to swipe right, you can directly multi-select
                    the date
                  </div>

                  <div
                    className="relative self-stretch text-left text-[#000000]"
                    style={{
                      font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    A核心：点击向右滑动，可以直接多选日期
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex h-[409.24px] w-[501px] shrink-0 flex-col items-start justify-start gap-2.5">
              <img
                className="relative h-[352.3px] shrink-0 self-stretch"
                src="mc-im-13.png"
              />

              <div className="relative flex shrink-0 flex-col items-start justify-start gap-2.5 self-stretch">
                <div
                  className="relative self-stretch text-left text-[#000000]"
                  style={{
                    font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  B-screen: Click to pop up the pop-up box to customize your own
                  schedule
                </div>

                <div
                  className="relative self-stretch text-left text-[#000000]"
                  style={{
                    font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  B屏幕：点击弹出新增弹框、定制您的专属日程
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex h-[1024px] shrink-0 flex-col items-center justify-center gap-2.5 self-stretch bg-[#e0e0e0]">
          <div className="relative flex w-[1000px] shrink-0 flex-col items-center justify-start gap-[26px]">
            <div className="relative flex shrink-0 flex-row items-start justify-center gap-[26px]">
              <div className="relative flex shrink-0 flex-col items-start justify-start gap-[27px]">
                <img
                  className="relative h-[280px] w-[315.67px] shrink-0"
                  src="mc-imm-14.png"
                />

                <div className="relative flex shrink-0 flex-col items-start justify-start gap-5 self-stretch">
                  <div
                    className="relative self-stretch text-left text-[#000000]"
                    style={{
                      font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    Click Select individual dates to add events
                  </div>

                  <div
                    className="relative self-stretch text-left text-[#000000]"
                    style={{
                      font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    点击选择单个日期添加日程
                  </div>
                </div>
              </div>

              <div className="relative flex shrink-0 flex-col items-start justify-start gap-[27px]">
                <img
                  className="relative h-[280px] w-[315.67px] shrink-0"
                  src="mc-imm-15.png"
                />

                <div className="relative flex shrink-0 flex-col items-start justify-start gap-5 self-stretch">
                  <div
                    className="relative self-stretch text-left text-[#000000]"
                    style={{
                      font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    Click and swipe to select consecutive dates to add
                    consecutive long-term events
                  </div>

                  <div
                    className="relative self-stretch text-left text-[#000000]"
                    style={{
                      font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    点击后滑动连续选择日期添加连续长期日程
                  </div>
                </div>
              </div>

              <div className="relative flex shrink-0 flex-col items-start justify-start gap-[27px]">
                <img
                  className="relative h-[280px] w-[315.67px] shrink-0"
                  src="mc-imm-16.png"
                />

                <div className="relative flex shrink-0 flex-col items-start justify-start gap-5 self-stretch">
                  <div
                    className="relative self-stretch text-left text-[#000000]"
                    style={{
                      font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    Multi-finger tap to add an interval long-term schedule with
                    multiple selected dates
                  </div>

                  <div
                    className="relative self-stretch text-left text-[#000000]"
                    style={{
                      font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    多指点击可以多选日期添加间隔长期日程
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex shrink-0 flex-row items-start justify-between self-stretch">
              <div className="relative flex shrink-0 flex-col items-start justify-start gap-[27px]">
                <img
                  className="relative h-[280px] w-[377.33px] shrink-0"
                  src="mc-imm-17.png"
                />

                <div className="relative flex shrink-0 flex-col items-start justify-start gap-5 self-stretch">
                  <div
                    className="relative self-stretch text-left text-[#000000]"
                    style={{
                      font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    The operation of the A core and B screen is exactly the same
                  </div>

                  <div
                    className="relative self-stretch text-left text-[#000000]"
                    style={{
                      font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    A核心和B屏幕的操作方式完全一致
                  </div>
                </div>
              </div>

              <div className="relative flex shrink-0 flex-col items-end justify-start gap-0">
                <div
                  className="relative text-left text-[#000000]"
                  style={{
                    font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  More ways to interact
                </div>

                <div
                  className="relative text-left text-[#202020]"
                  style={{
                    font: "var(--cn, 300 40px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  更多交互方式
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex h-[1024px] shrink-0 flex-col items-center justify-start gap-2.5 self-stretch overflow-hidden bg-[#5c5c5c] pb-[132px] pl-[182px] pr-[182px] pt-[132px]">
          <div className="relative flex w-[1000px] shrink-0 flex-col items-start justify-start gap-[15px]">
            <svg
              className="relative shrink-0 self-stretch overflow-visible"
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
                strokeLinecap="round"
              />
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
      </div>

      <div className="absolute left-[220px] right-[219px] top-[10px] flex flex-row items-start justify-center gap-[781px]">
        <div
          className="relative text-left text-[#e5e5e5]"
          style={{ font: "600 12px/150% 'PingFang SC', sans-serif" }}
        >
          Miss Calender
        </div>

        <div className="static h-[18px] w-[138px] shrink-0">
          <div
            className="absolute left-[863px] top-0 text-left text-[#e5e5e5]"
            style={{ font: "400 12px/150% 'PingFang SC', sans-serif" }}
          >
            Design journal | 设计日志
          </div>
        </div>
      </div>
    </div>
  );
}
