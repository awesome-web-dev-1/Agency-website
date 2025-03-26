import { IoLogoDribbble, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";

const TeamCard = ({ name, email, imgUrl }) => {
  return (
    <div className="team-card text-center bg-white p-5 rounded-lg shadow-md">
      <figure>
        <img src={imgUrl} alt={name} className="rounded-[20px] w-full" />
      </figure>

      <div className="border-b pb-3 mt-4">
        <h4 className="text-neutral-800 text-[20px]">{name}</h4>
        <p className="text-sm text-gray-500">{email}</p>
      </div>

      <div className="flex justify-center gap-3 mt-4">
        <a href="#" className="hover:text-neutral-800 transition-colors duration-200">
          <IoLogoLinkedin size={26} />
        </a>
        <a href="#" className="hover:text-neutral-800 transition-colors duration-200">
          <IoLogoDribbble size={26} />
        </a>
        <a href="#" className="hover:text-neutral-800 transition-colors duration-200">
          <IoLogoInstagram size={26} />
        </a>
      </div>
    </div>
  );
};

export default TeamCard;
