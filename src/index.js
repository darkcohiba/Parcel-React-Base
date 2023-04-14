import ReactDOM from "react-dom/client";
import Home from "./pages/home"
import './styles.css';



const App = () => {
    return(
        <div id="base">
            <Home />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <App />
);

