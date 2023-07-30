import faker from "faker";

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const xscale = [
  '1D',
  '5D',
  '1M',
  '3M',
  '6M',
  '1Y',
  '2Y',
  '5Y'
];

const data = {
  labels: labels,
  datasets: [
    {
      label: 'Price',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'red',
    },
    {
      label: 'Sentiment',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'orange',
    },
  ],
};

export default data;
