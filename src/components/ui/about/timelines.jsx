import { timelineItems } from "@/data";

function redirectSearch(inputString) {
  return `https://www.google.com/search?q=${
    encodeURIComponent(inputString)
    }`;
}

export default function Timelines() {
  return (
    <div className="pt-3 pb-8 sm:mx-3 lg:mx-0">
      <h2 className="title">Timeline</h2>

      <ol className="timeline">
        {timelineItems.map((item, index) => (

          <li key={index} className="timeline-item">
            <div className="timeline-marker"></div>
            <div>
              <div className="item-header">
                <span className="year-badge">
                  {item.year}
                </span>
                <h3 className="role">
                  {item.role}
                </h3>
                <a href={redirectSearch(item.workplace)}
                  target="_blank"
                  rel="noopener noreferrer">
                  <span className='workplace-link'>
                    at {item.workplace}
                  </span>
                </a>
                <p className="duration">
                  {item.duration}
                </p>
              </div>
              <p className="mobile-info">
                <a href={redirectSearch(item.workplace)}
                  target="_blank"
                  rel="noopener noreferrer">
                  <span className='mobile-workplace'>at {item.workplace + '   '}</span>
                </a>
                {item.duration}
              </p>
              <p className="summary">
                {item.summary}
              </p>
            </div>
          </li>

        ))}
      </ol>
    </div>
  );
}