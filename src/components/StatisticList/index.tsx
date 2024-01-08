import React from "react";
import { IStatistic } from "../../models/statistic.model";
import StatisticCard from "../StatisticCard";

interface IProps {
  statistics: IStatistic[];
}

const StatisticList: React.FC<IProps> = ({ statistics }) => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 md:gap-x-[166px]">
      {statistics?.map((statistic) => (
        <StatisticCard key={statistic.id} statistic={statistic} />
      ))}
    </ul>
  );
};

export default StatisticList;
