import PropTypes from "prop-types"

const Logo = ({ width, fill }) => {
  return (
    <svg
      width={width}
      version='1.1'
      viewBox='0 0 191.94 249.2'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsCc='http://creativecommons.org/ns#'
      xmlnsDc='http://purl.org/dc/elements/1.1/'
      xmlnsRdf='http://www.w3.org/1999/02/22-rdf-syntax-ns#'
    >
      <g transform='translate(-10.13 -26.031)'>
        <path
          transform='scale(.26458)'
          d='m400.02 98.387c-49.545 155.37-261.78 256.64-335.99 444.82l56.332 56.441c48.569-166.4 200.04-245.77 280.26-348.86 113.28 122.07 262.19 232.43 288.31 382.35h71.961c-32.243-246.91-329.84-388.08-360.87-534.75zm-352.09 496.29c-6.2022 26.553-9.6428 54.773-9.6426 84.982 0.3659 190.92 147.92 360.74 364.86 360.57 215.5-0.1633 360.7-185.17 360.59-357.14h-70.822c-0.73497 212.52-179.99 297.36-292.11 295.67-191.68 2.1509-293.33-157.77-294.8-297.43 0.61683-8.8984 1.5034-17.579 2.6406-26.057z'
          fill={fill || "#639"}
        />
      </g>
      <g transform='translate(-10.13 -26.031)'>
        <path
          d='m161.16 140.6c-39.702-51.152-112.55-25.95-121.99 25.397 28.127 28.402 55.383 55.695 81.585 81.743 44.788-10.202 55.414-52.406 53.187-66.464-9.8078-0.0654-43.314-0.20365-43.314-0.20365l-0.13593 12.879s23.764-0.18319 29.834-0.20362c-9.2406 32.921-35.901 39.807-35.901 39.807s-30.49-29.751-71.594-71.836c21.082-47.585 76.251-44.296 98.796-12.766 3.7408-3.0178 5.3949-4.63 9.5376-8.3525z'
          fill={fill || "#639"}
        />
        <path
          d='m37.437 181.95 67.46 67.435s-25.489 1.7841-47.658-19.799c-22.169-21.583-19.802-47.636-19.802-47.636z'
          fill={fill || "#009cde"}
        />
      </g>
    </svg>
  )
}

Logo.propTypes = {
  width: PropTypes.number,
  fill: PropTypes.string,
}

Logo.defaultProps = {
  width: 200,
  fill: null,
}
export default Logo