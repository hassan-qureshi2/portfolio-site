import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { githubURL, linkedInURL, XURL } from '../constants';

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center"></div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a target='_blank' href={linkedInURL}>
                    <FaLinkedin />
                </a>
                <a target='_blank' href={XURL}>
                    <FaSquareXTwitter />
                </a>
                <a target='_blank' href={githubURL}>
                    <FaGithub />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
