/* eslint-disable @next/next/no-html-link-for-pages */
import LightDarkSwitcher from '~/components/common/LightDarkSwitcher';

const Header = () => {
	return (
		<header id="site-header" className="site-header">
			<div className="container">
				<a className="logo type-tag" aria-label="home" href="/">
					{' '}
					Daniel C. Eze
				</a>
				<nav className="site-nav" aria-label="main-nav">
					<ul className="site-nav__list" role="list">
						<li>
							<a className="site-nav__item type-nav" href="/">
								About
							</a>
						</li>
						<li>
							<a className="site-nav__item type-nav" href="/">
								Desk
							</a>
						</li>
						<li>
							<a className="site-nav__item type-nav" href="/">
								Blog
							</a>
						</li>
						<li>
							<a className="site-nav__item type-nav" href="/">
								Contact
							</a>
						</li>
					</ul>
				</nav>
				<LightDarkSwitcher />
			</div>
		</header>
	);
};

export default Header;
