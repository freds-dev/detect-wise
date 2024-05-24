"use client";
import SelectionCard from "./selectionCard";

export function Selection() {
    
    return (
        <div className="flex flex-col h-screen">
            <main className="flex-1 overflow-y-auto">
                <div className="container mx-auto py-8 px-4 md:px-6 flex justify-center items-center">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold mb-6">Select an object type</h1>
                            <SelectionCard title="Chair" fileUrl="/stock/chair_01.jpg" />
                            <SelectionCard title="Desk" fileUrl="/stock/desk_01.jpg" />
                            <SelectionCard title="Keyring" fileUrl="/stock/keyring.jpg" />
                            <SelectionCard title="Laptop" fileUrl="/stock/laptop_01.jpg" />
                            <SelectionCard title="Dog" fileUrl="/stock/dog_01.jpg" />
                            <SelectionCard title="Cat" fileUrl="/stock/cat_01.jpg" />
                            <SelectionCard title="Human" fileUrl="/stock/human_01.jpg" />
                    </div>
                </div>
            </main>
        </div>
    );
    
    
    
}

