import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup"
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import AcadProducts from "./AcadProducts";

function App() {
    // const [alert, setAlert] = useState(null);
    // const showAlert = (message, type) => {
    //     setAlert({
    //         msg: message,
    //         type: type
    //     });

    //     setTimeout(() => {
    //         setAlert(null);
    //     }, 1500);
    // }

    return (
            <div>
                <Router>
                    <Header />
                    {/* <Alert alert={alert} /> */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup/>} />
                        <Route path="/acadProducts" element={<AcadProducts />} />
                    </Routes>
                {/* <Footer /> */}
                </Router>
                                
            </div>
    );
}

export default App;
