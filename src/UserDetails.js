import PropTypes from 'prop-types'
export const UserDetails = ({ name, age, children, displayName }) => {
    // console.log({props});
    return (
        <div>
            <h1>Name : {name}</h1>
            <h1>Age : {age}</h1>
            {children}
            <button onClick={displayName}>Say hi</button>
            <button onClick={() => displayName("Swaraj")}>Say hi Swaraj</button>
        </div>
    )
}

UserDetails.defaultProps = {
    name: 'Swaraj',
    age: 23
}

UserDetails.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
}
