import React from "react";
import WelcomeSection from "./WelcomeSection";
import StatisticsSection from "./StatisticsSection";

const Main: React.FC = () => {
  return (
    <main className="space-y-16 pb-[160px] font-roboto">
      <WelcomeSection />
      <StatisticsSection />
    </main>
  );
};

export default Main;
