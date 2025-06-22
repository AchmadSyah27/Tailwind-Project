// components/UserAvatar.tsx
import { useEffect } from "react";
import feather from "feather-icons";

interface UserAvatarProps {
	name: string;
	role: string;
	image?: string | null;
}

export default function UserAvatar({ name, role, image }: UserAvatarProps) {
	useEffect(() => {
		feather.replace();
	}, [image]);

	return (
		<div className="flex items-center gap-3 mt-4">
			{/* Avatar bulat */}
			<div className="w-10 h-10 rounded-full bg-[#3f3131] flex items-center justify-center overflow-hidden">
				{image ? (
					<img src={image} alt={name} className="w-full h-full object-cover" />
				) : (
					<i data-feather="user" className="w-4 h-4 text-white" />
				)}
			</div>

			{/* Nama & Role */}
			<div>
				<p className="font-semibold text-black">{name}</p>
				<p className="text-sm text-gray-600">{role}</p>
			</div>
		</div>
	);
}
