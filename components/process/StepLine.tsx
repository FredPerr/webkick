function HorizontalLine() {
    return (
        <svg height={3}>
            <line
                x1="510"
                y1="0"
                x2="0"
                y2="0"
                stroke="#333333"
                stroke-width="6"
                stroke-linecap="round"
                stroke-dasharray="30 30"
            />
        </svg>
    )
}

function VerticalLine() {
    return (
        <svg width={3}>
            <line
                x1="0"
                y1="0"
                x2="0"
                y2="300"
                stroke="#333333"
                stroke-width="6"
                stroke-linecap="round"
                stroke-dasharray="30 30"
            />
        </svg>
    )
}

export { HorizontalLine, VerticalLine }
