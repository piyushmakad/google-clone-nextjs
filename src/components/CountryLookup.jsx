"use client";

import React, { useEffect, useState } from "react";

export default function CountryLookup() {
  const [country, setCountry] = useState("India");
  useEffect(() => {
    const getCountry = async () => {
      const res = await fetch("https://extreme-ip-lookup.com/json/");
      const data = await res.json();
      if (!res.ok) {
        return;
      }
      setCountry(data.country);
    };
    getCountry();
  }, []);
  return <div>{country}</div>;
}
