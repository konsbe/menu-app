export type TROUTE = {
  name: string;
  location: string;
  route: string;
  logo: string;
  position: {
    lat: number;
    lng: number;
  };
  image: string;
  telephone: string;
  title: string;
  description: string;
};

export const routes: TROUTE[] = [
  {
    name: "Chicken Fresh",
    location: "Laskareos 1, Ilioupoli 163 43",
    route: "ilioupoli",
    logo: "https://img.freepik.com/free-photo/flat-lay-thanksgiving-food-border-with-copy-space_23-2149114429.jpg?t=st=1716989521~exp=1716993121~hmac=a864fc9544ae68499d6aab48825c9e1fc41a5a75455b88d140faefc7d9db40dc&w=1380",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipO3hdIhOy-eb8J7ICJEQAmM8-LXmPNJ0acJmHps=s680-w680-h510",
    position: { lat: 37.93551079027595, lng: 23.759346488755593 },
    telephone: "+302102121210",
    title: "Chicken in Ilioupoli",
    description: "Fresh the fresh",
  },
  {
    name: "Chicken Fresh",
    logo: "https://img.freepik.com/free-photo/raw-chicken-legs-with-garlic-green-chili_114579-11843.jpg?t=st=1715726631~exp=1715730231~hmac=229597185bc6bc00f2cffd4a07762c8eaac97b459010d903454949ba22e59ad3&w=1380",
    location: "Nikiforidi 2, Vironas 162 31",
    route: "vuronas",
    position: { lat: 37.963451736468464, lng: 23.75155339016813 },
    image:
      "https://lh3.googleusercontent.com/p/AF1QipMmEdqWwLnRqVLp7SW-17aaWReX08nMx7CuIAjr=s680-w680-h510",
    telephone: "+302102121211",
    title: "Chicken Fresh in Vuronas",
    description: "Μαγειρευτά, της ώρας, κρεατικά, πιάτα ημέρας, σαλάτες και άλλα πολλά..",
  },
  {
    name: "Chicken Fresh",
    location: "Kassomouli 93, Athina 117 44",
    route: "pagrati",
    position: { lat: 37.95605685656015, lng: 23.73410484429234 },
    logo: "https://img.freepik.com/free-photo/flat-lay-thanksgiving-food-border-with-copy-space_23-2149114429.jpg?t=st=1716989521~exp=1716993121~hmac=a864fc9544ae68499d6aab48825c9e1fc41a5a75455b88d140faefc7d9db40dc&w=1380",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipMtDcwY163JlCbyK8HiQmlejkHPreJ2dFxIbk27=s680-w680-h510",
    telephone: "+302102121212",
    title: "Chicken Fresh",
    description: "Fresh the fresh",
  },
];
export enum MENUDEVESIONENUM {
  STARTERS = 'starters',
  SALADS = 'salads',
  MAIN = 'main',
  MEAT = 'meat',
  DAILY = 'daily',
  DRINKS = 'drinks'
}
export type TMENUITEM = {
  name: string;
  value: string;
};
export type TMENU = {
  [key in MENUDEVESIONENUM]: TMENUITEM[];
};

export const menu: TMENU = {
  starters: [
    { name: "potatos", value: "3" },
    { name: "tzatziki", value: "2.20" },
    { name: "pita", value: "0.40" },
    { name: "bread", value: "2" },
    { name: "", value: "" },
  ],
  salads: [
    { name: "greek", value: "5" },
    { name: "tomato", value: "4" },
    { name: "coccumber", value: "2" },
  ],
  main: [
    { name: "potatos", value: "3" },
    { name: "potatos", value: "3" },
    { name: "tzatziki", value: "2.20" },
    { name: "pita", value: "0.40" },
    { name: "bread", value: "2" },
  ],
  meat: [
    { name: "tzatziki", value: "2.20" },
    { name: "potatos", value: "3" },
    { name: "tzatziki", value: "2.20" },
    { name: "pita", value: "0.40" },
    { name: "bread", value: "2" },
  ],
  daily: [
    { name: "pita", value: "0.40" },
  ],
  drinks: [
    { name: "bread", value: "2" },
    { name: "potatos", value: "3" },
    { name: "tzatziki", value: "2.20" },
    { name: "pita", value: "0.40" },
    { name: "bread", value: "2" },
    { name: "potatos", value: "3" },
    { name: "tzatziki", value: "2.20" },
    { name: "pita", value: "0.40" },
    { name: "bread", value: "2" },
    { name: "potatos", value: "3" },
    { name: "tzatziki", value: "2.20" },
    { name: "pita", value: "0.40" },
    { name: "bread", value: "2" },
    { name: "potatos", value: "3" },
    { name: "tzatziki", value: "2.20" },
    { name: "pita", value: "0.40" },
    { name: "bread", value: "2" },
  ],
};