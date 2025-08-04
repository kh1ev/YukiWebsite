"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	ArrowRight,
	Bookmark,
	Bot,
	Heart,
	MessageCircle,
	Send,
	Star,
	Quote,
	Crown,
	Gift,
	Zap,
	Globe,
	Brain,
	Users,
	Sparkles,
	Shield,
} from "lucide-react";
import Image from "next/image";

type SectionId = "hero" | "about" | "features" | "reviews" | "premium";

export default function Home() {
	const [activeSection, setActiveSection] = useState<SectionId>("hero");
	const [, setScrollY] = useState<number>(0);
	const [isScrolling, setIsScrolling] = useState<boolean>(false);

	const scrollToSection = useCallback(
		(sectionId: SectionId) => {
			if (isScrolling) return;

			setActiveSection(sectionId);
			const element = document.getElementById(sectionId);
			if (element) {
				setIsScrolling(true);

				// Get the navbar height to offset the scroll position
				const navbarHeight = 80; // Approximate navbar height
				const elementPosition =
					element.getBoundingClientRect().top + window.pageYOffset;
				const offsetPosition = elementPosition - navbarHeight;

				window.scrollTo({
					top: offsetPosition,
					behavior: "smooth",
				});

				setTimeout(() => setIsScrolling(false), 1000);
			}
		},
		[isScrolling],
	);

	useEffect(() => {
		let scrollTimeout: NodeJS.Timeout;

		const handleScroll = () => {
			clearTimeout(scrollTimeout);
			scrollTimeout = setTimeout(() => {
				setScrollY(window.scrollY);

				if (!isScrolling) {
					const sections: SectionId[] = [
						"hero",
						"about",
						"features",
						"reviews",
						"premium",
					];
					const scrollPosition = window.scrollY + 100;

					for (const section of sections) {
						const element = document.getElementById(section);
						if (element) {
							const { offsetTop, offsetHeight } = element;
							if (
								scrollPosition >= offsetTop &&
								scrollPosition < offsetTop + offsetHeight
							) {
								setActiveSection(section);
								break;
							}
						}
					}
				}
			}, 100);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			clearTimeout(scrollTimeout);
			window.removeEventListener("scroll", handleScroll);
		};
	}, [isScrolling]);

	// Review data
	const reviews = [
		{
			name: "Alex Johnson",
			avatar: "/assets/image/yukiImage1.jpg",
			role: "Discord Server Owner",
			rating: 5,
			review:
				"Yuki Suou has transformed our Discord server! The Indonesian chatbot is incredibly natural and the community loves it.",
			server: "Gaming Community",
			members: "2.5K members",
		},
		{
			name: "Sarah Chen",
			avatar: "/assets/image/yukiImage2.jpg",
			role: "Community Manager",
			rating: 5,
			review:
				"The moderation features are outstanding. Our server has never been safer and more engaging. Highly recommended!",
			server: "Tech Hub",
			members: "5.2K members",
		},
		{
			name: "Mike Rodriguez",
			avatar: "/assets/image/yukiAbout.jpg",
			role: "Content Creator",
			rating: 5,
			review:
				"Amazing AI image generation feature! My community creates the most incredible artwork now. The performance is lightning fast.",
			server: "Art Community",
			members: "1.8K members",
		},
	];

	// Premium plan data
	const plans = [
		{
			name: "Bundle Plan",
			price: "$19.99",
			period: "/month",
			description: "Perfect for growing communities",
			features: [
				"All Premium Features",
				"Custom Commands",
				"Advanced Moderation",
				"Priority Support",
				"Custom Branding",
				"Analytics Dashboard",
			],
			popular: false,
			gradient: "from-purple-500 to-purple-600",
		},
		{
			name: "Server Plan",
			price: "$39.99",
			period: "/month",
			description: "Best for large Discord servers",
			features: [
				"Everything in Bundle",
				"Unlimited Commands",
				"Advanced AI Features",
				"24/7 Premium Support",
				"Custom Integrations",
				"White-label Solution",
				"API Access",
			],
			popular: true,
			gradient: "from-purple-500 to-purple-600",
		},
		{
			name: "Welcome Card",
			price: "$9.99",
			period: "/month",
			description: "Enhanced welcome experience",
			features: [
				"Custom Welcome Cards",
				"Member Statistics",
				"Role Assignment",
				"Welcome Messages",
				"Custom Backgrounds",
			],
			popular: false,
			gradient: "from-purple-500 to-purple-600",
		},
	];

	return (
		<div className="overflow-x-hidden relative">
			<Navbar activeSection={activeSection} onSectionChange={scrollToSection} />
			<main className="relative">
				{/* Hero Section */}
				<div
					id="hero"
					className="min-h-screen pt-20 relative overflow-hidden text-white"
				>
					<div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full min-h-screen flex flex-col lg:flex-row items-center justify-between relative z-10">
						<motion.div
							className="w-full lg:w-1/2 max-w-xl mx-auto lg:mx-0 text-center lg:text-left order-2 lg:order-1"
							initial={{ x: -50, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }}
						>
							{/* Main Title and Description */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.6 }}
								className="mb-8"
							>
								<h2
									className="text-5xl lg:text-6xl font-bold mb-3 flex items-center gap-3 justify-center lg:justify-start"
									style={{
										fontFamily: "Bebas Neue, Impact, Arial Black, sans-serif",
									}}
								>
									<span className="text-gray-300">
										YUKI{" "}
										<span className="relative">
											SUOU
											<span className="text-xl align-top ml-1 absolute -right-6 top-1.5">
												TM
											</span>
										</span>
									</span>
								</h2>
								<p className="text-gray-400 text-lg leading-relaxed max-w-lg lg:mx-0 mx-auto mt-6 text-center lg:text-left">
									Yuki Suou is an Indonesian-language Discord chatbot featuring
									minigames, fishing economy, and various community tools. Boost
									your server&apos;s engagement and fun with Yuki Suou!
								</p>
							</motion.div>

							{/* CTA Button */}
							<motion.div
								initial={{ opacity: 0, y: 20, scale: 0.95 }}
								animate={{ opacity: 1, y: 0, scale: 1 }}
								transition={{
									duration: 0.8,
									delay: 0.8,
									type: "spring",
									stiffness: 120,
									damping: 10,
								}}
								className="mb-8"
							>
								<motion.button
									whileHover={{
										scale: 1.07,
										boxShadow: "0 8px 32px rgba(88,28,135,0.25)",
										x: 4,
									}}
									whileTap={{ scale: 0.97 }}
									className="bg-purple-900 hover:bg-purple-800 text-white border border-purple-800 rounded-md px-8 py-2 text-sm transition-colors flex items-center gap-2 font-semibold shadow-lg"
								>
									Invite
									<motion.span
										initial={false}
										animate={{ x: [0, 6, 0] }}
										transition={{
											repeat: Infinity,
											repeatType: "loop",
											duration: 1.2,
											ease: "easeInOut",
										}}
										className="inline-flex"
									>
										<ArrowRight className="w-5 h-5" />
									</motion.span>
								</motion.button>
							</motion.div>

							{/* Powered By */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 1.0 }}
								className="text-left"
							>
								<p className="text-gray-400 mb-4">Powered by</p>
								<div className="flex items-center justify-left gap-8">
									<Image
										src="/assets/image/meta.svg"
										alt="Meta AI Logo"
										width={100}
										height={40}
										className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
									/>
									<Image
										src="/assets/image/kh1ev.png"
										alt="KH1EV Community Logo"
										width={120}
										height={40}
										className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
									/>
								</div>
							</motion.div>
						</motion.div>

						{/* Character Image - Right Side */}
						<motion.div
							className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center order-1 lg:order-2 mb-10 lg:mb-0"
							initial={{ x: 50, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }}
							whileHover={{
								x: 60,
								rotate: 4,
								scale: 1.04,
							}}
							whileTap={{ scale: 0.98 }}
						>
							<div className="relative w-[500px] h-[750px] sm:w-[600px] sm:h-[900px] md:w-[700px] md:h-[1050px] rounded-2xl">
								<Image
									src="/assets/image/5d10a4d18d7fccfd13e418b9303f27d9_2.png"
									alt="Yuki Suou Character"
									fill
									className="object-contain object-right-center"
									priority
									quality={100}
								/>
							</div>
						</motion.div>
					</div>
				</div>

				{/* About Section */}
				<div
					id="about"
					className="min-h-screen relative overflow-hidden flex pt-16 sm:pt-20 pb-10 sm:pb-12 items-center"
				>
					<div className="container mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 relative z-10 w-full">
						<div className="flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-10 md:gap-16 lg:gap-20">
							<motion.div
								className="w-full max-w-sm sm:max-w-md lg:max-w-lg flex-shrink-0 relative z-20"
								initial={{ x: -50, opacity: 0, rotate: -8 }}
								animate={{ x: -40, opacity: 1, rotate: -8 }}
								whileHover={{
									x: -60,
									rotate: -4,
									scale: 1.04,
									boxShadow: "0 16px 40px rgba(107,33,168,0.3)",
								}}
								transition={{ type: "spring", stiffness: 80, damping: 12 }}
								viewport={{ once: true }}
							>
								<div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden border border-gray-100">
									{/* Profile Header */}
									<div className="p-3 sm:p-4 flex items-center gap-3">
										<div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-gray-100">
											<Image
												src="/assets/image/yukiImage1.jpg"
												alt="Yuki Profile"
												width={40}
												height={40}
												className="w-full h-full object-cover"
											/>
										</div>
										<div>
											<h3 className="font-semibold text-gray-900 text-sm sm:text-base">
												Yuki Suou
											</h3>
											<p className="text-xs text-gray-500">Today</p>
										</div>
									</div>

									{/* Main Image - with darker purple gradient background */}
									<div className="relative aspect-[3/4] overflow-visible">
										{/* Darker purple gradient background */}
										<div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#581c87] via-[#3b1f7a] to-[#6b1f8b] opacity-95" />
										<div className="absolute inset-0 overflow-visible">
											<Image
												src="/assets/image/860b9ac3144023718f6632a20ee9eee2.png"
												alt="Yuki Character"
												fill
												className="object-contain object-center mix-blend-normal w-full h-full"
												priority
												quality={100}
											/>
										</div>
									</div>

									{/* Post Actions */}
									<div className="p-3 sm:p-4">
										<div className="flex items-center justify-between mb-3">
											<div className="flex items-center gap-4">
												<Heart className="w-6 h-6 cursor-pointer text-purple-500 fill-current" />
												<MessageCircle className="w-6 h-6 cursor-pointer text-purple-700" />
												<Send className="w-6 h-6 cursor-pointer text-purple-700" />
											</div>
											<Bookmark className="w-6 h-6 cursor-pointer text-purple-700" />
										</div>

										{/* Likes */}
										<div className="flex items-center gap-2 mb-2">
											<span className="font-semibold text-gray-900 text-sm">
												200 Likes
											</span>
										</div>

										{/* Caption */}
										<div className="text-sm text-gray-700">
											<span className="font-semibold">Yuki Suou</span> Lunch
										</div>
									</div>
								</div>
							</motion.div>

							<motion.div
								className="flex-1 text-left lg:pl-6 xl:pl-10"
								initial={{ x: 50, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{
									duration: 1,
									delay: 0.2,
									ease: [0.6, -0.05, 0.01, 0.99],
								}}
							>
								<motion.div
									initial={{ opacity: 0, y: 30 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.8, delay: 0.4 }}
								>
									<p className="text-purple-600 font-semibold text-sm sm:text-base lg:text-lg mb-3">
										Meta AI Contribution
									</p>

									<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
										Let&apos;s Make Discord Server More
										<br className="hidden sm:block" />
										<span className="text-gray-200">
											Interesting and Attractive with
										</span>
										<br className="hidden sm:block" />
										<span className="text-white">YUKISUOU</span>
									</h1>

									<div className="max-w-xl mb-8">
										<p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
											Yuki Suou is a community bot designed to enhance your
											server with a more engaging and modern experience,
											featuring an Indonesian-language chatbot powered by{" "}
											<span className="font-semibold text-white">Meta AI</span>.
										</p>
									</div>

									<motion.button
										className="bg-purple-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base shadow-lg flex items-center gap-2 sm:gap-3"
										whileHover={{
											scale: 1.05,
											boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
										}}
										whileTap={{ scale: 0.95 }}
									>
										<Bot className="w-5 h-5" />
										Invite
										<ArrowRight className="w-5 h-5" />
									</motion.button>
								</motion.div>
							</motion.div>
						</div>
					</div>
				</div>
				
				{/* Features Section */}
				<section
					id="features"
					className="py-20 relative overflow-hidden text-white"
				>
					<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
						{/* Popular Features Section */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
							className="text-center mb-16"
						>
							<div className="flex justify-center items-center gap-2 mb-6">
								<div className="flex items-center gap-4">
									<div className="text-6xl font-black text-transparent bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text">
										SUOU™
									</div>
									<div className="text-6xl font-black text-transparent bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text">
										YUKI
									</div>
								</div>
							</div>

							<motion.div
								initial={{ opacity: 0, scale: 0.9 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								viewport={{ once: true }}
							>
								<Badge
									variant="outline"
									className="bg-white/10 border-white/20 text-white mb-8 px-6 py-2 text-lg font-semibold"
								>
									Most Popular
								</Badge>
							</motion.div>

							<div className="flex flex-wrap justify-center gap-4 mb-12">
								{[
									{ name: "GLOBAL CHAT", icon: Globe },
									{ name: "CHATBOT", icon: Bot },
									{ name: "MEDIA SOCIAL", icon: Users },
									{ name: "META AI", icon: Brain },
									{ name: "YUKI SUOU", icon: Sparkles },
								].map((feature, index) => {
									const IconComponent = feature.icon;
									return (
										<motion.div
											key={feature.name}
											initial={{ opacity: 0, y: 20 }}
											whileInView={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.5, delay: index * 0.1 }}
											viewport={{ once: true }}
											whileHover={{ scale: 1.05 }}
											className="cursor-pointer"
										>
											<Badge
												variant="secondary"
												className="bg-white/5 hover:bg-white/10 border-white/10 text-white px-6 py-3 text-sm font-medium flex items-center gap-2 transition-all duration-300"
											>
												<IconComponent className="w-4 h-4" />
												{feature.name}
											</Badge>
										</motion.div>
									);
								})}
							</div>
						</motion.div>

						{/* Features Title */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
							className="text-center mb-16"
						>
							<h2 className="text-5xl font-bold mb-6">
								<span className="text-transparent bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text">
									Features
								</span>
							</h2>
						</motion.div>

						{/* Feature Cards Grid */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{[
								{
									title: "Indonesian ChatBot",
									description:
										"Advanced AI-powered chatbot with Indonesian language support for natural conversations",
									icon: MessageCircle,
									gradient: "from-purple-500 to-purple-600",
									features: [
										"Natural Language Processing",
										"Context Awareness",
										"24/7 Availability",
									],
								},
								{
									title: "Community Management",
									description:
										"Comprehensive moderation tools to keep your Discord server safe and engaging",
									icon: Shield,
									gradient: "from-purple-600 to-purple-700",
									features: ["Auto Moderation", "Custom Rules", "Member Analytics"],
								},
								{
									title: "AI Image Generation",
									description:
										"Create stunning AI-powered images and artwork directly in your Discord server",
									icon: Sparkles,
									gradient: "from-purple-700 to-purple-800",
									features: [
										"Multiple Art Styles",
										"High Quality Output",
										"Fast Generation",
									],
								},
								{
									title: "Fast Performance",
									description:
										"Lightning-fast responses with optimized performance for the best user experience",
									icon: Zap,
									gradient: "from-purple-800 to-purple-900",
									features: ["Low Latency", "High Uptime", "Scalable Infrastructure"],
								},
							].map((feature, index) => {
								const IconComponent = feature.icon;
								return (
									<motion.div
										key={feature.title}
										initial={{ opacity: 0, y: 30 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.8, delay: index * 0.1 }}
										viewport={{ once: true }}
										whileHover={{ scale: 1.02, y: -5 }}
										className="group"
									>
										<Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-300 h-full">
											<CardContent className="p-8">
												<div
													className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
												>
													<IconComponent className="w-8 h-8 text-white" />
												</div>

												<h3 className="text-2xl font-bold text-white mb-4">
													{feature.title}
												</h3>

												<p className="text-gray-300 mb-6 leading-relaxed">
													{feature.description}
												</p>

												<div className="space-y-2 mb-6">
													{feature.features.map((feat) => (
														<div key={feat} className="flex items-center gap-2">
															<Star className="w-4 h-4 text-purple-400 fill-current" />
															<span className="text-sm text-gray-200">{feat}</span>
														</div>
													))}
												</div>

												<Button
													variant="ghost"
													className="text-white hover:text-purple-400 hover:bg-white/5 p-0 h-auto font-medium group/btn"
												>
													Learn More
													<ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
												</Button>
											</CardContent>
										</Card>
									</motion.div>
								);
							})}
						</div>

						{/* View More Button */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.4 }}
							viewport={{ once: true }}
							className="text-center mt-16"
						>
							<Button
								size="lg"
								className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
							>
								View More Features
								<ArrowRight className="w-5 h-5 ml-2" />
							</Button>
						</motion.div>
					</div>
				</section>

				{/* Reviews Section */}
				<section id="reviews" className="py-20 relative">
					<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
						{/* Header */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
							className="text-center mb-16"
						>
							<Badge
								variant="outline"
								className="bg-purple-900/30 border-purple-700/50 text-purple-300 mb-6 px-6 py-2 text-lg font-semibold"
							>
								What Users Say
							</Badge>

							<h2 className="text-5xl font-bold mb-6">
								<span className="text-purple-700">Community Reviews</span>
							</h2>

							<p className="text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed">
								See what Discord server owners and community managers are saying
								about Yuki Suou
							</p>
						</motion.div>

						{/* Reviews Grid */}
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{reviews.map((review, index) => (
								<motion.div
									key={review.name}
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.8, delay: index * 0.1 }}
									viewport={{ once: true }}
									whileHover={{ scale: 1.05, y: -5 }}
									className="group"
								>
									<Card className="bg-purple-950/80 backdrop-blur-sm border-purple-900/50 hover:border-purple-700/50 transition-all duration-300 shadow-lg hover:shadow-xl h-full">
										<CardContent className="p-6">
											{/* Quote Icon */}
											<div className="flex justify-between items-start mb-4">
												<Quote className="w-8 h-8 text-purple-400/60" />
												<div className="flex items-center gap-1">
													{[...Array(review.rating)].map((_, i) => (
														<Star
															key={`${review.name}-star-${i}`}
															className="w-4 h-4 text-purple-600 fill-current"
														/>
													))}
												</div>
											</div>

											{/* Review Text */}
											<p className="text-purple-100 leading-relaxed mb-6 text-base">
												&quot;{review.review}&quot;
											</p>

											{/* User Info */}
											<div className="flex items-center gap-4">
												<Avatar className="w-12 h-12 ring-2 ring-purple-700/30">
													<AvatarImage src={review.avatar} alt={review.name} />
													<AvatarFallback className="bg-purple-900 text-purple-100">
														{review.name
															.split(" ")
															.map((n) => n[0])
															.join("")}
													</AvatarFallback>
												</Avatar>

												<div className="flex-1">
													<h4 className="font-semibold text-purple-200">
														{review.name}
													</h4>
													<p className="text-sm text-purple-300">
														{review.role}
													</p>
													<div className="flex items-center gap-2 mt-1">
														<Badge
															variant="secondary"
															className="text-xs bg-purple-900/50 text-purple-200"
														>
															{review.server}
														</Badge>
														<span className="text-xs text-purple-300">
															{review.members}
														</span>
													</div>
												</div>
											</div>
										</CardContent>
									</Card>
								</motion.div>
							))}
						</div>
					</div>
				</section>

				{/* Premium Section */}
				<section
					id="premium"
					className="py-20 relative overflow-hidden text-white"
				>
					<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
						{/* Header */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
							className="text-center mb-16"
						>
							<div className="mb-6">
								<div className="text-5xl font-bold text-white">
									Premium Plans
								</div>
							</div>

							<p className="text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed mb-2">
								Unlock exclusive features, advanced AI, and priority support
								with Yuki Suou Premium for your Discord server.
							</p>
						</motion.div>

						{/* Pricing Cards */}
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
							{plans.map((plan, index) => (
								<motion.div
									key={plan.name}
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.8, delay: index * 0.1 }}
									viewport={{ once: true }}
									whileHover={{ scale: 1.05, y: -10 }}
									className="relative"
								>
									{plan.popular && (
										<motion.div
											initial={{ opacity: 0, scale: 0.8 }}
											whileInView={{ opacity: 1, scale: 1 }}
											transition={{ duration: 0.5, delay: 0.3 }}
											className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
										>
											<Badge className="bg-gradient-to-r from-purple-900 to-purple-800 text-white px-6 py-2 font-bold text-sm">
												<Crown className="w-4 h-4 mr-2" />
												MOST POPULAR
											</Badge>
										</motion.div>
									)}

									<Card
										className={`bg-purple-950/80 backdrop-blur-sm border-purple-900/40 hover:border-purple-700/60 transition-all duration-300 h-full ${plan.popular ? "ring-2 ring-purple-900/40" : ""}`}
									>
										<CardHeader className="text-center pb-8">
											<div
												className={`w-20 h-20 rounded-full bg-gradient-to-br ${
													plan.name === "Bundle Plan"
														? "from-purple-900 to-purple-800"
														: plan.name === "Server Plan"
															? "from-purple-800 to-purple-700"
															: "from-purple-700 to-purple-600"
												} flex items-center justify-center mx-auto mb-6`}
											>
												{plan.name === "Bundle Plan" && (
													<Gift className="w-10 h-10 text-white" />
												)}
												{plan.name === "Server Plan" && (
													<Crown className="w-10 h-10 text-white" />
												)}
												{plan.name === "Welcome Card" && (
													<Star className="w-10 h-10 text-white" />
												)}
											</div>

											<CardTitle className="text-2xl font-bold text-white mb-2">
												{plan.name}
											</CardTitle>

											<p className="text-purple-200 mb-6">{plan.description}</p>

											<div className="mb-6">
												<span className="text-4xl font-bold text-white">
													{plan.price}
												</span>
												<span className="text-purple-300 text-lg">
													{plan.period}
												</span>
											</div>
										</CardHeader>

										<CardContent className="pt-0">
											<ul className="space-y-4 mb-8">
												{plan.features.map((feature) => (
													<li key={feature} className="flex items-start gap-3">
														<div className="text-purple-700 mt-0.5">
															<svg
																className="h-5 w-5"
																viewBox="0 0 20 20"
																fill="currentColor"
															>
																<title>Checkmark</title>
																<path
																	fillRule="evenodd"
																	d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
																	clipRule="evenodd"
																/>
															</svg>
														</div>
														<span className="text-purple-100">{feature}</span>
													</li>
												))}
											</ul>

											<Button
												className={`w-full py-6 text-lg font-semibold transition-all duration-300 ${
													plan.popular
														? "bg-gradient-to-r from-purple-900 to-purple-800 hover:from-purple-800 hover:to-purple-700 text-white"
														: "bg-gradient-to-r from-purple-800 to-purple-700 hover:from-purple-900 hover:to-purple-800 text-white"
												}`}
											>
												{plan.popular && <Zap className="w-5 h-5 mr-2" />}
												BUY NOW
											</Button>
										</CardContent>
									</Card>
								</motion.div>
							))}
						</div>

						{/* Bottom Section */}
						{/* <motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.4 }}
							viewport={{ once: true }}
							className="text-center mt-16"
						>
							<p className="text-gray-300 text-lg mb-8">
								Need a custom solution? Contact our team for enterprise pricing.
							</p>

							<Button
								variant="outline"
								size="lg"
								className="border-white/20 text-white hover:bg-white/5 px-8 py-4 text-lg"
							>
								Contact Sales
							</Button>
						</motion.div> */}
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
