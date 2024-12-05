import {useNavigate, useLocation} from "react-router-dom";
import "./BarItemsDropdown.css"

function BarItemsDropdown(){
    const navigate = useNavigate();
    const url_location = useLocation();
    const handleChange = (event : React.ChangeEvent<HTMLSelectElement>) =>{
        navigate(event.target.value);
    };
    return (
        <div className="dropdown-container">
            <select id="BarItemSelect" value={url_location.pathname} onChange={handleChange}>
                <option value="/akce">Akce</option>
                <option value="/uvod">O Metličce</option>
            </select>
        </div>
    );
}

export default BarItemsDropdown;