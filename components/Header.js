import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
} from "@heroicons/react/outline"

export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center
    h-auto">
        <div className="flex flex-grow justify-evenly max-w-2xl">
            <HeaderItem title="HOME" Icon={HomeIcon} />
            <HeaderItem title="EM ALTA" Icon={LightningBoltIcon} />
            <HeaderItem title="VERIFICADOS" Icon={BadgeCheckIcon} />
            <HeaderItem title="COLEÇÕES" Icon={CollectionIcon} />
            <HeaderItem title="BUSCAR" Icon={SearchIcon} />
            <HeaderItem title="PERFIL" Icon={UserIcon} />
        </div>

        <Image src="http://links.papareact.com/ua6"
        className="object-contain"
        width={200}
        height={100}
        />
    </header>
  )
}
