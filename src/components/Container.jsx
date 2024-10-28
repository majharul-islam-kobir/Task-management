/* eslint-disable react/prop-types */

function Container(props) {
  return (
    <div className={`w-11/12 m-auto px-2 ${props.className}`}>{props.children}</div>
  )
}

export default Container