import React from "react";

const Card = ({
  fill,
  textColour,
  data,
}: {
  fill: string;
  textColour: string;
  data: BusinessResData;
}) => {
  const {
    businessName,
    businessLogo,
    ownerNumber,
    alternateNumber,
    ownerName,
    designation,
    address,
  } = data;
  return (
    <div className={`relative text-[#000]`}>
      <div
        className={`absolute left-[50%] translate-x-[-50%] h-[4px] w-[29px] bg-[${fill}] rounded-full`}
        style={{ background: fill }}
      ></div>
      <div className="absolute w-full h-full p-[15px]">
        <div className="w-full flex justify-between mb-[28px]">
          <div className="font-oswald-600">{businessName}</div>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={businessLogo}
              alt=""
              className="rounded-full h-[39px] aspect-square"
            />
          </div>
        </div>
        <div className="text-[28.364px] font-oswald-600 mb-[20px]">
          {ownerNumber}
        </div>
        <div className="mb-[15px] font-oswald-600">
          {ownerName} / <span className="italic">{designation}</span>
        </div>
        <div className="font-oswald-400 text-[10px]">{address}</div>
      </div>
      <svg
        width="345"
        height="218"
        viewBox="0 0 345 218"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 15C0 6.71572 6.71573 0 15 0H88.75H123.246C127.899 0 132.285 2.19259 135.825 5.21206C142.24 10.6835 154.546 18.5 172.5 18.5C190.454 18.5 202.76 10.6835 209.175 5.21206C212.715 2.19259 217.101 0 221.754 0H256.25H330C338.284 0 345 6.71573 345 15V202.54C345 210.824 338.284 217.54 330 217.54H15C6.71573 217.54 0 210.824 0 202.54V15Z"
          fill={fill}
        />
      </svg>
    </div>
  );
};

export default Card;
