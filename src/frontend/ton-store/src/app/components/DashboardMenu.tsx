// Setting the component to be rendered at the client side.
"use client"

// Importing all required modules.
import Image from "next/image";
import { usePathname } from "next/navigation";
import BagIcon from "../../../public/bag.svg";
import ListIcon from "../../../public/list.svg";
import LogoutIcon from "../../../public/logout.svg";
import TonStoreIcon from "../../../public/ton-store.svg";

// Exporting component.
export default function DashboardMenu() {
	// Getting current path.
	const currentPath = usePathname();

	// Returning component.
	return (
		<aside className="flex flex-col justify-between h-[80vh] fixed">
                <div className="flex flex-col gap-y-3">
                    <a href='/'>
                        <Image src={TonStoreIcon} alt="Ton Store" />   
                    </a>
                    <div className="flex flex-col gap-y-8">
						<a href='/dashboard/product'>
							<div className='flex mt-16 gap-x-3 items-center'>
								<Image src={BagIcon} alt="Bag" />
								<span className="text-base font-medium">Produtos</span>
								{currentPath.includes('/dashboard/product') && <div className="w-2 h-2 bg-black rounded-lg"></div>}
							</div>
						</a>
						<a href='/dashboard/order'>
							<div className='flex gap-x-3 items-center'>
								<Image src={ListIcon} alt="Orders" />
								<span className="text-base font-medium">Pedidos</span>
								{currentPath.includes('/dashboard/order') && <div className="w-2 h-2 bg-black rounded-lg"></div>}
							</div>
						</a>
					</div>
                </div>
                <a href='/'>
                    <div className="flex gap-x-3">
                        <Image src={LogoutIcon} alt="Logout" />
                        <div className='flex gap-x-3 flex-col'>
                            <span className="text-base font-medium">John Doe</span>
                            <span className="text-base font-normal text-[#8D8D8D]">oi@tonstore.com</span>
                        </div>
                    </div>
                </a>
            </aside> 
	)
}