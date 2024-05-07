import CheckIcon from "../Icons/CheckIcon";

const SidebarItem = ({ img, title, description }) => {
  return (
    <li>
      <div>
        <span className="border border-[#AEAEAE] rounded-full w-14 h-14">
          <img src={img} alt={`item_${title}`} />
        </span>
        <span className="flex items-center justify-center w-1 h-1 bg-meli_green">
          <CheckIcon color="#fff" />
        </span>
      </div>
    </li>
  );
};

export default SidebarItem;
