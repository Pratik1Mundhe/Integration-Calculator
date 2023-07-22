
function Calc10(){
    return (
        <div>
            <p style={{fontSize:'40px'}}>&int;</p><p style={{textDecoration:'underline'}} > 1-x+2x&sup2;-x&sup3; dx_</p><p>x(x&sup2;+1)<sup>2</sup></p>
            <p  style={{textDecoration:'underline'}}> 1-x+2x&sup2;-x&sup3; </p><p>x(x&sup2;+1)<sup>2</sup> </p><p> =  A/x + (Bx+C)/(x<sup>2</sup>+1) +  (Dx+E)/(x<sup>2</sup>+1)<sup>2</sup></p>
            On solving ,
            <p>A = 1  B =-1  C = 0  D=1  E =-1</p>
            <p>=  &int;1/x + &int;-x/(x<sup>2</sup>+1) +  &int;(x-1)/(x<sup>2</sup>+1)<sup>2</sup></p>
            <p>= lnx  - 1/2 ln(x<sup>2</sup> + 1) - 1/(x<sup>2</sup>+1) - tan<sup>-1</sup>x/2  - (sin2tan <sup>-1</sup>x)/4</p>
        
        </div>
    )

}



export default Calc10;


