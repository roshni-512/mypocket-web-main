"use client";
import React from "react";

const Options = ({ data }: { data: BusinessResData }) => {
  const name = data.businessName || "";
  const about = data.about || "";
  const number = data.ownerNumber || "";
  const call = `tel:${number}`;
  const message = `https://wa.me/${number}`;
  const email = `mailto:${data.email}`;
  const map = "https://maps.app.goo.gl/KPgUeQzHTHqyWrfz8"; //`https://maps.google.com/?q=21.1466636,72.7659974`;
  const options = [
    {
      name: "Call",
      backgroundColour: "#65DB5B",
      href: () => window.open(call, "_newtab"),
    },
    {
      name: "Message",
      backgroundColour: "#22A2FF",
      href: () => window.open(message, "_newtab"),
    },
    {
      name: "Map",
      backgroundColour: "#1B1920",
      href: () => window.open(map, "_newtab"),
    },
    {
      name: "Mail",
      backgroundColour: "#1B1920",
      href: () => window.open(email, "_newtab"),
    },
    {
      name: "Share",
      backgroundColour: "#1B1920",
      href: () => {
        if (navigator.share)
          navigator
            .share({
              title: name,
              text: about,
              url: `${window.location.origin}?id=${data._id}`,
            })
            .then(() => console.log("Successful share"))
            .catch((error) => console.log("Error sharing", error));
        if (navigator.canShare)
          navigator.canShare({
            title: name,
            text: about,
            url: `${window.location.origin}?id=${data._id}`,
          });
      },
    },
  ];
  return (
    <div className="my-[20px] w-[345px] flex gap-[3px] overflow-scroll scrollbar-hide">
      {options.map((v, i) => (
        <div
          key={v.name}
          className="rounded-full py-[7px] px-[20px] font-roboto-500 text-[12px] cursor-pointer"
          style={{ backgroundColor: v.backgroundColour }}
          onClick={v.href}
        >
          {v.name}
        </div>
      ))}
    </div>
  );
};

export default Options;
