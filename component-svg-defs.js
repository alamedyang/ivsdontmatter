Vue.component('svg-defs', {
	template:
	/* html */
	`
	<svg
		xmlns="http://www.w3.org/2000/svg"
		style="display: none;"
	>
		<defs>
			<rect id="rounded_rect_button_base"
				width="1"
				height="1"
				rx="0.2"
			/>
			<ellipse id="circle_button_base"
				rx="0.5" ry="0.5" cx="0.5" cy="0.5"
			/>
			<g id="icon_research" transform="scale(0.013888888888889)">
				<path class="st0" d="M49.58,37.05c-4.82,0-8.73,3.91-8.73,8.73c0,4.82,3.91,8.73,8.73,8.73c4.82,0,8.73-3.91,8.73-8.73
					C58.31,40.96,54.4,37.05,49.58,37.05z M49.46,52.33c-1.28,0-2.52-0.36-3.6-1.05c-0.32-0.21-0.42-0.63-0.21-0.96
					c0.21-0.32,0.63-0.42,0.96-0.21c0.85,0.54,1.84,0.83,2.85,0.83c2.92,0,5.29-2.37,5.29-5.29c0-0.9-0.23-1.79-0.67-2.57
					c-0.19-0.33-0.07-0.76,0.27-0.94c0.33-0.19,0.76-0.07,0.94,0.27c0.55,0.99,0.84,2.11,0.84,3.25
					C56.13,49.33,53.14,52.33,49.46,52.33z"/>
				<path class="st0" d="M62.86,41.8c-0.01-0.04-0.03-0.08-0.04-0.11c-0.02-0.05-2.31-5.03-3.83-8.59l-0.33-0.77
					c-1.42-3.36-2.55-6.01-3.85-7.58c-1.15-1.38-2.52-2.34-3.96-2.96c-0.16-1.13-0.66-3.77-2.12-5.02c-1.75-1.5-3.28-1.67-5.87-1.49
					c-2.74,0.2-4.86,3.01-4.85,5.3c0,0.86,0.32,2.37,0.5,3.16c-1.14,1.07-1.97,2.25-2.51,3.17c-0.54-0.91-1.37-2.09-2.51-3.17
					c0.18-0.79,0.5-2.3,0.5-3.16c0-2.29-2.11-5.1-4.85-5.3c-2.58-0.19-4.12-0.01-5.87,1.49c-1.46,1.25-1.96,3.88-2.12,5.02
					c-1.45,0.62-2.81,1.58-3.96,2.96c-1.31,1.56-2.43,4.22-3.85,7.58l-0.33,0.77c-1.51,3.56-3.8,8.54-3.83,8.59
					c-0.02,0.04-0.03,0.07-0.04,0.11c-0.39,1.29-0.59,2.62-0.59,3.98c0,7.56,6.15,13.71,13.71,13.71c4.34,0,8.33-1.99,10.94-5.45
					c1.11-1.47,2.04-3.1,2.79-4.92c0.76,1.82,1.68,3.45,2.79,4.92c2.62,3.47,6.61,5.45,10.94,5.45c7.56,0,13.71-6.15,13.71-13.71
					C63.45,44.42,63.25,43.09,62.86,41.8z M42.98,17.01c2.29-0.16,3.33-0.03,4.62,1.08c0.72,0.61,1.15,1.99,1.38,3.09
					c-3.32-0.78-6.77-0.04-8.96,1.36c-0.15-0.71-0.28-1.51-0.28-1.96C39.74,19.26,41.13,17.14,42.98,17.01z M24.4,18.08
					c1.29-1.1,2.33-1.24,4.62-1.08c1.85,0.13,3.25,2.26,3.24,3.57c0,0.45-0.14,1.24-0.28,1.96c-2.18-1.4-5.64-2.14-8.96-1.36
					C23.25,20.07,23.69,18.7,24.4,18.08z M49.74,57.76c-3.79,0-7.28-1.74-9.56-4.77c-1.43-1.9-2.53-4.08-3.35-6.66
					c-0.11-0.36-0.45-0.6-0.82-0.6s-0.71,0.24-0.82,0.6c-0.82,2.59-1.92,4.76-3.35,6.66c-2.29,3.03-5.77,4.77-9.56,4.77
					c-6.6,0-11.98-5.37-11.98-11.98c0-1.16,0.17-2.32,0.5-3.42c0.26-0.56,2.39-5.2,3.82-8.58L14.94,33c1.37-3.23,2.45-5.78,3.59-7.14
					c4.01-4.79,10.44-3.42,12.83-1.66c2.6,1.91,3.83,4.89,3.84,4.92c0.13,0.33,0.45,0.54,0.8,0.54c0,0,0,0,0,0
					c0.35,0,0.67-0.21,0.8-0.54c0.01-0.03,1.24-3.01,3.84-4.92c2.39-1.76,8.82-3.14,12.83,1.66c1.14,1.37,2.22,3.92,3.59,7.14
					l0.33,0.77c1.44,3.38,3.57,8.02,3.82,8.58c0.33,1.11,0.5,2.26,0.5,3.42C61.71,52.38,56.34,57.76,49.74,57.76z"/>
				<path class="st0" d="M22.42,37.05c-4.82,0-8.73,3.91-8.73,8.73c0,4.82,3.91,8.73,8.73,8.73c4.82,0,8.73-3.91,8.73-8.73
					C31.15,40.96,27.24,37.05,22.42,37.05z M26.14,51.28c-1.07,0.69-2.32,1.05-3.6,1.05c-3.68,0-6.67-2.99-6.67-6.67
					c0-1.14,0.29-2.26,0.84-3.25c0.19-0.33,0.61-0.45,0.94-0.27c0.33,0.19,0.45,0.61,0.27,0.94c-0.44,0.78-0.67,1.67-0.67,2.57
					c0,2.92,2.37,5.29,5.29,5.29c1.01,0,2-0.29,2.85-0.83c0.32-0.21,0.75-0.11,0.96,0.21C26.56,50.64,26.47,51.07,26.14,51.28z"/>
				<path class="st0" d="M36,33.51c-0.48,0-0.87,0.39-0.87,0.87v4.11c0,0.48,0.39,0.87,0.87,0.87s0.87-0.39,0.87-0.87v-4.11
					C36.87,33.9,36.48,33.51,36,33.51z"/>
			</g>
			<g id="icon_shadow" transform="scale(0.013888888888889)">
				<path class="st0" d="M17.92,34.4c0.85-1.84,1.63-3.71,2.35-5.6c0.26-0.67,0.5-1.44,0.21-2.1c-0.59-1.34-2.74-1.45-2.32-3.23
					c0.19-0.81,0.96-1.7,1.43-2.37c1.08-1.54,2.16-3.08,3.24-4.62c-4.41,1.04-8.4,3.68-9.5,8.23c-0.38,1.57-0.69,3.3,0.03,4.74
					c0.34,0.67,0.87,1.21,1.4,1.74C15.82,32.27,16.87,33.33,17.92,34.4z"/>
				<path class="st0" d="M58.65,46.27c0.49,0.94-2.76,5.37-3.51,5.99c-1.71,1.4-3.69,2.19-4.85,4.25c-0.72,1.27-0.95,2.75-1.17,4.2
					c-0.18,1.19-0.36,2.39-0.55,3.58c1.41-1.89,3.33-3.41,5.49-4.34c1.2-0.52,2.55-0.91,3.39-1.91c0.83-1,0.98-2.38,1.1-3.67
					C58.74,52.12,59.73,48.33,58.65,46.27z"/>
				<path class="st0" d="M37.51,41.96l-0.06-0.02h-4.72v2.78h4.71l0.05-0.02c0.32-0.09,0.87-0.51,0.87-1.52
					C38.35,42.45,37.82,42.07,37.51,41.96z"/>
				<path class="st0" d="M51.26,48.43c3.19-3.78,3.48-9.72,0.66-13.78c-1.63-2.35-4.1-4.03-5.61-6.46c0.26,3.81,0.53,7.62,0.79,11.43
					c-1.89-1.09-3.9-2.5-4.32-4.65c-0.15-0.74-0.08-1.51-0.02-2.26c0.17-2.03,0.2-4.14,0.53-6.15c0.25-1.54,0.59-2.87-0.28-4.37
					c-0.49-0.85-1.3-1.45-2.09-2.03c-2.09-1.54-4.19-3.07-6.28-4.61c-2.95-1.97-1.6-5.57-1.31-8.59c-2.91,2.5-4.31,4.89-4.92,8.74
					c-0.28,1.77-0.33,3.57-0.15,5.35c0.17,1.71,0.54,3.39,0.59,5.11c0.09,3.22-1.15,7.89-4.18,9.62c-0.13,0.07-0.27,0.14-0.42,0.13
					c-0.18-0.02-0.32-0.15-0.44-0.29c-1.43-1.61-1.73-3.91-1.97-6.05c0.12,1.11-1.13,3.21-1.43,4.33c-0.45,1.65-0.77,3.35-0.74,5.07
					c0.06,3.12,0.77,6.22,3.13,8.42c-0.92,0.21-1.84,0.42-2.75,0.63c1.06,3.07,3.67,5.57,6.8,6.47c-2.46-0.02-5.01-0.05-7.24-1.08
					c-0.8-0.37-1.55-0.86-2.39-1.13c-0.84-0.27-1.83-0.28-2.53,0.25c-0.24,0.18,4.67,5.05,5.14,5.45c1.82,1.56,3.95,2.95,6.32,3.5
					c1.42,0.33,2.77,0.24,4.09-0.31c0.52-0.22,1.37-1.07,1.88-1.1c1.99-0.1,3.03,2.33,5.38,1.65c2.56-0.73,4.67-2.49,6.71-4.2
					c0.85-0.71,1.71-1.44,2.35-2.34c0.85-1.18,1.29-2.61,2.11-3.81C49.4,50.28,50.42,49.43,51.26,48.43z M41.62,50.8h-3.2l-1.77-3.43
					h-3.87v3.43H29.7V39.38h9.28c0.12,0,2.91,0.06,2.91,3.75c0,1.66-0.66,2.89-1.96,3.66l-0.33,0.19L41.62,50.8z"/>
			</g>
			<g id="icon_wild" transform="scale(0.013888888888889)">
				<path class="st0" d="M58.12,51.39c-1.18,0.63-2.24,1.4-3.38,2.17c-1.19,0.83-2.16,1.86-3.06,2.97c-0.44,0.56-0.86,1.15-1.23,1.8
					c-0.19,0.32-0.37,0.67-0.54,1.05c-0.15,0.4-0.32,0.8-0.38,1.45h3.5c-0.04-0.01-0.04-0.25-0.02-0.48c0.04-0.25,0.1-0.51,0.18-0.79
					c0.16-0.55,0.39-1.11,0.65-1.65c0.53-1.09,1.21-2.14,2.02-3.01c0.88-0.91,1.96-1.66,2.93-2.53c0.98-0.88,1.98-1.73,2.94-2.67
					C60.48,50.18,59.29,50.77,58.12,51.39z"/>
				<path class="st0" d="M52.18,44.45c0.86-2.36,1.93-4.65,3.07-6.91c1.19-2.24,2.5-4.42,3.9-6.59c-1.88,1.76-3.6,3.73-5.12,5.84
					c-1.52,2.12-2.83,4.39-4.02,6.72c-1.19,2.34-2.2,4.78-3.01,7.3c-0.31,0.97-0.6,1.96-0.85,2.96c-0.13-0.89-0.27-1.78-0.45-2.66
					c-0.32-1.61-0.72-3.2-1.22-4.76c-0.49-1.56-1.12-3.08-2-4.47l0.66,4.76c0.2,1.57,0.3,3.14,0.33,4.72
					c0.02,1.57,0.02,3.14-0.07,4.72c-0.07,1.57-0.19,3.14-0.29,4.75h3.69c-0.04-0.67-0.08-1.36-0.13-2.04h2.46
					c-0.03-1.06,0.09-2.31,0.25-3.51c0.16-1.21,0.4-2.43,0.66-3.64C50.6,49.21,51.32,46.81,52.18,44.45z"/>
				<path class="st0" d="M48.01,17.61c-2.21,3.09-4.09,6.42-5.7,9.87c-1.6,3.46-3.01,7.02-4.19,10.66c-1.2,3.64-2.11,7.37-2.81,11.16
					c-0.24,1.27-0.42,2.55-0.59,3.83c-0.01-0.09-0.03-0.17-0.04-0.26c-0.07-2.33-0.2-4.67-0.43-6.99c-0.21-2.01-0.44-4.01-0.77-6
					c-0.1-0.57-0.21-1.15-0.32-1.72c0.14-1.22,0.32-2.44,0.52-3.66c0.43-2.49,0.93-4.97,1.64-7.38c0.69-2.38,1.72-4.72,2.8-7.03
					c0.54-1.16,1.11-2.31,1.7-3.45c0.58-1.15,1.17-2.29,1.79-3.41c-0.78,1.02-1.54,2.06-2.28,3.12c-0.73,1.06-1.44,2.14-2.14,3.23
					c-1.36,2.2-2.66,4.46-3.65,6.93c-0.69,1.79-1.27,3.61-1.77,5.44c-0.86-3.24-1.92-6.42-3.29-9.48c-0.83-1.84-1.77-3.63-2.85-5.33
					c-0.54-0.85-1.13-1.67-1.76-2.45c-0.63-0.78-1.3-1.54-2.07-2.18c1.22,1.57,2.12,3.34,2.94,5.12c0.81,1.79,1.5,3.62,2.12,5.48
					c1.22,3.72,2.14,7.53,2.78,11.38c0.26,1.54,0.46,3.09,0.63,4.65c-0.03,0.23-0.07,0.47-0.1,0.7c-2.22-4.04-5.32-7.65-9.17-9.98
					c1.8,1.51,3.31,3.29,4.55,5.22c1.25,1.93,2.22,4.01,2.98,6.15c0.77,2.14,1.35,4.35,1.74,6.57c0.21,1.11,0.34,2.23,0.44,3.34
					c0.08,1.09,0.15,2.24,0.07,3.21h0.22c0,1.18-0.01,2.37-0.03,3.57h3.27c-0.06,0.97-0.11,1.94-0.14,2.92h3.79
					c-0.08-3.67,0.17-7.36,0.59-11.05c0.43-3.69,1.13-7.35,1.99-10.98c0.88-3.63,1.98-7.21,3.29-10.72
					C45.05,24.57,46.51,21.1,48.01,17.61z"/>
				<path class="st0" d="M27.08,47.68c-0.77-2-1.75-3.91-2.95-5.67c-1.2-1.75-2.62-3.34-4.22-4.67c2.31,3.47,3.97,7.18,4.94,11.05
					c0.38,1.54,0.66,3.1,0.86,4.67c-0.21-0.28-0.43-0.55-0.66-0.81c-1.4-1.62-3.06-2.96-4.86-4.02c0.74,0.74,1.45,1.49,2.13,2.26
					c0.67,0.78,1.29,1.59,1.84,2.43c0.55,0.84,1.02,1.73,1.39,2.63c0.24,0.6,0.41,1.22,0.5,1.81c0.03,0.96,0.04,1.91,0.04,2.87h3.35
					c-0.03-2.14-0.23-4.28-0.62-6.38C28.43,51.75,27.86,49.67,27.08,47.68z"/>
				<path class="st0" d="M21.15,54.51c-0.45-1.49-1.01-2.93-1.71-4.29c-0.7-1.36-1.5-2.66-2.4-3.87c-0.9-1.21-1.93-2.33-3.17-3.19
					c0.68,1.35,1.37,2.61,1.99,3.91c0.61,1.29,1.12,2.63,1.5,3.99c0.38,1.36,0.69,2.73,0.85,4.1c0.06,0.45,0.09,0.91,0.12,1.36
					c-0.18-0.49-0.36-0.92-0.54-1.24c-0.87-1.53-3.66-4.09-3.66-4.09s1.42,3.21,1.83,4.53c0.41,1.33,0.32,3.71,0.32,3.71
					s-1.6-2.24-2.43-2.66c0,0,0.41,1.1,0.23,2.43c-0.18,1.33-1.37,1.64-1.37,1.64l6.87,0.19c0,0-0.18-0.8-0.45-1.83h2.87
					C21.91,57.55,21.6,56,21.15,54.51z"/>
			</g>
			<g id="icon_raid" transform="scale(0.013888888888889)">
				<path class="st0" d="M36,39.6c0.82,0,1.85-0.39,2.34-0.88c0.36-0.36,0.72-0.92,0.71-1.38c0-0.18-0.06-0.33-0.18-0.45l-0.75-0.95
					c-0.06,0.29-0.18,0.55-0.38,0.76c-0.63,0.69-1.71,0.69-1.75,0.69c-0.05,0-1.13-0.01-1.75-0.69c-0.2-0.21-0.32-0.47-0.38-0.76
					l-0.75,0.95c-0.12,0.12-0.18,0.27-0.18,0.45c0,0.46,0.36,1.02,0.71,1.38C34.15,39.22,35.18,39.6,36,39.6z"/>
				<path class="st0" d="M36,36.94c0.01,0,0.92-0.01,1.41-0.54c0.22-0.25,0.32-0.58,0.3-0.98l-1.52-1.93L36,33.37l-0.18,0.11
					l-1.52,1.93c-0.03,0.41,0.07,0.74,0.3,0.98C35.08,36.93,35.99,36.94,36,36.94z"/>
				<path class="st0" d="M36,42.45c2.28,0,3.22-1.3,3.72-2.29c0.46-0.9,0.07-2.01,0-2.19l-0.24-0.31c-0.11,0.53-0.47,1.04-0.81,1.39
					c-0.58,0.58-1.73,1.02-2.67,1.02c-0.94,0-2.09-0.44-2.67-1.02c-0.34-0.34-0.7-0.86-0.81-1.39l-0.24,0.31
					c-0.07,0.19-0.46,1.3,0,2.19C32.78,41.14,33.72,42.45,36,42.45z"/>
				<path class="st0" d="M63.41,28.12l-4.4,0.52c0,0,0.6-1.05,0.6-1.87c0-0.82-2.25-2.39-2.84-2.39s-1.5,2.99-1.5,2.99l-1.95,2.39
					l-1.8-1.8c0,0,0.07-2.02,0.45-4.27c0.37-2.25,2.62-5.24,2.62-6.59c0-1.35-1.2-2.59-2.32-2.59c-1.12,0-3.59,0.94-6.44,2.89
					c-2.84,1.95-4.42,5.31-4.42,5.31h-2.54c0,0-0.52-2.25-1.12-3.97c-0.6-1.72-1.11-3.14-1.76-3.14s-1.16,1.42-1.76,3.14
					c-0.6,1.72-1.12,3.97-1.12,3.97h-2.54c0,0-1.57-3.37-4.42-5.31c-2.84-1.95-5.31-2.89-6.44-2.89c-1.12,0-2.32,1.24-2.32,2.59
					c0,1.35,2.25,4.34,2.62,6.59c0.37,2.25,0.45,4.27,0.45,4.27l-1.8,1.8l-1.95-2.39c0,0-0.9-2.99-1.5-2.99
					c-0.6,0-2.84,1.57-2.84,2.39c0,0.82,0.6,1.87,0.6,1.87l-4.4-0.52v3.52l2.83,1.27l-2.32,0.9l0.6,3.67h2.17l-0.9,1.27l0.82,2.1
					h3.07l1.35,1.42c0,0-0.82,3.52-0.82,4.27c0,0.75,7.55,12,13.77,14.44c5.06,1.99,5.06,1.99,7.03,1.98
					c1.98-0.01,1.98-0.01,6.66-1.98c6.16-2.6,13.77-13.7,13.77-14.44c0-0.75-0.82-4.27-0.82-4.27l1.35-1.42h3.07l0.82-2.1l-0.9-1.27
					h2.17l0.6-3.67l-2.32-0.9l2.83-1.27V28.12z M43.18,34.11c0.82-1.72,2.16-3.48,2.9-3.48c0.75,0,1.81,1.01,2.56,2.06
					c0.75,1.05,0.97,3.59,0.97,3.59s-5.24,3.74-6.14,3.74c-0.9,0-0.9,0-0.9,0S42.36,35.83,43.18,34.11z M31.86,37.76l0.03-0.05
					l0.76-0.96c0.05-0.08,0.1-0.15,0.17-0.21l0,0l2.73-3.44L36,32.83l0.52,0.33l2.66,3.38l0,0c0.07,0.07,0.13,0.15,0.18,0.23
					l0.78,0.99c0.02,0.06,0.6,1.45-0.01,2.61c-0.88,1.71-2.24,2.54-4.14,2.54c-1.9,0-3.25-0.83-4.14-2.54
					C31.26,39.21,31.83,37.82,31.86,37.76z M23.35,32.69c0.75-1.05,1.81-2.06,2.56-2.06c0.75,0,2.08,1.76,2.9,3.48
					c0.82,1.72,0.6,5.91,0.6,5.91s0,0-0.9,0c-0.9,0-6.14-3.74-6.14-3.74S22.6,33.74,23.35,32.69z M42.6,55.96
					c-3.64,1.8-4.99,2.32-6.6,2.32s-2.96-0.52-6.6-2.32c-3.64-1.8-8.19-9.43-8.19-9.73s2.02-4.79,2.02-4.79l0.9,1.2
					c0,0-0.07,5.01,0,5.54c0.07,0.52,1.05,0.54,1.05,0.54l3.07-2.86c0,0,2.25,1.8,3.82,2.39C33.64,48.85,36,48.7,36,48.7
					s2.36,0.15,3.93-0.45c1.57-0.6,3.82-2.39,3.82-2.39l3.07,2.86c0,0,0.97-0.02,1.05-0.54c0.07-0.52,0-5.54,0-5.54l0.9-1.2
					c0,0,2.02,4.49,2.02,4.79S46.23,54.17,42.6,55.96z"/>
			</g>
			<g id="icon_buddy" transform="scale(0.013888888888889)">
				<circle class="st0" cx="40" cy="35.18" r="1.49"/>
				<circle class="st0" cx="31.08" cy="31.23" r="1.49"/>
				<path class="st0" d="M31.3,34.3c-0.48-0.12-0.97,0.18-1.1,0.66c-0.05,0.2-0.57,1.94-2.97,1.94c-2.28,0-2.99-1.93-3.02-2.02
					c-0.16-0.47-0.67-0.73-1.15-0.57c-0.48,0.16-0.73,0.67-0.58,1.15c0.38,1.13,1.85,3.26,4.74,3.26c3.13,0,4.47-2.19,4.74-3.34
					C32.08,34.9,31.78,34.42,31.3,34.3z"/>
				<circle class="st0" cx="23.35" cy="31.23" r="1.49"/>
				<circle class="st0" cx="47.74" cy="35.18" r="1.49"/>
				<path class="st0" d="M49.42,24.36l-17.69-5.1c-7.77-2.62-16.2,1.57-18.81,9.34c-2.62,7.77,1.57,16.2,9.34,18.81l17.69,5.1
					c7.77,2.62,16.2-1.57,18.81-9.34C61.37,35.4,57.19,26.98,49.42,24.36z M27.39,42.83c-5.05,0-9.15-4.09-9.15-9.15
					s4.09-9.15,9.15-9.15s9.15,4.09,9.15,9.15S32.44,42.83,27.39,42.83z M44.04,46.79c-3.86,0-7.16-2.39-8.5-5.78
					c1.75-1.94,2.81-4.51,2.81-7.33c0-1-0.14-1.96-0.39-2.88c1.62-1.44,3.74-2.31,6.07-2.31c5.05,0,9.15,4.09,9.15,9.15
					S49.09,46.79,44.04,46.79z"/>
				<path class="st0" d="M47.95,38.26c-0.48-0.12-0.97,0.18-1.1,0.66c-0.05,0.2-0.57,1.94-2.97,1.94c-2.28,0-2.99-1.93-3.02-2.02
					c-0.16-0.47-0.67-0.73-1.15-0.57c-0.48,0.16-0.73,0.67-0.58,1.15c0.38,1.13,1.85,3.26,4.74,3.26c3.13,0,4.47-2.19,4.74-3.34
					C48.74,38.86,48.44,38.38,47.95,38.26z"/>
			</g>
			<g id="icon_egg" transform="scale(0.013888888888889)">
				<path class="st0" d="M55.35,23.83c-2.86-6.81-7.02-11.54-11.63-13.32c-0.05-0.02-0.1-0.04-0.14-0.05
					c-0.56-0.21-1.12-0.38-1.69-0.5c-3.32-0.69-7.35,0.43-11.65,3.25c-7.75,5.08-14.78,14.66-16.36,22.3
					c-1.22,5.91-0.07,11.94,3.24,16.98c3.31,5.04,8.39,8.49,14.3,9.71c1.54,0.32,3.09,0.48,4.63,0.48c4.36,0,8.63-1.27,12.35-3.72
					c5.04-3.31,8.49-8.39,9.71-14.3C59.32,38.77,58.27,30.79,55.35,23.83z M53.95,27.21l-7.44-0.16l-7.17-6.19l4.42-7.6
					C48.14,15.48,51.78,20.98,53.95,27.21z M55.64,44.15c-1.09,5.25-4.15,9.76-8.63,12.71c-4.48,2.94-9.84,3.97-15.09,2.88
					c-1.44-0.3-2.82-0.75-4.13-1.33c0.18,0.02,0.35,0.03,0.51,0.03c1,0,1.66-0.36,2.05-0.67c1.31-1.05,1.4-2.79,0.27-5.17
					c-0.76-1.59-2.1-3.57-4.1-6.06c-2-2.49-3.64-4.23-5.03-5.32c-2.08-1.63-3.8-1.92-5.11-0.87c-0.15,0.12-0.31,0.28-0.46,0.47
					c-0.06-1.6,0.08-3.21,0.41-4.81c0.7-3.4,2.6-7.23,5.18-10.81c0.91-0.15,4.25-0.86,6.8-3.84c2.31-2.69,2.73-4.83,2.8-5.72
					c0.17-0.11,0.33-0.23,0.5-0.34c3.03-1.99,5.92-3.03,8.3-3.03c0.5,0,0.98,0.05,1.44,0.14l-4.71,8.09c-0.3,0.52-0.19,1.19,0.26,1.58
					l7.07,6.1l-3.16,3.73c-0.45,0.53-0.38,1.32,0.15,1.77c0.24,0.2,0.52,0.3,0.81,0.3c0.36,0,0.71-0.15,0.96-0.44l3.14-3.71l2.08,1.8
					l-4.32,6.94l-6.33,2.25C36.8,41,36.48,41.48,36.48,42c0,0.14,0.02,0.28,0.07,0.42c0.18,0.51,0.67,0.84,1.18,0.84
					c0.14,0,0.28-0.02,0.42-0.07l6.11-2.17l2.7,2c0.56,0.41,1.34,0.29,1.76-0.26c0.41-0.56,0.29-1.34-0.26-1.76l-2.3-1.7l4.51-7.24
					c0.33-0.52,0.22-1.21-0.24-1.61l-0.93-0.8l5.24,0.11C56.1,34.71,56.52,39.91,55.64,44.15z"/>
			</g>
			<g id="icon_max" transform="scale(0.013888888888889)">
				<path class="st0" d="M57.95,25.82C54.1,17.55,45.72,11.81,36,11.81c-9.72,0-18.1,5.74-21.95,14.01
					c3.85,3.61,12.23,5.95,21.95,5.95C45.72,31.77,54.1,29.42,57.95,25.82z"/>
				<path class="st0" d="M36,38.74c11.78,0,21.59-3.02,23.75-7.36c-0.26-1.35-0.63-2.67-1.11-3.93c-3.46,4.01-12.29,6.67-22.64,6.67
					s-19.18-2.66-22.64-6.67c-0.48,1.26-0.85,2.58-1.11,3.93C14.41,35.72,24.22,38.74,36,38.74z"/>
				<path class="st0" d="M14.34,46.79C18.3,54.74,26.51,60.21,36,60.21c9.49,0,17.7-5.47,21.66-13.42c-3.97,3.46-12.17,5.7-21.66,5.7
					C26.51,52.49,18.3,50.25,14.34,46.79z"/>
				<path class="st0" d="M60.17,34.85c-0.59,5.78-11.18,9.97-24.17,9.97c-12.99,0-23.58-4.19-24.17-9.97
					c-0.02,0.39-0.03,0.77-0.03,1.16c0,2.23,0.31,4.4,0.88,6.45c2.82,4.52,12.19,7.6,23.32,7.6c11.13,0,20.5-3.08,23.32-7.6
					c0.57-2.05,0.88-4.21,0.88-6.45C60.2,35.62,60.19,35.23,60.17,34.85z"/>
			</g>
			<g id="icon_max_xl" transform="scale(0.013888888888889)">
				<path class="st0" d="M42.43,14.87c0.15,0.05,0.34,0.12,0.45,0.17l0.75,0.31c2.02,0.83,4.04,1.67,6.05,2.55c1,0.45,2,0.9,3,1.37
					c1,0.47,1.99,0.93,3.02,1.51c0.92,0.51,1.66,1.2,2.36,1.88c-0.05-3.31-0.08-5.62-0.08-5.62s0.55-2.76-3.31-4.62
					c-3.86-1.86-7.16,0-7.16,0L41.8,14.7c0.06,0.01,0.11,0.02,0.17,0.03C42.12,14.78,42.27,14.81,42.43,14.87z"/>
				<path class="st0" d="M55.11,27.3c1.26,0.69,2.26,1.38,3.03,1.97c-0.02-1.36-0.04-2.69-0.06-3.95c-1.09-1.02-2.39-1.82-3.55-2.49
					c-0.88-0.47-1.89-0.93-2.87-1.37c-0.99-0.44-1.99-0.88-2.99-1.31l-5.99-2.64l-0.76-0.34l-0.31-0.14c-0.1-0.04-0.21-0.08-0.32-0.13
					c-0.44-0.18-0.93-0.35-1.44-0.5c-0.5-0.15-1.01-0.26-1.54-0.32l-4.99,2c0.97,0.17,1.84,0.36,2.36,0.58
					C37.56,19.45,51.67,25.42,55.11,27.3z"/>
				<path class="st0" d="M21.42,24.64l0.84,0.36l6.72,2.81c2.24,0.94,4.48,1.9,6.71,2.86c2.24,0.96,4.46,1.94,6.69,2.93
					c2.22,1,4.44,2.01,6.65,3.08c1.1,0.53,2.21,1.1,3.28,1.71l1.59,0.85l1.61,0.88c0.54,0.3,1.07,0.6,1.6,0.95l0.41,0.27
					c0.14,0.1,0.31,0.22,0.43,0.32c0.12,0.09,0.23,0.18,0.33,0.28c-0.01-1.15-0.03-2.53-0.04-4.05c-1.08-0.83-2.31-1.76-3.21-2.32
					c-1.95-1.23-26.3-11.62-28.37-12.53c-0.93-0.41-2.03-0.79-2.96-1.08l-4.8,1.92c0.53,0.11,1.05,0.24,1.57,0.43
					C20.8,24.39,21.11,24.5,21.42,24.64z"/>
				<path class="st0" d="M57.34,43.83c-0.21-0.19-0.43-0.37-0.64-0.52c-0.11-0.08-0.2-0.13-0.31-0.2l-0.37-0.21l-1.57-0.84l-1.6-0.85
					l-1.63-0.85c-1.04-0.58-2.1-1.11-3.19-1.62c-4.35-2.06-8.83-3.94-13.29-5.86c-4.47-1.9-8.93-3.78-13.41-5.73l-0.83-0.37
					c-0.25-0.11-0.5-0.21-0.77-0.3l-1.64-0.54c-0.79-0.26-1.59-0.56-2.42-0.8l-0.55,0.22c0,0-2.62,0.73-2.76,2.77
					c-0.14,2.05-0.83,12.86-0.83,12.86s-0.34,0.9,0.48,2.14c0.83,1.24,2,1.93,2,1.93l34.99,15.64c0,0,1.65,0.83,3.24,0.34
					c1.58-0.48,4.82-1.65,5.23-3.79c0.41-2.14,0.76-11.09,0.83-11.92c0-0.06,0.01-0.26,0.01-0.57C58,44.45,57.67,44.13,57.34,43.83z"/>
			</g>
			<g id="clear-sun" transform="scale(0.013888888888889)">
				<path class="st0" d="M35.89,47.09c-5.91,0-10.71-4.81-10.71-10.71s4.81-10.71,10.71-10.71s10.71,4.81,10.71,10.71
					S41.8,47.09,35.89,47.09z M35.89,28.67c-4.25,0-7.7,3.46-7.7,7.7s3.46,7.7,7.7,7.7s7.7-3.46,7.7-7.7S40.14,28.67,35.89,28.67z"/>
				<path class="st0" d="M36.24,23.02c-0.83,0-1.5-0.67-1.5-1.5v-3.96c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5v3.96
					C37.74,22.35,37.07,23.02,36.24,23.02z"/>
				<path class="st0" d="M47.79,27.46c-0.38,0-0.77-0.15-1.06-0.44c-0.59-0.59-0.59-1.54,0-2.13l3.19-3.19c0.59-0.59,1.54-0.59,2.13,0
					c0.59,0.59,0.59,1.54,0,2.13l-3.19,3.19C48.56,27.32,48.17,27.46,47.79,27.46z"/>
				<path class="st0" d="M21.03,38.36h-3.96c-0.83,0-1.5-0.67-1.5-1.5s0.67-1.5,1.5-1.5h3.96c0.83,0,1.5,0.67,1.5,1.5
					S21.86,38.36,21.03,38.36z"/>
				<path class="st0" d="M24.7,27.36c-0.38,0-0.77-0.15-1.06-0.44l-3.19-3.19c-0.59-0.59-0.59-1.54,0-2.13c0.59-0.59,1.54-0.59,2.13,0
					l3.19,3.19c0.59,0.59,0.59,1.54,0,2.13C25.47,27.21,25.09,27.36,24.7,27.36z"/>
				<path class="st0" d="M36.24,56.7c-0.83,0-1.5-0.67-1.5-1.5v-3.96c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5v3.96
					C37.74,56.03,37.07,56.7,36.24,56.7z"/>
				<path class="st0" d="M21.28,52.02c-0.38,0-0.77-0.15-1.06-0.44c-0.59-0.59-0.59-1.54,0-2.13l3.19-3.19c0.59-0.59,1.54-0.59,2.13,0
					c0.59,0.59,0.59,1.54,0,2.13l-3.19,3.19C22.04,51.87,21.66,52.02,21.28,52.02z"/>
				<path class="st0" d="M54.71,38.23h-3.96c-0.83,0-1.5-0.67-1.5-1.5c0-0.83,0.67-1.5,1.5-1.5h3.96c0.83,0,1.5,0.67,1.5,1.5
					C56.21,37.55,55.54,38.23,54.71,38.23z"/>
				<path class="st0" d="M50.98,52.05c-0.38,0-0.77-0.15-1.06-0.44l-3.19-3.19c-0.59-0.59-0.59-1.54,0-2.13c0.59-0.59,1.54-0.59,2.13,0
					l3.19,3.19c0.59,0.59,0.59,1.54,0,2.13C51.74,51.91,51.36,52.05,50.98,52.05z"/>
			</g>
			<g id="clear-moon" transform="scale(0.013888888888889)">
				<path class="st0" d="M35.96,53.36c-10.42,0-18.89-8.47-18.89-18.89s8.47-18.89,18.89-18.89c0.94,0,2.58,0.18,2.77,0.2
					c0.69,0.08,1.24,0.62,1.33,1.32c0.08,0.69-0.32,1.35-0.98,1.59c-2.37,0.86-5.11,3.84-6.67,7.24c-1.6,3.49-1.86,7.01-0.75,9.93l0,0
					c4.07,10.68,16.04,9.33,16.55,9.27c0.63-0.08,1.25,0.25,1.53,0.82c0.28,0.57,0.18,1.26-0.27,1.72
					C45.89,51.34,41.09,53.36,35.96,53.36z M33.77,18.73c-7.73,1.07-13.7,7.72-13.7,15.73c0,8.76,7.13,15.88,15.88,15.88
					c2.95,0,5.78-0.8,8.23-2.29c-4.77-0.51-12.13-2.7-15.34-11.13l0,0c-1.4-3.68-1.11-8.03,0.82-12.26
					C30.72,22.39,32.16,20.33,33.77,18.73z"/>
				<polygon class="st0" points="42.33,22.62 43.56,25.12 46.32,25.52 44.33,27.46 44.8,30.21 42.33,28.92 39.86,30.21 40.33,27.46 
					38.34,25.52 41.1,25.12 "/>
				<polygon class="st0" points="53.53,32 55.32,35.62 59.32,36.2 56.42,39.02 57.11,43 53.53,41.12 49.96,43 50.64,39.02 47.75,36.2 
					51.75,35.62 "/>
			</g>
			<g id="wind" transform="scale(0.013888888888889)">
				<path class="st0" d="M49.9,24.02l-18.47-9.32l-9.06,18.21l7.35,7.59l-7.26,14.63c-0.37,0.74-0.07,1.65,0.68,2.02
					c0.21,0.11,0.44,0.16,0.67,0.16c0.55,0,1.09-0.31,1.35-0.84l6.79-13.68l13.24,13.67L49.9,24.02z M33.37,39.94l3.44-6.92l4.22,12.96
					c0.1,0.32,0.4,0.52,0.72,0.52c0.08,0,0.16-0.01,0.23-0.04c0.4-0.13,0.61-0.55,0.48-0.95l-4.69-14.42l0.36-0.72
					c0.2-0.41,0.2-0.87,0.03-1.26l5.88-1.9c0.4-0.13,0.61-0.55,0.48-0.95c-0.13-0.4-0.55-0.61-0.95-0.48l-6.82,2.21l-1.8-5.54
					c-0.13-0.39-0.55-0.61-0.95-0.48c-0.4,0.13-0.61,0.55-0.48,0.95l1.8,5.54l-6.16,1.99c-0.4,0.13-0.61,0.55-0.48,0.95
					c0.1,0.32,0.4,0.52,0.72,0.52c0.08,0,0.15-0.01,0.23-0.04l5.24-1.7l-3.71,7.47l-5.13-5.3l6.77-13.6l13.83,6.99l-3.52,24.24
					L33.37,39.94z"/>
			</g>
			<g id="snow" transform="scale(0.013888888888889)">
				<path class="st0" d="M52.59,29.99c-0.49-0.67-1.44-0.81-2.1-0.32l-2.82,2.08c-1.05-1.17-2.27-2.18-3.64-3
					c1.13-1.62,1.8-3.58,1.8-5.7c0-5.5-4.48-9.98-9.98-9.98s-9.98,4.48-9.98,9.98c0,2.18,0.71,4.19,1.9,5.83
					c-1.31,0.81-2.48,1.79-3.49,2.92l-2.74-2.1c-0.66-0.51-1.6-0.38-2.11,0.28c-0.51,0.66-0.38,1.6,0.28,2.11l2.78,2.14
					c-1.53,2.52-2.38,5.45-2.38,8.52c0,8.93,7.13,16.2,15.9,16.2c8.77,0,15.9-7.27,15.9-16.2c0-3.08-0.88-6.04-2.43-8.58l2.8-2.06
					C52.94,31.6,53.08,30.66,52.59,29.99z M35.85,16.07c3.85,0,6.97,3.13,6.97,6.97c0,3.85-3.13,6.97-6.97,6.97s-6.97-3.13-6.97-6.97
					C28.87,19.2,32,16.07,35.85,16.07z M48.9,42.73c0,7.28-5.78,13.2-12.89,13.2c-7.11,0-12.89-5.92-12.89-13.2
					c0-2.39,0.63-4.68,1.77-6.67l2.17,1.67c0.27,0.21,0.6,0.31,0.92,0.31c0.45,0,0.9-0.2,1.19-0.59c0.51-0.66,0.38-1.6-0.28-2.11
					l-2.22-1.7c0.92-0.99,1.99-1.85,3.2-2.52c0.02-0.01,0.04-0.03,0.07-0.05c1.66,1.22,3.7,1.96,5.91,1.96c2.27,0,4.35-0.77,6.03-2.04
					c1.27,0.67,2.4,1.53,3.37,2.55l-2.42,1.79c-0.67,0.49-0.81,1.43-0.32,2.1c0.29,0.4,0.75,0.61,1.21,0.61c0.31,0,0.62-0.1,0.89-0.29
					l2.44-1.8C48.23,37.96,48.9,40.3,48.9,42.73z"/>
				<path class="st0" d="M36.32,37.95c-1,0-1.81,0.81-1.81,1.81c0,1,0.81,1.81,1.81,1.81c1,0,1.81-0.81,1.81-1.81
					C38.13,38.76,37.32,37.95,36.32,37.95z"/>
				<path class="st0" d="M36.32,45.7c-1,0-1.81,0.81-1.81,1.81c0,1,0.81,1.81,1.81,1.81c1,0,1.81-0.81,1.81-1.81
					C38.13,46.52,37.32,45.7,36.32,45.7z"/>
				<path class="st0" d="M35.63,28.05c2.81,0,4.33-1.97,4.39-2.05c0.33-0.44,0.25-1.06-0.19-1.4c-0.44-0.33-1.06-0.25-1.4,0.18
					c-0.04,0.05-1.01,1.26-2.8,1.26c-1.74,0-2.6-1.16-2.65-1.23c-0.31-0.45-0.93-0.56-1.39-0.26c-0.46,0.31-0.57,0.94-0.26,1.39
					C31.39,26.04,32.8,28.05,35.63,28.05z"/>
			</g>
			<g id="rain" transform="scale(0.013888888888889)">
				<path class="st0" d="M36,37.28c-0.83,0-1.5,0.67-1.5,1.5v15.1c-0.16,0.52-0.73,0.52-0.92,0.52c-1.31,0-1.6-1.13-1.66-1.46
					c-0.12-0.82-0.89-1.4-1.71-1.27c-0.82,0.12-1.39,0.89-1.27,1.71c0.21,1.39,1.44,4.03,4.64,4.03c2.77,0,3.77-2.07,3.92-3.16
					c0.01-0.07,0.01-0.13,0.01-0.2V38.79C37.5,37.95,36.83,37.28,36,37.28z"/>
				<path class="st0" d="M50.31,23.12c-3.72-3.79-8.59-5.52-12.34-5.97c-0.03,0-0.06-0.01-0.09-0.01c-0.13-0.01-0.26-0.03-0.38-0.04
					V16.1c0-0.83-0.67-1.5-1.5-1.5s-1.5,0.67-1.5,1.5v0.99c-0.11,0.01-0.23,0.03-0.35,0.04c-0.05,0-0.1,0.01-0.15,0.02
					c-3.74,0.46-8.6,2.19-12.31,5.97c-5.1,5.2-5.7,13.11-5.76,14c-0.04,0.61,0.3,1.18,0.85,1.44c0.55,0.26,1.21,0.17,1.66-0.25
					c0.77-0.7,3.39-2.71,5.2-2.71c2.83,0,5.02,2.25,5.04,2.27c0.02,0.02,0.05,0.04,0.07,0.06c0.02,0.02,0.05,0.04,0.07,0.06
					c0.12,0.1,0.25,0.18,0.39,0.24c0.02,0.01,0.05,0.01,0.07,0.02c0.13,0.04,0.27,0.07,0.41,0.08c0.03,0,0.05,0.01,0.08,0.01
					c0.06,0,0.12,0,0.18-0.01c0.05-0.01,0.09-0.02,0.14-0.03c0.02,0,0.04-0.01,0.06-0.01c0.08-0.02,0.16-0.05,0.24-0.09
					c0.02-0.01,0.03-0.01,0.05-0.02c0.08-0.04,0.15-0.08,0.21-0.13c0.02-0.01,0.04-0.02,0.05-0.04c0.06-0.05,0.11-0.1,0.16-0.15
					c0.02-0.02,0.04-0.04,0.06-0.06c0.07-0.09,1.83-2.12,5.06-2.12c3.23,0,4.98,2.03,5.05,2.11c0.02,0.02,0.04,0.04,0.06,0.06
					c0.05,0.05,0.09,0.1,0.15,0.15c0.03,0.02,0.06,0.04,0.09,0.06c0.06,0.04,0.11,0.08,0.17,0.11c0.03,0.02,0.06,0.03,0.09,0.04
					c0.06,0.03,0.13,0.05,0.2,0.07c0.03,0.01,0.07,0.02,0.1,0.02c0.04,0.01,0.08,0.02,0.13,0.03c0.04,0,0.08,0.01,0.12,0.01
					c0,0,0,0,0,0c0,0,0,0,0,0c0.02,0,0.04,0,0.06,0c0.02,0,0.04-0.01,0.06-0.01c0.14-0.01,0.28-0.03,0.42-0.08
					c0.02-0.01,0.05-0.01,0.07-0.02c0.14-0.06,0.27-0.14,0.39-0.24c0.03-0.02,0.05-0.04,0.08-0.06c0.02-0.02,0.05-0.04,0.07-0.06
					c0.02-0.02,2.21-2.28,5.05-2.28c1.82,0,4.43,2.01,5.2,2.71c0.28,0.26,0.65,0.39,1.01,0.39c0.22,0,0.44-0.05,0.65-0.15
					c0.55-0.26,0.89-0.83,0.85-1.44C56.02,36.23,55.41,28.32,50.31,23.12z M19.45,33.91c0.66-2.82,1.98-6.24,4.39-8.69
					c2.06-2.1,4.52-3.45,6.87-4.25c-0.49,0.91-1.01,2.03-1.52,3.4c-1.08,2.89-1.2,6.7-1.12,9.38c-1.19-0.63-2.7-1.16-4.42-1.16
					C22.2,32.6,20.7,33.2,19.45,33.91z M31.09,33.95c-0.09-2.44-0.03-6,0.92-8.53c1.19-3.18,2.39-4.76,2.91-5.35
					c0.38-0.03,0.75-0.05,1.09-0.05c0.34,0,0.71,0.02,1.09,0.05c0.53,0.6,1.73,2.18,2.91,5.35c0.94,2.53,1.01,6.09,0.92,8.53
					c-1.21-0.68-2.85-1.27-4.91-1.27C33.94,32.68,32.3,33.27,31.09,33.95z M48.35,32.6c-1.72,0-3.23,0.53-4.42,1.16
					c0.08-2.69-0.04-6.5-1.12-9.38c-0.51-1.37-1.03-2.49-1.52-3.4c2.35,0.8,4.82,2.15,6.87,4.25c2.4,2.45,3.73,5.87,4.39,8.69
					C51.3,33.2,49.8,32.6,48.35,32.6z"/>
			</g>
			<g id="partcloud-sun" transform="scale(0.013888888888889)">
				<path class="st0" d="M53.77,32.59c0-5.36-4.36-9.73-9.73-9.73c-4.3,0-7.96,2.81-9.24,6.69c-3.08-2.48-6.79-2.67-11.1-0.53
					c-4.96,2.46-5.4,9.05-5.33,12.02c-4.73,0.89-6.46,4.13-6.46,7.05c0,3.88,3.08,7.03,6.87,7.03h27.93c3.79,0,6.87-3.15,6.87-7.03
					c0-2.2-0.91-5.08-4.98-6.92C51.74,39.51,53.77,36.21,53.77,32.59z M50.58,48.1c0,2.22-1.73,4.02-3.86,4.02H18.79
					c-2.13,0-3.86-1.8-3.86-4.02c0-3.35,3.23-4.1,5.15-4.25l1.55-0.12l-0.17-1.55c-0.01-0.08-0.87-8.25,3.59-10.46
					c1.65-0.82,3.05-1.16,4.26-1.16c2.9,0,4.67,2,6.03,4.15l0.65,1.03l1.14-0.42c3.41-1.26,5.43-0.18,6.53,0.94
					c2.15,2.21,1.68,5.48,1.66,5.57l-0.22,1.26l1.21,0.41C50.14,44.81,50.58,46.75,50.58,48.1z M47.99,38.02
					c-0.35-1.27-1-2.65-2.17-3.85c-2.12-2.19-5.16-2.9-8.46-2.06c0.25-3.48,3.15-6.23,6.7-6.23c3.71,0,6.72,3.01,6.72,6.72
					C50.76,34.77,49.69,36.77,47.99,38.02z"/>
				<path class="st0" d="M58.58,31.13h-3.09c-0.83,0-1.5,0.67-1.5,1.5c0,0.83,0.67,1.5,1.5,1.5h3.09c0.83,0,1.5-0.67,1.5-1.5
					C60.09,31.8,59.41,31.13,58.58,31.13z"/>
				<path class="st0" d="M53.17,26.23c0.38,0,0.77-0.15,1.06-0.44l2.09-2.09c0.59-0.59,0.59-1.54,0-2.13c-0.59-0.59-1.54-0.59-2.13,0
					l-2.09,2.09c-0.59,0.59-0.59,1.54,0,2.13C52.4,26.09,52.79,26.23,53.17,26.23z"/>
				<path class="st0" d="M34.68,25.87c0.29,0.29,0.68,0.44,1.06,0.44s0.77-0.15,1.06-0.44c0.59-0.59,0.59-1.54,0-2.13l-2.16-2.17
					c-0.59-0.59-1.54-0.59-2.13,0c-0.59,0.59-0.59,1.54,0,2.13L34.68,25.87z"/>
				<path class="st0" d="M44.3,22.72c0.83,0,1.5-0.67,1.5-1.5v-2.85c0-0.83-0.67-1.5-1.5-1.5c-0.83,0-1.5,0.67-1.5,1.5v2.85
					C42.79,22.05,43.47,22.72,44.3,22.72z"/>
			</g>
			<g id="partcloud-moon" transform="scale(0.013888888888889)">
				<path class="st0" d="M58.27,35.21c-0.38-0.45-0.99-0.64-1.56-0.48c-0.08,0.02-7.84,2.11-11.83-2.84c-3.91-4.86,0.67-11.7,0.71-11.77
					c0.36-0.53,0.35-1.23-0.03-1.75c-0.38-0.52-1.05-0.73-1.67-0.54c-0.18,0.06-4.48,1.46-7.16,4.67c-1.53,1.83-2.32,4.29-2.72,6.11
					c-2.69-1.44-5.8-1.3-9.33,0.45c-4.79,2.38-5.24,8.71-5.18,11.61c-4.57,0.88-6.24,4.02-6.24,6.86c0,3.77,3,6.84,6.69,6.84h26.96
					c3.69,0,6.69-3.07,6.69-6.84c0-1.4-0.39-3.1-1.77-4.6c0.56-0.27,1.2-0.61,1.93-1.05c3.18-1.91,4.64-4.92,4.7-5.05
					C58.73,36.3,58.64,35.66,58.27,35.21z M39.05,24.43c0.59-0.71,1.31-1.32,2.03-1.82c-0.87,2.55-1.36,5.92,0.16,9.12
					c-1.1-0.1-2.27,0-3.47,0.32c-0.35-0.48-0.71-0.91-1.09-1.32C36.9,29.17,37.55,26.23,39.05,24.43z M46.93,51.35H19.96
					c-2.03,0-3.68-1.72-3.68-3.83c0-3.19,3.09-3.91,4.93-4.05l1.55-0.12l-0.17-1.55c-0.01-0.08-0.84-7.93,3.44-10.05
					c1.61-0.8,2.97-1.14,4.13-1.14c1.58,0,2.8,0.64,3.81,1.59c0.08,0.09,0.17,0.18,0.27,0.25c0.62,0.63,1.16,1.38,1.66,2.17l0.65,1.03
					l1.14-0.42c3.26-1.21,5.2-0.18,6.25,0.9c2.06,2.12,1.61,5.25,1.59,5.34l-0.22,1.26l1.21,0.41c3.66,1.25,4.08,3.1,4.08,4.39
					C50.6,49.64,48.95,51.35,46.93,51.35z M52.22,39.29c-1.68,1.01-2.78,1.41-3.3,1.57c-0.11-0.05-0.22-0.11-0.34-0.16
					c0.01-0.82-0.08-1.95-0.45-3.16c1.96,0.61,3.92,0.73,5.55,0.65C53.27,38.58,52.78,38.96,52.22,39.29z"/>
			</g>
			<g id="fog" transform="scale(0.013888888888889)">
				<path class="st0" d="M23.65,24.14h31.61c0.83,0,1.5-0.67,1.5-1.5c0-0.83-0.67-1.5-1.5-1.5H23.65c-0.83,0-1.5,0.67-1.5,1.5
					C22.14,23.47,22.81,24.14,23.65,24.14z"/>
				<path class="st0" d="M55.26,38.95H23.65c-0.83,0-1.5,0.67-1.5,1.5s0.67,1.5,1.5,1.5h31.61c0.83,0,1.5-0.67,1.5-1.5
					S56.09,38.95,55.26,38.95z"/>
				<path class="st0" d="M16.74,33.05h31.61c0.83,0,1.5-0.67,1.5-1.5c0-0.83-0.67-1.5-1.5-1.5H16.74c-0.83,0-1.5,0.67-1.5,1.5
					C15.24,32.38,15.91,33.05,16.74,33.05z"/>
				<path class="st0" d="M48.35,47.86H16.74c-0.83,0-1.5,0.67-1.5,1.5s0.67,1.5,1.5,1.5h31.61c0.83,0,1.5-0.67,1.5-1.5
					S49.19,47.86,48.35,47.86z"/>
			</g>
			<g id="cloud" transform="scale(0.013888888888889)">
				<path class="st0" d="M51.12,51.11H20.88c-4.04,0-7.32-3.28-7.32-7.32c0-3.06,1.87-6.46,7-7.36c-0.08-3.09,0.36-10.06,5.72-12.64
					c5.99-2.89,10.74-1.81,14.5,3.3c3.62-0.97,6.95-0.24,9.26,2.08c2.45,2.45,2.79,5.56,2.76,7.27c4.63,1.91,5.64,5.01,5.64,7.35
					C58.44,47.83,55.16,51.11,51.12,51.11z M32.28,25.24c-1.33,0-2.87,0.37-4.7,1.25c-4.91,2.37-3.95,10.99-3.95,11.08l0.18,1.56
					l-1.56,0.12c-2.13,0.16-5.69,0.96-5.69,4.55c0,2.38,1.93,4.31,4.31,4.31h30.25c2.38,0,4.31-1.93,4.31-4.31c0-0.83,0-3.36-4.69-4.91
					l-1.23-0.41l0.22-1.27c0.01-0.09,0.53-3.55-1.82-5.91c-1.72-1.72-4.29-2.08-7.23-1.02l-1.12,0.4l-0.65-1
					C37.42,27.38,35.48,25.24,32.28,25.24z"/>
			</g>
		</defs>
	</svg>
	`,
});
