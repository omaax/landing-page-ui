"use client"

import { ArrowRightLeft, Expand, Landmark } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
export const description = "A simple area chart"
const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
]
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig


const ThirdSection = () => {
  return (
    <div className="mt-120 mx-50">
      <div className='flex flex-col items-center justify-center'>
        <p className='text-cyan-600 text-sm'>WHY US</p>
        <h1 className="text-4xl">Why they prefer Finpay</h1>
      </div>
      {/* GRID */}
      <div className='grid grid-cols-2 mt-15 gap-10'>
        <div className="bg-custom-blue p-15 rounded-3xl">
            <h1 className="text-8xl font-semibold text-cyan-600">3K+</h1>
            <h1 className="text-2xl font-bold pt-15">Businesses already running <br/> on Finpay</h1>
        </div>
        <div className="bg-custom-blue p-15 rounded-3xl">
            <h1 className="text-2xl font-semibold">Instant Withdraw your funds<br/> at any time</h1>
            <div className="flex flex-row gap-10 mt-4">
              <Landmark size={90}/>
              <ArrowRightLeft className="text-gray-300 " size={90 } strokeWidth={0.5} />
              <Expand size={90} />
            </div>
        </div>
        <div className="bg-custom-blue px-13 pt-10 rounded-3xl col-span-full flex flex-row gap-30">
            <div className="py-10">
                <h1 className="text-3xl font-semibold">No asset volatility</h1>
                <p className="text-gray-500 mt-5">Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
            </div>
            {/*            
            <div className="bg-white w-100 h-50 ml-20 rounded-xl p-5">
                <p></p>
                <h1 className="text-2xl font-bold"></h1>
            </div> */}
            <div className="border-none w-[900px] h-[360px] bg-white rounded-t-2xl pt-5">
                <CardHeader>
                  <CardTitle>Summary</CardTitle>
                  <CardDescription className="text-4xl font-semibold">
                    $1,876,123
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer className="h-[300px] w-[600px]" config={chartConfig}>
                    <AreaChart
                      accessibilityLayer
                      data={chartData}
                      margin={{
                        top: 10,
                        left: 12,
                        right:10,
                        bottom: 20,
                      }}
                    >
                      {/* <CartesianGrid vertical={false} /> */}
                        <defs>
                          <linearGradient id="fadeGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#2A8E9E" stopOpacity={0.8} />
                            <stop offset="100%" stopColor="#ffffff" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                      <XAxis
                        dataKey="month"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        tickFormatter={(value) => value.slice(0, 3)}
                      />
                      <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent indicator="line" />}
                      />
                      <Area
                        dataKey="desktop"
                        type="natural"
                        fill="url(#fadeGradient)"
                        fillOpacity={0.4}
                        stroke="var(--color-custom-navy-blue)"
                      />
                    </AreaChart>
                  </ChartContainer>
                </CardContent>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ThirdSection
