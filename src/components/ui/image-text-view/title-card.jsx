import Link from 'next/link';
import { AiOutlineLink, AiOutlineGithub } from 'react-icons/ai';

const TitleCard = ({ title, isUsingLink = false, livelink = '', gitlink = '' }) => {
    return (
        <div className="card-boilerplate">
            <h4 className="font-bold px-4 py-2 text-slate-700 text-gd text-lg">
                {title}
            </h4>
            {isUsingLink && (
                <div className="px-2 text-slate-600 dark:text-neutral-200 flex items-center">
                    {livelink && (
                        <Link href={livelink} className="projects-link">
                            <AiOutlineLink />
                        </Link>
                    )}

                    {gitlink && (
                        <Link href={gitlink} className="projects-link">
                            <AiOutlineGithub />
                        </Link>
                    )}
                </div>
            )}
        </div>
    );
};

export default TitleCard;