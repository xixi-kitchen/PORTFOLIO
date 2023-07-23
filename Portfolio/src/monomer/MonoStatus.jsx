import React from "react";

export function OriginStatus() {
  return (
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
  );
}

export function RequStatus() {
  return (
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
  );
}
