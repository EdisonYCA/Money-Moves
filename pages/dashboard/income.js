import { useEffect } from "react";
export default function income(){

    useEffect(() => {
        const oldLinkToken = JSON.parse(localStorage.getItem("linkToken"))

        if (!oldLinkToken || new Date() >= new Date(oldLinkToken.expiration)){
            const fetchData = async () => {
                try {
                    const response = await fetch("/api/createToken");
                    const tokenData = await response.json()
                    localStorage.setItem("linkToken", JSON.stringify(tokenData));
                } catch (err) {
                    console.log(err)
                }
            }
            fetchData();
        }
    }, [])

    return (
        <>
            <button>Add Account</button>
        </>
    );
}