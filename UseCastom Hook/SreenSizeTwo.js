import useWindowWidth from "./ReactHook/useCastomHook";
export default function ScreenSizeTwo() {
    const size = useWindowWidth(800);
    return(
        <div className = {size?'Small':'Large'}>
            <h1>Your Screen Size is Too {size?'Small':'Large'}</h1>
        </div>
    );
};