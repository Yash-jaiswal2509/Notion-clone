
export default function layout({ children }: {
    children: React.ReactNode,
}) {
    return (
        <div className="h-full dark:bg-[#3F3F3F]">
            {children}
        </div>
    )
}
