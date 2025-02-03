import PropTypes from 'prop-types'

Titles.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
};

function Titles(props) {
    return (
        <div className="container-htu">
            <h1 className="titles">{props.title}</h1>
            <h2 className="subtitles">{props.subtitle}</h2>
        </div>
    );
}

export default Titles;
