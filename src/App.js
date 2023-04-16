import Chart from "react-apexcharts";
import { useState,useEffect } from "react";
import moment from 'moment';

// Example 1

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* Example for Bar Chart(bar) and Area(area), radar chart(radar), line Chart(line) only change type in the chart to any of the texts in parentethis like bar,area,line etc */}

        <Chart
          type="bar"
          width={600}
          height={600}
          series={[
            {
              name: "Company1",
              data: [100, 200, 232, 132, 422, 132],
              color: "#0d25d6",
            },
            {
              name: "Company2",
              data: [150, 20, 332, 110, 209, 132],
              color: "#ff0000",
            },
            {
              name: "Company3",
              data: [50, 300, 22, 152, 402, 32],
              color: "#dd0",
            },
            {
              name: "Company4",
              data: [590, 670, 32, 10, 29, 12],
              color: "#ff00a0",
            },
          ]}
          options={{
            // colors:['#ff0000', '#f0f'],
            theme: {
              mode: "dark",
            },
            chart: {
              stacked: true,
              background:'#00f8'
            },
            plotOptions:{
             bar:{
              borderRadius:10,
              columnWidth:60,
//             horizontal:true,
              dataLabels:{
                orientation:'vertical'
              }
             }
            },
            noData:{
             text:"Empty Chart!",
             style:{
              fontSize:30,
              color:'#f00'
             }
            },
            tooltip: {
              followCursor: true,
            },
            dataLabels: {
              formatter: (val) => {
                return `$${val}`;
              },
              style: {
                colors: ["#f00", "#fff"],
                fontSize: 16,
              },
            },
            xaxis: {
              tickPlacement: "on",
              categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
              title: {
                text: "Months",
                style: {
                  color: "#0f0",
                },
              },
            },
            yaxis: {
              labels: {
                formatter: (val) => {
                  return `$${val}`;
                },
                style: {
                  colors: ["#ff0"],
                },
              },
              title: {
                text: "Amount",
                style: {
                  color: "#0f0",
                },
              },
            },
            legend: {
              show: true,
              position: "right",
            },
            title: {
              text: "Bar Chart",
              style: {
                fontSize: 30,
              },
            },
            subtitle: {
              text: "This chart shows datas of company by month",
              style: {
                color: "#f0f",
              },
            },
            grid: {
              borderColor: "#f00",
            },
          }}
        ></Chart>

{/* Example for Pie Chart(pie) , Donut(donut) */}
     <Chart
       type="donut"
       width={600}
       height={600}
       series={[100, 200, 232, 132, 422, 132]}
       options={{ 
        labels:["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        tooltip:{
          y:{
            formatter:(val)=>{
              return `$${val}`
            }
          }
        },
        title:{
          text:'Pie Chart'
        },
        colors:['#000', '#f00', '#f0d', '#0f0', '#0ad', '#00d']
        }}
       >

       </Chart>
      </header>
    </div>
  );
}

// Example 2
//  function App() {
//   const [chartDate] = useState({
//     options: {
//       xaxis: {
//         categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
//         axisBorder: { show: true },
//         axisTicks: { show: false },
//         labels: { show: true }
//       },
//       yaxis: { show: false },
//       grid: { show: false },
//       chart: {
//         sparkline: {
//           enabled: false
//         },
//         toolbar: {
//           show: false
//         }
//       }
//     },
//     series: [
//       {
//         name: "series-1",
//         data: [30, 40, 45, 50, 49, 60, 70, 91]
//       }
//     ]
//   })

//   return (
//     <div>
//       <Chart
//         options={chartDate.options}
//         series={chartDate.series}
//         type="bar"
//         width="500"
//       />
//       <Chart
//         options={{
//           labels: ["A", "B", "C", "D", "E"],
//           chart: { sparkline: { enabled: true } }
//         }}
//         series={[44, 55, 41, 17, 15]}
//         type="donut"
//         width="380"
//       />
//     </div>
//   )
//}


// Example 3

// function App() {
//   const [data, setBidData] = useState();

//   const sendRandomData = async () => {
//     const currentDate = new Date();
//     const randNumber = Math.floor(Math.random() * 100);
//     const showDate = moment(currentDate).format('HH:mm:ss');
//     const doc = {
//         time: showDate,
//         bid: randNumber,
//     }
//     await fetch('http://localhost:7000/data', {
//         method: 'POST',
//         body: JSON.stringify(doc),
//         headers: { 'Content-Type': 'application/json' }
//     })
// }



//  // Fetch data from the fake API
//     const fetchFici = async () => {
//         const response = await fetch('http://localhost:7000/data')
//         console.log(response);
//         response.json().then(data => {
//             setBidData(data)
//         })
//     }

//     // Call the fetchFici function every 2 seconds
//     useEffect(() => {
//         const timer = setInterval(() => {
//             fetchFici()
//         }, 2000);
//         return () => { clearInterval(timer) }
//     }, [])


//     useEffect(() => {
//       const timer2 = setInterval(() => { sendRandomData() }, 4000);
//       return () => { clearInterval(timer2) }
//   }, [])

//   return (
//     <Chart
//         type="area"
//         height={300}
//         width='100%'
//         series={[
//             {
//                 name: "Commits",
//                 //  Here is where we are passing the data fetched from our JSON API
//                 data: data?.map(data => data.bid)
//             }
//         ]}

//         options={{
//             chart: {
//                 toolbar: {
//                     show: false
//                 },

//             },
//             colors: ['#f90000'],
//             stroke: { width: 1, curve: 'smooth' },
//             dataLabels: { enabled: false },
//             xaxis: {

//                 categories: data?.map(data => data.time), // Here is where we are passing the data fetched from our JSON API

//             },
//             yaxis: {
//                 show: false,
//             }
//         }}
//     />
// )
// }

// Example 4 
// function App(){
//   const [averageTemp, setAverageTemp] = useState([]);
//   const [date, setDate] = useState([]);

//   useEffect(() => {
//     const getData = async () => {
//     const url = 'http://localhost:7000/temperature';
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       console.log(data);
//       setAverageTemp(data?.map((item) => item.average_temp));
//       setDate(data?.map((item) => item.date));
//     } catch (error) {
//         console.log(error);
//     }
//   };
//     getData();
//   }, []);

//  const series = [ //data on the y-axis
//     {
//       name: "Temperature in Celsius",
//       data: averageTemp
//     }
//   ];
//   const options = { //data on the x-axis
//   chart: { id: 'bar-chart'},
//   xaxis: {
//     categories: date
//   }
// }

// return (
//   <div>
//     <Chart
//       options={options}
//       series={series}
//       type="bar"
//       width="450"
//     />
//     <Chart
//       options={options}
//       series={series}
//       type="line"
//       width="450"
//     />
//   </div>
// )
// }
export default App;
