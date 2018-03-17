import React from 'react'
import PropTypes from 'prop-types';

export const Button = ({onClick, children}) => 
    <button
        onClick={onClick} >
        {children}
    </button>

Button.PropTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
}
// class Button extends Component {
//   render() {
//     const {onClick, children} = this.props;
//     return (
//       <button 
//         onClick={onClick}>
//         {children}
//       </button>
//     )
//   }
// }
