import Link from 'next/link';
import { info } from '../../../info';
import Image from 'next/image';
import logo from '../../../public/logo-main.png';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  const path = router.pathname;
  return (
    <header
      className={`fixed top-0 ${path === '/survey' ? 'bg-transparent' : 'bg-gradient-to-br from-brand-1/30 to-white'} backdrop-blur-lg w-screen shadow-lg ${path === '/survey' ? 'h-[4rem]' : 'h-[6.4rem]'} flex justify-end z-[99] hover:top-0 rounded-br-full`}
    >
      <div className="flex justify-end items-center z-[10]">
        <div className="relative flex justify-end items-center h-full w-[26rem]">
          <Link href="/" passhref>
            <a>
              <Image
                src={logo}
                alt={info.companyName}
                layout="fill"
                objectFit="cover"
              />
            </a>
          </Link>
        </div>
      </div>
    </header>

  );
}
