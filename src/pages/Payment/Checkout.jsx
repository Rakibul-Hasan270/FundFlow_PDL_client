import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const Checkout = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log('[error] = ', error);
            setError(error.message);
        } else {
            console.log('[PaymentMethod] = ', paymentMethod);
        }
    };

    return (
        <div>
            <form className="p-8 text-white border w-1/2 mx-auto bg-white rounded-2xl" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-accent mt-5 btn-xs" type="submit" disabled={!stripe}>
                    Pay
                </button>
                {error && <p className="text-red-400 mt-2">{error}</p>}
            </form>
        </div>
    );
};

export default Checkout;