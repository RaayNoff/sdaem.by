export enum localSVG {
	MARKER_BLACK = "MARKER_BLACK",
	MARKER_ORANGE = "MARKER_ORANGE",
	ACCOUNT_CHEVRON = "ACCOUNT_CHEVRON",
	INST = "INST",
	VK = "VK",
	FACEBOOK = "FACEBOOK",
	BREADCRUMB_HOME = "BREADCRUMB_HOME",
	BREADCUMB_DOT = "BREADCUMB_DOT",
	LOUPE = "LOUPE",
}

export const SVGSelector = (svg: localSVG) => {
	switch (svg) {
		case localSVG.MARKER_BLACK:
			return (
				<svg
					width="9"
					height="10"
					viewBox="0 0 9 10"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M7.43806 1.74419C6.7055 0.627907 5.4962 0 4.13573 0C2.7869 0 1.5776 0.627907 0.821781 1.74419C0.0659671 2.83721 -0.108452 4.23256 0.356665 5.45349C0.484572 5.77907 0.682246 6.11628 0.93806 6.4186L3.87992 9.88372C3.94969 9.95349 4.01946 10 4.12411 10C4.22876 10 4.29853 9.95349 4.36829 9.88372L7.32178 6.4186C7.5776 6.11628 7.7869 5.7907 7.90318 5.45349C8.36829 4.23256 8.19387 2.83721 7.43806 1.74419ZM4.13573 5.86047C3.13573 5.86047 2.31015 5.03488 2.31015 4.03488C2.31015 3.03488 3.13573 2.2093 4.13573 2.2093C5.13574 2.2093 5.96132 3.03488 5.96132 4.03488C5.96132 5.03488 5.14736 5.86047 4.13573 5.86047Z"
						fill="#1E2123"
					/>
				</svg>
			);
		case localSVG.ACCOUNT_CHEVRON:
			return (
				<svg
					width="18"
					height="18"
					viewBox="0 0 18 18"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M4.5 6.38477L9 10.6415L13.5 6.38477"
						stroke="#4E64F9"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			);

		case localSVG.MARKER_ORANGE:
			return (
				<svg
					width="13"
					height="15"
					viewBox="0 0 13 15"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M11.5074 2.61628C10.4086 0.941861 8.59464 0 6.55394 0C4.53069 0 2.71673 0.941861 1.58301 2.61628C0.449292 4.25581 0.187664 6.34884 0.885339 8.18023C1.0772 8.6686 1.37371 9.17442 1.75743 9.62791L6.17022 14.8256C6.27487 14.9302 6.37953 15 6.5365 15C6.69348 15 6.79813 14.9302 6.90278 14.8256L11.333 9.62791C11.7167 9.17442 12.0307 8.68605 12.2051 8.18023C12.9028 6.34884 12.6412 4.25581 11.5074 2.61628ZM6.55394 8.7907C5.05394 8.7907 3.81557 7.55233 3.81557 6.05233C3.81557 4.55233 5.05394 3.31395 6.55394 3.31395C8.05394 3.31395 9.29232 4.55233 9.29232 6.05233C9.29232 7.55233 8.07139 8.7907 6.55394 8.7907Z"
						fill="#FFD54F"
					/>
				</svg>
			);

		case localSVG.INST:
			return (
				<svg
					width="31"
					height="31"
					viewBox="0 0 31 31"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M15.8054 9.56142C12.4802 9.56142 9.79665 12.245 9.79665 15.5702C9.79665 18.8954 12.4802 21.579 15.8054 21.579C19.1306 21.579 21.8142 18.8954 21.8142 15.5702C21.8142 12.245 19.1306 9.56142 15.8054 9.56142ZM15.8054 19.4755C13.655 19.4755 11.9002 17.7206 11.9002 15.5702C11.9002 13.4198 13.655 11.6649 15.8054 11.6649C17.9558 11.6649 19.7107 13.4198 19.7107 15.5702C19.7107 17.7206 17.9558 19.4755 15.8054 19.4755ZM22.0603 7.91493C21.284 7.91493 20.657 8.54189 20.657 9.31825C20.657 10.0946 21.284 10.7216 22.0603 10.7216C22.8367 10.7216 23.4636 10.0976 23.4636 9.31825C23.4639 9.1339 23.4277 8.95132 23.3573 8.78095C23.2868 8.61059 23.1835 8.4558 23.0531 8.32544C22.9228 8.19509 22.768 8.09173 22.5976 8.02128C22.4273 7.95084 22.2447 7.9147 22.0603 7.91493ZM27.5183 15.5702C27.5183 13.953 27.533 12.3505 27.4422 10.7362C27.3513 8.86122 26.9236 7.19716 25.5525 5.82607C24.1785 4.45204 22.5173 4.02724 20.6423 3.93642C19.0252 3.8456 17.4226 3.86025 15.8084 3.86025C14.1912 3.86025 12.5886 3.8456 10.9744 3.93642C9.09938 4.02724 7.43532 4.45497 6.06423 5.82607C4.6902 7.20009 4.2654 8.86122 4.17458 10.7362C4.08376 12.3534 4.09841 13.956 4.09841 15.5702C4.09841 17.1845 4.08376 18.7899 4.17458 20.4042C4.2654 22.2792 4.69313 23.9433 6.06423 25.3144C7.43825 26.6884 9.09938 27.1132 10.9744 27.204C12.5916 27.2948 14.1941 27.2802 15.8084 27.2802C17.4256 27.2802 19.0281 27.2948 20.6423 27.204C22.5173 27.1132 24.1814 26.6854 25.5525 25.3144C26.9265 23.9403 27.3513 22.2792 27.4422 20.4042C27.5359 18.7899 27.5183 17.1874 27.5183 15.5702ZM24.9402 22.4784C24.7263 23.0116 24.4685 23.4101 24.0554 23.8202C23.6423 24.2333 23.2468 24.4911 22.7136 24.705C21.1726 25.3173 17.5134 25.1796 15.8054 25.1796C14.0974 25.1796 10.4353 25.3173 8.8943 24.7079C8.3611 24.494 7.96266 24.2362 7.55251 23.8231C7.13942 23.4101 6.88161 23.0145 6.66774 22.4813C6.05837 20.9374 6.19606 17.2782 6.19606 15.5702C6.19606 13.8622 6.05837 10.2001 6.66774 8.65908C6.88161 8.12587 7.13942 7.72743 7.55251 7.31728C7.96559 6.90712 8.3611 6.64638 8.8943 6.43251C10.4353 5.82314 14.0974 5.96083 15.8054 5.96083C17.5134 5.96083 21.1756 5.82314 22.7166 6.43251C23.2498 6.64638 23.6482 6.90419 24.0584 7.31728C24.4715 7.73036 24.7293 8.12587 24.9431 8.65908C25.5525 10.2001 25.4148 13.8622 25.4148 15.5702C25.4148 17.2782 25.5525 20.9374 24.9402 22.4784Z"
						fill="#1E2123"
					/>
				</svg>
			);
		case localSVG.VK:
			return (
				<svg
					width="31"
					height="31"
					viewBox="0 0 31 31"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M27.2554 9.26839C27.4231 8.72142 27.2554 8.32031 26.4625 8.32031H23.836C23.1676 8.32031 22.8622 8.66731 22.6946 9.04843C22.6946 9.04843 21.3591 12.2467 19.4668 14.3205C18.8559 14.9239 18.5769 15.1145 18.2439 15.1145C18.0774 15.1145 17.8355 14.9239 17.8355 14.3769V9.26839C17.8355 8.61203 17.6427 8.32031 17.0857 8.32031H12.9585C12.5417 8.32031 12.2902 8.62379 12.2902 8.91315C12.2902 9.53423 13.2363 9.67773 13.3333 11.428V15.225C13.3333 16.0567 13.1812 16.2084 12.8459 16.2084C11.956 16.2084 9.79056 12.9983 8.50543 9.32367C8.25511 8.60968 8.0024 8.32149 7.33169 8.32149H4.70633C3.95538 8.32149 3.80566 8.66849 3.80566 9.0496C3.80566 9.73419 4.69555 13.1219 7.9509 17.6023C10.1211 20.6618 13.1765 22.3203 15.9599 22.3203C17.6283 22.3203 17.8343 21.9521 17.8343 21.317V19.0044C17.8343 18.2681 17.9936 18.1198 18.5218 18.1198C18.9098 18.1198 19.5781 18.3128 21.1363 19.7866C22.9161 21.5346 23.2108 22.3191 24.2108 22.3191H26.8362C27.586 22.3191 27.9608 21.951 27.7452 21.224C27.5093 20.5006 26.6589 19.4479 25.5307 18.2022C24.9175 17.4917 24.0012 16.7271 23.7222 16.3448C23.3329 15.852 23.4455 15.6344 23.7222 15.1968C23.7234 15.198 26.9224 10.7728 27.2554 9.26839V9.26839Z"
						fill="#1E2123"
					/>
				</svg>
			);
		case localSVG.FACEBOOK:
			return (
				<svg
					width="31"
					height="31"
					viewBox="0 0 31 31"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M15.8047 5.32031C10.2827 5.32031 5.80566 9.79731 5.80566 15.3193C5.80566 20.3093 9.46166 24.4453 14.2427 25.1983V18.2103H11.7027V15.3193H14.2427V13.1163C14.2427 10.6083 15.7357 9.22531 18.0187 9.22531C19.1127 9.22531 20.2587 9.42031 20.2587 9.42031V11.8793H18.9947C17.7547 11.8793 17.3667 12.6513 17.3667 13.4423V15.3173H20.1377L19.6947 18.2083H17.3667V25.1963C22.1477 24.4473 25.8037 20.3103 25.8037 15.3193C25.8037 9.79731 21.3267 5.32031 15.8047 5.32031V5.32031Z"
						fill="#1E2123"
					/>
				</svg>
			);

		case localSVG.BREADCRUMB_HOME:
			return (
				<svg
					width="12"
					height="12"
					viewBox="0 0 12 12"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clipPath="url(#clip0_305_2083)">
						<path
							d="M11.7985 5.36427L6.41446 0.458394C6.17814 0.243027 5.82177 0.243051 5.58554 0.458371L0.201516 5.3643C0.0122119 5.5368 -0.0503192 5.80258 0.042165 6.04138C0.134673 6.28019 0.359907 6.43448 0.616008 6.43448H1.47593V11.3498C1.47593 11.5447 1.63394 11.7027 1.82883 11.7027H4.77993C4.97481 11.7027 5.13283 11.5447 5.13283 11.3498V8.36537H6.86724V11.3498C6.86724 11.5447 7.02526 11.7027 7.22014 11.7027H10.1711C10.366 11.7027 10.524 11.5447 10.524 11.3498V6.43448H11.3841C11.6402 6.43448 11.8654 6.28016 11.9579 6.04138C12.0503 5.80256 11.9878 5.5368 11.7985 5.36427Z"
							fill="#664EF9"
						/>
						<path
							d="M10.4317 1.00195H8.06177L10.7846 3.47779V1.35483C10.7846 1.15995 10.6266 1.00195 10.4317 1.00195Z"
							fill="#664EF9"
						/>
					</g>
					<defs>
						<clipPath id="clip0_305_2083">
							<rect width="12" height="12" fill="white" />
						</clipPath>
					</defs>
				</svg>
			);

		case localSVG.BREADCUMB_DOT:
			return (
				<svg
					width="3"
					height="4"
					viewBox="0 0 3 4"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle cx="1.5" cy="2" r="1.5" fill="#664EF9" />
				</svg>
			);
		case localSVG.LOUPE:
			return (
				<svg
					width="18"
					height="18"
					viewBox="0 0 18 18"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M16.8676 15.2581L13.5441 11.9344C13.3941 11.7844 13.1907 11.7011 12.9774 11.7011H12.434C13.3541 10.5243 13.9008 9.04417 13.9008 7.43401C13.9008 3.60364 10.7973 0.5 6.96711 0.5C3.13693 0.5 0.0334473 3.60364 0.0334473 7.43401C0.0334473 11.2644 3.13693 14.368 6.96711 14.368C8.57718 14.368 10.0573 13.8213 11.234 12.9012V13.4446C11.234 13.658 11.3173 13.8613 11.4673 14.0113L14.7908 17.335C15.1042 17.6483 15.6108 17.6483 15.9209 17.335L16.8642 16.3916C17.1776 16.0782 17.1776 15.5715 16.8676 15.2581ZM6.96711 11.7011C4.61033 11.7011 2.70024 9.79424 2.70024 7.43401C2.70024 5.07711 4.607 3.16693 6.96711 3.16693C9.32388 3.16693 11.234 5.07378 11.234 7.43401C11.234 9.79091 9.32722 11.7011 6.96711 11.7011Z"
						fill="white"
					/>
				</svg>
			);

		default:
			return <></>;
	}
};