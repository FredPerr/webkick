export default function Blob1Svg() {
  return (
    <svg
      width="300"
      height="300"
      viewBox="0 0 1000 1000"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <defs>
        <radialGradient id="radialGradientId" r="100%" cx="50%" cy="50%">
          <stop offset="0%" stop-color="#4158D0" />
          <stop offset="50%" stop-color="#C850C0" />
          <stop offset="100%" stop-color="#ffcc70" />
        </radialGradient>

        <clipPath id="shape">
          <path
            fill="currentColor"
            d="M920,630.5Q859,761,728,780Q597,799,495.5,812.5Q394,826,285.5,780.5Q177,735,189.5,617.5Q202,500,157,359Q112,218,233,135Q354,52,490.5,80Q627,108,744.5,172.5Q862,237,921.5,368.5Q981,500,920,630.5Z"
          ></path>
        </clipPath>
      </defs>

      <g clipPath="url(#shape)">
        <path
          fill="url(#radialGradientId)"
          d="M920,630.5Q859,761,728,780Q597,799,495.5,812.5Q394,826,285.5,780.5Q177,735,189.5,617.5Q202,500,157,359Q112,218,233,135Q354,52,490.5,80Q627,108,744.5,172.5Q862,237,921.5,368.5Q981,500,920,630.5Z"
        />
      </g>
    </svg>
  )
}
