import colorNames from "colornames"

const InColor = ({ 
    value, setValue,setHexValue ,isDarkText, setIsDarkText
}) => { 
  return (
        <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="InputColor" className="form-label">Color</label>
            <input 
            autoFocus
            type="text" 
            className="form-control" 
            placeholder="Add a color"
            required
            value={value}
            onChange={(e) => {
                setValue(e.target.value)
                setHexValue(colorNames(e.target.value))
            }}
            />
            <button
                type="button"
                onClick={() => setIsDarkText(!isDarkText)}
            >
                Toggle Text Color
            </button>
        </form>

  )
}

export default InColor