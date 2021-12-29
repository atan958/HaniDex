import { useRef } from 'react'
import '../../../animations/landing/pkb-anm.css'

const PkbBtn = ({ loadingPkm, togglePkbBtn }) => {
    /*
    / Supplementary ref (i.e. mock state) to track whether the Pokeball button has been clicked at least once;
    / The ref value WOULD be changed along with the first call to the togglePkbBtn function;
    /
    / Note: Set intial value to "false" to keep Pokeball animation until the first button-click;
    */
    const btnClickedOnce = useRef(true);
    const setBtnClickedOnce = () => {
        btnClickedOnce.current = true;
    }

    /*
    / *** TO BE REMOVED ***
    */
    console.log('Rendered at PkbBtn');

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
