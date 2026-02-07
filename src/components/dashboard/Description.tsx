import Image from "next/image";

export const Description = () => {
    return (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white px-5 pb-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
            <Image height={500} width={700} src={"/images/logo/startup-india.svg"} alt="Startup India"/>
            <h1 className="mt-10 text-4xl font-bold text-orange-350">
            The India's Largest Startup Funding Directory
            </h1>
            <p className="text-xl mt-5 text-gray-500 text-theme-sm dark:text-gray-400">
            Track Indian startup funding trends, key investors, and investment patterns
            </p>
            <p className="text-xl text-gray-500 text-theme-sm dark:text-gray-400">
            across India's growing innovation landscape
            </p>
        </div>
    )
}