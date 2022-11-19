import PageTitle from "../components/shared/PageTitle";
import { faArrowUpShortWide, faUser } from "@fortawesome/free-solid-svg-icons";
import StatisticsDetailsCard from "../components/Dashboard/shared/StatisticsDetailsCard";

export default function Home() {
  const dashboardStatisticsDetails = [
    {
      StatusIcon: faArrowUpShortWide,
      title: "Total Users",
      totalValue: 277,
      percentValue: "+95",
      itemIcon: faUser,
      bottomText: "Last Month",
      bgColor1: "#4eda89",
      bgColor2: "#1a9f53",



    },
    {
      StatusIcon: faArrowUpShortWide,
      title: "Total Users",
      totalValue: 277,
      percentValue: "+95",
      itemIcon: faUser,
      bottomText: "Last Month",
      bgColor1: "#ddd",
      bgColor2: "#555",



    },
    {
      StatusIcon: faArrowUpShortWide,
      title: "Total Users",
      totalValue: 277,
      percentValue: "+95",
      itemIcon: faUser,
      bottomText: "Last Month",
      bgColor1: "#4eda89",
      bgColor2: "#1a9f53",



    },
    {
      StatusIcon: faArrowUpShortWide,
      title: "Total Users",
      totalValue: 277,
      percentValue: "+95",
      itemIcon: faUser,
      bottomText: "Last Month",
      bgColor1: "#4eda89",
      bgColor2: "#1a9f53",



    },
  ];
  const breadcrumbs = "Home ~ Dashboard"
  return (
    <div>
      <PageTitle title="Dashboard" breadcrumbs={breadcrumbs} />
      <div className="m-5 grid grid-cols-12 gap-5">
        <div className="col-span-8  grid grid-cols-1 md:grid-cols-2 gap-5">
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
