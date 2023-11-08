import Base from "../Base/base";
import { useHistory } from "react-router-dom";

export default function NoPage() {
    const history = useHistory();
    return (
        <Base title={"404 Error.."} description={"You have entered wrong url.."}>
            <button className="btn btn-light" onClick={() => history.push("/")}>
                <u>click here to DashBoard</u>
            </button>
        </Base>
    );
}
