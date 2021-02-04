import {BrowserRouter} from "react-router-dom";
import GlobalStyles, {Layout} from './style'
import HeaderComponent from "./components/Header";
import HomePage from "./pages/Home";

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <HeaderComponent/>
                <HomePage/>
            </Layout>

            <GlobalStyles/>
        </BrowserRouter>
    );
}

export default App;
