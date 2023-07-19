import React from "react";


import { useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";

function Homepage({ ...props }) {
  const goNavigate = useNavigate(); //在Home组件里初始化一个uN对象
  



  const goaboutus = () => {
    goNavigate("/aboutus");
    window.scrollTo(0, 0)
  };
//项目内容
  const goAbspace = () => {
    goNavigate("/Abspace");
    window.scrollTo(0, 0)
  };
  const goTour = () => {
    goNavigate("/Tour");
    window.scrollTo(0, 0)
  };
  const goGeneral = () => {
    goNavigate("/General");
    window.scrollTo(0, 0)
  };
  const goPractice = () => {
    goNavigate("/Practice");
    window.scrollTo(0, 0)
  };

  // const goVector = () => {
  //   goNavigate("/Vector");
  // };
  // const goOne = () => {
  //   goNavigate("/One");
  // };
  const goSaint = () => {
    goNavigate("/Saint");
    window.scrollTo(0, 0)
  };
  // const goMiss = () => {
  //   goNavigate("/Miss");
  // };
  const goMigiccomb = () => {
    goNavigate("/Migiccomb");
    window.scrollTo(0, 0)
  };
  const goTwoface = () => {
    goNavigate("/Twoface");
    window.scrollTo(0, 0)
  };
  // const goEscort = () => {
  //   goNavigate("/Escort");
  // };
  // const goEscortplus = () => {
  //   goNavigate("/Escortplus");
  // };
  const goAerobic = () => {
    goNavigate("/Aerobic");
    window.scrollTo(0, 0)
  };
  const goNotlack = () => {
    goNavigate("/Notlack");
    window.scrollTo(0, 0)
  };
//单体内容
  const goCacup = () => {
    goNavigate("/Cacup");
    window.scrollTo(0, 0)
  };

  const goEndtables = () => {
    goNavigate("/Endtables");
    window.scrollTo(0, 0)
  };
  // const goBowlmats = () => {
  //   goNavigate("/Bowlmats");
  // };

  const goCabinets = () => {
    goNavigate("/Cabinets");
    window.scrollTo(0, 0)
  };
  // const goCountbuckets = () => {
  //   goNavigate("/Countbuckets");
  // };

  // const goJiaolong = () => {
  //   goNavigate("/Jiaolong");
  // };
  // const goMagnetic = () => {
  //   goNavigate("/Magnetic");
  // };
  // const goPropeller = () => {
  //   goNavigate("/Propeller");
  // };
  const goReticule = () => {
    goNavigate("/Reticule");
    window.scrollTo(0, 0)
  };
  // const goReversecar = () => {
  //   goNavigate("/Reversecar");
  // };
  const goRollin = () => {
    goNavigate("/Rollin");
    window.scrollTo(0, 0)
  };
  // const goSunwardred = () => {
  //   goNavigate("/Sunwardred");
  // };
  const goWillinsert = () => {
    goNavigate("/Willinsert");
    window.scrollTo(0, 0)
  };

  return (
<div className="bg-[#ffffff] h-[7500px] relative">
      <div className="flex flex-col gap-[258px] items-center justify-start h-[7140px] absolute right-0 left-0 top-[226px] scrollbar">
        <div className="flex flex-col gap-[61px] items-center justify-start shrink-0 w-[1022px] relative">
          <div className="flex flex-col gap-0 items-center justify-start shrink-0 relative">
            <div
              className="text-[#000000] text-left relative"
              style={{
                font: "var(--en, 600 64px/150% 'PingFang SC', sans-serif)",
              }}
            >
              Human Design Studio
            </div>

            <div
              className="text-[#202020] text-left relative"
              style={{
                font: "var(--cn, 300 40px/150% 'PingFang SC', sans-serif)",
              }}
            >
              [人类设计工作室]
            </div>
          </div>

          <div className="flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative">
            <div
              className="text-left relative self-stretch"
              style={{
                font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              <span>
                <span className="">
                  Human design studio is a virtual studio consisting of{" "}
                </span>
                <span className="text-[#8158FC]">
                  a designer who likes to do all kinds of novelty experiments
                </span>
                <span className="">
                  , and an{" "}
                </span>
                <span className="text-[#8158FC]">
                  artificial intelligence (who is actually a person)
                </span>
                <span className="">
                  . When our design concept is unchanged, it is to make design
                  more in line with life, conducive to life, benefit life, and
                  let design serve human beings.
                </span>
              </span>
            </div>

            <div
              className="text-left relative self-stretch"
              style={{
                font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              <span>
                <span className="">
                  人类设计工作室是一个虚拟的工作室，由
                </span>
                <span className="text-[#8158FC]">一个喜欢做各类新奇尝试的设计师</span>
                <span className="">和一个</span>
                <span className="text-[#8158FC]">人工智能组成（其实就是一个人）</span>
                <span className="">
                  。当我们的设计理念是不变的，就是让设计能更加贴合生活，利于生活、造福生活，让设计服务于人类。
                </span>
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-0.5 items-center justify-center self-stretch shrink-0 relative">
            <div className="flex flex-row gap-2.5 items-center justify-center shrink-0 relative">
              <div
                className="text-[#606060] text-left relative"
                style={{
                  font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Design concept
              </div>

              <div
                className="text-[#8158fc] text-left relative"
                style={{
                  font: "var(--cn, 300 40px/150% 'PingFang SC', sans-serif)",
                }}
              >
                |
              </div>

              <div
                className="text-[#606060] text-left relative"
                style={{
                  font: "var(--cn, 300 40px/150% 'PingFang SC', sans-serif)",
                }}
              >
                设计理念
              </div>
            </div>

            <div className="bg-[#8158fc] p-2.5 flex flex-row gap-2.5 items-center justify-center self-stretch shrink-0 relative rounded-2xl ">
              <div
                className="text-[#ffffff] text-center relative flex-1"
                style={{
                  font: "var(--en, 600 64px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Design benefits humanbeings
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-10 items-center  justify-between shrink-0 w-[1022px] relative">
          <div className="flex flex-col gap-8 items-start justify-start shrink-0 relative">
            <div className="flex flex-row gap-5 items-center justify-start shrink-0 relative">
              <div
                className="text-[#000000] text-left relative"
                style={{
                  font: "var(--en, 600 64px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Hugh Aix
              </div>

              <div
                className="text-[#000000] text-left relative"
                style={{
                  font: "var(--en, 600 64px/150% 'PingFang SC', sans-serif)",
                }}
              >
                |
              </div>

              <div
                className="text-[#000000] text-left relative"
                style={{
                  font: "var(--en, 600 64px/150% 'PingFang SC', sans-serif)",
                }}
              >
                徐禧
              </div>
            </div>

            <div className="flex flex-col gap-[7px] items-start justify-start shrink-0 relative">
              <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
                <div
                  className="text-[#000000] text-left relative"
                  style={{
                    font: "var(--en, 100 20px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  Designer
                </div>

                <div
                  className="text-[#000000] text-left relative"
                  style={{
                    font: "var(--en, 100 20px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  设计师
                </div>
              </div>

              <div className="flex flex-col gap-2.5 items-start justify-start shrink-0 w-[336px] relative">
                <div
                  className="text-left relative self-stretch"
                  style={{
                    font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  <span>
                    <span className="">
                      Although I came from an industrial background, I
                      don&#039;t want to be defined by industrial design alone,
                      I prefer to call myself a{" "}
                    </span>
                    <span className=" text-[#8158FC]">
                      [designer]
                    </span>
                  </span>
                </div>

                <div
                  className="text-left relative self-stretch"
                  style={{
                    font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  <span>
                    <span className="">
                      虽然出身是工业设计师，但我并不想仅仅被工业设计所定义，我更愿意称自己为一名
                    </span>
                    <span className="text-[#8158FC]">[设计师]</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 items-start justify-start shrink-0 relative">
              <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
                <div
                  className="text-[#000000] text-left relative"
                  style={{
                    font: "var(--en, 100 20px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  Knowledge background
                </div>

                <div
                  className="text-[#000000] text-left relative"
                  style={{
                    font: "var(--en, 100 20px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  知识背景
                </div>
              </div>

              <div className="flex flex-col gap-1.5 items-start justify-start shrink-0 relative">
                <div className="flex flex-row gap-1 items-start justify-start shrink-0 relative">
                  <div className="bg-[#ffe69e] rounded-md flex flex-col gap-1.5 items-center justify-center shrink-0 w-[77px] h-16 relative">
                    <div
                      className="text-[#686868] text-center relative"
                      style={{
                        font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                      }}
                    >
                      design
                    </div>

                    <div
                      className="text-[#686868] text-left relative"
                      style={{
                        font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                      }}
                    >
                      设计学
                    </div>
                  </div>

                  <div className="flex flex-col gap-1 items-start justify-start shrink-0 relative">
                    <div className="bg-[#ffe69e] rounded-md flex flex-row gap-0 items-center justify-center shrink-0 w-[179px] h-[30px] relative">
                      <div
                        className="text-[#686868] text-center relative"
                        style={{
                          font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                        }}
                      >
                        UX design
                      </div>

                      <div
                        className="text-[#686868] text-left relative"
                        style={{
                          font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                        }}
                      >
                        交互设计
                      </div>
                    </div>

                    <div className="bg-[#ffe69e] rounded-md flex flex-row gap-0 items-center justify-center self-stretch shrink-0 h-[30px] relative">
                      <div
                        className="text-[#686868] text-center relative"
                        style={{
                          font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                        }}
                      >
                        industrial design
                      </div>

                      <div
                        className="text-[#686868] text-left relative"
                        style={{
                          font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                        }}
                      >
                        工业设计
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row gap-1 items-start justify-start shrink-0 relative">
                  <div className="bg-[#abbaff] rounded-md flex flex-col gap-1.5 items-center justify-center shrink-0 w-[120px] h-16 relative">
                    <div
                      className="text-[#686868] text-center relative"
                      style={{
                        font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                      }}
                    >
                      computer science
                    </div>

                    <div
                      className="text-[#686868] text-left relative"
                      style={{
                        font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                      }}
                    >
                      计算机科学
                    </div>
                  </div>

                  <div className="flex flex-col gap-1 items-start justify-start shrink-0 w-[179px] relative">
                    <div className="bg-[#abbaff] rounded-md flex flex-row gap-1.5 items-center justify-center self-stretch shrink-0 h-[30px] relative">
                      <div
                        className="text-[#686868] text-center relative"
                        style={{
                          font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                        }}
                      >
                        programming
                      </div>

                      <div
                        className="text-[#686868] text-left relative"
                        style={{
                          font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                        }}
                      >
                        编程
                      </div>
                    </div>

                    <div className="bg-[#abbaff] rounded-md flex flex-row gap-1.5 items-center justify-center self-stretch shrink-0 h-[30px] relative">
                      <div
                        className="text-[#686868] text-center relative"
                        style={{
                          font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                        }}
                      >
                        data
                      </div>

                      <div
                        className="text-[#686868] text-left relative"
                        style={{
                          font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                        }}
                      >
                        数据
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row gap-1 items-start justify-start shrink-0 relative">
                  <div className="bg-[#ffa8a8] rounded-md flex flex-row gap-1.5 items-center justify-center shrink-0 w-[120px] h-10 relative">
                    <div
                      className="text-[#686868] text-center relative"
                      style={{
                        font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                      }}
                    >
                      psychology
                    </div>

                    <div
                      className="text-[#686868] text-left relative"
                      style={{
                        font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                      }}
                    >
                      心理学
                    </div>
                  </div>

                  <div className="bg-[#dca4ff] rounded-md flex flex-row gap-1.5 items-center justify-center shrink-0 w-[120px] h-10 relative">
                    <div
                      className="text-[#686868] text-center relative"
                      style={{
                        font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                      }}
                    >
                      philosophy
                    </div>

                    <div
                      className="text-[#686868] text-left relative"
                      style={{
                        font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                      }}
                    >
                      哲学
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#424242] rounded-[5px] pt-0.5 pr-2.5 pb-0.5 pl-2.5 flex flex-row gap-2.5 items-center justify-center shrink-0 w-[152px] relative hover:scale-105" onClick={goaboutus}>
              <div
                className="text-[#ffffff] text-left relative"
                style={{
                  font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
                }}
              >
                MORE
              </div>

              <div
                className="text-[#ffffff] text-left relative"
                style={{
                  font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
                }}
              >
                👉
              </div>
            </div>
          </div>

          <img className="w-[553px] h-[551px] relative" src="homepage-1.png" />
        </div>

        <div className="flex flex-col gap-20 items-center justify-start shrink-0 relative">
          <div className="flex flex-col gap-[79px] items-center justify-start shrink-0 relative">
            <div className="flex flex-row gap-5 items-start justify-center shrink-0 relative">
              <div
                className="text-[#000000] text-left relative"
                style={{
                  font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Project
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
                项目
              </div>
            </div>

            <div className="flex flex-col gap-2.5 items-start justify-start shrink-0 w-[1022px] relative">
              <div
                className="text-left relative self-stretch"
                style={{
                  font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                <span>
                  <span className="">
                    The works of the project category are mainly some works with
                    a relatively complete{" "}
                  </span>
                  <span className="text-[#8158FC]">
                    design log
                  </span>
                  <span className="">
                    . The design log of these works records the whole process of
                    the work from the initial demand proposal, to the demand
                    research, design analysis, inspiration burst, model
                    verification and final product confirmation, and more
                    completely records how a design product from the demand to
                    the final presentation of the whole process, because the
                    whole process is more perfect, so as a project to display,
                    the design log is introduced on a separate page
                  </span>
                </span>
              </div>

              <div
                className="text-left relative self-stretch"
                style={{
                  font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                <span>
                  <span className="">
                    项目类的作品主要是一些有着较为完整的
                  </span>
                  <span className="text-[#8158FC]">设计日志</span>
                  <span className="">
                    的作品。这些作品的设计日志记录了该作品从最开始的需求提出，到需求调研、设计分析、灵感迸发、模型验证和最后成品确认的全过程，较为完整的记录了一件设计产品如何从需求到最终呈现的全过程，因为整个过程较为完善，所以作为一个项目进行展示，设计日志则做单独的页面进行介绍
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[57px] items-center justify-start shrink-0 relative">
            <div className="flex flex-col gap-[18px] items-start justify-start shrink-0 relative">
            <div className="flex flex-row items-end justify-between self-stretch shrink-0 relative">
      <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
        <div
          className="text-[#000000] text-left relative"
          style={{ font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)" }}
        >
          Interactive column
        </div>

        <div
          className="text-[#000000] text-left relative"
          style={{ font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)" }}
        >
          交互专栏
        </div>
      </div>

      <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
        <div
          className="text-[#650000] text-left relative"
          style={{ font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)" }}
        >
          Interactive column content can only be accessed from the home page
        </div>

        <div
          className="text-[#650000] text-left relative"
          style={{ font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)" }}
        >
          交互专栏内容只能从主页进入
        </div>
      </div>
    </div>

              <div className="flex flex-col gap-[9px] items-start justify-start shrink-0 relative">
                <div className="flex flex-col gap-2.5 items-start justify-start shrink-0 w-[1022px] relative ">
                  <div
                    className="text-left relative self-stretch"
                    style={{
                      font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    <span>
                      <span className="">
                        A-B Space and TOUR are two{" "}
                      </span>
                      <span className="text-[#8158FC]">
                        interaction design research reports
                      </span>
                      <span className="">
                        , recording the whole process of the two projects from
                        the beginning of the project to the final completion of
                        the high-fidelity prototype, which also includes the
                        research and research methods used in interaction
                        design, and finally generates a complete interaction
                        design report.
                      </span>
                    </span>
                  </div>

                  <div
                    className="text-left relative self-stretch"
                    style={{
                      font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    <span>
                      <span className="">
                        A-B Space 和 TOUR 是两篇
                      </span>
                      <span className="text-[#8158FC]">
                        交互设计调研报告
                      </span>
                      <span className="">
                        ，记录了两个项目从开始立项到最终完成高还原度原型的全过程，其中还包含了交互设计中所使用的调研和研究方式，最终生成一份完整的交互设计报告。
                      </span>
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-2.5 items-start justify-start shrink-0 w-[1022px] relative">
                  <div
                    className="text-left relative self-stretch"
                    style={{
                      font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    <span>
                      <span className="">
                        General UI and PRACTICE are two complete{" "}
                      </span>
                      <span className="text-[#8158FC]">
                        design systems
                      </span>
                      <span className="">
                        {" "}
                        that can be directly put into use. Among them, General
                        UI is a universal system with universal components
                        required for various applications.
                      </span>
                    </span>
                  </div>

                  <div
                    className="text-left relative self-stretch"
                    style={{
                      font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    <span>
                      <span className="">
                        GENERAL UI 和 PRACTICE 则是两套完整的
                      </span>
                      <span className="text-[#8158FC]">
                        设计系统
                      </span>
                      <span className="">
                        ，可以直接投入使用，其中 GENERAL UI
                        是一套通用的体系，拥有各类应用所需的通用型组件。
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 items-center justify-start shrink-0 relative">
              <div className="flex flex-col gap-1 items-start justify-center shrink-0 relative">
                <div
                  className="text-[#8158fc] text-left relative self-stretch"
                  style={{
                    font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  Click the card below to jump to the corresponding page
                </div>

                <div
                  className="text-[#8158fc] text-center relative self-stretch"
                  style={{
                    font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  点击下方卡片即可跳转至对应页面
                </div>
              </div>

              <div className="flex flex-row gap-5 items-start justify-start shrink-0 w-[1440px] h-[1080px] relative ">
                <div className="flex flex-row gap-2.5 items-start justify-start self-stretch flex-1 relative hover:scale-105" onClick={goAbspace}>
                  <img
                    className="self-stretch flex-1 relative rounded-2xl"
                    src="homepage-2.png"
                  />

                  <div
                    className="text-[#ffffff] text-center absolute left-[calc(50%_-_151.5px)] top-[calc(50%_-_32px)] w-[305px]"
                    style={{ font: "600 60px 'Archivo', sans-serif" }}
                  >
                    A-B Space
                  </div>
                </div>

                <div className="flex flex-row gap-2.5 items-start justify-start self-stretch flex-1 relative hover:scale-105" onClick={goTour}>
                  <img
                    className="shrink-0 w-[345px] h-[1080px] relative rounded-2xl"
                    src="homepage-3.png"
                  />

                  <div
                    className="text-[#a30000] text-left absolute left-[37px] top-[468px]"
                    style={{ font: "600 96px/150% 'PingFang SC', sans-serif" }}
                  >
                    TOUR
                  </div>
                </div>

                <div className="flex flex-col gap-2.5 items-start justify-start self-stretch flex-1 relative hover:scale-105" onClick={goGeneral}>
                  <img
                    className="self-stretch flex-1 relative rounded-2xl"
                    src="homepage-4.png"
                  />

                  <div
                    className="text-[#ffffff] text-center absolute left-[calc(50%_-_163.5px)] top-[calc(50%_-_60px)]"
                    style={{ font: "600 40px/150% 'PingFang SC', sans-serif" }}
                  >
                    GENERAL UI <br />
                    DESIGN SCREENS
                  </div>
                </div>

                <div className="flex flex-col gap-2.5 items-start justify-start self-stretch flex-1 relative hover:scale-105" onClick={goPractice}>
                  <img
                    className="self-stretch flex-1 relative rounded-2xl"
                    src="homepage-5.png"
                  />

                  <div
                    className="text-[#ffffff] text-left absolute left-[calc(50%_-_159.5px)] top-[calc(50%_-_48px)]"
                    style={{ font: "600 64px/150% 'PingFang SC', sans-serif" }}
                  >
                    PRACTICE
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-10 items-center justify-start shrink-0 relative">
            <div className="flex flex-col gap-0 items-start justify-start shrink-0 w-[1022px] relative">
              <div
                className="text-[#000000] text-left relative"
                style={{
                  font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
                }}
              >
                CLASSIC
              </div>

              <div
                className="text-[#000000] text-left relative"
                style={{
                  font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
                }}
              >
                经典项目
              </div>
            </div>

            <div className="flex flex-col gap-3 items-center justify-start shrink-0 relative">
              <div className="flex flex-col gap-0 items-start justify-center shrink-0 w-[1022px] relative">
                <div
                  className="text-[#8158fc] text-left relative self-stretch"
                  style={{
                    font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  Click the picture below to jump to the corresponding page
                </div>

                <div
                  className="text-[#8158fc] text-left relative self-stretch"
                  style={{
                    font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                  }}
                >
                  点击下方图片即可跳转至对应页面
                </div>
              </div>

              <div className="flex flex-col gap-10 items-center justify-start shrink-0 w-[1440px] h-[1672px] relative " >
                <div className="flex flex-row gap-2.5 items-start justify-start self-stretch flex-1 relative hover:scale-105" onClick={goAerobic}>
                  <img
                    className="self-stretch flex-1 relative rounded-2xl"
                    src="homepage-6.png"
                  />

                  <div
                    className="flex flex-col items-center justify-center shrink-0 absolute left-[calc(50%_-_143px)] top-[calc(50%_-_96.2px)] drop-shadow-xl"

                  >
                    <div
                      className="text-[#ffffff] text-left relative"
                      style={{
                        font: "600 80px/150% 'PingFang SC', sans-serif",
                      }}
                    >
                      aerobic
                    </div>

                    <div
                      className="text-[#ffffff] text-left relative"
                      style={{
                        margin: "-20px 0 0 0",
                        font: "100 60px/150% 'PingFang SC', sans-serif",
                      }}
                    >
                      “有氧”
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2.5 items-start justify-start self-stretch flex-1 relative hover:scale-105" onClick={goMigiccomb}>
                  <img
                    className="self-stretch flex-1 relative"
                    src="homepage-7.png"
                  />

                  <div
                    className="flex flex-col gap-5 items-center justify-center shrink-0 absolute left-[calc(50%_-_207px)] top-[calc(50%_-_84.6px)] drop-shadow-xl"
             
                  >
                    <div
                      className="text-[#ffffff] text-left relative"
                      style={{
                        font: "600 60px/150% 'PingFang SC', sans-serif",
                      }}
                    >
                      Monster comb
                    </div>

                    <div
                      className="text-[#ffffff] text-left relative"
                      style={{
                        font: "300 40px/150% 'PingFang SC', sans-serif",
                      }}
                    >
                      怪物梳
                    </div>
                  </div>
                </div>

                <div className="bg-[#f3f3f3] flex flex-col gap-2.5 items-start justify-start self-stretch flex-1 relative hover:scale-105"onClick={goSaint}>
                  <div className="flex flex-col gap-2.5 items-center justify-start self-stretch flex-1 relative">
                    <img
                      className="self-stretch flex-1 relative"
                      src="homepage-8.png"
                    />
                  </div>

                  <div
                    className="flex flex-col gap-5 items-center justify-start shrink-0 absolute left-[calc(50%_-_170px)] top-[calc(50%_-_72.2px)]"
                    style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
                  >
                    <div
                      className="text-[#ececec] text-left relative"
                      style={{
                        font: "600 60px/150% 'PingFang SC', sans-serif",
                      }}
                    >
                      Saint Lance
                    </div>

                    <div
                      className="text-[#ececec] text-left relative"
                      style={{
                        font: "300 40px/150% 'PingFang SC', sans-serif",
                      }}
                    >
                      圣·兰斯号
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2.5 items-center justify-start self-stretch flex-1 relative hover:scale-105" onClick={goTwoface}>
                  <img
                    className="self-stretch flex-1 relative"
                    src="homepage-9.png"
                  />

                  <div className="flex flex-col items-center justify-start shrink-0 absolute left-[calc(50%_-_358px)] top-[calc(50%_-_82.2px)]">
                    <div
                      className="text-[#ffffff] text-left relative"
                      style={{
                        font: "600 80px/150% 'PingFang SC', sans-serif",
                      }}
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

                <div className="flex flex-col gap-2.5 items-start justify-start self-stretch flex-1 relative hover:scale-105" onClick={goNotlack}>
                  <img
                    className="self-stretch flex-1 relative"
                    src="homepage-10.png"
                  />

                  <div className="flex flex-col items-center justify-start shrink-0 absolute left-[calc(50%_-_516px)] top-[calc(50%_-_67.2px)] drop-shadow-xl">
                    <div
                      className="text-[#202020] text-left relative"
                      style={{
                        font: "600 60px/150% 'PingFang SC', sans-serif",
                      }}
                    >
                      &quot;Heart&quot; will not lack companionship
                    </div>

                    <div
                      className="text-[#202020] text-left relative"
                      style={{
                        margin: "-16px 0 0 0",
                        font: "300 40px/150% 'PingFang SC', sans-serif",
                      }}
                    >
                      “心”不会缺少陪伴
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div  className="flex flex-col gap-[61px] items-center justify-start shrink-0 relative">
          <div className="flex flex-row gap-5 items-start justify-center shrink-0 relative">
            <div
              className="text-[#000000] text-left relative"
              style={{
                font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)",
              }}
            >
              Monomer
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
              单体
            </div>
          </div>

          <div className="flex flex-col gap-2.5 items-start justify-start shrink-0 w-[1022px] relative">
            <div
              className="text-left relative self-stretch"
              style={{
                font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              <span>
                <span className="">
                  Individual works are usually products derived from the{" "}
                </span>
                <span className="text-[#8158FC]">
                  determined needs
                </span>
                <span className="">
                  {" "}
                  of others and the{" "}
                </span>
                <span className="text-[#8158FC]">
                  temporary creativity
                </span>
                <span className="">
                  {" "}
                  of individuals, and there is no complete design log or
                  detailed production record, so they are displayed in a single
                  form. Most creative categories.
                </span>
              </span>
            </div>

            <div
              className="text-left relative self-stretch"
              style={{
                font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              <span>
                <span className="">单体类作品通常是由于别人的</span>
                <span className="text-[#8158FC]">确定需求</span>
                <span className="">和个人的</span>
                <span className="text-[#8158FC]">临时创意</span>
                <span className="">
                  所衍生出来的产品，并没有较为完善的设计日志，也没有详实的制作记录，所以都是以单个的形式进行展现。创意类居多。
                </span>
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3.5 items-start justify-start shrink-0 relative">
            <div className="flex flex-col gap-0 items-start justify-center shrink-0 relative">
              <div
                className="text-[#8158fc] text-left relative self-stretch"
                style={{
                  font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Click the card below to jump to the corresponding page
              </div>

              <div
                className="text-[#8158fc] text-left relative self-stretch"
                style={{
                  font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                点击下方卡片即可跳转至对应页面
              </div>
            </div>

            <div className="flex flex-col gap-[72px] items-start justify-start shrink-0 relative">
              <div className="flex flex-row gap-5 items-start justify-start shrink-0 w-[1022px] h-[360px] relative">
                <div
                  className="rounded-xl flex flex-col items-center justify-start self-stretch flex-1 relative overflow-hidden"
                  style={{ boxShadow: "4px 4px 10px 0px rgba(0, 0, 0, 0.25)" }}
                  onClick={goCacup}
                >
                  <div
                    className="text-[#202020] text-left relative self-stretch z-10"
                    style={{
                      font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    茶色杯 | CAcup
                  </div>

                  <div
                    className="flex flex-col items-center justify-start self-stretch flex-1 relative"
                    style={{ margin: "-79px 0 0 0" }}
                  >
                    <img
                      className="self-stretch flex-1 relative"
                      src="homepage-11.png"
                    />

                    <div
                      className="flex flex-row items-start justify-between flex-wrap self-stretch shrink-0 h-9 relative"
                      style={{ margin: "-68px 0 0 0" }}
                    >
                      <div className="pt-0.5 pr-2 pb-0.5 pl-2 flex flex-col items-start justify-start shrink-0 relative">
                        <div
                          className="text-[#202020] text-left relative"
                          style={{
                            font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                          }}
                        >
                          Production time: 2022.03.22
                        </div>

                        <div
                          className="text-[#202020] text-left relative"
                          style={{
                            margin: "-4px 0 0 0",
                            font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                          }}
                        >
                          制作时间：2022.03.22
                        </div>
                      </div>

                      <div className="pt-0.5 pr-2 pb-0.5 pl-2 flex flex-col items-start justify-start shrink-0 relative">
                        <div
                          className="text-[#202020] text-left relative"
                          style={{
                            font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                          }}
                        >
                          Degree of completion: 100%
                        </div>

                        <div
                          className="text-[#202020] text-left relative"
                          style={{
                            margin: "-4px 0 0 0",
                            font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                          }}
                        >
                          完成度：100%
                        </div>
                      </div>

                      <div className="pt-0.5 pr-2 pb-0.5 pl-2 flex flex-col items-start justify-start shrink-0 relative">
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
                </div>

                <div
                  className="rounded-xl flex flex-col items-center justify-start self-stretch flex-1 relative overflow-hidden"
                  style={{ boxShadow: "4px 4px 10px 0px rgba(0, 0, 0, 0.25)" }}
                  onClick={goEndtables}
                >
                  <div
                    className="text-[#202020] text-left relative self-stretch z-10"
                    style={{
                      font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    End tables
                  </div>

                  <div
                    className="flex flex-col items-center justify-start self-stretch flex-1 relative"
                    style={{ margin: "-79px 0 0 0" }}
                  >
                    <img
                      className="self-stretch flex-1 relative"
                      src="homepage-12.png"
                    />

                    <div
                      className="flex flex-row items-start justify-between flex-wrap self-stretch shrink-0 h-8 relative"
                      style={{ margin: "-68px 0 0 0" }}
                    >
                      <div className="pt-0.5 pr-2 pb-0.5 pl-2 flex flex-col items-start justify-start shrink-0 relative">
                        <div
                          className="text-[#202020] text-left relative"
                          style={{
                            font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                          }}
                        >
                          Production time: 2020.03
                        </div>

                        <div
                          className="text-[#202020] text-left relative"
                          style={{
                            margin: "-4px 0 0 0",
                            font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                          }}
                        >
                          制作时间：2020.03
                        </div>
                      </div>

                      <div className="pt-0.5 pr-2 pb-0.5 pl-2 flex flex-col items-start justify-start shrink-0 relative">
                        <div
                          className="text-[#202020] text-left relative"
                          style={{
                            font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                          }}
                        >
                          Degree of completion: 100%
                        </div>

                        <div
                          className="text-[#202020] text-left relative"
                          style={{
                            margin: "-4px 0 0 0",
                            font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                          }}
                        >
                          完成度：100%
                        </div>
                      </div>

                      <div className="pt-0.5 pr-2 pb-0.5 pl-2 flex flex-col items-start justify-start shrink-0 relative">
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
                </div>
              </div>

              <div className="flex flex-row gap-5 items-start justify-start shrink-0 w-[1022px] h-[360px] relative">
                <div
                  className="rounded-xl flex flex-col items-center justify-start self-stretch flex-1 relative overflow-hidden"
                  style={{ boxShadow: "4px 4px 10px 0px rgba(0, 0, 0, 0.25)" }}
                  onClick={goCabinets}
                >
                  <div
                    className="text-[#202020] text-left relative self-stretch z-10"
                    style={{
                      font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    Cabinets
                  </div>

                  <div
                    className="flex flex-col items-center justify-start self-stretch flex-1 relative"
                    style={{ margin: "-79px 0 0 0" }}
                  >
                    <img
                      className="self-stretch flex-1 relative"
                      src="homepage-13.png"
                    />

                    <div
                      className="pt-0.5 pr-2 pb-0.5 pl-2 flex flex-row items-start justify-between flex-wrap self-stretch shrink-0 relative"
                      style={{ margin: "-68px 0 0 0" }}
                    >
                      <div className="flex flex-col items-start justify-start shrink-0 relative">
                        <div
                          className="text-[#202020] text-left relative"
                          style={{
                            font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                          }}
                        >
                          Production time: 2020.03
                        </div>

                        <div
                          className="text-[#202020] text-left relative"
                          style={{
                            margin: "-4px 0 0 0",
                            font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                          }}
                        >
                          制作时间：2020.03
                        </div>
                      </div>

                      <div className="flex flex-col items-start justify-start shrink-0 relative">
                        <div
                          className="text-[#202020] text-left relative"
                          style={{
                            font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                          }}
                        >
                          Degree of completion: 100%
                        </div>

                        <div
                          className="text-[#202020] text-left relative"
                          style={{
                            margin: "-4px 0 0 0",
                            font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                          }}
                        >
                          完成度：100%
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
                </div>

                <div
                  className="rounded-xl flex flex-col items-center justify-start self-stretch flex-1 relative overflow-hidden"
                  style={{ boxShadow: "4px 4px 10px 0px rgba(0, 0, 0, 0.25)" }}
                  onClick={goWillinsert}
                >
                  <div
                    className="text-[#202020] text-left relative self-stretch z-10"
                    style={{
                      font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    Will insert a pen holder
                  </div>

                  <div
                    className="flex flex-col items-center justify-start self-stretch flex-1 relative"
                    style={{ margin: "-79px 0 0 0" }}
                  >
                    <img
                      className="self-stretch flex-1 relative"
                      src="homepage-14.png"
                    />

                    <div
                      className="pt-0.5 pr-2 pb-0.5 pl-2 flex flex-row items-start justify-between flex-wrap self-stretch shrink-0 h-8 relative"
                      style={{ margin: "-68px 0 0 0" }}
                    >
                      <div className="flex flex-col items-start justify-start shrink-0 relative">
                        <div
                          className="text-[#202020] text-left relative"
                          style={{
                            font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                          }}
                        >
                          Production time: 2019.09
                        </div>

                        <div
                          className="text-[#202020] text-left relative"
                          style={{
                            margin: "-4px 0 0 0",
                            font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                          }}
                        >
                          制作时间：2019.09
                        </div>
                      </div>

                      <div className="flex flex-col items-start justify-start shrink-0 relative">
                        <div
                          className="text-[#202020] text-left relative"
                          style={{
                            font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                          }}
                        >
                          Degree of completion: 100%
                        </div>

                        <div
                          className="text-[#202020] text-left relative"
                          style={{
                            margin: "-4px 0 0 0",
                            font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                          }}
                        >
                          完成度：100%
                        </div>
                      </div>

                      <div className="flex flex-col items-start justify-start shrink-0 relative">
                        <div
                          className="text-[#202020] text-left relative"
                          style={{
                            font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                          }}
                        >
                          Type: originality
                        </div>

                        <div
                          className="text-[#202020] text-left relative"
                          style={{
                            margin: "-4px 0 0 0",
                            font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                          }}
                        >
                          类型：创意
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-5 items-end justify-start shrink-0 w-[1022px] h-[360px] relative">
                <div
                  className="rounded-xl flex flex-col items-center justify-start self-stretch flex-1 relative overflow-hidden"
                  style={{ boxShadow: "4px 4px 10px 0px rgba(0, 0, 0, 0.25)" }}
                  onClick={goRollin}
                >
                  <div
                    className="text-[#202020] text-left relative self-stretch z-10"
                    style={{
                      font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    Roll in the pen holder
                  </div>

                  <div
                    className="flex flex-col items-center justify-start self-stretch flex-1 relative"
                    style={{ margin: "-79px 0 0 0" }}
                  >
                    <img
                      className="self-stretch flex-1 relative"
                      src="homepage-15.png"
                    />

                    <div
                      className="pt-0.5 pr-2 pb-0.5 pl-2 flex flex-row items-start justify-between flex-wrap self-stretch shrink-0 relative"
                      style={{ margin: "-68px 0 0 0" }}
                    >
                      <div className="flex flex-col items-start justify-start shrink-0 relative">
                        <div
                          className="text-[#202020] text-left relative"
                          style={{
                            font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                          }}
                        >
                          Production time: 2019.09
                        </div>

                        <div
                          className="text-[#202020] text-left relative"
                          style={{
                            margin: "-4px 0 0 0",
                            font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                          }}
                        >
                          制作时间：2019.09
                        </div>
                      </div>

                      <div className="flex flex-col items-start justify-start shrink-0 relative">
                        <div
                          className="text-[#202020] text-left relative"
                          style={{
                            font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                          }}
                        >
                          Degree of completion: 100%
                        </div>

                        <div
                          className="text-[#202020] text-left relative"
                          style={{
                            margin: "-4px 0 0 0",
                            font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                          }}
                        >
                          完成度：100%
                        </div>
                      </div>

                      <div className="flex flex-col items-start justify-start shrink-0 relative">
                        <div
                          className="text-[#202020] text-left relative"
                          style={{
                            font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                          }}
                        >
                          Type: originality
                        </div>

                        <div
                          className="text-[#202020] text-left relative"
                          style={{
                            margin: "-4px 0 0 0",
                            font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                          }}
                        >
                          类型：创意
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="rounded-xl flex flex-col items-center justify-start self-stretch flex-1 relative overflow-hidden"
                  style={{ boxShadow: "4px 4px 10px 0px rgba(0, 0, 0, 0.25)" }}
                  onClick={goReticule}
                >
                  <div
                    className="text-[#202020] text-left relative self-stretch z-10"
                    style={{
                      font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    Reticule
                  </div>

                  <div
                    className="flex flex-col items-center justify-start self-stretch flex-1 relative"
                    style={{ margin: "-79px 0 0 0" }}
                  >
                    <img
                      className="self-stretch flex-1 relative"
                      src="homepage-16.png"
                    />

                    <div
                      className="pt-0.5 pr-2 pb-0.5 pl-2 flex flex-row items-start justify-between flex-wrap self-stretch shrink-0 relative"
                      style={{ margin: "-68px 0 0 0" }}
                    >
                      <div className="flex flex-col items-start justify-start shrink-0 relative">
                        <div
                          className="text-[#202020] text-left relative"
                          style={{
                            font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                          }}
                        >
                          Production time: 2019.09
                        </div>

                        <div
                          className="text-[#202020] text-left relative"
                          style={{
                            margin: "-4px 0 0 0",
                            font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                          }}
                        >
                          制作时间：2019.09
                        </div>
                      </div>

                      <div className="flex flex-col items-start justify-start shrink-0 relative">
                        <div
                          className="text-[#202020] text-left relative"
                          style={{
                            font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                          }}
                        >
                          Degree of completion: 100%
                        </div>

                        <div
                          className="text-[#202020] text-left relative"
                          style={{
                            margin: "-4px 0 0 0",
                            font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                          }}
                        >
                          完成度：100%
                        </div>
                      </div>

                      <div className="flex flex-col items-start justify-start shrink-0 relative">
                        <div
                          className="text-[#202020] text-left relative"
                          style={{
                            font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                          }}
                        >
                          Type: originality
                        </div>

                        <div
                          className="text-[#202020] text-left relative"
                          style={{
                            margin: "-4px 0 0 0",
                            font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                          }}
                        >
                          类型：创意
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
