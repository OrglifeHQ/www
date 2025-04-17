import Spline from "@splinetool/react-spline/next";

export default function Character() {
    return (
        <div className="absolute top-0 right-0 bottom-0 left-0">
            <Spline
                className="hidden md:block"
                scene="https://prod.spline.design/wGthF6uLdRBCkOso/scene.splinecode"
            />
        </div>
    );
}
