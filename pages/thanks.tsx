import Head from "next/head";
import Image from "next/image";

export default function Tanks() {
  return (
    <>
      <Head>
        <title>Formulário UX - Thanks</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div className="flex flex-col text-center items-center h-screen  text-slate-100 font-semibold text-2xl desktop:p-32 mobile:pt-10 px-10 ">
          <Image
            src={`./partying-face.svg`}
            alt="Pticture happy"
            width={200}
            height={200}
            className="animate-pulse"
          />

          <p className="mt-6">
            Muito obrigado por compartilhar sua opinião conosco. Sua
            contribuição é muito valiosa e apreciamos muito o tempo e esforço
            que você dedicou.
          </p>
        </div>
      </main>
    </>
  );
}
