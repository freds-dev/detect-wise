/**
 * v0 by Vercel.
 * @see https://v0.dev/t/3aLPtGhWbmM
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Header from "@/components/ui/header";
import Understand from "@/components/understand";
import { JSX, SVGProps } from "react";

export default function Component() {
    return (
        <>
            <Header />
            <main className="w-full max-w-6xl mx-auto py-12 md:py-24 lg:py-32 px-6">
                <div className="space-y-6 md:space-y-10">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How does it work?</h1>
                        <p className="max-w-[700px] mx-auto mt-4 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            On this page, you will find guides on how to use this app and explanations of why the steps shown are important in the context of machine learning. In this guide, youll get a step-by-step explanation of how to perform object detection with <b>DetectWise</b>.
                        </p>
                    </div>
                    <div className="grid gap-6 md:gap-10">
                        <div className="flex items-start gap-4">
                            <div className="bg-gray-100 rounded-md flex items-center justify-center aspect-square w-12 md:w-16 dark:bg-gray-800">
                                <CheckIcon className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">Choose an Object</h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    To perform object detection, we first need to select a specific type of object we want to detect. In this step, you can choose one of the categories from which you will later capture training images.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-gray-100 rounded-md flex items-center justify-center aspect-square w-12 md:w-16 dark:bg-gray-800">
                                <CameraIcon className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">Photograph Your Object</h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Now comes the most challenging task. Find an object of the type you just selected. You may need to walk around a bit to find it. Once you find the object, take a picture of it.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-gray-100 rounded-md flex items-center justify-center aspect-square w-12 md:w-16 dark:bg-gray-800">
                                <PencilIcon className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">Mark the Object</h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    After you have photographed the object, mark it in the image. This helps the model recognize the object later. You can simply tap on the display with your finger or a stylus. You can also edit an existing mark if needed.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-gray-100 rounded-md flex items-center justify-center aspect-square w-12 md:w-16 dark:bg-gray-800">
                                <BadgeIcon className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">Earn Rewards for Your Efforts!</h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Now you can submit your object detection. Our developed model will analyze your image and give you a reward if you correctly marked the object. The more rewards we collect, the better our model becomes. So be diligent and mark as many objects as possible! If the object is not correctly marked, you will be taken back to the <b>Photograph the Object</b> step. This is not a problem, as it helps you learn how to mark objects better.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-gray-100 rounded-md flex items-center justify-center aspect-square w-12 md:w-16 dark:bg-gray-800">
                                <LightbulbIcon className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">Learn Something New!</h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Now you can continue marking more objects. The more objects you mark, the better our model becomes. Feel free to mark different objects to see how well our model already works. You can also read the learning sheets to understand the background information.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Understand />
            </main>
        </>
    );
}

function BadgeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
        </svg>
    )
}


function CameraIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
            <circle cx="12" cy="13" r="3" />
        </svg>
    )
}


function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 6 9 17l-5-5" />
        </svg>
    )
}


function LightbulbIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
            <path d="M9 18h6" />
            <path d="M10 22h4" />
        </svg>
    )
}


function PencilIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
            <path d="m15 5 4 4" />
        </svg>
    )
}