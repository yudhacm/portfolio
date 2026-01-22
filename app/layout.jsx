import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";
// import Chat from "@/components/Chat";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

export const metadata = {
    title: "yudha | Portofolio",

    description:
		"My name is Yudha, I'm a web developer and I'm passionate about it. I'm currently studying at Universitas Trunodjoyo Madura.",

    author: "Yudha Caesar Maulana",
    siteUrl: "https://www.yudhacaesarmaulana.my.id",
    applicationName: "Yudha",

    keywords: [
		"yudha",
		"yudha caesar",
		"yudha caesar maulana",
		"yudha caesar maulana portfolio",
		"yudha caesar maulana portofolio",
		"yams",
		"yudha porto",
		"yudha utm",
		"yudha caesar utm",
		"yudha caesar maulana utm",
	],

    openGraph: {
		type: "website",
		url: "https://www.yudhacaesarmaulana.my.id",
		title: "Yudha | Portofolio",
		site_name: "Yudha | Portofolio",
		description: "My name is Yudha, This is my portofolio website.",
		width: 1200,
		height: 630,
		images: [
			{
				url: "/og-image-rev.png",
				alt: "Yudha Portofolio",
			},
		],
		site_name: "Yudha | Portofolio",
	}
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ClientTopProgressBar />
				<Navbar />
				{children}
				{/* <Chat /> */}
				<Analytics />
			</body>
		</html>
	);
}
