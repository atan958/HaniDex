const PkbBtn = ({ loadingPkm, togglePkbBtn }) => {

    return (
        <div className="pkb-container">
            <div className="pkbImg-container">
                <div className="pkbBtn-container">
                    <button className={`pkb-btn ${loadingPkm && 'pkbBtn-animation'}`} onClick={togglePkbBtn}/>
                </div>
            </div>
            
        </div>
    )
}

export default PkbBtn


//<button className="btnShowContainer" onClick={togglePkbBtn} style={pkbBtnOn? {backgroundColor : 'grey'} : null}/>