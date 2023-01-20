export default function ScreenMockup() {
  return (
    <div
      css={{
        background:
          'linear-gradient(hsla(0,0%,100%,.4),hsla(0,0%,100%,.3) 25%,rgba(246,249,252,.3) 50%,#f6f9fc 60%)',
        width: 800,
        height: 500,
        borderRadius: 10,
        overflow: 'hidden',
        position: 'absolute',
        left: '35%',
        transform: 'translateY(-50%)',
        boxShadow: '0 40px 50px 12px rgba(0, 0, 0, 0.11)',
      }}
    ></div>
  )
}
