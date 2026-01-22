// A reusable button that can either have an icon or a text label
// When clicked, the button navigates to a route or opens a link in a new tab

type Props = {
    content: string | React.ReactNode,
    isLink: boolean,
    route: string
    className?: string,
};

function nav(isLink: boolean, route: string) {
    if (isLink) {
        return window.open(route, '_blank');;
    } else {
        return;
    }
}

export default function Button({content, isLink, route, className}: Props) {
    return(
        <button className={`p-1 ${className}`} onClick={() => nav(isLink, route)}>
            {content}
        </button>
    );
}