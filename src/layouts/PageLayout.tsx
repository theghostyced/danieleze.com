import type {FC} from 'react';
import Head from 'next/head';
import {useTheme} from '~/providers/ThemeProvider';
import Header from '~/components/common/Header';

export interface Props {
	title: string;
	children: React.ReactNode;
}

const PageLayout: FC<Props> = (props) => {
	const {title, children} = props;
	const {theme} = useTheme();

	return (
		<>
			<Head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />

				{/* <!-- Darkmode Meta --> */}
				<meta name="color-scheme" content="dark light" />

				{/* <!-- SEO --> */}
				<title>{title}</title>
				<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
				<meta name="generator" content="" />

				{/* <!-- Favicons --> */}

				{/* <!-- Open graph --> */}
				<meta
					property="og:title"
					content="The personal Web site of Eze Daniel — frontend engineer"
				/>
				<meta property="og:description" content="" />

				<meta
					property="og:image"
					content="https://www.apple.com/ac/structured-data/images/open_graph_logo.png?202110180743"
				/>

				<meta property="og:locale" content="en_GB" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="/" />

				{/* <!-- Twitter --> */}
				<meta
					name="twitter:title"
					content="The personal Web site of Eze Daniel — frontend engineer"
				/>
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:site" content="@theghostyced" />
				<meta name="twitter:description" content="" />
				<meta name="twitter:creator" content="@theghostyced" />
				<meta
					property="og:image"
					content="https://www.apple.com/ac/structured-data/images/open_graph_logo.png?202110180743"
				/>
			</Head>
			<Header />
			{children}
			{/* // <!-- My signature -->
// </><!-- <svg
//     width="181"
//     height="67"
//     viewBox="0 0 181 67"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M36.504 2.448C36.696 2.128 36.248 1.616 35.544 1.296C34.84 0.911999 34.2 0.975998 34.072 1.36C33.816 2 33.432 5.712 33.112 9.424C31.128 9.168 29.144 9.04 27.224 9.04C26.008 9.04 24.856 9.04 23.768 9.168C11.224 10.128 0.344 16.528 0.344 26.192C0.344 27.472 0.536 28.816 0.92 30.224C3.48 38.736 13.08 45.84 22.232 45.2C25.752 44.88 26.648 42.704 24.28 43.408C23.704 43.6 22.936 43.856 22.168 43.92C13.848 44.432 5.336 37.52 3.352 30.864C2.968 29.52 2.776 28.24 2.776 27.024C2.776 17.872 13.336 11.92 25.24 11.024C26.392 10.96 27.544 10.896 28.76 10.896C30.168 10.896 31.576 10.96 32.984 11.088C32.792 13.072 32.664 14.992 32.6 16.208C32.088 24.656 31.384 38.8 31.256 47.952V50.576C25.944 53.456 23.896 55.696 23.128 57.68C22.744 59.216 23 60.752 24.152 62.16C24.6 62.672 25.304 63.312 26.008 63.76C28.184 65.36 31.256 66.064 34.52 66.064C35.16 66.064 35.8 66.064 36.44 66C37.976 65.936 39.576 65.68 40.92 65.296C46.68 64.016 52.696 61.072 56.92 56.656C60.248 53.328 62.616 49.168 63.96 44.688L64.088 43.984L66.776 43.536L76.12 42.32C76.632 42.256 76.696 42.192 76.376 41.744C76.056 41.424 75.288 41.104 73.048 41.104C71.256 41.104 68.632 41.296 64.536 41.872L64.728 40.528C64.856 39.632 64.856 38.672 64.856 37.776C64.856 32.528 63.128 27.152 59.16 22.288C53.656 15.696 44.44 11.472 35.48 9.808C35.736 6.672 36.056 3.536 36.504 2.448ZM57.176 22.288C60.824 26.96 62.488 32.208 62.488 37.328C62.488 38.992 62.296 40.656 61.976 42.256H61.912L61.528 42.384C48.984 44.496 39.832 46.992 33.624 49.616C33.688 49.424 33.624 49.232 33.624 49.04C33.624 39.952 34.456 26.448 35.096 16.976C35.16 15.888 35.224 13.776 35.416 11.408C43.736 12.688 51.928 16.336 57.176 22.288ZM33.24 60.88C33.624 60.88 33.944 60.624 33.816 60.304L33.752 59.984C33.624 59.856 33.496 59.28 33.496 54.672V52.176C39.128 49.552 47.64 46.928 59.736 44.688L61.272 44.496L61.144 44.816C59.928 48.592 57.688 52.176 54.808 55.12C50.52 59.408 44.696 62.224 39.256 63.504C37.592 63.824 36.184 64.08 34.776 64.144C33.688 64.272 32.536 64.272 31.704 64.208C29.528 64.08 27.992 63.504 27.032 62.928C25.816 61.968 25.112 60.688 25.624 59.024C26.008 57.168 27.992 55.312 31.32 53.392C31.512 55.44 31.256 60.752 33.24 60.88ZM75.275 47.504C75.979 47.952 76.747 48.144 77.579 48.144C80.971 48.144 85.195 44.88 86.987 43.28C87.819 45.584 89.419 46.8 91.531 47.312C94.219 47.952 98.635 45.904 100.235 44.304C103.755 40.784 102.795 39.184 101.707 40.272C99.403 42.832 93.899 46.096 90.635 45.456C89.483 45.136 89.163 43.856 89.227 42.768C89.355 41.552 89.931 40.4 90.251 39.44C90.699 38.672 88.523 37.264 88.139 37.968L87.051 39.44H86.987C85.387 38.736 83.595 38.352 81.803 38.352C79.563 38.352 77.387 38.928 75.659 40.08C74.059 41.168 73.355 42.576 73.355 43.984C73.355 45.328 73.995 46.544 75.275 47.504ZM76.427 46.096C75.467 46.032 75.083 45.328 75.275 44.56C75.979 41.616 80.203 40.4 83.403 40.4C84.363 40.4 85.259 40.528 85.899 40.72C83.659 43.088 79.499 45.712 76.427 46.096ZM100.644 46.928C100.708 47.952 102.948 48.528 102.884 47.696L102.948 46.224C104.164 43.536 109.028 40.464 113.764 39.952C113.636 40.72 113.572 41.424 113.572 42.128C113.572 43.28 113.764 44.368 114.404 45.328C115.556 46.992 117.604 47.76 119.46 47.76C123.94 47.76 128.1 44.368 129.636 42.384C130.596 41.168 130.34 39.76 130.084 39.888C128.036 40.912 122.468 45.968 118.5 45.968C117.668 45.968 116.964 45.776 116.324 45.264C115.492 44.048 116.196 41.616 116.196 40.528C116.196 39.568 115.044 38.416 113.828 38.288C110.244 37.904 105.636 40.208 103.46 41.808L103.588 39.632C103.652 39.248 103.076 38.672 102.564 38.352C101.924 38.096 101.284 38.16 101.284 38.608L100.644 45.008C100.516 45.776 100.58 46.416 100.644 46.928ZM129.538 47.184C130.755 48.528 132.483 48.912 134.083 48.848C138.499 48.656 144.323 43.6 145.539 41.36C146.307 39.952 145.667 39.568 145.411 39.824C143.491 41.744 136.707 46.864 132.739 46.864C132.035 46.864 131.395 46.672 130.883 46.288C129.922 45.456 131.203 38.224 131.715 37.712C131.779 37.392 131.395 36.88 130.691 36.624C129.922 36.432 129.282 36.496 129.218 36.816C128.514 37.904 128.13 39.888 128.13 41.872C128.13 43.984 128.578 46.16 129.538 47.184ZM130.883 32.336C131.459 32.656 132.227 32.656 132.419 32.4C132.611 32.08 133.123 30.672 133.251 30.352C133.443 29.968 133.443 29.52 133.443 29.264C133.571 28.944 133.059 28.432 132.227 28.24C131.587 27.984 130.883 28.112 130.883 28.496L130.755 29.456C130.627 29.776 130.178 31.056 130.05 31.248C129.73 31.504 130.114 32.08 130.883 32.336ZM154.101 49.424C158.517 49.168 162.613 46.032 164.405 42.32C165.301 40.528 165.557 39.056 164.085 40.592C161.397 43.408 156.917 47.888 150.901 47.888C148.661 47.888 146.421 45.84 146.229 44.624C148.469 44.624 151.221 43.088 152.053 41.04C152.757 39.184 150.901 37.264 148.917 37.264C145.781 37.392 143.861 40.272 143.861 43.088C143.861 43.728 143.989 44.368 144.181 44.944C145.461 48.912 150.325 49.616 154.101 49.424ZM149.941 39.44C150.645 40.144 148.853 41.872 146.165 43.088C146.101 41.488 148.597 38.096 149.941 39.44ZM169.982 52.624C174.014 52.624 179.134 45.712 180.286 42.512C180.542 41.744 180.414 40.144 179.774 41.04C178.814 42.256 171.07 52.688 167.742 50.64C166.334 49.68 165.822 45.136 165.822 39.44C165.822 28.368 167.678 13.008 168.062 11.792C168.062 11.472 167.549 10.96 166.91 10.64C166.27 10.384 165.886 10.448 165.822 10.832C164.989 13.52 163.197 27.28 163.197 37.904C163.197 43.216 163.645 47.76 164.861 49.68C166.142 51.472 167.934 52.624 169.982 52.624Z"
//       fill="white"></path>
//   </svg>
// --> */}
		</>
	);
};

export default PageLayout;
