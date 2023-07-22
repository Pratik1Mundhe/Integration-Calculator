// var type1 = document.getElementById('form1');

function Calc1(){
    return (
        <div className="rightSec">
            
            {/* <p style={{fontSize:'40px'}}>&int;</p><p style={{textDecoration:'underline'}}>    ax+b   dx </p><p> px&sup2;+qx+r </p> */}
           <p>let t&sup2; = tanx </p> <p> 2tdt = sec&sup2;xdx </p><p> = (t<sup>4</sup>+1)dx</p> <p>dx = 2tdt/(t<sup>4</sup>+1)</p>
           <p>&int;&radic;tanx </p><p>=&int;2t&sup2;/(t<sup>4</sup>+1) </p>
            =<p style={{textDecoration:'underline'}}>t&sup2;+1</p> <p>t<sup>4</sup>+1</p> 
             + <p style={{textDecoration:'underline'}}>t&sup2;-1</p> <p>t<sup>4</sup>+1</p>
             dividing Nr and Dr by t&sup2;
            =<p style={{textDecoration:'underline'}}>1 + 1/t&sup2;</p> <p>t&sup2;+1/t&sup2;</p> 
             + <p style={{textDecoration:'underline'}}>1 - 1/t&sup2;</p> <p>t&sup2;+1/t&sup2;</p> 
             
            <p>let u = t-1/t & v = t+ 1/t  </p> <p>du = 1+1/t&sup2;</p> <p>dv = 1-1/t&sup2;</p>
            <p style={{textDecoration:'underline'}}>__du__</p><p>u&sup2;+2</p>
            +<p style={{textDecoration:'underline'}}>__dv__</p><p>v&sup2;-2</p>
            <p >1/&radic;2 tan<sup>-1</sup>u/&radic;2</p>
            +<p>1/2&radic;2 log(v-&radic;2)/(v+&radic;2)</p>
            

        
        </div>
    )

}

// type1.onclick = calc;

export default Calc1;

