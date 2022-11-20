import PageTitle from "../components/shared/PageTitle";
import { faArrowUpShortWide, faUser, faArrowTrendUp, faArrowTrendDown } from "@fortawesome/free-solid-svg-icons";
import StatisticsDetailsCard from "../components/Dashboard/shared/StatisticsDetailsCard";

export default function Home() {
  const dashboardStatisticsDetails = [
    {
      statusIcon: faArrowTrendUp,
      title: "Total Users",
      totalValue: 277,
      percentValue: "+95",
      itemIcon: faUser,
      bottomText: "Last Month",
      bgColor1: "#4eda89",
      bgColor2: "#1a9f53",



    },
    {
      statusIcon: faArrowTrendDown,
      title: "Total Users",
      totalValue: 277,
      percentValue: "+95",
      itemIcon: faUser,
      bottomText: "Last Month",
      bgColor1: "#ed68ff",
      bgColor2: "#be0ee1",



    },
    {
      statusIcon: faArrowTrendDown,
      title: "Total Users",
      totalValue: 277,
      percentValue: "+95",
      itemIcon: faUser,
      bottomText: "Last Month",
      bgColor1: "#64b3f6",
      bgColor2: "#2b77e5",



    },
    {
      statusIcon: faArrowTrendUp,
      title: "Total Users",
      totalValue: 277,
      percentValue: "+95",
      itemIcon: faUser,
      bottomText: "Last Month",
      bgColor1: "#f4d02b",
      bgColor2: "#e1940e",



    },
  ];
  const breadcrumbs = "Home ~ Dashboard"
  return (
    <div>
      <PageTitle title="Dashboard" breadcrumbs={breadcrumbs} />
      <div className="m-5 grid grid-cols-12 gap-5">
        <div className="col-span-8  grid grid-cols-1 lg:grid-cols-2 gap-5">
          {
            dashboardStatisticsDetails.map((item, index) => <StatisticsDetailsCard item={item} key={index} />)
          }
        </div>
        <div className="col-span-4 bg-yellow-900">
          b
        </div>

      </div>
    </div>
  )
}
