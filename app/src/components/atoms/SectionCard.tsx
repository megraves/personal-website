type Props = {
    title: string,
    children?: React.ReactNode,
}

export default function SectionCard({title, children}: Props) {

    return (
        <section id={title}>
            <div className="w-full flex flex-col pl-15 pr-15 pt-10 pb-10 gap-2">
                <div className="flex flex-row gap-5 items-center">
                    <span className="text-2xl font-semibold bg-gradient-to-r from-orange-600 to-pink-600 text-transparent bg-clip-text inline-block">{title}</span>
                    <div className="h-px rounded-full w-full bg-gradient-to-r from-orange-600 to-pink-600"></div>
                </div>
                {children}
            </div>
        </section>
    );
};