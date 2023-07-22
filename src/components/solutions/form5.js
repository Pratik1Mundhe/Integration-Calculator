
function Calc5(){
    return (
        <div>
            <p style={{fontSize:'40px'}}>&int;</p><p style={{textDecoration:'underline'}} >__x<sup>2</sup>-1 dx__ </p><p>x<sup>2</sup>+2x+1&radic;(x&sup3;+x&sup2;+ x)</p>
            <p style={{fontSize:'40px'}}>&int;</p><p style={{textDecoration:'underline'}} >__1-1/x<sup>2</sup>dx__ </p><p>x+2+1/x&radic;(x + 1 + 1/x)</p>
            <p> let x+1/x = t </p>
            <p> dt = 1- 1/x<sup>2</sup> </p>
            <p style={{fontSize:'40px'}}>&int;</p><p style={{textDecoration:'underline'}} >__dt__ </p><p>(t+2)&radic;(t + 1 )</p>
            <p> let t + 1 = u<sup>2</sup> </p>
            <p> dt = 2udu </p>
            <p style={{fontSize:'40px'}}>&int;</p><p style={{textDecoration:'underline'}} >__2udu__ </p><p>u<sup>2</sup>+1 * u</p>
            <p style={{fontSize:'40px'}}>&int;</p><p style={{textDecoration:'underline'}} >__2du__ </p><p>u<sup>2</sup>+1 </p>
            <p style={{fontSize:'40px'}}>&int;</p><p> 2tan <sup>-1</sup>u  + c </p>



        </div>
    )

}



export default Calc5;

