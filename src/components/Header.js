//below one is the another way to export and for this importing we need to use {} for importing..
export const Title =() =>(
<a href="/">
    <img className="logo" alt="logo" src="" />
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

// *****
//for making an function export simply put export infront of it and for importing use {} braces with the function name





// with the below export it will be exported default and it  is the mainly used one to export
export default Header;
