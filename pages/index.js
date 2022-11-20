import PageTitle from "../components/shared/PageTitle";
import { faArrowUpShortWide, faUser, faArrowTrendUp, faArrowTrendDown, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import StatisticsDetailsCard from "../components/Dashboard/shared/StatisticsDetailsCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Area, AreaChart, CartesianGrid, Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export default function Home() {
  const data = [
    {
      "name": "Page A",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "Page C",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "Page D",
      "uv": 2780,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": "Page E",
      "uv": 1890,
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "Page F",
      "uv": 2390,
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    }
  ]
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
      <div className="m-5 grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="lg:col-span-8  grid grid-cols-1 lg:grid-cols-2 gap-5">
          {
            dashboardStatisticsDetails.map((item, index) => <StatisticsDetailsCard item={item} key={index} />)
          }
        </div>
        <div className="lg:col-span-4">
          <div className="p-6 rounded-lg relative" style={{ background: "linear-gradient(to left, #1e66ff, #2262d3)" }}>
            <div className='flex justify-between items-center'>
              <h3 className='text-xl'>Total Sales</h3>
              <div className="dropdown dropdown-bottom dropdown-end">

                <label tabIndex={0} className="p-1 cursor-pointer">
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-accent rounded-box w-52">
                  <li><a>Item 1</a></li>
                  <li><a>Item 2</a></li>
                </ul>
              </div>

            </div>
            <div className="flex items-center">
              <h3 className='text-3xl font-bold'>$3,787,681.00</h3>
              <div className="flex items-center text-info ml-3">
                <p>40.63%</p>
                <span className="ml-1">
                  <FontAwesomeIcon icon={faArrowTrendUp} />
                </span>
              </div>
            </div>
            <div>
              <ResponsiveContainer  width="100%" height={250}>
                <AreaChart data={data}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  {/* <XAxis dataKey="name" /> */}
                  {/* <YAxis /> */}
                  {/* <CartesianGrid strokeDasharray="3 3" /> */}
                  <Tooltip />
                  <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                  <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>


              </ResponsiveContainer>

            </div>


          </div>
        </div>

      </div>
    </div>
  )
}
