// Exporting component.
export default function OrderSummary({subtotal} : {subtotal: number}) {
    return (
        <div className="flex flex-col min-w-[350px]">
            <h1 className="text-2xl font-medium mb-6">Resumo</h1>
            <div className="flex justify-between mb-2">
                <p>Subtotal</p>
                <p>R$ {subtotal}</p>
            </div>
            <div className="flex justify-between mb-6">
                <p>Entrega e manuseio estimados</p>
                <p>Grátis</p>
            </div>
            <div className="flex justify-between mb-16">
                <p>Total</p>
                <p className="font-medium">R$ {subtotal}</p>
            </div>
        </div>
    )
}