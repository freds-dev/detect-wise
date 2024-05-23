"use client";
import SelectionCard from "./selectionCard";

export function Selection() {
    
    return (
        <div className="flex flex-col h-screen">
            <main className="flex-1 overflow-y-auto">
                <div className="container mx-auto py-8 px-4 md:px-6 flex justify-center items-center">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold mb-6">Wähle ein Objekt</h1>
                        <SelectionCard title="Machine Learning" fileUrl="/placeholder.png" />
                    </div>
                </div>
            </main>
        </div>
    );
    
}

