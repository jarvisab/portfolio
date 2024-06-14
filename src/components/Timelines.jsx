import { timelineItems } from "../app/_data/timelines";

export default function Timelines() {
  return (
    <div className="pt-3 pb-8 sm:mx-3 lg:mx-0">
      <h2 className="title">Timeline</h2>

      <ol className="flex flex-col relative border-l border-stone-200 dark:border-stone-700 mt-4">
        {timelineItems.map((item, index) => (
          <li key={index} className="my-2 ml-4 timeline-item relative">
            <div className="absolute w-2 h-3 bg-stone-200 rounded-r-full left-px top-[1.2rem]"
            style={{ marginLeft: '-1rem' }}/>
            <div>
              <div className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm rounded-lg pt-2">
                <span className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">
                  {item.year}
                </span>
                <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
                  {item.role}
                </h3>
                <a href={`https://www.google.com/search?q=${encodeURIComponent(item.workplace)}`} target="_blank" rel="noopener noreferrer">
                  <span className='max-lg:hidden bg-zinc-800 cursor-pointer rounded-md px-1'>
                    @ {item.workplace}
                  </span>
                </a>
                <p className="max-lg:hidden text-sm font-normal leading-none text-stone-400 dark:text-stone-500">
                  {item.duration}
                </p>
              </div>
              <p className="lg:hidden my-4 text-sm font-normal leading-none text-stone-400 dark:text-stone-500">
                <a href={`https://www.google.com/search?q=${encodeURIComponent(item.workplace)}`} target="_blank" rel="noopener noreferrer">
                  <span className='lg:hidden text-stone-200 mr-4'>@ {item.workplace + '   '}</span>
                </a>
                {item.duration}
              </p>
              <p className="my-2 text-base font-normal text-stone-500 dark:text-stone-400">
                {item.summary}
              </p>
            </div>
          </li>
        ))}

      </ol>
    </div>
  );
}
