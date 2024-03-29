"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Navbar() {
  const router =  usePathname();

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div href="" className="flex items-center">
          <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">
            RiffTech
          </span>
        </div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link href="/" passHref>
                <div
                  className={`block py-2 pl-3 pr-4 rounded md:p-0 ${
                    router.pathname === '/' ? 'text-white bg-blue-700' : 'text-gray-900 hover:bg-gray-100'
                  } md:bg-transparent md:text-blue-700 md:hover:text-blue-500 dark:text-white md:dark:text-blue-500`}
                  aria-current={router.pathname === '/' ? 'page' : undefined}
                >
                  Home
                </div>
              </Link>
            </li>
            <li>
              <Link href="/order" passHref>
                <div
                  className={`block py-2 pl-3 pr-4 rounded ${
                    router.pathname === '/order' ? 'text-white bg-blue-700' : 'text-gray-900 hover:bg-gray-100'
                  } md:p-0 md:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 md:dark:hover:bg-transparent`}
                >
                  Order
                </div>
              </Link>
            </li>
            <li>
              <Link href="/purchase" passHref>
                <div
                  className={`block py-2 pl-3 pr-4 rounded ${
                    router.pathname === '/purchase' ? 'text-white bg-blue-700' : 'text-gray-900 hover:bg-gray-100'
                  } md:p-0 md:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 md:dark:hover:bg-transparent`}
                >
                  Purchase
                </div>
              </Link>
            </li>
            <li>
              <Link href="/pricing" passHref>
                <div
                  className={`block py-2 pl-3 pr-4 rounded ${
                    router.pathname === '/pricing' ? 'text-white bg-blue-700' : 'text-gray-900 hover:bg-gray-100'
                  } md:p-0 md:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 md:dark:hover:bg-transparent`}
                >
                  Pricing
                </div>
              </Link>
            </li>
            <li>
              <Link href="/contact" passHref>
                <div
                  className={`block py-2 pl-3 pr-4 rounded ${
                    router.pathname === '/contact' ? 'text-white bg-blue-700' : 'text-gray-900 hover:bg-gray-100'
                  } md:p-0 md:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 md:dark:hover:bg-transparent`}
                >
                  Contact
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
