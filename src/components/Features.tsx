"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
	MessageCircle,
	Bot,
	Globe,
	Brain,
	Users,
	ArrowRight,
	Star,
	Sparkles,
	Shield,
	Zap,
} from "lucide-react";

const Features = () => {
	const popularFeatures = [
		{ name: "GLOBAL CHAT", icon: Globe },
		{ name: "CHATBOT", icon: Bot },
		{ name: "MEDIA SOCIAL", icon: Users },
		{ name: "META AI", icon: Brain },
		{ name: "YUKI SUOU", icon: Sparkles },
	];

	const featureCards = [
		{
			title: "Indonesian ChatBot",
			description:
				"Advanced AI-powered chatbot with Indonesian language support for natural conversations",
			icon: MessageCircle,
			gradient: "from-blue-500 to-purple-600",
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
			gradient: "from-green-500 to-teal-600",
			features: ["Auto Moderation", "Custom Rules", "Member Analytics"],
		},
		{
			title: "AI Image Generation",
			description:
				"Create stunning AI-powered images and artwork directly in your Discord server",
			icon: Sparkles,
			gradient: "from-purple-500 to-pink-600",
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
			gradient: "from-yellow-500 to-orange-600",
			features: ["Low Latency", "High Uptime", "Scalable Infrastructure"],
		},
	];

	return (
		<section
			id="features"
			className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden"
		>
			<div className="absolute inset-0 opacity-30">
				<div className="absolute inset-0 bg-[url('/assets/image/background.png')] bg-cover bg-center" />
			</div>

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
							<div className="text-6xl font-black text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
								SUOU™
							</div>
							<div className="text-6xl font-black text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
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
						{popularFeatures.map((feature, index) => {
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
						<span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text">
							Features
						</span>
					</h2>
				</motion.div>

				{/* Feature Cards Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{featureCards.map((feature, index) => {
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
													<Star className="w-4 h-4 text-yellow-400 fill-current" />
													<span className="text-sm text-gray-200">{feat}</span>
												</div>
											))}
										</div>

										<Button
											variant="ghost"
											className="text-white hover:text-blue-400 hover:bg-white/5 p-0 h-auto font-medium group/btn"
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
						className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
					>
						View More Features
						<ArrowRight className="w-5 h-5 ml-2" />
					</Button>
				</motion.div>
			</div>
		</section>
	);
};

export default Features;
