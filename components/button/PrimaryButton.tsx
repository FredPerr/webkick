import { Button, styled } from '@nextui-org/react'

export default styled(Button, {
    borderRadius: '1px',
    bgColor: '$primary',
    fontWeight: 600,
    color: {
        primary: {
            backgroud: '$primary',
            color: '#FFFFFF',
            borderRadius: '3px',
        },
    },
})
