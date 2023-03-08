
        // creating a simple heading using react using createElement()it means creating an element here h1 is an element takes 3 arguments i.e(1st tag,2nd object(what ever id u give that will be fetched and performs ), 3rd what u want to put into the tag..)

        const heading =React.createElement(
        "h1",
        {
        id:"title",
                //note:here in this object we can give classname,style and manymore
        },
        "heading1"
        );

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
        },
        [heading,heading2] //when we want to pass multiple children we can use array or list [],above created childrens were passed here,so we get theres output
        )

        //pls look document hello world and here root is fetched from the div created inside the html
        const root = ReactDOM.createRoot(document.getElementById('root'));
        //passing a react element inside the root
        //async defer
        root.render(container1); //it is simply rendering the above root div inside the html,if this id fails  then that div root id  working..
        console.log(heading)
