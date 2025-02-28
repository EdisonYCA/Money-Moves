import { usePlaidLink } from "react-plaid-link";
export default function Link({ linkToken }) {
  const onSuccess = (public_token) => {
    const exchangePublicTokenForAccessToken = async () => {
      try {
        const response = await fetch("/api/createAccessToken", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ public_token }),
        });

        if (response.ok) {
          console.log("success");
        } else {
          const error = await response.json();
          console.error("Error:", error);
        }
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    exchangePublicTokenForAccessToken();
  };

  const config = {
    token: linkToken,
    onSuccess: (public_token) => {
        onSuccess(public_token);
    },
  };

  const { open, ready } = usePlaidLink(config);

  return (
    <button
      onClick={() => {
        open();
      }}
      disabled={!ready}
    >
      Open
    </button>
  );
}
