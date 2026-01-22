type Props = {
    title: string,
    description: string,
    image: string,
    content?: string | React.ReactNode;
}
export default function PortfolioCard({title, description, image, content}: Props) {

    return (
        <div className="w-3/4 p-px rounded-xl bg-gradient-to-r from-orange-600 to-pink-600">
            <div className="w-full bg-white rounded-xl p-5 flex flex-row gap-5">
                <div className="flex flex-col gap-3 w-5/6">
                    <span className="text-2xl text-gray-600">{title}</span>
                    <span className="text-gray-500">{description}</span>
                    <div className="h-full flex flex-col justify-end">
                        {content}
                    </div>
                </div>
                <img src={image} className="w-1/2 h-fit rounded-lg object-cover object-shrink" alt="Project Photo" />
            </div>
        </div>
    );
}