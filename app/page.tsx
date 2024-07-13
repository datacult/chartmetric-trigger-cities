import TriggerCitiesMap from './components/Map';
import { YEAR, BODY } from './content';

export default function Home() {
  return (
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
      <div className="w-screen mt-36">
        <TriggerCitiesMap />
      </div>
    </main>
  );
}
