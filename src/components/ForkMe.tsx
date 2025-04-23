const ForkMe = () => {
    return (
        <a
            href="https://github.com/rnelson/webcv/fork"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed top-0 left-0 z-[100] cursor-pointer hidden lg:inline">
            <img alt="Fork this project!" src={"/forkme.svg"} width={150} height={150} />
        </a>
    );
};

export default ForkMe;