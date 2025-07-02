import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";

const orders = [
  {
    id: "#12345",
    customer: "John Doe",
    amount: "$120,00",
    status: "Shipped",
    date: "07/21/2023",
    statusColor: "bg-blue-100 text-blue-800",
  },
  {
    id: "#12344",
    customer: "Jane Smith",
    amount: "$89,99",
    status: "Pending",
    date: "07/20/2023",
    statusColor: "bg-yellow-100 text-yellow-800",
  },
  {
    id: "#12343",
    customer: "Michael Johnson",
    amount: "$150,50",
    status: "Delivered",
    date: "07/18/2023",
    statusColor: "bg-green-100 text-green-800",
  },
];

export function RecentOrders() {
  return (
    <Card className="bg-white shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900">Recent Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-semibold text-gray-600">Order ID</TableHead>
              <TableHead className="font-semibold text-gray-600">Customer</TableHead>
              <TableHead className="font-semibold text-gray-600">Amount</TableHead>
              <TableHead className="font-semibold text-gray-600">Status</TableHead>
              <TableHead className="font-semibold text-gray-600">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id} className="hover:bg-gray-50">
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell className="font-semibold">{order.amount}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${order.statusColor}`}>
                    {order.status}
                  </span>
                </TableCell>
                <TableCell className="text-gray-600">{order.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
