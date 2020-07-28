import rain from "assets/images/rain.jpg";
import sunny from "assets/images/sunny.jpeg";
import snowy from "assets/images/snowy.jpg";
import foggy from "assets/images/foggy.jpg";

const types = [
  {
    icon: "fas fa-cloud-showers-heavy",
    codes: [5, 6, 10, 12, 35, 40],
    background: rain,
  },
  { icon: "fas fa-cloud-sun", codes: [26, 27, 28, 29, 30], background: foggy },
  {
    icon: "fas fa-sun",
    codes: [
      32,
      36,
      0,
      1,
      2,
      3,
      4,
      7,
      8,
      9,
      11,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      31,
      33,
      34,
      37,
      38,
      39,
      41,
      42,
      43,
      44,
      45,
      46,
      47,
    ],
    background: sunny,
  },
  { icon: "fas fa-icicles", codes: [25], background: snowy },
];

export default types;
