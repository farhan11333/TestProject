
import { Card, CardContent } from "../components/ui/card";

const kpiData = [
  {
    title: "Total Sales",
    value: "$56,200",
    change: "5.2%",
    changeType: "positive" as const,
  },
  {
    title: "Total Expenses",
    value: "$24,500",
    change: "1.8%",
    changeType: "negative" as const,
  },
  {
    title: "Net Profit",
    value: "$31,700",
    change: null,
    changeType: null,
  },
];

export function KPICards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
      {kpiData.map((kpi, index) => (
        <Card key={index} className="bg-white shadow-sm">
          <CardContent className="p-4 md:p-6">
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-600">{kpi.title}</p>
              <div className="flex items-end justify-between">
                <p className="text-2xl md:text-3xl font-bold text-gray-900">{kpi.value}</p>
                {kpi.change && (
                  <span
                    className={`text-sm font-medium ${
                      kpi.changeType === "positive"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {kpi.changeType === "positive" ? "↗" : "↘"} {kpi.change}
                  </span>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
