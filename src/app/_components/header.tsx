import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 flex items-center col dark:bg-emerald-950 p-5">
        <Link href="https://api.whatsapp.com/send?phone=50672043419&text&context=Afcxky9pxRUrtNf1o3QutR9roEJR6618XBM6lSRAcJFdtxXfptmJI-dyxqol_WT8VlcpfReGUaMcNVUw3dRxV9dp6zC7l9-LsBdPg-AYFtCPoQKBQUtMsujAidPKZdfOZJbPXT7vBK6bHSOVQbFYsfs0Qg&source&app=facebook" className="flex item-center">
          <Image
          src={"/assets/blog/icons/whatsapp.png"}
          alt="Whatsapp Logo"
          width={30}
          height={20}
          className="mr-4 ml-2"
          />
        </Link>
        <Link href={"https://www.tiktok.com/@mendez6735?_t=ZM-8yQUeGsCBbM&_r=1"}>
        <Image
        src={"/assets/blog/icons/tik-tok.png"}
        alt="Tik-Tok Logo"
        width={30}
        height={30}
        className="mr-4 ml-2"
        />
        </Link>
        <Link href={""}>
        <Image
        src={"/assets/blog/icons/instagram.png"}
        alt="Instagram Logo"
        width={30}
        height={30}
        className="mr-4 ml-2"
        />
        </Link>
      </h2>
  );
};

export default Header;
