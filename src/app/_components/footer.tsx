import Container from "@/app/_components/container";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-emerald-950">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center justify-center">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center mb-10 lg:mb-0">
            Created with Next.js by JRMC Real State Group
          </h3>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
