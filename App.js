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


import React from "react";
import ReactDOM from "react-dom/client";
// creating a simple heading using react using createElement()it means creating an element here h1 is an element takes 3 arguments i.e(1st tag,2nd object(what ever id u give that will be fetched and performs ), 3rd what u want to put into the tag..)tagname,code ,childrend

        const heading =React.createElement(
        "h1",
        {
        id:"title",
                //note:here in this object we can give classname,style and manymore
        },
        "heading1 for parcel"
        );
        // <h1 id="title">heading1</h1> this code and above code is exactly similar but it is in html and above is in react

        const heading2 =React.createElement(
        "h2",
        {
        id:"title",
                //note:here in this object we can give classname,style and manymore
        },
        "heading2 kaka"
        );

        const container1=React.createElement(
        "div", 
        {
            id:"container",//this must be an string
            hellow:"world", //it can be anything(this  is called as props (like an attribute))
        },
        [heading,heading2] //when we want to pass multiple children we can use array or list [],above created childrens were passed here,so we get theres output
        )

        //pls look document hello world and here root is fetched from the div created inside the html
        const root = ReactDOM.createRoot(document.getElementById('root'))
        //passing a react element inside the root
        //async defer
        root.render(container1); //it is simply rendering the above root div inside the html,if this id fails  then that div root id  working..
        console.log(heading)
