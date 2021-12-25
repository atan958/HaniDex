const PkbBtn = ({ clicked, toggleShowContainer }) => {

    return (
        <div className="pkb-container">
            <div className="pkbImg-container">
                <div className="pkbBtn-container">
                    <button className="btnShowContainer" onClick={toggleShowContainer} style={clicked? {backgroundColor : 'red'} : null}/>
                </div>
            </div>
            
        </div>
    )
}

export default PkbBtn
