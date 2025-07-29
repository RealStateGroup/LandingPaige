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
              <Link href="https://api.whatsapp.com/send?phone=50672043419&text&context=AfeiUw81ywUEpXdWQAhGlMCakOyTxvKmjjhuiKFDS96IdYNgI8_3ee1TynlsE7ysKA9sNpqyjRHIJ7n8hYncU8ihFIrnPfurVxiUbl4CZjRaH5o97LBsH0yq2uTkMUxdnluKvlhCvuwMRONcmUODFceuPA&source&app=facebook" className="opacity-70 hover:opacity-100 transition-opacity">
                <Image src="/assets/blog/icons/whatsapp.png" alt="WhatsApp" width={28} height={28} />
              </Link>
              <Link href="https://www.tiktok.com/@mendez6735?_t=ZM-8yQUeGsCBbM&_r=1" className="opacity-70 hover:opacity-100 transition-opacity">
                <Image src="/assets/blog/icons/tik-tok.png" alt="TikTok" width={28} height={28} />
              </Link>
              <Link href="https://www.instagram.com/javiermendez3101?igsh=YzljYTk1ODg3Zg==" className="opacity-70 hover:opacity-100 transition-opacity">
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
