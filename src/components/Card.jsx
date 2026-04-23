import Ellipsis from "../assets/images/icon-ellipsis.svg";
import IconWork from "../assets/images/icon-work.svg";
import IconPlay from "../assets/images/icon-play.svg";
import IconStudy from "../assets/images/icon-study.svg";
import IconExercise from "../assets/images/icon-exercise.svg";
import IconSocial from "../assets/images/icon-social.svg";
import IconSelfCare from "../assets/images/icon-self-care.svg";

const cardTheme = [
  {
    title: "Work",
    icon: IconWork,
    bg: "bg-primary-orange-300",
  },
  {
    title: "Play",
    icon: IconPlay,
    bg: "bg-primary-blue-300",
  },
  {
    title: "Study",
    icon: IconStudy,
    bg: "bg-primary-pink-400",
  },
  {
    title: "Exercise",
    icon: IconExercise,
    bg: "bg-primary-green-400",
  },
  {
    title: "Social",
    icon: IconSocial,
    bg: "bg-primary-purple-700",
  },
  {
    title: "Self Care",
    icon: IconSelfCare,
    bg: "bg-primary-yellow-300",
  },
];

const Card = ({ item, frequency }) => {

  const { daily, weekly, monthly } = item.timeframes;

  const theme = cardTheme.find((card) => card.title === item.title);

  return (
    <article className={`${theme.bg} ${theme.title.toLowerCase().replace(" ", "")} rounded-2xl text-white grid grid-rows-[38px_1fr]`}>
      <div className="rounded-2xl p-4 relative overflow-hidden">
        <img src={theme.icon} className="absolute -top-2.25 right-5" alt={item.title} width={78} height={78} />
      </div>

      <div className="bg-neutral-navy-900 rounded-2xl py-[27.5px] px-6 space-y-2 md:space-y-4 lg:space-y-6 z-10">
        <div className="flex items-center justify-between">
          <span className="font-medium text-lg leading-5.25">{item.title}</span>
          <img src={Ellipsis} alt="Ellipsis" />
        </div>
        <div className="flex items-center justify-between gap-4 md:flex-col md:items-start md:space-y-2">
          <p className="hour-text">
            {frequency === "daily" ? daily.current : frequency === "weekly" ? weekly.current : monthly.current}hrs
          </p>
          <p className="font-normal text-[15px] leading-4.5 text-neutral-navy-200">
            Last {frequency.charAt(0).toUpperCase() + frequency.slice(1)} - {frequency === "daily" ? daily.previous : frequency === "weekly" ? weekly.previous : monthly.previous}hrs
          </p>
        </div>
      </div>
    </article>
  );
};

export default Card;
