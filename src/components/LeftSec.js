import {Link} from "react-router-dom";
const LeftSec = () => {
    return (
        <>
            <div className="leftSec">
                <table>
                <tr>
    <th id="types">Types</th>
    <th id="form1">
        <Link to="/solve/1">∫√tanx</Link>
    </th>
    <th id="form2">
        <Link to="/solve/2">
        <p style={{ textDecoration: "underline" }}>ax+b dx</p>
        <p>px²+qx+r</p>
        </Link>
    </th>
    </tr>

            <tr>  
                <th id="form3"><p>&int;(ax+b)&radic;(px&sup2;+qx+r)dx</p></th>
                <th id="form4"><p style={{textDecoration:'underline'}}>  ax&sup2;+b dx </p><p> x<sup>4</sup>+px&sup2;+q </p></th>
                <th id="form5"><Link to="/solve/5"><p style={{textDecoration:'underline'}} >______x-1 dx______ </p><p style={{textDecoration:'overline' }}>x+1&radic;(x&sup3;+x&sup2;+ x)</p></Link></th>
            </tr>
            <tr>
                <th id="form6"><p style={{textDecoration:'underline'}} >_________dx_________</p><p>asin&sup2;x+bcos&sup2;x+csinxcosx</p> </th>
                <th id="form7"><p style={{textDecoration:'underline'}} >_________dx_________</p><p>asinx+bcosx+c</p></th>
                <th id="form8"><p style={{textDecoration:'underline'}} >asinx+bcosx+c dx____</p><p>psinx+qcosx +r</p></th>

            </tr>
            <tr>
                <th id="form9"><Link to="/solve/9"> <p>e<sup>ax</sup>sinbx dx </p></Link> </th>
                <th id="form10"><Link to="/solve/10"> <p style={{textDecoration:'underline'}} >1-x+2x&sup2;-x&sup3; dx_</p><p>x(x&sup2;+1)<sup>2</sup></p></Link> </th>
                <th id="form11"><Link to="/solve/11"> <p style={{textDecoration:'underline'}} >_____dx_____</p><p>sin2x-2sinx</p></Link> </th>

            </tr>
            <tr>
                <th id="form12"><Link to="/solve/12"><p style={{textDecoration:'underline'}} >__ x dx_</p><p>(1-x<sup>4</sup>)<sup>3/2</sup></p> </Link></th>
                <th id="form13"><p style={{textDecoration:'underline'}} >_____dx______</p><p style={{textDecoration:'overline'}}> ax&sup2;+b&radic;px&sup2;+q</p></th>
                <th id="form14"><Link to="/solve/14">_<p > x+ x<sup>2/3</sup>+ x<sup>1/6</sup>dx</p><p>____________</p><p> x(1+x <sup>1/3</sup>) </p></Link> </th>

            </tr>
            <tr>
                <th id="form15"><Link to="/solve/14"><p style={{textDecoration:'underline'}} >____dx_____</p><p style={{textDecoration:'overline'}} > &radic;x+1 - &#8732;x+1</p></Link> </th>
                <th id="form16"><Link to="/solve/15"><p style={{textDecoration:'underline'}} >__  &#8731;(1-x) dx_</p><p style={{textDecoration:'overline'}} >x&#8731;(1+x) </p></Link> </th>
                <th id="form17"><Link to="/solve/16"><p style={{fontSize:'40px'}}></p><p >&int;sin<sup>n</sup>xdx</p></Link> </th>

            </tr>
            <tr>
                
                <th id="form18"><Link to="/solve/18"><p style={{fontSize:'40px'}}></p><p>&int;tan<sup>n</sup>xdx</p> </Link> </th>
                <th id="form19"><Link to="/solve/19"><p style={{textDecoration:'underline'}} > _____dx______</p><p style={{textDecoration:'overline'}}> ax&sup2;+b&radic;px&sup2;+qx+r</p> </Link></th>
            
            </tr>

        </table>
        </div>
        </>
    )
}

export default LeftSec;