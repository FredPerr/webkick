import LogoAnimated from './LogoAnimated'
import Box from '../box'
import { TextAppearAnimation } from '@/styles/LogoAnimated'

export default function LogoTextAnimated(props: { size: number }) {
    return (
        <Box css={{ dflex: 'center' }}>
            <LogoAnimated size={props.size} />
            <svg
                width={(props.size * 7.01) / 1.33}
                height={props.size / 1.33}
                style={{ marginLeft: 5 }}
                viewBox="0 0 1311 187"
            >
                <path
                    style={{
                        animation: `${TextAppearAnimation} 0.7s cubic-bezier(0.76, 1.01, 0.88, 0.89) forwards`,
                        animationDelay: '0.8s',
                        clipPath: 'circle(0% at left center)',
                    }}
                    fillRule="evenodd"
                    d="M1204.23 112.698L1180.21 137.764V183H1139V3.79999H1180.21V87.4241L1259.57 3.79999H1305.65L1231.46 83.64L1310.01 183H1261.62L1204.23 112.698ZM986.064 116.696C983.333 109.699 981.968 101.933 981.968 93.4C981.968 84.8667 983.333 77.1013 986.064 70.104C988.965 63.1067 992.976 57.048 998.096 51.928C1003.22 46.808 1009.27 42.8827 1016.27 40.152C1023.27 37.4213 1030.95 36.056 1039.31 36.056C1048.19 36.056 1056.38 37.848 1063.89 41.432C1070.38 44.3852 1076.37 48.6797 1081.85 54.3157C1082.7 55.1939 1083.54 56.1047 1084.37 57.048L1110.99 32.472C1108.91 29.9313 1106.7 27.5431 1104.38 25.3074C1101.39 22.4396 1098.21 19.8226 1094.82 17.4565C1090.03 14.1088 1084.84 11.2633 1079.25 8.92C1066.79 3.45866 1052.79 0.727997 1037.26 0.727997C1023.27 0.727997 1010.38 3.03199 998.608 7.63998C986.832 12.0773 976.507 18.4773 967.632 26.84C958.928 35.2027 952.101 45.016 947.152 56.28C942.373 67.544 939.984 79.9173 939.984 93.4C939.984 106.883 942.373 119.256 947.152 130.52C952.101 141.784 958.928 151.597 967.632 159.96C976.336 168.323 986.576 174.808 998.352 179.416C1010.3 183.853 1023.18 186.072 1037.01 186.072C1052.71 186.072 1066.79 183.341 1079.25 177.88C1084.86 175.453 1090.07 172.537 1094.87 169.132C1098.19 166.78 1101.32 164.194 1104.25 161.374C1106.62 159.093 1108.87 156.659 1110.99 154.072L1084.37 129.496C1083.13 130.946 1081.85 132.322 1080.56 133.625C1075.43 138.765 1069.88 142.765 1063.89 145.624C1056.38 149.037 1048.19 150.744 1039.31 150.744C1030.95 150.744 1023.27 149.379 1016.27 146.648C1009.27 143.917 1003.22 139.992 998.096 134.872C992.976 129.752 988.965 123.693 986.064 116.696ZM634.65 102.348C636.217 104.014 637.642 105.811 638.926 107.736C643.875 114.904 646.35 123.693 646.35 134.104C646.35 149.464 640.291 161.496 628.174 170.2C616.057 178.733 598.222 183 574.67 183H481.998V3.79999H569.55C592.078 3.79999 608.974 8.06666 620.238 16.6C631.673 25.1333 637.39 36.3973 637.39 50.392C637.39 59.0304 635.439 66.6569 631.536 73.2717C631.198 73.8447 630.845 74.4102 630.478 74.968C628.051 78.5626 625.152 81.7314 621.779 84.4742C621.709 84.5309 621.64 84.5874 621.57 84.6437C619.202 86.5461 616.603 88.241 613.774 89.7283C615.46 90.2915 617.102 90.918 618.702 91.608C625.068 94.2293 630.384 97.8091 634.65 102.348ZM595.704 112.632C601.336 116.216 604.152 121.763 604.152 129.272C604.152 136.952 601.336 142.584 595.704 146.168C590.243 149.581 582.136 151.288 571.384 151.288H523V107H571.384C582.136 107 590.243 108.877 595.704 112.632ZM587.505 40.341C582.659 36.7803 575.467 35 565.927 35H523V77H565.927C575.467 77 582.659 75.3815 587.505 72.1445C592.502 68.7457 595 63.4046 595 56.1214C595 49 592.502 43.7399 587.505 40.341ZM867.248 183H908.72V3.79999H867.248V183ZM770.214 83.64L848.756 183H800.372L742.977 112.698L718.964 137.764V183H677.748V3.79999H718.964V87.4241L798.324 3.79999H844.404L770.214 83.64ZM351.464 149.72V108.248H434.664V75.992L351.464 77.272V37.08H445.672V3.79999H310.248V183H449V149.72H351.464ZM103.8 183H59.2558L0.631836 3.79999H43.6398L84.0696 129.762L126.328 3.79999H164.728L205.663 130.697L247.416 3.79999H287.096L228.472 183H183.928L144.422 61.5804L103.8 183Z"
                    fill="#1877F2"
                />
            </svg>
        </Box>
    )
}
