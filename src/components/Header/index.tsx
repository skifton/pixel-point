import React from "react";
import NavBar from "../NavBar";
import { FormattedMessage } from "react-intl";

const Header: React.FC = () => {
  return (
    <header className="h-16 w-full bg-transparent text-white">
      <div className="max-w-screen-2xl mx-5 2xl:mx-auto h-full flex justify-center items-center relative">
        <NavBar />
        <div className="absolute right-0 hidden md:block">
          <div className="flex items-center space-x-8">
            <p className="text-[15px] font-medium">
              <FormattedMessage id="HEADER.CONTACT_SALES" />
            </p>
            <div className="text-[15px] font-medium text-black py-[10px] px-[18px] bg-white rounded-[40px]">
              <FormattedMessage id="HEADER.BOOK_A_DEMO" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
