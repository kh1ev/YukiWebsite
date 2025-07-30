import { motion } from "framer-motion";
import {
	Book,
	FileText,
	Globe,
	Heart,
	Mail,
	Shield,
	Star,
	Users,
	Zap,
} from "lucide-react";
import { ReactElement } from "react";

interface NavItem {
	id: string;
	label: string;
	icon: ReactElement;
}

interface InfoItem {
	href: string;
	label: string;
	icon: ReactElement;
	external?: boolean;
	email?: boolean;
}

const Footer = () => {
	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	const navItems: NavItem[] = [
		{
			id: "hero",
			label: "Home",
			icon: <Star className="w-3 h-3 xs:w-4 xs:h-4" />,
		},
		{
			id: "about",
			label: "About",
			icon: <Users className="w-3 h-3 xs:w-4 xs:h-4" />,
		},
		{
			id: "features",
			label: "Features",
			icon: <Heart className="w-3 h-3 xs:w-4 xs:h-4" />,
		},
		{
			id: "reviews",
			label: "Reviews",
			icon: <Zap className="w-3 h-3 xs:w-4 xs:h-4" />,
		},
		{
			id: "premium",
			label: "Premium",
			icon: <Zap className="w-3 h-3 xs:w-4 xs:h-4" />,
		},
	];

	const infoItems: InfoItem[] = [
		{
			href: "https://kh1ev.my.id",
			label: "Kh1ev Community",
			icon: <Globe className="w-3 h-3 xs:w-4 xs:h-4" />,
			external: true,
		},
		{
			href: "mailto:team@yukisuou.xyz",
			label: "team@yukisuou.xyz",
			icon: <Mail className="w-3 h-3 xs:w-4 xs:h-4" />,
			email: true,
		},
	];

	const legalLinks = [
		{
			href: "/privacy-policy",
			label: "Privacy Policy",
			icon: <Shield className="w-3 h-3 xs:w-4 xs:h-4" />,
		},
		{
			href: "/terms-of-service",
			label: "Terms of Service",
			icon: <FileText className="w-3 h-3 xs:w-4 xs:h-4" />,
		},
		{
			href: "/community-guidelines",
			label: "Community Guidelines",
			icon: <Book className="w-3 h-3 xs:w-4 xs:h-4" />,
		},
	];

	return (
		<footer className="relative border-t border-white/20">
			<div className="relative max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-5 xs:gap-6 sm:gap-8 lg:gap-12">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true, margin: "-50px" }}
						className="space-y-2 xs:space-y-3 sm:space-y-4 lg:space-y-6"
					>
						<div className="flex flex-col gap-2">
							<div className="text-6xl font-black text-white">YUKISUOU</div>
						</div>
						<p className="text-gray-300 text-sm leading-relaxed max-w-md">
							Stay connected with Yuki Suou! Follow us for updates, maintenance
							feature, and more.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						viewport={{ once: true, margin: "-50px" }}
						className="space-y-4"
					>
						<h3 className="text-lg font-semibold text-white">ABOUT US</h3>
						<div className="space-y-3">
							{navItems.map((item, index) => (
								<motion.button
									key={index}
									onClick={() => scrollToSection(item.id)}
									whileHover={{ scale: 1.05, x: 5 }}
									whileTap={{ scale: 0.95 }}
									className="cursor-pointer flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 text-sm"
								>
									<span>{item.label}</span>
								</motion.button>
							))}
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true, margin: "-50px" }}
						className="space-y-4"
					>
						<div className="space-y-4">
							<div>
								<h3 className="text-lg font-semibold text-white mb-3">LEGAL</h3>
								<div className="space-y-2">
									{legalLinks.map((link, index) => (
										<motion.a
											key={index}
											href={link.href}
											whileHover={{ scale: 1.05, x: 5 }}
											whileTap={{ scale: 0.95 }}
											className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm"
										>
											{link.label}
										</motion.a>
									))}
								</div>
							</div>

							<div>
								<h3 className="text-lg font-semibold text-white mb-3">
									INFORMATION
								</h3>
								<div className="space-y-2">
									{infoItems.map((item, index) => (
										<motion.a
											key={index}
											href={item.href}
											target={item.external ? "_blank" : "_self"}
											rel={item.external ? "noopener noreferrer" : ""}
											whileHover={{ scale: 1.05, x: 5 }}
											whileTap={{ scale: 0.95 }}
											className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm"
										>
											{item.label}
										</motion.a>
									))}
								</div>
							</div>
						</div>
					</motion.div>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.3 }}
					viewport={{ once: true, margin: "-50px" }}
					className="mt-6 xs:mt-8 sm:mt-12 lg:mt-16 pt-4 xs:pt-6 sm:pt-8 border-t border-white/20"
				>
					<div className="flex flex-col space-y-4">
						<div className="text-center">
							<p className="text-lg font-bold text-white mb-2">
								COPYRIGHT 2025 © KH1EV COMMUNITY
							</p>
						</div>
					</div>
				</motion.div>
			</div>
		</footer>
	);
};

export default Footer;
