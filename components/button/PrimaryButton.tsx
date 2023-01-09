import { Button, styled } from '@nextui-org/react'

export default styled(Button, {
    borderRadius: '3px',
    bgColor: '$primary',
    fontWeight: 600,
    zIndex: 1,
    colors: {
        primary: {
            backgroud: '$primary',
            color: '#FFFFFF',
        },
    },
})
