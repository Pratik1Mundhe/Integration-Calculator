import Calc1 from "./solutions/form1"
import { useParams } from "react-router-dom";
const Solution = () => {
    const params = useParams();
    return (
        <>
        {
          console.log(params)
        }
        </>
    )
}

export default Solution;