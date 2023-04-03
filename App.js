                                //parcel
//created a server
// HMR:hot module replacement concept means all the updates get tracked by the parcel by using file watcher algorithm it was written in c++  ,parcel bundles everthing ,it minifies the files,
//it cleans the code and removes all console.log
//parcel manages dev and production build
//it is superefast ,build algorithm
//it does image optimiazation
//caching while development 
//compression
//it takes care about older version browsers (compatible with oldere version)
//it adds polyfills(allows to use features that are not supported by browsers)
//we can build in https as well currently we use http localhost
//parcel uses space (i.e parcel cache)
//parcel manages port no as well
//it uses consistent hashing algorithm(to cache things up)
//it is a zero config 
//transitive dependicies
//tree shaking -Removing unwanted code(like when we are doing production we will installing some library which consist of lots of features but we need only few of them i.e tree shaking)







//creating a layout plan...
                //creating a layout..
                // const Applayout=()=>{
                //         return (
                //                 {/**
                //                 Header
                //                         --Logo
                //                         --Menu List
                //                         --Nav Items(Right Side)
                //                         --Cart(for looking quantity)
                
                  //                 Body
                        //                 --search bar
                        //                 --Restaurent List
                        //                        --Restaurent card(many cards)
                        //                                 --image
                        //                                 --Name
                        //                                 --Rating
                        //                                 --Cusines
                //                 Footer
                //                         --links
                //                         --Copyrights
                //                 */
                //                 }
                //         )
                // }
                
       
                




import React from "react";
import ReactDOM from "react-dom/client";
import FoodFireLogo from "./Images/Food Fire Log.png";
//React.createElement==>Object ==> HTML(DOM)(this html is rendered by dom)

// creating a simple heading using react using createElement()it means creating an element here h1 is an element takes 3 arguments i.e(1st tag,2nd object(what ever id u give that will be fetched and performs ), 3rd what u want to put into the tag..)tagname,code ,childrend

        console.log(heading);

        // <h1 id="title">heading1</h1> this code and above code is exactly similar but it is in html and above is in react,here heading is an react element

        const heading =React.createElement(
        "h1", //this h1 tag is an react element   
        {
        id:"title",
        key:"h2",
                //note:here in this object we can give classname,style and manymore
        },
        "Namaste React"
        );
                                



                        //jsx?? concept
//this portion of code is know as jsx,instead of writing all the above stuff we can write like this as below mentioned,here also we can give id and key too as we gave above,below one is known as jsx expression
const heading2= <h1 id="title" key="h2">Namaste React</h1>; //this is for single line no need of paranthesis

//this is for multiple(if u want) for this we need to a paranthesis
const heading3=(
<h1 id="title" key="h2">Namaste React</h1>
);






                        //REACT COMPONENT :concept.....
//-FUNCTIONAL COMPONENT-NEW way of writing code(it is nothing but a function)
//-COMPONENT BASED COMPONENT


//functional component :it is a js function that returns a some peice of jsx or a react element

const HeaderComponent = () =>{
        // Note:if we  write in a single line no need of paranthesis but for multiple it is required
        // return <div><h1>Namaste React functional component CONFIG DRIVEN UI:
        //  guys</h2></div>;

        //for multiple lines  we need to give a paranthesis 
        return( 

        <div>
                {/* we can get our react element(i.e jsx inside a react component as well just by giving a {its react element name}) as gave below even that get printed on browser,for react element like this flower braces for a functional component simply use 
                 </> or like this {that component name with paranthesis()} */}

{/* {} note:inside this flower braces we can write anything any string or any js code it works in browser */}

        {heading}
        <h1>Namaste React functional component </h1>
        <h2>hello guys this is h2 tag</h2>
        </div>
        )


};

//even we can write without using a return also both are same,here we are using a arrow function
const HeaderComponent2 = ()=>(

         <div>
        <h1>Namaste React functional component </h1>
      
        </div>
        );

//using a normal function also we can write 
        const HeaderComponent3 =function (){
                return(

                <div>
                        {/* this calling a component inside a component is called as component composition as we called below a functional component inside a functional component */}
                        
                        <HeaderComponent2/> 
               <h1>Namaste React functional component </h1>
               <h2>hello guys this is h2 tag</h2>
               </div>
                );       
        };

       
                                //HEADER

        //creating an header part for our food app(i.e Food Villa)

const Title =() =>(

        // just giving an anchor tag to go to home page when we click on image the page get loaded once..since the anchor tag is in btw img,and we gave / slash means go to home
        <a href="/">
        <img className="logo" alt="Food Fire Logo" src={FoodFireLogo} />
        </a>
);

                                // Composing Components
const Header =()=>{
        return(
                <div className="header">
                     {Title()} 
{/* like above also we can call or <Title/> like this as our jsx(React element)  */}
                      <div className="nav-items">
                        <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact</li>
                                <li><i class="fa-solid fa-cart-shopping"></i></li>
                        </ul>
                      </div>
                </div>
       );
};
//restaurent card is an functional component which return jsx


                        // CASE 1 :HARD CODED:
//this is the normal way (i.e hard coded way )
// const RestaurentCard = () =>{

//         return(
//                 <div className="card">
//                         {/* image */}
//                         <img src="https://www.seriouseats.com/thmb/FMQ6f39arIo5GM5HKZ9J1hXSKe4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/20210607-JUICYBROILEDBURGERS-JANJIGIAN-seriouseats-4-7883fb226a0c49e98aa0df4c31ca7ee1.jpg"/>
//                         {/* Name of the restaurent also */}
//                         <h2>Burger King</h2>
//                         <h3>Burgers, Americans</h3>
//                         <h4>4.2 stars</h4>
//                 </div>
//         )

// }









   







                        //DOING ABOVE THING data IN A DYNAMIC WAY...so that we can get it used for multiple times.


// it is array of objects and one of the object is burgerking similarly there would be other objects as well
// const restaurentList =[{
//         name:"Burger King",
//         image:"https://www.seriouseats.com/thmb/FMQ6f39arIo5GM5HKZ9J1hXSKe4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/20210607-JUICYBROILEDBURGERS-JANJIGIAN-seriouseats-4-7883fb226a0c49e98aa0df4c31ca7ee1.jpg",
//         cusines:["Burger","American"], //as it was an array we wont get , in our code so inorder to get it use .join(",")
//         rating:"4.2"
// }];






                     //CONFIG DRIVEN UI:


