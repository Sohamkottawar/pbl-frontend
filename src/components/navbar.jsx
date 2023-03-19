import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import profile_pic from '../assets/images/profile_pic.jpeg';
import PostModal from './Post/Modal';
import logo from "../assets/images/project_buddy_logo.png";

function Navbar() {
  const [profileOpen, setProfileOpen] = useState(false);
  const [openPost, setOpenPost] = useState(false);
  const [query, setQuery] = useState('');
  const profileNavigator = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(query);
  };

  return (
    <>
      <nav className='bg-white shadow  z-[9999] fixed top-0 left-0 w-[100%] bg-opacity-75 backdrop-blur-md'>
        <div className='mx-auto px-8'>
          <div className='flex justify-between items-center py-4'>
            <div className='flex items-center'>
              <a href='/' className='font-bold text-xl text-indigo-500'>
                <img src={logo} alt="logo" className="h-10 w-10" />
              </a>
              <div className='ml-4 flex items-center text-gray-500 text-sm font-medium'>
                <a href='/' className='hover:text-gray-900 px-3 py-2'>Home</a>
                <a href='/recommendations' className='hover:text-gray-900 px-3 py-2'>Recommendations</a>
                <a href='/messages' className='hover:text-gray-900 px-3 py-2'>Messages</a>
                <p onClick={() => setOpenPost(prevState => !prevState)} className='hover:text-gray-900 px-3 py-2 cursor-pointer'>Create Post</p>
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <form onSubmit={handleSearch}>
                <div className='relative'>
                  <input
                    type='text'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className='bg-gray-200 h-10 px-5 pr-10 rounded text-sm focus:outline-none'
                    placeholder='Search'
                  />
                  <button
                    type='submit'
                    className='absolute top-0 right-0 h-full w-10 text-center text-gray-500'
                  >
                    {/* <FontAwesomeIcon icon={faSearch} /> */}
                  </button>
                </div>
              </form>
              <button>
                <svg aria-labelledby='title desc' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 19.9 19.7' height='20px' width='20px'><title id='title'>Search Icon</title><desc id='desc'>A magnifying glass icon.</desc><g fill='none' stroke='gray'><path strokeLinecap='square' d='M18.5 18.3l-5.4-5.4' /><circle cx='8' cy='8' r='7' /></g></svg>
              </button>
              <div className='relative flex flex-col justify-center'>
                <img alt='Abhishek_profile' src={profile_pic} className={`w-10 h-10 rounded-full ml-6 border-2 border-transparent hover:border-blue-300 ring-4 ring-offset-2 ring-transparent ${profileOpen && 'ring-blue-600'}`} onClick={() => setProfileOpen(prevState => !prevState)} />
                <div className={`absolute right-0 top-full mt-3 w-64 p-3 bg-white rounded-lg shadow-xl border border-gray-300 ${!profileOpen && 'hidden'}`}>
                  <div className='flex items-center'>
                    <img alt='Abhishek_profile' src={profile_pic} className='rounded-full w-16 h-16' />
                    <div className='flex flex-col justify-center flex-1 pl-3'>
                      <code className='text-gray-900 font-medium text-lg'>Abhishek Jadhav</code>
                      <p className='text-gray-500 text-sm'>Full Stack Developer | Looking for Summer Internships</p>
                    </div>
                  </div>
                  <button className='mx-1/4 text-gray-900 font-medium text-sm py-2 px-3 bg-gray-100 hover:bg-blue-400 rounded-lg mt-3' onClick={() => profileNavigator('/profile/')}>View Profile</button>
                  <br />
                  <hr className='my-3 border border-black-500'></hr>
                  <ul className='flex flex-col gap-3 pl-3 text-gray-500 text-sm font-medium'>
                    <li className='hover:text-gray-900'>
                      <svg className='inline-block mr-1' xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path><polyline points='15 3 21 3 21 9'></polyline><line x1='10' y1='14' x2='21' y2='3'></line></svg>
                      Help
                    </li>
                    <li className='hover:text-gray-900'>
                      <svg className='inline-block mr-1' xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path><polyline points='15 3 21 3 21 9'></polyline><line x1='10' y1='14' x2='21' y2='3'></line></svg>
                      Account Settings
                    </li>
                    <li className='hover:text-gray-900'>
                      <svg className='inline-block mr-1' xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path><polyline points='15 3 21 3 21 9'></polyline><line x1='10' y1='14' x2='21' y2='3'></line></svg>
                      Sign Out
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {openPost && <PostModal isOpen={openPost} onClose={setOpenPost} />}
    </>
  );
}

export default Navbar;