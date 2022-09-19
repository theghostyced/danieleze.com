import type {NextPage} from 'next';
import PageLayout from '~/layouts/PageLayout';

const Home: NextPage = () => {
	return (
		<PageLayout title="Daniel Eze">
			<main id="main">
				<section className="hero v-spacing">
					<div className="container grid">
						<div className="hero__content">
							<h1 className="hero__title type-subhead">Hi, I’m Daniel.</h1>
						</div>
					</div>
				</section>
			</main>
		</PageLayout>
	);
};

export default Home;
