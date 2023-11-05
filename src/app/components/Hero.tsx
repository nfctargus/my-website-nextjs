import { FC } from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
const Hero = () => {
	return (
		<div className="w-full h-90vh flex justify-center align-middle py-56 font-vt323 xs:flex-col xs:py-32 xs:h-screen" id="home">
			<div className="xs:w-full w-45% h-full flex justify-end mr:auto xs:grid xs:place-items-center xs:justify-center px-2">
				<div className="h-80 flex justify-end align-middle xs:justify-center xs:h-72 rounded-full bg-[#9e3cc890] p-1">
					<img className="rounded-full" src="./Smee.jpg"></img>
				</div>
			</div>
			<div className="w-55% h-full flex align-middle flex-col justify-start xs:bg-primary-1 xs:bg-opacity-95 xs:w-full xs:grid xs:place-items-center">
				<h1 className="text-6xl font-semibold pb-2 text-white xs:place-items-center xs:text-4xl">Hey, I'm Kieran</h1>
				<h2 className="text-2xl text-primary-2 text-justify xs:px-6 xs:text-lg xl:w-2/5 xs:w-full sm:w-3/4">
					A Software Developer based in Perth, WA. <br />
					<br />
					I'm an easy going guy that loves to learn new things and generally just kick goals. <br />
					If I'm not in front of a screen you'll probably find me in or under a car!
				</h2>
				<ul className="flex gap-4">
					<a href="https://github.com/nfctargus">
						<SocialIcons icon={<AiFillGithub size={34} />} text="GitHub" />
					</a>
					<a href="https://www.linkedin.com/in/kieran-lawrence-892027202/">
						<SocialIcons icon={<AiFillLinkedin size={34} />} text="LinkedIn" />
					</a>
					<a href="mailto:kieranlawrence2@gmail.com">
						<SocialIcons icon={<AiFillMail size={34} />} text="Email Me" />
					</a>
				</ul>
			</div>
		</div>
	);
};
type Props = {
	icon: any;
	text: string;
};
const SocialIcons: FC<Props> = ({ icon, text }) => {
	return (
		<li>
			<div className="sidebar-icon group">
				{icon}
				<span className="sidebar-tooltip group-hover:scale-100">{text}</span>
			</div>
		</li>
	);
};

export default Hero;
