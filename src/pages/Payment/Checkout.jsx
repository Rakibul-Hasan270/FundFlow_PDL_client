import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hook/useAxiosSecure";
import toast from "react-hot-toast";
import useAuth from "../../hook/useAuth";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const navigate = useNavigate();

    const [donarInfo, setDonarInfo] = useState([]);
    const [clientSecret, setClientSecret] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    // Fetch donar info
    useEffect(() => {
        const fetchDonarData = async () => {
            try {
                const res = await axiosSecure.get(`/donar-info/${user.email}`);
                setDonarInfo(res.data);
            } catch (err) {
                console.error('Failed to fetch donor info:', err);
                toast.error(err?.message || 'Failed to load donor info');
            }
        };

        if (user?.email) {
            fetchDonarData();
        }
    }, [axiosSecure, user]);

    const amount = donarInfo.reduce((acc, item) => acc + parseFloat(item.amount), 0);
    const amountInCents = Math.round(amount * 100);

    useEffect(() => {
        if (amountInCents >= 50) {
            axiosSecure.post('/create-payment-intent', { amountInCents })
                .then(res => {
                    setClientSecret(res.data.clientSecret);
                })
                .catch(err => {
                    console.error('Error creating payment intent:', err);
                    toast.error('Failed to initialize payment');
                });
        }
    }, [amountInCents, axiosSecure]);


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) return;

        if (amount < 0.5) {
            toast.error("Minimum donation amount must be $0.50 or more.");
            return;
        }

        const card = elements.getElement(CardElement);
        if (!card) return;

        setLoading(true);
        setError('');

        const { error: paymentError, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (paymentError) {
            console.error('[PaymentMethod Error]', paymentError);
            setError(paymentError.message);
            setLoading(false);
            return;
        }
        console.log('[PaymentMethod]', paymentMethod);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.name || 'anonymous',
                },
            },
        });

        if (confirmError) {
            console.error('[Confirm Error]', confirmError);
            setError(confirmError.message);
        } else if (paymentIntent.status === 'succeeded') {
            toast.success('Payment successful!');
            console.log('Payment Intent:', paymentIntent);

            // send data to server 
            const payment = {
                email: user?.email,
                date: new Date(),
                transaction: paymentIntent.id,
                amount: amountInCents
            }
            const res = await axiosSecure.post('/payment', payment);
            console.log('send data to server from chackout.jsx', res.data);
            if (res.data.insertResult.insertedId) {
                navigate('/payment-history');
            }
        }
        setLoading(false);
    };

    return (
        <div>
            <form
                className="p-8 border w-1/2 mx-auto bg-white rounded-2xl shadow-lg"
                onSubmit={handleSubmit}
            >
                <div className="border border-gray-300 rounded-lg p-3 bg-white">
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#1f2937',
                                    '::placeholder': { color: '#9ca3af' },
                                    iconColor: '#4b5563',
                                },
                                invalid: {
                                    color: '#e11d48',
                                    iconColor: '#e11d48',
                                },
                            },
                        }}
                    />
                </div>

                <button
                    className="btn btn-accent mt-5 btn-sm"
                    type="submit"
                    disabled={!stripe || !clientSecret || amount < 0.5 || loading}
                >
                    {loading ? <span>Processing...</span> : `Pay $${amount.toFixed(2)}`}
                </button>
                {error && <p className="text-red-500 mt-2">{error}</p>}
            </form>
        </div>
    );
};

export default Checkout;
