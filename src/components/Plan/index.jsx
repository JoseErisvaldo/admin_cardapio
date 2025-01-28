import { Button } from "@material-tailwind/react";

export default function Plan() {
    return (
        <div className="p-4 border rounded-lg shadow-md bg-white">
            <div className="mb-2">
                <div className="flex items-center gap-2 text-lg font-semibold">
                    <span>Plano atual:</span> <span className="text-green-600">Lite</span>
                </div>
            </div>
            <p className="text-gray-600 mb-4">
                Seu cardápio digital pode fazer muito mais! Assine um plano para desbloquear personalizações, pedidos online e muito mais.
            </p>
            <div>
                <Button color="green">Assinar plano</Button>
            </div>
        </div>
    );
}
