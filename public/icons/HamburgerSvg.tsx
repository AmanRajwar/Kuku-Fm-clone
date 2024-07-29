import * as React from "react";
import { cn } from "@/lib/utils";

interface HamburgerSvgProps extends React.SVGProps<SVGSVGElement> {
    width?: number | string;
    height?: number | string;
    color?: string;
}

const HamburgerSvg = React.forwardRef<SVGSVGElement, HamburgerSvgProps>(
    ({ className, width, height, color, onClick, ...props }, ref) => {
        return (
            <svg
                onClick={onClick}
                className={className}
                xmlns="http://www.w3.org/2000/svg"
                width={width}
                height={height}
                fill="none"
                viewBox="0 0 24 24"
                ref={ref}
                {...props}
            >
                <path
                    stroke={color}
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M4 18h16M4 12h16M4 6h16"
                />
            </svg>
        );
    }
);

export default HamburgerSvg;
