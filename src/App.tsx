import './styles.css';
import IMAGE from './react.png';
import LOGO from './logo.svg';

export const App = () => {
    return (
        <>
            <h1>React Web App (Typescript + Webpack) - {process.env.NODE_ENV} {process.env.name}</h1>
            <img src={IMAGE} alt="react_image" width="300" />
            <img src={LOGO} alt="react_logo" width="300" />
        </>
    )
}
