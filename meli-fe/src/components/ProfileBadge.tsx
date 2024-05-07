import CameraIcon from "../components/Icons/CameraIcon";

const ProfileBadge = ({ user }) => {
  return (
    <div className="rounded-lg bg-white shadow-lg md:w-[350px] md:mx-auto">
      <div className="flex items-center gap-4 h-24 pl-5">
        <div className="flex relative w-16 h-w-16">
          <img src={user.profile_image} alt="profile_img" className="rounded-full" />
          <span className="flex items-center justify-center h-6 w-6 absolute bottom-1 right-0 bg-white border border-slate-400 rounded-full">
            <CameraIcon size={14} />
          </span>
        </div>
        <div className="flex flex-col">
          <h2 className="font-semibold">{`${user.name} ${user.surname}`}</h2>
          <p className="text-sm">sorokanicolas@gmail.com</p>
        </div>
      </div>
      <p className="text-meli_blue border-t p-2 text-center text-xs font-semibold">
        Estás en nivel {user.level}
      </p>
    </div>
  );
};

export default ProfileBadge;
