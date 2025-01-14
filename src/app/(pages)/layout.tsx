"use client";
import React, { useEffect, useState } from "react";
import NextTopLoader from "nextjs-toploader";
import Provider from "../Provider";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        try {
            
        } catch (error) {
            console.log('Something went wrong', error);
        } finally {
            setLoader(false);
        }
    }, [])


    if (loader) {
        return (
            <div className="h-screen text-center items-center justify-center flex font-bold text-2xl" >
                Loading...
            </div>
        )
    }
    return (
        <main>
            {!loader && (
                <>
                    <Provider>
                        <NextTopLoader
                            color="#2299DD"
                            initialPosition={0.08}
                            crawlSpeed={200}
                            height={3}
                            crawl={true}
                            showSpinner={true}
                            easing="ease"
                            speed={500}
                            zIndex={1600}
                            showAtBottom={false}
                        />
                        < main > {children} </main>
                    </Provider>
                </>
            )}
        </main>
    );
};

export default ProtectedLayout;