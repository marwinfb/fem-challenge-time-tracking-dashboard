import Avatar from "../assets/images/image-jeremy.png";

const buttons = [
  {
    id: 1,
    title: "Daily",
  },
  {
    id: 2,
    title: "Weekly",
  },
  {
    id: 3,
    title: "Monthly",
  },
];

const ProfileCard = ({ handleClick, frequency, isActive }) => {
  return (
    <aside className="profile" aria-labelledby="profile-heading">
      <div className="bg-neutral-navy-900 rounded-2xl">
        <div className="flex items-center lg:items-start lg:flex-col p-8 lg:pb-23 rounded-2xl gap-6 lg:gap-10 bg-primary-purple-600">
          <img src={Avatar} className="border-3 border-white rounded-full lg:w-19.5 lg:h-19.5" alt="Jeremy" width={64} height={64} />
          <div className="space-y-2 lg:max-w-20">
            <span className="block font-normal text-[15px] leading-4.5 text-neutral-navy-200">Report for</span>
            <h2 id="profile-heading" className="font-light text-2xl lg:text-[40px] leading-7 lg:leading-11.75">Jeremy Robson</h2>
          </div>
        </div>
        <div className="py-6 lg:py-7 lg:px-8">
          <div className="grid grid-cols-3 lg:grid-cols-1 lg:gap-5">
            {buttons.map((btn) => (
              <button key={btn.id} type="button"
                className={`font-normal text-lg lg:text-left leading-5.25 cursor-pointer transition-colors duration-200
                ${frequency === btn.title.toLowerCase() && isActive
                    ? "text-white"
                    : "text-neutral-purple-500 hover:text-white"
                }`}
                onClick={() => {
                  handleClick(btn.title);
                }}
              >
                {btn.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default ProfileCard;
