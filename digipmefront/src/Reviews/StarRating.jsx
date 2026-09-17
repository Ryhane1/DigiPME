// src/Reviews/StarRating.jsx
import { Star } from "lucide-react";

function StarRating({ value = 0, onChange, readOnly = false, size = 20 }) {
    const stars = [1, 2, 3, 4, 5];

    return (
        <div style={{ display: "flex", gap: 4 }}>
            {stars.map((n) => (
                <span
                    key={n}
                    onClick={() => !readOnly && onChange?.(n)}
                    style={{ cursor: readOnly ? "default" : "pointer" }}
                >
                    <Star
                        size={size}
                        color="#f59e0b"
                        fill={n <= value ? "#f59e0b" : "none"}
                    />
                </span>
            ))}
        </div>
    );
}

export default StarRating;