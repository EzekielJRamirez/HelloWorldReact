import PropTypes from 'prop-types'

function Header() {
    const headerStyles = {
        backgroundColor: 'red',
        color: 'green'
    }

    return (
        <header style={headerStyles}>
            <div className='container'>
                <h1>Monday-Wednesday</h1>
            </div>
        </header>
    )
}

export default Header
