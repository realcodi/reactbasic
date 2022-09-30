import PropTypes from 'prop-types';
export default function Hello(props) {
    return <div>Hello, {props.name}!!</div>
}
Hello.propTypes = {
    name : PropTypes.string
};

