import React from "react";
import { FormattedMessage } from "react-intl";
import Sign from "../../assets/sign.svg";
import { ITableData } from "../../models/table.model";

const tableData: ITableData[] = [
  {
    id: 0,
    service: "Enterprise Subscription",
    qty: 25,
    annualPrice: "$100,000",
  },
  {
    id: 1,
    service: "Lite Access Users - Subscription",
    qty: 350,
    annualPrice: "$35,000",
  },
  {
    id: 2,
    service: "Sandbox - Test Tenants",
    qty: 3,
    annualPrice: "included",
  },
  {
    id: 3,
    service: "Custom API Integrations",
    qty: 2,
    annualPrice: "$20,000",
  },
  {
    id: 4,
    service: "Enterprise API Integrations",
    qty: "all",
    annualPrice: "included",
  },
  {
    id: 5,
    service: "Delivery and Pro Services",
    qty: 1,
    annualPrice: "$50,000",
  },
  {
    id: 6,
    service: "Managed Services",
    qty: 1,
    annualPrice: "$50,000",
  },
  {
    id: 7,
    service: "Contract A1 Service",
    qty: 800,
    annualPrice: "$50,000",
  },
  {
    id: 8,
    service: "Sandbox - Test Tenants",
    qty: 3,
    annualPrice: "included",
  },
];

const InfoCard: React.FC = () => {
  return (
    <div className="bg-clip-padding backdrop-filter backdrop-blur-lg rounded-xl bg-white/10 w-4/6 shadow-lg ring-1 ring-black/5 p-[28px] rounded-sm space-y-6 border border-white/40 z-100 shadow-xl shadow-black">
      <div className="space-y-4">
        <div className="pb-[14px] border-b border-white opacity-60">
          <p>
            <FormattedMessage id="INFO_CARD.TITLE" />
          </p>
        </div>

        <div className="pb-4 border-b border-white opacity-60 flex gap-x-[36px] text-[12px]">
          <div className="flex-1 space-y-2">
            <p>
              <FormattedMessage id="INFO_CARD.FIRST_COMPANY.HEADER" />
            </p>
            <p>
              <FormattedMessage id="INFO.CARD.FIRST_COMPANY.ADDRESS" />
            </p>
            <p>
              <FormattedMessage id="INFO.CARD.FIRST_COMPANY.SECOND_ADDRESS" />
            </p>
          </div>
          <div className="flex-1 space-y-2">
            <p>
              <FormattedMessage id="INFO_CARD.SECOND_COMPANY.HEADER" />
            </p>
            <p>
              <FormattedMessage id="INFO.CARD.SECOND_COMPANY.ADDRESS" />
            </p>
            <p>
              <FormattedMessage id="INFO.CARD.SECOND_COMPANY.SECOND_ADDRESS" />
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-[14px]">
        <p className="text-[12px] font-medium">
          <FormattedMessage id="INFO.CARD.SUBSCRIPTION_TERMS" />
        </p>
        <div className="flex gap-x-[33px]">
          <div className="flex-1 space-y-2">
            <div className="flex justify-between font-roboto text-[12px]">
              <p className="opacity-60">
                <FormattedMessage id="INFO.CARD.SUBSCRIPTION_TERMS.START_DATE" />
              </p>
              <p className="font-medium">
                <FormattedMessage id="INFO.CARD.SUBSCRIPTION_TERMS.START_DATE.VALUE" />
              </p>
            </div>
            <div className="flex justify-between font-roboto text-[12px]">
              <p className="opacity-60">
                <FormattedMessage id="INFO.CARD.SUBSCRIPTION_TERMS.END_DATE" />
              </p>
              <p className="font-medium">
                <FormattedMessage id="INFO.CARD.SUBSCRIPTION_TERMS.END_DATE.VALUE" />
              </p>
            </div>
          </div>

          <div className="flex-1 space-y-2">
            <div className="flex justify-between font-roboto text-[12px]">
              <p className="opacity-60">
                <FormattedMessage id="INFO.CARD.SUBSCRIPTION_TERMS.BILLING_TERMS" />
              </p>
              <p className="font-medium">
                <FormattedMessage id="INFO.CARD.SUBSCRIPTION_TERMS.BILLING_TERMS.VALUE" />
              </p>
            </div>
            <div className="flex justify-between font-roboto text-[12px]">
              <p className="opacity-60">
                <FormattedMessage id="INFO.CARD.SUBSCRIPTION_TERMS.BILLING_FREQUENCY" />
              </p>
              <p className="font-medium">
                <FormattedMessage id="INFO.CARD.SUBSCRIPTION_TERMS.BILLING_FREQUENCY.VALUE" />
              </p>
            </div>
          </div>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right font-roboto rounded-[20px] border border-white/40">
            <thead className="text-[10px] uppercase mix-blend-overlay bg-white/30">
              <tr>
                <th scope="col" className="px-6 py-3">
                  <FormattedMessage id="TABLE.HEADER.SERVICES" />
                </th>
                <th scope="col" className="px-4 py-3">
                  <FormattedMessage id="TABLE.HEADER.QTY" />
                </th>
                <th scope="col" className="px-4 py-3">
                  <FormattedMessage id="TABLE.HEADER.ANNUAL_PRICE" />
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData?.map((data) => (
                <tr key={data?.id} className="odd:bg-white/20">
                  <th
                    scope="row"
                    className="px-[14px] py-[10px] whitespace-nowrap opacity-60"
                  >
                    {data.service}
                  </th>
                  <td className="px-[14px] py-[10px] opacity-90">
                    {data?.qty}
                  </td>
                  <td className="px-[14px] py-[10px] opacity-90">
                    {data?.annualPrice}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center pr-10">
          <img src={Sign} alt="sign" />

          <div className="flex space-x-[15px]">
            <p className="text-[14px] opacity-60">
              <FormattedMessage id="INFO.CARD.TOTAL" />
            </p>
            <p className="text-[14px] opacity-90">$255,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
