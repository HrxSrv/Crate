import "./Home.scss";
import Banner from "./Banner/Banner"
import Category from './Category/Category'
import SaleProducts from "../SaleProducts/SaleProducts";
const Home = () => {
    return <div className="home">
        
        <Banner/>
        <div className="show-items-by-cat">
        <Category/>
        </div>
        <SaleProducts headingText={"ALL TIME LOWEST"}/>
    </div>;
};

export default Home;