// RestaurantList is JSON Data for displaying cards
// this is our restaurent data
const restaurantList = [
        {
          type: "restaurant",
          data: {
            type: "F",
            id: "74453",
            name: "Domino's Pizza",
            uuid: "87727dbd-7f2b-4857-9763-359624165845",
            city: "21",
            area: "Athwa",
            totalRatingsString: "1000+ ratings",
            cloudinaryImageId: "bz9zkh2aqywjhpankb07",
            cuisines: ["Pizzas"],
            tags: [],
            costForTwo: 40000,
            costForTwoString: "₹400 FOR TWO",
            deliveryTime: 45,
            minDeliveryTime: 45,
            maxDeliveryTime: 45,
            slaString: "45 MINS",
            lastMileTravel: 0,
            slugs: {
              restaurant: "dominos-pizza-majura-nondh-test_surat",
              city: "surat",
            },
            cityState: "21",
            address:
              "Shop 32 To 35, Sheetal Shopping Square,Near Lb Turning Point, Bhatar Road,MAJURA NONDH, Surat,GUJARAT-395001",
            locality: "Bhatar Road",
            parentId: 2456,
            unserviceable: false,
            veg: true,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
              header: "FREE DELIVERY",
              shortDescriptionList: [
                {
                  meta: "FREE DELIVERY",
                  discountType: "FREE_DELIVERY",
                  operationType: "RESTAURANT",
                },
              ],
              descriptionList: [
                {
                  meta: "FREE DELIVERY",
                  discountType: "FREE_DELIVERY",
                  operationType: "RESTAURANT",
                },
              ],
              subHeader: "",
              headerType: 0,
              superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
              header: "",
              shortDescriptionList: [
                {
                  meta: "Free Delivery",
                  discountType: "FREE_DELIVERY",
                  operationType: "RESTAURANT",
                },
              ],
              descriptionList: [
                {
                  meta: "FREE DELIVERY",
                  discountType: "FREE_DELIVERY",
                  operationType: "RESTAURANT",
                },
              ],
              subHeader: "",
              headerType: 0,
              superFreedel: "",
            },
            chain: [],
            feeDetails: {
              fees: [],
              totalFees: 0,
              message: "",
              title: "",
              amount: "",
              icon: "",
            },
            availability: {
              opened: true,
              nextOpenMessage: "",
              nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
              imageBased: [],
              textBased: [],
              textExtendedBadges: [],
            },
            lastMileTravelString: "2.1 kms",
            hasSurge: false,
            sla: {
              restaurantId: "74453",
              deliveryTime: 45,
              minDeliveryTime: 45,
              maxDeliveryTime: 45,
              lastMileTravel: 0,
              lastMileDistance: 0,
              serviceability: "SERVICEABLE",
              rainMode: "NONE",
              longDistance: "NOT_LONG_DISTANCE",
              preferentialService: false,
              iconType: "EMPTY",
            },
            promoted: false,
            avgRating: "4.0",
            totalRatings: 1000,
            new: false,
          },
          subtype: "basic",
        },
        {
          type: "restaurant",
          data: {
            type: "F",
            id: "410476",
            name: "The Brooklyn Creamery - Healthy Ice Cream",
            uuid: "82e23b48-b6bd-4ee0-9746-06737ec062b0",
            city: "21",
            area: "althan bhatar",
            totalRatingsString: "100+ ratings",
            cloudinaryImageId: "ldtibwymvzehvmdwl8la",
            cuisines: ["Desserts", "Ice Cream", "Healthy Food"],
            tags: [],
            costForTwo: 20000,
            costForTwoString: "₹200 FOR TWO",
            deliveryTime: 31,
            minDeliveryTime: 30,
            maxDeliveryTime: 40,
            slaString: "30-40 MINS",
            lastMileTravel: 6.300000190734863,
            slugs: {
              restaurant: "the-brooklyn-creamery-low-cal-ice-cream-adajan-fc-adajan",
              city: "surat",
            },
            cityState: "21",
            address:
              "C paiki, Chalta no. 23, Guru Ashish Building, Ground Floor, Opp Kotyark Nagar, Rander Road, Surat 395005",
            locality: "Adajan FC",
            parentId: 236673,
            unserviceable: true,
            veg: true,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
              header: "FREE DELIVERY",
              shortDescriptionList: [
                {
                  meta: "FREE DELIVERY",
                  discountType: "FREE_DELIVERY",
                  operationType: "RESTAURANT",
                },
              ],
              descriptionList: [
                {
                  meta: "FREE DELIVERY",
                  discountType: "FREE_DELIVERY",
                  operationType: "RESTAURANT",
                },
              ],
              subHeader: "",
              headerType: 0,
              superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
              header: "",
              shortDescriptionList: [
                {
                  meta: "Free Delivery",
                  discountType: "FREE_DELIVERY",
                  operationType: "RESTAURANT",
                },
              ],
              descriptionList: [
                {
                  meta: "FREE DELIVERY",
                  discountType: "FREE_DELIVERY",
                  operationType: "RESTAURANT",
                },
              ],
              subHeader: "",
              headerType: 0,
              superFreedel: "",
            },
            chain: [],
            feeDetails: {
              fees: [],
              totalFees: 0,
              message: "",
              title: "",
              amount: "",
              icon: "",
            },
            availability: {
              opened: true,
              nextOpenMessage: "",
              nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
              imageBased: [],
              textBased: [],
              textExtendedBadges: [],
            },
            lastMileTravelString: "6.3 kms",
            hasSurge: false,
            sla: {
              restaurantId: "410476",
              deliveryTime: 31,
              minDeliveryTime: 30,
              maxDeliveryTime: 40,
              lastMileTravel: 6.300000190734863,
              lastMileDistance: 0,
              serviceability: "SERVICEABLE_WITH_BANNER",
              rainMode: "NONE",
              longDistance: "NOT_LONG_DISTANCE",
              preferentialService: false,
              iconType: "EMPTY",
            },
            promoted: false,
            avgRating: "4.4",
            totalRatings: 100,
            new: false,
          },
          subtype: "basic",
        },
        {
          type: "restaurant",
          data: {
            type: "F",
            id: "81094",
            name: "Richie Rich Juices & Shakes",
            uuid: "40b0b55b-e9af-43e7-aeae-be1b012d0b1d",
            city: "21",
            area: "Athwa",
            totalRatingsString: "500+ ratings",
            cloudinaryImageId: "nyp7yrzwc1dc2xqfkydk",
            cuisines: ["Ice Cream"],
            tags: [],
            costForTwo: 25000,
            costForTwoString: "₹250 FOR TWO",
            deliveryTime: 30,
            minDeliveryTime: 30,
            maxDeliveryTime: 40,
            slaString: "30-40 MINS",
            lastMileTravel: 5.599999904632568,
            slugs: {
              restaurant: "juices-shakes-by-richie-rich-athwa-athwa",
              city: "surat",
            },
            cityState: "21",
            address:
              "Richie Rich Building , Opposite Golden Square Complex, Parle Point, Athwa, Surat",
            locality: "Parle Point",
            parentId: 771,
            unserviceable: true,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
              header: "FREE DELIVERY",
              shortDescriptionList: [
                {
                  meta: "FREE DELIVERY",
                  discountType: "FREE_DELIVERY",
                  operationType: "RESTAURANT",
                },
              ],
              descriptionList: [
                {
                  meta: "FREE DELIVERY",
                  discountType: "FREE_DELIVERY",
                  operationType: "RESTAURANT",
                },
              ],
              subHeader: "",
              headerType: 0,
              superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
              header: "",
              shortDescriptionList: [
                {
                  meta: "Free Delivery",
                  discountType: "FREE_DELIVERY",
                  operationType: "RESTAURANT",
                },
              ],
              descriptionList: [
                {
                  meta: "FREE DELIVERY",
                  discountType: "FREE_DELIVERY",
                  operationType: "RESTAURANT",
                },
              ],
              subHeader: "",
              headerType: 0,
              superFreedel: "",
            },
            chain: [],
            feeDetails: {
              fees: [],
              totalFees: 0,
              message: "",
              title: "",
              amount: "",
              icon: "",
            },
            availability: {
              opened: true,
              nextOpenMessage: "",
              nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
              imageBased: [],
              textBased: [],
              textExtendedBadges: [],
            },
            lastMileTravelString: "5.5 kms",
            hasSurge: false,
            sla: {
              restaurantId: "81094",
              deliveryTime: 30,
              minDeliveryTime: 30,
              maxDeliveryTime: 40,
              lastMileTravel: 5.599999904632568,
              lastMileDistance: 0,
              serviceability: "SERVICEABLE_WITH_BANNER",
              rainMode: "NONE",
              longDistance: "NOT_LONG_DISTANCE",
              preferentialService: false,
              iconType: "EMPTY",
            },
            promoted: false,
            avgRating: "3.9",
            totalRatings: 500,
            new: false,
          },
          subtype: "basic",
        },
        {
          type: "restaurant",
          data: {
            type: "F",
            id: "311443",
            name: "Siddhi Icecream & Thick Shake",
            uuid: "1ca3e8c2-e5da-4b59-8f7e-868991cb40b7",
            city: "21",
            area: "Nanpura",
            totalRatingsString: "100+ ratings",
            cloudinaryImageId: "spd3y5gok3vvwqulgmda",
            cuisines: ["Ice Cream", "Juices", "Desserts", "Beverages"],
            tags: [],
            costForTwo: 20000,
            costForTwoString: "₹200 FOR TWO",
            deliveryTime: 30,
            minDeliveryTime: 25,
            maxDeliveryTime: 35,
            slaString: "25-35 MINS",
            lastMileTravel: 3,
            slugs: {
              restaurant: "siddhi-icecream-athwa-athwa",
              city: "surat",
            },
            cityState: "21",
            address:
              "siddhi icecream, Kadampally Society, Timaliawad, Nanpura, Surat, Gujarat, India",
            locality: "Athwa",
            parentId: 387846,
            unserviceable: true,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
              header: "FREE DELIVERY",
              shortDescriptionList: [
                {
                  meta: "FREE DELIVERY",
                  discountType: "FREE_DELIVERY",
                  operationType: "RESTAURANT",
                },
              ],
              descriptionList: [
                {
                  meta: "FREE DELIVERY",
                  discountType: "FREE_DELIVERY",
                  operationType: "RESTAURANT",
                },
              ],
              subHeader: "",
              headerType: 0,
              superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
              header: "",
              shortDescriptionList: [
                {
                  meta: "Free Delivery",
                  discountType: "FREE_DELIVERY",
                  operationType: "RESTAURANT",
                },
              ],
              descriptionList: [
                {
                  meta: "FREE DELIVERY",
                  discountType: "FREE_DELIVERY",
                  operationType: "RESTAURANT",
                },
              ],
              subHeader: "",
              headerType: 0,
              superFreedel: "",
            },
            chain: [],
            feeDetails: {
              fees: [],
              totalFees: 0,
              message: "",
              title: "",
              amount: "",
              icon: "",
            },
            availability: {
              opened: true,
              nextOpenMessage: "",
              nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
              imageBased: [],
              textBased: [],
              textExtendedBadges: [],
            },
            lastMileTravelString: "3 kms",
            hasSurge: false,
            sla: {
              restaurantId: "311443",
              deliveryTime: 30,
              minDeliveryTime: 25,
              maxDeliveryTime: 35,
              lastMileTravel: 3,
              lastMileDistance: 0,
              serviceability: "SERVICEABLE_WITH_BANNER",
              rainMode: "NONE",
              longDistance: "NOT_LONG_DISTANCE",
              preferentialService: false,
              iconType: "EMPTY",
            },
            promoted: false,
            avgRating: "4.5",
            totalRatings: 100,
            new: false,
          },
          subtype: "basic",
        },
        {
          type: "restaurant",
          data: {
            type: "F",
            id: "307070",
            name: "Pizza Pie",
            uuid: "68598bcb-7460-4466-a8b2-113158c6cf8c",
            city: "21",
            area: "Nanpura",
            totalRatingsString: "50+ ratings",
            cloudinaryImageId: "bvr70adr30ejyr5ua79k",
            cuisines: ["Pizzas"],
            tags: [],
            costForTwo: 30000,
            costForTwoString: "₹300 FOR TWO",
            deliveryTime: 37,
            minDeliveryTime: 35,
            maxDeliveryTime: 45,
            slaString: "35-45 MINS",
            lastMileTravel: 4,
            slugs: {
              restaurant: "pizza-pie-athwa-athwa",
              city: "surat",
            },
            cityState: "21",
            address:
              "1/704 Sarang building, Nanpura New Rd, opposite river palace, near Ramji Mandir, Nanpura, Surat, Gujarat",
            locality: "Nanpura",
            parentId: 158854,
            unserviceable: true,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
              header: "FREE DELIVERY",
              shortDescriptionList: [
                {
                  meta: "FREE DELIVERY",
                  discountType: "FREE_DELIVERY",
                  operationType: "RESTAURANT",
                },
              ],
              descriptionList: [
                {
                  meta: "FREE DELIVERY",
                  discountType: "FREE_DELIVERY",
                  operationType: "RESTAURANT",
                },
              ],
              subHeader: "",
              headerType: 0,
              superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
              header: "",
              shortDescriptionList: [
                {
                  meta: "Free Delivery",
                  discountType: "FREE_DELIVERY",
                  operationType: "RESTAURANT",
                },
              ],
              descriptionList: [
                {
                  meta: "FREE DELIVERY",
                  discountType: "FREE_DELIVERY",
                  operationType: "RESTAURANT",
                },
              ],
              subHeader: "",
              headerType: 0,
              superFreedel: "",
            },
            chain: [],
            feeDetails: {
              fees: [],
              totalFees: 0,
              message: "",
              title: "",
              amount: "",
              icon: "",
            },
            availability: {
              opened: true,
              nextOpenMessage: "",
              nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
              imageBased: [],
              textBased: [],
              textExtendedBadges: [],
            },
            lastMileTravelString: "4 kms",
            hasSurge: false,
            sla: {
              restaurantId: "307070",
              deliveryTime: 37,
              minDeliveryTime: 35,
              maxDeliveryTime: 45,
              lastMileTravel: 4,
              lastMileDistance: 0,
              serviceability: "SERVICEABLE_WITH_BANNER",
              rainMode: "NONE",
              longDistance: "NOT_LONG_DISTANCE",
              preferentialService: false,
              iconType: "EMPTY",
            },
            promoted: false,
            avgRating: "4.2",
            totalRatings: 50,
            new: false,
          },
          subtype: "basic",
        },
        {
          type: "restaurant",
          data: {
            type: "F",
            id: "76858",
            name: "Feeling Hungry",
            uuid: "45f9ea54-f3cf-4f6b-8d85-e3468657fe51",
            city: "21",
            area: "Athwa",
            totalRatingsString: "1000+ ratings",
            cloudinaryImageId: "oxsb5mr1xsmhnxhunjsc",
            cuisines: ["Chinese", "North Indian", "Biryani"],
            tags: [],
            costForTwo: 2000,
            costForTwoString: "₹20 FOR TWO",
            deliveryTime: 35,
            minDeliveryTime: 30,
            maxDeliveryTime: 40,
            slaString: "30-40 MINS",
            lastMileTravel: 3.700000047683716,
            slugs: {
              restaurant: "feeling-hungry-adajan-gam-adajan",
              city: "surat",
            },
            cityState: "21",
            address:
              "GF shop no 1, Babubhai Chambers, Beside Sardar Bridge , Athwagate, surat",
            locality: "Royal Residency, Adajan Gam",
            parentId: 79237,
            unserviceable: true,
            veg: true,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
              header: "FREE DELIVERY",
              shortDescriptionList: [
                {
                  meta: "FREE DELIVERY",
                  discountType: "FREE_DELIVERY",
                  operationType: "RESTAURANT",
                },
              ],
              descriptionList: [
                {
                  meta: "FREE DELIVERY",
                  discountType: "FREE_DELIVERY",
                  operationType: "RESTAURANT",
                },
              ],
              subHeader: "",
              headerType: 0,
              superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
              header: "",
              shortDescriptionList: [
                {
                  meta: "Free Delivery",
                  discountType: "FREE_DELIVERY",
                  operationType: "RESTAURANT",
                },
              ],
              descriptionList: [
                {
                  meta: "FREE DELIVERY",
                  discountType: "FREE_DELIVERY",
                  operationType: "RESTAURANT",
                },
              ],
              subHeader: "",
              headerType: 0,
              superFreedel: "",
            },
            chain: [],
            feeDetails: {
              fees: [],
              totalFees: 0,
              message: "",
              title: "",
              amount: "",
              icon: "",
            },
            availability: {
              opened: true,
              nextOpenMessage: "",
              nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
              imageBased: [],
              textBased: [],
              textExtendedBadges: [],
            },
            lastMileTravelString: "3.7 kms",
            hasSurge: false,
            sla: {
              restaurantId: "76858",
              deliveryTime: 35,
              minDeliveryTime: 30,
              maxDeliveryTime: 40,
              lastMileTravel: 3.700000047683716,
              lastMileDistance: 0,
              serviceability: "SERVICEABLE_WITH_BANNER",
              rainMode: "NONE",
              longDistance: "NOT_LONG_DISTANCE",
              preferentialService: false,
              iconType: "EMPTY",
            },
            promoted: false,
            avgRating: "3.2",
            totalRatings: 1000,
            new: false,
          },
          subtype: "basic",
        },
        {
          type: "restaurant",
          data: {
            type: "F",
            id: "617279",
            name: "Malaxmi Fast Food",
            uuid: "4848cb1b-b1c4-4a6e-9a6d-f96b781357db",
            city: "21",
            area: "Adajan",
            totalRatingsString: "20+ ratings",
            cloudinaryImageId: "agkm7cflq72tkualhstb",
            cuisines: ["Fast Food", "Pizzas", "Snacks", "Beverages"],
            tags: [],
            costForTwo: 20000,
            costForTwoString: "₹200 FOR TWO",
            deliveryTime: 44,
            minDeliveryTime: 40,
            maxDeliveryTime: 50,
            slaString: "40-50 MINS",
            lastMileTravel: 9.100000381469727,
            slugs: {
              restaurant: "mahalaxmi-fast-food-adajan-adajan-2",
              city: "surat",
            },
            cityState: "21",
            address: "shop no 15,palanpur food zone,opp.sai trith,pal gam suart",
            locality: "Palanpur Food Zone",
            parentId: 373635,
            unserviceable: true,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
              header: "FREE DELIVERY",
              shortDescriptionList: [
                {
                  meta: "FREE DELIVERY",
                  discountType: "FREE_DELIVERY",
                  operationType: "RESTAURANT",
                },
              ],
              descriptionList: [
                {
                  meta: "FREE DELIVERY",
                  discountType: "FREE_DELIVERY",
                  operationType: "RESTAURANT",
                },
              ],
              subHeader: "",
              headerType: 0,
              superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
              header: "",
              shortDescriptionList: [
                {
                  meta: "Free Delivery",
                  discountType: "FREE_DELIVERY",
                  operationType: "RESTAURANT",
                },
              ],
              descriptionList: [
                {
                  meta: "FREE DELIVERY",
                  discountType: "FREE_DELIVERY",
                  operationType: "RESTAURANT",
                },
              ],
              subHeader: "",
              headerType: 0,
              superFreedel: "",
            },
            chain: [],
            feeDetails: {
              fees: [],
              totalFees: 0,
              message: "",
              title: "",
              amount: "",
              icon: "",
            },
            availability: {
              opened: true,
              nextOpenMessage: "",
              nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
              imageBased: [],
              textBased: [],
              textExtendedBadges: [],
            },
            lastMileTravelString: "9.1 kms",
            hasSurge: false,
            sla: {
              restaurantId: "617279",
              deliveryTime: 44,
              minDeliveryTime: 40,
              maxDeliveryTime: 50,
              lastMileTravel: 9.100000381469727,
              lastMileDistance: 0,
              serviceability: "SERVICEABLE_WITH_BANNER",
              rainMode: "NONE",
              longDistance: "NOT_LONG_DISTANCE",
              preferentialService: false,
              iconType: "EMPTY",
            },
            promoted: false,
            avgRating: "4.0",
            totalRatings: 20,
            new: false,
          },
          subtype: "basic",
        },
        {
          type: "restaurant",
          data: {
            type: "F",
            id: "469264",
            name: "Dessert House",
            uuid: "7a320917-c577-49cb-875a-1e585a3adbc1",
            city: "21",
            area: "Piplod",
            totalRatingsString: "Too Few Ratings",
            cloudinaryImageId: "jegpumsjcmomksbr2sxr",
            cuisines: ["Desserts", "Ice Cream"],
            tags: [],
            costForTwo: 15000,
            costForTwoString: "₹150 FOR TWO",
            deliveryTime: 27,
            minDeliveryTime: 25,
            maxDeliveryTime: 35,
            slaString: "25-35 MINS",
            lastMileTravel: 6.199999809265137,
            slugs: {
              restaurant: "dessert-house-piplod-piplod",
              city: "surat",
            },
            cityState: "21",
            address:
              "SHOP NO 2, MARVELLA CORRIDOR OPP. C B PATEL HEALTH CLUB V.I.P ROAD, VESU",
            locality: "Piplod",
            parentId: 71430,
            unserviceable: true,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
              header: "FREE DELIVERY",
              shortDescriptionList: [
                {
                  meta: "FREE DELIVERY",
                  discountType: "FREE_DELIVERY",
                  operationType: "RESTAURANT",
                },
              ],
              descriptionList: [
                {
                  meta: "FREE DELIVERY",
                  discountType: "FREE_DELIVERY",
                  operationType: "RESTAURANT",
                },
              ],
              subHeader: "",
              headerType: 0,
              superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
              header: "",
              shortDescriptionList: [
                {
                  meta: "Free Delivery",
                  discountType: "FREE_DELIVERY",
                  operationType: "RESTAURANT",
                },
              ],
              descriptionList: [
                {
                  meta: "FREE DELIVERY",
                  discountType: "FREE_DELIVERY",
                  operationType: "RESTAURANT",
                },
              ],
              subHeader: "",
              headerType: 0,
              superFreedel: "",
            },
            chain: [],
            feeDetails: {
              fees: [],
              totalFees: 0,
              message: "",
              title: "",
              amount: "",
              icon: "",
            },
            availability: {
              opened: true,
              nextOpenMessage: "",
              nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
              imageBased: [],
              textBased: [],
              textExtendedBadges: [],
            },
            lastMileTravelString: "6.1 kms",
            hasSurge: false,
            sla: {
              restaurantId: "469264",
              deliveryTime: 27,
              minDeliveryTime: 25,
              maxDeliveryTime: 35,
              lastMileTravel: 6.199999809265137,
              lastMileDistance: 0,
              serviceability: "SERVICEABLE_WITH_BANNER",
              rainMode: "NONE",
              longDistance: "NOT_LONG_DISTANCE",
              preferentialService: false,
              iconType: "EMPTY",
            },
            promoted: false,
            avgRating: "4.5",
            totalRatings: 0,
            new: false,
          },
          subtype: "basic",
        },
        {
          type: "restaurant",
          data: {
            type: "F",
            id: "395204",
            name: "McDonald's Gourmet Burger Collection",
            uuid: "55c33a9b-bb51-4b9d-8c94-708d48b08ebd",
            city: "21",
            area: "Piplod",
            totalRatingsString: "100+ ratings",
            cloudinaryImageId: "wzbo5xivr8hstl0vxzcm",
            cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
            tags: [],
            costForTwo: 50000,
            costForTwoString: "₹500 FOR TWO",
            deliveryTime: 31,
            minDeliveryTime: 30,
            maxDeliveryTime: 40,
            slaString: "30-40 MINS",
            lastMileTravel: 8.199999809265137,
            slugs: {
              restaurant:
                "mcdonalds-gourmet-burger-collection-valentine-cinema-piplod",
              city: "surat",
            },
            cityState: "21",
            address:
              "MC Donalds Family Restaurant Valentine Mall Valentine Cine Vision Surat , Dhumas Road, Nr Govardhan Haveli, Surat 395007",
            locality: "Valentine Cinema",
            parentId: 10761,
            unserviceable: true,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
              header: "FREE DELIVERY",
              shortDescriptionList: [
                {
                  meta: "FREE DELIVERY",
                  discountType: "FREE_DELIVERY",
                  operationType: "RESTAURANT",
                },
              ],
              descriptionList: [
                {
                  meta: "FREE DELIVERY",
                  discountType: "FREE_DELIVERY",
                  operationType: "RESTAURANT",
                },
              ],
              subHeader: "",
              headerType: 0,
              superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
              header: "",
              shortDescriptionList: [
                {
                  meta: "Free Delivery",
                  discountType: "FREE_DELIVERY",
                  operationType: "RESTAURANT",
                },
              ],
              descriptionList: [
                {
                  meta: "FREE DELIVERY",
                  discountType: "FREE_DELIVERY",
                  operationType: "RESTAURANT",
                },
              ],
              subHeader: "",
              headerType: 0,
              superFreedel: "",
            },
            chain: [],
            feeDetails: {
              fees: [],
              totalFees: 0,
              message: "",
              title: "",
              amount: "",
              icon: "",
            },
            availability: {
              opened: true,
              nextOpenMessage: "",
              nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
              imageBased: [],
              textBased: [],
              textExtendedBadges: [],
            },
            lastMileTravelString: "8.1 kms",
            hasSurge: false,
            sla: {
              restaurantId: "395204",
              deliveryTime: 31,
              minDeliveryTime: 30,
              maxDeliveryTime: 40,
              lastMileTravel: 8.199999809265137,
              lastMileDistance: 0,
              serviceability: "SERVICEABLE_WITH_BANNER",
              rainMode: "NONE",
              longDistance: "NOT_LONG_DISTANCE",
              preferentialService: false,
              iconType: "EMPTY",
            },
            promoted: false,
            avgRating: "4.2",
            totalRatings: 100,
            new: false,
          },
          subtype: "basic",
        },
        {
          type: "restaurant",
          data: {
            type: "F",
            id: "193541",
            name: "Behrouz Biryani",
            uuid: "abc2e9d1-df00-4449-bde3-4c35982d0ef3",
            city: "21",
            area: "Adajan Patiya",
            totalRatingsString: "1000+ ratings",
            cloudinaryImageId: "craozjakzx7sll2uracb",
            cuisines: [
              "Biryani",
              "Mughlai",
              "Lucknowi",
              "Hyderabadi",
              "Kebabs",
              "North Indian",
              "Persian",
              "Desserts",
            ],
            tags: [],
            costForTwo: 50000,
            costForTwoString: "₹500 FOR TWO",
            deliveryTime: 49,
            minDeliveryTime: 45,
            maxDeliveryTime: 55,
            slaString: "45-55 MINS",
            lastMileTravel: 6.400000095367432,
            slugs: {
              restaurant: "behrouz-biryani-adajan-adajan",
              city: "surat",
            },
            cityState: "21",
            address:
              "Chalta no 23, Ground Floor, Guru Ashish Building, Below Stallon Gym, Opp Kotyark Nagar, Near Navyug College, Adajan, Surat 395005",
            locality: "Nr Navyug College, Rander Road",
            parentId: 1803,
            unserviceable: true,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
              header: "FREE DELIVERY",
              shortDescriptionList: [
                {
                  meta: "FREE DELIVERY",
                  discountType: "FREE_DELIVERY",
                  operationType: "RESTAURANT",
                },
              ],
              descriptionList: [
                {
                  meta: "FREE DELIVERY",
                  discountType: "FREE_DELIVERY",
                  operationType: "RESTAURANT",
                },
              ],
              subHeader: "",
              headerType: 0,
              superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
              header: "",
              shortDescriptionList: [
                {
                  meta: "Free Delivery",
                  discountType: "FREE_DELIVERY",
                  operationType: "RESTAURANT",
                },
              ],
              descriptionList: [
                {
                  meta: "FREE DELIVERY",
                  discountType: "FREE_DELIVERY",
                  operationType: "RESTAURANT",
                },
              ],
              subHeader: "",
              headerType: 0,
              superFreedel: "",
            },
            chain: [],
            feeDetails: {
              fees: [],
              totalFees: 0,
              message: "",
              title: "",
              amount: "",
              icon: "",
            },
            availability: {
              opened: true,
              nextOpenMessage: "",
              nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
              imageBased: [],
              textBased: [],
              textExtendedBadges: [],
            },
            lastMileTravelString: "6.4 kms",
            hasSurge: false,
            sla: {
              restaurantId: "193541",
              deliveryTime: 49,
              minDeliveryTime: 45,
              maxDeliveryTime: 55,
              lastMileTravel: 6.400000095367432,
              lastMileDistance: 0,
              serviceability: "SERVICEABLE_WITH_BANNER",
              rainMode: "NONE",
              longDistance: "NOT_LONG_DISTANCE",
              preferentialService: false,
              iconType: "EMPTY",
            },
            promoted: false,
            avgRating: "4.3",
            totalRatings: 1000,
            new: false,
          },
          subtype: "basic",
        },
        {
          type: "restaurant",
          data: {
            type: "F",
            id: "475510",
            name: "Momos House",
            uuid: "34320d9a-ffa7-450c-ad61-d50485306626",
            city: "21",
            area: "Piplod",
            totalRatingsString: "Too Few Ratings",
            cloudinaryImageId: "vmold2zualdrrypxcvue",
            cuisines: ["Fast Food"],
            tags: [],
            costForTwo: 20000,
            costForTwoString: "₹200 FOR TWO",
            deliveryTime: 31,
            minDeliveryTime: 30,
            maxDeliveryTime: 40,
            slaString: "30-40 MINS",
            lastMileTravel: 6.199999809265137,
            slugs: {
              restaurant: "momo’s-house-piplod-piplod",
              city: "surat",
            },
            cityState: "21",
            address:
              "SHOP NO - 2, MARVELLA CORRIDOR, OPP. C B PATEL HEALTH CLUB, V.I.P. ROAD, Surat,, Vesu , Surat Municipal Corporation, Surat Municipal Corporation, Gujarat - 395007",
            locality: "Vesu",
            parentId: 15884,
            unserviceable: true,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
              header: "FREE DELIVERY",
              shortDescriptionList: [
                {
                  meta: "FREE DELIVERY",
                  discountType: "FREE_DELIVERY",
                  operationType: "RESTAURANT",
                },
              ],
              descriptionList: [
                {
                  meta: "FREE DELIVERY",
                  discountType: "FREE_DELIVERY",
                  operationType: "RESTAURANT",
                },
              ],
              subHeader: "",
              headerType: 0,
              superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
              header: "",
              shortDescriptionList: [
                {
                  meta: "Free Delivery",
                  discountType: "FREE_DELIVERY",
                  operationType: "RESTAURANT",
                },
              ],
              descriptionList: [
                {
                  meta: "FREE DELIVERY",
                  discountType: "FREE_DELIVERY",
                  operationType: "RESTAURANT",
                },
              ],
              subHeader: "",
              headerType: 0,
              superFreedel: "",
            },
            chain: [],
            feeDetails: {
              fees: [],
              totalFees: 0,
              message: "",
              title: "",
              amount: "",
              icon: "",
            },
            availability: {
              opened: true,
              nextOpenMessage: "",
              nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
              imageBased: [],
              textBased: [],
              textExtendedBadges: [],
            },
            lastMileTravelString: "6.1 kms",
            hasSurge: false,
            sla: {
              restaurantId: "475510",
              deliveryTime: 31,
              minDeliveryTime: 30,
              maxDeliveryTime: 40,
              lastMileTravel: 6.199999809265137,
              lastMileDistance: 0,
              serviceability: "SERVICEABLE_WITH_BANNER",
              rainMode: "NONE",
              longDistance: "NOT_LONG_DISTANCE",
              preferentialService: false,
              iconType: "EMPTY",
            },
            promoted: false,
            avgRating: "4.1",
            totalRatings: 0,
            new: false,
          },
          subtype: "basic",
        },
        {
          type: "restaurant",
          data: {
            type: "F",
            id: "127596",
            name: "Sabir Chicken",
            uuid: "f0f49821-52ed-4435-9014-c845e964a3d8",
            city: "21",
            area: "Chowk Bazar",
            totalRatingsString: "5000+ ratings",
            cloudinaryImageId: "kilrdjqt8chduasii5ni",
            cuisines: ["North Indian", "Biryani"],
            tags: [],
            costForTwo: 30000,
            costForTwoString: "₹300 FOR TWO",
            deliveryTime: 30,
            minDeliveryTime: 25,
            maxDeliveryTime: 35,
            slaString: "25-35 MINS",
            lastMileTravel: 4.300000190734863,
            slugs: {
              restaurant: "sabir-chicken-athwa-athwa",
              city: "surat",
            },
            cityState: "21",
            address:
              "Nehru Bridge, Behind Nagin Chand Hall, Chowk Bazar, Surat, Gujarat 395003",
            locality: "Chowk Bazar",
            parentId: 173978,
            unserviceable: true,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
              header: "FREE DELIVERY",
              shortDescriptionList: [
                {
                  meta: "FREE DELIVERY",
                  discountType: "FREE_DELIVERY",
                  operationType: "RESTAURANT",
                },
              ],
              descriptionList: [
                {
                  meta: "FREE DELIVERY",
                  discountType: "FREE_DELIVERY",
                  operationType: "RESTAURANT",
                },
              ],
              subHeader: "",
              headerType: 0,
              superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
              header: "",
              shortDescriptionList: [
                {
                  meta: "Free Delivery",
                  discountType: "FREE_DELIVERY",
                  operationType: "RESTAURANT",
                },
              ],
              descriptionList: [
                {
                  meta: "FREE DELIVERY",
                  discountType: "FREE_DELIVERY",
                  operationType: "RESTAURANT",
                },
              ],
              subHeader: "",
              headerType: 0,
              superFreedel: "",
            },
            chain: [],
            feeDetails: {
              fees: [],
              totalFees: 0,
              message: "",
              title: "",
              amount: "",
              icon: "",
            },
            availability: {
              opened: true,
              nextOpenMessage: "",
              nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
              imageBased: [],
              textBased: [],
              textExtendedBadges: [],
            },
            lastMileTravelString: "4.3 kms",
            hasSurge: false,
            sla: {
              restaurantId: "127596",
              deliveryTime: 30,
              minDeliveryTime: 25,
              maxDeliveryTime: 35,
              lastMileTravel: 4.300000190734863,
              lastMileDistance: 0,
              serviceability: "SERVICEABLE_WITH_BANNER",
              rainMode: "NONE",
              longDistance: "NOT_LONG_DISTANCE",
              preferentialService: false,
              iconType: "EMPTY",
            },
            promoted: false,
            avgRating: "4.1",
            totalRatings: 5000,
            new: false,
          },
          subtype: "basic",
        },
        {
          type: "restaurant",
          data: {
            type: "F",
            id: "64656",
            name: "Mahesh Pav Bhaji",
            uuid: "ccfda4b9-82b1-4f22-9567-eb98c448b267",
            city: "21",
            area: "Adajan",
            totalRatingsString: "10000+ ratings",
            cloudinaryImageId: "84d3bea985f13bd980dc39c9c73bc87f",
            cuisines: ["Desserts", "Chinese", "South Indian", "Ice Cream", "Pizzas"],
            tags: [],
            costForTwo: 25000,
            costForTwoString: "₹250 FOR TWO",
            deliveryTime: 36,
            minDeliveryTime: 35,
            maxDeliveryTime: 45,
            slaString: "35-45 MINS",
            lastMileTravel: 6.900000095367432,
            slugs: {
              restaurant: "mahesh-pav-bhaji-adajan-gam-adajan",
              city: "surat",
            },
            cityState: "21",
            address:
              "Shop 12, Garden View Apartment, Honey Park Road, Adajan Gam, Surat",
            locality: "Adajan Gam",
            parentId: 6553,
            unserviceable: true,
            veg: true,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
              header: "30% off",
              shortDescriptionList: [
                {
                  meta: "30% off | Use JUMBO",
                  discountType: "Percentage",
                  operationType: "RESTAURANT",
                },
              ],
              descriptionList: [
                {
                  meta: "30% off up to ₹150 on orders above ₹400 | Use code JUMBO",
                  discountType: "Percentage",
                  operationType: "RESTAURANT",
                },
              ],
              subHeader: "",
              headerType: 0,
              superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
              header: "30% OFF",
              shortDescriptionList: [
                {
                  meta: "Use JUMBO",
                  discountType: "Percentage",
                  operationType: "RESTAURANT",
                },
              ],
              descriptionList: [
                {
                  meta: "30% off up to ₹150 on orders above ₹400 | Use code JUMBO",
                  discountType: "Percentage",
                  operationType: "RESTAURANT",
                },
              ],
              subHeader: "",
              headerType: 0,
              superFreedel: "",
            },
            chain: [],
            feeDetails: {
              fees: [],
              totalFees: 0,
              message: "",
              title: "",
              amount: "",
              icon: "",
            },
            availability: {
              opened: true,
              nextOpenMessage: "",
              nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
              imageBased: [],
              textBased: [],
              textExtendedBadges: [],
            },
            lastMileTravelString: "6.9 kms",
            hasSurge: false,
            sla: {
              restaurantId: "64656",
              deliveryTime: 36,
              minDeliveryTime: 35,
              maxDeliveryTime: 45,
              lastMileTravel: 6.900000095367432,
              lastMileDistance: 0,
              serviceability: "SERVICEABLE_WITH_BANNER",
              rainMode: "NONE",
              longDistance: "NOT_LONG_DISTANCE",
              preferentialService: false,
              iconType: "EMPTY",
            },
            promoted: false,
            avgRating: "4.1",
            totalRatings: 10000,
            new: false,
          },
          subtype: "basic",
        },
        {
          type: "restaurant",
          data: {
            type: "F",
            id: "255204",
            name: "The Dango Cake Shop",
            uuid: "dbfd3f3c-77a6-4979-96c4-ce9863e54cdc",
            city: "21",
            area: "Galaxy Circle",
            totalRatingsString: "50+ ratings",
            cloudinaryImageId: "mnvfpsoealkflze4e5qi",
            cuisines: ["Bakery"],
            tags: [],
            costForTwo: 27000,
            costForTwoString: "₹270 FOR TWO",
            deliveryTime: 34,
            minDeliveryTime: 30,
            maxDeliveryTime: 40,
            slaString: "30-40 MINS",
            lastMileTravel: 7.699999809265137,
            slugs: {
              restaurant: "twisted-cake-live-cake-adajan-adajan",
              city: "surat",
            },
            cityState: "21",
            address: "44 La Victoria, galaxy circle pal Surat",
            locality: "Galaxy Circle",
            parentId: 207513,
            unserviceable: true,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
              header: "FREE DELIVERY",
              shortDescriptionList: [
                {
                  meta: "FREE DELIVERY",
                  discountType: "FREE_DELIVERY",
                  operationType: "RESTAURANT",
                },
              ],
              descriptionList: [
                {
                  meta: "FREE DELIVERY",
                  discountType: "FREE_DELIVERY",
                  operationType: "RESTAURANT",
                },
              ],
              subHeader: "",
              headerType: 0,
              superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
              header: "",
              shortDescriptionList: [
                {
                  meta: "Free Delivery",
                  discountType: "FREE_DELIVERY",
                  operationType: "RESTAURANT",
                },
              ],
              descriptionList: [
                {
                  meta: "FREE DELIVERY",
                  discountType: "FREE_DELIVERY",
                  operationType: "RESTAURANT",
                },
              ],
              subHeader: "",
              headerType: 0,
              superFreedel: "",
            },
            chain: [],
            feeDetails: {
              fees: [],
              totalFees: 0,
              message: "",
              title: "",
              amount: "",
              icon: "",
            },
            availability: {
              opened: true,
              nextOpenMessage: "",
              nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
              imageBased: [],
              textBased: [],
              textExtendedBadges: [],
            },
            lastMileTravelString: "7.6 kms",
            hasSurge: false,
            sla: {
              restaurantId: "255204",
              deliveryTime: 34,
              minDeliveryTime: 30,
              maxDeliveryTime: 40,
              lastMileTravel: 7.699999809265137,
              lastMileDistance: 0,
              serviceability: "SERVICEABLE_WITH_BANNER",
              rainMode: "NONE",
              longDistance: "NOT_LONG_DISTANCE",
              preferentialService: false,
              iconType: "EMPTY",
            },
            promoted: false,
            avgRating: "4.2",
            totalRatings: 50,
            new: false,
          },
          subtype: "basic",
        },
        {
          type: "restaurant",
          data: {
            type: "F",
            id: "664656",
            name: "Cheezylicious Cafe",
            uuid: "5880e561-10ed-4f96-990b-2251e2f09c82",
            city: "21",
            area: "Piplod",
            totalRatingsString: "Too Few Ratings",
            cloudinaryImageId: "fda9ad56b9d62070fec105cd93693129",
            cuisines: [
              "Cafe",
              "Fast Food",
              "Chinese",
              "Snacks",
              "Italian",
              "Mexican",
            ],
            tags: [],
            costForTwo: 15000,
            costForTwoString: "₹150 FOR TWO",
            deliveryTime: 38,
            minDeliveryTime: 35,
            maxDeliveryTime: 45,
            slaString: "35-45 MINS",
            lastMileTravel: 7.599999904632568,
            slugs: {
              restaurant: "cheezylicious-cafe-piplod-piplod-2",
              city: "surat",
            },
            cityState: "21",
            address:
              "Shop no G10 ground floor, aagam square B/S Dream heritage, Canal road, Vesu",
            locality: "Dream heritage",
            parentId: 59292,
            unserviceable: true,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
              header: "FREE DELIVERY",
              shortDescriptionList: [
                {
                  meta: "FREE DELIVERY",
                  discountType: "FREE_DELIVERY",
                  operationType: "RESTAURANT",
                },
              ],
              descriptionList: [
                {
                  meta: "FREE DELIVERY",
                  discountType: "FREE_DELIVERY",
                  operationType: "RESTAURANT",
                },
              ],
              subHeader: "",
              headerType: 0,
              superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
              header: "",
              shortDescriptionList: [
                {
                  meta: "Free Delivery",
                  discountType: "FREE_DELIVERY",
                  operationType: "RESTAURANT",
                },
              ],
              descriptionList: [
                {
                  meta: "FREE DELIVERY",
                  discountType: "FREE_DELIVERY",
                  operationType: "RESTAURANT",
                },
              ],
              subHeader: "",
              headerType: 0,
              superFreedel: "",
            },
            chain: [],
            feeDetails: {
              fees: [],
              totalFees: 0,
              message: "",
              title: "",
              amount: "",
              icon: "",
            },
            availability: {
              opened: true,
              nextOpenMessage: "",
              nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
              imageBased: [],
              textBased: [],
              textExtendedBadges: [],
            },
            lastMileTravelString: "7.5 kms",
            hasSurge: false,
            sla: {
              restaurantId: "664656",
              deliveryTime: 38,
              minDeliveryTime: 35,
              maxDeliveryTime: 45,
              lastMileTravel: 7.599999904632568,
              lastMileDistance: 0,
              serviceability: "SERVICEABLE_WITH_BANNER",
              rainMode: "NONE",
              longDistance: "NOT_LONG_DISTANCE",
              preferentialService: false,
              iconType: "EMPTY",
            },
            promoted: false,
            avgRating: "3.9",
            totalRatings: 0,
            new: true,
          },
          subtype: "basic",
        },
      ];


// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({
  // below are from the above config driven ui only no confusion
  cloudinaryImageId,
  name,
  cuisines,
  area,
  lastMileTravelString,
  costForTwoString,
  avgRating,
}) => {
  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{area}</h4>
      <span>
      <h4><i class="fa-solid fa-star"></i>{avgRating}</h4>
        <h4>{lastMileTravelString}</h4>
        <h4>{costForTwoString}</h4>
      </span>
    </div>
  );
};

// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index
const Body = () => {
  return (
    <div className="restaurant-list">
      {restaurantList.map((restaurant) => {
        return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
      })}
    </div>
  );
};

// Footer component for footer section
const Footer = () => {
  return (
    <div className="footer">
      Created By
      <i class="fa-solid fa-heart"></i>
      <a href="https://www.linkedin.com/in/chetannada/" target="_blank">
        Chetan Nada
      </a>
      <i class="fa-solid fa-copyright"></i>2023
      <strong>
        Food<span>Fire</span>
      </strong>
    </div>
  );
};




// here am just calling all the above created one...just because of this only we are getting output this is very important

// AppLayout component to show: Header, Body, Footer
const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};


                                // (React Fragment and css styles)


//React.Fragment ,Note: we can use like <React.Fragment><React.Fragment/> or <> </> like this as well,but in this u cant give styles ,if u want to give styles u can use <div style={}></div>
//jsx -one Parent
//basically reactfragment is used when u want to give one root instead of creating a div it has 2 syntaxes as we read above
       


