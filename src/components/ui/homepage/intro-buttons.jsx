import Link from 'next/link';
import { MdInfoOutline, MdBackupTable } from "react-icons/md";

const IntroButtons = () => {
    return (
        <div className="flex justify-center gap-4 mt-4">
            <Link href="/about" passHref>
                <button className="button-test">
                    <MdInfoOutline className="mr-2" />ABOUT ME
                </button>
            </Link>
            <Link href="/projects" passHref>
                <button className="button-test">
                    <MdBackupTable className="mr-2" />SEE PROJECTS...
                </button>
            </Link>
        </div>
    );
};

export default IntroButtons;