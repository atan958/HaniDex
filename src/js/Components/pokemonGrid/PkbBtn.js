import '../../../animations/landing/pkb-anm.css'

const PkbBtn = ({ loadingPkm, togglePkbBtn }) => {

    return (
        <div className={`pkb-container ${loadingPkm && 'pkbDrop-animation'}`}>
            <div className={`pkbImg-container ${loadingPkm? 'pkbShake-animation' : 'pkbCaught-animation'}`}>
                <div className="pkbBtn-container">
                    <button className={loadingPkm? 'pkbLoading-btn pkbBtnGlow-animation' : 'pkb-btn pkbBtnCaught-animation'} onClick={togglePkbBtn}/>
                </div>
            </div>
            
        </div>
    )
}

export default PkbBtn


//<button className="btnShowContainer" onClick={togglePkbBtn} style={pkbBtnOn? {backgroundColor : 'grey'} : null}/>



// className="pkbImg-container pkbShake-animation"