//inline styling in React(3 ways here only)


//in html for styling we use style="" but in react it wont work ,we give styling  using javascript object,because react or jsx is like writing html inside a javascript,so we have to use objects 

// const styleObj={
//         border:"1px solid red",
// }

// const jsx=(
        // am just passing the above created object which is css
        // <div 
        // className="jsx"
        // style={ 
                
                // {styleObj}

                //or we can mention directley like this as well it  will give us the css ,or we can access above created css just by calling inside a {} or inside a div we can give a className="" and we can write css code inside css file which is best and readable
               
//                 { backgroundColor:"yellow"}

//         }> 
//                 <h1>JSX</h1>
//                 <h1>second jsx</h1>
//                 </div>
        
// );

 

        // CONFIG DRIVEN UI:
        //  world and here root is fetched from the div created inside the html
        const root = ReactDOM.createRoot(document.getElementById('root'))
        //passing a react element inside the root
        //async defer


        //rendering the functional component,here we use angular bracket with a closing slash
        root.render(<AppLayout/>);

        //below one is for rendering the react element
        
        // root.render(heading3); //it is simply rendering the above root div inside the html,if this id fails  then that div root id  working..
        
        console.log(heading)



        //Note:even for rendering it works only for 1 render multiple wont work which one comes in order first that get rendered first..


        