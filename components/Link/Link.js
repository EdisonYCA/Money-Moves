import { usePlaidLink } from 'react-plaid-link';

export default function Link({linkToken}){
    const onSuccess = () => {
        null;
    }

    const config = {
        token: linkToken,
        onSuccess,
    };

    const { open, ready } = usePlaidLink(config);
    
    return (
        <button onClick={() => {open()}} disabled={!ready}>Open</button>
    );
}