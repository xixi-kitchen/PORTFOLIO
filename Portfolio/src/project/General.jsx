import React from 'react';

export const General = ({ ...props }) => {
  return (
    <div className="w-[1440px] h-[1024px] relative">
      <div className="flex flex-col gap-10 items-center justify-start absolute left-0 top-0">
        <div className="flex flex-col gap-2.5 items-start justify-start shrink-0 relative">
          <img
            className="shrink-0 w-[1440px] h-[1024px] relative"
            src="general-fengmian-1.png"
          />

          <div
            className="text-[#ffffff] text-center absolute left-[calc(50%_-_283px)] top-[calc(50%_-_134px)]"
            style={{ font: "600 64px/150% 'PingFang SC', sans-serif" }}
          >
            GENERAL UI <br />
            DESIGN SCREENS
          </div>
        </div>

        <div className="flex flex-col gap-[31px] items-start justify-start shrink-0 relative">
          <div
            className="text-[#000000] text-left relative"
            style={{ font: "700 48px 'Dancing Script', sans-serif" }}
          >
            Style Guide
          </div>

          <div className="flex flex-col gap-[100px] items-start justify-start shrink-0 relative">
            <div className="flex flex-row gap-[46px] items-center justify-start shrink-0 relative">
              <div className="flex flex-col gap-[29px] items-start justify-start shrink-0 relative">
                <div
                  className="text-[#22242a] text-left relative"
                  style={{ font: "400 24px 'Bebas Neue', sans-serif" }}
                >
                  Colors
                </div>

                <div
                  className="text-neutral-4 text-left relative w-[188px] h-[110px]"
                  style={{
                    font: "var(--paragraph-2, 500 12px/22px 'Montserrat', sans-serif)",
                  }}
                >
                  You can change the color here and update everywhere.
                  <br />
                  <br />
                  The color of the text changes in the style of typography.
                </div>
              </div>

              <div className="flex flex-col gap-[29px] items-start justify-start shrink-0 relative">
                <div className="flex flex-row gap-8 items-start justify-start shrink-0 relative">
                  <div className="flex flex-col gap-[15px] items-center justify-start shrink-0 relative">
                    <svg
                      className="shrink-0 relative overflow-visible"
                      style={{}}
                      width="71"
                      height="70"
                      viewBox="0 0 71 70"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M35.5 70C54.83 70 70.5 54.33 70.5 35C70.5 15.67 54.83 0 35.5 0C16.17 0 0.5 15.67 0.5 35C0.5 54.33 16.17 70 35.5 70Z"
                        fill="#6478D3"
                      />
                    </svg>

                    <div className="flex flex-col gap-[5px] items-center justify-start shrink-0 relative">
                      <div
                        className="text-black text-center relative"
                        style={{
                          font: "var(--caption-2, 700 11px 'Montserrat', sans-serif)",
                        }}
                      >
                        Primary
                      </div>

                      <div
                        className="text-neutral-4 text-center uppercase relative"
                        style={{
                          font: "var(--caption-3, 500 10px/17px 'Montserrat', sans-serif)",
                        }}
                      >
                        #6478D3
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-[15px] items-center justify-start shrink-0 relative">
                    <svg
                      className="shrink-0 relative overflow-visible"
                      style={{}}
                      width="71"
                      height="70"
                      viewBox="0 0 71 70"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M35.5 70C54.83 70 70.5 54.33 70.5 35C70.5 15.67 54.83 0 35.5 0C16.17 0 0.5 15.67 0.5 35C0.5 54.33 16.17 70 35.5 70Z"
                        fill="#F7B579"
                      />
                    </svg>

                    <div className="flex flex-col gap-[5px] items-center justify-start shrink-0 relative">
                      <div
                        className="text-black text-center relative"
                        style={{
                          font: "var(--caption-2, 700 11px 'Montserrat', sans-serif)",
                        }}
                      >
                        Secondary
                      </div>

                      <div
                        className="text-neutral-4 text-center uppercase relative"
                        style={{
                          font: "var(--caption-3, 500 10px/17px 'Montserrat', sans-serif)",
                        }}
                      >
                        #F7B579
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-[15px] items-center justify-start shrink-0 relative">
                    <svg
                      className="shrink-0 relative overflow-visible"
                      style={{}}
                      width="71"
                      height="70"
                      viewBox="0 0 71 70"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M35.5 70C54.83 70 70.5 54.33 70.5 35C70.5 15.67 54.83 0 35.5 0C16.17 0 0.5 15.67 0.5 35C0.5 54.33 16.17 70 35.5 70Z"
                        fill="#22242A"
                      />
                    </svg>

                    <div className="flex flex-col gap-[5px] items-center justify-start shrink-0 relative">
                      <div
                        className="text-black text-center relative"
                        style={{
                          font: "var(--caption-2, 700 11px 'Montserrat', sans-serif)",
                        }}
                      >
                        Text
                      </div>

                      <div
                        className="text-neutral-4 text-center uppercase relative"
                        style={{
                          font: "var(--caption-3, 500 10px/17px 'Montserrat', sans-serif)",
                        }}
                      >
                        #22242A
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-[15px] items-start justify-start shrink-0 relative">
                    <svg
                      className="shrink-0 relative overflow-visible"
                      style={{}}
                      width="71"
                      height="70"
                      viewBox="0 0 71 70"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M35.5 70C54.83 70 70.5 54.33 70.5 35C70.5 15.67 54.83 0 35.5 0C16.17 0 0.5 15.67 0.5 35C0.5 54.33 16.17 70 35.5 70Z"
                        fill="#F1F8FC"
                      />
                    </svg>

                    <div className="flex flex-col gap-[5px] items-center justify-start shrink-0 relative">
                      <div
                        className="text-black text-center relative"
                        style={{
                          font: "var(--caption-2, 700 11px 'Montserrat', sans-serif)",
                        }}
                      >
                        Background
                      </div>

                      <div
                        className="text-neutral-4 text-center uppercase relative"
                        style={{
                          font: "var(--caption-3, 500 10px/17px 'Montserrat', sans-serif)",
                        }}
                      >
                        #F1F8FC
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-[15px] items-center justify-start shrink-0 relative">
                    <svg
                      className="shrink-0 relative overflow-visible"
                      style={{}}
                      width="71"
                      height="70"
                      viewBox="0 0 71 70"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M35.5 70C54.83 70 70.5 54.33 70.5 35C70.5 15.67 54.83 0 35.5 0C16.17 0 0.5 15.67 0.5 35C0.5 54.33 16.17 70 35.5 70Z"
                        fill="#EF4B5F"
                      />
                    </svg>

                    <div className="flex flex-col gap-[5px] items-center justify-start shrink-0 relative">
                      <div
                        className="text-black text-center relative"
                        style={{
                          font: "var(--caption-2, 700 11px 'Montserrat', sans-serif)",
                        }}
                      >
                        Error
                      </div>

                      <div
                        className="text-neutral-4 text-center uppercase relative"
                        style={{
                          font: "var(--caption-3, 500 10px/17px 'Montserrat', sans-serif)",
                        }}
                      >
                        #EF4B5F
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-[15px] items-center justify-start shrink-0 relative">
                    <svg
                      className="shrink-0 relative overflow-visible"
                      style={{}}
                      width="71"
                      height="70"
                      viewBox="0 0 71 70"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M35.5 70C54.83 70 70.5 54.33 70.5 35C70.5 15.67 54.83 0 35.5 0C16.17 0 0.5 15.67 0.5 35C0.5 54.33 16.17 70 35.5 70Z"
                        fill="#51DC8E"
                      />
                    </svg>

                    <div className="flex flex-col gap-[5px] items-center justify-start shrink-0 relative">
                      <div
                        className="text-black text-center relative"
                        style={{
                          font: "var(--caption-2, 700 11px 'Montserrat', sans-serif)",
                        }}
                      >
                        Success
                      </div>

                      <div
                        className="text-neutral-4 text-center uppercase relative"
                        style={{
                          font: "var(--caption-3, 500 10px/17px 'Montserrat', sans-serif)",
                        }}
                      >
                        #51DC8E
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row gap-[30px] items-start justify-start shrink-0 relative">
                  <div className="flex flex-col gap-4 items-center justify-start shrink-0 relative">
                    <svg
                      className="shrink-0 relative overflow-visible"
                      style={{}}
                      width="69"
                      height="68"
                      viewBox="0 0 69 68"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M34.5 68C53.2777 68 68.5 52.7777 68.5 34C68.5 15.2223 53.2777 0 34.5 0C15.7223 0 0.5 15.2223 0.5 34C0.5 52.7777 15.7223 68 34.5 68Z"
                        fill="white"
                      />
                    </svg>

                    <div className="flex flex-col gap-[5px] items-center justify-start shrink-0 relative">
                      <div
                        className="text-black text-center relative"
                        style={{
                          font: "var(--caption-2, 700 11px 'Montserrat', sans-serif)",
                        }}
                      >
                        White
                      </div>

                      <div
                        className="text-neutral-4 text-center uppercase relative"
                        style={{
                          font: "var(--caption-3, 500 10px/17px 'Montserrat', sans-serif)",
                        }}
                      >
                        #FFFFFF
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-[15px] items-center justify-start shrink-0 relative">
                    <svg
                      className="shrink-0 relative overflow-visible"
                      style={{}}
                      width="70"
                      height="70"
                      viewBox="0 0 70 70"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d_224_6392)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M35 70C54.33 70 70 54.33 70 35C70 15.67 54.33 0 35 0C15.67 0 0 15.67 0 35C0 54.33 15.67 70 35 70Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_224_6392"
                          x="-20"
                          y="-15"
                          width="110"
                          height="110"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="5" />
                          <feGaussianBlur stdDeviation="10" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_224_6392"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_224_6392"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>

                    <div className="flex flex-col gap-[5px] items-center justify-start shrink-0 relative">
                      <div
                        className="text-black text-center relative"
                        style={{
                          font: "var(--caption-2, 700 11px 'Montserrat', sans-serif)",
                        }}
                      >
                        White Shadow
                      </div>

                      <div
                        className="text-neutral-4 text-center uppercase relative"
                        style={{
                          font: "var(--caption-3, 500 10px/17px 'Montserrat', sans-serif)",
                        }}
                      >
                        #FFFFFF
                        <br />
                        0,5,20,0.5
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-[15px] items-center justify-start shrink-0 relative">
                    <svg
                      className="shrink-0 relative overflow-visible"
                      style={{}}
                      width="71"
                      height="70"
                      viewBox="0 0 71 70"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M35.5 70C54.83 70 70.5 54.33 70.5 35C70.5 15.67 54.83 0 35.5 0C16.17 0 0.5 15.67 0.5 35C0.5 54.33 16.17 70 35.5 70Z"
                        fill="#F7F8FA"
                      />
                    </svg>

                    <div className="flex flex-col gap-[5px] items-center justify-start shrink-0 relative">
                      <div
                        className="text-black text-center relative"
                        style={{
                          font: "var(--caption-2, 700 11px 'Montserrat', sans-serif)",
                        }}
                      >
                        Neutral 1
                      </div>

                      <div
                        className="text-neutral-4 text-center uppercase relative"
                        style={{
                          font: "var(--caption-3, 500 10px/17px 'Montserrat', sans-serif)",
                        }}
                      >
                        #F7F8FA
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-[15px] items-center justify-start shrink-0 relative">
                    <svg
                      className="shrink-0 relative overflow-visible"
                      style={{}}
                      width="71"
                      height="70"
                      viewBox="0 0 71 70"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M35.5 70C54.83 70 70.5 54.33 70.5 35C70.5 15.67 54.83 0 35.5 0C16.17 0 0.5 15.67 0.5 35C0.5 54.33 16.17 70 35.5 70Z"
                        fill="#F1F3F8"
                      />
                    </svg>

                    <div className="flex flex-col gap-[5px] items-center justify-start shrink-0 relative">
                      <div
                        className="text-black text-center relative"
                        style={{
                          font: "var(--caption-2, 700 11px 'Montserrat', sans-serif)",
                        }}
                      >
                        Neutral 2
                      </div>

                      <div
                        className="text-neutral-4 text-center uppercase relative"
                        style={{
                          font: "var(--caption-3, 500 10px/17px 'Montserrat', sans-serif)",
                        }}
                      >
                        #F1F3F8
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-[15px] items-center justify-start shrink-0 relative">
                    <svg
                      className="shrink-0 relative overflow-visible"
                      style={{}}
                      width="71"
                      height="70"
                      viewBox="0 0 71 70"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M35.5 70C54.83 70 70.5 54.33 70.5 35C70.5 15.67 54.83 0 35.5 0C16.17 0 0.5 15.67 0.5 35C0.5 54.33 16.17 70 35.5 70Z"
                        fill="#CDCDD7"
                      />
                    </svg>

                    <div className="flex flex-col gap-[5px] items-center justify-start shrink-0 relative">
                      <div
                        className="text-black text-center relative"
                        style={{
                          font: "var(--caption-2, 700 11px 'Montserrat', sans-serif)",
                        }}
                      >
                        Neutral 3
                      </div>

                      <div
                        className="text-neutral-4 text-center uppercase relative"
                        style={{
                          font: "var(--caption-3, 500 10px/17px 'Montserrat', sans-serif)",
                        }}
                      >
                        #CDCDD7
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-[15px] items-center justify-start shrink-0 relative">
                    <svg
                      className="shrink-0 relative overflow-visible"
                      style={{}}
                      width="71"
                      height="70"
                      viewBox="0 0 71 70"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M35.5 70C54.83 70 70.5 54.33 70.5 35C70.5 15.67 54.83 0 35.5 0C16.17 0 0.5 15.67 0.5 35C0.5 54.33 16.17 70 35.5 70Z"
                        fill="#8D92A3"
                      />
                    </svg>

                    <div className="flex flex-col gap-[5px] items-start justify-start shrink-0 relative">
                      <div
                        className="text-black text-center relative"
                        style={{
                          font: "var(--caption-2, 700 11px 'Montserrat', sans-serif)",
                        }}
                      >
                        Neutral 4
                      </div>

                      <div
                        className="text-neutral-4 text-center uppercase relative"
                        style={{
                          font: "var(--caption-3, 500 10px/17px 'Montserrat', sans-serif)",
                        }}
                      >
                        #8D92A3
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[81px] items-start justify-start shrink-0 relative">
              <div className="flex flex-row gap-[139px] items-start justify-start shrink-0 relative">
                <div
                  className="text-black text-left relative"
                  style={{ font: "400 24px 'Bebas Neue', sans-serif" }}
                >
                  Typography
                </div>

                <div className="flex flex-col gap-[37px] items-start justify-start shrink-0 relative">
                  <div className="flex flex-col gap-2 items-start justify-start shrink-0 relative">
                    <div
                      className="text-neutral-4 text-left uppercase relative"
                      style={{
                        font: "var(--caption-3, 500 10px/17px 'Montserrat', sans-serif)",
                      }}
                    >
                      Bebas Neue
                    </div>

                    <div
                      className="text-black text-left relative"
                      style={{ font: "400 39px 'Bebas Neue', sans-serif" }}
                    >
                      The Power Of Notes
                    </div>
                  </div>

                  <div className="flex flex-col gap-2.5 items-start justify-start shrink-0 relative">
                    <div
                      className="text-neutral-4 text-left uppercase relative"
                      style={{
                        font: "var(--caption-3, 500 10px/17px 'Montserrat', sans-serif)",
                      }}
                    >
                      Montserrat
                    </div>

                    <div
                      className="text-black text-left relative"
                      style={{
                        font: "var(--paragraph-1, 500 14px/22px 'Montserrat', sans-serif)",
                      }}
                    >
                      How Do I Know If I M Getting Any Of This Law Of Attraction
                      Stuff
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 items-start justify-start shrink-0 relative">
                    <div
                      className="text-neutral-4 text-left uppercase relative"
                      style={{
                        font: "var(--caption-3, 500 10px/17px 'Montserrat', sans-serif)",
                      }}
                    >
                      Dancing Script
                    </div>

                    <div
                      className="text-black text-left relative"
                      style={{
                        font: "var(--cap, 700 28px 'Dancing Script', sans-serif)",
                      }}
                    >
                      Roar With Confidence
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-[46px] items-start justify-start shrink-0 relative">
                <div
                  className="text-neutral-4 text-left relative w-[188px]"
                  style={{
                    font: "var(--paragraph-2, 500 12px/22px 'Montserrat', sans-serif)",
                  }}
                >
                  To change the fonts on the screens, select the text on the
                  right and below and update the fonts and sizes.
                </div>

                <div className="flex flex-row gap-[94px] items-start justify-start shrink-0 relative">
                  <div className="flex flex-col gap-[23px] items-start justify-start shrink-0 relative">
                    <div className="flex flex-col gap-[18px] items-start justify-start shrink-0 relative">
                      <div
                        className="text-[#22242a] text-left relative"
                        style={{
                          font: "var(--cap, 700 28px 'Dancing Script', sans-serif)",
                        }}
                      >
                        Cap
                      </div>

                      <div
                        className="text-[#22242a] text-left relative"
                        style={{ font: "400 39px 'Bebas Neue', sans-serif" }}
                      >
                        Hero
                      </div>
                    </div>

                    <div className="flex flex-col gap-[25px] items-start justify-start shrink-0 relative">
                      <div
                        className="text-[#22242a] text-left relative"
                        style={{ font: "400 28px 'Bebas Neue', sans-serif" }}
                      >
                        Title 1
                      </div>

                      <div
                        className="text-[#22242a] text-left relative"
                        style={{ font: "400 24px 'Bebas Neue', sans-serif" }}
                      >
                        Title 2
                      </div>
                    </div>

                    <div className="flex flex-col gap-[19px] items-start justify-start shrink-0 relative">
                      <div
                        className="text-[#22242a] text-left relative"
                        style={{
                          font: "var(--paragraph-1, 500 14px/22px 'Montserrat', sans-serif)",
                        }}
                      >
                        Paragraph 1
                      </div>

                      <div
                        className="text-[#22242a] text-left relative"
                        style={{
                          font: "var(--paragraph-2, 500 12px/22px 'Montserrat', sans-serif)",
                        }}
                      >
                        Paragraph 2
                      </div>
                    </div>

                    <div className="flex flex-col gap-[18px] items-start justify-start shrink-0 relative">
                      <div
                        className="text-[#22242a] text-left relative"
                        style={{
                          font: "var(--caption-1, 700 14px/22px 'Montserrat', sans-serif)",
                        }}
                      >
                        Caption 1
                      </div>

                      <div
                        className="text-[#22242a] text-left relative"
                        style={{
                          font: "var(--caption-2, 700 11px 'Montserrat', sans-serif)",
                        }}
                      >
                        Caption 2
                      </div>

                      <div
                        className="text-[#22242a] text-left uppercase relative"
                        style={{
                          font: "var(--caption-3, 500 10px/17px 'Montserrat', sans-serif)",
                        }}
                      >
                        Caption 3
                      </div>
                    </div>
                  </div>

                  <div
                    className="text-background text-center relative"
                    style={{ font: "400 253px 'Bebas Neue', sans-serif" }}
                  >
                    BG
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img
          className="shrink-0 w-[1440px] h-[968px] relative"
          src="general-yemian-1.png"
        />

        <img
          className="shrink-0 w-[1440px] h-[967px] relative"
          src="general-yemian-2.png"
        />

        <div className="bg-[#22242b] p-2.5 flex flex-col gap-2.5 items-center justify-center shrink-0 w-[1440px] h-[647px] relative">
          <div className="flex flex-col gap-[53px] items-center justify-start shrink-0 relative">
            <div
              className="text-center relative"
              style={{ font: "400 128px 'Bebas Neue', sans-serif" }}
            >
              General
            </div>

            <div
              className="text-center relative"
              style={{
                font: "500 48px/22px 'Montserrat', sans-serif",
                textDecoration: "underline",
              }}
            >
              <span>
                <span className="to-see-more-details-please-click-here-span">
                  To see more details please{" "}
                </span>
                <span className="to-see-more-details-please-click-here-span2">
                  click here
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-[rgba(172,172,172,0.50)] rounded-[10px] p-1.5 flex flex-col gap-3 items-center justify-start w-[123px] h-60 sticky left-4 top-[calc(50%_-_120px)]"
        style={{ backdropFilter: "blur(10px)" }}
      >
        <div
          className="text-[#ffffff] text-center relative"
          style={{ font: "600 16px/99.52% 'PingFang SC', sans-serif" }}
        >
          Navigation
        </div>

        <div className="flex flex-col gap-[5px] items-center justify-center shrink-0 relative">
          <div className="bg-[#214ebd] rounded-lg p-2.5 flex flex-row gap-2.5 items-center justify-center self-stretch shrink-0 relative">
            <div
              className="text-[#ffffff] text-center relative"
              style={{ font: "400 16px/99.52% 'PingFang SC', sans-serif" }}
            >
              Style Guide
            </div>
          </div>

          <div className="bg-[#214ebd] rounded-lg p-2.5 flex flex-row gap-2.5 items-center justify-center self-stretch shrink-0 relative">
            <div
              className="text-[#ffffff] text-center relative"
              style={{ font: "400 16px/99.52% 'PingFang SC', sans-serif" }}
            >
              Colors
            </div>
          </div>

          <div className="bg-[#214ebd] rounded-lg p-2.5 flex flex-row gap-2.5 items-center justify-center self-stretch shrink-0 relative">
            <div
              className="text-[#ffffff] text-center relative"
              style={{ font: "400 16px/99.52% 'PingFang SC', sans-serif" }}
            >
              Typograrphy
            </div>
          </div>

          <div className="bg-[#214ebd] rounded-lg p-2.5 flex flex-row gap-2.5 items-center justify-center self-stretch shrink-0 relative">
            <div
              className="text-[#ffffff] text-center relative"
              style={{ font: "400 16px/99.52% 'PingFang SC', sans-serif" }}
            >
              Interface
            </div>
          </div>

          <div className="bg-[#214ebd] rounded-lg p-2.5 flex flex-row gap-2.5 items-center justify-center self-stretch shrink-0 relative">
            <div
              className="text-[#ffffff] text-center relative"
              style={{ font: "400 16px/99.52% 'PingFang SC', sans-serif" }}
            >
              Prototype
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
