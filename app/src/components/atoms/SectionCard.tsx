type Props = {
    title: string,
    children?: React.ReactNode,
}

export default function SectionCard({title, children}: Props) {

    return (
        <div className="w-full flex flex-col pl-15 pr-15 pt-10 pb-10 gap-2">
            <span className="text-2xl font-semibold bg-gradient-to-r from-orange-600 to-pink-600 text-transparent bg-clip-text inline-block">{title}</span>
            {children}
        </div>
    );
};