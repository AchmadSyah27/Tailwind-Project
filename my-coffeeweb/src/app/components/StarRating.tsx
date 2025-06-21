import { Star } from "react-feather";

type StarRatingProps = {
	rating?: number; // antara 0 - 5
	max?: number;
	className?: string;
};

export default function StarRating({
	rating = 5,
	max = 5,
	className = "",
}: StarRatingProps) {
	return (
		<div className={`flex text-accent ${className}`}>
			{Array.from({ length: max }).map((_, i) => (
				<Star
					key={i}
					className={`mr-1 ${
						i < rating ? "fill-current" : "stroke-current text-gray-300"
					}`}
				/>
			))}
		</div>
	);
}
