import japanImage from "./Images/japan-image.jpg";
import australiaImage from "./Images/australia-image.jpg";
import norwayImage from "./Images/norway-image.jpg";

const data = [
    {
        id: 1,
        img: japanImage,
        country: "JAPAN",
        scenery: "Mount Fuji",
        startDate: "12 Jan, 2021",
        endDate: "24 Jan, 2021",
        description: `Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). 
                        Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.`
    },
    {
        id: 2,
        img: australiaImage,
        country: "AUSTRALIA",
        scenery: "Sydney Opera House",
        startDate: "27 May, 2021",
        endDate: "8 Jun, 2021",
        description: `The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the 
                        Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings`
    }
    ,
    {
        id: 3,
        img: norwayImage,
        country: "NORWAY",
        scenery: "Geirangerfjord",
        startDate: "01 Oct, 2021",
        endDate: "18 Nov, 2021",
        description: `The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located
                         entirely in the Stranda Municipality.`
    }
];

export default data;