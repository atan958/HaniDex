import { useRef } from 'react'
import '../../../animations/landing/pkb-anm.css'

const PkbBtn = ({ loadingPkm, togglePkbBtn }) => {
    const btnClickedOnce = useRef(false);
    console.log('Rendered at PkbBtn');
    const setBtnClickedOnce = () => {
        //console.log('Rendered at PkbBtn CLICKED ONCE');
        btnClickedOnce.current = true;
    }

    return (
        <div className={`pkb-container ${loadingPkm && 'pkbDrop-animation'}`}>
            <div className={`pkbImg-container ${(loadingPkm || !btnClickedOnce.current)? 'pkbShake-animation' : 'pkbCaught-animation'}`}>
                <div className="pkbBtn-container">
                    <button className={(loadingPkm || !btnClickedOnce.current)? 'pkbLoading-btn pkbBtnGlow-animation' : 'pkb-btn pkbBtnCaught-animation'} onClick={()=>{setBtnClickedOnce(); togglePkbBtn();}}/>
                </div>
            </div>
        </div>
    )
}

export default PkbBtn


//<button className="btnShowContainer" onClick={togglePkbBtn} style={pkbBtnOn? {backgroundColor : 'grey'} : null}/>



// className="pkbImg-container pkbShake-animation"