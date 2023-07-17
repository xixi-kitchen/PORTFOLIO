import React from "react";
import { useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";

function Homepage({ ...props }) {

  const goNavigate = useNavigate(); //在Home组件里初始化一个uN对象
  const goAbspace = () => {
    goNavigate("/Abspace");
  };
  const goTour = () => {
    goNavigate("/Tour");
  };
  const goGeneral = () => {
    goNavigate("/General");
  };
  const goPractice = () => {
    goNavigate("/Practice");
  };

  // const goVector = () => {
  //   goNavigate("/Vector");
  // };
  // const goOne = () => {
  //   goNavigate("/One");
  // };
  const goSaint = () => {
    goNavigate("/Saint");
  };
  // const goMiss = () => {
  //   goNavigate("/Miss");
  // };
  const goMigiccomb = () => {
    goNavigate("/Migiccomb");
  };
  const goTwoface = () => {
    goNavigate("/Twoface");
  };
  // const goEscort = () => {
  //   goNavigate("/Escort");
  // };
  // const goEscortplus = () => {
  //   goNavigate("/Escortplus");
  // };
  const goAerobic = () => {
    goNavigate("/Aerobic");
  };
  const goNotlack = () => {
    goNavigate("/Notlack");
  };


  return (

      <div className="relative left-0 right-0 top-[0px] h-[7444px] overflow-hidden bg-[#ffffff]">
        <div className="absolute left-[209px] right-[209px] top-[226px] flex flex-col items-center justify-start gap-[61px]">
          <div className="relative flex shrink-0 flex-col items-center justify-start gap-0">
            <div
              className="relative text-left text-[#000000]"
              style={{
                font: "var(--en, 600 64px/150% 'Arial', sans-serif)",
              }}
            >
              Human Design Studio
            </div>

            <div
              className="relative text-left text-[#202020]"
              style={{
                font: "var(--cn, 300 40px/150% 'PingFang SC', sans-serif)",
              }}
            >
              [人类设计工作室]
            </div>
          </div>

          <div className="relative flex shrink-0 flex-col items-start justify-start gap-2.5 self-stretch">
            <div
              className="relative self-stretch text-left text-[#000000]"
              style={{
                font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              Human design studio is a virtual studio consisting of a designer
              who likes to do all kinds of novelty experiments, and an
              artificial intelligence (who is actually a person). When our
              design concept is unchanged, it is to make design more in line
              with life, conducive to life, benefit life, and let design serve
              human beings.
            </div>

            <div
              className="relative self-stretch text-left text-[#000000]"
              style={{
                font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
              }}
            >
              人类设计工作室是一个虚拟的工作室，由一个喜欢做各类新奇尝试的设计师和一个人工智能组成（其实就是一个人）。当我们的设计理念是不变的，就是让设计能更加贴合生活，利于生活、造福生活，让设计服务于人类。
            </div>
          </div>

          <div className="relative flex shrink-0 flex-col items-center justify-center gap-0.5 self-stretch">
            <div className="relative flex shrink-0 flex-row items-center justify-center gap-2.5">
              <div
                className="relative text-left text-[#606060]"
                style={{
                  font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Design concept
              </div>


              <div
                className="relative text-left text-[#8158fc]"
                style={{
                  font: "var(--cn, 300 40px/150% 'PingFang SC', sans-serif)",
                }}
              >
                |
              </div>
              <div
                className="relative text-left text-[#606060]"
                style={{
                  font: "var(--cn, 300 40px/150% 'PingFang SC', sans-serif)",
                }}
              >
                设计理念
              </div>
            </div>

            <div className="relative flex shrink-0 flex-row items-center justify-center gap-2.5 self-stretch bg-[#8158fc] p-2.5">
              <div
                className="relative flex-1 text-center text-[#ffffff]"
                style={{
                  font: "var(--en , 600 64px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Design benefits humanbeings
              </div>
            </div>
          </div>
        </div>

        <div className="absolute left-[209px] top-[1221px] flex flex-col items-start justify-start gap-0">
          <div
            className="relative text-left text-[#000000]"
            style={{
              font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
            }}
          >
            Designer
          </div>

          <div
            className="relative text-left text-[#000000]"
            style={{
              font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
            }}
          >
            设计师
          </div>
        </div>

        <div className="absolute left-[417px] top-[1221px] flex flex-col items-start justify-start gap-0">
          <div
            className="relative text-left text-[#000000]"
            style={{
              font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
            }}
          >
            Hugh Aix
          </div>

          <div
            className="relative text-left text-[#000000]"
            style={{
              font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
            }}
          >
            徐禧
          </div>
        </div>

        <div className="absolute left-[209px] top-[2330px] flex flex-col items-start justify-start gap-0">
          <div
            className="relative text-left text-[#000000]"
            style={{
              font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
            }}
          >
            Interactive column
          </div>

          <div
            className="relative text-left text-[#000000]"
            style={{
              font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
            }}
          >
            交互专栏
          </div>
        </div>

        <div className="absolute left-[209px] top-[3807px] flex flex-col items-start justify-start gap-0">
          <div
            className="relative text-left text-[#000000]"
            style={{
              font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
            }}
          >
            CLASSIC
          </div>

          <div
            className="relative text-left text-[#000000]"
            style={{
              font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
            }}
          >
            经典项目
          </div>
        </div>

        <div className="absolute left-[209px] right-[834px] top-[1324px] flex h-[316px] flex-col items-start justify-start gap-2.5">
          <div
            className="relative self-stretch text-left text-[#000000]"
            style={{
              font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
            }}
          >
            Although I came from an industrial designer, I don&#039;t want to be
            defined by industrial design, I prefer to call myself a [designer],
            I like to design all kinds of things, and I like to learn more new
            things and integrate them into my design work, from the most
            proficient industrial design to more cutting-edge interaction
            design, to advanced artificial intelligence, I am very interested
            and have been committed to systematic learning in these fields, and
            then combine it with my own design to make my design more diverse.
            It can better meet the increasingly diverse needs of human beings
            for design. Make design more human-friendly!
          </div>

          <div
            className="relative self-stretch text-left text-[#000000]"
            style={{
              font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
            }}
          >
            虽然出身专业是工业设计师，但我并不想被工业设计所定义，我更愿意称自己为一名[设计师]，我喜欢设计各种东西，也喜欢学习更多新事物并将其融合进自己的设计工作中，从最精通的工业设计到更加前沿的交互设计、再到超前的人工智能，我都很感兴趣并一直致力于在这些领域进行系统性的学习，然后将其与自己的设计相结合，来让我的设计更具多样性，更能满足人类对设计越来越多样化的需求。让设计更有利于人类！
          </div>
        </div>

        <div className="absolute left-[calc(50%_-_132px)] top-[1937px] flex flex-row items-start justify-center gap-5">
          <div
            className="relative text-left text-[#000000]"
            style={{
              font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)",
            }}
          >
            Project
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
            项目
          </div>
        </div>

        <div className="absolute left-[calc(50%_-_154px)] top-[5749px] flex flex-row items-start justify-center gap-5">
          <div
            className="relative text-left text-[#000000]"
            style={{
              font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)",
            }}
          >
            Monomer
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
            单体
          </div>
        </div>

        <div className="absolute left-[209px] right-[209px] top-[2124px] flex flex-col items-start justify-start gap-2.5">
          <div
            className="relative self-stretch text-left text-[#000000]"
            style={{
              font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
            }}
          >
            The works of the project category are mainly some works with a
            relatively complete design log. The design log of these works
            records the whole process of the work from the initial demand
            proposal, to the demand research, design analysis, inspiration
            burst, model verification and final product confirmation, and more
            completely records how a design product from the demand to the final
            presentation of the whole process, because the whole process is more
            perfect, so as a project to display, the design log is introduced on
            a separate page
          </div>

          <div
            className="relative self-stretch text-left text-[#000000]"
            style={{
              font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
            }}
          >
            项目类的作品主要是一些有着较为完整的设计日志的作品。这些作品的设计日志记录了该作品从最开始的需求提出，到需求调研、设计分析、灵感迸发、模型验证和最后成品确认的全过程，较为完整的记录了一件设计产品如何从需求到最终呈现的全过程，因为整个过程较为完善，所以作为一个项目进行展示，设计日志则做单独的页面进行介绍
          </div>
        </div>

        <div className="absolute left-[209px] right-[209px] top-[3601px] flex flex-col items-start justify-start gap-2.5">
          <div
            className="relative self-stretch text-left text-[#000000]"
            style={{
              font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
            }}
          >
            The works of the project category are mainly some works with a
            relatively complete design log. The design log of these works
            records the whole process of the work from the initial demand
            proposal, to the demand research, design analysis, inspiration
            burst, model verification and final product confirmation, and more
            completely records how a design product from the demand to the final
            presentation of the whole process, because the whole process is more
            perfect, so as a project to display, the design log is introduced on
            a separate page
          </div>

          <div
            className="relative self-stretch text-left text-[#000000]"
            style={{
              font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
            }}
          >
            项目类的作品主要是一些有着较为完整的设计日志的作品。这些作品的设计日志记录了该作品从最开始的需求提出，到需求调研、设计分析、灵感迸发、模型验证和最后成品确认的全过程，较为完整的记录了一件设计产品如何从需求到最终呈现的全过程，因为整个过程较为完善，所以作为一个项目进行展示，设计日志则做单独的页面进行介绍
          </div>
        </div>

        <div className="absolute left-[209px] right-[209px] top-[5912px] flex flex-col items-start justify-start gap-2.5">
          <div
            className="relative self-stretch text-left text-[#000000]"
            style={{
              font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
            }}
          >
            Individual works are usually products derived from the determined
            needs of others and the temporary creativity of individuals, and
            there is no complete design log or detailed production record, so
            they are displayed in a single form. Most creative categories.
          </div>

          <div
            className="relative self-stretch text-left text-[#000000]"
            style={{
              font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
            }}
          >
            单体类作品通常是由于别人的确定需求和个人的临时创意所衍生出来的产品，并没有较为完善的设计日志，也没有详实的制作记录，所以都是以单个的形式进行展现。创意类居多。
          </div>
        </div>

        <div className="absolute left-0 right-0 top-[3919px] flex h-[1672px] flex-col items-center justify-start gap-10">
          <div className="relative flex flex-1 flex-row items-start justify-start gap-2.5 self-stretch" onClick={goAerobic}>
            <img
              className="relative flex-1 self-stretch"
              src="homepage-6.png"
            />

            <div
              className="absolute left-[calc(50%_-_143px)] top-[calc(50%_-_96.2px)] flex shrink-0 flex-col items-center justify-center"
              style={{ boxShadow: "4px 4px 20px 0px rgba(0, 0, 0, 0.25)" }}
            >
              <div
                className="relative text-left text-[#ffffff]"
                style={{ font: "600 80px/150% 'PingFang SC', sans-serif" }}
              >
                aerobic
              </div>

              <div
                className="relative text-left text-[#ffffff]"
                style={{
                  margin: "-20px 0 0 0",
                  font: "100 60px/150% 'PingFang SC', sans-serif",
                }}
              >
                “有氧”
              </div>
            </div>
          </div>

          <div className="relative flex flex-1 flex-col items-start justify-start gap-2.5 self-stretch" onClick={goMigiccomb}>
            <img
              className="relative flex-1 self-stretch"
              src="homepage-7.png"
            />

            <div
              className="absolute left-[calc(50%_-_207px)] top-[calc(50%_-_84.6px)] flex shrink-0 flex-col items-center justify-center gap-5"
              style={{ boxShadow: "6px 8px 8px 0px rgba(0, 0, 0, 0.50)" }}
            >
              <div
                className="relative text-left text-[#ffffff]"
                style={{ font: "600 60px/150% 'PingFang SC', sans-serif" }}
              >
                Monster comb
              </div>

              <div
                className="relative text-left text-[#ffffff]"
                style={{ font: "300 40px/150% 'PingFang SC', sans-serif" }}
              >
                怪物梳
              </div>
            </div>
          </div>

          <div className="relative flex flex-1 flex-col items-start justify-start gap-2.5 self-stretch bg-[#f3f3f3]" onClick={goSaint}>
            <div className="relative flex flex-1 flex-col items-center justify-start gap-2.5 self-stretch">
              <img
                className="relative flex-1 self-stretch"
                src="homepage-8.png"
              />
            </div>

            <div
              className="absolute left-[calc(50%_-_170px)] top-[calc(50%_-_72.2px)] flex shrink-0 flex-col items-center justify-start gap-5"
              style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
            >
              <div
                className="relative text-left text-[#ececec]"
                style={{ font: "600 60px/150% 'PingFang SC', sans-serif" }}
              >
                Saint Lance
              </div>

              <div
                className="relative text-left text-[#ececec]"
                style={{ font: "300 40px/150% 'PingFang SC', sans-serif" }}
              >
                圣·兰斯号
              </div>
            </div>
          </div>

          <div className="relative flex flex-1 flex-col items-center justify-start gap-2.5 self-stretch" onClick={goTwoface}>
            <img
              className="relative flex-1 self-stretch"
              src="homepage-9.png"
            />

            <div className="absolute left-[calc(50%_-_358px)] top-[calc(50%_-_82.2px)] flex shrink-0 flex-col items-center justify-start">
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

          <div className="relative flex flex-1 flex-col items-start justify-start gap-2.5 self-stretch" onClick={goNotlack}>
            <img
              className="relative flex-1 self-stretch"
              src="homepage-10.png"
            />

            <div className="absolute left-[calc(50%_-_516px)] top-[calc(50%_-_67.2px)] flex shrink-0 flex-col items-center justify-start">
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
        </div>

        <div className="absolute left-[209px] right-[209px] top-[6022px] flex h-[360px] flex-row items-start justify-start gap-5">
          <div className="relative flex flex-1 flex-col items-center justify-start self-stretch">
            <div
              className="relative self-stretch text-left text-[#202020]"
              style={{
                font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)",
              }}
            >
              茶色杯 | CAcup
            </div>

            <div
              className="relative flex flex-1 flex-col items-center justify-start self-stretch"
              style={{ margin: "-79px 0 0 0" }}
            >
              <img
                className="relative flex-1 self-stretch"
                src="homepage-11.png"
              />

              <div
                className="relative flex h-9 shrink-0 flex-row items-start justify-between self-stretch"
                style={{ margin: "-68px 0 0 0", flexWrap: "wrap" }}
              >
                <div className="relative flex shrink-0 flex-col items-start justify-start pb-0.5 pl-2 pr-2 pt-0.5">
                  <div
                    className="relative text-left text-[#202020]"
                    style={{
                      font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    Production time: 2022.03.22
                  </div>

                  <div
                    className="relative text-left text-[#202020]"
                    style={{
                      margin: "-4px 0 0 0",
                      font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    制作时间：2022.03.22
                  </div>
                </div>

                <div className="relative flex shrink-0 flex-col items-start justify-start pb-0.5 pl-2 pr-2 pt-0.5">
                  <div
                    className="relative text-left text-[#202020]"
                    style={{
                      font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    Degree of completion: 100%
                  </div>

                  <div
                    className="relative text-left text-[#202020]"
                    style={{
                      margin: "-4px 0 0 0",
                      font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    完成度：100%
                  </div>
                </div>

                <div className="relative flex shrink-0 flex-col items-start justify-start pb-0.5 pl-2 pr-2 pt-0.5">
                  <div
                    className="relative text-left text-[#202020]"
                    style={{
                      font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    Type: Requirement
                  </div>

                  <div
                    className="relative text-left text-[#202020]"
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

          <div className="relative flex flex-1 flex-col items-center justify-start self-stretch">
            <div
              className="relative self-stretch text-left text-[#202020]"
              style={{
                font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)",
              }}
            >
              End tables
            </div>

            <div
              className="relative flex flex-1 flex-col items-center justify-start self-stretch"
              style={{ margin: "-79px 0 0 0" }}
            >
              <img
                className="relative flex-1 self-stretch"
                src="homepage-12.png"
              />

              <div
                className="relative flex h-8 shrink-0 flex-row items-start justify-between self-stretch"
                style={{ margin: "-68px 0 0 0", flexWrap: "wrap" }}
              >
                <div className="relative flex shrink-0 flex-col items-start justify-start pb-0.5 pl-2 pr-2 pt-0.5">
                  <div
                    className="relative text-left text-[#202020]"
                    style={{
                      font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    Production time: 2020.03
                  </div>

                  <div
                    className="relative text-left text-[#202020]"
                    style={{
                      margin: "-4px 0 0 0",
                      font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    制作时间：2020.03
                  </div>
                </div>

                <div className="relative flex shrink-0 flex-col items-start justify-start pb-0.5 pl-2 pr-2 pt-0.5">
                  <div
                    className="relative text-left text-[#202020]"
                    style={{
                      font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    Degree of completion: 100%
                  </div>

                  <div
                    className="relative text-left text-[#202020]"
                    style={{
                      margin: "-4px 0 0 0",
                      font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    完成度：100%
                  </div>
                </div>

                <div className="relative flex shrink-0 flex-col items-start justify-start pb-0.5 pl-2 pr-2 pt-0.5">
                  <div
                    className="relative text-left text-[#202020]"
                    style={{
                      font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    Type: Requirement
                  </div>

                  <div
                    className="relative text-left text-[#202020]"
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

        <div className="absolute left-[209px] right-[209px] top-[6428px] flex h-[360px] flex-row items-start justify-start gap-5">
          <div className="relative flex flex-1 flex-col items-center justify-start self-stretch">
            <div
              className="relative self-stretch text-left text-[#202020]"
              style={{
                font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)",
              }}
            >
              Cabinets
            </div>

            <div
              className="relative flex flex-1 flex-col items-center justify-start self-stretch"
              style={{ margin: "-79px 0 0 0" }}
            >
              <img
                className="relative flex-1 self-stretch"
                src="homepage-13.png"
              />

              <div
                className="relative flex shrink-0 flex-row items-start justify-between self-stretch pb-0.5 pl-2 pr-2 pt-0.5"
                style={{ margin: "-68px 0 0 0", flexWrap: "wrap" }}
              >
                <div className="relative flex shrink-0 flex-col items-start justify-start">
                  <div
                    className="relative text-left text-[#202020]"
                    style={{
                      font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    Production time: 2020.03
                  </div>

                  <div
                    className="relative text-left text-[#202020]"
                    style={{
                      margin: "-4px 0 0 0",
                      font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    制作时间：2020.03
                  </div>
                </div>

                <div className="relative flex shrink-0 flex-col items-start justify-start">
                  <div
                    className="relative text-left text-[#202020]"
                    style={{
                      font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    Degree of completion: 100%
                  </div>

                  <div
                    className="relative text-left text-[#202020]"
                    style={{
                      margin: "-4px 0 0 0",
                      font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    完成度：100%
                  </div>
                </div>

                <div className="relative flex shrink-0 flex-col items-start justify-start">
                  <div
                    className="relative text-left text-[#202020]"
                    style={{
                      font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    Type: Requirement
                  </div>

                  <div
                    className="relative text-left text-[#202020]"
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

          <div className="relative flex flex-1 flex-col items-center justify-start self-stretch">
            <div
              className="relative self-stretch text-left text-[#202020]"
              style={{
                font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)",
              }}
            >
              Will insert a pen holder
            </div>

            <div
              className="relative flex flex-1 flex-col items-center justify-start self-stretch"
              style={{ margin: "-79px 0 0 0" }}
            >
              <img
                className="relative flex-1 self-stretch"
                src="homepage-14.png"
              />

              <div
                className="relative flex h-8 shrink-0 flex-row items-start justify-between self-stretch pb-0.5 pl-2 pr-2 pt-0.5"
                style={{ margin: "-68px 0 0 0", flexWrap: "wrap" }}
              >
                <div className="relative flex shrink-0 flex-col items-start justify-start">
                  <div
                    className="relative text-left text-[#202020]"
                    style={{
                      font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    Production time: 2019.09
                  </div>

                  <div
                    className="relative text-left text-[#202020]"
                    style={{
                      margin: "-4px 0 0 0",
                      font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    制作时间：2019.09
                  </div>
                </div>

                <div className="relative flex shrink-0 flex-col items-start justify-start">
                  <div
                    className="relative text-left text-[#202020]"
                    style={{
                      font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    Degree of completion: 100%
                  </div>

                  <div
                    className="relative text-left text-[#202020]"
                    style={{
                      margin: "-4px 0 0 0",
                      font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    完成度：100%
                  </div>
                </div>

                <div className="relative flex shrink-0 flex-col items-start justify-start">
                  <div
                    className="relative text-left text-[#202020]"
                    style={{
                      font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    Type: originality
                  </div>

                  <div
                    className="relative text-left text-[#202020]"
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

        <div className="absolute left-[209px] right-[209px] top-[6886px] flex h-[360px] flex-row items-end justify-start gap-5">
          <div className="relative flex flex-1 flex-col items-center justify-start self-stretch">
            <div
              className="relative self-stretch text-left text-[#202020]"
              style={{
                font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)",
              }}
            >
              Roll in the pen holder
            </div>

            <div
              className="relative flex flex-1 flex-col items-center justify-start self-stretch"
              style={{ margin: "-79px 0 0 0" }}
            >
              <img
                className="relative flex-1 self-stretch"
                src="homepage-15.png"
              />

              <div
                className="relative flex shrink-0 flex-row items-start justify-between self-stretch pb-0.5 pl-2 pr-2 pt-0.5"
                style={{ margin: "-68px 0 0 0", flexWrap: "wrap" }}
              >
                <div className="relative flex shrink-0 flex-col items-start justify-start">
                  <div
                    className="relative text-left text-[#202020]"
                    style={{
                      font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    Production time: 2019.09
                  </div>

                  <div
                    className="relative text-left text-[#202020]"
                    style={{
                      margin: "-4px 0 0 0",
                      font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    制作时间：2019.09
                  </div>
                </div>

                <div className="relative flex shrink-0 flex-col items-start justify-start">
                  <div
                    className="relative text-left text-[#202020]"
                    style={{
                      font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    Degree of completion: 100%
                  </div>

                  <div
                    className="relative text-left text-[#202020]"
                    style={{
                      margin: "-4px 0 0 0",
                      font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    完成度：100%
                  </div>
                </div>

                <div className="relative flex shrink-0 flex-col items-start justify-start">
                  <div
                    className="relative text-left text-[#202020]"
                    style={{
                      font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    Type: originality
                  </div>

                  <div
                    className="relative text-left text-[#202020]"
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

          <div className="relative flex flex-1 flex-col items-center justify-start self-stretch">
            <div
              className="relative self-stretch text-left text-[#202020]"
              style={{
                font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)",
              }}
            >
              Reticule
            </div>

            <div
              className="relative flex flex-1 flex-col items-center justify-start self-stretch"
              style={{ margin: "-79px 0 0 0" }}
            >
              <img
                className="relative flex-1 self-stretch"
                src="homepage-16.png"
              />

              <div
                className="relative flex shrink-0 flex-row items-start justify-between self-stretch pb-0.5 pl-2 pr-2 pt-0.5"
                style={{ margin: "-68px 0 0 0", flexWrap: "wrap" }}
              >
                <div className="relative flex shrink-0 flex-col items-start justify-start">
                  <div
                    className="relative text-left text-[#202020]"
                    style={{
                      font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    Production time: 2019.09
                  </div>

                  <div
                    className="relative text-left text-[#202020]"
                    style={{
                      margin: "-4px 0 0 0",
                      font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    制作时间：2019.09
                  </div>
                </div>

                <div className="relative flex shrink-0 flex-col items-start justify-start">
                  <div
                    className="relative text-left text-[#202020]"
                    style={{
                      font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    Degree of completion: 100%
                  </div>

                  <div
                    className="relative text-left text-[#202020]"
                    style={{
                      margin: "-4px 0 0 0",
                      font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    完成度：100%
                  </div>
                </div>

                <div className="relative flex shrink-0 flex-col items-start justify-start">
                  <div
                    className="relative text-left text-[#202020]"
                    style={{
                      font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                    }}
                  >
                    Type: originality
                  </div>

                  <div
                    className="relative text-left text-[#202020]"
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

        <img
          className="absolute left-[626px] right-[209px] top-[1124px] h-[605px]"
          src="homepage-1.png"
        />

        <div className="absolute left-[calc(50%_-_720px)] top-[2433px] flex h-[1080px] w-[1440px] flex-row items-start justify-start gap-5">
          <div
            className="relative flex flex-1 flex-row items-start justify-start gap-2.5 self-stretch rounded-lg"
            onClick={goAbspace}
          >
            <img
              className="relative flex-1 self-stretch rounded-2xl"
              src="homepage-2.png"
            />

            <div
              className="absolute left-[calc(50%_-_151.5px)] top-[calc(50%_-_32px)] w-[305px] text-center text-[#ffffff]"
              style={{ font: "600 60px 'Archivo', sans-serif" }}
            >
              A-B Space
            </div>
          </div>

          <div
            className="relative flex flex-1 flex-row items-start justify-start gap-2.5 self-stretch"
            onClick={goTour}
          >
            <img
              className="relative h-[1080px] w-[345px] shrink-0 rounded-2xl"
              src="homepage-3.png"
            />

            <div
              className="absolute left-[37px] top-[468px] text-left text-[#a30000]"
              style={{ font: "600 96px/150% 'PingFang SC', sans-serif" }}
            >
              TOUR
            </div>
          </div>

          <div className="relative flex flex-1 flex-col items-start justify-start gap-2.5 self-stretch" onClick={goGeneral}>
            <img
              className="relative flex-1 self-stretch rounded-2xl"
              src="homepage-4.png"
            />

            <div
              className="absolute left-[calc(50%_-_163.5px)] top-[calc(50%_-_60px)] text-center text-[#ffffff]"
              style={{ font: "600 40px/150% 'PingFang SC', sans-serif" }}
            >
              GENERAL UI <br />
              DESIGN SCREENS
            </div>
          </div>

          <div className="relative flex flex-1 flex-col items-start justify-start gap-2.5 self-stretch" onClick={goPractice}>
            <img
              className="relative flex-1 self-stretch rounded-2xl"
              src="homepage-5.png"
            />

            <div
              className="absolute left-[calc(50%_-_159.5px)] top-[calc(50%_-_48px)] text-left text-[#ffffff]"
              style={{ font: "600 64px/150% 'PingFang SC', sans-serif" }}
            >
              PRACTICE
            </div>
          </div>
        </div>

        <div className="absolute left-[209px] top-[1650px] flex flex-row items-center justify-center gap-2.5 rounded-[5px] bg-[#424242] pb-0.5 pl-2.5 pr-2.5 pt-0.5">
          <div
            className="relative text-left text-[#ffffff]"
            style={{
              font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
            }}
          >
            MORE
          </div>

          <div
            className="relative text-left text-[#ffffff]"
            style={{
              font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
            }}
          >
            👉
          </div>
        </div>
      </div>

  );
}

export default Homepage;
