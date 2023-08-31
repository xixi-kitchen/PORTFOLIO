import React from "react";

export default function General({ ...props }) {
  // function goGuide() {
  //   // document.getElementById('colors').scrollTop = 0;
  //   let getEle = document.getElementById("guide");
  //   getEle.scrollIntoView();
  // }
  function goGuide() {
    // document.getElementById('colors').scrollTop = 0;
    let getEle = document.getElementById("guide");
    getEle.scrollIntoView({
      behavior: "smooth", //顺滑的滚动
      block: "start",
      // inline:"nearest"
    });
  }
  function goColors() {
    // document.getElementById('colors').scrollTop = 0;
    let getEle = document.getElementById("colors");
    getEle.scrollIntoView({
      behavior: "smooth", //顺滑的滚动
      block: "start",
      // inline:"nearest"
    }); //容器上下的中间);
    // getEle.scrollTop = 0;
    // var scroll_top = document.getElementById("typograrphy").offsetTop;
    // console.log(scroll_top)
    // window.scroll({
    //   top: scroll_top,
    //   behavior: "smooth",
    // });
  }
  function goTypograrphy() {
    // document.getElementById('colors').scrollTop = 0;
    let getEle = document.getElementById("typograrphy");
    getEle.scrollIntoView({
      behavior: "smooth", //顺滑的滚动
      block: "start",
      // inline:"nearest"
    });
  }
  function goInterface() {
    // document.getElementById('colors').scrollTop = 0;
    let getEle = document.getElementById("interface");
    getEle.scrollIntoView({
      behavior: "smooth", //顺滑的滚动
      block: "start",
      // inline:"nearest"
    });
  }
  function goPrototype() {
    // document.getElementById('colors').scrollTop = 0;
    let getEle = document.getElementById("prototype");
    getEle.scrollIntoView({
      behavior: "smooth", //顺滑的滚动
      block: "start",
      // inline:"nearest"
    });
  }

  // var cover_height = document.getElementById("navbar").offsetHeight;
  // var scroll_top = document.getElementById("colors").offsetTop - 48;
  // window.scroll({
  //   top: scroll_top,
  //   behavior: "smooth",
  // });
  // function goInterface() {
  //   // document.getElementById('colors').scrollTop = 0;
  //   let getEle = document.getElementById("interface");
  //   getEle.scrollIntoView();
  // }
  // function goPrototype() {
  //   // document.getElementById('colors').scrollTop = 0;
  //   let getEle = document.getElementById("prototype");
  //   getEle.scrollIntoView();
  // }
  return (
    <div className=" absolute h-[4959px] w-[1440px]">
      <div className=" relative left-0 top-0 flex flex-col items-center justify-start gap-10">
        <div className="relative flex shrink-0 flex-col items-start justify-start gap-2.5">
          <img
            className="relative h-[1024px] w-[1440px] shrink-0"
            src="general-fengmian-1.png"
          />

          <div
            className="absolute left-[calc(50%_-_283px)] top-[calc(50%_-_134px)] text-center text-[#ffffff]"
            style={{ font: "600 64px/150% 'PingFang SC', sans-serif" }}
          >
            GENERAL UI <br />
            DESIGN SCREENS
          </div>
        </div>
        <div id="guide" className="relative h-[20px]"></div>
        <div className="relative flex shrink-0 flex-col items-start justify-start gap-[30px]">
          <div
            className="relative text-left text-[#000000]"
            style={{ font: "700 48px 'Dancing Script', sans-serif" }}
          >
            Style Guide
          </div>
          <div id="colors" className="relative h-[48px]"></div>
          <div className="relative flex shrink-0 flex-col items-start justify-start gap-[60px]">
            <div className="relative flex shrink-0 flex-row items-center justify-start gap-[46px]">
              <div className="relative flex shrink-0 flex-col items-start justify-start gap-[29px]">
                <div
                  className="relative text-left text-[#22242a]"
                  style={{ font: "400 24px 'Bebas Neue', sans-serif" }}
                >
                  Colors
                </div>

                <div
                  className="text-neutral-4 relative h-[110px] w-[188px] text-left"
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

              <div className="relative flex shrink-0 flex-col items-start justify-start gap-[29px]">
                <div className="relative flex shrink-0 flex-row items-start justify-start gap-8">
                  <div className="relative flex shrink-0 flex-col items-center justify-start gap-[15px]">
                    <svg
                      className="relative shrink-0 overflow-visible"
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

                    <div className="relative flex shrink-0 flex-col items-center justify-start gap-[5px]">
                      <div
                        className="relative text-center text-black"
                        style={{
                          font: "var(--caption-2, 700 11px 'Montserrat', sans-serif)",
                        }}
                      >
                        Primary
                      </div>

                      <div
                        className="text-neutral-4 relative text-center uppercase"
                        style={{
                          font: "var(--caption-3, 500 10px/17px 'Montserrat', sans-serif)",
                        }}
                      >
                        #6478D3
                      </div>
                    </div>
                  </div>

                  <div className="relative flex shrink-0 flex-col items-center justify-start gap-[15px]">
                    <svg
                      className="relative shrink-0 overflow-visible"
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

                    <div className="relative flex shrink-0 flex-col items-center justify-start gap-[5px]">
                      <div
                        className="relative text-center text-black"
                        style={{
                          font: "var(--caption-2, 700 11px 'Montserrat', sans-serif)",
                        }}
                      >
                        Secondary
                      </div>

                      <div
                        className="text-neutral-4 relative text-center uppercase"
                        style={{
                          font: "var(--caption-3, 500 10px/17px 'Montserrat', sans-serif)",
                        }}
                      >
                        #F7B579
                      </div>
                    </div>
                  </div>

                  <div className="relative flex shrink-0 flex-col items-center justify-start gap-[15px]">
                    <svg
                      className="relative shrink-0 overflow-visible"
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

                    <div className="relative flex shrink-0 flex-col items-center justify-start gap-[5px]">
                      <div
                        className="relative text-center text-black"
                        style={{
                          font: "var(--caption-2, 700 11px 'Montserrat', sans-serif)",
                        }}
                      >
                        Text
                      </div>

                      <div
                        className="text-neutral-4 relative text-center uppercase"
                        style={{
                          font: "var(--caption-3, 500 10px/17px 'Montserrat', sans-serif)",
                        }}
                      >
                        #22242A
                      </div>
                    </div>
                  </div>

                  <div className="relative flex shrink-0 flex-col items-start justify-start gap-[15px]">
                    <svg
                      className="relative shrink-0 overflow-visible"
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

                    <div className="relative flex shrink-0 flex-col items-center justify-start gap-[5px]">
                      <div
                        className="relative text-center text-black"
                        style={{
                          font: "var(--caption-2, 700 11px 'Montserrat', sans-serif)",
                        }}
                      >
                        Background
                      </div>

                      <div
                        className="text-neutral-4 relative text-center uppercase"
                        style={{
                          font: "var(--caption-3, 500 10px/17px 'Montserrat', sans-serif)",
                        }}
                      >
                        #F1F8FC
                      </div>
                    </div>
                  </div>

                  <div className="relative flex shrink-0 flex-col items-center justify-start gap-[15px]">
                    <svg
                      className="relative shrink-0 overflow-visible"
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

                    <div className="relative flex shrink-0 flex-col items-center justify-start gap-[5px]">
                      <div
                        className="relative text-center text-black"
                        style={{
                          font: "var(--caption-2, 700 11px 'Montserrat', sans-serif)",
                        }}
                      >
                        Error
                      </div>

                      <div
                        className="text-neutral-4 relative text-center uppercase"
                        style={{
                          font: "var(--caption-3, 500 10px/17px 'Montserrat', sans-serif)",
                        }}
                      >
                        #EF4B5F
                      </div>
                    </div>
                  </div>

                  <div className="relative flex shrink-0 flex-col items-center justify-start gap-[15px]">
                    <svg
                      className="relative shrink-0 overflow-visible"
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

                    <div className="relative flex shrink-0 flex-col items-center justify-start gap-[5px]">
                      <div
                        className="relative text-center text-black"
                        style={{
                          font: "var(--caption-2, 700 11px 'Montserrat', sans-serif)",
                        }}
                      >
                        Success
                      </div>

                      <div
                        className="text-neutral-4 relative text-center uppercase"
                        style={{
                          font: "var(--caption-3, 500 10px/17px 'Montserrat', sans-serif)",
                        }}
                      >
                        #51DC8E
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative flex shrink-0 flex-row items-start justify-start gap-[30px]">
                  <div className="relative flex shrink-0 flex-col items-center justify-start gap-4">
                    <svg
                      className="relative shrink-0 overflow-visible"
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

                    <div className="relative flex shrink-0 flex-col items-center justify-start gap-[5px]">
                      <div
                        className="relative text-center text-black"
                        style={{
                          font: "var(--caption-2, 700 11px 'Montserrat', sans-serif)",
                        }}
                      >
                        White
                      </div>

                      <div
                        className="text-neutral-4 relative text-center uppercase"
                        style={{
                          font: "var(--caption-3, 500 10px/17px 'Montserrat', sans-serif)",
                        }}
                      >
                        #FFFFFF
                      </div>
                    </div>
                  </div>

                  <div className="relative flex shrink-0 flex-col items-center justify-start gap-[15px]">
                    <svg
                      className="relative shrink-0 overflow-visible"
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

                    <div className="relative flex shrink-0 flex-col items-center justify-start gap-[5px]">
                      <div
                        className="relative text-center text-black"
                        style={{
                          font: "var(--caption-2, 700 11px 'Montserrat', sans-serif)",
                        }}
                      >
                        White Shadow
                      </div>

                      <div
                        className="text-neutral-4 relative text-center uppercase"
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

                  <div className="relative flex shrink-0 flex-col items-center justify-start gap-[15px]">
                    <svg
                      className="relative shrink-0 overflow-visible"
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

                    <div className="relative flex shrink-0 flex-col items-center justify-start gap-[5px]">
                      <div
                        className="relative text-center text-black"
                        style={{
                          font: "var(--caption-2, 700 11px 'Montserrat', sans-serif)",
                        }}
                      >
                        Neutral 1
                      </div>

                      <div
                        className="text-neutral-4 relative text-center uppercase"
                        style={{
                          font: "var(--caption-3, 500 10px/17px 'Montserrat', sans-serif)",
                        }}
                      >
                        #F7F8FA
                      </div>
                    </div>
                  </div>

                  <div className="relative flex shrink-0 flex-col items-center justify-start gap-[15px]">
                    <svg
                      className="relative shrink-0 overflow-visible"
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

                    <div className="relative flex shrink-0 flex-col items-center justify-start gap-[5px]">
                      <div
                        className="relative text-center text-black"
                        style={{
                          font: "var(--caption-2, 700 11px 'Montserrat', sans-serif)",
                        }}
                      >
                        Neutral 2
                      </div>

                      <div
                        className="text-neutral-4 relative text-center uppercase"
                        style={{
                          font: "var(--caption-3, 500 10px/17px 'Montserrat', sans-serif)",
                        }}
                      >
                        #F1F3F8
                      </div>
                    </div>
                  </div>

                  <div className="relative flex shrink-0 flex-col items-center justify-start gap-[15px]">
                    <svg
                      className="relative shrink-0 overflow-visible"
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

                    <div className="relative flex shrink-0 flex-col items-center justify-start gap-[5px]">
                      <div
                        className="relative text-center text-black"
                        style={{
                          font: "var(--caption-2, 700 11px 'Montserrat', sans-serif)",
                        }}
                      >
                        Neutral 3
                      </div>

                      <div
                        className="text-neutral-4 relative text-center uppercase"
                        style={{
                          font: "var(--caption-3, 500 10px/17px 'Montserrat', sans-serif)",
                        }}
                      >
                        #CDCDD7
                      </div>
                    </div>
                  </div>

                  <div className="relative flex shrink-0 flex-col items-center justify-start gap-[15px]">
                    <svg
                      className="relative shrink-0 overflow-visible"
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

                    <div className="relative flex shrink-0 flex-col items-start justify-start gap-[5px]">
                      <div
                        className="relative text-center text-black"
                        style={{
                          font: "var(--caption-2, 700 11px 'Montserrat', sans-serif)",
                        }}
                      >
                        Neutral 4
                      </div>

                      <div
                        className="text-neutral-4 relative text-center uppercase"
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
            <div id="typograrphy" className="relative h-[0px]"></div>
            <div className="relative flex shrink-0 flex-col items-start justify-start gap-[81px]">
              <div className="relative flex shrink-0 flex-row items-start justify-start gap-[139px]">
                <div
                  className="relative text-left text-black"
                  style={{ font: "400 24px 'Bebas Neue', sans-serif" }}
                >
                  Typography
                </div>

                <div className="relative flex shrink-0 flex-col items-start justify-start gap-[37px]">
                  <div className="relative flex shrink-0 flex-col items-start justify-start gap-2">
                    <div
                      className="text-neutral-4 relative text-left uppercase"
                      style={{
                        font: "var(--caption-3, 500 10px/17px 'Montserrat', sans-serif)",
                      }}
                    >
                      Bebas Neue
                    </div>

                    <div
                      className="relative text-left text-black"
                      style={{ font: "400 39px 'Bebas Neue', sans-serif" }}
                    >
                      The Power Of Notes
                    </div>
                  </div>

                  <div className="relative flex shrink-0 flex-col items-start justify-start gap-2.5">
                    <div
                      className="text-neutral-4 relative text-left uppercase"
                      style={{
                        font: "var(--caption-3, 500 10px/17px 'Montserrat', sans-serif)",
                      }}
                    >
                      Montserrat
                    </div>

                    <div
                      className="relative text-left text-black"
                      style={{
                        font: "var(--paragraph-1, 500 14px/22px 'Montserrat', sans-serif)",
                      }}
                    >
                      How Do I Know If I M Getting Any Of This Law Of Attraction
                      Stuff
                    </div>
                  </div>

                  <div className="relative flex shrink-0 flex-col items-start justify-start gap-2">
                    <div
                      className="text-neutral-4 relative text-left uppercase"
                      style={{
                        font: "var(--caption-3, 500 10px/17px 'Montserrat', sans-serif)",
                      }}
                    >
                      Dancing Script
                    </div>

                    <div
                      className="relative text-left text-black"
                      style={{
                        font: "var(--cap, 700 28px 'Dancing Script', sans-serif)",
                      }}
                    >
                      Roar With Confidence
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative flex shrink-0 flex-row items-start justify-start gap-[46px]">
                <div
                  className="text-neutral-4 relative w-[188px] text-left"
                  style={{
                    font: "var(--paragraph-2, 500 12px/22px 'Montserrat', sans-serif)",
                  }}
                >
                  To change the fonts on the screens, select the text on the
                  right and below and update the fonts and sizes.
                </div>

                <div className="relative flex shrink-0 flex-row items-start justify-start gap-[94px]">
                  <div className="relative flex shrink-0 flex-col items-start justify-start gap-[23px]">
                    <div className="relative flex shrink-0 flex-col items-start justify-start gap-[18px]">
                      <div
                        className="relative text-left text-[#22242a]"
                        style={{
                          font: "var(--cap, 700 28px 'Dancing Script', sans-serif)",
                        }}
                      >
                        Cap
                      </div>

                      <div
                        className="relative text-left text-[#22242a]"
                        style={{ font: "400 39px 'Bebas Neue', sans-serif" }}
                      >
                        Hero
                      </div>
                    </div>

                    <div className="relative flex shrink-0 flex-col items-start justify-start gap-[25px]">
                      <div
                        className="relative text-left text-[#22242a]"
                        style={{ font: "400 28px 'Bebas Neue', sans-serif" }}
                      >
                        Title 1
                      </div>

                      <div
                        className="relative text-left text-[#22242a]"
                        style={{ font: "400 24px 'Bebas Neue', sans-serif" }}
                      >
                        Title 2
                      </div>
                    </div>

                    <div className="relative flex shrink-0 flex-col items-start justify-start gap-[19px]">
                      <div
                        className="relative text-left text-[#22242a]"
                        style={{
                          font: "var(--paragraph-1, 500 14px/22px 'Montserrat', sans-serif)",
                        }}
                      >
                        Paragraph 1
                      </div>

                      <div
                        className="relative text-left text-[#22242a]"
                        style={{
                          font: "var(--paragraph-2, 500 12px/22px 'Montserrat', sans-serif)",
                        }}
                      >
                        Paragraph 2
                      </div>
                    </div>

                    <div className="relative flex shrink-0 flex-col items-start justify-start gap-[18px]">
                      <div
                        className="relative text-left text-[#22242a]"
                        style={{
                          font: "var(--caption-1, 700 14px/22px 'Montserrat', sans-serif)",
                        }}
                      >
                        Caption 1
                      </div>

                      <div
                        className="relative text-left text-[#22242a]"
                        style={{
                          font: "var(--caption-2, 700 11px 'Montserrat', sans-serif)",
                        }}
                      >
                        Caption 2
                      </div>

                      <div
                        className="relative text-left uppercase text-[#22242a]"
                        style={{
                          font: "var(--caption-3, 500 10px/17px 'Montserrat', sans-serif)",
                        }}
                      >
                        Caption 3
                      </div>
                    </div>
                  </div>

                  <div
                    className="text-background relative text-center"
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
          id="interface"
          className="relative h-[968px] w-[1440px] shrink-0"
          src="general-yemian-1.png"
        />

        <img
          className="relative h-[967px] w-[1440px] shrink-0"
          src="general-yemian-2.png"
        />

        <div
          id="prototype"
          className="relative flex h-[647px] w-[1440px] shrink-0 flex-col items-center justify-center gap-2.5 bg-[#22242b] p-2.5"
        >
          <div className="relative flex shrink-0 flex-col items-center justify-start gap-[53px] text-[#6478D3]">
            <div
              className="relative text-center"
              style={{ font: "400 128px 'Bebas Neue', sans-serif" }}
            >
              General
            </div>

            <div
              className="relative text-center"
              style={{
                font: "500 48px/22px 'Montserrat', sans-serif",
              }}
            >
              <span>
                <span className="to-see-more-details-please-click-here-span text-[#ffffff]">
                  To see more details please{" "}
                </span>
                <a
                  href="https://www.figma.com/proto/G9UCUbHggvCVKHLl4G3ALf/General-UI-screens?page-id=17%3A6868&node-id=28%3A11465&viewport=342%2C48%2C0.15&scaling=contain&starting-point-node-id=28%3A11472"
                  target="blank"
                >
                  <span className="to-see-more-details-please-click-here-span2 text-[#6478D3] underline">
                    click here
                  </span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="fixed left-4 top-[calc(50%_-_120px)] flex h-60 w-[123px] flex-col items-center justify-start gap-3 rounded-[10px] bg-[rgba(172,172,172,0.50)] p-1.5"
        style={{ backdropFilter: "blur(10px)" }}
      >
        <div
          className="relative text-center text-[#ffffff]"
          style={{ font: "600 16px/99.52% 'PingFang SC', sans-serif" }}
        >
          Navigation
        </div>

        <div className="relative flex shrink-0 flex-col items-center justify-center gap-[5px]">
          <div
            onClick={goGuide}
            className="relative flex shrink-0 cursor-pointer flex-row items-center justify-center gap-2.5 self-stretch rounded-lg bg-[#214ebd] p-2.5"
          >
            <div
              className="relative text-center text-[#ffffff]"
              style={{ font: "400 16px/99.52% 'PingFang SC', sans-serif" }}
            >
              Style Guide
            </div>
          </div>

          <div
            onClick={goColors}
            className="relative flex shrink-0 cursor-pointer flex-row items-center justify-center gap-2.5 self-stretch rounded-lg bg-[#214ebd] p-2.5"
          >
            <div
              className="relative text-center text-[#ffffff]"
              style={{ font: "400 16px/99.52% 'PingFang SC', sans-serif" }}
            >
              Colors
            </div>
          </div>

          <div
            onClick={goTypograrphy}
            className="relative flex shrink-0 cursor-pointer flex-row items-center justify-center gap-2.5 self-stretch rounded-lg bg-[#214ebd] p-2.5"
          >
            <div
              className="relative text-center text-[#ffffff]"
              style={{ font: "400 16px/99.52% 'PingFang SC', sans-serif" }}
            >
              Typograrphy
            </div>
          </div>

          <div
            onClick={goInterface}
            className="relative flex shrink-0 cursor-pointer flex-row items-center justify-center gap-2.5 self-stretch rounded-lg bg-[#214ebd] p-2.5"
          >
            <div
              className="relative text-center text-[#ffffff]"
              style={{ font: "400 16px/99.52% 'PingFang SC', sans-serif" }}
            >
              Interface
            </div>
          </div>

          <div
            onClick={goPrototype}
            className="relative flex shrink-0 cursor-pointer flex-row items-center justify-center gap-2.5 self-stretch rounded-lg bg-[#214ebd] p-2.5"
          >
            <div
              className="relative text-center text-[#ffffff]"
              style={{ font: "400 16px/99.52% 'PingFang SC', sans-serif" }}
            >
              Prototype
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
