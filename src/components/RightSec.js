import Calc1 from "./solutions/form1"
import Calc5 from "./solutions/form5"
import Calc9 from "./solutions/form9"
import Calc10 from "./solutions/form10"
import Calc11 from "./solutions/form11"
import Calc12 from "./solutions/form12"
import Calc14 from "./solutions/form14"
import Calc15 from "./solutions/form15"
import Calc16 from "./solutions/form16"
import Calc17 from "./solutions/form17"
import Calc18 from "./solutions/form18"

import { useParams } from "react-router-dom";
const RightSec = () => {
    const params = useParams();
    return (
        <div className="rightSec">
                <h2>Solution</h2>
              { 
                params.id==="1"? <Calc1 />:
                params.id==="5"? <Calc5 />: 
                params.id==="9"? <Calc9 />: 
                params.id==="10"? <Calc10 />:
                params.id==="11"? <Calc11 />:
                params.id==="12"? <Calc12 />:
                params.id==="14"? <Calc14 />:
                params.id==="15"? <Calc15 />:
                params.id==="16"? <Calc16 />:
                params.id==="17"? <Calc17 />:
                params.id==="18"? <Calc18 />:null
                
              }
            
        </div>
    )
}

export default RightSec;