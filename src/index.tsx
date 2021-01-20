import ReactDOM from "react-dom";
import Parent from './Parent';

const App = () => {
    return <Parent />
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);