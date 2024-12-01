import React from "react";
import Image from "next/image";

interface HeaderMovieWrapperProps {
    imageUrl: string;
    altText: string;
    children: React.ReactNode;
    classname?: string
}

const HeaderMovieWrapper: React.FC<HeaderMovieWrapperProps> = ({ imageUrl, altText, children, classname = "h-auto" }) => {
    return (
        <div className={`relative  w-full text-white shadow-[0_8px_10px_rgba(0,0,0,0.2)] ${classname}}`} >
            <div className="absolute inset-0 -z-0">
                <Image
                    src={imageUrl}
                    alt={altText}
                    fill
                    priority
                    className="object-cover opacity-80 md:object-fill"
                    sizes="100vw"
                />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end px-8 bg-gradient-to-t from-black from-[17%] via-transparent pb-6">
                {children}
            </div>
        </div>
    );
};

export default HeaderMovieWrapper;