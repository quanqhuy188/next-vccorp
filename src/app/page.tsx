import Image from "next/image";

export default function Home() {
  return (
    <div
      className="
        grid grid-rows-[20px_1fr_20px] items-center justify-items-center 
        h-screen w-full  /* Always 100vh height and full width */
        gap-16 font-[family-name:var(--font-geist-sans)]         
        mobile:bg-[url('/mobile/image.png')]  /* Background for mobile */
        desktop:bg-[url('/desk/image.png')]   /* Background for desktop */
        bg-cover bg-center
      "
    >

    </div>
  );
}
