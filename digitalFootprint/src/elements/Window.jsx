let title = "Title";
let contents = "Contents";
let image = "Image";

function AddWindowTitle({ title }) {
    windowContents.add = title;
}

function AddWindowContents({ contents }) {
    windowContents.add = contents;
}

function AddWindowImage({ image }) {
    windowContents.add = image;
}

function Window({ windowTitle, windowContents }) {
    return (
        <div className="windowContainer">
            <div className="windowHeader">
                <div className="windowTitle">{windowTitle}</div>
                <div className="windowControls">
                    <button className="minimize">_</button>
                    <button className="maximize">[ ]</button>
                    <button className="close">X</button>
                </div>
            </div>
            <div className="windowContent">
                {windowContents}
            </div>
        </div>
    );
}

export default Window