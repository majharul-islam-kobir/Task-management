/* eslint-disable react/prop-types */

function Container(props) {
  return (
    <div className={`max-w-screen-lg m-auto px-2 ${props.className}`}>{props.children}</div>
  )
}

export default Container