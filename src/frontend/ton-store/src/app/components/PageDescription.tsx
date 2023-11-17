// Exporting component.
export default function PageDescription({ title, description} : { title: string, description: string }) {
    return (
        <div className="flex flex-col mb-6">
            <h1 className="text-2xl mb-2">{title}</h1>
            <p className="text-[#757575]">{description}</p>
        </div>
    )
}