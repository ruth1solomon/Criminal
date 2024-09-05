import { useState } from 'react';
import Navbar from '../components/header/Navbar';
import CriminalRecordsDashboard from './CriminalRecordsDashboard';
import ProfilePage from './profilepage'; // Change the file name to lowercase//+
import SettingsPage from './SettingsPage';

const UserPage = () => {
  const [activePage, setActivePage] = useState('Dashboard');

  const handleMenuClick = (page) => {
    setActivePage(page);
  };

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen bg-gray-100">
        {/* Left Side Menu */}
        <aside className="w-64 text-white bg-gray-800">
          <div className="p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 mr-3 bg-gray-600 rounded-full"></div>
              <div>
                <h2 className="text-lg font-semibold">John Doe</h2>
                <p className="text-sm text-gray-400">User</p>
              </div>
            </div>
          </div>
          <nav className="mt-6">
            <ul>
              <li
                className={`px-6 py-2 cursor-pointer hover:bg-gray-700 ${activePage === 'Dashboard' && 'bg-gray-700'}`}
                onClick={() => handleMenuClick('Dashboard')}
              >
                Dashboard
              </li>
              <li
                className={`px-6 py-2 cursor-pointer hover:bg-gray-700 ${activePage === 'Profile' && 'bg-gray-700'}`}
                onClick={() => handleMenuClick('Profile')}
              >
                Profile
              </li>
              <li
                className={`px-6 py-2 cursor-pointer hover:bg-gray-700 ${activePage === 'Settings' && 'bg-gray-700'}`}
                onClick={() => handleMenuClick('Settings')}
              >
                Settings
                <ul className="mt-2 ml-4">
                  <li
                    className={`px-4 py-1 cursor-pointer hover:bg-gray-600 ${activePage === 'Account' && 'bg-gray-600'}`}
                    onClick={() => handleMenuClick('Account')}
                  >
                    Account
                  </li>
                  <li
                    className={`px-4 py-1 cursor-pointer hover:bg-gray-600 ${activePage === 'Privacy' && 'bg-gray-600'}`}
                    onClick={() => handleMenuClick('Privacy')}
                  >
                    Privacy
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Right Side Content */}
        <main className="flex-grow p-6 bg-white">
          <h1 className="mb-4 text-2xl font-bold">{activePage}</h1>
          <div>
            {activePage === 'Dashboard' && <CriminalRecordsDashboard />}
            {activePage === 'Profile' && <ProfilePage/>}
            {activePage === 'Settings' && <SettingsPage/>}
            {activePage === 'Account' && <p>Manage your account settings.</p>}
            {activePage === 'Privacy' && <p>Adjust your privacy settings.</p>}
          </div>
        </main>
      </div>
    </>
  );
};

export default UserPage;
