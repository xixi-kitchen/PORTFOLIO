import React from "react";

export const Tour = ({ ...props }) => {
  return (
    <div className="relative h-[15200px] w-[1440px] bg-[#f7f7f7]">
      <img
        className="absolute left-[calc(50%_-_720px)] top-0 h-[292.15px] w-[1440px]"
        src="tour-fengmian.png"
      />

      <div className="absolute left-[calc(50%_-_720px)] top-0 flex w-[1440px] flex-col items-center justify-start gap-10 pb-0 pl-[200px] pr-[200px] pt-0">
        <div className="relative h-[480px] w-[1040px] shrink-0">
          <div
            className="text-gray-1 absolute left-0 top-[376px] text-left"
            style={{ font: "600 80px 'Archivo', sans-serif" }}
          >
            案例研究
          </div>

          <svg
            className="absolute left-[calc(50%_-_520px)] top-[232px] overflow-visible"
            style={{}}
            width="162"
            height="59"
            viewBox="0 0 162 59"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28.5936 16.9835V59H12.9942V16.9835H0V0H41.5024V16.9835H28.5936Z"
              fill="#FF9C8E"
            />
            <path
              d="M41.5024 33.6427C41.5024 27.5097 43.6396 22.2319 47.914 17.8091C52.2454 13.3273 57.3747 11.0864 63.3019 11.0864C69.2291 11.0864 74.3299 13.3273 78.6043 17.8091C82.9357 22.2319 85.1014 27.5097 85.1014 33.6427C85.1014 39.7756 82.9642 45.0535 78.6898 49.4762C74.4154 53.899 69.2861 56.1104 63.3019 56.1104C57.3177 56.1104 52.1884 53.899 47.914 49.4762C43.6396 45.0535 41.5024 39.7756 41.5024 33.6427ZM56.9758 33.6427C56.9758 35.4118 57.5742 36.945 58.771 38.2424C60.0248 39.4807 61.5351 40.0999 63.3019 40.0999C65.0686 40.0999 66.5504 39.4807 67.7473 38.2424C69.0011 36.945 69.628 35.4118 69.628 33.6427C69.628 31.8146 69.0011 30.2813 67.7473 29.043C66.5504 27.7456 65.0686 27.0969 63.3019 27.0969C61.5351 27.0969 60.0248 27.7456 58.771 29.043C57.5742 30.2813 56.9758 31.8146 56.9758 33.6427Z"
              fill="#FF9C8E"
            />
            <path
              d="M92.9241 14.949H108.568V39.4513C108.568 41.8691 109.537 43.078 111.475 43.078C113.47 43.078 114.467 41.8691 114.467 39.4513V14.949H130.026V39.1859C130.026 44.906 128.259 49.6532 124.726 53.4273C121.249 57.1424 116.832 59 111.475 59C105.833 59 101.33 57.1424 97.9679 53.4273C94.6054 49.7121 92.9241 44.5227 92.9241 37.8591V14.949Z"
              fill="#F22D3E"
            />
            <path
              d="M162 13.976V30.7826C160.871 30.7826 159.806 30.7826 158.837 30.7826C157.583 30.7826 156.586 31.3723 155.845 32.5517C155.161 33.7311 154.819 35.4118 154.819 37.5937V58.027H139.175V34.4977C139.175 28.1879 140.77 23.2049 143.962 19.5487C147.211 15.8336 151.57 13.976 157.042 13.976C158.637 13.976 159.684 13.976 162 13.976Z"
              fill="#F22D3E"
            />
          </svg>

          <div
            className="absolute left-[182px] top-[239px] text-left text-[#ffffff]"
            style={{ font: "600 48px 'Archivo', sans-serif" }}
          >
            旅行助手
          </div>

          <div
            className="absolute left-[470.21px] top-[199.59px] flex flex-row items-end justify-start gap-0"
            style={{
              transformOrigin: "0 0",
              transform: "rotate(-23.985deg) scale(1, 1)",
            }}
          >
            <img
              className="relative h-[321.81px] w-[160.6px] shrink-0"
              src="tour-1.png"
            />

            <img
              className="relative h-[323.05px] w-[168.94px] shrink-0"
              src="tour-2.png"
            />

            <img
              className="relative h-[328.61px] w-[172.95px] shrink-0"
              src="tour-3.png"
            />
          </div>
        </div>

        <div className="relative flex shrink-0 flex-col items-start justify-start gap-10">
          <div className="relative flex shrink-0 flex-col items-start justify-start gap-6">
            <div
              id="beijin"
              className="text-gray-1 relative text-left"
              style={{
                font: "var(--heading-1, 700 48px/140% 'Archivo', sans-serif)",
              }}
            >
              项目背景
            </div>

            <div
              className="text-gray-1 relative w-[1040px] text-left"
              style={{
                font: "var(--body, 400 17px/140% 'PingFang SC', sans-serif)",
              }}
            >
              本款软件的设计背景起源于自己的经历：事实上，在我完成此作品集之前规划了一场旅游，旅行很顺利也很快乐，但却并不简单，在旅行的过程中，不仅仅是欣赏沿途风光这么简单，在美丽风景的背后往往是很复杂的的规划事项，说走就走的旅行不是一件简单的事，而是严丝合缝的缜密计划。整套规划包含目的地的确定、行程的制定、交通方式的选择、住宿条件的选择、景点的选择、参观路线的制定等一系列的安排，而制定好这些计划，我们在旅行中才能更加开心、无忧无虑的欣赏沿途的风光。
            </div>
          </div>
        </div>

        <div className="relative flex shrink-0 flex-col items-start justify-start gap-6">
          <div
            id="wenti"
            className="text-gray-1 relative text-left"
            style={{
              font: "var(--heading-1, 700 48px/140% 'Archivo', sans-serif)",
            }}
          >
            挑战/问题声明
          </div>

          <div className="relative flex shrink-0 flex-row items-start justify-start gap-8">
            <div className="relative flex shrink-0 flex-col items-start justify-start gap-[31px]">
              <div
                className="text-gray-1 relative w-[1040px] text-left"
                style={{
                  font: "var(--title, 700 22px/140% 'Roboto', sans-serif)",
                }}
              >
                问题概述
              </div>

              <img
                className="relative h-[391px] w-[1040px] shrink-0 rounded-[20px]"
                src="tour-quesion.png"
              />

              <div
                className="text-gray-1 relative w-[1040px] text-left"
                style={{
                  font: "var(--body, 400 17px/140% 'PingFang SC', sans-serif)",
                }}
              >
                就是在这次旅行中，我发现了关于制定计划方面的一些问题，而第二个项目的灵感也来源于此：
              </div>

              <div className="relative flex w-[1040px] shrink-0 flex-row items-center justify-start gap-[31px]">
                <div
                  className="text-gray-1 relative w-[427px] text-left"
                  style={{
                    font: "var(--body, 400 17px/140% 'PingFang SC', sans-serif)",
                  }}
                >
                  1.在和朋友的旅行中，最开始的矛盾诞生于决定目的地，也就是说我们决定了出去旅游，但却还没想好去哪游玩，自此，需求产生了，那么为了解决我们的问题，我们是开始查找各种app以及朋友圈和旅游推荐，最终虽然也模糊的制定了这段旅行的总体计划，但也只是知道了一下去哪而已，什么时间去，以及随着旅行所产生的其他问题都还待解决。
                </div>

                <img
                  className="relative h-[274px] w-[582px] shrink-0 rounded-[20px]"
                  src="tour-mudidi.png"
                />
              </div>

              <div className="relative flex shrink-0 flex-row items-start justify-start gap-[31px]">
                <img
                  className="relative h-[437px] w-[389px] shrink-0 rounded-[20px]"
                  src="tour-zhusudi.png"
                />

                <div className="relative flex shrink-0 flex-col items-start justify-start gap-[57px]">
                  <img
                    className="relative h-[272px] w-[619px] shrink-0 rounded-[20px]"
                    src="tour-jiaotongfangshi.png"
                  />

                  <div
                    className="text-gray-1 relative w-[619px] text-left"
                    style={{
                      font: "var(--body, 400 17px/140% 'PingFang SC', sans-serif)",
                    }}
                  >
                    2.问题诞生在关于旅行的附属问题上，也就是随着旅行而产生的交通方式选择，住宿选择及其相关的费用计算，这些问题甚至影响了对于第一个问题的决定。
                  </div>
                </div>
              </div>

              <div className="relative flex w-[1040px] shrink-0 flex-row items-center justify-start gap-[31px]">
                <div className="relative flex w-[405px] shrink-0 flex-col items-start justify-start gap-10">
                  <div
                    className="text-gray-1 relative self-stretch text-left"
                    style={{
                      font: "var(--body, 400 17px/140% 'PingFang SC', sans-serif)",
                    }}
                  >
                    3.关于旅行中更加细致的计划，对于我们旅游地点的具体行程的计划，往往需要我们在前一天晚上做细致的规划才行，但这也导致有部分规划内容是需要提前几天做规划的，而不是前一天晚上再做计划，因此我们就错过了很多旅游地点的选择。
                  </div>

                  <div
                    className="text-gray-1 relative self-stretch text-left"
                    style={{
                      font: "var(--body, 400 17px/140% 'PingFang SC', sans-serif)",
                    }}
                  >
                    4.其次，就算计划完成，但由于对当地的不熟悉，我们往往会发生因为对景点与景点距离判断有无而导致错过时间，为此，我们不得不翻阅各大攻略平台，从而根据哪些不同人的攻略而制定自己的旅游方式，而对于旅游中的环境而言，本该在欣赏环境的我们却需要花大把的时间在规划行程上，这显然是没必要的。
                  </div>
                </div>

                <img
                  className="relative h-[451px] w-[603px] shrink-0 rounded-[20px]"
                  src="tour-xaingxijihua.png"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex w-[1040px] shrink-0 flex-col items-start justify-start gap-6">
          <div
            id="mubiao"
            className="text-gray-1 relative text-left"
            style={{
              font: "var(--heading-1, 700 48px/140% 'Archivo', sans-serif)",
            }}
          >
            目标
          </div>

          <div className="relative flex shrink-0 flex-col items-start justify-start gap-6">
            <div
              className="text-gray-1 relative w-[1040px] text-left"
              style={{
                font: "var(--body, 400 17px/140% 'PingFang SC', sans-serif)",
              }}
            >
              总结以上分析可以得到其实真正的问题在于规划行程本身就占据了大量的时间和精力，因此要先解决规划行程本身这个问题。同时，寄希望于运用科技力量改变人类生活的我决定做一款软件来解决这些问题，要解决这个问题，这款软件软件需要包含以下几个方面的功能：
            </div>

            <div
              className="text-gray-1 relative text-left"
              style={{
                font: "var(--body, 400 17px/140% 'PingFang SC', sans-serif)",
              }}
            >
              目标 1：帮助用户寻找并确定旅行地点。
            </div>

            <div
              className="text-gray-1 relative text-left"
              style={{
                font: "var(--body, 400 17px/140% 'PingFang SC', sans-serif)",
              }}
            >
              目标 2：帮助用户确定住宿和交通。
            </div>

            <div
              className="text-gray-1 relative text-left"
              style={{
                font: "var(--body, 400 17px/140% 'PingFang SC', sans-serif)",
              }}
            >
              目标 3：帮助用户可以详细制定每日行程。
            </div>

            <div
              className="text-gray-1 relative text-left"
              style={{
                font: "var(--body, 400 17px/140% 'PingFang SC', sans-serif)",
              }}
            >
              目标 3：尽可能的简单高效。
            </div>
          </div>
        </div>

        <div className="relative flex shrink-0 flex-col items-start justify-start gap-6">
          <div
            id="fenxi"
            className="text-gray-1 relative text-left"
            style={{
              font: "var(--heading-1, 700 48px/140% 'Archivo', sans-serif)",
            }}
          >
            研究/分析
          </div>

          <div className="relative flex shrink-0 flex-row items-center justify-center gap-8">
            <div className="text-gray-1 relative w-[1040px] text-left">
              <span>
                <span className="research-analysis-2-span">商业分析</span>
                <span className="research-analysis-2-span2">
                  <br />
                  <br />
                  对市面上已经有的旅游类软件的行程规划功能做简单的调研
                </span>
              </span>
            </div>
          </div>

          <img
            className="relative h-[1104px] w-[1040px] shrink-0"
            src="tour-shangyefenxi.png"
          />

          <div className="relative flex shrink-0 flex-row items-center justify-center gap-8">
            <div
              className="text-gray-1 relative w-[1040px] text-left"
              style={{
                font: "var(--body, 400 17px/140% 'PingFang SC', sans-serif)",
              }}
            >
              上述表格打✔表示具备完整特点、打⭕表示具备部分特点、打❌表示不具备此特点。
              <br />
              “智能生成规划”指可以根据用户选择目的地和日期智能化生成行程计划，包括旅行日期在各个地点上的分配以及长途交通和住宿情况。
              <br />
              “路线规划”指每日计划所只能生成的景点间路线及交通方式图。
              <br />
              “每日计划”指一天内根据每个景点的常规游览时间和景点间路程时间智能计算生成每天的计划并提醒用户一天的规划量。
              <br />
              “时间规划”指对每天各个景点的游览时间进行智能计算以帮助用户做决定，同时针对用户的实时情况做相应的调整。
            </div>
          </div>

          <div className="relative flex shrink-0 flex-row items-center justify-center gap-8">
            <div className="text-gray-1 relative w-[1040px] text-left">
              <span>
                <span className="research-analysis-2-span3">总结</span>
                <span className="research-analysis-2-span4">
                  <br />
                  <br />
                  市面上大多数旅行软件都对行程规划不太重视，功能不齐全、规划逻辑不清晰、行程计划不够智能化都是其问题所在。少有的较为成熟的行程软件也做不到帮用户智能化生成行程而更像是一个票务集合+销售软件。要不是配合旅行社商家做的路线销售，要不就是在新城规划上更多的依赖于用户来做决定而无法给予用户更多、更合适的建议。目前市面上的旅行软件并不能帮助用户减少在规划行程这件事情上时间和经历的消耗。
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className="relative flex shrink-0 flex-col items-start justify-start gap-6">
          <div
            id="yonghuhuaxiang"
            className="text-gray-1 relative text-left"
            style={{
              font: "var(--heading-1, 700 48px/140% 'Archivo', sans-serif)",
            }}
          >
            用户画像
          </div>

          <div className="relative flex shrink-0 flex-row items-center justify-center gap-8">
            <div className="text-gray-1 relative w-[1040px] text-left">
              <span>
                <span className="persona-3-span">角色概述</span>
                <span className="persona-3-span2">
                  <br />
                  <br />
                  我根据之前的分析，寻找了一些人来了解他们对于旅行的看法，更重要的是其对于行程制定的想法以及面临的问题。并依此制作了用户画像。
                </span>
              </span>
            </div>
          </div>

          <div className="relative flex h-[318px] w-[1040px] shrink-0 flex-row items-start justify-start gap-8">
            <img
              className="relative flex-1 self-stretch"
              src="tour-persona-1.png"
            />

            <img
              className="relative flex-1 self-stretch"
              src="tour-persona-2.png"
            />
          </div>

          <div className="relative flex shrink-0 flex-row items-center justify-center gap-8">
            <div className="text-gray-1 relative w-[1040px] text-left">
              <span>
                <span className="persona-3-span3">同理心地图</span>
                <span className="persona-3-span4">
                  <br />
                  <br />
                  根据用户画像分析，来探索用户在使用流程规划功能时会有什么样的感受、如何思考、以及他们会做什么和说什么样的话。
                </span>
              </span>
            </div>
          </div>

          <img
            className="relative h-[1040px] w-[1040px] shrink-0"
            src="tour-tonglixing-1.png"
          />
        </div>

        <div className="relative flex w-[1040px] shrink-0 flex-col items-start justify-start gap-[60px]">
          <div
            id="shishi"
            className="text-gray-1 relative text-left"
            style={{
              font: "var(--heading-1, 700 48px/140% 'Archivo', sans-serif)",
            }}
          >
            研究结果实施
          </div>

          <div className="relative flex shrink-0 flex-row items-center justify-center gap-8">
            <div className="text-gray-1 relative w-[1040px] text-left">
              <span>
                <span className="findings-3-span">项目功能简述</span>
                <span className="findings-3-span2">
                  <br />
                  <br />
                  基于以上研究，一款行程规划App应该包含以下基本功能：
                </span>
              </span>
            </div>
          </div>

          <div className="relative flex shrink-0 flex-row items-center justify-center gap-8">
            <div
              className="text-gray-1 relative w-[348px] text-left"
              style={{
                font: "var(--body, 400 17px/140% 'PingFang SC', sans-serif)",
              }}
            >
              1.第一项是尽可能提供详细准确的相关信息以帮助用户找到旅游地并能帮助用户加入自己的行程计划。
            </div>

            <img
              className="relative h-[230px] w-[658px] shrink-0 rounded-[20px]"
              src="tour-tansuomididi.png"
            />
          </div>

          <div className="relative flex shrink-0 flex-row items-center justify-center gap-8">
            <img
              className="relative h-[230px] w-[658px] shrink-0 rounded-[20px]"
              src="tour-zhengtiguihua.png"
            />

            <div
              className="text-gray-1 relative w-[347px] text-left"
              style={{
                font: "var(--body, 400 17px/140% 'PingFang SC', sans-serif)",
              }}
            >
              2.可以帮助用户智能化、人性化的生成整体旅行规划，包括在那个地点停留多长时间，那个地点有哪些景点，哪些景点可以串成一条线。
            </div>
          </div>

          <div className="relative flex shrink-0 flex-row items-center justify-start gap-8 self-stretch">
            <div
              className="text-gray-1 relative w-[529px] text-left"
              style={{
                font: "var(--body, 400 17px/140% 'PingFang SC', sans-serif)",
              }}
            >
              3.可以智能化的生成每日参考计划，用户只需要选择几个选项就可以生成符合用户期望的每日计划，甚至详细到一天中一个景点到另一个景点的时间和交通方式。
            </div>

            <img
              className="relative h-[171px] w-[482px] shrink-0 rounded-[20px]"
              src="tour-meirijihua.png"
            />
          </div>
        </div>

        <div className="relative flex shrink-0 flex-col items-start justify-start gap-6">
          <div
            id="xiangmuzhanshi"
            className="text-gray-1 relative text-left"
            style={{
              font: "var(--heading-1, 700 48px/140% 'Archivo', sans-serif)",
            }}
          >
            项目展示
          </div>

          <img
            className="relative h-[502.99px] w-[1040px] shrink-0"
            src="tour-xiangmuzhnashi.png"
          />
        </div>

        <div className="relative flex w-[1440px] shrink-0 flex-col items-center justify-start gap-20">
          <div className="relative flex w-[1040px] shrink-0 flex-col items-center justify-start gap-6">
            <div className="relative flex shrink-0 flex-row items-start justify-start gap-6 self-stretch">
              <svg
                className="relative shrink-0 overflow-visible"
                style={{}}
                width="47"
                height="59"
                viewBox="0 0 47 59"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.384 10.5542V34.22H7.44562V10.5542H0V0.988281H23.7806V10.5542H16.384Z"
                  fill="#FF4057"
                />
                <path
                  d="M22.018 19.9375C22.018 16.4831 23.2426 13.5104 25.6918 11.0192C28.1737 8.49489 31.1127 7.23272 34.509 7.23272C37.9052 7.23272 40.828 8.49489 43.2772 11.0192C45.7591 13.5104 47 16.4831 47 19.9375C47 23.3919 45.7754 26.3646 43.3262 28.8558C40.877 31.3469 37.9379 32.5925 34.509 32.5925C31.0801 32.5925 28.141 31.3469 25.6918 28.8558C23.2426 26.3646 22.018 23.3919 22.018 19.9375ZM30.8841 19.9375C30.8841 20.934 31.227 21.7976 31.9128 22.5283C32.6313 23.2258 33.4966 23.5746 34.509 23.5746C35.5213 23.5746 36.3704 23.2258 37.0562 22.5283C37.7746 21.7976 38.1338 20.934 38.1338 19.9375C38.1338 18.9078 37.7746 18.0442 37.0562 17.3467C36.3704 16.616 35.5213 16.2506 34.509 16.2506C33.4966 16.2506 32.6313 16.616 31.9128 17.3467C31.227 18.0442 30.8841 18.9078 30.8841 19.9375Z"
                  fill="#FF4057"
                />
                <path
                  d="M7.41988 34.1766H16.384V47.9775C16.384 49.3393 16.9392 50.0202 18.0495 50.0202C19.1925 50.0202 19.7639 49.3393 19.7639 47.9775V34.1766H28.6791V47.828C28.6791 51.0499 27.6667 53.7237 25.6421 55.8494C23.65 57.942 21.1192 58.9883 18.0495 58.9883C14.8165 58.9883 12.2367 57.942 10.31 55.8494C8.38324 53.7569 7.41988 50.834 7.41988 47.0807V34.1766Z"
                  fill="#1DA1F2"
                />
                <path
                  d="M47 33.6285V43.0948C46.3533 43.0948 45.7427 43.0948 45.1876 43.0948C44.4691 43.0948 43.8977 43.427 43.4731 44.0913C43.0813 44.7556 42.8853 45.7022 42.8853 46.9312V58.4402H33.9212V45.1874C33.9212 41.6334 34.8355 38.8267 36.6643 36.7674C38.5257 34.6748 41.0239 33.6285 44.1589 33.6285C45.0733 33.6285 45.673 33.6285 47 33.6285Z"
                  fill="#F2BB02"
                />
              </svg>

              <div
                id="luojitu"
                className="text-gray-1 relative text-left"
                style={{
                  font: "var(--heading-1, 700 48px/140% 'Archivo', sans-serif)",
                }}
              >
                逻辑图
              </div>
            </div>

            <div className="relative flex w-[1041px] shrink-0 flex-col items-center justify-start gap-16">
              <div className="relative flex shrink-0 flex-row items-end justify-start gap-0">
                <div className="relative flex shrink-0 flex-row items-center justify-center gap-2.5 overflow-hidden bg-[#686868] pb-1 pl-[15px] pr-[15px] pt-1">
                  <div
                    className="relative text-left text-[#ffffff]"
                    style={{ font: "600 32px 'PingFang SC', sans-serif" }}
                  >
                    软件中心逻辑：
                    <br />
                    为用户制定计划提供方便
                  </div>
                </div>

                <img
                  className="relative h-[370.74px] w-[600px] shrink-0"
                  src="tour-denglui.png"
                />
              </div>

              <div className="relative flex shrink-0 flex-col items-start justify-start gap-[26px]">
                <div
                  className="relative w-[736px] text-left text-[#000000]"
                  style={{ font: "400 20px 'PingFang SC', sans-serif" }}
                >
                  主要三个流程，分别为：
                </div>

                <div className="relative flex shrink-0 flex-col items-start justify-center gap-[18px]">
                  <div
                    className="relative text-left text-[#ff4057]"
                    style={{ font: "500 20px 'PingFang SC', sans-serif" }}
                  >
                    1：浏览、探索、查找地点为主，将景点信息进行综合从而更加方便用户使用
                  </div>

                  <div
                    className="relative text-left text-[#fdbc02]"
                    style={{ font: "500 20px 'PingFang SC', sans-serif" }}
                  >
                    2：从如何规划一条旅行路线的思路为依据，将旅行规划从发散式思考转化为选择性思考
                  </div>

                  <div
                    className="relative text-left text-[#00a0e9]"
                    style={{ font: "500 20px 'PingFang SC', sans-serif" }}
                  >
                    3：个人中心的设计更加关注用户自己的旅程，提供清晰的旅程计划的状态
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex w-[1040px] shrink-0 flex-col items-start justify-start gap-6">
            <div className="relative flex shrink-0 flex-col items-start justify-start gap-[11px]">
              <div className="relative flex shrink-0 flex-row items-start justify-start gap-[11px]">
                <svg
                  className="relative shrink-0 overflow-visible"
                  style={{}}
                  width="47"
                  height="59"
                  viewBox="0 0 47 59"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.384 10.2925V33.9583H7.44562V10.2925H0V0.726562H23.7806V10.2925H16.384Z"
                    stroke="black"
                    strokeWidth="2"
                  />
                  <path
                    d="M22.018 19.6758C22.018 16.2214 23.2426 13.2487 25.6918 10.7575C28.1737 8.23318 31.1127 6.971 34.509 6.971C37.9052 6.971 40.828 8.23318 43.2772 10.7575C45.7591 13.2487 47 16.2214 47 19.6758C47 23.1302 45.7754 26.1029 43.3262 28.5941C40.877 31.0852 37.9379 32.3308 34.509 32.3308C31.0801 32.3308 28.141 31.0852 25.6918 28.5941C23.2426 26.1029 22.018 23.1302 22.018 19.6758ZM30.8841 19.6758C30.8841 20.6722 31.227 21.5358 31.9128 22.2666C32.6313 22.9641 33.4966 23.3128 34.509 23.3128C35.5213 23.3128 36.3704 22.9641 37.0562 22.2666C37.7746 21.5358 38.1338 20.6722 38.1338 19.6758C38.1338 18.6461 37.7746 17.7825 37.0562 17.085C36.3704 16.3543 35.5213 15.9889 34.509 15.9889C33.4966 15.9889 32.6313 16.3543 31.9128 17.085C31.227 17.7825 30.8841 18.6461 30.8841 19.6758Z"
                    stroke="black"
                    strokeWidth="2"
                  />
                  <path
                    d="M7.41988 33.9149H16.384V47.7157C16.384 49.0776 16.9392 49.7585 18.0495 49.7585C19.1925 49.7585 19.7639 49.0776 19.7639 47.7157V33.9149H28.6791V47.5663C28.6791 50.7881 27.6667 53.462 25.6421 55.5877C23.65 57.6803 21.1192 58.7266 18.0495 58.7266C14.8165 58.7266 12.2367 57.6803 10.31 55.5877C8.38324 53.4952 7.41988 50.5722 7.41988 46.8189V33.9149Z"
                    stroke="black"
                    strokeWidth="2"
                  />
                  <path
                    d="M47 33.3668V42.8331C46.3533 42.8331 45.7427 42.8331 45.1876 42.8331C44.4691 42.8331 43.8977 43.1653 43.4731 43.8296C43.0813 44.4939 42.8853 45.4405 42.8853 46.6695V58.1785H33.9212V44.9257C33.9212 41.3717 34.8355 38.565 36.6643 36.5056C38.5257 34.4131 41.0239 33.3668 44.1589 33.3668C45.0733 33.3668 45.673 33.3668 47 33.3668Z"
                    stroke="black"
                    strokeWidth="2"
                  />
                </svg>

                <div
                  id="xiankuangtu"
                  className="relative text-right"
                  style={{ font: "600 48px 'PingFang SC', sans-serif" }}
                >
                  线框图
                </div>
              </div>

              <div
                className="relative w-[558px] text-left text-[#4b4b4b]"
                style={{ font: "400 16px/26px 'PingFang SC', sans-serif" }}
              >
                整套线框图根据流程图的分析而来，更加完善了页面数量以及更多的页面细节
              </div>
            </div>

            <img
              className="relative h-[739px] w-[925px] shrink-0"
              src="group-22.png"
            />
          </div>

          <div className="relative flex shrink-0 flex-col items-start justify-start gap-14">
            <div className="relative flex h-[77px] w-[277px] shrink-0 flex-row items-center justify-center gap-5">
              <svg
                className="relative shrink-0 overflow-visible"
                style={{}}
                width="63"
                height="75"
                viewBox="0 0 63 75"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="1"
                  y1="0.764648"
                  x2="1"
                  y2="6.91849"
                  stroke="black"
                  strokeLinecap="round"
                />
                <line
                  x1="62"
                  y1="9.11133"
                  x2="55.8462"
                  y2="9.11133"
                  stroke="black"
                  strokeLinecap="round"
                />
                <line
                  x1="54.0576"
                  y1="0.764648"
                  x2="54.0576"
                  y2="6.91849"
                  stroke="black"
                  strokeLinecap="round"
                />
                <line
                  x1="62"
                  y1="74.0918"
                  x2="55.8462"
                  y2="74.0918"
                  stroke="black"
                  strokeLinecap="round"
                />
                <path
                  d="M1.33883 3.48824C1.14357 3.68351 1.14357 4.00009 1.33883 4.19535L4.52081 7.37733C4.71607 7.57259 5.03265 7.57259 5.22792 7.37733C5.42318 7.18207 5.42318 6.86549 5.22792 6.67022L2.39949 3.8418L5.22792 1.01337C5.42318 0.818108 5.42318 0.501525 5.22792 0.306263C5.03265 0.111001 4.71607 0.111001 4.52081 0.306263L1.33883 3.48824ZM53.9113 4.19535C54.1066 4.00009 54.1066 3.68351 53.9113 3.48824L50.7293 0.306263C50.5341 0.111001 50.2175 0.111001 50.0222 0.306263C49.827 0.501525 49.827 0.818108 50.0222 1.01337L52.8507 3.8418L50.0222 6.67022C49.827 6.86549 49.827 7.18207 50.0222 7.37733C50.2175 7.57259 50.5341 7.57259 50.7293 7.37733L53.9113 4.19535ZM1.69238 4.3418L53.5578 4.3418V3.3418L1.69238 3.3418L1.69238 4.3418Z"
                  fill="black"
                />
                <path
                  d="M59.2769 8.85348C59.0816 8.65822 58.765 8.65822 58.5698 8.85348L55.3878 12.0355C55.1925 12.2307 55.1925 12.5473 55.3878 12.7426C55.5831 12.9378 55.8997 12.9378 56.0949 12.7426L58.9233 9.91414L61.7518 12.7426C61.947 12.9378 62.2636 12.9378 62.4589 12.7426C62.6541 12.5473 62.6541 12.2307 62.4589 12.0355L59.2769 8.85348ZM58.5698 73.9452C58.765 74.1405 59.0816 74.1405 59.2769 73.9452L62.4589 70.7632C62.6541 70.568 62.6541 70.2514 62.4589 70.0561C62.2636 69.8609 61.947 69.8609 61.7518 70.0561L58.9233 72.8845L56.0949 70.0561C55.8996 69.8609 55.5831 69.8609 55.3878 70.0561C55.1925 70.2514 55.1925 70.568 55.3878 70.7632L58.5698 73.9452ZM58.4233 9.20703L58.4233 73.5917L59.4233 73.5917L59.4233 9.20703L58.4233 9.20703Z"
                  fill="black"
                />
                <path
                  d="M18.7879 19.9243V46.4385H8.81082V19.9243H0.5V9.20703H27.044V19.9243H18.7879Z"
                  fill="#846BFF"
                />
                <path
                  d="M25.0765 30.437C25.0765 26.5668 26.4434 23.2363 29.1773 20.4453C31.9475 17.6171 35.2281 16.203 39.019 16.203C42.8099 16.203 46.0723 17.6171 48.8061 20.4453C51.5764 23.2363 52.9615 26.5668 52.9615 30.437C52.9615 34.3071 51.5946 37.6376 48.8608 40.4286C46.127 43.2196 42.8464 44.615 39.019 44.615C35.1917 44.615 31.9111 43.2196 29.1773 40.4286C26.4434 37.6376 25.0765 34.3071 25.0765 30.437ZM34.973 30.437C34.973 31.5533 35.3557 32.5209 36.1212 33.3396C36.9231 34.121 37.889 34.5118 39.019 34.5118C40.149 34.5118 41.0967 34.121 41.8622 33.3396C42.6641 32.5209 43.0651 31.5533 43.0651 30.437C43.0651 29.2834 42.6641 28.3158 41.8622 27.5344C41.0967 26.7157 40.149 26.3063 39.019 26.3063C37.889 26.3063 36.9231 26.7157 36.1212 27.5344C35.3557 28.3158 34.973 29.2834 34.973 30.437Z"
                  fill="#846BFF"
                />
                <path
                  d="M8.78209 46.3898H18.7879V61.8517C18.7879 63.3775 19.4076 64.1403 20.6469 64.1403C21.9227 64.1403 22.5606 63.3775 22.5606 61.8517V46.3898H32.5117V61.6843C32.5117 65.2939 31.3817 68.2896 29.1217 70.6712C26.8982 73.0156 24.0733 74.1878 20.6469 74.1878C17.0382 74.1878 14.1586 73.0156 12.008 70.6712C9.85739 68.3268 8.78209 65.052 8.78209 60.847V46.3898Z"
                  fill="#3DCFFF"
                />
                <path
                  d="M52.9615 45.7758V56.3815C52.2397 56.3815 51.5582 56.3815 50.9385 56.3815C50.1366 56.3815 49.4987 56.7536 49.0248 57.4978C48.5874 58.2421 48.3687 59.3027 48.3687 60.6795V73.5738H38.3629V58.7259C38.3629 54.7441 39.3835 51.5996 41.4248 49.2924C43.5025 46.948 46.291 45.7758 49.7903 45.7758C50.8109 45.7758 51.4803 45.7758 52.9615 45.7758Z"
                  fill="#3DCFFF"
                />
              </svg>

              <div
                id="shijueguifan"
                className="relative text-left text-[#000000]"
                style={{
                  font: "var(--heading-1, 700 48px/140% 'Archivo', sans-serif)",
                }}
              >
                视觉规范
              </div>
            </div>

            <div className="relative flex shrink-0 flex-col items-start justify-start gap-[11px]">
              <img
                className="relative h-[838.91px] w-[1040px] shrink-0"
                src="_13.png"
              />

              <img
                className="relative h-[582.97px] w-[1040px] shrink-0"
                src="_24.png"
              />

              <img
                className="relative h-[783.3px] w-[1040px] shrink-0"
                src="_34.png"
              />
            </div>
          </div>

          <div className="relative flex shrink-0 flex-col items-center justify-start gap-0 self-stretch">
            <div className="relative flex shrink-0 flex-col items-center justify-start gap-11 self-stretch">
              <div className="relative flex h-[104.96px] shrink-0 flex-row items-center justify-center gap-2.5 pb-0 pl-0 pr-0 pt-12">
                <svg
                  className="relative shrink-0 overflow-visible"
                  style={{}}
                  width="48"
                  height="62"
                  viewBox="0 0 48 62"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.7326 10.9436V35.8334H7.60404V10.9436H0V0.882812H24.2866V10.9436H16.7326Z"
                    fill="#F2BB02"
                  />
                  <path
                    d="M22.4864 20.8122C22.4864 17.1791 23.7371 14.0526 26.2384 11.4326C28.7731 8.7777 31.7747 7.45024 35.2432 7.45024C38.7117 7.45024 41.6967 8.7777 44.198 11.4326C46.7327 14.0526 48 17.1791 48 20.8122C48 24.4452 46.7493 27.5717 44.248 30.1917C41.7467 32.8117 38.7451 34.1217 35.2432 34.1217C31.7414 34.1217 28.7398 32.8117 26.2384 30.1917C23.7371 27.5717 22.4864 24.4452 22.4864 20.8122ZM31.5413 20.8122C31.5413 21.8602 31.8914 22.7684 32.5918 23.537C33.3255 24.2706 34.2093 24.6374 35.2432 24.6374C36.2771 24.6374 37.1442 24.2706 37.8446 23.537C38.5783 22.7684 38.9452 21.8602 38.9452 20.8122C38.9452 19.7292 38.5783 18.821 37.8446 18.0874C37.1442 17.3189 36.2771 16.9346 35.2432 16.9346C34.2093 16.9346 33.3255 17.3189 32.5918 18.0874C31.8914 18.821 31.5413 19.7292 31.5413 20.8122Z"
                    fill="#F2BB02"
                  />
                  <path
                    d="M7.57775 35.7877H16.7326V50.3025C16.7326 51.7347 17.2996 52.4509 18.4335 52.4509C19.6008 52.4509 20.1844 51.7347 20.1844 50.3025V35.7877H29.2893V50.1453C29.2893 53.5338 28.2554 56.3459 26.1876 58.5816C24.1532 60.7824 21.5685 61.8828 18.4335 61.8828C15.1318 61.8828 12.497 60.7824 10.5293 58.5816C8.5616 56.3808 7.57775 53.3067 7.57775 49.3593V35.7877Z"
                    fill="#FF4057"
                  />
                  <path
                    d="M48 35.2113V45.1673C47.3395 45.1673 46.716 45.1673 46.149 45.1673C45.4153 45.1673 44.8317 45.5166 44.3981 46.2153C43.9979 46.9139 43.7978 47.9095 43.7978 49.2021V61.3064H34.6429V47.3681C34.6429 43.6302 35.5767 40.6784 37.4444 38.5125C39.3454 36.3117 41.8968 35.2113 45.0985 35.2113C46.0323 35.2113 46.6447 35.2113 48 35.2113Z"
                    fill="#FF4057"
                  />
                </svg>

                <div
                  id="lo"
                  className="relative text-left text-[#000000]"
                  style={{
                    font: "var(--heading-1, 700 48px/140% 'Archivo', sans-serif)",
                  }}
                >
                  低保真原型
                </div>
              </div>

              <div className="relative flex shrink-0 flex-col items-start justify-start gap-0 self-stretch">
                <div className="relative flex shrink-0 flex-row items-center justify-center gap-[25px] self-stretch bg-[#f2bb02] pb-[100px] pl-0 pr-0 pt-[100px]">
                  <div
                    className="relative flex shrink-0 flex-row items-start justify-start gap-2"
                    style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
                  >
                    <img
                      className="relative h-[346.76px] w-[158.67px] shrink-0 rounded-[10px] border border-solid border-[#747474]"
                      src="tour-dibaozhan-1.png"
                    />

                    <img
                      className="relative h-[346.76px] w-[158.67px] shrink-0 rounded-[10px] border border-solid border-[#747474]"
                      src="tour-dibaozhen-2.png"
                    />

                    <img
                      className="relative h-[346.76px] w-[158.67px] shrink-0 rounded-[10px] border border-solid border-[#747474]"
                      src="tour-dibaozhen-3.png"
                    />

                    <img
                      className="relative h-[346.76px] w-[158.67px] shrink-0 rounded-[10px] border border-solid border-[#747474]"
                      src="tour-dibaozhen-4.png"
                    />

                    <img
                      className="relative h-[346.76px] w-[158.67px] shrink-0 rounded-[10px] border border-solid border-[#747474]"
                      src="tour-dibaozhen-5.png"
                    />
                  </div>

                  <div className="relative flex shrink-0 flex-col items-end justify-start gap-1">
                    <div
                      className="relative flex h-[50.03px] w-[182.79px] shrink-0 flex-row items-center justify-center gap-2.5 rounded-[15px] bg-[#ffcd63] p-2.5"
                      style={{
                        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <div
                        className="relative text-left text-[#000000]"
                        style={{ font: "600 20px 'PingFang SC', sans-serif" }}
                      >
                        浏览的逐层设计
                      </div>
                    </div>

                    <div
                      className="relative flex h-[130.29px] w-[180.73px] shrink-0 flex-col items-center justify-center gap-2.5 rounded-[15px] bg-[rgba(232,232,232,0.30)] p-2.5"
                      style={{
                        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                        backdropFilter: "blur(2px)",
                      }}
                    >
                      <div
                        className="relative self-stretch text-left text-[#000000]"
                        style={{ font: "500 15px 'PingFang SC', sans-serif" }}
                      >
                        通过对探索点的相关内容进行逐步深入的设计，可以更好地让不同用户的需要都得到很好的满足
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative flex shrink-0 flex-row items-center justify-center gap-[21px] self-stretch bg-[#ff4057] pb-[100px] pl-0 pr-0 pt-[100px]">
                  <div className="relative flex shrink-0 flex-col items-center justify-start gap-1.5">
                    <div
                      className="relative flex w-[185.89px] shrink-0 flex-row items-center justify-center gap-2.5 rounded-[15px] bg-[#b22d3d] p-2.5"
                      style={{
                        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <div
                        className="relative text-left text-[#ffffff]"
                        style={{ font: "600 20px 'PingFang SC', sans-serif" }}
                      >
                        线性计划制定
                      </div>
                    </div>

                    <div
                      className="relative flex shrink-0 flex-col items-center justify-center gap-2.5 rounded-[15px] bg-[rgba(232,232,232,0.30)] p-2.5"
                      style={{
                        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                        backdropFilter: "blur(2px)",
                      }}
                    >
                      <div
                        className="relative w-[158px] text-left text-[#ffffff]"
                        style={{ font: "500 15px 'PingFang SC', sans-serif" }}
                      >
                        单线逻辑的设计，将原本制作旅行计划的开放式搜索转化为更加简单的选择项，更加方便了用户对自己计划的控制
                      </div>
                    </div>
                  </div>

                  <div
                    className="relative flex shrink-0 flex-row items-start justify-start gap-2"
                    style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
                  >
                    <img
                      className="relative h-[346.76px] w-[158.67px] shrink-0 rounded-[10px] border border-solid border-[#747474]"
                      src="tour-jihuazhiding-1.png"
                    />

                    <img
                      className="relative h-[346.76px] w-[158.67px] shrink-0 rounded-[10px] border border-solid border-[#747474]"
                      src="tour-jihuazhiding-2.png"
                    />

                    <img
                      className="relative h-[346.76px] w-[158.67px] shrink-0 rounded-[10px] border border-solid border-[#747474]"
                      src="tour-jihuazhiding-3.png"
                    />

                    <img
                      className="relative h-[346.76px] w-[158.67px] shrink-0 rounded-[10px] border border-solid border-[#747474]"
                      src="tour-jihuazhiding-4.png"
                    />

                    <img
                      className="relative h-[346.76px] w-[158.67px] shrink-0 rounded-[10px] border border-solid border-[#747474]"
                      src="tour-jihuazhiding-5.png"
                    />
                  </div>
                </div>

                <div className="relative flex shrink-0 flex-row items-center justify-center gap-[34px] self-stretch bg-[#ff4057] pb-[100px] pl-0 pr-0 pt-[100px]">
                  <div
                    className="relative flex shrink-0 flex-row items-start justify-start gap-2"
                    style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
                  >
                    <img
                      className="relative h-[346.76px] w-[158.67px] shrink-0 rounded-[10px] border border-solid border-[#747474]"
                      src="tour-wanzhengjihua-1.png"
                    />

                    <img
                      className="relative h-[346.76px] w-[158.67px] shrink-0 rounded-[10px] border border-solid border-[#747474]"
                      src="tour-wanzhengjihua-2.png"
                    />

                    <img
                      className="relative h-[346.76px] w-[158.67px] shrink-0 rounded-[10px] border border-solid border-[#747474]"
                      src="tour-wanzhengjihua-3.png"
                    />

                    <img
                      className="relative h-[346.76px] w-[158.67px] shrink-0 rounded-[10px] border border-solid border-[#747474]"
                      src="tour-wanzhengjihua-4.png"
                    />
                  </div>

                  <div className="relative flex shrink-0 flex-col items-end justify-start gap-1.5">
                    <div
                      className="relative flex shrink-0 flex-row items-center justify-center gap-2.5 rounded-[15px] bg-[#b22d3d] p-2.5"
                      style={{
                        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <div
                        className="relative text-left text-[#ffffff]"
                        style={{ font: "600 20px 'PingFang SC', sans-serif" }}
                      >
                        更具行动性的计划
                      </div>
                    </div>

                    <div
                      className="relative flex shrink-0 flex-col items-center justify-center gap-2.5 rounded-[15px] bg-[rgba(232,232,232,0.30)] p-2.5"
                      style={{
                        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                        backdropFilter: "blur(2px)",
                      }}
                    >
                      <div
                        className="relative w-[158px] text-left text-[#ffffff]"
                        style={{ font: "500 15px 'PingFang SC', sans-serif" }}
                      >
                        智能根据选项生成计划，能更加精细和贴心的告诉用户计划详情，从每天的旅行计划，到路线、交通方式、预备清单，甚至每天计划也可以以小时为单位生成，而这些都不需要用户制定，智能化就可以完成
                      </div>
                    </div>
                  </div>
                </div>

                < div id="hi" className="relative flex shrink-0 flex-col items-start justify-start gap-2.5">
                  <img
                    className="relative h-[787.15px] w-[1440px] shrink-0"
                    src="tour-gaobaozhen.png"
                  />

                  <div className="absolute left-[609px] top-[308px] flex shrink-0 flex-col items-center justify-center gap-[23px]">
                    <div className="relative flex shrink-0 flex-row items-end justify-center gap-3.5">
                      <svg
                        className="relative shrink-0 overflow-visible"
                        style={{}}
                        width="88"
                        height="110"
                        viewBox="0 0 88 110"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M30.6765 18.1171V62.5924H13.9407V18.1171H0V0.139648H44.5255V18.1171H30.6765Z"
                          fill="#846BFF"
                        />
                        <path
                          d="M41.2251 35.7511C41.2251 29.2593 43.518 23.6726 48.1038 18.9909C52.7507 14.2469 58.2536 11.8749 64.6126 11.8749C70.9715 11.8749 76.4439 14.2469 81.0296 18.9909C85.6765 23.6726 88 29.2593 88 35.7511C88 42.243 85.7071 47.8297 81.1213 52.5113C76.5356 57.1929 71.0326 59.5337 64.6126 59.5337C58.1925 59.5337 52.6896 57.1929 48.1038 52.5113C43.518 47.8297 41.2251 42.243 41.2251 35.7511ZM57.8256 35.7511C57.8256 37.6238 58.4676 39.2467 59.7517 40.62C61.0968 41.9309 62.7171 42.5863 64.6126 42.5863C66.508 42.5863 68.0978 41.9309 69.3818 40.62C70.7269 39.2467 71.3995 37.6238 71.3995 35.7511C71.3995 33.8161 70.7269 32.1931 69.3818 30.8822C68.0978 29.509 66.508 28.8223 64.6126 28.8223C62.7171 28.8223 61.0968 29.509 59.7517 30.8822C58.4676 32.1931 57.8256 33.8161 57.8256 35.7511Z"
                          fill="#846BFF"
                        />
                        <path
                          d="M13.8925 62.5107H30.6765V88.4469C30.6765 91.0062 31.7159 92.2858 33.7948 92.2858C35.9348 92.2858 37.0048 91.0062 37.0048 88.4469V62.5107H53.697V88.166C53.697 94.2209 51.8016 99.2458 48.0107 103.241C44.2809 107.173 39.5423 109.14 33.7948 109.14C27.7416 109.14 22.9112 107.173 19.3037 103.241C15.6963 99.3082 13.8925 93.8151 13.8925 86.7615V62.5107Z"
                          fill="#3DCFFF"
                        />
                        <path
                          d="M88 61.4808V79.2709C86.7892 79.2709 85.646 79.2709 84.6065 79.2709C83.2614 79.2709 82.1914 79.8951 81.3965 81.1436C80.6628 82.392 80.2959 84.171 80.2959 86.4806V108.11H63.512V83.2035C63.512 76.5244 65.224 71.2498 68.648 67.3796C72.1332 63.4471 76.8107 61.4808 82.6805 61.4808C84.3925 61.4808 85.5153 61.4808 88 61.4808Z"
                          fill="#3DCFFF"
                        />
                      </svg>

                      <div
                        className="relative text-left text-[#000000]"
                        style={{ font: "600 40px 'PingFang SC', sans-serif" }}
                      >
                        高保真
                        <br />
                        原型
                      </div>
                    </div>
                    <a
                      href="https://www.figma.com/proto/TQ56VLWYx7dWe9QBT6DruI/Practice-2-BanaMenu?page-id=0%3A1&node-id=24%3A3708&viewport=342%2C48%2C0.2&scaling=min-zoom&starting-point-node-id=24%3A3708"
                      target="blank"
                    >
                      <div className="relative flex h-9 w-[119px] shrink-0 flex-row items-center justify-center gap-2.5 rounded-[65px] bg-[#fdbb2d] pb-[5px] pl-2.5 pr-2.5 pt-[5px]">
                        <div
                          className="relative text-left text-[#ffffff]"
                          style={{
                            font: "600 24px 'PingFang SC', sans-serif",
                            textDecoration: "underline",
                          }}
                        >
                          click it
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex shrink-0 flex-col items-center justify-start gap-2.5 self-stretch bg-[#242424]">
              <div className="relative flex w-[1040px] shrink-0 flex-col items-start justify-start gap-6 pb-[57px] pl-0 pr-0 pt-[57px]">
                <div
                  id="jielun"
                  className="relative text-left text-[#ffffff]"
                  style={{
                    font: "var(--heading-1, 700 48px/140% 'Archivo', sans-serif)",
                  }}
                >
                  结论/反思
                </div>

                <div className="relative flex shrink-0 flex-row items-center justify-center gap-8">
                  <div className="relative w-[1040px] text-left text-[#ffffff]">
                    <span>
                      <span className="conclusion-reflection-3-span">
                        结论
                        <br />
                      </span>
                      <span className="conclusion-reflection-3-span2">
                        <br />
                        整套项目基本完成了最初的想法，可以帮助用户更快的探索发现目的地，可以帮助用户快速的将目的地添加至计划，可以智能化生成旅游行程规划，可以帮助用户生成每日计划，可以帮助用户智能计算时间。总之，它是用户在旅行途中最贴心的小助手。
                      </span>
                    </span>
                  </div>
                </div>

                <div className="relative flex shrink-0 flex-row items-center justify-center gap-8">
                  <div className="relative w-[1040px] text-left text-[#ffffff]">
                    <span>
                      <span className="conclusion-reflection-3-span3">
                        更新迭代
                        <br />
                      </span>
                      <span className="conclusion-reflection-3-span4">
                        <br />
                        与此同时，它显然还有更新迭代的空间，比如它可以通过计算帮助用户动态的调整每日计划，例如用户留在一个经典的时间太长，它可以动态的帮助用户提供不影响之后形成的选项，甚至从之后的行程中优先删除没那么好的景点选项。
                        而这些都可以在之后的更新中逐步加入，那时候，它才是一个真正智能的旅行管家。
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="sticky left-3.5 top-[calc(50%_-_308px)] flex h-[616px] w-28 flex-col items-center justify-start gap-3 rounded-[10px] bg-[rgba(172,172,172,0.50)] p-1.5"
        style={{ backdropFilter: "blur(10px)" }}
      >
        <div
          className="relative text-center text-[#ffffff]"
          style={{ font: "600 16px/99.52% 'PingFang SC', sans-serif" }}
        >
          Navigation
        </div>

        <div className="relative flex shrink-0 flex-col items-center justify-center gap-[5px]">
          <a href="#beijin" className="w-full">
            <div className="relative flex shrink-0 flex-row items-center justify-center gap-2.5 self-stretch rounded-lg bg-[#c93e3e] p-2.5">
              <div
                className="relative text-center text-[#ffffff]"
                style={{ font: "400 16px/99.52% 'PingFang SC', sans-serif" }}
              >
                背景
              </div>
            </div>
          </a>

          <a href="#wenti" className="w-full">
            <div className="relative flex shrink-0 flex-row items-center justify-center gap-2.5 self-stretch rounded-lg bg-[#c93e3e] p-2.5">
              <div
                className="relative text-center text-[#ffffff]"
                style={{ font: "400 16px/99.52% 'PingFang SC', sans-serif" }}
              >
                问题
              </div>
            </div>
          </a>

          <a href="#mubiao" className="w-full">
            <div className="relative flex shrink-0 flex-row items-center justify-center gap-2.5 self-stretch rounded-lg bg-[#c93e3e] p-2.5">
              <div
                className="relative text-center text-[#ffffff]"
                style={{ font: "400 16px/99.52% 'PingFang SC', sans-serif" }}
              >
                目标
              </div>
            </div>
          </a>
          <a href="#fenxi" className="w-full">
            <div className="relative flex shrink-0 flex-row items-center justify-center gap-2.5 self-stretch rounded-lg bg-[#c93e3e] p-2.5">
              <div
                className="relative text-center text-[#ffffff]"
                style={{ font: "400 16px/99.52% 'PingFang SC', sans-serif" }}
              >
                分析
              </div>
            </div>
          </a>
          <a href="#yonghuhuaxiang" className="w-full">
            <div className="relative flex shrink-0 flex-row items-center justify-center gap-2.5 self-stretch rounded-lg bg-[#c93e3e] p-2.5">
              <div
                className="relative text-center text-[#ffffff]"
                style={{ font: "400 16px/99.52% 'PingFang SC', sans-serif" }}
              >
                用户画像
              </div>
            </div>
          </a>
          <a href="#shishi" className="w-full">
            <div className="relative flex shrink-0 flex-row items-center justify-center gap-2.5 self-stretch rounded-lg bg-[#c93e3e] p-2.5">
              <div
                className="relative text-center text-[#ffffff]"
                style={{ font: "400 16px/140% 'PingFang SC', sans-serif" }}
              >
                实施
              </div>
            </div>
          </a>
          <a href="#xiangmuzhanshi" className="w-full">
            <div className="relative flex shrink-0 flex-row items-center justify-center gap-2.5 self-stretch rounded-lg bg-[#c93e3e] p-2.5">
              <div
                className="relative text-center text-[#ffffff]"
                style={{ font: "400 16px/140% 'PingFang SC', sans-serif" }}
              >
                项目展示
              </div>
            </div>
          </a>

          <a href="#luojitu" className="w-full">
            <div className="relative flex shrink-0 flex-row items-center justify-center gap-2.5 self-stretch rounded-lg bg-[#c93e3e] p-2.5">
              <div
                className="relative text-center text-[#ffffff]"
                style={{ font: "400 16px/140% 'PingFang SC', sans-serif" }}
              >
                逻辑图
              </div>
            </div>
          </a>

          <a href="#xiankuangtu" className="w-full">
            <div className="relative flex shrink-0 flex-row items-center justify-center gap-2.5 self-stretch rounded-lg bg-[#c93e3e] p-2.5">
              <div
                className="relative text-center text-[#ffffff]"
                style={{ font: "400 16px/140% 'PingFang SC', sans-serif" }}
              >
                线框图
              </div>
            </div>
          </a>

          <a href="#shijueguifan" className="w-full">
            <div className="relative flex shrink-0 flex-row items-center justify-center gap-2.5 self-stretch rounded-lg bg-[#c93e3e] p-2.5">
              <div
                className="relative text-center text-[#ffffff]"
                style={{
                  font: "var(--body, 400 16px/140% 'PingFang SC', sans-serif)",
                }}
              >
                视觉规范
              </div>
            </div>
          </a>

          <a href="#lo" className="w-full">
            <div className="relative flex shrink-0 flex-row items-center justify-center gap-2.5 self-stretch rounded-lg bg-[#c93e3e] p-2.5">
              <div
                className="relative text-center text-[#ffffff]"
                style={{
                  font: "var(--body, 400 16px/140% 'PingFang SC', sans-serif)",
                }}
              >
                低保真原型
              </div>
            </div>
          </a>

          <a href="#hi" className="w-full">
            <div className="relative flex shrink-0 flex-row items-center justify-center gap-2.5 self-stretch rounded-lg bg-[#c93e3e] p-2.5">
              <div
                className="relative text-center text-[#ffffff]"
                style={{
                  font: "var(--body, 400 16px/140% 'PingFang SC', sans-serif)",
                }}
              >
                高保真原型
              </div>
            </div>
          </a>

          <a href="#jielun" className="w-full">
            <div className="relative flex shrink-0 flex-row items-center justify-center gap-2.5 self-stretch rounded-lg bg-[#c93e3e] p-2.5">
              <div
                className="relative text-center text-[#ffffff]"
                style={{
                  font: "var(--body, 400 16px/140% 'PingFang SC', sans-serif)",
                }}
              >
                结论
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
