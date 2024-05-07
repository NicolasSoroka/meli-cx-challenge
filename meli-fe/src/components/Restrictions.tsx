/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { getUserRestrictions } from "../api/axios";
import Loading from "./Loading";
import ShieldAlert from "./Icons/ShieldAlert";
import CheckIcon from "./Icons/CheckIcon";

const Restrictions = ({ userId }) => {
  const {
    isLoading,
    isError,
    error,
    data: userRestrictions,
  } = useQuery({
    queryKey: ["restrictions"],
    queryFn: () => getUserRestrictions(userId),
  });

  if (isLoading) return <Loading />;
  if (isError) return <p>Error! {error.message}</p>;

  return (
    <ul className="flex flex-col gap-y-2 md:w-[350px] md:mx-auto">
      {Object.entries(userRestrictions).map(([key, value]) =>
        value.map((restriction, index) => (
          <li
            key={index}
            className="flex items-center shadow-lg rounded-lg bg-white gap-4 h-20 px-6"
          >
            {restriction.type && <ShieldAlert size={35} color="#ab0a0a" />}
            <p className="font-semibold max-w-60">{restriction.message}</p>
          </li>
        ))
      )}

      {Object.keys(userRestrictions).length === 0 && (
        <li className="flex items-center justify-center shadow-lg rounded-lg bg-white h-16 gap-x-2">
          <span className="flex items-center justify-center h-6 w-6 bg-meli_green rounded-full">
            <CheckIcon color="#FFFFFF" size="15" />
          </span>
          <p className="font-semibold">Todas las verificaciones completadas</p>
        </li>
      )}
    </ul>
  );
};

export default Restrictions;
