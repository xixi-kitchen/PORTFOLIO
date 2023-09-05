import React from "react";

export default function Homepage_project() {
  return (
    <div className="relative flex shrink-0 flex-col items-center justify-start gap-[79px]">
      <div className="relative flex shrink-0 flex-row items-start justify-center gap-5">
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

      <div className="relative flex w-[1022px] shrink-0 flex-col items-start justify-start gap-2.5">
        <div
          className="relative self-stretch text-left"
          style={{
            font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
          }}
        >
          <span>
            <span className="">
              The works of the project category are mainly some works with a
              relatively complete{" "}
            </span>
            <span className="text-[#8158FC]">design log</span>
            <span className="">
              . The design log of these works records the whole process of the
              work from the initial demand proposal, to the demand research,
              design analysis, inspiration burst, model verification and final
              product confirmation, and more completely records how a design
              product from the demand to the final presentation of the whole
              process, because the whole process is more perfect, so as a
              project to display, the design log is introduced on a separate
              page
            </span>
          </span>
        </div>

        <div
          className="relative self-stretch text-left"
          style={{
            font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
          }}
        >
          <span>
            <span className="">项目类的作品主要是一些有着较为完整的</span>
            <span className="text-[#8158FC]">设计日志</span>
            <span className="">
              的作品。这些作品的设计日志记录了该作品从最开始的需求提出，到需求调研、设计分析、灵感迸发、模型验证和最后成品确认的全过程，较为完整的记录了一件设计产品如何从需求到最终呈现的全过程，因为整个过程较为完善，所以作为一个项目进行展示，设计日志则做单独的页面进行介绍
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
