/**
 * v0 by Vercel.
 * @see https://v0.dev/t/3aLPtGhWbmM
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Progress } from "@/components/ui/progress"
import { ScrollArea } from "@/components/ui/scroll-area"
import Understand from "@/components/understand"
import { JSX, SVGProps } from "react"

export default function Component() {
    return (
        <>
            <main className="w-full max-w-6xl mx-auto py-12 md:py-24 lg:py-32 px-6">
                <div className="space-y-6 md:space-y-10">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Wie geht das?</h1>
                        <p className="max-w-[700px] mx-auto mt-4 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Auf dieser Seite findet ihr Hilfestellungen dazu, wie man diese App benutzt desweiteren wird erklärt, wofür die gezeigten Schritte im Kontext des maschinellem Lernen wichtig sind. In dieser Anleitung kriegt Ihr Schritt-für-Schritt erklärt, wie Ihr eine Objekterkennung mit <b>DetectWise</b> durchführen könnt.
                        </p>
                    </div>
                    <div className="grid gap-6 md:gap-10">
                        <div className="flex items-start gap-4">
                            <div className="bg-gray-100 rounded-md flex items-center justify-center aspect-square w-12 md:w-16 dark:bg-gray-800">
                                <CheckIcon className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">Wähle ein Objekt</h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Um eine Objekterkennung durchführen zu können, benötigen wir zunächst einmal ein konkrete Objektart, welche wir detektieren wollen. Dazu könnt ihr in diesem Schritt eine der Kategorien auswählen, von welcher Ihr anschließend Trainingsbilder erfassen wollt.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-gray-100 rounded-md flex items-center justify-center aspect-square w-12 md:w-16 dark:bg-gray-800">
                                <CameraIcon className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">Fotografiere dein Objekt</h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                Jetzt kommt auch schon die schwierigste Aufgabe. Finde ein Objekt von der Art die du gerade ausgewählt hast.
                                    Dafür musst du möglicherweise erst ein paar Schritte gehen. Wenn du das Objekt gefunden hast, fotografiere es.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-gray-100 rounded-md flex items-center justify-center aspect-square w-12 md:w-16 dark:bg-gray-800">
                                <PencilIcon className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">Markiere das Objekt</h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Nachdem du das Objekt fotografiert hast, markiere es in dem Bild. Das hilft dem Modell später dabei, das Objekt zu erkennen. Dazu kannst
                                    du einfach mit dem Finger oder einem Stift auf das Display tippen. Eine bereits vorhandene Markierung kannst du auch nochmal bearbeiten.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-gray-100 rounded-md flex items-center justify-center aspect-square w-12 md:w-16 dark:bg-gray-800">
                                <BadgeIcon className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">Bekomme Auszeichungen für deine Leistungen!</h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Nun kannst du deine Objekterkennung abschicken. Ein von uns entwickeltes Modell wird dein Bild analysieren und dir eine Auszeichnung geben, wenn du das Objekt korrekt markiert hast.
                                    Umso mehr Auszeichnungen wir sammeln, desto besser wird unser Modell. Also sei fleißig und markiere so viele Objekte wie möglich! Falls das Objekt nicht korrekt markiert wurde, wirst du wieder zum Schritt <b>Fotografiere das Objekt</b> gebracht.
                                    Dies ist nicht schlimm, denn so lernst du auch, wie man die Objekte noch besser markieren kann.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-gray-100 rounded-md flex items-center justify-center aspect-square w-12 md:w-16 dark:bg-gray-800">
                                <LightbulbIcon className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">Lerne etwas neues!</h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Nun kannst du mit dem markieren von weiteren Objekten fortfahren. Je mehr Objekte du markierst, desto besser wird unser Modell. Du kannst auch gerne verschiedene Objekte markieren, um zu sehen, wie gut unser Modell bereits funktioniert.
                                    Gerne kannst du dir auch die Lernblätter durchlesen um die Hintergründe zu verstehen. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Understand />
            </main>
        </>
    )
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