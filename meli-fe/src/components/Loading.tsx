import LogoMeli from "../assets/logo__small_25years.png";
import LoadingIcon from "./Icons/LoadingIcon";

const Loading = () => {
  return (
    <div className="flex flex-col relative w-full h-[200px] gap-y-4 items-center justify-center">
      <img src={LogoMeli} alt="logo_25y" className="" />
      <LoadingIcon classNames='animate-spin'/>
    </div>
  );
};

export default Loading;
