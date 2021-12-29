import { useRef } from 'react'
import '../../../animations/landing/pkb-anm.css'

const PkbBtn = ({ loadingPkm, togglePkbBtn }) => {
    /*
    / Supplementary ref (i.e. a "mock state") => used to track whether the Pokeball button has been clicked at least once;
    / The ref value WOULD be changed along with the call to the togglePkbBtn function WHEN the Pokeball button is first pressed;
    /
    / Note: button is clicked 
    /   => setBtnClickedOnce is called changing the btnClickedOnce ref
    /       => togglePkbBtn is called changing the showContainer state 
    /           => state change of parent PkmGrid component causes PkbBtn to re-render 
    /               => PkbBtn only re-renders once as btnClickedOnce is a ref not a state
    /
    / Note: Set intial value to "false" to keep Pokeball animation until the first click is done on the Pokeball button;
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
