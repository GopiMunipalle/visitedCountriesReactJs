import './index.css'

function Countries(props) {
  const {countryDetails, onClickVisitButton} = props
  const {id, name, isVisited} = countryDetails

  const onClickVisit = () => {
    onClickVisitButton(id)
  }

  return (
    <div className="items-card">
      <p className="heading-2">{name}</p>
      {isVisited ? (
        <p className="visited-btn">Visited</p>
      ) : (
        <button
          className="visit-btn"
          onClick={() => onClickVisit(countryDetails.id)}
          type="button"
        >
          Visit
        </button>
      )}
    </div>
  )
}

export default Countries
