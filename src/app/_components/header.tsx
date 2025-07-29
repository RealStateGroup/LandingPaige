import Link from "next/link";
import Image from "next/image";

const HeaderMinimal = () => {
  return (
    <header className="dark:bg-emerald-950 bg-white py-4">
      <div className="container mx-auto px-5">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl md:text-4xl font-bold">JRMC Real Estate</h1>
          
          <div className="flex items-center space-x-6">
            <span className="text-sm text-neutral-600 dark:text-neutral-300 hidden md:block">
              Síguenos:
            </span>
            <div className="flex items-center space-x-3">
              <Link href="#" className="opacity-70 hover:opacity-100 transition-opacity">
                <Image src="/assets/blog/icons/whatsapp.png" alt="WhatsApp" width={28} height={28} />
              </Link>
              <Link href="#" className="opacity-70 hover:opacity-100 transition-opacity">
                <Image src="/assets/blog/icons/tik-tok.png" alt="TikTok" width={28} height={28} />
              </Link>
              <Link href="#" className="opacity-70 hover:opacity-100 transition-opacity">
                <Image src="/assets/blog/icons/instagram.png" alt="Instagram" width={28} height={28} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderMinimal;
