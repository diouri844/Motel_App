
import { Input } from "@/components/ui/input";
import CalendarIcon from "@/components/icons/calender.icon";
import FileIcon from "@/components/icons/file.icon";
import MessageSquareIcon from "@/components/icons/message.icon";

import { useState } from "react";


function MainComponent() {
    // setup a useState test :
    const [ showIt, setShowIt ] = useState<Boolean>(false);
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="grid gap-4 md:grid-cols-[300px_1fr]">
            <div className="flex flex-col gap-2">
              <Input placeholder="Search services..." type="search" 
              onChange={ ()=> setShowIt( true) }
              
              />
              { showIt && (
                <div className="border rounded-lg">
                <ul className="divide-y">
                  <li className="pl-4 py-2 text-sm">
                    <a
                      className="flex items-center gap-2 font-medium text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                      href="#"
                    >
                      <FileIcon className="h-4 w-4" />
                      Overview
                    </a>
                  </li>
                  <li className="pl-4 py-2 text-sm">
                    <a
                      className="flex items-center gap-2 font-medium text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                      href="#"
                    >
                      <FileIcon className="h-4 w-4" />
                      Billing
                    </a>
                  </li>
                  <li className="pl-4 py-2 text-sm">
                    <a
                      className="flex items-center gap-2 font-medium text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                      href="#"
                    >
                      <FileIcon className="h-4 w-4" />
                      Support
                    </a>
                  </li>
                  <li className="pl-4 py-2 text-sm">
                    <a
                      className="flex items-center gap-2 font-medium text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                      href="#"
                    >
                      <FileIcon className="h-4 w-4" />
                      Integration
                    </a>
                  </li>
                </ul>
                </div>
                )
              }
            </div>
            <div className="grid gap-4 shadow-md rounded-md">
              <div className="border rounded-lg p-4">
                <h2 className="font-semibold text-lg">Recent Activity</h2>
                <div className="grid gap-4 mt-4">
                  <div className="flex items-start gap-4">
                    <FileIcon className="h-6 w-6 text-[#888888]" />
                    <div className="grid gap-1.5">
                      <p className="text-sm">
                        New file uploaded:
                        <span className="font-medium">Q4 Strategy.pdf</span>
                      </p>
                      <time className="text-xs text-gray-500 dark:text-gray-400">2 hours ago</time>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MessageSquareIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                    <div className="grid gap-1.5">
                      <p className="text-sm">
                        New message in the
                        <span className="font-medium">General</span>
                        channel{"\n                                          "}
                      </p>
                      <time className="text-xs text-gray-500 dark:text-gray-400">1 day ago</time>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CalendarIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                    <div className="grid gap-1.5">
                      <p className="text-sm">
                        New event created:
                        <span className="font-medium">Team Building</span>
                      </p>
                      <time className="text-xs text-gray-500 dark:text-gray-400">3 days ago</time>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <FileIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                    <div className="grid gap-1.5">
                      <p className="text-sm">
                        New file uploaded:
                        <span className="font-medium">Q4 Strategy.pdf</span>
                      </p>
                      <time className="text-xs text-gray-500 dark:text-gray-400">2 hours ago</time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
  )
}

export default MainComponent;