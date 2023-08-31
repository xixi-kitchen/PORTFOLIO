import React from "react";
import { useNavigate } from "react-router-dom";

function Monomer() {
  const goNavigate = useNavigate(); //在Home组件里初始化一个uN对
  //平面内容的导航方法
  const goInnologo = () => {
    goNavigate("/innologo");
  };
  const goHours = () => {
    goNavigate("/hours");
  };
  const goTypography = () => {
    goNavigate("/typography");
  };
  const goWallpaper = () => {
    goNavigate("/wallpaper");
  };
  const goFablabvi = () => {
    goNavigate("/fablabvi");
  };
  //模型内容的导航方法
  const goCacup = () => {
    goNavigate("/cacup");
  };

  const goEndtables = () => {
    goNavigate("/endtables");
  };
  const goBowlmats = () => {
    goNavigate("/bowlmats");
  };

  const goCabinets = () => {
    goNavigate("/cabinets");
  };
  const goCountbuckets = () => {
    goNavigate("/countbuckets");
  };

  const goJiaolong = () => {
    goNavigate("/jiaolong");
  };
  const goMagnetic = () => {
    goNavigate("/magnetic");
  };
  const goPropeller = () => {
    goNavigate("/propeller");
  };
  const goReticule = () => {
    goNavigate("/reticule");
  };
  const goReversecar = () => {
    goNavigate("/reversecar");
  };
  const goRollin = () => {
    goNavigate("/rollin");
  };
  const goSunwardred = () => {
    goNavigate("/sunwardred");
  };
  const goWillinsert = () => {
    goNavigate("/willinsert");
  };

  return (
    <div className="flex  w-full flex-col justify-start gap-[60px]  bg-slate-400">
      <div className=" relative top-5 flex flex-col items-start left-8 justify-start gap-5">
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
            font: "var(--cn, 300 40px/20% 'PingFang SC', sans-serif)",
          }}
        >
          单体
        </div>
      </div>
      <div className="relative mx-auto left-8 flex w-full flex-1 flex-row flex-wrap items-start justify-start gap-[30px] gap-y-[23px]">
        <div
          className="relative flex h-[350px] w-[200px] shrink-0 flex-col items-start justify-start gap-2.5 rounded-[10px] bg-[#ffffff] p-2.5"
          style={{ boxShadow: "4px 4px 8px 0px rgba(0, 0, 0, 0.25)" }}
          onClick={goCacup}
        >
          <img
            className="relative h-[153.92px] shrink-0 self-stretch rounded-[5px]"
            src="monomer-cup.png"
          />

          <div className="relative flex shrink-0 flex-col items-start justify-start gap-1">
            <div className="relative flex shrink-0 flex-col items-start justify-start">
              <div
                className="relative text-left text-[#202020]"
                style={{
                  font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
                }}
              >
                CAcup
              </div>

              <div
                className="relative text-left text-[#202020]"
                style={{
                  margin: "-10px 0 0 0",
                  font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
                }}
              >
                茶色杯
              </div>
            </div>

            <div className="relative flex shrink-0 flex-col items-start justify-start">
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

        <div
          className="relative flex h-[350px] w-[200px] shrink-0 flex-col items-start justify-start gap-2.5 rounded-[10px] bg-[#ffffff] p-2.5"
          style={{ boxShadow: "4px 4px 8px 0px rgba(0, 0, 0, 0.25)" }}
          onClick={goEndtables}
        >
          <img
            className="relative h-[137px] shrink-0 self-stretch rounded-[5px]"
            src="monomer-tables.png"
          />

          <div className="relative flex shrink-0 flex-col items-start justify-start gap-1">
            <div className="relative flex shrink-0 flex-col items-start justify-start">
              <div
                className="relative text-left text-[#202020]"
                style={{
                  font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
                }}
              >
                End tables
              </div>

              <div
                className="relative text-left text-[#202020]"
                style={{
                  margin: "-10px 0 0 0",
                  font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
                }}
              >
                坐几
              </div>
            </div>

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

        <div
          className="relative flex h-[350px] w-[200px] shrink-0 flex-col items-start justify-start gap-2.5 rounded-[10px] bg-[#ffffff] p-2.5"
          style={{ boxShadow: "4px 4px 8px 0px rgba(0, 0, 0, 0.25)" }}
          onClick={goCabinets}
        >
          <img
            className="relative h-[139.8px] shrink-0 self-stretch rounded-[5px]"
            src="monomer-cabinets.png"
          />

          <div className="relative flex shrink-0 flex-col items-start justify-start gap-1">
            <div className="relative flex shrink-0 flex-col items-start justify-start">
              <div
                className="relative text-left text-[#202020]"
                style={{
                  font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Cabinets
              </div>

              <div
                className="relative text-left text-[#202020]"
                style={{
                  margin: "-10px 0 0 0",
                  font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
                }}
              >
                柜子
              </div>
            </div>

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

        <div
          className="relative flex h-[350px] w-[200px] shrink-0 flex-col items-start justify-start gap-2.5 rounded-[10px] bg-[#ffffff] p-2.5"
          style={{ boxShadow: "4px 4px 8px 0px rgba(0, 0, 0, 0.25)" }}
          onClick={goTypography}
        >
          <img
            className="relative h-[191px] shrink-0 self-stretch rounded-[5px]"
            src="monomer-typography.png"
          />

          <div className="relative flex shrink-0 flex-col items-start justify-start gap-1">
            <div className="relative flex shrink-0 flex-col items-start justify-start">
              <div
                className="relative text-left text-[#202020]"
                style={{
                  font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Typography
              </div>

              <div
                className="relative text-left text-[#202020]"
                style={{
                  margin: "-6px 0 0 0",
                  font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
                }}
              >
                排版设计系列
              </div>
            </div>

            <div className="relative flex shrink-0 flex-col items-start justify-start">
              <div
                className="relative text-left text-[#202020]"
                style={{
                  font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Production time: 2019.04.17
              </div>

              <div
                className="relative text-left text-[#202020]"
                style={{
                  margin: "-4px 0 0 0",
                  font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                制作时间：2019.04.17
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

        <div
          className="relative flex h-[350px] w-[200px] shrink-0 flex-col items-start justify-start gap-2.5 rounded-[10px] bg-[#ffffff] p-2.5"
          style={{ boxShadow: "4px 4px 8px 0px rgba(0, 0, 0, 0.25)" }}
          onClick={goWillinsert}
        >
          <img
            className="relative h-[141.39px] shrink-0 self-stretch rounded-[5px]"
            src="monomer-insert.png"
          />

          <div className="relative flex shrink-0 flex-col items-start justify-start gap-1">
            <div className="relative flex shrink-0 flex-col items-start justify-start self-stretch">
              <div
                className="relative self-stretch text-left text-[#202020]"
                style={{ font: "600 18px/150% 'PingFang SC', sans-serif" }}
              >
                insert pen holder
              </div>

              <div
                className="relative text-left text-[#202020]"
                style={{
                  margin: "-6px 0 0 0",
                  font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
                }}
              >
                会插笔筒
              </div>
            </div>

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

        <div
          className="relative flex h-[350px] w-[200px] shrink-0 flex-col items-start justify-start gap-2.5 rounded-[10px] bg-[#ffffff] p-2.5"
          style={{ boxShadow: "4px 4px 8px 0px rgba(0, 0, 0, 0.25)" }}
          onClick={goHours}
        >
          <img
            className="relative h-[203.35px] shrink-0 self-stretch"
            src="monomer-hours.png"
          />

          <div className="relative flex shrink-0 flex-col items-start justify-start gap-1">
            <div className="relative flex shrink-0 flex-col items-start justify-start">
              <div
                className="relative text-left text-[#202020]"
                style={{
                  font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
                }}
              >
                10Hours
              </div>

              <div
                className="relative text-left text-[#202020]"
                style={{
                  margin: "-10px 0 0 0",
                  font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
                }}
              >
                十小时计划
              </div>
            </div>

            <div className="relative flex shrink-0 flex-col items-start justify-start">
              <div
                className="relative text-left text-[#202020]"
                style={{
                  font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Production time: 2018.05.27
              </div>

              <div
                className="relative text-left text-[#202020]"
                style={{
                  margin: "-4px 0 0 0",
                  font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                制作时间：2018.05.27
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

        <div
          className="relative flex h-[350px] w-[200px] shrink-0 flex-col items-start justify-start gap-2.5 rounded-[10px] bg-[#ffffff] p-2.5"
          style={{ boxShadow: "4px 4px 8px 0px rgba(0, 0, 0, 0.25)" }}
          onClick={goRollin}
        >
          <img
            className="relative h-[141.79px] shrink-0 self-stretch rounded-[5px]"
            src="monomer-roll.png"
          />

          <div className="relative flex shrink-0 flex-col items-start justify-start gap-1">
            <div className="relative flex shrink-0 flex-col items-start justify-start">
              <div
                className="relative text-left text-[#202020]"
                style={{ font: "600 18px/150% 'PingFang SC', sans-serif" }}
              >
                Roll pen holder
              </div>

              <div
                className="relative text-left text-[#202020]"
                style={{
                  margin: "-10px 0 0 0",
                  font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
                }}
              >
                卷插笔筒
              </div>
            </div>

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

        <div
          className="relative flex h-[350px] w-[200px] shrink-0 flex-col items-start justify-start gap-2.5 rounded-[10px] bg-[#ffffff] p-2.5"
          style={{ boxShadow: "4px 4px 8px 0px rgba(0, 0, 0, 0.25)" }}
          onClick={goReticule}
        >
          <img
            className="relative h-[141.41px] shrink-0 self-stretch rounded-[5px]"
            src="monomer-reticule.png"
          />

          <div className="relative flex shrink-0 flex-col items-start justify-start gap-1">
            <div className="relative flex shrink-0 flex-col items-start justify-start">
              <div
                className="relative text-left text-[#202020]"
                style={{
                  font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Reticule
              </div>

              <div
                className="relative text-left text-[#202020]"
                style={{
                  margin: "-10px 0 0 0",
                  font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
                }}
              >
                手提袋
              </div>
            </div>

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
                Degree of completion:100%
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

        <div
          className="relative flex h-[350px] w-[200px] shrink-0 flex-col items-start justify-start gap-2.5 rounded-[10px] bg-[#ffffff] p-2.5"
          style={{ boxShadow: "4px 4px 8px 0px rgba(0, 0, 0, 0.25)" }}
          onClick={goBowlmats}
        >
          <img
            className="relative h-[141.41px] shrink-0 self-stretch rounded-[5px]"
            src="monomer-mats.png"
          />

          <div className="relative flex shrink-0 flex-col items-start justify-start gap-1">
            <div className="relative flex shrink-0 flex-col items-start justify-start">
              <div
                className="relative text-left text-[#202020]"
                style={{
                  font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Bowl mats
              </div>

              <div
                className="relative text-left text-[#202020]"
                style={{
                  margin: "-10px 0 0 0",
                  font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
                }}
              >
                碗垫
              </div>
            </div>

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
                Degree of completion:100%
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

        <div
          className="relative flex h-[350px] w-[200px] shrink-0 flex-col items-start justify-start gap-2.5 rounded-[10px] bg-[#ffffff] p-2.5"
          style={{ boxShadow: "4px 4px 8px 0px rgba(0, 0, 0, 0.25)" }}
          onClick={goWallpaper}
        >
          <img
            className="relative h-[201px] shrink-0 self-stretch"
            src="monomer-strange.png"
          />

          <div className="relative flex shrink-0 flex-col items-start justify-start gap-1">
            <div className="relative flex shrink-0 flex-col items-start justify-start">
              <div
                className="relative text-left text-[#202020]"
                style={{
                  font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Strange wallpaper
              </div>

              <div
                className="relative text-left text-[#202020]"
                style={{
                  margin: "-6px 0 0 0",
                  font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
                }}
              >
                奇怪系列壁纸
              </div>
            </div>

            <div className="relative flex shrink-0 flex-col items-start justify-start">
              <div
                className="relative text-left text-[#202020]"
                style={{
                  font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Production time: 2018.11.09
              </div>

              <div
                className="relative text-left text-[#202020]"
                style={{
                  margin: "-4px 0 0 0",
                  font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                制作时间：2018.11.09
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

        <div
          className="relative flex h-[350px] w-[200px] shrink-0 flex-col items-start justify-start gap-2.5 rounded-[10px] bg-[#ffffff] p-2.5"
          style={{ boxShadow: "4px 4px 8px 0px rgba(0, 0, 0, 0.25)" }}
          onClick={goFablabvi}
        >
          <img
            className="relative h-[200px] shrink-0 self-stretch"
            src="monomer-fablab.png"
          />

          <div className="relative flex shrink-0 flex-col items-start justify-start gap-1">
            <div className="relative flex shrink-0 flex-col items-start justify-start">
              <div
                className="relative text-left text-[#202020]"
                style={{
                  font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Fablab VI
              </div>

              <div
                className="relative text-left text-[#202020]"
                style={{
                  margin: "-10px 0 0 0",
                  font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
                }}
              >
                fablab部分视觉设计
              </div>
            </div>

            <div className="relative flex shrink-0 flex-col items-start justify-start">
              <div
                className="relative text-left text-[#202020]"
                style={{
                  font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Production time: 2017.06
              </div>

              <div
                className="relative text-left text-[#202020]"
                style={{
                  margin: "-4px 0 0 0",
                  font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                制作时间：2017.06
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

        <div
          className="relative flex h-[350px] w-[200px] shrink-0 flex-col items-start justify-start gap-2.5 rounded-[10px] bg-[#ffffff] p-2.5"
          style={{ boxShadow: "4px 4px 8px 0px rgba(0, 0, 0, 0.25)" }}
          onClick={goInnologo}
        >
          <img
            className="relative h-[139.84px] w-[100px] shrink-0"
            src="monomer-inno.png"
          />

          <div className="relative flex shrink-0 flex-col items-start justify-start gap-1">
            <div className="relative flex shrink-0 flex-col items-start justify-start">
              <div
                className="relative text-left text-[#202020]"
                style={{
                  font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
                }}
              >
                innoLOGO
              </div>

              <div
                className="relative text-left text-[#202020]"
                style={{
                  margin: "-10px 0 0 0",
                  font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
                }}
              >
                inno比赛LOGO
              </div>
            </div>

            <div className="relative flex shrink-0 flex-col items-start justify-start">
              <div
                className="relative text-left text-[#202020]"
                style={{
                  font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Production time: 2018.12.17
              </div>

              <div
                className="relative text-left text-[#202020]"
                style={{
                  margin: "-4px 0 0 0",
                  font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                制作时间：2018.12.17
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

        <div
          className="relative flex h-[350px] w-[200px] shrink-0 flex-col items-start justify-start gap-2.5 rounded-[10px] bg-[#ffffff] p-2.5"
          style={{ boxShadow: "4px 4px 8px 0px rgba(0, 0, 0, 0.25)" }}
          onClick={goMagnetic}
        >
          <img
            className="relative h-[153.7px] shrink-0 self-stretch rounded-[5px]"
            src="monomer-magnetic.png"
          />

          <div className="relative flex shrink-0 flex-col items-start justify-start gap-1">
            <div className="relative flex shrink-0 flex-col items-start justify-start">
              <div
                className="relative text-left text-[#202020]"
                style={{
                  font: "var(--en, 600 20px/100% 'PingFang SC', sans-serif)",
                }}
              >
                Magnetic pen case
              </div>

              <div
                className="relative text-left text-[#202020]"
                style={{
                  margin: "-6px 0 0 0",
                  font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
                }}
              >
                磁吸笔盒
              </div>
            </div>

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
                Degree of completion:100%
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

        <div
          className="relative flex h-[350px] w-[200px] shrink-0 flex-col items-start justify-start gap-2.5 rounded-[10px] bg-[#ffffff] p-2.5"
          style={{ boxShadow: "4px 4px 8px 0px rgba(0, 0, 0, 0.25)" }}
          onClick={goSunwardred}
        >
          <img
            className="relative h-[141.41px] shrink-0 self-stretch rounded-[5px]"
            src="monomer-sunward.png"
          />

          <div className="relative flex shrink-0 flex-col items-start justify-start gap-1">
            <div className="relative flex shrink-0 flex-col items-start justify-start">
              <div
                className="relative w-[127px] text-left text-[#202020]"
                style={{
                  font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Sunward Red
              </div>

              <div
                className="relative text-left text-[#202020]"
                style={{
                  margin: "-10px 0 0 0",
                  font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
                }}
              >
                向阳红号
              </div>
            </div>

            <div className="relative flex shrink-0 flex-col items-start justify-start">
              <div
                className="relative text-left text-[#202020]"
                style={{
                  font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Production time: 2018.08
              </div>

              <div
                className="relative text-left text-[#202020]"
                style={{
                  margin: "-4px 0 0 0",
                  font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                制作时间：2018.08
              </div>
            </div>

            <div className="relative flex shrink-0 flex-col items-start justify-start">
              <div
                className="relative text-left text-[#202020]"
                style={{
                  font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Degree of completion:100%
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

        <div
          className="relative flex h-[350px] w-[200px] shrink-0 flex-col items-start justify-start gap-2.5 rounded-[10px] bg-[#ffffff] p-2.5"
          style={{ boxShadow: "4px 4px 8px 0px rgba(0, 0, 0, 0.25)" }}
          onClick={goJiaolong}
        >
          <img
            className="relative h-[141.41px] shrink-0 self-stretch rounded-[5px]"
            src="monomer-jiaolonghao.png"
          />

          <div className="relative flex shrink-0 flex-col items-start justify-start gap-1">
            <div className="relative flex shrink-0 flex-col items-start justify-start">
              <div
                className="relative text-left text-[#202020]"
                style={{
                  font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Jiaolong
              </div>

              <div
                className="relative text-left text-[#202020]"
                style={{
                  margin: "-10px 0 0 0",
                  font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
                }}
              >
                蛟龙号
              </div>
            </div>

            <div className="relative flex shrink-0 flex-col items-start justify-start">
              <div
                className="relative text-left text-[#202020]"
                style={{
                  font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Production time: 2018.07
              </div>

              <div
                className="relative text-left text-[#202020]"
                style={{
                  margin: "-4px 0 0 0",
                  font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                制作时间：2018.07
              </div>
            </div>

            <div className="relative flex shrink-0 flex-col items-start justify-start">
              <div
                className="relative text-left text-[#202020]"
                style={{
                  font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Degree of completion: 90%
              </div>

              <div
                className="relative text-left text-[#202020]"
                style={{
                  margin: "-4px 0 0 0",
                  font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                完成度：90%
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
        
        <div
          className="relative flex h-[350px] w-[200px] shrink-0 flex-col items-start justify-start gap-2.5 rounded-[10px] bg-[#ffffff] p-2.5"
          style={{ boxShadow: "4px 4px 8px 0px rgba(0, 0, 0, 0.25)" }}
          onClick={goPropeller}
        >
          <img
            className="relative h-[141.41px] shrink-0 self-stretch rounded-[5px]"
            src="monomer-propeller.png"
          />

          <div className="relative flex shrink-0 flex-col items-start justify-start gap-1">
            <div className="relative flex shrink-0 flex-col items-start justify-start">
              <div
                className="relative text-left text-[#202020]"
                style={{
                  font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Propeller
              </div>

              <div
                className="relative text-left text-[#202020]"
                style={{
                  margin: "-10px 0 0 0",
                  font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
                }}
              >
                螺旋桨
              </div>
            </div>

            <div className="relative flex shrink-0 flex-col items-start justify-start">
              <div
                className="relative text-left text-[#202020]"
                style={{
                  font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Production time: 2017.02
              </div>

              <div
                className="relative text-left text-[#202020]"
                style={{
                  margin: "-4px 0 0 0",
                  font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                制作时间：2017.02
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

        <div
          className="relative flex h-[350px] w-[200px] shrink-0 flex-col items-start justify-start gap-2.5 rounded-[10px] bg-[#ffffff] p-2.5"
          style={{ boxShadow: "4px 4px 8px 0px rgba(0, 0, 0, 0.25)" }}
          onClick={goReversecar}
        >
          <img
            className="relative h-[141.41px] shrink-0 self-stretch rounded-[5px]"
            src="monomer-reverse.png"
          />

          <div className="relative flex shrink-0 flex-col items-start justify-start gap-1">
            <div className="relative flex shrink-0 flex-col items-start justify-start">
              <div
                className="relative w-[127px] text-left text-[#202020]"
                style={{
                  font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Reverse car
              </div>

              <div
                className="relative text-left text-[#202020]"
                style={{
                  margin: "-10px 0 0 0",
                  font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
                }}
              >
                倒行车
              </div>
            </div>

            <div className="relative flex shrink-0 flex-col items-start justify-start">
              <div
                className="relative text-left text-[#202020]"
                style={{
                  font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Production time: 2018.10
              </div>

              <div
                className="relative text-left text-[#202020]"
                style={{
                  margin: "-4px 0 0 0",
                  font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                制作时间：2018.10
              </div>
            </div>

            <div className="relative flex shrink-0 flex-col items-start justify-start">
              <div
                className="relative text-left text-[#202020]"
                style={{
                  font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Degree of completion:100%
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

        {/* <div
          className="relative flex h-[350px] w-[200px] shrink-0 flex-col items-start justify-start gap-2.5 rounded-[10px] bg-[#ffffff] p-2.5"
          style={{ boxShadow: "4px 4px 8px 0px rgba(0, 0, 0, 0.25)" }}
          onClick={goCountbuckets}
        >
          <img
            className="relative h-[141.18px] shrink-0 self-stretch rounded-[5px]"
            src="monomer-count.png"
          />

          <div className="relative flex shrink-0 flex-col items-start justify-start gap-1">
            <div className="relative flex shrink-0 flex-col items-start justify-start">
              <div
                className="relative text-left text-[#202020]"
                style={{
                  font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Count buckets
              </div>

              <div
                className="relative text-left text-[#202020]"
                style={{
                  margin: "-10px 0 0 0",
                  font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
                }}
              >
                计数桶
              </div>
            </div>

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
        </div> */}



        {/* <div
          className="relative flex h-[350px] w-[200px] shrink-0 flex-col items-start justify-start gap-2.5 rounded-[10px] bg-[#ffffff] p-2.5"
          style={{ boxShadow: "4px 4px 8px 0px rgba(0, 0, 0, 0.25)" }}
        >
          <img
            className="relative h-[149.18px] shrink-0 self-stretch rounded-[5px]"
            src="monomer-line.png"
          />

          <div className="relative flex shrink-0 flex-col items-start justify-start gap-1">
            <div className="relative flex shrink-0 flex-col items-start justify-start">
              <div
                className="relative text-left text-[#202020]"
                style={{
                  font: "var(--en, 600 20px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Line reading room
              </div>

              <div
                className="relative text-left text-[#202020]"
                style={{
                  margin: "-6px 0 0 0",
                  font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
                }}
              >
                阅览室
              </div>
            </div>

            <div className="relative flex shrink-0 flex-col items-start justify-start">
              <div
                className="relative text-left text-[#202020]"
                style={{
                  font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Production time: 2019.04
              </div>

              <div
                className="relative text-left text-[#202020]"
                style={{
                  margin: "-4px 0 0 0",
                  font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                制作时间：2019.04
              </div>
            </div>

            <div className="relative flex shrink-0 flex-col items-start justify-start">
              <div
                className="relative text-left text-[#202020]"
                style={{
                  font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
                }}
              >
                Degree of completion:100%
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
        </div> */}
      </div>
    </div>
  );
}

export default Monomer;
