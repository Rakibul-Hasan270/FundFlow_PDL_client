import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Checkout from './Checkout';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Key);

const Payment = () => {
    return (
        <div className="max-w-7xl mx-auto mt-14">
            <Elements stripe={stripePromise}>
                <Checkout></Checkout>
            </Elements>
        </div>
    );
};

export default Payment;