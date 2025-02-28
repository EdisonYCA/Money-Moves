import { useEffect, useState } from "react";
import Link from "@/components/Link/Link";

export default function income(){
    const [linkToken, setLinkToken] = useState(null);

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
        <>
            <Link linkToken={linkToken}/>
        </>
    );
}