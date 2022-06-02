import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
    LogoutIcon,

} from '@heroicons/react/outline'
import Image from "next/image"
import Headeritem from "./Headeritem"
import { useRouter} from 'next/router'


function Header() {

  const router = useRouter();
    function signOut ()  {
        localStorage.clear();
        router.push("/login")
    }
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
        <div className='flex flex-grow justify-evenly max-w-2xl'>
            <Headeritem title='HOME' Icon={HomeIcon} />
            <Headeritem title='TRENDING' Icon={LightningBoltIcon} />
            <Headeritem title='VERIFIED' Icon={BadgeCheckIcon} />
            <Headeritem title='COLLECTIONS' Icon={CollectionIcon} />
            <Headeritem title='SEARCH' Icon={SearchIcon} />
            <Headeritem title='ACCOUNT' Icon={UserIcon} />
            <button onClick={signOut}><Headeritem title='LOG OUT' Icon={LogoutIcon}  /></button>
        </div>

        
        <Image
        className="object-contain"
        src="https://Links.papareact.com/ua6" width={200} height={100} alt=""
        />
    </header>
  )
  
}


export default Header