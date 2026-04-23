import Card from "../components/Card";
import ProfileCard from "../components/ProfileCard";

const Dashboard = ({handleClick, frequency, isActive, data}) => {
  return (
    <main className="layout-grid md:w-153 lg:w-279">
      <ProfileCard handleClick={handleClick} frequency={frequency} isActive={isActive} />

      {data.map((item) => (
        <Card key={item.title} item={item} frequency={frequency} />
      ))}

    </main>
  );
};

export default Dashboard;
