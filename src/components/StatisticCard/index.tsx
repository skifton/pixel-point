import React from "react";
import { IStatistic } from "../../models/statistic.model";

interface IProps {
  statistic: IStatistic;
}

const StatisticCard: React.FC<IProps> = ({ statistic }) => {
  return (
    <li className="space-y-8">
      <div className="space-y-[14px]">
        <p className="gradient-text text-[136px] font-extralight leading-[136px] -tracking-[4%] font-poppins">
          {statistic?.value}
        </p>
        <p className="text-[24px] text-white">{statistic?.title}</p>
      </div>
      <div className="bg-white/10 w-full h-0.5" />
      <p className="font-light text-[#F0EEF1] text-[18px] leading-[27px] tracking-[2%]">
        {statistic?.description}
      </p>
    </li>
  );
};

export default StatisticCard;
