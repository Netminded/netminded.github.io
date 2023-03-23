import * as React from 'react'

const StatusCircle = ({greenCircle, amberCircle, redCircle}) => {
    if (greenCircle) {
        return (
            <svg viewBox="0 0 138 138" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="CircleOne">
                <g id="Group 64">
                <circle id="CircleOneWaveTwo" cx="69" cy="69" r="67.5" stroke="#77DF81" strokeOpacity="0.2" strokeWidth="3"/>
                <circle id="CircleOneWaveOne" cx="69" cy="69" r="57.5" stroke="#77DF81" strokeOpacity="0.5" strokeWidth="3"/>
                <circle id="CircleOneCenter" cx="69" cy="69" r="49" fill="#77DF81"/>
                </g>
                <g id="&#239;&#149;&#132;" filter="url(#filter0_d_22_3)">
                <path d="M41.5586 63.7734C41.0195 64.3125 40.75 65.0312 40.75 65.75V77.25C40.75 78.0586 41.0195 78.7773 41.5586 79.3164C42.0977 79.8555 42.8164 80.125 43.625 80.125H46.5V62.875H43.625C42.8164 62.875 42.0977 63.2344 41.5586 63.7734ZM82.4375 51.375H72.375V45.625C72.375 44.0977 71.0273 42.75 69.5 42.75C67.8828 42.75 66.625 44.0977 66.625 45.625V51.375H56.5625C52.5195 51.375 49.375 54.6094 49.375 58.5625V83C49.375 86.2344 51.8906 88.75 55.125 88.75H83.875C87.0195 88.75 89.625 86.2344 89.625 83V58.5625C89.625 54.6094 86.3906 51.375 82.4375 51.375ZM63.75 80.125H58V77.25H63.75V80.125ZM60.875 69.3438C58.8086 69.3438 57.2812 67.8164 57.2812 65.75C57.2812 63.7734 58.8086 62.1562 60.875 62.1562C62.8516 62.1562 64.4688 63.7734 64.4688 65.75C64.4688 67.8164 62.8516 69.3438 60.875 69.3438ZM72.375 80.125H66.625V77.25H72.375V80.125ZM81 80.125H75.25V77.25H81V80.125ZM78.125 69.3438C76.0586 69.3438 74.5312 67.8164 74.5312 65.75C74.5312 63.7734 76.0586 62.1562 78.125 62.1562C80.1016 62.1562 81.7188 63.7734 81.7188 65.75C81.7188 67.8164 80.1016 69.3438 78.125 69.3438ZM97.3516 63.7734C96.8125 63.2344 96.0938 62.875 95.375 62.875H92.5V80.125H95.375C96.0938 80.125 96.8125 79.8555 97.3516 79.3164C97.8906 78.7773 98.25 78.0586 98.25 77.25V65.75C98.25 65.0312 97.8906 64.3125 97.3516 63.7734Z" fill="white"/>
                </g>
                </g>
                <defs>
                <filter id="filter0_d_22_3" x="32.75" y="38.75" width="73.5" height="62" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="4"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.181552 0 0 0 0 0.335174 0 0 0 0 0.4625 0 0 0 0.4 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_22_3"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_22_3" result="shape"/>
                </filter>
                </defs>
            </svg>
        )
    }
    if(amberCircle) {
        return (
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="CircleTwo">
                <g id="Group 62">
                <circle id="CircleTwoWaveTwo" cx="50" cy="50" r="48.5" stroke="#FFB74D" strokeOpacity="0.2" strokeWidth="3"/>
                <circle id="CircleTwoWaveOne" cx="50" cy="50" r="41.2536" stroke="#FFB74D" strokeOpacity="0.5" strokeWidth="3"/>
                <circle id="CircleTwoCenter" cx="50.3623" cy="49.6377" r="35.1449" fill="#FFB74D"/>
                </g>
                <g id="&#239;&#150;&#184;" filter="url(#filter0_d_22_2)">
                <path d="M34.5 49.75C34.5 41.4883 41.1797 34.75 49.5 34.75C57.7617 34.75 64.5 41.4883 64.5 49.75C64.5 58.0703 57.7617 64.75 49.5 64.75C41.1797 64.75 34.5 58.0703 34.5 49.75ZM44.1094 53.8516C43.7578 53.4414 43.1719 53.4414 42.7617 53.7344C42.3516 54.0859 42.3516 54.6719 42.6445 55.082C43.9922 56.6055 46.2188 58.1875 49.4414 58.1875C52.7227 58.1875 54.9492 56.6055 56.2969 55.082C56.5898 54.6719 56.5898 54.0859 56.1797 53.7344C55.7695 53.4414 55.1836 53.4414 54.832 53.8516C53.7773 55.082 52.0195 56.3125 49.4414 56.3125C46.9219 56.3125 45.1641 55.082 44.1094 53.8516ZM47.7422 48.3438C47.918 48.2852 48.0938 48.1094 48.0938 47.875C48.0938 46.8789 47.6836 45.8242 47.0977 45.0625C46.5117 44.3008 45.6914 43.6562 44.8125 43.6562C43.875 43.6562 43.0547 44.3008 42.4688 45.0625C41.8828 45.8242 41.5312 46.8789 41.5312 47.875C41.5312 48.1094 41.6484 48.2852 41.8242 48.3438C42 48.4023 42.2344 48.3438 42.3516 48.168C42.3516 48.168 42.3516 48.1094 42.4102 48.1094C42.4102 48.0508 42.4688 47.9922 42.5859 47.9336C42.7031 47.7578 42.9375 47.5234 43.1719 47.2891C43.6992 46.8789 44.2852 46.4688 44.8125 46.4688C45.2812 46.4688 45.8672 46.8789 46.3945 47.2891C46.6289 47.5234 46.8633 47.7578 46.9805 47.9336C47.0977 47.9922 47.1562 48.0508 47.1562 48.1094C47.2148 48.1094 47.2148 48.168 47.2148 48.168C47.332 48.3438 47.5664 48.4023 47.7422 48.3438ZM56.5898 48.168C56.707 48.3438 56.9414 48.4023 57.1172 48.3438C57.293 48.2852 57.4688 48.1094 57.4688 47.875C57.4688 46.8789 57.0586 45.8242 56.4727 45.0625C55.8867 44.3008 55.0664 43.6562 54.1875 43.6562C53.25 43.6562 52.4297 44.3008 51.8438 45.0625C51.2578 45.8242 50.9062 46.8789 50.9062 47.875C50.9062 48.1094 51.0234 48.2852 51.1992 48.3438C51.375 48.4023 51.6094 48.3438 51.7266 48.168C51.7266 48.168 51.7266 48.1094 51.7852 48.1094C51.7852 48.0508 51.8438 47.9922 51.9609 47.9336C52.0781 47.7578 52.3125 47.5234 52.5469 47.2891C53.0742 46.8789 53.6602 46.4688 54.1875 46.4688C54.6562 46.4688 55.2422 46.8789 55.7695 47.2891C56.0039 47.5234 56.2383 47.7578 56.3555 47.9336C56.4727 47.9922 56.5312 48.0508 56.5312 48.1094C56.5898 48.1094 56.5898 48.168 56.5898 48.168Z" fill="white"/>
                </g>
                </g>
                <defs>
                <filter id="filter0_d_22_2" x="26.5" y="30.75" width="46" height="46" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="4"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.181552 0 0 0 0 0.335174 0 0 0 0 0.4625 0 0 0 0.4 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_22_2"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_22_2" result="shape"/>
                </filter>
                </defs>
            </svg>
        )
    }
    if(redCircle) {
        return (
            <svg viewBox="0 0 123 123" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="CircleThree">
                <g id="Group 61">
                <circle id="CircleThreeWaveTwo" cx="61.5" cy="61.5" r="60" stroke="#F3693D" strokeOpacity="0.2" strokeWidth="3"/>
                <circle id="CircleThreeWaveOne" cx="61.5" cy="61.5" r="51.087" stroke="#F3693D" strokeOpacity="0.5" strokeWidth="3"/>
                <circle id="CircleThreeCenter" cx="61.5" cy="61.5" r="43.6739" fill="#F3693D"/>
                </g>
                <g id="&#239;&#147;&#188;" filter="url(#filter0_d_22_4)">
                <path d="M63.1335 63.9688H55.712C48.658 63.9688 43 69.6055 43 76.543C43 77.916 44.1022 79 45.4983 79H73.3472C74.7434 79 75.919 77.916 75.919 76.543C75.919 69.6055 70.1876 63.9688 63.1335 63.9688ZM59.4595 60.5C64.6031 60.5 68.865 56.3809 68.865 51.25C68.865 46.1914 64.6031 42 59.4595 42C54.2424 42 50.0541 46.1914 50.0541 51.25C50.0541 56.3809 54.2424 60.5 59.4595 60.5ZM89.4394 51.7559C88.7046 51.1055 87.6024 51.1055 86.941 51.8281L80.5483 58.6211L77.6826 55.875C77.0212 55.1523 75.919 55.1523 75.2577 55.875C74.5229 56.5254 74.5229 57.6094 75.2577 58.2598L79.3726 62.3066C79.6665 62.668 80.1074 62.8125 80.6218 62.8125C81.0626 62.8125 81.577 62.668 81.8709 62.3066L89.5128 54.2129C90.1742 53.4902 90.1742 52.4063 89.4394 51.7559Z" fill="white"/>
                </g>
                </g>
                <defs>
                <filter id="filter0_d_22_4" x="35" y="38" width="63" height="53" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="4"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.181552 0 0 0 0 0.335174 0 0 0 0 0.4625 0 0 0 0.4 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_22_4"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_22_4" result="shape"/>
                </filter>
                </defs>
            </svg>
        )
    }
}

export default StatusCircle