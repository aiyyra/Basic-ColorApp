const OutColor = ({ value,hexValue,isDarkText }) => {
  return (
    <section
        className="square"
        style={{
            backgroundColor: value,
            color: isDarkText ? "#000" : "#FFF"
        }}
    >
        <p>{value ? value : "Empty value"}</p>
        <p>{hexValue ? hexValue : null}</p>
    </section>
  )
}

OutColor.defaultProps = {
    value: "Empty Color Value"
}

export default OutColor