import React from "react";

export const EscortBoat = ({ ...props }) => {
  return (
    <div
      className="bg-[#ffffff] w-[1440px] h-[1024px] relative"
      style={{ overflowY: "auto" }}
    >
      <div className="flex flex-col gap-0 items-start justify-start absolute left-0 top-[54px]">
        <div className="flex flex-col gap-2.5 items-start justify-start shrink-0 w-[1440px] relative">
          <div className="flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 h-[970px] relative">
            <img
              className="self-stretch flex-1 relative"
              src="escort-zhutu.png"
            />
          </div>

          <div
            className="flex flex-col gap-5 items-center justify-start shrink-0 absolute left-[calc(50%_-_476px)] top-[373px]"
            style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
          >
            <div
              className="text-[#ececec] text-left relative"
              style={{ font: "600 60px/150% 'PingFang SC', sans-serif" }}
            >
              Safe, convenient and economical
            </div>

            <div
              className="text-[#ececec] text-left relative"
              style={{ font: "300 40px/150% 'PingFang SC', sans-serif" }}
            >
              安全、便捷、经济
            </div>
          </div>
        </div>

        <div className="bg-[#ffffff] flex flex-col gap-10 items-center justify-center shrink-0 w-[1440px] h-[1024px] relative">
          <div className="flex flex-col gap-0 items-center justify-start shrink-0 w-[302px] relative">
            <div
              className="text-[#000000] text-left relative"
              style={{
                font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)",
              }}
            >
              Rapid unfolding
            </div>

            <div
              className="text-[#202020] text-left relative"
              style={{
                font: "var(--cn, 300 40px/150% 'PingFang SC', sans-serif)",
              }}
            >
              疾速展开
            </div>
          </div>

          <div className="flex flex-row gap-5 items-center justify-start shrink-0 relative">
            <img
              className="shrink-0 w-[189px] h-[297px] relative"
              src="escort-shousuo.png"
            />

            <div className="flex flex-col gap-2.5 items-start justify-start shrink-0 w-[605px] relative">
              <div
                className="text-[#000000] text-left relative self-stretch"
                style={{
                  font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                When idle, the steel sheet relaxes, the hull is actively small,
                and the occupied space volume is minimized
              </div>

              <div
                className="text-[#000000] text-left relative self-stretch"
                style={{
                  font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                闲置时，钢片放松，船体体积极小，此时占用空间体积达到最小
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-5 items-center justify-start shrink-0 relative">
            <img
              className="shrink-0 w-[605px] h-[271px] relative"
              src="escort-kuozhang.png"
            />

            <div className="flex flex-col gap-2.5 items-start justify-start shrink-0 w-[397px] relative">
              <div
                className="text-[#000000] text-left relative self-stretch"
                style={{
                  font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                When in use, the bow and stern snaps are fastened, and the steel
                sheet is extended to open the boat, which can quickly deploy the
                entire hull in 30 seconds.
              </div>

              <div
                className="text-[#000000] text-left relative self-stretch"
                style={{
                  font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                使用时，将船头和船尾卡扣固定，钢片延展使船打开，可以实现在30秒内快速展开完整船体
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2.5 items-start justify-start shrink-0 w-[1022px] relative">
            <div
              className="text-[#000000] text-left relative self-stretch"
              style={{
                font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              This structural design will solve the problems of slow opening of
              lifeboats and large space occupied during idle periods, and
              directly obtain the best balance between safety and economy
            </div>

            <div
              className="text-[#000000] text-left relative self-stretch"
              style={{
                font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              此结构设计将会解决以前救生船打开慢、闲置时期占用空间大等问题，在安全、经济直接获得最好的平衡
            </div>
          </div>
        </div>

        <div className="bg-[#b9b9b9] pt-10 pr-0 pb-10 pl-0 flex flex-col gap-[30px] items-center justify-center shrink-0 w-[1440px] relative">
          <div className="flex flex-col gap-2.5 items-start justify-start shrink-0 relative">
            <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
              <div
                className="text-[#000000] text-left relative"
                style={{
                  font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Separation of functions
              </div>

              <div
                className="text-[#202020] text-left relative"
                style={{
                  font: "var(--cn, 300 40px/150% 'PingFang SC', sans-serif)",
                }}
              >
                功能分离
              </div>
            </div>

            <div className="flex flex-col gap-2.5 items-start justify-start shrink-0 w-[1022px] relative">
              <div
                className="text-[#000000] text-left relative self-stretch"
                style={{
                  font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                The use of separate design of structure and waterproof
                simplifies the design difficulty. Separate structural
                requirements and waterproofing requirements are studied and
                improved.
              </div>

              <div
                className="text-[#000000] text-left relative self-stretch"
                style={{
                  font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                使用结构和防水分离式设计，简化设计难度。将结构需求和防水需求分开进行研究完善。
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2.5 items-start justify-start shrink-0 w-[1022px] relative">
            <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
              <div
                className="text-[#000000] text-left relative"
                style={{
                  font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Folding technology
              </div>

              <div
                className="text-[#000000] text-left relative"
                style={{
                  font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
                }}
              >
                折叠技术
              </div>
            </div>

            <div className="flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative">
              <div
                className="text-[#000000] text-left relative self-stretch"
                style={{
                  font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Folding technology was used on the hull structure to achieve a
                rapid unfolding effect
              </div>

              <div
                className="text-[#000000] text-left relative self-stretch"
                style={{
                  font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                在船体结构上使用了折叠技术以达到快速展开的效果
              </div>
            </div>
          </div>

          <img
            className="shrink-0 w-[814px] h-[456px] relative"
            src="escort-gongnengfenli.png"
          />

          <div className="flex flex-col gap-2.5 items-start justify-start shrink-0 w-[1022px] relative">
            <div
              className="text-[#000000] text-left relative self-stretch"
              style={{
                font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              Hull structure: the overall structure is composed of 2 metal steel
              sheets, the retractable center skeleton is the main body and 4
              edge support sheets, and the two center skeletons are contracted
              by strong elastic design when unfolded, so as to stretch the four
              edge support sheets. This enables the unfolding process. The whole
              relies on the central skeleton and the associated elastic
              structure to ensure the hardness of the hull. The partition in the
              middle is a hollow design, which increases buoyancy on the one
              hand; On the other hand, emergency items can be stored in it. The
              hull side features a snap-on structure to connect modular elements
              and to link multiple lifesaving hulls.
            </div>

            <div
              className="text-[#000000] text-left relative self-stretch"
              style={{
                font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              船体结构：整体结构由2块金属钢片组成可伸缩性中心骨架为主体加4块边缘支撑片组成，展开时通过强力的弹性设计使两块中心骨架收缩，从而将四块边缘支撑片撑开。从而实现展开过程。整体依靠中心骨架和相关弹性结构保证船体的硬度。中间的隔板为中空设计，一方面增加浮力；另一方面，可以在其中存放应急物品。船体船舷设有卡扣结构，以连接模块化元件，以及进行多艘救生船体链接。
            </div>
          </div>
        </div>

        <div className="bg-[#ffffff] flex flex-col gap-8 items-center justify-center shrink-0 w-[1440px] h-[976px] relative">
          <div className="flex flex-col gap-5 items-start justify-start shrink-0 w-[1022px] relative">
            <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
              <div
                className="text-[#000000] text-left relative"
                style={{
                  font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Waterproof
              </div>

              <div
                className="text-[#000000] text-left relative"
                style={{
                  font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
                }}
              >
                防水材料
              </div>
            </div>

            <div className="flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative">
              <div
                className="text-[#000000] text-left relative self-stretch"
                style={{
                  font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                The waterproof function is entrusted to the hull material,
                thereby reducing the overall design difficulty, and the whole
                design scheme is simpler and more efficient
              </div>

              <div
                className="text-[#000000] text-left relative self-stretch"
                style={{
                  font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                将防水的功能全部付托至船身材料上，从而减轻整体设计难度，是整个设计方案更加简单、高效
              </div>
            </div>
          </div>

          <img
            className="shrink-0 w-[814px] h-[510px] relative"
            src="escort-fangshuicailiao.png"
          />

          <div className="flex flex-col gap-2.5 items-start justify-start shrink-0 w-[1022px] relative">
            <div
              className="text-[#000000] text-left relative self-stretch"
              style={{
                font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              Hull Material: The center skeleton and edge support sheet are
              mainly made of metal steel sheet, which reduces weight while
              providing stronger hardness and support. Because the steel sheet
              is only used as a support frame, the hull of the hull is made of
              fiberglass weaving and resin for some soft support. Then outsource
              waterproof cloth to achieve waterproof performance.
            </div>

            <div
              className="text-[#000000] text-left relative self-stretch"
              style={{
                font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              船体材料：中心骨架和边缘支撑片主要采用金属钢片,减轻重量的同时提供更强的硬度和支撑。因钢片只作为支撑架，故船体船身采用玻璃纤维织布加树脂做一些软支撑。再外包防水布料，实现防水性能。
            </div>
          </div>
        </div>

        <div className="bg-[#a1a1a1] flex flex-col gap-[26px] items-center justify-center shrink-0 w-[1440px] h-[1024px] relative">
          <div className="flex flex-col gap-5 items-center justify-start shrink-0 w-[1022px] relative">
            <div className="flex flex-col gap-0 items-center justify-start shrink-0 relative">
              <div
                className="text-[#000000] text-left relative"
                style={{
                  font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Modularization
              </div>

              <div
                className="text-[#000000] text-left relative"
                style={{
                  font: "var(--cn, 300 40px/150% 'PingFang SC', sans-serif)",
                }}
              >
                模块化
              </div>
            </div>

            <div className="flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative">
              <div
                className="text-[#000000] text-left relative self-stretch"
                style={{
                  font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                The use of separate design of structure and waterproof
                simplifies the design difficulty. Separate structural
                requirements and waterproofing requirements are studied and
                improved.
              </div>

              <div
                className="text-[#000000] text-left relative self-stretch"
                style={{
                  font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                使用结构和防水分离式设计，简化设计难度。将结构需求和防水需求分开进行研究完善。
              </div>
            </div>
          </div>

          <img
            className="shrink-0 w-[1022px] h-[424px] relative"
            src="escort-mokuaihua.png"
          />

          <div className="flex flex-row gap-5 items-start justify-start shrink-0 relative">
            <div className="flex flex-col gap-[13px] items-start justify-start shrink-0 relative">
              <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
                <div
                  className="text-[#000000] text-left relative"
                  style={{
                    font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  GPS module
                </div>

                <div
                  className="text-[#000000] text-left relative"
                  style={{
                    font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  GPS模块
                </div>
              </div>

              <div className="flex flex-col gap-2.5 items-start justify-start shrink-0 w-[188px] relative">
                <div
                  className="text-[#000000] text-left relative self-stretch"
                  style={{
                    font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  Help locate the lifeboat
                </div>

                <div
                  className="text-[#000000] text-left relative self-stretch"
                  style={{
                    font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  帮助定位救生艇位置
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[13px] items-start justify-start shrink-0 relative">
              <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
                <div
                  className="text-[#000000] text-left relative"
                  style={{
                    font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  Solar modules
                </div>

                <div
                  className="text-[#000000] text-left relative"
                  style={{
                    font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  太阳能模块
                </div>
              </div>

              <div className="flex flex-col gap-2.5 items-start justify-start shrink-0 w-[189px] relative">
                <div
                  className="text-[#000000] text-left relative self-stretch"
                  style={{
                    font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  Make the lifeboat partially self-powered
                </div>

                <div
                  className="text-[#000000] text-left relative self-stretch"
                  style={{
                    font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  使救生艇完成部分自身供电
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[13px] items-start justify-start shrink-0 relative">
              <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
                <div
                  className="text-[#000000] text-left relative"
                  style={{
                    font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  Power module
                </div>

                <div
                  className="text-[#000000] text-left relative"
                  style={{
                    font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  动力模块
                </div>
              </div>

              <div className="flex flex-col gap-2.5 items-start justify-start shrink-0 w-[188px] relative">
                <div
                  className="text-[#000000] text-left relative self-stretch"
                  style={{
                    font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  Provides more efficient power
                </div>

                <div
                  className="text-[#000000] text-left relative self-stretch"
                  style={{
                    font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  提供更加高效的动力
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[13px] items-start justify-start shrink-0 relative">
              <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
                <div
                  className="text-[#000000] text-left relative"
                  style={{
                    font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  Sail module
                </div>

                <div
                  className="text-[#000000] text-left relative"
                  style={{
                    font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  风帆模块
                </div>
              </div>

              <div className="flex flex-col gap-2.5 items-start justify-start shrink-0 w-[189px] relative">
                <div
                  className="text-[#000000] text-left relative self-stretch"
                  style={{
                    font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  Used for backup power in the event of low energy resources
                </div>

                <div
                  className="text-[#000000] text-left relative self-stretch"
                  style={{
                    font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  用于能源不足时的备用动力
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[13px] items-start justify-start shrink-0 relative">
              <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
                <div
                  className="text-[#000000] text-left relative"
                  style={{
                    font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  Link modules
                </div>

                <div
                  className="text-[#000000] text-left relative"
                  style={{
                    font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  链接模块
                </div>
              </div>

              <div className="flex flex-col gap-2.5 items-start justify-start shrink-0 w-[188px] relative">
                <div
                  className="text-[#000000] text-left relative self-stretch"
                  style={{
                    font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  Linking multiple lifeboats helps to maintain stability and
                  linkage
                </div>

                <div
                  className="text-[#000000] text-left relative self-stretch"
                  style={{
                    font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  实现多个救生艇的链接，有助于保持稳定和链接
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#f4f4f4] flex flex-col gap-20 items-center justify-center shrink-0 w-[1440px] h-[1024px] relative">
          <div className="flex flex-col gap-0 items-start justify-start shrink-0 w-[397px] relative">
            <div
              className="text-[#000000] text-left relative"
              style={{
                font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)",
              }}
            >
              Rescue color
            </div>

            <div
              className="text-[#202020] text-left relative"
              style={{
                font: "var(--cn, 300 40px/150% 'PingFang SC', sans-serif)",
              }}
            >
              救援配色
            </div>
          </div>

          <div className="flex flex-col gap-0 items-end justify-start shrink-0 relative">
            <div className="flex flex-row items-start justify-start shrink-0 relative">
              <div className="bg-[#efa043] rounded-[50%] shrink-0 w-[100px] h-[100px] relative"></div>

              <div
                className="bg-[#ee550a] rounded-[50%] shrink-0 w-[100px] h-[100px] relative"
                style={{ margin: "0 0 0 -20px" }}
              ></div>
            </div>

            <div className="flex flex-col gap-[33px] items-start justify-start shrink-0 w-[1022px] relative">
              <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
                <div
                  className="text-[#000000] text-left relative"
                  style={{
                    font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  Striking rescue color
                </div>

                <div
                  className="text-[#000000] text-left relative"
                  style={{
                    font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  醒目的救援色
                </div>
              </div>

              <div className="flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative">
                <div
                  className="text-[#000000] text-left relative self-stretch"
                  style={{
                    font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  The upward color of the hull is a striking red and orange
                  combination, which makes it easier to notice the lifeboat from
                  the air and the surface during the search, increasing the
                  chance of rescue and shortening the detection time
                </div>

                <div
                  className="text-[#000000] text-left relative self-stretch"
                  style={{
                    font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  船体向上颜色为醒目的红色和橙色搭配，可以在搜寻时从空中和水面更加容易注意到救生艇，增加获救机会和缩短发现时间
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-0 items-end justify-start shrink-0 relative">
            <div className="flex flex-row items-start justify-start shrink-0 relative">
              <div className="bg-[#ffffff] rounded-[50%] shrink-0 w-[100px] h-[100px] relative"></div>

              <div
                className="bg-[#d9d9d9] rounded-[50%] shrink-0 w-[100px] h-[100px] relative"
                style={{ margin: "0 0 0 -20px" }}
              ></div>
            </div>

            <div className="flex flex-col gap-9 items-start justify-start shrink-0 w-[1022px] relative">
              <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
                <div
                  className="text-[#000000] text-left relative"
                  style={{
                    font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  Bionic protective color
                </div>

                <div
                  className="text-[#000000] text-left relative"
                  style={{
                    font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  仿生保护色
                </div>
              </div>

              <div className="flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative">
                <div
                  className="text-[#000000] text-left relative self-stretch"
                  style={{
                    font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  The color of the downward hull is gray-white, and the bionic
                  uses the color of the shark&#039;s belly, which can make the
                  lifeboat blend with the sky when the fish look up from the
                  water, reducing the probability of the lifeboat being attacked
                  by underwater fish
                </div>

                <div
                  className="text-[#000000] text-left relative self-stretch"
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

        <div className="bg-[#090909] flex flex-col gap-[7px] items-center justify-center shrink-0 w-[1440px] h-[195px] relative">
          <div
            className="text-[#ffffff] text-left relative"
            style={{
              font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)",
            }}
          >
            Escort boat plus →
          </div>

          <div className="flex flex-col gap-2.5 items-center justify-start shrink-0 w-[1022px] relative">
            <div
              className="text-[#ffffff] text-center relative self-stretch"
              style={{
                font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              Version Plus is a more mature ocean-going closed version designed
              using the same principle
            </div>

            <div
              className="text-[#ffffff] text-center relative self-stretch"
              style={{
                font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              Plus版本是运用相同原理设计的更为成熟的远洋封闭式的版本
            </div>
          </div>
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
              strokeLinecap="round"
            />
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

      <div className="flex flex-row items-start justify-between absolute right-[220px] left-[220px] top-[62px]">
        <div
          className="text-[#3d3d3d] text-left relative"
          style={{ font: "600 12px/150% 'PingFang SC', sans-serif" }}
        >
          Escort boat
        </div>

        <div className="flex flex-row gap-5 items-start justify-start shrink-0 relative">
          <div
            className="text-[#3d3d3d] text-left relative"
            style={{ font: "400 12px/150% 'PingFang SC', sans-serif" }}
          >
            Escort boat 2.0
          </div>

          <div
            className="text-[#3d3d3d] text-left relative"
            style={{ font: "400 12px/150% 'PingFang SC', sans-serif" }}
          >
            Design journal | 设计日志
          </div>
        </div>
      </div>

      <div className="bg-[#d3d3d3] pt-[7px] pr-[220px] pb-[7px] pl-[220px] flex flex-col gap-2.5 items-center justify-start w-[1440px] sticky left-[calc(50%_-_720px)] top-0 overflow-hidden">
        <div className="flex flex-row items-center justify-between self-stretch shrink-0 relative">
          <img className="shrink-0 w-[85.96px] h-10 relative" src="logo.png" />

          <div className="flex flex-row gap-10 items-start justify-end shrink-0 relative">
            <div
              className="text-[#000000] text-center relative"
              style={{ font: "600 14px/99.52% 'PingFang SC', sans-serif" }}
            >
              Home
            </div>

            <div
              className="text-[#000000] text-center relative"
              style={{ font: "600 14px/99.52% 'PingFang SC', sans-serif" }}
            >
              Project
            </div>

            <div
              className="text-[#000000] text-center relative"
              style={{ font: "600 14px/99.52% 'PingFang SC', sans-serif" }}
            >
              Monomer
            </div>

            <div
              className="text-[#000000] text-center relative"
              style={{ font: "600 14px/99.52% 'PingFang SC', sans-serif" }}
            >
              Idea
            </div>

            <div
              className="text-[#000000] text-center relative"
              style={{ font: "600 14px/99.52% 'PingFang SC', sans-serif" }}
            >
              Resource
            </div>

            <div
              className="text-[#000000] text-center relative"
              style={{ font: "600 14px/99.52% 'PingFang SC', sans-serif" }}
            >
              CP
            </div>

            <div
              className="text-[#000000] text-center relative"
              style={{ font: "600 14px/99.52% 'PingFang SC', sans-serif" }}
            >
              Resume
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
