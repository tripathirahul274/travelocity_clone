import { Switch, Route } from "react-router-dom";
import { Footer } from "../Components/Footer/Footer";
import { Navbar } from "../Components/Navbar/Navbar";
import { MainHomePage } from "../Pages/Home_page";
import { HotelsListPage } from "../Pages/HotelListPage";
import MainHotelPage from "../Pages/MainHotelPage";
import { PaymentPage } from "../Pages/Payment_page";
import { SignInPage } from "../Pages/SignIn_page";
import { SignUpPage } from "../Pages/SignUp_page";

export function RoutesPage() {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={MainHomePage} />
                <Route exact path="/hotels" component={HotelsListPage} />
                <Route exact path="/hotels/:id" component={MainHotelPage} />
                <Route exact path="/signUp" component={SignUpPage} />
                <Route exact path="/signIn" component={SignInPage} />
                <Route exact path="/payment" component={PaymentPage} />
            </Switch>
            <Footer />
        </div>
    );
}
