import Doughnut from '../components/dashboard/charts/Doughnut';
import Scatter from '../components/dashboard/charts/Scatter'
import LineChart from '../components/dashboard/charts/MultiAxis'
import Bar from '../components/dashboard/charts/Bar'
import Map from '../components/dashboard/Map'
import CardOverview from "../components/dashboard/OverviewCard"
// import { BsBusFront } from 'react-icons/bs'
// import { FaUsers } from 'react-icons/fa'
// import { MdAttachMoney } from 'react-icons/md'
// import { TbBusStop } from 'react-icons/tb'
// import { BsBusFront } from 'react-icons/bs'
// import { FaUsers } from 'react-icons/fa'
// import { MdAttachMoney } from 'react-icons/md'
// import { TbBusStop } from 'react-icons/tb'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"

export const Dashboard = () => {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col w-full h-full gap-y-4">
        <h1 className="font-bold text-4xl">Dashboard</h1>
        <Tabs defaultValue="overview" >
          <TabsList className="grid grid-cols-2 w-1/5 mb-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="Analytics">Analytics</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="w-full h-full flex flex-col space-y-5" >
            <div className="w-full h-[700px]">
              <Map />
            </div>
            <div className="flex flex-row w-full h-full space-x-4">
              <CardOverview title='Buses' value={45} description="Total number of buses in service"  />
              <CardOverview title='Active' value={34} description="Total number of buses active now"  />
              <CardOverview title='Not Active' value={34} description="Total in-active buses"  />
              <CardOverview title='Total Stops' value={34} description="Total number of stops in the city"  />
              <CardOverview title='Total Drivers' value={34} description="Total number of workforce"  />
              {/* <CardOverview title='Buses' value={45} description="Total number of buses in service" Icon={<BsBusFront />} />
              <CardOverview title='Active' value={34} description="Total number of buses active now" Icon={<BsBusFront />} />
              <CardOverview title='Not Active' value={34} description="Total in-active buses" Icon={<BsBusFront />} />
              <CardOverview title='Total Stops' value={34} description="Total number of stops in the city" Icon={<TbBusStop />} />
              <CardOverview title='Total Drivers' value={34} description="Total number of workforce" Icon={<FaUsers />} /> */}
            </div>
          </TabsContent>
          <TabsContent value="Analytics" className="w-full h-full flex flex-col space-y-5">
            <div className="space-y-10 mb-10">
              <div className="flex flex-row gap-x-10">
                <div className=" w-37 h-72">
                  <Doughnut active={54} inactive={34} />
                </div>
                <Scatter />
                <div className="flex flex-wrap space-y-2">
                  <CardOverview title='Fleet Event' value='122022' description="Total number of fleet of action in server"  />
                  <CardOverview title='Total driving' value="2553510 Km" description="Total driving of all the fleets"  />
                  <CardOverview title='Maintance Charge' value="60000 $" description="Total Money spend on maintance "  />
                  {/* <CardOverview title='Fleet Event' value='122022' description="Total number of fleet of action in server" Icon={<BsBusFront />} />
                  <CardOverview title='Total driving' value="2553510 Km" description="Total driving of all the fleets" Icon={<BsBusFront />} />
                  <CardOverview title='Maintance Charge' value="60000 $" description="Total Money spend on maintance " Icon={<MdAttachMoney />} /> */}
                </div>
              </div>
              <div className="flex flex-row gap-x-10">
                <LineChart />
                <Bar />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
