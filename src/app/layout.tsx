import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Yuki-Suou Discord Bot",
	description: "The ultimate Discord bot for anime lovers",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${inter.className} text-white`}>
				<div className="fixed inset-0 z-0 pointer-events-none">
					{/* Global background color gradient */}
					<div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
					{/* Global background texture */}
					<div className="absolute inset-0 bg-[url('/assets/image/background.png')] bg-cover bg-center opacity-30" />
					{/* Global dot pattern */}
					<div
						className="absolute inset-0 opacity-20 animate-moveBackground"
						style={{
							backgroundImage: `radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.1) 1px, transparent 0)`,
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
