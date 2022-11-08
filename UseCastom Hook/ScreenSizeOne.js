import useCastomHook from "./ReactHook/useCastomHook";
export default function ScreenSize() {
    const size = useCastomHook(700);
    return(
        <div>
            <h1>Your Screen Size is Too {size?'Small':'Large'}</h1>
        </div>
    );
};