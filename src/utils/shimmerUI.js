const ShimmerUI = ({message}) => {
    return(
        <>
        {!message && <div className="shimmer-ui-container">
            <div className="shimmer-ui-card"></div>
            <div className="shimmer-ui-card"></div>
            <div className="shimmer-ui-card"></div>
        </div>}
        {message && <div className="shimmer-ui-container">
            <div className="shimmer-ui-card">{message}</div>
        </div>}
        </>
        
    )
}
export default ShimmerUI