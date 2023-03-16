import './app-info.css';

const AppInfo = ({increased, Employees}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании Хит</h1>
            <h2>Общее число сотрудников: {Employees}</h2>
            <h2>Премию получат: {increased}</h2>
        </div>
    );
}

export default AppInfo;