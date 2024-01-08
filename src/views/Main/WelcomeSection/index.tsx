import React from "react";
import * as yup from "yup";
import SubscribeForm from "../../../components/SubscribeForm";
import InfoCard from "../../../components/InfoCard";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormattedMessage, useIntl } from "react-intl";

const WelcomeSection: React.FC = () => {
  const isLoading = false;
  const isSuccess = false;
  const isFailure = false;

  const intl = useIntl();

  const SubscribeFormSchema = yup.object().shape({
    email: yup
      .string()
      .email()
      .required(intl.formatMessage({ id: "INPUT.REQUIRED" })),
  });

  const UseFormReturn = useForm<{ email: string }>({
    resolver: yupResolver(SubscribeFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: { email: string }) => {
    console.log(data);
  };

  return (
    <section className="max-w-screen-2xl mx-5 2xl:mx-auto flex flex-col lg:flex-row items-center gap-y-20 lg:gap-x-[60px] text-white py-20">
      <div className="absolute hidden md:block w-[450px] h-[450px] -top-[128px] left-[224px] opacity-[15%] rounded-full z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#9966FF] to-70%" />
      <div className="flex-1 space-y-10">
        <div className="space-y-[28px]">
          <h1 className="text-[24px] sm:text-[36px] md:text-[48px] lg:text-[56px] xl:text-[76px] font-normal leading-[28px] sm:leading-[32px] md:leading-[58px] lg:leading-[64px] xl:leading-[85.5px] tracking-[-2%] font-poppins">
            <FormattedMessage id="MAIN.TITLE" />
          </h1>
          <p className="text-base md:text-[20px] font-light leading-[30px] tracking-[2%]">
            <FormattedMessage id="MAIN.SUBTITLE" />
          </p>
        </div>

        <SubscribeForm
          returnFormInstance={UseFormReturn}
          onSubmit={onSubmit}
          isFailure={isFailure}
          isLoading={isLoading}
          isSuccess={isSuccess}
        />
      </div>
      <div className="flex-1 flex justify-center items-center relative">
        <div className="absolute -top-14 left-10 w-96 h-96 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#9966FF]/60 to-70% z-2" />
        <div className="absolute top-80 -left-10 w-[30rem] h-[30rem] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#4D66E5]/60 to-70% z-2" />
        <div className="absolute top-20 w-[15rem] h-[15rem] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#F7E16E]/30 to-70% z-2" />
        <div className="absolute top-0 right-2 w-[15rem] h-[30rem] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#CB6AFB]/50 to-70% z-2" />
        <div className="absolute bottom-5 w-[8rem] h-[8rem] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#FFFFF]/50 to-70% z-2" />
        <div className="absolute bottom-0 right-4 w-96 h-96 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#9966FF]/50 to-70% z-2" />
        <div className="absolute h-full bg-white w-2 transform rotate-[15deg] lg:rotate-[30deg]" />
        <div className="absolute left-20 w-[140px] lg:w-[410px] h-[705px] border border-white/20 -rotate-[1deg] lg:-rotate-[2deg] shadow shadow-black bg-gradient-to-r from-white/10 to-transparent rounded-[6px] shadow-xl shadow-black" />
        <div className="absolute left-10 w-[140px] lg:w-[410px] h-[645px] border border-white/20 -rotate-[2deg] lg:-rotate-[4deg] shadow shadow-black bg-gradient-to-r from-white/10 to-transparent rounded-[6px] shadow-xl shadow-black" />
        <div className="absolute right-20 w-[140px] lg:w-[410px] h-[705px] border border-white/20 rotate-[1deg] lg:rotate-[2deg] shadow shadow-black bg-gradient-to-l from-white/10 to-transparent rounded-[6px] shadow-xl shadow-black" />
        <div className="absolute right-10 w-[140px] lg:w-[410px] h-[645px] border border-white/20 rotate-[2deg] lg:rotate-[4deg] shadow shadow-black bg-gradient-to-l from-white/10 to-transparent rounded-[6px] shadow-xl shadow-black" />
        <InfoCard />
      </div>
    </section>
  );
};

export default WelcomeSection;
