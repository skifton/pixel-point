import React from "react";
import StatisticList from "../../../components/StatisticList";
import { STATISTICS } from "../../../constants/statistics";

const StatisticsSection: React.FC = () => {
  return (
    <section className="max-w-screen-2xl mx-5 2xl:mx-auto">
      <StatisticList statistics={STATISTICS} />
    </section>
  );
};

export default StatisticsSection;
