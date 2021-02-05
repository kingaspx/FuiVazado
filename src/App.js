import {BrowserRouter} from "react-router-dom";
import GlobalStyles, {Layout} from './style'
import HeaderComponent from "./components/Header";
import Routes from "./routes";

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <HeaderComponent/>
                <Routes/>
            </Layout>

            <GlobalStyles/>
        </BrowserRouter>
    );
}

export default App;
