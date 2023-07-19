import * as React from "react";
import tubiao from ".././assets/Vector.svg";
import { Outlet, useNavigate } from "react-router-dom";

function liststyle(params, tubiao) {
  return (
    <div className="w-fall flex max-w-full flex-row items-center justify-between self-stretch rounded-[5px] border border-solid border-black p-[10px] dark:border-white ">
      <div className="max-w-fall text-left text-[16px] tracking-[0%] text-[rgba(30,30,30,1)] dark:text-white">
        {params}
      </div>
      <img className="" src={tubiao} alt="some_text"></img>
    </div>
  );
}

export default function Bloglist() {
  // const goNavigate = useNavigate(); //在Home组件里初始化一个uN对象
  // const goBs = () => {
  //   goNavigate("/blog/bs");
  // }; //onClick不能直接传参数，所以在这个函数中赋值

  return (
    <div className="max-w-fall flex flex-col items-center justify-center space-y-1  gap-1">
      <div
        // onClick={goBs}
        className="w-fall flex max-w-full flex-row items-start font-bold justify-start self-stretch rounded-2xl bg-black p-[10px] text-left text-[96px] tracking-[0%] border-2 text-white dark:bg-white dark:text-black dark:border-slate-800"
      >
        idea
      </div>

      <div className="w-fall flex max-w-full flex-col items-center justify-start space-y-2 self-stretch rounded-[5px] border border-solid border-black px-[6px] pb-[6px] pt-[6px] dark:border-white">

        {/* <Outlet></Outlet> */}
        {liststyle("设计一套自己的标识系统", tubiao)}
        {liststyle(
          "一种全天候办公方式 上网需求 用电需求 空间需求 移动需求",
          tubiao
        )}
        {liststyle(
          "app：自动整理管家，拍照自动管理，分配整理空间，帮助整理！",
          tubiao
        )}

        {liststyle("自动整理桌面文件的程序", tubiao)}
        {liststyle("弹力绳连接的模块化椅子", tubiao)}
        {liststyle("一个动的模块以及若干搭配模块实现多用途", tubiao)}
        {liststyle("有更好的节日气氛的设计", tubiao)}
        {liststyle("便携移动收线器", tubiao)}
        {liststyle("共享代步工具： 可以代替自行车但比自行车好用", tubiao)}
        {liststyle("海事大学的立体书", tubiao)}
        {liststyle("塑料袋桌", tubiao)}
        {liststyle("不同角度看的指路牌！", tubiao)}
        {liststyle("物流产生的包装垃圾的处理", tubiao)}
        {liststyle("拼图🧩功能书", tubiao)}
        {liststyle("双层奶茶杯-热", tubiao)}
        {liststyle("磁吸结构笔袋", tubiao)}
        {liststyle("中国梦未来的展望", tubiao)}
        {liststyle("中秋赏月灯：两个半球壳；两个半圆", tubiao)}
        {liststyle("节日提醒器", tubiao)}
        {liststyle("家庭日历", tubiao)}
        {liststyle("鞋的创新：旧款鞋的改良", tubiao)}
        {liststyle("中国梦倒计时器：圆梦之日", tubiao)}
        {liststyle("纸杯防烫设计", tubiao)}
        {liststyle(
          "动漫设计中的车、家具、用具、建筑在建模软件中进行建模设计",
          tubiao
        )}
        {liststyle("折叠携带水杯（漱口杯）", tubiao)}
        {liststyle("造价低的便携住宿房屋、蜂巢", tubiao)}
        {liststyle("线性灯光", tubiao)}
        {liststyle("音乐瀑布", tubiao)}
        {liststyle("纸灯", tubiao)}
        {liststyle("纸型垃圾桶", tubiao)}
        {liststyle("可编织座椅", tubiao)}
        {liststyle("前后转的桌椅", tubiao)}
        {liststyle("一只腿线性的椅子", tubiao)}
        {liststyle("一种特殊造型的灯", tubiao)}
        {liststyle("有偏差的钟表", tubiao)}
        {liststyle("水帘灯光", tubiao)}
        {liststyle("利用风力实现更高的楼层", tubiao)}
        {liststyle("可留存电子图片信息的纸", tubiao)}
        {liststyle("自动转的时钟：是指钟表在转，指针不转", tubiao)}
        {liststyle("智能时问助理：根据地点，是否使用手机来决定", tubiao)}
        {liststyle("模块式汽车", tubiao)}
        {liststyle(
          "多携带房车：房车后部携带自行车或者摩托车、顶上挂在一辆普通汽车",
          tubiao
        )}
        {liststyle("弹簧椅子", tubiao)}
        {liststyle("卡片鼠标", tubiao)}
        {liststyle("泡在热水里能发光的灯", tubiao)}
        {liststyle("网络和本地相结合的文件加密储存方式", tubiao)}
        {liststyle("温度的可视化和穿衣", tubiao)}
        {liststyle(
          "可以将身材体型进行建模并把自己的衣服能进行自动匹配并展示穿衣效果的软件",
          tubiao
        )}
        {liststyle("重复对联", tubiao)}
        {liststyle("分别纸杯", tubiao)}
        {liststyle("可以把桌面变成白板的方法", tubiao)}
      </div>
    </div>
  );
}
