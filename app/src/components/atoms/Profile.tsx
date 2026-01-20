import Button from "./Button";

export default function Profile() {
    return (
        <div className="w-full h-150 bg-gradient-to-r from-orange-600 to-pink-600 flex items-center lg:p-50 text-white">
            <div className="border flex flex-row items-center gap-5 p-5">
                <img src="src/assets/grad_headshot.jpg" className="w-2/5 aspect-square rounded-full object-cover" alt="Profile Photo" />
                <div className="flex flex-col gap-5 p-5"> 
                    <h1 className="text-2xl font-light">Hi, I'm</h1>
                    <h2 className="text-5xl lg:text-8xl">Macy Graves</h2>
                    <div className="flex flex-row gap-5">
                        <h1 className="text-2xl font-light">LET'S CONNECT</h1>
                        <Button content="" isIcon={true} isLink={true} route=""></Button>
                    </div>
                </div>
            </div>
        </div>
    );
}