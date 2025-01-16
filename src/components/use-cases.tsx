import { CodeIcon, ComputerIcon, TerminalIcon } from 'lucide-react'
import React from 'react'

export const UseCases = () => {
    return (
        <section className='flex justify-center w-full mt-5'>
            <div>
                <h1 className='text-4xl text-center font-bold'>Use Cases</h1>
                <div className="use_cases_cards flex flex-wrap justify-center mx-auto">
                    <div className="use_cases md:w-1/3 w-full p-4">
                        <div className="bg-blue-100 h-full p-4">
                            <div className="title flex items-center">
                                <div className="icon bg-blue-200 rounded-full p-2">
                                <TerminalIcon className='' />
                                </div>
                                <h2>Use Terminal Like Pro!</h2>
                            </div>
                            <p>Use terminal in natural language instead of write commands</p>
                        </div>
                    </div>
                    <div className="use_cases md:w-1/3 w-full p-4">
                        <div className="bg-blue-100 h-full p-4">
                            <div className="title flex items-center">
                                <div className="icon bg-blue-200 rounded-full p-2">
                                <ComputerIcon className='' />
                                </div>
                                <h2>Control Everything With One Interface</h2>
                            </div>
                            <p>Create folder, open browser, open your favorite song, and do everything by just staying in one app</p>
                        </div>
                    </div>
                    <div className="use_cases md:w-1/3 w-full p-4">
                        <div className="bg-blue-100 h-full p-4">
                            <div className="title flex items-center">
                                <div className="icon bg-blue-200 rounded-full p-2">
                                <CodeIcon className='' />
                                </div>
                                <h2>Code Fast with Us</h2>
                            </div>
                            <p>Use ai to create your project just by using prompts</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
