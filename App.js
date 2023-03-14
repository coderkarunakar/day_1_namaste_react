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


import React from "react";
import ReactDOM from "react-dom/client";

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
        // return <div><h1>Namaste React functional component </h1><h2>hello guys</h2></div>;

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
        <h2>hello guys this is h2 tag</h2>
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

       

//                 //creating a layout..
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
//                        --Restaurent card
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

      











        //pls look document hello world and here root is fetched from the div created inside the html
        const root = ReactDOM.createRoot(document.getElementById('root'))
        //passing a react element inside the root
        //async defer


        //rendering the functional component,here we use angular bracket with a closing slash
        root.render(<HeaderComponent/>);

        //below one is for rendering the react element
        
        // root.render(heading3); //it is simply rendering the above root div inside the html,if this id fails  then that div root id  working..
        
        console.log(heading)



        //Note:even for rendering it works only for 1 render multiple wont work which one comes in order first that get rendered first..