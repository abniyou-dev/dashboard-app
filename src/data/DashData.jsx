import { ordersData } from "./OrdersData"


export const DashNumbers = () => {
    const orders = ordersData.length;
    const totalRevenu = ordersData.reduce((acc, cur) => {
        return acc + cur.total
    }, 0)
    return {orders, totalRevenu};
};

