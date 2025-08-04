import type React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
	Bot,
	ChevronRight,
	Crown,
	Home,
	Menu,
	Sparkles,
	Star,
	User,
	X,
} from "lucide-react";
import { useEffect, useState } from "react";

interface NavItem {
	id: string;
	label: string;
	icon: React.ElementType;
}

interface NavbarProps {
	activeSection: string;
	onSectionChange: (section: string) => void;
}

const navigationItems: NavItem[] = [
	{ id: "hero", label: "Home", icon: Home },
	{ id: "about", label: "About", icon: User },
	{ id: "features", label: "Features", icon: Star },
	{ id: "reviews", label: "Reviews", icon: Sparkles },
	{ id: "premium", label: "Premium", icon: Crown },
];

export default function Navbar({
	activeSection,
	onSectionChange,
}: NavbarProps) {
	const [, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			setIsScrolled(scrollTop > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleSectionClick = (sectionId: string) => {
		onSectionChange(sectionId);
		setIsMobileMenuOpen(false);
	};

	return (
		<>
			{/* Desktop & Mobile Navbar */}
			<motion.nav
				initial={{ y: -100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5 }}
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${"bg-transparent"}`}
			>
				<div className="max-w-6xl mx-auto px-3 xs:px-4 sm:px-6 py-3 xs:py-4">
					<div className="flex items-center justify-between">
						{/* Logo */}
						<motion.div
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							onClick={() => handleSectionClick("hero")}
							className="flex items-center gap-2 xs:gap-2.5 sm:gap-3 cursor-pointer group"
						>
							<div
								className="text-sm xs:text-base sm:text-lg lg:text-xl xl:text-2xl font-bold"
							>
								<span className="text-white">YUKI</span>
								<span className="text-gray-200">SUOU</span>
							</div>
						</motion.div>

						<div className="hidden lg:flex items-center space-x-1 sm:space-x-1.5 xl:space-x-2">
							{navigationItems.map((item, index) => (
								<motion.button
									key={item.id}
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									initial={{ opacity: 0, y: -20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.1 }}
									onClick={() => handleSectionClick(item.id)}
									className={`group relative px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
										activeSection === item.id
											? "text-white bg-gradient-to-r from-gray-700/70 to-gray-600/70 shadow-sm"
											: "text-gray-200 hover:text-white hover:bg-gray-700/50"
									}`}
								>
									{item.label}
									{activeSection === item.id && (
										<motion.div
											layoutId="activeIndicator"
											className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-white to-gray-300 rounded-full"
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											transition={{ duration: 0.3 }}
										/>
									)}
								</motion.button>
							))}
						</div>

						{/* CTA Button - Desktop */}
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="hidden cursor-pointer lg:flex items-center gap-1.5 xs:gap-2 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-800 hover:to-gray-700 text-white px-4 xs:px-5 py-2 xs:py-2.5 rounded-lg xs:rounded-xl font-semibold transition-all duration-300 shadow-lg group"
						>
							Get Started
							<ChevronRight className="w-3 xs:w-3.5 h-3 xs:h-3.5 group-hover:translate-x-0.5 transition-transform" />
						</motion.button>

						{/* Mobile Menu Button */}
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							className="lg:hidden relative z-60"
						>
							<div className="p-1 xs:p-1.5 rounded-lg xs:rounded-xl hover:bg-gray-700/20 transition-colors text-white relative z-60">
								<AnimatePresence mode="wait">
									{isMobileMenuOpen ? (
										<motion.div
											key="close"
											initial={{ rotate: -90, opacity: 0 }}
											animate={{ rotate: 0, opacity: 1 }}
											exit={{ rotate: 90, opacity: 0 }}
											transition={{ duration: 0.2 }}
										>
											<X className="w-5 xs:w-6 h-5 xs:h-6" />
										</motion.div>
									) : (
										<motion.div
											key="menu"
											initial={{ rotate: 90, opacity: 0 }}
											animate={{ rotate: 0, opacity: 1 }}
											exit={{ rotate: -90, opacity: 0 }}
											transition={{ duration: 0.2 }}
										>
											<Menu className="w-5 xs:w-6 h-5 xs:h-6" />
										</motion.div>
									)}
								</AnimatePresence>
							</div>
						</motion.button>
					</div>
				</div>
			</motion.nav>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<>
						{/* Backdrop */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
							className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
							onClick={() => setIsMobileMenuOpen(false)}
						/>

						{/* Menu Content */}
						<motion.div
							initial={{ x: "100%", opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							exit={{ x: "100%", opacity: 0 }}
							transition={{ type: "spring", damping: 25, stiffness: 200 }}
							className="fixed top-0 right-0 h-full w-72 xs:w-80 bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
						>
							<div className="flex flex-col h-full">
								{/* Header */}
								<div className="flex items-center justify-between p-4 xs:p-6 border-b border-gray-200">
									<div className="flex items-center gap-2.5 xs:gap-3">
										<div className="w-8 xs:w-9 sm:w-10 h-8 xs:h-9 sm:h-10 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg xs:rounded-xl flex items-center justify-center shadow-lg">
											<Bot className="text-white w-4 xs:w-4.5 sm:w-5 h-4 xs:h-4.5 sm:h-5" />
										</div>
										<div
											className="text-base xs:text-lg sm:text-xl font-bold"
										>
											<span className="text-white">YUKI</span>
											<span className="text-gray-300">SUOU</span>
										</div>
									</div>
									<motion.button
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.9 }}
										onClick={() => setIsMobileMenuOpen(false)}
										className="p-1.5 xs:p-2 rounded-lg xs:rounded-xl hover:bg-gray-200 transition-colors text-gray-600"
									>
										<X className="w-5 xs:w-5.5 h-5 xs:h-5.5" />
									</motion.button>
								</div>

								{/* Navigation Items */}
								<div className="flex-1 py-4 xs:py-6">
									{navigationItems.map((item, index) => {
										const IconComponent = item.icon;
										return (
											<motion.button
												key={item.id}
												initial={{ opacity: 0, x: 50 }}
												animate={{ opacity: 1, x: 0 }}
												transition={{ delay: index * 0.1 }}
												onClick={() => handleSectionClick(item.id)}
												className={`group relative w-full flex items-center gap-3 xs:gap-4 px-4 xs:px-6 py-3 xs:py-4 text-left transition-all duration-300 ${
													activeSection === item.id
														? "bg-gradient-to-r from-gray-700 to-gray-600 text-white shadow-sm border-l-4 border-white"
														: "text-white hover:text-white hover:bg-gray-700"
												}`}
											>
												<IconComponent
													className={`w-4 xs:w-4.5 sm:w-5 h-4 xs:h-4.5 sm:h-5 transition-colors ${
														activeSection === item.id
															? "text-white"
															: "text-gray-300 group-hover:text-white"
													}`}
												/>
												<div className="flex items-center justify-between flex-1">
													<span className="text-sm xs:text-base font-medium">
														{item.label}
													</span>
													{activeSection === item.id && (
														<div className="ml-auto w-1.5 xs:w-2 h-1.5 xs:h-2 bg-gray-800 rounded-full" />
													)}
													<ChevronRight
														className={`ml-auto transition-transform w-3 xs:w-3.5 sm:w-4 h-3 xs:h-3.5 sm:h-4 ${
															activeSection === item.id
																? "text-white"
																: "text-gray-300 group-hover:translate-x-1 group-hover:text-white"
														}`}
													/>
												</div>
											</motion.button>
										);
									})}
								</div>

								{/* CTA Button - Mobile */}
								<div className="p-4 xs:p-6 border-t border-gray-200">
									<motion.button
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
										className="w-full bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-800 hover:to-gray-700 text-white px-4 py-2.5 xs:py-3 rounded-lg xs:rounded-xl font-semibold transition-all duration-300 shadow-lg flex items-center justify-center gap-2 xs:gap-3 group"
									>
										Get Started
										<ChevronRight className="w-3.5 xs:w-4 h-3.5 xs:h-4 group-hover:translate-x-0.5 transition-transform" />
									</motion.button>
								</div>
							</div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</>
	);
}
