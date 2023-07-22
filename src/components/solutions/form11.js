
function Calc11(){
    return (
        <div>
            <p style={{fontSize:'30px'}}>&int;</p><p style={{textDecoration:'underline'}} > _____dx_____</p><p>sin2x-2sinx</p>
            =<p style={{fontSize:'30px'}}>&int;</p><p style={{textDecoration:'underline'}} > _____dx_____</p><p>2sinxcosx-2sinx</p>
            =<p style={{fontSize:'30px'}}>&int;</p><p style={{textDecoration:'underline'}} > _____dx_____</p><p>2sinx(cosx-1)</p>
            =<p style={{fontSize:'30px'}}>&int;</p><p style={{textDecoration:'underline'}} > _sinxdx_____</p><p>2sin<sup>2</sup>x(cosx-1)</p>
            =<p style={{fontSize:'30px'}}>&int;</p><p style={{textDecoration:'underline'}} > _sinxdx_____</p><p>2(1-cos<sup>2</sup>x)(cosx-1)</p>
           <p>t = cosx</p>   <p>dt = -sinxdx</p> 
            =<p style={{fontSize:'30px'}}>&int;</p><p style={{textDecoration:'underline'}} > __dt_____</p><p>(1-t<sup>2</sup>)(1-t)</p>
            rest is pratial fractions
            
        
        </div>
    )

}



export default Calc11;

