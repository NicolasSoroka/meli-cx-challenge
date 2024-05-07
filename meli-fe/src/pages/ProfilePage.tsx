import { Link } from "react-router-dom";
import LeftArrowIcon from "../components/Icons/LeftArrowIcon";
import ProfileBadge from "../components/ProfileBadge";
import { ROUTES } from "../constants/routes";
import PurchasesList from "../components/PurchasesList";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../api/axios";
import Loading from "../components/Loading";
import Restrictions from "../components/Restrictions";

const ProfilePage = () => {
  const {
    isLoading,
    isError,
    error,
    data: userData,
  } = useQuery({
    queryKey: ["profile"],
    queryFn: getUser,
  });

  if (isLoading) return <Loading />;
  if (isError) return <p>Error! {error.message}</p>;

  return (
    <>
      <Link
        to={ROUTES.HOMEPAGE_URL}
        className="flex items-center bg-meli_yellow p-2 gap-x-2"
      >
        <LeftArrowIcon />
        <span>Mi perfil</span>
      </Link>
      <div className="flex flex-col bg-meli_gray px-4 py-4 gap-y-2 md:gap-y-6">
        <ProfileBadge user={userData} />
        <Restrictions userId={userData.user_id} />
        <PurchasesList userId={userData.user_id} />
      </div>
    </>
  );
};

export default ProfilePage;
