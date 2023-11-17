// Importing components.
import Header from "@/app/components/Header";
import PageDescription from "@/app/components/PageDescription";
import TrackOrderForm from "../components/TrackOrderForm";

// Exporting page.
export default function TrackOrderPage() {
    return (
        <>
            <Header />
            <div className="flex justify-between">
                <div className="max-w-[505px]">
                    <PageDescription 
                        title="Acompanhar pedido" 
                        description="Aqui, você pode verificar o status atual do seu pedido, desde o processamento até a entrega. Basta inserir o número do pedido e as informações relevantes para obter atualizações em tempo real." />
                    <TrackOrderForm />
                </div>
            </div>
        </>
    )
}