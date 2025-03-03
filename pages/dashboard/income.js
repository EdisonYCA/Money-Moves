import { useEffect, useState } from "react";
import Table from "@/components/Table/Table";
import { useStateContext } from "@/context/StateContext";


export default function Income() {
  const { setLinkToken } = useStateContext();

  useEffect(() => {
      const oldLinkToken = JSON.parse(localStorage.getItem("linkToken"))

      if (!oldLinkToken || new Date() >= new Date(oldLinkToken.expiration)){
          const fetchData = async () => {
              try {
                  const response = await fetch("/api/createToken");
                  const tokenData = await response.json()
                  localStorage.setItem("linkToken", JSON.stringify(tokenData));
                  setLinkToken(JSON.stringify(tokenData).link_token)
              } catch (err) {
                  console.log(err)
              }
          }
          fetchData();
      } else {
          setLinkToken(oldLinkToken.link_token)
      }
  }, [])

  return (
    <Table />
  );
}
