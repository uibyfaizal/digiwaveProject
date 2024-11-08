import { useNavigate } from "react-router-dom";

const First = () => {
    const navigate = useNavigate();

    return <div>
        <h2>HOMEPAGE ROUTE</h2>
        <button onClick={() => navigate('/about')}>Check About</button>
    </div>
}

export default First;