import React from 'react';


export const ModelError = ({ ...props }) => {
  return (
    <div className="flex flex-row gap-0 items-center justify-start w-[1306px] relative">
      <img
        className="shrink-0 w-[512px] h-[512px] relative"
        src="cryptocurrency-token.png"
      />

      <div className="flex flex-col gap-[27px] items-start justify-start shrink-0 relative">
        <div className="flex flex-col gap-0 items-start justify-start shrink-0 w-[794px] relative">
          <div
            className="text-[#000000] text-left relative self-stretch"
            style={{
              font: "var(--en, 600 40px/150% 'PingFang SC', sans-serif)",
            }}
          >
            Sorry, this page is under construction!
          </div>

          <div
            className="text-[#000000] text-left relative self-stretch"
            style={{
              font: "var(--cn, 300 20px/150% 'PingFang SC', sans-serif)",
            }}
          >
            对不起，该页面正在建设中！
          </div>
        </div>

        <div className="flex flex-col gap-0 items-start justify-start shrink-0 w-[794px] relative">
          <div
            className="text-[#000000] text-left relative self-stretch"
            style={{
              font: "var(--en, 600 12px/150% 'PingFang SC', sans-serif)",
            }}
          >
            The model on this page involves confidential information and needs
            to be cleaned up, so this page will be updated later...
          </div>

          <div
            className="text-[#000000] text-left relative self-stretch"
            style={{
              font: "var(--cn, 300 12px/150% 'PingFang SC', sans-serif)",
            }}
          >
            本页面的模型涉及保密信息，需要对模型进行清理，因此本页面稍后更新···
          </div>
        </div>
      </div>
    </div>
  );
};