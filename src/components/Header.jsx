import PropTypes from 'prop-types'

function Header({ text, bgColor, textColor }) {

  return (
    <header style={{ backgroundColor: textColor, color: bgColor }}>
      <div className="container">
        <h2>Feedback UI</h2>
      </div>
    </header>
  )
}

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
}

export default Header