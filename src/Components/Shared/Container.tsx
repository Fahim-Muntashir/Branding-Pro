import { ReactNode } from "react";



const Container = ({ children }: Readonly<{
    children: ReactNode;
}>) => {
    return (
        <div className="max-w-[2520px] mx-auto xl:px-32 md:px-10 sm:px-1 px-4">
            {children}
        </div>
    );
};

export default Container;