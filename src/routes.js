import Factor from "./pages/Factor";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Profile from "./pages/Profile";
import Tables from "./pages/Tables";

const routes = [
    {path: '/', element: <Home />},
    {path: 'tables', element: <Tables />},
    {path: 'products', element: <Products />},
    {path: 'factor', element: <Factor />},
    {path: 'profile', element: <Profile />},
]


export default routes