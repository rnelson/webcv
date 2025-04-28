const OptionalLink = (text: string, url?: string) => {
    if (url === undefined || url.length === 0) {
        return <span>{text}</span>
    } else {
        return <a key={text} href={url} target="_blank">{text}</a>
    }
};

export default OptionalLink;