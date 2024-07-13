import TriggerCitiesMap from './components/Map';
import { YEAR, BODY } from './content';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <link href="https://unpkg.com/maplibre-gl/dist/maplibre-gl.css" rel="stylesheet" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <header className="flex justify-between w-screen px-16 mt-24 items-center">
          <h1 className="text-[116px] font-bold tracking-tight leading-none">
            Chartmetric
            <br />
            Trigger Cities
          </h1>
          <h2 className="text-text-inverted text-[237px] opacity-20 font-bold tracking-tight leading-none">{YEAR}</h2>
        </header>
        <div className="relative mt-28 w-screen">
          <div className="gradient-circle-left"></div>
          <div className="gradient-circle-right"></div>
          <div className="mx-auto max-w-screen-sm leading-relaxed whitespace-pre-line">{BODY}</div>
        </div>
        <div
          className="relative w-screen my-36"
          style={{
            backgroundImage: 'url("/map_bg_gradient_1.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <TriggerCitiesMap />
        </div>
      </main>
    </>
  );
}
