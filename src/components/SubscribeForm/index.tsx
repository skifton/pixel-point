import React, { useEffect } from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import XMark from "../../assets/icons/x-mark.svg";
import Success from "../../assets/icons/success.svg";
import LoadingSpinner from "../LoadingSpinner";
import { useIntl } from "react-intl";

interface IProps {
  returnFormInstance: UseFormReturn<{ email: string }>;
  onSubmit: (data: { email: string }) => void;
  isSuccess?: boolean;
  isFailure?: boolean;
  isLoading?: boolean;
}

const SubscribeForm: React.FC<IProps> = ({
  returnFormInstance,
  onSubmit,
  isLoading,
  isFailure,
  isSuccess,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = returnFormInstance;

  const intl = useIntl();

  const buttonStyle = `absolute ${
    !isLoading && !isFailure && !isSuccess ? "top-[5px]" : "top-[8px]"
  } right-[6px] ${
    isSuccess === true
      ? "bg-[#40BFAA]"
      : isFailure
      ? "bg-[#CB6AFB]"
      : "bg-[#9966FF]"
  } text-[#0E0A0F] rounded-[40px] ${
    isLoading ? "p-[9px]" : isFailure || isSuccess ? "p-4" : "px-[28px] py-4"
  } font-medium`;

  useEffect(() => {
    if (isFailure) {
      setValue("email", "");
    }
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative max-w-[504px]">
      <Controller
        name="email"
        control={control}
        render={({ field: { value, onChange } }) => (
          <div className="space-y-3">
            <input
              className="bg-[#1f1721] border border-[#38283a] rounded-[30px] px-8 py-5 outline-none placeholder:font-light placeholder:relative placeholder:z-10 placeholder:text-transparent placeholder:bg-clip-text placeholder:bg-gradient-to-r placeholder:from-pink-300 placeholder:via-purple-300 placeholder:to-purple-600 w-full text-white/80"
              type="email"
              placeholder={
                !isFailure
                  ? intl.formatMessage({ id: "INPUT.EMAIL.PLACEHOLDER" })
                  : intl.formatMessage({ id: "FORM.ERROR" })
              }
              value={value}
              onChange={onChange}
            />
            {errors.email?.message && (
              <p className="text-[#F04242] pl-8">{errors.email.message}</p>
            )}
          </div>
        )}
      />

      <button
        className={buttonStyle}
        type="submit"
        disabled={isLoading || isSuccess || isFailure}
      >
        {isLoading ? (
          <LoadingSpinner />
        ) : isSuccess ? (
          <img src={Success} alt="success icon" />
        ) : isFailure ? (
          <img src={XMark} alt="x-mark" />
        ) : (
          intl.formatMessage({ id: "BUTTON.FREE_TRIAL" })
        )}
      </button>
    </form>
  );
};

export default SubscribeForm;
