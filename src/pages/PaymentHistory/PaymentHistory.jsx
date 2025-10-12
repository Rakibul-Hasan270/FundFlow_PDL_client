import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hook/useAuth";
import useAxiosSecure from "../../hook/useAxiosSecure";
import Loading from "../../components/Loading/Loading";
import { TbCurrencyTaka } from "react-icons/tb";


const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
console.log(user?.role);
    const { data: paymentHistory = [], isLoading } = useQuery({
        queryKey: ['paymentHistory'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payment/${user.email}`);
            return res.data;
        }
    })
    if (isLoading) return <Loading></Loading>
    if (paymentHistory.length === 0) return <p className="text-xl md:text-5xl text-center font-bold mt-10 md:mt-24 mb-10 md:mb-24">You haven’t completed any payment yet.</p>
    return (
        <div className="max-w-5xl mx-auto p-6">
            <h2 className="text-2xl font-semibold mb-4 text-center">
                Payment History ({paymentHistory.length})
            </h2>

            <div className="overflow-x-auto rounded-lg shadow-lg border border-gray-200">
                <table className="min-w-full bg-white">
                    <thead className="bg-gray-100 border-b">
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                                #
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                                Transaction ID
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                                Amount
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                                Email
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                                Date
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {paymentHistory.map((payment, index) => (
                            <tr key={payment._id} className="border-b hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 text-sm text-gray-600">{index + 1}</td>
                                <td className="px-6 py-4 text-sm font-mono text-gray-800">{payment.transaction}</td>
                                <td className="px-6 py-4 text-sm font-mono text-gray-800 flex items-center">{payment.amount / 100} <TbCurrencyTaka></TbCurrencyTaka></td>
                                <td className="px-6 py-4 text-sm text-gray-800">{payment.email}</td>
                                <td className="px-6 py-4 text-sm text-gray-600">
                                    {new Date(payment.date).toLocaleString()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;