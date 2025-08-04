import { Anton } from "next/font/google";
import "../styles/globals.css";

const anton = Anton({ weight: "400", subsets: ["latin"] });

export const metadata = {
	title: "Yuki-Suou Discord Bot",
	description: "The ultimate Discord bot for anime lovers",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${anton.className} text-white`}>
				<div className="fixed inset-0 z-0 pointer-events-none">
					{/* Global solid darker violet background */}
					<div className="absolute inset-0 bg-[#2a2342]" />
					{/* Global background texture, lebih gelap & lebih samar */}
					<div className="absolute inset-0 bg-[url('/assets/image/background.png')] bg-cover bg-center opacity-10" />
					{/* Global dot pattern, lebih gelap & samar */}
					<div
						className="absolute inset-0 opacity-30 animate-moveBackground"
						style={{
							backgroundImage: `radial-gradient(circle at 1px 1px, #382f5e 1px, transparent 0)`,
							backgroundSize: "40px 40px",
						}}
					/>
				</div>
				{/* Content container */}
				<div className="relative z-10">{children}</div>
			</body>
		</html>
	);
}
