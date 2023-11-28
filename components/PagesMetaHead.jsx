import Head from 'next/head';

function PagesMetaHead({ title, keywords, description }) {
	return (
		<Head>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			/>
			<meta name="keywords" content={keywords} />
			<meta name="description" content={description} />
			<meta charSet="utf-8" />
			<link rel="icon" href="/favicon.ico" />
			<title>{title}</title>
		</Head>
	);
}

PagesMetaHead.defaultProps = {
	title: 'Lucerny Website',
	keywords: 'next.js, react, web, ui',
	keywords: 'Lucerny Web Development Website Ontwikkeling Webdesign en complete websites voor bedrijven en particulieren.',
};

export default PagesMetaHead;
